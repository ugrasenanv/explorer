import { Box, Typography } from "@mui/material";
import React from "react";
import FileExplorer from "./FileExplorer";

const Home: React.FC = () => {
  return (
    <Box>
      <Box>
        {<FileExplorer />}
      </Box>
     
    </Box>
  );
};

export default Home;
