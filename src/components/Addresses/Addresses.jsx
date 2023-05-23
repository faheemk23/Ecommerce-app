import { useContext, useState } from "react";
import "./Addresses.css";
import { DataContext } from "../../contexts/DataContext";
import { AddressCard } from "../cards/AddressCard/AddressCard";
import { AddressInput } from "./AddressInput";

export function Addresses({ checkout, selectedAddress, setSelectedAddress }) {
  const [showAddressInput, setShowAddressInput] = useState(false);
  const { dataState } = useContext(DataContext);

  const { addresses } = dataState;

  const handleAddressRadio = (e) => {
    setSelectedAddress(addresses.find(({ _id }) => _id === e.target.value));
  };

  return (
    <div>
      {showAddressInput ? (
        <AddressInput setShowAddressInput={setShowAddressInput} />
      ) : (
        <button onClick={() => setShowAddressInput(true)}>
          Add new address
        </button>
      )}
      {addresses.map((address) =>
        checkout ? (
          <div key={address._id} className="checkout-address">
            <input
              type="radio"
              name="address"
              value={address._id}
              checked={address === selectedAddress}
              onChange={handleAddressRadio}
            />

            <AddressCard address={address} />
          </div>
        ) : (
          <AddressCard key={address._id} address={address} />
        )
      )}
    </div>
  );
}
