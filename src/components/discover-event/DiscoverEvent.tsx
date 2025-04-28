import { IPageData } from "content/data.types";
import "./DiscoverEvent.css";

export const DiscoverEvent = ({ data }: { data: IPageData }) => {
  const {
    eventTitle,
    eventDescription,
    eventDate,
    speakers,
    schedule,
    buttonLabel,
    buttonHref,
    backgroundImage,
  } = data.discoverEvent ?? {};
  return (
    <section
      className="discover-event"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="discover-event__overlay" />
      <div className="discover-event__content">
        <h1 className="discover-event__title">{eventTitle}</h1>
        <p className="discover-event__description">{eventDescription}</p>
        <p className="discover-event__date">Date: {eventDate}</p>

        {/* Event Schedule and Speakers Section side by side */}
        <div className="discover-event__content-row">
          {/* Event Schedule */}
          <div className="discover-event__schedule">
            <h2 className="discover-event__schedule-title">Event Schedule</h2>
            <ul className="discover-event__schedule-list">
              {schedule &&
                schedule.map((item, index) => (
                  <li key={index} className="discover-event__schedule-item">
                    {item}
                  </li>
                ))}
            </ul>
          </div>

          {/* Speakers Section */}
          <div className="discover-event__speakers">
            <h2 className="discover-event__speakers-title">
              Meet the Speakers
            </h2>
            <div className="discover-event__speakers-list">
              {speakers &&
                speakers.map((speaker, index) => (
                  <div key={index} className="discover-event__speaker-card">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="discover-event__speaker-image"
                    />
                    <h3 className="discover-event__speaker-name">
                      {speaker.name}
                    </h3>
                    <p className="discover-event__speaker-title">
                      {speaker.title}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a href={buttonHref} className="discover-event__button">
          {buttonLabel}
        </a>
      </div>
    </section>
  );
};
