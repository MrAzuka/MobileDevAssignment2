import { createContext, useContext, useState, type ReactNode } from "react";
import { useColorScheme } from "react-native";

import { Colors, type Palette } from "@/constants/theme";

/** `system` follows the phone's setting; `light` and `dark` override it. */
export type ThemePreference = "system" | "light" | "dark";
export type ColorSchemeName = "light" | "dark";

type AppTheme = {
  scheme: ColorSchemeName;
  colors: Palette;
  preference: ThemePreference;
  setPreference: (preference: ThemePreference) => void;
};

const AppThemeContext = createContext<AppTheme | null>(null);

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const systemScheme = useColorScheme();
  const [preference, setPreference] = useState<ThemePreference>("system");

  const scheme: ColorSchemeName =
    preference === "system"
      ? systemScheme === "light"
        ? "light"
        : "dark"
      : preference;

  return (
    <AppThemeContext.Provider
      value={{ scheme, colors: Colors[scheme], preference, setPreference }}
    >
      {children}
    </AppThemeContext.Provider>
  );
}

/** Must be used inside `AppThemeProvider`. */
export function useAppTheme() {
  const theme = useContext(AppThemeContext);
  if (!theme) {
    throw new Error("useAppTheme must be used inside AppThemeProvider");
  }
  return theme;
}
