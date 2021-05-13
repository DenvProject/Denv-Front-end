import React, { useState } from 'react';

import './SideBar.css';

export default function SideBar({ page }) {
  const [input, setInput] = useState("");

  return(
    <div className="sideBarContainer">
      {page === 'list' ? 
        <div className="searchBar">
          <input type="text"placeholder="Pesquisar" value={input} onChange={(e) => setInput(e.target.value)} />
          <button>Filtrar</button>
        </div>
        :
        <div className="filterBar">
          
        </div>
      }
      
    </div>
  );
}