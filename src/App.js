import React from "react"

function Food({fav}){
  console.log(fav);
  return <h1>I like {fav}</h1>
}

const foodlist = ["kimchi","Dynamite","ramyun"]

function App() {
  return (
  <div>
    <h1>Hello</h1>
  {foodlist.map(food=>
    <Food fav={food}/>
  )}
  </div>
  );
}

export default App;
