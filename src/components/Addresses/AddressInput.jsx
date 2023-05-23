import { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import { countries } from "../../extraData/countries";
import "./Addresses.css";
import { DataContext } from "../../contexts/DataContext";
import {
  addressValidation,
  handleBtnAddressTestValues,
} from "../../utilites/addressUtilities";

export function AddressInput({
  setShowAddressInput,
  edit,
  setEditAddress,
  previousAddress,
}) {
  const [inputAddress, setInputAddress] = useState({
    _id: "",
    name: "",
    addressLineOne: "",
    city: "",
    state: "Uttar Pradesh",
    country: "India",
    postalCode: "",
    number: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { dataDispatch } = useContext(DataContext);

  const handleAddressFields = (e) => {
    const field = e.target.id;
    const fieldValue = e.target.value;
    setInputAddress((prev) => ({ ...prev, [field]: fieldValue }));
  };

  const handleBtnAddressAdd = () => {
    if (addressValidation(inputAddress, setErrorMessage)) {
      dataDispatch({
        type: "add-address",
        payload: { ...inputAddress, _id: uuid() },
      });
      setShowAddressInput(false);
    }
  };

  const handleBtnAddressSave = (addressId, updatedAddress) => {
    if (addressValidation(updatedAddress, setErrorMessage)) {
      dataDispatch({
        type: "update-address",
        payload: { addressId, updatedAddress },
      });
      setEditAddress(false);
    }
  };

  const statesOfCurrentCountry = countries.find(
    ({ country }) => country === inputAddress.country
  ).states;

  useEffect(() => {
    if (previousAddress) {
      console.log("yes");
      setInputAddress(previousAddress);
    }
  }, []);

  const {
    _id,
    name,
    addressLineOne,
    city,
    state,
    country,
    postalCode,
    number,
  } = inputAddress;

  return (
    <div>
      {errorMessage && <p className="red">{errorMessage}</p>}
      <input
        type="text"
        id="name"
        value={name}
        placeholder="name"
        onChange={handleAddressFields}
      />
      <input
        type="text"
        id="number"
        value={number}
        placeholder="mobile no."
        onChange={handleAddressFields}
      />
      <div>
        <input
          type="text"
          id="addressLineOne"
          value={addressLineOne}
          placeholder="address"
          onChange={handleAddressFields}
        />
      </div>

      <input
        type="text"
        id="city"
        value={city}
        placeholder="city"
        onChange={handleAddressFields}
      />
      <input
        type="text"
        id="postalCode"
        value={postalCode}
        placeholder="Postal code"
        onChange={handleAddressFields}
      />
      <div>
        State:{" "}
        <select
          id="state"
          value={state.toLowerCase()}
          onChange={handleAddressFields}
        >
          {statesOfCurrentCountry.map((state) => (
            <option key={state} value={state.toLowerCase()}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div>
        Country:{" "}
        <select
          id="country"
          value={country.toLowerCase()}
          onChange={handleAddressFields}
        >
          {countries.map(({ country }) => (
            <option value={country.toLowerCase()} key={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div>
        {edit ? (
          <>
            <button onClick={() => handleBtnAddressSave(_id, inputAddress)}>
              Save
            </button>{" "}
            <button onClick={() => setEditAddress(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleBtnAddressAdd}>Add</button>{" "}
            <button onClick={() => setShowAddressInput(false)}>Cancel</button>
          </>
        )}
      </div>
      <button onClick={() => handleBtnAddressTestValues(setInputAddress)}>
        Test values
      </button>

      <hr />
    </div>
  );
}
