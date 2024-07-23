import React from "react";
import { Box, Typography } from "@mui/material";
import { FileNode } from "../data";
import Container from '@mui/material/Container';

const DisplayItem: React.FC<{ item: FileNode }> = ({ item }) => {
  return (
    <div style={{
      position: 'absolute', 
      left: '50%', 
      top: '50%',
      transform: 'translate(-50%, -50%)'
  }}
>
    <Container > 
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h3">{item.name}</Typography>
      <Typography variant="body1">{item.type}</Typography>
      <Typography variant="body1">{item.added}</Typography>
    </Box>
    </Container>
    </div>
  );
};

export default DisplayItem;
