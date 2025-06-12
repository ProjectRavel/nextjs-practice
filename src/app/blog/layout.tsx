export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen px-4 md:px-8 py-10">
      {/* Main Content */}
      <main className="space-y-8">{children}</main>
    </div>
  );
}
