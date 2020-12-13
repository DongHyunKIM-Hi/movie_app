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
      <Viva name="안녕하세요 " />
      <Viva name="오늘은 엄마 생신입니다ㅏ." />
    </div>
  );
}

export default App;
