import { IPageData } from "content/data.types";
import "./VehicleList.css";

export const VehicleList = ({ data }: { data: IPageData }) => {
  const { title, vehicles } = data.vehicleList ?? {};
  return (
    <section className="vehicle-list">
      <div className="vehicle-list__container">
        <h2 className="vehicle-list__title">{title}</h2>

        <div className="vehicle-list__grid">
          {vehicles &&
            vehicles.map((vehicle) => (
              <div key={vehicle.id} className="vehicle-card">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="vehicle-card__image"
                />

                <div className="vehicle-card__content">
                  <div>
                    <h3 className="vehicle-card__name">{vehicle.name}</h3>
                    {vehicle.description && (
                      <p className="vehicle-card__description">
                        {vehicle.description}
                      </p>
                    )}
                  </div>
                  <p className="vehicle-card__price">{vehicle.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
