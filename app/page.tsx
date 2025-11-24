import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import CompareSlider from "@/components/CompareSlider";
import Features from "@/components/Features";
import ImpactMetrics from "@/components/ImpactMetrics";
import ComparisonTable from "@/components/ComparisonTable";
import AdminBento from "@/components/AdminBento";
import FAQ from "@/components/FAQ";
import ContactHub from "@/components/ContactHub";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />
      <Hero />
      <Showcase />
      <CompareSlider />
      <Features />
      <ImpactMetrics />
      <ComparisonTable />
      <AdminBento />
      <FAQ />
      <ContactHub />
      <Footer />
    </main>
  );
}
