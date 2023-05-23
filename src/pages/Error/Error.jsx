import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Error() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/"), 500);
  });
  return (
    <>
      <h1>Error! Please input correct URL.</h1>
    </>
  );
}
