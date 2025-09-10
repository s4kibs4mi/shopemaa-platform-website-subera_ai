FROM node:20-alpine AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
RUN apk add --no-cache libc6-compat

FROM base AS deps
# Copy only lock + manifest to leverage Docker layer cache
COPY package.json package-lock.json* ./
# If there's a lockfile, use npm ci; otherwise fall back to npm i
RUN if [ -f package-lock.json ]; then \
      npm ci --no-audit --no-fund; \
    else \
      npm i --no-audit --no-fund; \
    fi

FROM base AS builder
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx --yes next telemetry disable && npm run build

FROM base AS prod-deps
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then \
      npm ci --omit=dev --no-audit --no-fund; \
    else \
      npm i --omit=dev --no-audit --no-fund; \
    fi

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Non-root user
RUN addgroup -g 1001 -S nodejs \
 && adduser -S nextjs -u 1001 -G nodejs \
 && apk add --no-cache curl

# Copy runtime artifacts only
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder   /app/.next ./.next
COPY --from=builder   /app/public ./public
COPY --from=builder   /app/package.json ./package.json

USER nextjs
EXPOSE 3000

# Simple healthcheck (adjust path if you have a dedicated health route)
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
  CMD curl -fsS http://127.0.0.1:3000/ || exit 1

# For non-standalone builds, start the Next server
CMD ["node", "node_modules/next/dist/bin/next", "start", "-p", "3000"]
