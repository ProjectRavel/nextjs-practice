import Link from "next/link";

type ButtonProps = {
  text: string;
  url: string;
};

const Button = ({ text, url }: ButtonProps) => {
  return (
    <Link href={url}>
      <button
        className="px-8 py-3 rounded-lg font-semibold transition-colors hover:opacity-90 cursor-pointer"
        style={{
          backgroundColor: "var(--primary)",
          color: "white",
        }}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
