import Header from "@/components/landing/Header";
import ForWho from "@/components/landing/ForWho";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import Compliance from "@/components/landing/Compliance";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Privacy from "@/components/landing/Privacy";
import Terms from "@/components/landing/Terms";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ForWho />
      <HowItWorks />
      <Benefits />
      <Compliance />
      <FAQ />
      <Contact />
      <Privacy />
      <Terms />
      <Footer />
    </div>
  );
};

export default Index;