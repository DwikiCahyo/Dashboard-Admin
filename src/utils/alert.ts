import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export function loginAlert(role: number, user: string, admin: string) {
  const navigate = useNavigate();
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: () => {
      role === 3 ? navigate(user) : navigate(admin);
    },
  });
  Toast.fire({
    icon: "success",
    title: "Signed in successfully",
  });
}
