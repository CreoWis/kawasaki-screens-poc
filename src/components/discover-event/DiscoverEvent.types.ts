export interface Speaker {
    name: string;
    title: string;
    image: string;
  }
  
  export interface DiscoverEventProps {
    eventTitle: string;
    eventDescription: string;
    eventDate: string;
    speakers: Speaker[];
    schedule: string[];
    buttonLabel: string;
    buttonHref: string;
    backgroundImage: string;
  }
  