import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CursorFollower from "@/components/CursorFollower";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CursorFollower />
      {/* Background Blobs for Glassmorphism Effect */}
      <div className="bg-blob top-[-10%] left-[-10%] bg-[#D4AF37] opacity-20" />
      <div className="bg-blob bottom-[-10%] right-[-10%] bg-[#C5A021] opacity-20 [animation-delay:-5s]" />
      <div className="bg-blob top-[40%] right-[10%] bg-[#FFD700] opacity-10 [animation-delay:-10s]" />
      
      <div className="relative z-10">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
