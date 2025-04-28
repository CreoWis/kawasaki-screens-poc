import React, { useState } from "react";
import "./VehicleSelector.css";
import { IPageData } from "content/data.types";

export const VehicleSelector = ({ data }: { data: IPageData }) => {
  const [bike, setBike] = useState<string>("");
  const { title, subtitle, selectTitle, bikeOptions } =
    data.vehicleSelector ?? {};

  const handleBikeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBike = event.target.value;
    setBike(selectedBike);
  };

  return (
    <section className="vehicle-selector-ui__section">
      <div className="selector-ui__section">
        {/* Title and Subtitle */}
        <h2 className="selector-ui__title">{title}</h2>
        <p className="selector-ui__subtitle">{subtitle}</p>

        {/* Bike Selector */}
        <label className="selector-ui__label" htmlFor="bike">
          {selectTitle}
        </label>
        <select
          id="bike"
          className="selector-ui__select"
          value={bike}
          onChange={handleBikeChange}
        >
          <option value="">Select a bike</option>
          {/* Dynamically render bike options from the passed data */}
          {bikeOptions &&
            bikeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>

        {/* Submit Button */}
        <button
          onClick={() => console.log(bike)}
          className="selector-ui__button"
          disabled={!bike}
        >
          Submit
        </button>

        {/* Image Section */}
        <div className="vehicle-section__image">
          {/* Dynamically set image source based on selected bike */}
          <img src={`/${bike}.jpg`} alt={bike} />
        </div>
      </div>
    </section>
  );
};
