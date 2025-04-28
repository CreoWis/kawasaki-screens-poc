export interface Vehicle {
  id: string;
  name: string;
  image: string;
  price: string;
  description?: string;
}

export interface VehicleListProps {
  title: string;
  vehicles: Vehicle[];
}
