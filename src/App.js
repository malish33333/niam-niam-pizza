import React from "react";

import DescriptionProduct from "./DescriptionProduct";
import ConfiguratorPizza from "./ConfiguratorPizza";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <DescriptionProduct name="Маргарита"/>
      <ConfiguratorPizza />
      <Footer />
    </>
  );
}

export default App;
