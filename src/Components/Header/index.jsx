import React from 'react';
import {Container, Typography} from '@material-ui/core';
import {Divider} from "@mui/material";

export default function Header() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h1" component="div" gutterBottom>🎳 Bowling App</Typography>
      <Divider />
    </Container>
  );
}
