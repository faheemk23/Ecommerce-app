export const addressValidation = (inputAddress, setErrorMessage) => {
  const { name, addressLineOne, city, postalCode, number } = inputAddress;
  if (!name || !addressLineOne || !city || !postalCode || !number) {
    setErrorMessage("Please fill all the details.");
    return false;
  } else if (isNaN(number)) {
    setErrorMessage("Phone number should be numerical.");
    return false;
  } else {
    setErrorMessage("");
    return true;
  }
};

export const handleBtnAddressTestValues = (setInputAddress) => {
  setInputAddress({
    _id: "2",
    name: "Bill Gates",
    addressLineOne: "Mayur Vihar ",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    postalCode: "462788",
    number: "398654690",
  });
};

export const handleBtnAddressDelete = (_id, dataDispatch) => {
  dataDispatch({ type: "delete-address", payload: _id });
};
