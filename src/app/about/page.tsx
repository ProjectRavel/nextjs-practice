import Image from "next/image";
import Button from "@/components/button/button";

export default function About() {
  return (
    <section className="w-full">
      {/* Full-width Image with Overlay Text */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/illustrationporto.png"
          alt="About"
          fill
          className="object-cover grayscale"
        />

        {/* Overlay Text Box */}
        <div className="absolute bottom-5 left-5 bg-[var(--primary)] text-white p-2 max-w-xl rounded-tr-2xl">
          <h1 className="text-3xl md:text-4xl font-bold">
            Digital StoryTeller
          </h1>
          <p className="text-sm md:text-base mt-2">
            HandCrafting award-winning digital experiences with a touch of
            narrative and soul.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full py-16">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Left Side: Who Are We */}
          <div className="w-full space-y-4 text-left">
            <h2 className="text-2xl font-semibold text-[--foreground]">
              Who Are We
            </h2>
            <p className="text-[--muted-foreground] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              voluptatum ratione doloremque, mollitia natus rerum quod dolores?
              Recusandae autem omnis excepturi laboriosam dolorem placeat,
              veritatis enim. Ad recusandae maiores quae.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              expedita fuga inventore earum numquam provident quam enim, dolorum
              eaque repellendus veritatis minus! Maxime, modi dolorem. Expedita
              corporis nam placeat impedit.
            </p>
          </div>

          {/* Right Side: What We Do */}
          <div className="w-full space-y-4 text-left">
            <h2 className="text-2xl font-semibold text-[--foreground]">
              What We Do
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              error quidem atque id officia dolores, deleniti numquam minus qui
              excepturi autem quo voluptatum eligendi cum accusamus doloremque
              maiores explicabo exercitationem.
            </p>
            <ul className="text-[--muted-foreground] list-disc list-inside space-y-2">
              <li>Custom Web Development</li>
              <li>Branding & Visual Identity</li>
              <li>Interactive Storytelling</li>
              <li>Creative Content Strategy</li>
            </ul>
          </div>
            <Button text="Contact Us" url="/contact" />
        </div>
      </div>
    </section>
  );
}
