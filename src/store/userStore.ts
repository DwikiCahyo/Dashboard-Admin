import { create } from 'zustand';
import { UserData } from '../types/types';
import { AxiosError } from 'axios';
import { apiInstance } from '../utils/utils';

interface UserState {
  fetchUser: (token: string) => void;
  users: UserData[];
  modal: boolean;
  setModal: (value: boolean) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  users: [],
  modal: false,
  fetchUser: async (token) => {
    try {
      const response = await apiInstance.get('users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        set(() => ({
          users: response.data.data,
        }));
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    }
  },

  setModal: (value: boolean) => {
    set(() => ({ modal: value }));
  },
}));
