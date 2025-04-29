export interface VehicleCategory {
  id: string;
  name: string;
  icon: string; // URL or icon component
}

export interface KWN0001BikeExplorerWithImagesProps {
  title?: string;
  categories: VehicleCategory[];
}
