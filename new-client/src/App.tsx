import { AppRoutes } from "@/routes";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Notifications } from "@mantine/notifications";
import { useState } from "react";

export function App() {
  const [queryClient] = useState(() => new QueryClient());

  const theme: ColorScheme | null = localStorage.getItem(
    "theme"
  ) as ColorScheme;

  const [colorScheme, setColorScheme] = useState<ColorScheme>(theme ?? "light");
  const toggleColorScheme = (value?: ColorScheme) => {
    const scheme = value || (colorScheme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", scheme);
    setColorScheme(scheme);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Notifications />
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme: colorScheme,
            fontFamily: "Inter, sans-serif",
            fontFamilyMonospace: "Monaco, Courier, monospace",
            headings: { fontFamily: "Greycliff CF, sans-serif" },
          }}
          withGlobalStyles
        >
          <AppRoutes />
        </MantineProvider>
      </ColorSchemeProvider>
    </QueryClientProvider>
  );
}
