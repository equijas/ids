import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const ExportButton = () => {
  const[open,setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return(
    <div exportbutton= "dropdown">
      <button onClick = {handleOpen}>Export</button>
      {open ? (
        <ul exportbutton = "menuExport">
          <li exportbutton = "export-menu">
            <button>XML</button>
          </li>
          <li exportbutton = "menuExport">
            <button>CSV</button>
          </li>
          <li exportbutton = "menuExport">
            <button>JSON</button>
          </li>
        </ul>
      ) : null}
    </div>
  );
      };

export default ExportButton;
