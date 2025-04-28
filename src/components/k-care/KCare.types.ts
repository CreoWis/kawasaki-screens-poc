export interface KCareData {
    title?: string;
    description?: string;
    buttonLabel?: string;
    buttonHref?: string;
    largeImageUrl?: string;
    smallImages?: string[];
    navigationItems?: { title: string; isActive: boolean }[];
  }
  