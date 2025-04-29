export interface Speaker {
  name: string;
  title: string;
  image: string;
}

export interface KWN0004DiscoverEventsInformationProps {
  eventTitle: string;
  eventDescription: string;
  eventDate: string;
  speakers: Speaker[];
  schedule: string[];
  buttonLabel: string;
  buttonHref: string;
  backgroundImage: string;
}
