import { IPageData } from "content/data.types";
import "./NewChallengeBanner.css";

export const NewChallengeBanner = ({ data }: { data: IPageData }) => {
  const { title, subtitle, buttonLabel, buttonHref, backgroundImage } =
    data.newChallengeBanner ?? {};
  return (
    <section
      className="cta-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="cta-banner__overlay" />

      {/* Content */}
      <div className="cta-banner__content">
        <h2 className="cta-banner__title">{title}</h2>
        {subtitle && <p className="cta-banner__subtitle">{subtitle}</p>}
        <a href={buttonHref} className="cta-banner__button">
          {buttonLabel}
        </a>
      </div>
    </section>
  );
};
