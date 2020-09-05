import React from "react";
import Logo from "./img/logo.png";
import styled from "styled-components";
import Services from "./Services";


const Navegation = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #8d6ad9;
  text-align: center;
  align-items: center;
  height: 10vh;
  padding: 0 3vw 0 3vw;
  background-color: #8d6ad9;
  background-image: linear-gradient(75deg, #9e82d9 50%, #8d6ad9 70%);
`;
const Imagem = styled.img`
  background-color: #ecebf2;
  border-radius: 25%;
  box-shadow: 2px 2px 2px black;
  width: 5vw;
  margin-top: 0.4vh;

  :hover {
    cursor: pointer;
  box-shadow:  2px 2px 9px black;
  }
`;

const Menu = styled.label`
  margin: 0 1rem;
  position: relative;
  color: #ecebf2;
  padding: 10px;
  font-family: "Finger Paint";
  font-size: 1.2vw;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border-radius: 10px;
    background-color: #404040;
    /* transition: 0.7s; */

    transform: scale(1);
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
`;

class MenuNavBar extends React.Component {
  irParaUsuario = () => {
    return <Services />;
  };
  render() {
    return (
      <Navegation>
        <Imagem src={Logo} alt="logo empresa" onClick={this.props.filho}></Imagem>
        <Buttons>
          <Menu onClick={this.props.filho}>Início</Menu>
          <Menu onClick={this.props.filho1}>Sou usuario</Menu>
          <Menu onClick={this.props.filho2}>Sou profissional</Menu>
        </Buttons>
      </Navegation>
    );
  }
}

export default MenuNavBar;
