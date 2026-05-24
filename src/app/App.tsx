import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import { router } from "../router";
import { RouterProvider } from "react-router";

export default function App() {
  return <>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>;
  </>
}
