import { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import { countries } from "../../extraData/countries";
import "./AddressesInput.css";
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
  selectedAddress,
  setSelectedAddress,
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

  const statesOfCountry = (givenCountry) =>
    countries.find(
      ({ country }) => givenCountry.toLowerCase() === country.toLowerCase()
    ).states;

  const handleAddressFields = (e) => {
    const field = e.target.id;
    const fieldValue = e.target.value;
    if (field === "country") {
      setInputAddress((prev) => ({
        ...prev,
        [field]: fieldValue,
        state: statesOfCountry(fieldValue)[0],
      }));
    } else {
      setInputAddress((prev) => ({ ...prev, [field]: fieldValue }));
    }
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
      if (selectedAddress._id === addressId) {
        setSelectedAddress(updatedAddress);
      }
      setEditAddress(false);
    }
  };

  useEffect(() => {
    if (previousAddress) {
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
    <div className="address-input-container">
      {errorMessage && <p className="red">{errorMessage}</p>}
      <input
        className="address-input"
        type="text"
        id="name"
        value={name}
        placeholder="name"
        onChange={handleAddressFields}
      />
      <input
        className="address-input zero-right-margin"
        type="text"
        id="number"
        value={number}
        placeholder="mobile no."
        onChange={handleAddressFields}
      />
      <div>
        <textarea
          className="address-field"
          type="text"
          id="addressLineOne"
          value={addressLineOne}
          placeholder="address"
          onChange={handleAddressFields}
        />
      </div>

      <input
        className="address-input"
        type="text"
        id="city"
        value={city}
        placeholder="city"
        onChange={handleAddressFields}
      />
      <input
        className="address-input "
        type="text"
        id="postalCode"
        value={postalCode}
        placeholder="Postal code"
        onChange={handleAddressFields}
      />
      <div>
        State:{" "}
        <select
          className="address-input bg-orange white"
          id="state"
          value={state}
          onChange={handleAddressFields}
        >
          {statesOfCountry(inputAddress.country).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div>
        Country:{" "}
        <select
          className="address-input bg-orange white"
          id="country"
          value={country}
          onChange={handleAddressFields}
        >
          {countries.map(({ country }) => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <hr />
      <div className="address-input-buttons">
        <div>
          {edit ? (
            <>
              <button
                className="btn btn-secondary"
                onClick={() => handleBtnAddressSave(_id, inputAddress)}
              >
                Save
              </button>{" "}
              <button
                className="btn btn-secondary"
                onClick={() => setEditAddress(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-secondary"
                onClick={handleBtnAddressAdd}
              >
                Add
              </button>{" "}
              <button
                className="btn btn-secondary"
                onClick={() => setShowAddressInput(false)}
              >
                Cancel
              </button>
            </>
          )}
        </div>
        <button
          className="btn btn-primary btn-test-value"
          onClick={() => handleBtnAddressTestValues(setInputAddress)}
        >
          Test values
        </button>
      </div>
    </div>
  );
}
