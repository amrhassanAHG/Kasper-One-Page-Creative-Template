import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import React from "react";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <HomeScreen />
      <Footer />
    </React.Fragment>
  );
};

export default App;
