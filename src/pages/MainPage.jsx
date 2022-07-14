import React, { useState } from 'react'
import {
  createStyles,
  Navbar,
  Header,
  Group,
  Code,
  TextInput,
} from '@mantine/core'
import { Hash, SwitchHorizontal, Logout, Send } from 'tabler-icons-react'

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon')
  return {
    navbar: {
      backgroundColor: theme.colors[theme.primaryColor][6],
    },

    version: {
      backgroundColor: theme.colors[theme.primaryColor][7],
      color: theme.white,
      fontWeight: 700,
    },

    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${theme.colors[theme.primaryColor][7]}`,
    },

    topHeader: {
      backgroundColor: theme.colors[theme.primaryColor][6],
      borderBottom: `1px solid ${theme.colors[theme.primaryColor][7]}`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colors[theme.primaryColor][7]}`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.white,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colors[theme.primaryColor][5],
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.white,
      opacity: 0.75,
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          opacity: 0.9,
        },
      },
    },
  }
})

const data = [{ link: '', label: 'general', icon: Hash }]

const MainPage = () => {
  const { classes, cx } = useStyles()
  const [active, setActive] = useState('Billing')

  const links = data.map(item => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={event => {
        event.preventDefault()
        setActive(item.label)
      }}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </a>
  ))

  return (
    <div>
      <Header height={56} p="xs" className={classes.topHeader}>
        <Group position="center"></Group>
      </Header>
      <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
        <Navbar.Section grow>
          <Group className={classes.header} position="apart">
            <h2>Avion School</h2>
            <Code className={classes.version}>v3.1.2</Code>
          </Group>
          {links}
        </Navbar.Section>

        <Navbar.Section className={classes.footer}>
          <a
            href="#"
            className={classes.link}
            onClick={event => event.preventDefault()}
          >
            <SwitchHorizontal className={classes.linkIcon} />
            <span>Change account</span>
          </a>

          <a
            href="#"
            className={classes.link}
            onClick={event => event.preventDefault()}
          >
            <Logout className={classes.linkIcon} />
            <span>Logout</span>
          </a>
        </Navbar.Section>
      </Navbar>
      <TextInput
        size="md"
        className="message-input"
        placeholder="Message"
        icon={<Send size={16} />}
        required
      />
    </div>
  )
}

export default MainPage
