import { create } from "zustand";
import { User } from "../types/types";

interface AuthState {
  isLogin: boolean;
  setLogin: () => void;
  userInfo: User;
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
  isSuccess: boolean;
  isError: string;
  setSuccess: (value: boolean) => void;
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
  isLogin: false,
  userInfo: initUserInfo,
  token: localStorage.getItem("user") || null,
  role: 0,
  setToken: (token: string) => {
    localStorage.setItem("user", token);
    set(() => ({ token: token }));
  },
  removeToken: () => {
    set(() => ({ isLogin: false, token: null }));
  },
  setLogin: () => {
    set(() => ({ isLogin: true }));
  },
  isSuccess: false,
  isError: "",
  setSuccess: (value: boolean) => {
    set(() => ({ isSuccess: value }));
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
