export interface NavLink {
    label: string;
    href: string;
  }
  
  export interface NavbarProps {
    links: NavLink[];
    logoSrc: string;
    onSearch?: (query: string) => void;
  }
  