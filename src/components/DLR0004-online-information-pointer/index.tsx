import { useState } from "react";
import { DLR0004OnlineInformationPointerProps } from "./types";
import "./styles.css";

export const DLR0004OnlineInformationPointer = ({
  data,
}: {
  data: DLR0004OnlineInformationPointerProps;
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { heading, faqs, imageUrl } = data ?? {};

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="online-pointer-container">
      <div className="left-image">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Online Bikes"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        ) : (
          <div style={{ color: "#666" }}>No Image</div>
        )}
      </div>

      <div className="right-content">
        <div className="heading">{heading}</div>

        {faqs &&
          faqs.map((faq, index) => (
            <div key={index} className="accordion-item">
              <div
                className="accordion-question"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
                <span className="accordion-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="accordion-answer">{faq.answer}</div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};
