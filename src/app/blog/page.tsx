import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "How to Build a Stunning Portfolio in 2025",
      description:
        "Step-by-step guide for creating a professional and modern portfolio using modern web tools.",
      date: "June 5, 2025",
      slug: "build-stunning-portfolio-2025",
      image: "/blog/portfolio.png",
    },
    {
      title: "Understanding Dark Mode Design Patterns",
      description:
        "Explore best practices and pitfalls when designing dark mode interfaces.",
      date: "May 28, 2025",
      slug: "dark-mode-design-patterns",
      image: "/blog/darkmode.png",
    },
    {
      title: "Boost UX with Motion & Microinteractions",
      description:
        "Small animations can make a big impact. Learn how to use them effectively.",
      date: "May 20, 2025",
      slug: "ux-motion-microinteractions",
      image: "/blog/motion.png",
    },
  ];

  return (
    <section className="min-h-screen px-6 py-20 md:px-16 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Blog Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Our <span className="text-[var(--primary)]">Blog</span>
          </h1>
          <p className="text-base md:text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Thoughts, guides, and inspiration around web design, development,
            and digital experience.
          </p>
        </header>

        {/* Blog List */}
        <div className="space-y-12">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <article className="flex flex-col md:flex-row items-start gap-6 rounded-2xl p-4 transition-colors duration-300 group">
                {/* Image */}
                <div className="w-full md:w-1/3 overflow-hidden rounded-xl shadow-sm">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3 space-y-2">
                  <h2 className="text-2xl font-semibold group-hover:underline text-[var(--primary)]">
                    {post.title}
                  </h2>
                  <p className="text-[var(--muted-foreground)] text-sm md:text-base">
                    {post.description}
                  </p>
                  <div className="text-xs text-[var(--muted-foreground)] mt-1">
                    📅 {post.date}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
