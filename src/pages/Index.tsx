
import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/ServicesOverview";
import TrustIndicators from "@/components/sections/TrustIndicators";
import AboutPreview from "@/components/sections/AboutPreview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import AttractiveHooks from "@/components/sections/AttractiveHooks";
import TestimonialsPreview from "@/components/sections/TestimonialsPreview";
import CallToAction from "@/components/sections/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustIndicators />
      <Services />
      <AboutPreview />
      <FeaturedProjects />
      <AttractiveHooks />
      <TestimonialsPreview />
      <CallToAction />
    </Layout>
  );
};

export default Index;
