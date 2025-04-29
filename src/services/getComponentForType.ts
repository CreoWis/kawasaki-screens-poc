import { COM0001NavigationBanner } from "@/components/COM0001-navigation-banner";
import { COM0002FooterCommon } from "@/components/COM0002-footer-common";
import { COM0003NewChallengerBanner } from "@/components/COM0003-new-challenger-banner";
import { COM0004BikeSpotlight } from "@/components/COM0004-bike-spotlight";
import { DLR0001DealerHeroBanner } from "@/components/DLR0001-dealer-hero-banner";
import { DLR0002DealerInformationWithImages } from "@/components/DLR0002-dealer-information-with-images";
import { DLR0003DealerInformationWithAddressAndLocation } from "@/components/DLR0003-dealer-information-with-address-and-location";
import { DLR0004OnlineInformationPointer } from "@/components/DLR0004-online-information-pointer";
import { DLR0005GetUpdatesFromDealer } from "@/components/DLR0005-get-updates-from-dealer";
import { KWN0001BikeExplorerWithImages } from "@/components/KWN0001-bike-explorer-with-images";
import { KWN0003BikeSelectorByType } from "@/components/KWN0003-bike-selector-by-type";
import { KWN0004DiscoverEventsInformation } from "@/components/KWN0004-discover-events-information";
import { KWN0005KCareInformation } from "@/components/KWN0005-kcare-information";
import { KWN002FeaturesBikeModelInformation } from "@/components/KWN002-features-bike-model-information";

// Mapping of type to component
const componentMap: Record<string, React.ComponentType<any>> = {
  "COM0001-navigation-banner": COM0001NavigationBanner,
  "COM0002-footer-common": COM0002FooterCommon,
  "COM0003-new-challenger-banner": COM0003NewChallengerBanner,
  "COM0004-bike-spotlight": COM0004BikeSpotlight,
  "KWN0001-bike-explorer-with-images": KWN0001BikeExplorerWithImages,
  "KWN002-features-bike-model-information": KWN002FeaturesBikeModelInformation,
  "KWN0003-bike-selector-by-type": KWN0003BikeSelectorByType,
  "KWN0004-discover-events-information": KWN0004DiscoverEventsInformation,
  "KWN0005-kcare-information": KWN0005KCareInformation,
  "DLR0001-dealer-hero-banner": DLR0001DealerHeroBanner,
  "DLR0002-dealer-information-with-images": DLR0002DealerInformationWithImages,
  "DLR0003-dealer-information-with-address-and-location":
    DLR0003DealerInformationWithAddressAndLocation,
  "DLR0004-online-information-pointer": DLR0004OnlineInformationPointer,
  "DLR0005-get-updates-from-dealer": DLR0005GetUpdatesFromDealer,
};

export function getComponentForType(type: string) {
  return componentMap[type] ?? null;
}
