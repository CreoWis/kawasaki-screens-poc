import { AboutSectionProps } from "@/components/bike-highlight/BikeHighlight.types";
import { CtaBannerProps } from "@/components/new-challenge-banner/NewChallengeBanner.types";
import { DealerInfoProps } from "@/components/dealer-info/DealerInfo.types";
import { DiscoverEventProps } from "@/components/discover-event/DiscoverEvent.types";
import { ExploreVehiclesProps } from "@/components/explore-section/ExploreSection.types";
import { FeatureModelProps } from "@/components/feature-model/FeatureModel.types";
import { FooterProps } from "@/components/footer/Footer.types";
import { HeroBannerProps } from "@/components/hero-banner/HeroBanner.types";
import { VehicleListProps } from "@/components/vehicle-list/VehicleList.types";
import { NavbarProps } from "@/components/navbar/Navbar.types";
import { UpdateSectionProps } from "@/components/get-update-section/GetUpdateSection.types";
import { IVehicleSelectorData } from "@/components/vehicle-selector/VehicleSelector.types";
import { OnlinePointerProps } from "@/components/online-pointer/OnlinePointer.types";
import { KCareData } from "@/components/k-care/KCare.types";
import { DealerHeroBannerProps } from "@/components/dealer-hero-banner/DealerHeroBanner.types";
import { LatestModelProps } from "@/components/latest-model/LatestModel.types";

export interface IPageData {
  navbar?: NavbarProps;
  heroBanner?: HeroBannerProps;
  bikeHighlight?: AboutSectionProps;
  featureModel?: FeatureModelProps;
  exploreSection?: ExploreVehiclesProps;
  newChallengeBanner?: CtaBannerProps;
  vehicleSelector?: IVehicleSelectorData;
  updateSection?: UpdateSectionProps;
  vehicleList?: VehicleListProps;
  dealerHeroBanner?: DealerHeroBannerProps;
  dealerInfo?: DealerInfoProps;
  discoverEvent?: DiscoverEventProps;
  latestModel?: LatestModelProps;
  onlinePointer?: OnlinePointerProps;
  kCare?: KCareData;
  footer?: FooterProps;
}
