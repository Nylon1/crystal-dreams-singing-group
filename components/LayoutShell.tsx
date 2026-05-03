import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#fcf8ff] text-slate-950">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}