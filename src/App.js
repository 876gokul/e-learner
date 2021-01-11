import React from "react";
import CardList from "./components/card.list.component";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Authmodal from "./components/Authmodal";
import Carousel from "./components/Carousel";
import Footer from "./components/footer";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      catogery: "",
    };
  }
  componentDidMount() {
    const data = require("./CourseData.json");
    this.setState({ userData: data });
  }
  render() {
    const { userData } = this.state;
    const newSate = userData.filter(
      (data) => data.Category === this.state.catogery
    );
    return (
      <div className="App">
        <Navbar
          handleChange={(e) => {
            if (e.target.innerHTML) {
              this.setState({ catogery: e.target.innerHTML });
            } else {
              this.setState({ catogery: "" });
            }
          }}
        />
        <Carousel />
        <Category
          handleChange={(e) => {
            if (e.target.innerHTML) {
              this.setState({ catogery: e.target.innerHTML });
            } else {
              this.setState({ catogery: "" });
            }
          }}
        />
        <CardList userData={newSate.length > 0 ? newSate : userData} />
        <Authmodal />
        <Footer />
      </div>
    );
  }
}

export default App;
