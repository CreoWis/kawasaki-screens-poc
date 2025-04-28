import "./BikeHighlight.css";
import { IPageData } from "content/data.types";

export const BikeHighlight = ({ data }: { data: IPageData }) => {
  const {
    imageUrl,
    subtitle,
    title,
    description,
    primaryButtonLabel,
    primaryButtonLink,
    secondaryButtonLabel,
    secondaryButtonLink,
  } = data.bikeHighlight ?? {};
  return (
    <section className="about-section">
      {/* Left Side: Image */}
      <div className="about-section__image">
        <img src={imageUrl} alt={title} />
      </div>

      {/* Right Side: Content */}
      <div className="about-section__content">
        <p className="about-section__subtitle">{subtitle}</p>
        <h2 className="about-section__title">{title}</h2>
        <p className="about-section__description">{description}</p>
        <div className="about-section__buttons">
          <a href={primaryButtonLink} className="about-section__button">
            {primaryButtonLabel}
          </a>
          <a
            href={secondaryButtonLink}
            className="about-section__button about-section__button--secondary"
          >
            {secondaryButtonLabel}
          </a>
        </div>
      </div>
    </section>
  );
};
