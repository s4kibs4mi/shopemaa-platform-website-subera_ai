FROM node:21-alpine AS base

# Step 1. Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

COPY . .

WORKDIR /app
RUN yarn install
RUN yarn build

# Step 2. Production image, copy all the files and run next
FROM node:21-alpine AS runner

RUN apk update
RUN apk add curl wget

WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Note: Don't expose ports here, Compose will handle that for us
CMD ["node", "server.js"]
