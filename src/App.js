import React from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox'
import { robots } from "./robots";

const App = () => {

    function onSearchChange(event){
        console.log(event.target.value)
    }

  return (
    < div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={robots} />
    </div>
  );
};

export default App;
