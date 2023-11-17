import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Link,
} from '@mui/material'


function NavBar(){

    return (
        <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Link underline="none" href="#top" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Alex Linden
          </Link>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#projects"
              underline="none"
              sx={{ my: 1, mx: 1.5 }}
            >
              Projects
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#about"
              underline="none"
              sx={{ my: 1, mx: 1.5 }}
            >
              About
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#contact"
              underline="none"
              sx={{ my: 1, mx: 1.5 }}
            >
              Contact
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    )
}
export default NavBar