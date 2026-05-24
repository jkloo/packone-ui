import { Button, Container, Group, Title } from '@mantine/core';

import classes from './Header.module.css';
import { useAppStore } from '../../store/store';


export function Header() {
  const fetch = useAppStore(state => state.fetch)

  return (
      <Container size="lg" className={classes.inner}>
        <Title order={2}>
          {/* <AppLogo size={28} /> */}
          {"Pack One"}
        </Title>
        <Group gap={5} visibleFrom="xs">
          
        </Group>
      </Container>
  );
}

