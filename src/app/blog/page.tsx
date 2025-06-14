import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Blog() {
  const posts = await getData();

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
          {posts.map((post: { id: number; title: string; body: string; date: string }) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <article className="flex flex-col md:flex-row items-start gap-6 rounded-2xl p-4 transition-colors duration-300 group">
                {/* Image */}
                <div className="w-full md:w-1/3 overflow-hidden rounded-xl shadow-sm">
                  <Image
                    src="/illustrationporto.png"
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
                    {post.body}
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
