import Image from "next/image";
import { notFound } from "next/navigation";

export default async function BlogPost({ params }: { params: { id: string } }) {
  const id = await params.id;

  const res = await fetch(`http://localhost:3000/api/posts/${id}`);

  if (!res.ok) {
    notFound();
  }

  const post = await res.json();

  return (
    <section className="min-h-screen px-6 py-20 md:px-24 text-[var(--foreground)] bg-[var(--background)]">
      <article className="max-w-8xl mx-auto space-y-20">
        {/* Header: Judul + Gambar Samping */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {post.title}
              </h1>
              <p className="text-[var(--muted-foreground)] text-lg">
                {post.desc}
              </p>
            </div>

            {/* Profile */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Image
                src="/profile/johndoe.png" // Ganti dengan path ke gambar profil kamu
                alt="John Doe"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-[var(--foreground)]">
                  {post.username}
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  @johndoe
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/blog/hero-post.png"
              alt="Hero Blog Image"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Konten Blog */}
        <div className="prose prose-invert prose-lg max-w-none text-[var(--foreground)] prose-headings:text-[var(--primary)] prose-a:text-[var(--primary)] prose-a:underline-offset-4 prose-img:rounded-xl">
          <p>{post.content}</p>
        </div>
      </article>
    </section>
  );
}
