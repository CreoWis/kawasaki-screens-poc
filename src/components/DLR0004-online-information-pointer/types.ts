export interface FAQItem {
    question: string;
    answer: string;
  }
  
  export interface DLR0004OnlineInformationPointerProps {
    heading: string;
    faqs: FAQItem[];
    imageUrl?: string;
  }
  