import { create } from "zustand";
import { User } from "../types/types";
import { useNavigate } from "react-router-dom";

interface AuthState {
  userInfo: User;
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
  isSuccess: boolean;
  isError: string;
  setSuccess: () => void;
  setError: (mssg: string) => void;
  setUserInfo: (user: User) => void;
  role: number;
  setRole: (id: number) => void;
}

const initUserInfo: User = {
  email: "",
  id: 0,
  role_id: 0,
};

export const useAuthStore = create<AuthState>()((set) => ({
  userInfo: initUserInfo,
  token: localStorage.getItem("user") || null,
  role: 0,
  setToken: (token: string) => {
    localStorage.setItem("user", token);
    set(() => ({ token: token }));
  },
  removeToken: () => {
    localStorage.removeItem("user");
    set(() => ({ token: null }));
  },
  isSuccess: false,
  isError: "",
  setSuccess: () => {
    set(() => ({ isSuccess: true }));
  },
  setError: (message: string) => {
    set(() => ({ isError: message }));
  },
  setUserInfo: (user: User) => {
    const newUserInfo: User = {
      email: user.email,
      id: user.id,
      role_id: user.role_id,
    };
    set(() => ({
      userInfo: newUserInfo,
    }));
  },

  setRole: (id: number) => [
    set(() => ({
      role: id,
    })),
  ],
}));
