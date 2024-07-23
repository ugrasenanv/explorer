import { Box, Button, TextField, Typography,InputAdornment, styled, InputBase , } from "@mui/material";

import React, { useState } from "react";
import FileStructure from "./FileStructure";
import { FileNode, fileStructure } from "../data";
import DisplayItem from "./DisplayItem";
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ButtonGroup from '@mui/material/ButtonGroup';

const FileExplorer: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<FileNode>();
  const [search, setSearch] = useState("");
  const [list, setList] = useState(fileStructure);

  const handleClick = (searchString: string) => {
    const filteredItems: FileNode[] = [];

    fileStructure.forEach((item) => {
      if (item.type !== "folder") {
        if (item.name.toLowerCase().includes(searchString.toLowerCase())) {
          filteredItems.push(item);
        }
      } else {
        const matchedFiles = item.files?.filter((file) =>
          file.name.toLowerCase().includes(searchString.toLowerCase())
        );

        if (matchedFiles && matchedFiles.length > 0) {
          // Clone the folder object to avoid mutating the original data
          const matchedFolder: FileNode = { ...item, files: matchedFiles };
          filteredItems.push(matchedFolder);
        }
      }
    });
    setList(filteredItems);
  };

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  return (
    <Box>
      <Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "250px",
            height: "100vh",
            overflowY: "auto",
            borderRight: "1px solid #ddd",
          }}
        >
          <Typography variant="h5" sx={{ m: 1 }}>
            File Explorer
          </Typography>

          <ButtonGroup variant="contained" aria-label="Basic button group">
    
          <TextField
            fullWidth
            label="Search by file name"
            id="fullWidth"
            value={search}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearch(event.target.value);
            }}
          />
         
        
          <Button className="primary" onClick={() => handleClick(search)}> <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper></Button>
</ButtonGroup>
     
          <FileStructure structure={list} setSelectedItem={setSelectedItem} />
        </Box>
        {selectedItem && (
          <Box
            sx={{
              height: "100vh",
            }}
          >
            <DisplayItem item={selectedItem} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FileExplorer;
