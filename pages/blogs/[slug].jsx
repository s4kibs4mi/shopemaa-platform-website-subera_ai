import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import path from "path";
import fs from "fs";
import QrcnHead from "../../components/QrcnHead";
import {getQrCentraalLabel} from "../../helpers/text-helper";
import {getQrCentraalLink} from "../../helpers/link-helper"; // renamed helper

export async function getServerSideProps({locale, query}) {
    const blogsDirectory = path.join(process.cwd(), "data/blogs");
    const filePath = path.join(blogsDirectory, query.slug + ".json");
    const fileContents = fs.readFileSync(filePath, "utf8");

    return {
        props: {
            messages: (await import(`../../messages/${locale}.json`)).default,
            post: JSON.parse(fileContents),
        },
    };
}

export default function BlogPost({post}) {
    if (!post) {
        return (
            <>
                <QrcnHead/>
                <Navbar/>
                <main className="bg-white">
                    <section className="container-xl py-7 text-center">
                        <h1 className="display-5 fw-bold mb-4" style={{color: "var(--brand-secondary)"}}>
                            Post not found
                        </h1>
                        <p>
                            Sorry, this blog post does not exist.
                            <br/>
                            <Link href="/blogs" className="btn btn-outline-primary mt-3 cta-btn-outline">
                                Back to Blog
                            </Link>
                        </p>
                    </section>
                </main>
                <Footer/>
            </>
        );
    }

    return (
        <>
            <QrcnHead
                title={post.title + " | " + getQrCentraalLabel()}
                description={post.excerpt}
                contentUrl={getQrCentraalLink() + "/blogs/" + post.slug}
                bannerImage={post.image}
            />
            <Navbar/>
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
                        <h1 className="display-4 fw-bold mb-2" style={{color: "var(--brand-secondary)"}}>
                            {post.title}
                        </h1>
                        <div className="d-flex justify-content-center gap-3 mb-3 text-muted small">
                            <span>{post.author}</span>
                            <span>·</span>
                            <span>
                {new Date(post.date).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                })}
              </span>
                        </div>
                        <div className="mb-3">
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
                    </div>
                </section>

                {/* POST IMAGE */}
                {post.image && (
                    <section className="container-xl">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-100 rounded-4 shadow-soft mb-4 mt-4"
                            style={{
                                objectFit: "cover",
                                background: "#f5f7f9",
                            }}
                        />
                    </section>
                )}

                {/* CONTENT */}
                <section className="container-xl py-5" style={{maxWidth: 780}}>
                    <article className="blog-content" dangerouslySetInnerHTML={{__html: post.content}}/>
                    <div className="mt-5">
                        <Link href="/blogs" className="btn btn-outline-primary px-4 py-2 cta-btn-outline"
                              style={{borderRadius: 25}}>
                            ← Back to Blog
                        </Link>
                    </div>
                </section>

                {/* Minimal CSS for typography */}
                <style jsx>{`
                    .blog-content {
                        font-size: 1.17rem;
                        color: rgba(var(--brand-secondary-rgb), 0.92);
                        line-height: 1.7;
                    }

                    .blog-content h2 {
                        margin-top: 2.1em;
                        color: var(--brand-secondary);
                        font-size: 1.5em;
                        font-weight: 700;
                    }

                    .blog-content ul {
                        margin: 1.3em 0 1.5em 1.5em;
                        padding-left: 1em;
                    }

                    .blog-content li {
                        margin-bottom: 0.7em;
                    }

                    .blog-content blockquote {
                        margin: 2em 0;
                        padding: 1.2em 1.5em;
                        background: var(--brand-secondary-accent);
                        border-left: 5px solid var(--brand-secondary);
                        border-radius: 0.7em;
                        font-style: italic;
                        color: var(--brand-secondary);
                    }

                    .blog-content a {
                        color: var(--brand-primary);
                        text-decoration: underline;
                    }
                `}</style>
            </main>
            <Footer/>
        </>
    );
}
