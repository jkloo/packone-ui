import { AppShell, Container, Text, Grid, Transition, Card, RingProgress, Box, Stack, Button, Space, LoadingOverlay, RollingNumber } from "@mantine/core";
import { useAppStore } from "../store/store";
import { CardImage } from "../components/card-image/CardImage";
import { useEffect, useState } from "react";

export function HomePage() {
  const cards = useAppStore((state) => state.cards)
  const loading = useAppStore((state) => state.loading)

  return (
    <>
    <AppShell.Main>
      <Stack>
        <Container size="lg">
          <Status />
        </Container>
        <Container size="xl">
          <Grid align="center" columns={12}>
            { cards.map((card, index) => (
              <Transition
                  mounted={!loading}
                  keepMounted
                  transition="slide-up"
                  duration={300}
                  enterDelay={index * 30}
                  exitDelay={(cards.length - (index + 1)) * 30}
                >
                  {(styles) => 
                    <Grid.Col style={styles} span={{ base: 6, md: 4, lg: 2 }} key={card.id + index}>
                      <CardImage imageUrl={card.image_url} foiling={card.foiling}/>
                    </Grid.Col>
                  }
              </Transition>
            ))
          }
        </Grid>
        </Container>
      </Stack>
    </AppShell.Main>
    </>
  );
}

function Status() {
  const fetch = useAppStore((state) => state.fetch)
  const loading = useAppStore((state) => state.loading)

  return (
    <Card padding="sm" withBorder orientation="horizontal">
      <Card.Section inheritPadding px="xs" style={{ alignItems: 'center' }}>
        <Box pos="relative">
          <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ backgroundOpacity: 1 }} />
          <CountDown start={new Date()} expiration={new Date()}/>  
        </Box>
      </Card.Section>
      <Card.Section inheritPadding px="xs" style={{ alignContent: 'center' }}>
        <Text fw={500} fz="xl">Omens of the Third Age</Text>
        <Text fz="md" c="dimmed">Booster simulation</Text>
      </Card.Section>
      <Space w="auto" />
      <Card.Section inheritPadding px="md" style={{ alignItems: 'center', justifyContent: 'flex-end' }} display={'flex'} flex={1}>
        <Button onClick={fetch} disabled={loading}>New Pack</Button>
      </Card.Section>
    </Card>
  )
}

interface CountDownProps {
  start: Date
  expiration: Date
}

function CountDown({ start, expiration }: CountDownProps) {
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const [unit, setUnit] = useState<'s'|'m'>('m')

  useEffect(() => {
    if (start) {
        const secondsLeft = setInterval(() => {
            setSeconds(1)
        }, 1000);
        return () => clearInterval(secondsLeft);
    }
    // we keep track when to rerender the hook, aka when the start is changed to true
  }, [start]);

  return (
    <RingProgress
      thickness={8}
      size={72}
      sections={[{ value: 34, color: 'blue' }]}
      label={
        <Stack align="center">
          <RollingNumber value={seconds} suffix={unit} ta="center" fz="lg"  c="blue" fw={700} tabularNumbers/>
        </Stack>
      }
    />
  )
}