import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import { LandingServices } from "@/components/landing-services";
import { LandingFooter } from "@/components/landing-footer";
import { LandingCta } from "@/components/landing-cta";
import { LadingQuestions } from "@/components/landing-questions";

const LandingPage = () => {
  return ( 
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingServices />
      <LandingContent />
      <LadingQuestions />
      <LandingCta />
      <LandingFooter />
    </div>
   );
}
 
export default LandingPage;