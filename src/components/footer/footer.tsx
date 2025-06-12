import { FaWhatsapp, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      id: 1,
      icon: <FaWhatsapp />,
      href: "https://wa.me/yourwhatsapplink",
      label: "WhatsApp",
    },
    {
      id: 2,
      icon: <FaGithub />,
      href: "https://github.com/yourgithub",
      label: "GitHub",
    },
    {
      id: 3,
      icon: <FaInstagram />,
      href: "https://instagram.com/yourinstagram",
      label: "Instagram",
    },
    {
      id: 4,
      icon: <FaDiscord />,
      href: "https://discord.com/users/yourdiscordid",
      label: "Discord",
    },
  ];

  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm select-none">
          &copy; {year} ProjectRavel. All rights reserved.
        </div>

        <div className="flex space-x-6 text-2xl">
          {socialLinks.map(({ id, icon, href, label }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-[var(--primary)] transition"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
