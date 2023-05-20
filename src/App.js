import React from 'react';
import Main from './Components/Main';
import './Components/style.css'
function App() {
  return (
    <>
      <br/>
      <div class="search1">
      <label for="search" class="search" >  &nbsp;&nbsp;Buscar pokemon &nbsp; <input type="search" id="search"/>
      </label>
      </div>
      <Main/>
    </>
  );
}

export default App;