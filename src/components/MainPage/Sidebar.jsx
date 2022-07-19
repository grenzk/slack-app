import React, { useState } from 'react'
import { Navbar, Group, Code } from '@mantine/core'
import { Hash, Logout } from 'tabler-icons-react'
import useStyles from '../../assets/js/mantineStyles'

const data = [{ link: '', label: 'general', icon: Hash }]

const Sidebar = () => {
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
            <Logout className={classes.linkIcon} />
            <span>Logout</span>
          </a>
        </Navbar.Section>
      </Navbar>
    </div>
  )
}

export default Sidebar
