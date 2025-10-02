import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Lazy load below-the-fold components
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="h-96 bg-gray-50" />
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="h-64 bg-white" />
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="h-96 bg-gray-50" />
});
const PWAInstaller = dynamic(() => import("@/components/PWAInstaller"));

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <PWAInstaller />
    </div>
  );
}
