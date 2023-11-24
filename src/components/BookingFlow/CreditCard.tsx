import React, { useState, useEffect } from "react";
import { useCreditCardValidator, images } from "react-creditcard-validator";

interface CreditCardProps {
  onCardValidation: (isValid: boolean) => void;
}

const CreditCard: React.FC<CreditCardProps> = ({ onCardValidation }) => {
  const [isCardValid, setIsCardValid] = useState(false);

  function expDateValidate(month: string, year: string) {
    if (Number(year) > 2035) {
      return "Expiry Date Year cannot be greater than 2035";
    }
    return;
  }

  const {
    getCardNumberProps,
    getCardImageProps,
    getCVCProps,
    getExpiryDateProps,
    meta: { erroredInputs },
  } = useCreditCardValidator({ expiryDateValidator: expDateValidate });

  useEffect(() => {
    const isValid = !erroredInputs.cardNumber && !erroredInputs.expiryDate && !erroredInputs.cvc;
    // Add more conditions as needed for card validation

    setIsCardValid(isValid);
    onCardValidation(isValid);
  }, [erroredInputs, onCardValidation]);

  return (
    <div className="cardWrapper">
      <div className="input-group">
        <svg {...getCardImageProps({ images })} />
        <label>Kortnummer</label>
        <input {...getCardNumberProps()} />
      </div>
      <small>{erroredInputs.cardNumber && erroredInputs.cardNumber}</small>

      <div className="multi-input">
        <div className="input-group">
          <label>Udløbsdato</label>
          <input {...getExpiryDateProps()} />
          <small>{erroredInputs.expiryDate && erroredInputs.expiryDate}</small>
        </div>

        <div className="input-group">
          <label>Sikkerhedskode</label>
          <input {...getCVCProps()} />
          <small>{erroredInputs.cvc && erroredInputs.cvc}</small>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
