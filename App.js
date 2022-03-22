import React from "react";
import Button from "./components/Button";
function App() {
  const handleClick = (event) => {
    console.log("Click!");
  };
  
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        marginTop: 250,
        marginLeft: 450,
        width: "50%",
      }}
    ><title> Flutter Demo Home Page</title>
      <p> You have pushed the button this many time </p>
      <Button color="purple" round onClick={handleClick}>

      </Button>

      
    </div>
  );
}

export default App;
