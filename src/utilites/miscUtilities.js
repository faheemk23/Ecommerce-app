import { toast } from "react-toastify";

export const giveToast = (message, type) => {
  toast(message, {
    position: "bottom-right",
    type: type,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
