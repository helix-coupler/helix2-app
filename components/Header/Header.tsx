import { useState } from 'react';
import {
  createStyles,
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  Burger,
  Image,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronDown,
} from '@tabler/icons';
import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
    }`,
    marginBottom: 120,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  user: {
    fontFamily: 'SFPro',
    fontWeight: 900,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontFamily: 'SFPro',
    fontWeight: 900,
    height: 38,
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },

    '&[data-active]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
    },
  },
}));

interface HeaderProps {
  user: { name: string; image: string };
  tabs: string[];
}

export function Header({ user, tabs }: HeaderProps) {
  const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const items = tabs.map((tab) => (
    <Tabs.Tab tt="uppercase" value={tab} key={tab} >
      {tab}
    </Tabs.Tab>
  ));

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          <Image
            src={theme.colorScheme === 'dark' ? '../../logo+text.svg' : '../../logo+text_.svg'}
            alt="logo"
            width={150}
            fit="contain"
          />
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
          <Menu
            width={260}
            position="bottom-end"
            transition="pop-top-right"
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
                <Group spacing={7}>
                  <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                  <Text
                    tt="uppercase"
                    size="sm"
                    sx={{ lineHeight: 1, fontFamily: 'SFPro', fontWeight: 900 }}
                    mr={3}
                  >
                    {user.name}
                  </Text>
                  <IconChevronDown size={12} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                tt="uppercase"
                sx={{ lineHeight: 1, fontFamily: 'SFPro', fontWeight: 900 }}
                icon={<IconHeart size={14} color={theme.colors.red[6]} stroke={1.5} />}
              >
                Liked posts
              </Menu.Item>
              <Menu.Item
                tt="uppercase"
                sx={{ lineHeight: 1, fontFamily: 'SFPro', fontWeight: 900 }}
                icon={<IconStar size={14} color={theme.colors.yellow[6]} stroke={1.5} />}
              >
                Saved posts
              </Menu.Item>
              <Menu.Item
                tt="uppercase"
                sx={{ lineHeight: 1, fontFamily: 'SFPro', fontWeight: 900 }}
                icon={<IconMessage size={14} color={theme.colors.blue[6]} stroke={1.5} />}
              >
                Your comments
              </Menu.Item>

              <Menu.Label
                sx={{ lineHeight: 1, fontFamily: 'SFPro', fontWeight: 900 }}
                tt="uppercase"
              >
                Settings
              </Menu.Label>
              <Menu.Item
                tt="uppercase"
                sx={{ lineHeight: 1, fontFamily: 'SFPro', fontWeight: 900 }}
                icon={<IconSettings size={14} stroke={1.5} />}
              >
                Account settings
              </Menu.Item>
              <Menu.Item
                tt="uppercase"
                sx={{ lineHeight: 1, fontFamily: 'SFPro', fontWeight: 900 }}
                icon={<IconSwitchHorizontal size={14} stroke={1.5} />}
              >
                Change account
              </Menu.Item>
              <Menu.Item
                tt="uppercase"
                sx={{ lineHeight: 1, fontFamily: 'SFPro', fontWeight: 900 }}
                icon={<IconLogout size={14} stroke={1.5} />}
              >
                Logout
              </Menu.Item>

              <Menu.Divider />

              <Menu.Label
                tt="uppercase"
                sx={{ lineHeight: 1, fontFamily: 'SFPro', fontWeight: 900 }}
              >
                Danger zone
              </Menu.Label>
              <Menu.Item
                tt="uppercase"
                sx={{ lineHeight: 1, fontFamily: 'SFPro', fontWeight: 900 }}
                icon={<IconPlayerPause size={14} stroke={1.5} />}
              >
                Pause subscription
              </Menu.Item>
              <Menu.Item
                tt="uppercase"
                sx={{ lineHeight: 1, fontFamily: 'SFPro', fontWeight: 900 }}
                color="red"
                icon={<IconTrash size={14} stroke={1.5} />}
              >
                Delete account
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
      <Container>
        <Tabs
          defaultValue="Home"
          variant="outline"
          classNames={{
            root: classes.tabs,
            tabsList: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
}
