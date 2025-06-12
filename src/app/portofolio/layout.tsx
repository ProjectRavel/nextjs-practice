export default function PortofolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="text-5xl font-bold">Our Works</h1>
      {children}
    </>
  );
}
