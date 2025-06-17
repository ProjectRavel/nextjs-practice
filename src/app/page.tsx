import Image from "next/image";
import Button from "@/components/button/button";
import SignIn from "@/components/googleSignIn";

export default function Home() {
  return (
    <section className="flex items-center justify-between min-h-[80vh] px-8 py-12">
      {/* Kiri - teks */}
      <div className="max-w-lg">
        <h1
          className="text-5xl font-extrabold mb-6"
          style={{
            background: `linear-gradient(to bottom, var(--primary), #b2ff98)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Better Design for your Digital Products.
        </h1>

        <p className="text-lg mb-8" style={{ color: "var(--foreground)" }}>
          Create seamless, beautiful user experiences with cutting-edge design
          and technology. Let’s build something amazing together.
        </p>

        <Button text="See our work" url="/about" />

        <SignIn />
      </div>

      {/* Kanan - gambar */}
      <div className="max-w-md">
        <Image
          src="/hero.svg"
          alt="Hero illustration"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
