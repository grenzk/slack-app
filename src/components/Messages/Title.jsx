import React, { useState } from 'react'
import { Header, Container, Group } from '@mantine/core'
import { useStyles } from '../../assets/js/headerStyle'

export function Title() {
  const { classes } = useStyles()

  return (
    <Header height={52.5} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <h1 className="title-text">Channel Name</h1>
      </Container>
    </Header>
  )
}
