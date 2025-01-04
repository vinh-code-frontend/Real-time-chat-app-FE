import { create } from "zustand";
import { THEMES } from "../constants";

type ITheme = (typeof THEMES)[number];

interface ThemeStore {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: (localStorage.getItem("chat-theme") ?? "cupcake") as ITheme,
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },
}));
