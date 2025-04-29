import { CDLR0002DealerInformationWithImagesProps } from "./types";
import "./styles.css";

export const DLR0002DealerInformationWithImages = ({
  data,
}: {
  data: CDLR0002DealerInformationWithImagesProps;
}) => {
  const {
    imageUrl,
    subtitle,
    title,
    description,
    primaryButtonLabel,
    primaryButtonLink,
    secondaryButtonLabel,
    secondaryButtonLink,
  } = data ?? {};
  return (
    <section className="dealer-info-img">
      {/* Left Side: Image */}
      <div className="dealer-info-img__image">
        <img src={imageUrl} alt={title} />
      </div>

      {/* Right Side: Content */}
      <div className="dealer-info-img__content">
        <p className="dealer-info-img__subtitle">{subtitle}</p>
        <h2 className="dealer-info-img__title">{title}</h2>
        <p className="dealer-info-img__description">{description}</p>
        <div className="dealer-info-img__buttons">
          <a href={primaryButtonLink} className="dealer-info-img__button">
            {primaryButtonLabel}
          </a>
          <a
            href={secondaryButtonLink}
            className="dealer-info-img__button dealer-info-img__button--secondary"
          >
            {secondaryButtonLabel}
          </a>
        </div>
      </div>
    </section>
  );
};
