import Image from "next/image";

export default function BlogPost() {
  return (
    <section className="min-h-screen px-6 py-20 md:px-24 text-[var(--foreground)] bg-[var(--background)]">
      <article className="max-w-8xl mx-auto space-y-20">
        {/* Header: Judul + Gambar Samping */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Ini Judul{" "}
                <span className="text-[var(--primary)]">Postnya Nanti</span>
              </h1>
              <p className="text-[var(--muted-foreground)] text-lg">
                Ini adalah paragraf pembuka atau subjudul yang menjelaskan inti dari
                artikel blog ini.
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
                <p className="font-semibold text-[var(--foreground)]">John Doe</p>
                <p className="text-sm text-[var(--muted-foreground)]">@johndoe</p>
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
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
            sunt repellendus? Provident, blanditiis? Maxime voluptatum nihil
            aspernatur iure error laborum, numquam nobis quia, placeat magnam
            illo odit quaerat aperiam quasi? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Temporibus, doloremque nihil. Neque,
            ex! Sint facilis non, laborum, quis mollitia ipsa soluta adipisci
            itaque neque nam exercitationem sunt autem voluptas deserunt. Ut
            inventore sit quidem incidunt. Obcaecati doloribus explicabo
            corporis qui accusantium ut soluta maiores ratione error pariatur!
            Dignissimos asperiores libero ratione praesentium sapiente
            blanditiis error, suscipit qui est perspiciatis repellat. Dolor
            minus laborum repellat nihil, consequuntur cumque quod praesentium
            non, aut aperiam alias in ad? Suscipit id sit facere architecto
            magni blanditiis pariatur ipsa, et, autem veritatis ullam in nobis!
          </p>
        </div>
      </article>
    </section>
  );
}
