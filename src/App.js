import React from "react";
function Viva({ name }) {
  return <h3>내 이름은 {name}</h3>;
}

const nameList = [
  {
    id: 1,
    name: "Viva",
    image: "123",
  },
  {
    id: 2,
    name: "donghyun",
    image: "123",
  },
  {
    id: 3,
    name: "suu",
    image: "123",
  },
];
function App() {
  return (
    <div className="App">
      {nameList.map((name) => {
        return <Viva key={name.id} name={name.name} />;
      })}
    </div>
  );
}

export default App;
