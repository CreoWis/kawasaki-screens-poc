import { DLR0003DealerInformationWithAddressAndLocationProps } from "./types";
import "./styles.css";

export const DLR0003DealerInformationWithAddressAndLocation = ({
  data,
}: {
  data: DLR0003DealerInformationWithAddressAndLocationProps;
}) => {
  const {
    title,
    dealerName,
    dealerDescription,
    dealerPhone,
    dealerEmail,
    addressTitle,
    addressSubtitle,
    dealerAddress,
  } = data ?? {};
  return (
    <section className="dealer-info">
      <div className="dealer-info__container">
        {/* Dealer Information */}
        <div className="dealer-info__details">
          <h2 className="dealer-info__header">{title}</h2>
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
          <h2 className="dealer-info__header">{addressTitle}</h2>
          <p className="dealer-info__sub-header">{addressSubtitle}</p>
          <p className="dealer-info__address-details">{dealerAddress}</p>
        </div>
      </div>
    </section>
  );
};
