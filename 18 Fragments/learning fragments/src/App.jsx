import React from "react";
function App() {
  let x = ["amkit", "rohan", "ram", "vishal"];

  return (
    <React.Fragment>
      <h1>Hello</h1>
      <ul>
        {
          x.map(item => (
            <li key={item}>{item}</li> // Added key prop to avoid React warning
          ))
        }
      </ul>
    </React.Fragment>
  );
}

export default App;
