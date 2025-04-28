import { useState } from "react";
import { IPageData } from "content/data.types";
import "./OnlinePointer.css";

const OnlinePointer = ({ data }: { data: IPageData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { heading, faqs, imageUrl } = data.onlinePointer ?? {};

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

export default OnlinePointer;
