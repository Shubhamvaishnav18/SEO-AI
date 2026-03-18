import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Languages from "./components/Languages";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

import { faqs, languages, features, content } from "./data/landingData";
import Analyze from "./components/Analyze";
import Connect from "./components/Connect";
import Experience from "./components/Experience";
import Process from "./components/Process";
import Visuals from "./components/Visuals";
import Pricing from "./components/Pricing";
import ContentSection from "./components/ContentSection";
import Features from "./components/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Process />
      <Pricing />
      <ContentSection content={content} />
      <Analyze />
      <Connect />
      <Visuals />
      <Features features={features} />
      <Experience />
      <Languages languages={languages} />
      <FAQ faqs={faqs} />
      <Footer />
    </>
  );
}