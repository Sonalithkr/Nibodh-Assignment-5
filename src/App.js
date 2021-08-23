import logo from "./logo.svg";
import "./App.css";

import Header from "./components/header/index";
import Navbar from "./components/navbar/navbar";
import Main from "./components/bodyimage/main";
import Banner1 from "./components/banners/banner1";
import Circles from "./components/threecircles/circles";
import Card from "./components/card/card";
import Circle2 from "./components/threecircles/circle2";
import Graph from "./components/graph/graph";
import Banner from "./components/banners/banner";
import Banner2 from "./components/banners/banner2";
import Footer from "./components/footer/footer";
import Card2 from "./components/card/card2";
import Form from "./components/form/form";
import Slider from "./components/slider/slider";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Main />
      <Banner1 />
      <Slider />
      <Circle2 />
      <Circles />
      <Card />
      <Banner2 />
      <Graph />
      <Banner />
      <Card2 />
      <Form />

      <Footer />
    </div>
  );
}

export default App;
