import { NewChallengeBanner } from "@/components/new-challenge-banner/NewChallengeBanner";
import { DiscoverEvent } from "@/components/discover-event/DiscoverEvent";
import { ExploreSection } from "@/components/explore-section/ExploreSection";
import { FeatureModel } from "@/components/feature-model/FeatureModel";
import { Footer } from "@/components/footer/Footer";
import { HeroBanner } from "@/components/hero-banner/HeroBanner";
import { VehicleSelector } from "@/components/vehicle-selector/VehicleSelector";
import pageData from "../../content/data.json";
import { KCare } from "@/components/k-care/KCare";

const Landing = () => {
  return (
    <>
      <HeroBanner data={pageData} />
      <ExploreSection data={pageData} />
      <NewChallengeBanner data={pageData} />
      <FeatureModel data={pageData} />
      <NewChallengeBanner data={pageData} />
      <NewChallengeBanner data={pageData} />
      <VehicleSelector data={pageData} />
      <DiscoverEvent data={pageData} />
      <KCare data={pageData} />
      <Footer data={pageData} />
    </>
  );
};

export default Landing;
