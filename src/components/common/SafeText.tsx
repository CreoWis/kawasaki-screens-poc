import { sanitizeText } from "@/services/sanitization";

type SafeTextProps = {
  children: string;
  as?: React.ElementType;
  className?: string;
};

export const SafeText = ({
  children,
  as = "span",
  className,
}: SafeTextProps) => {
  const Tag = as;

  return <Tag className={className}>{sanitizeText(children)}</Tag>;
};
