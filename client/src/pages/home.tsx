import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Reviews from "@/components/sections/reviews";
import Cocktails from "@/components/sections/cocktails";
import Gallery from "@/components/sections/gallery";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Cocktails />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
