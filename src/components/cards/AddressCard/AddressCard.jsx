import { useContext, useState } from "react";
import "./AddressCard.css";
import { AddressInput } from "../../AddressesInput/AddressInput";
import { DataContext } from "../../../contexts/DataContext";
import { handleBtnAddressDelete } from "../../../utilites/addressUtilities";

export function AddressCard({
  address,
  checkout,
  selectedAddress,
  setSelectedAddress,
  orderSummary,
}) {
  const { dataDispatch } = useContext(DataContext);

  const [editAddress, setEditAddress] = useState(false);

  const {
    _id,
    name,
    addressLineOne,
    city,
    state,
    country,
    postalCode,
    number,
  } = address;

  const handleSelectedAddress = (addressClicked) => {
    setSelectedAddress(addressClicked);
  };

  return (
    <div
      style={{
        backgroundColor:
          address === selectedAddress ? "var(--secondary-color)" : null,
      }}
      className="address-card"
    >
      {editAddress ? (
        <AddressInput
          edit
          setEditAddress={setEditAddress}
          previousAddress={address}
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
        />
      ) : (
        <div>
          <div onClick={checkout ? () => handleSelectedAddress(address) : null}>
            {checkout && address === selectedAddress && (
              <div className="address-check-icon ">
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </div>
            )}
            <div>{name}</div>
            <div>{number}</div>
            <div>
              {addressLineOne},{city}
              <div>
                {state},{country}
              </div>
              <div>{postalCode}</div>
            </div>
          </div>

          {!orderSummary && (
            <div>
              <button
                className="btn btn-secondary btn-address"
                onClick={() => setEditAddress(true)}
              >
                Edit
              </button>
              <button
                className="btn btn-secondary  btn-address"
                onClick={() => handleBtnAddressDelete(_id, dataDispatch)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
