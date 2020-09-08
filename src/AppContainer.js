
import React from "react";
import Home from "./components/Home/Home";
import Jobs from "./components/Jobs/Jobs";
import { CadProfissional } from "./components/CadProfissional/CadProfissional";

export default class App extends React.Component {
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
        return <Jobs
          name={this.onClickMoveHome}
          name1={this.onClickMoveUser}
          name2={this.onClickMoveProfessional} 
          />;
      case "souProfissional":
        return <CadProfissional
          name={this.onClickMoveHome}
          name1={this.onClickMoveUser}
          name2={this.onClickMoveProfessional} />;
      default:
        return <Home />;
    }
  };

  render() {

    return (
      <div>{this.selectCurrentScreen()}</div>
    );

  }
}
