import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import { FileNode as IFileNode } from "../data";

interface FileNodeProps {
  node: IFileNode;
  level?: number;
  onSelect?: (item: IFileNode) => void;
}

const FileNode: React.FC<FileNodeProps> = ({ node, level = 0, onSelect }) => {
  const isFolder = node.type === "folder";
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isFolder) {
      setIsOpen(!isOpen);
    } else {
      if (onSelect) {
        onSelect(node);
      }
    }
  };

  return (
    <>
      <ListItemButton onClick={handleClick} style={{ paddingLeft: level * 20 }}>
        <ListItemIcon>
          <FileIcon type={node.type} isOpen={isOpen} />
        </ListItemIcon>
        <ListItemText primary={node.name} />
        {isFolder && (isOpen ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      {isFolder && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {node.files?.map((file, index) => (
              <FileNode
                key={index}
                node={file}
                level={level + 1}
                onSelect={onSelect}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default FileNode;

type fileIconProps = {
  type: string;
  isOpen: boolean;
};

const FileIcon: React.FC<fileIconProps> = ({ type, isOpen }) => {
  switch (type) {
    case "pdf":
      return <img style={{width: "20px"}} src={require('../Assets/pdf-2616.svg').default} alt='pdf' />;
    case "folder":
      if (isOpen) {
        return <img style={{width: "20px"}} src={require('../Assets/yellow-open-folder-11567.svg').default} alt='open' />;
      } else {
        return  <img style={{width: "20px"}} src={require('../Assets/yellow-mac-folder-13660.svg').default} alt='folder' />;
      }
    case "doc":
      return <img style={{width: "20px"}} src={require('../Assets/file-1453.svg').default} alt='doc' />
    case "mov":
      return <img style={{width: "20px"}} src={require('../Assets/movie-850.svg').default} alt='movie-850.svg' />

    default:
      return <img style={{width: "20px"}} src={require('../Assets/file-1453.svg').default} alt='folder' />
      // <InsertDriveFileIcon />;
  }
};
