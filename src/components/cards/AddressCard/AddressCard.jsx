import { useContext, useState } from "react";
import "./AddressCard.css";
import { AddressInput } from "../../Addresses/AddressInput";
import { DataContext } from "../../../contexts/DataContext";
import { handleBtnAddressDelete } from "../../../utilites/addressUtilities";

export function AddressCard({ address, orderSummary }) {
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

  return (
    <div>
      {editAddress ? (
        <AddressInput
          edit
          setEditAddress={setEditAddress}
          previousAddress={address}
        />
      ) : (
        <>
          <div>{name}</div>
          <div>{number}</div>
          <div>
            {addressLineOne},{city},{state},{country},{postalCode}
          </div>
          {!orderSummary && (
            <div>
              <button onClick={() => setEditAddress(true)}>Edit</button>
              <button onClick={() => handleBtnAddressDelete(_id, dataDispatch)}>
                Delete
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
