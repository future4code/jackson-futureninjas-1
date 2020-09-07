import React from "react";
import Logo from "../../Assets/img/logo.png";
import {Navegation, ImagemNavBar, Buttons, Menu, SpanCenterLogo, SpanLegendLogo} from '../../Styles/styles'
import styled from "styled-components";




class MenuNavBar extends React.Component {
  // irParaUsuario = () => {
  //   return <Services />;
  // };
  render() {
    return (
      <Navegation>
        <SpanCenterLogo>
        <ImagemNavBar src={Logo} alt="logo empresa" onClick={this.props.filho}></ImagemNavBar>
        <SpanLegendLogo>Future Ninjas</SpanLegendLogo>
        </SpanCenterLogo>
        
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
