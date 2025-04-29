import { KWN0001BikeExplorerWithImagesProps } from "./types";
import "./styles.css";

export const KWN0001BikeExplorerWithImages = ({
  data,
}: {
  data: KWN0001BikeExplorerWithImagesProps;
}) => {
  const { title, categories } = data ?? {};
  return (
    <section className="explore-section">
      <div className="explore-section__container">
        <h2 className="explore-section__title">{title}</h2>

        <div className="explore-section__grid">
          {categories &&
            categories.map((category) => (
              <div key={category.id} className="explore-section__card">
                {/* Icon */}
                <img
                  src={category.icon}
                  alt={category.name}
                  className="explore-section__icon"
                />

                {/* Name */}
                <span className="explore-section__name">{category.name}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
