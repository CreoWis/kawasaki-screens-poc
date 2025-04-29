import { AboutSectionProps } from "@/components/DLR0002-dealer-information-with-images/types";
import { CtaBannerProps } from "@/components/COM0003-new-challenger-banner/types";
import { DealerInfoProps } from "@/components/DLR0003-dealer-information-with-address-and-location/types";
import { DiscoverEventProps } from "@/components/KWN0004-discover-events-information/types";
import { ExploreVehiclesProps } from "@/components/KWN0001-bike-explorer-with-images/types";
import { FeatureModelProps } from "@/components/KWN002-features-bike-model-information/types";
import { FooterProps } from "@/components/COM0002-footer-common/types";
import { HeroBannerProps } from "@/components/hero-banner/HeroBanner.types";
import { VehicleListProps } from "@/components/vehicle-list/VehicleList.types";
import { NavbarProps } from "@/components/COM0001-navigation-banner/types";
import { UpdateSectionProps } from "@/components/DLR0005-get-updates-from-dealer/types";
import { IVehicleSelectorData } from "@/components/KWN0003-bike-selector-by-type/types";
import { OnlinePointerProps } from "@/components/DLR0004-online-information-pointer/types";
import { KCareData } from "@/components/KWN0005-kcare-information/types";
import { DealerHeroBannerProps } from "@/components/DLR0001-dealer-hero-banner/types";
import { LatestModelProps } from "@/components/COM0004-bike-spotlight/types";

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
