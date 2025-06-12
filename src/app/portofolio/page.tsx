import Image from "next/image";
import Link from "next/link";

export default function Portofolio() {
  const galleries = [
    {
      title: "Illustration",
      href: "/illustration",
      image: "/illustrationporto.png",
    },
    {
      title: "Website",
      href: "/website",
      image: "/codingporto.png",
    },
    {
      title: "Application",
      href: "/application",
      image: "/appporto.png",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-[--background]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[--primary] tracking-tight">
            Explore Our Works
          </h1>
          <p className="mt-4 text-[--muted-foreground] max-w-xl mx-auto">
            Select a gallery below to discover unique and crafted projects from
            our creative journey.
          </p>
        </div>

        {/* Gallery Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleries.map(({ title, href, image }) => (
            <Link
              key={title}
              href={`/portofolio${href}`}
              className="group relative overflow-hidden rounded-3xl border border-[--muted-foreground]/30 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
              >
              <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition duration-300" />
              {/* Text */}
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-xl font-bold tracking-wide">{title}</h2>
                <p className="text-sm text-white/80">View Gallery</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
