import Link from "next/link";

export default function BlogListPage({blogPosts}) {
    return (
        <main className="bg-white">
            {/* HERO */}
            <section
                className="py-5 py-md-7"
                style={{
                    background: "linear-gradient(120deg, var(--brand-secondary-accent) 70%, #fff 100%)",
                    borderBottom: "1px solid rgba(var(--brand-secondary-rgb), 0.12)",
                }}
            >
                <div className="container-xl text-center">
          <span
              className="badge rounded-pill mb-2"
              style={{background: "var(--brand-secondary)", color: "#fff", fontSize: "1rem"}}
          >
            Blog
          </span>
                    <h1 className="display-4 fw-bold mb-3 text-brand-main">
                        SpoonSync Insights
                    </h1>
                    <p className="lead mb-0 mx-auto"
                       style={{maxWidth: 560, color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                        Tips, stories, and guides on QR menus, orders, tables, staff, and data‑driven hospitality.
                    </p>
                </div>
            </section>

            {/* BLOG LIST */}
            <section className="container-xl py-7">
                <div className="row gy-5">
                    {blogPosts.map((post) => (
                        <div key={post.slug} className="col-12 col-md-6 col-lg-4 d-flex">
                            <Link href={`/blogs/${post.slug}`} className="w-100 text-decoration-none">
                                <div
                                    className="card h-100 border-0 rounded-4 overflow-hidden hover-lift"
                                    style={{background: "#fff"}}
                                >
                                    {post.image && (
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            style={{width: "100%", objectFit: "cover"}}
                                        />
                                    )}

                                    <div className="card-body d-flex flex-column">
                                        <div className="mb-2">
                                            {post.tags &&
                                                post.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="badge rounded-pill me-2 mb-1"
                                                        style={{
                                                            background: "var(--brand-secondary-accent)",
                                                            color: "var(--brand-secondary)",
                                                            fontWeight: 500,
                                                            fontSize: "0.97rem",
                                                        }}
                                                    >
                            {tag}
                          </span>
                                                ))}
                                        </div>

                                        <h2 className="h5 fw-bold mb-2 text-brand-main">{post.title}</h2>

                                        <div className="text-muted mb-3"
                                             style={{fontSize: "1.03rem", minHeight: "46px"}}>
                                            {post.excerpt}
                                        </div>

                                        <div
                                            className="mt-auto small d-flex justify-content-between align-items-center text-muted">
                      <span>
                        {post.author} &middot;{" "}
                          {new Date(post.date).toLocaleDateString(undefined, {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                          })}
                      </span>
                                            <span style={{
                                                color: "var(--brand-primary)",
                                                fontWeight: 600
                                            }}>Read &rarr;</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Minimal CSS for hover effect */}
            <style jsx>{`
                .hover-lift {
                    transition: transform 0.18s ease, box-shadow 0.18s ease;
                    box-shadow: 0 2px 24px rgba(var(--brand-secondary-rgb), 0.06);
                }

                .hover-lift:hover {
                    box-shadow: 0 8px 36px rgba(var(--brand-secondary-rgb), 0.16);
                    transform: translateY(-5px) scale(1.012);
                }
            `}</style>
        </main>
    );
}
