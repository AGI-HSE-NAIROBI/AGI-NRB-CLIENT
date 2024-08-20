import Header from "./components/header";
import Hero from "./components/hero";
import OurPurpose from "./components/ourPurpose";
import CTA from "./components/cta";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* <Header /> */}
      <Hero />
      <OurPurpose />
      <CTA />
      <Footer />
    </main>
  );
}
