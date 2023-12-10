import { jwtDecode } from "jwt-decode";
import { CustomJwtPayload, User } from "../types/types";

export function convertDate(date?: Date) {
  const formatedDate = date?.toString().split("T")[0];
  return formatedDate;
}

export function formatToIDR(number: number) {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return formatter.format(number);
}

export function convertTime(date: Date) {
  const formattedResult = date.toString().slice(11, 16);
  return formattedResult;
}

export function getRoleJwt(token: string) {
  const decoded = jwtDecode(token) as CustomJwtPayload;
  const role_id = decoded.role_id;
  const email = decoded.email;
  const id = decoded.id;
  const user: User = {
    email,
    role_id,
    id,
  };

  return user;
}
