import { KWN002FeaturesBikeModelInformationProps } from "./types";
import "./styles.css";

export const KWN002FeaturesBikeModelInformation = ({
  data,
}: {
  data: KWN002FeaturesBikeModelInformationProps;
}) => {
  const { title, subtitle, features, backgroundImage } = data ?? {};
  return (
    <section
      className="feature-model"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="feature-model__overlay" />

      {/* Content */}
      <div className="feature-model__content">
        <h2 className="feature-model__title">{title}</h2>
        {subtitle && <p className="feature-model__subtitle">{subtitle}</p>}
        <ul className="feature-model__list">
          {features &&
            features.map((feature, index) => (
              <li key={index} className="feature-model__item">
                <span className="feature-model__icon">✔</span> {feature}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
