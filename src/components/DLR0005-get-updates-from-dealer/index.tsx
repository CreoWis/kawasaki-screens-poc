import { DLR0005GetUpdatesFromDealerProps } from "./types";
import "./styles.css";

export const DLR0005GetUpdatesFromDealer = ({
  data,
}: {
  data: DLR0005GetUpdatesFromDealerProps;
}) => {
  const { title, updateDescription, releaseDate, buttonLabel, buttonHref } =
    data ?? {};
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
