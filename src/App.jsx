import { useState } from "react";
import Header from "./assets/components/Header";
import Content from "./assets/components/Content";

const App = () => {
  return (
    <div className="container">
      <Header></Header>
      <Content></Content>
    </div>
  );
}
 
export default App;