import "./styles.css";
import { KWN0005KCareInformationProps } from "./types";

export const KWN0005KCareInformation = ({
  data,
}: {
  data: KWN0005KCareInformationProps;
}) => {
  const {
    title,
    description,
    buttonLabel,
    buttonHref,
    largeImageUrl,
    smallImages = [],
    navigationItems = [],
  } = data ?? {};

  return (
    <section className="kcare-section">
      <div className="kcare-top">
        <div className="kcare-image-container">
          {largeImageUrl && (
            <img
              src={largeImageUrl}
              alt="Large KCare"
              className="kcare-large-image"
            />
          )}
        </div>

        <div className="kcare-text-container">
          {title && <h2 className="kcare-title">{title}</h2>}
          {description && <p className="kcare-description">{description}</p>}
          {buttonLabel && buttonHref && (
            <a href={buttonHref} className="kcare-button">
              {buttonLabel}
            </a>
          )}

          {smallImages.length > 0 && (
            <div className="kcare-small-images">
              {smallImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Small ${idx}`}
                  className="kcare-small-image"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {navigationItems.length > 0 && (
        <div className="kcare-navigation">
          {navigationItems.map((item, idx) => (
            <div
              key={idx}
              className={`kcare-navigation-item ${
                item.isActive ? "active" : ""
              }`}
            >
              <span className="kcare-arrow">{item.isActive ? "🡆" : "➔"}</span>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
