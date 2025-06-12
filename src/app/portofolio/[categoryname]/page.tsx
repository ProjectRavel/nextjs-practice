import Image from "next/image";

export default function Category({
  params,
}: {
  params: { categoryname: string };
}) {
  const categoryImages: Record<string, { src: string; alt: string }> = {
    illustration: {
      src: "/illustrationporto.png",
      alt: "Illustration Portfolio",
    },
    application: {
      src: "/appporto.png",
      alt: "Application Portfolio",
    },
    website: {
      src: "/codingporto.png",
      alt: "Website Portfolio",
    },
  };

  return (
    <section className="min-h-screen px-6 py-16 md:px-16 text-[var(--foreground)] bg-[var(--background)]">
      <div className="max-w-5xl mx-auto">
        {/* Hero Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Explore Category:{" "}
            <span className="text-[var(--primary)] capitalize">
              {params.categoryname}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--muted-foreground)]">
            Discover projects, portfolios, and creativity curated just for this
            category.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Textual Content */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[var(--primary)]">
              Creative Portfolio
            </h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              magnam inventore accusamus harum cupiditate magni voluptatibus
              delectus soluta sunt itaque laudantium laboriosam recusandae
              aliquam expedita, quasi molestiae aperiam qui? Adipisci!
            </p>
          </div>

          {/* Image Content */}
          <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
            {categoryImages[params.categoryname] && (
              <Image
                src={categoryImages[params.categoryname].src}
                alt={categoryImages[params.categoryname].alt}
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
