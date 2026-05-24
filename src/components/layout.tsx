// import { Footer } from "@/components/Footer/Footer";
// import { Header } from "@/components/Header/Header";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router";
import { Header } from "./header/Header";

export function Layout() {

    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            padding="md"
        >
        <AppShell.Header>
          <Header/>
        </AppShell.Header>

        <Outlet/>
        
        </AppShell>
    )
}