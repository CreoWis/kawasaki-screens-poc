import { IPageData } from "content/data.types";
import "./GetUpdateSection.css";

export const GetUpdateSection = ({ data }: { data: IPageData }) => {
  const { title, updateDescription, releaseDate, buttonLabel, buttonHref } =
    data.updateSection ?? {};
  return (
    <section className="bike-update-section">
      <div className="bike-update-section__container">
        <div className="bike-update-section__content">
          <h2 className="bike-update-section__title">{title}</h2>
          <p className="bike-update-section__description">
            {updateDescription}
          </p>
          <p className="bike-update-section__release-date">{releaseDate}</p>
          <a href={buttonHref} className="bike-update-section__button">
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
};
