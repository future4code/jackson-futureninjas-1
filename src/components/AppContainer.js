import React from "react";
import Home from "./Home";
import NovaPagina from "./NovaPagina";
// import MenuNavBar from "./components/NavBar";
// import Footer from "./components/Footer";
import Services from "./Services";

class App extends React.Component {
  state = {
    screens: "home"
  };

  onClickMoveHome = () => {
    this.setState({ screens: "home" });
  };
  onClickMoveUser = () => {
    this.setState({ screens: "souUsuario" });
  };
  onClickMoveProfessional = () => {
    this.setState({ screens: "souProfissional" });
  };

  selectCurrentScreen = () => {
    switch (this.state.screens) {
      case "home":
        return (
          <Home
            name={this.onClickMoveHome}
            name1={this.onClickMoveUser}
            name2={this.onClickMoveProfessional}
          />
        );
      case "souUsuario":
        return <Services />;
      case "souProfissional":
        return <NovaPagina />;
      default:
        return <Home />;
    }
  };

  render() {
    return <div>{this.selectCurrentScreen()}</div>;
  }
}

export default App;
