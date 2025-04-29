export interface NavLink {
    label: string;
    href: string;
  }
  
  export interface COM0001NavigationBannerProps {
    links: NavLink[];
    logoSrc: string;
    onSearch?: (query: string) => void;
  }
  