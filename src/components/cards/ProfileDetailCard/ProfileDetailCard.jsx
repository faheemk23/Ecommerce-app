import "./ProfileDetailCard.css";

export function ProfileDetailCard() {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const { firstName, lastName, email } = userInfo ?? {
    firstName: "",
    lastName: "",
    email: "",
  };

  return (
    <>
      <h1>Profile Detail</h1>
      <div className="profile-detail-name">
        <strong>Name:</strong> {firstName + lastName}{" "}
      </div>
      <div className="profile-detail=email">
        <strong>Email:</strong> {email}{" "}
      </div>
    </>
  );
}
