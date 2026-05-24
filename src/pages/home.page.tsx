import { AppShell, Container, Title, Button } from "@mantine/core";
import { useAppStore } from "../store/store";

export function HomePage() {
  const hello = useAppStore((state) => state.hello)

  return (
    <>
    <AppShell.Main>
      <Container>
      <Title>Home</Title>
      <Button onClick={hello}>Next step</Button>
      </Container>
    </AppShell.Main>
    </>
  );
}

