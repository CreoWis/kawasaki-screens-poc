import { COM0004BikeSpotlightProps } from "./types";
import "./styles.css";

export const COM0004BikeSpotlight = ({
  data,
}: {
  data: COM0004BikeSpotlightProps;
}) => {
  const { heading, subheading, discoverLink, configureLink } = data ?? {};
  return (
    <section className="bike-spotlight">
      <div className="bike-spotlight__content">
        <h1 className="bike-spotlight__heading">{heading}</h1>
        <p className="bike-spotlight__subheading">{subheading}</p>
        <div className="bike-spotlight__buttons">
          <a href={discoverLink} className="bike-spotlight__button">
            Discover More
          </a>
          <a
            href={configureLink}
            className="bike-spotlight__button secondary"
          >
            Configure Now
          </a>
        </div>
      </div>
    </section>
  );
};
