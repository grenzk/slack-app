import React from 'react'
import { createStyles, Header } from '@mantine/core'

const useStyles = createStyles(theme => {
  return {
    topHeader: {
      backgroundColor: theme.colors[theme.primaryColor][6],
      borderBottom: `1px solid ${theme.colors[theme.primaryColor][7]}`,
    },
  }
})

const TopHeader = () => {
  const { classes } = useStyles()
  return (
    <div>
      <Header height={56} p="xs" className={classes.topHeader}></Header>
    </div>
  )
}

export default TopHeader
