import React from "react";
function Viva({ name }) {
  return <h3>내 이름은 {name}</h3>;
}
function App() {
  return (
    <div className="App">
      <h3>hello</h3>
      <Viva name="동현" />
      <Viva name="Viva" />
      <Viva name="동욱" />
      <Viva name="동현" />
    </div>
  );
}

export default App;
