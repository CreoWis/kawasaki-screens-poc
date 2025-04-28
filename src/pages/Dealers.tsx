import pageData from "../../content/data.json";
import { DealerInfo } from "@/components/dealer-info/DealerInfo";
import { BikeHighlight } from "@/components/bike-highlight/BikeHighlight";
import { Footer } from "@/components/footer/Footer";
import { GetUpdateSection } from "@/components/get-update-section/GetUpdateSection";
import { ExploreSection } from "@/components/explore-section/ExploreSection";
import OnlinePointer from "@/components/online-pointer/OnlinePointer";
import { DealerHeroBanner } from "@/components/dealer-hero-banner/DealerHeroBanner";
import { LatestModel } from "@/components/latest-model/LatestModel";

const Dealers = () => {
  return (
    <>
      <DealerHeroBanner data={pageData} />
      <BikeHighlight data={pageData} />
      <ExploreSection data={pageData} />
      <DealerInfo data={pageData} />
      <LatestModel data={pageData} />
      <OnlinePointer data={pageData} />
      <GetUpdateSection data={pageData} />
      <Footer data={pageData} />
    </>
  );
};

export default Dealers;
