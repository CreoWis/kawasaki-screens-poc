import { IPageData } from "content/data.types";
import "./DealerInfo.css";

export const DealerInfo = ({ data }: { data: IPageData }) => {
  const {
    dealerName,
    dealerDescription,
    dealerPhone,
    dealerEmail,
    dealerAddress,
  } = data.dealerInfo ?? {};
  return (
    <section className="dealer-info">
      <div className="dealer-info__container">
        {/* Dealer Information */}
        <div className="dealer-info__details">
          <h2 className="dealer-info__header">Dealer Information</h2>
          <p className="dealer-info__sub-header">{dealerName}</p>
          <p className="dealer-info__description">{dealerDescription}</p>
          <div className="dealer-info__contact">
            <p>
              <strong>Phone:</strong> {dealerPhone}
            </p>
            <p>
              <strong>Email:</strong> {dealerEmail}
            </p>
          </div>
        </div>
        {/* Address Section */}
        <div className="dealer-info__address">
          <h2 className="dealer-info__header">Dealer Address</h2>
          <p className="dealer-info__sub-header">Visit us at:</p>
          <p className="dealer-info__address-details">{dealerAddress}</p>
        </div>
      </div>
    </section>
  );
};
