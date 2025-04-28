export interface VehicleCategory {
  id: string;
  name: string;
  icon: string; // URL or icon component
}

export interface ExploreVehiclesProps {
  title?: string;
  categories: VehicleCategory[];
}
