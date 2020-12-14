import React from "react";
function Viva({ name }) {
  return <h3>내 이름은 {name}</h3>;
}
const nameList = [
  {
    name: "Viva",
  },
  {
    name: "donghyun",
  },
  {
    name: "suu",
  },
];
function App() {
  return (
    <div className="App">
      {nameList.map((name) => (
        <Viva name={name.name} />
      ))}
    </div>
  );
}

export default App;
