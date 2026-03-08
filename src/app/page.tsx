import AnnouncementBar from "@/components/AnnouncementBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import About from "@/components/About";
import CoffeesSection from "@/components/CoffeesSection";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <Hero />
      <MarqueeStrip />
      <About />
      <CoffeesSection />
      <Process />
      <Footer />
      <ScrollReveal />
    </>
  );
}
