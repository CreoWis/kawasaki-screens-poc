import { IPageData } from "content/data.types";
import "./LatestModel.css";

export const LatestModel = ({ data }: { data: IPageData }) => {
  const { heading, subheading, discoverLink, configureLink } =
    data.latestModel ?? {};
  return (
    <section className="model-hero-banner">
      <div className="model-hero-banner__content">
        <h1 className="model-hero-banner__heading">{heading}</h1>
        <p className="model-hero-banner__subheading">{subheading}</p>
        <div className="model-hero-banner__buttons">
          <a href={discoverLink} className="model-hero-banner__button">
            Discover More
          </a>
          <a
            href={configureLink}
            className="model-hero-banner__button secondary"
          >
            Configure Now
          </a>
        </div>
      </div>
    </section>
  );
};
