import { useEffect } from "react";

import Header from "./assets/components/Header";
import Content from "./assets/components/Content";
import Buy from "./assets/components/Buy";
import Footer from "./assets/components/Footer";


const App = () => {

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);


  return (
    <div className="container">
      <Header></Header>
      <Content></Content>
      <Buy></Buy>
      <Footer></Footer>
    </div>
  );
}
 
export default App;