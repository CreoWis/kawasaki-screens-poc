export interface FAQItem {
    question: string;
    answer: string;
  }
  
  export interface OnlinePointerProps {
    heading: string;
    faqs: FAQItem[];
    imageUrl?: string;
  }
  