import React from "react";
import Image from "./img/logo.png";
import styled from "styled-components";
import IconF from "./img/icon-facebook.png";
import IconI from "./img/icon-instagram.png";
import IconT from "./img/icon-twitter.png";


const Redes = styled.img`
  width: 2vw;
  margin-left: 1vw;
`;
const Logo = styled.img`
  width: 3vw;
  margin: 0 0 0 10px;
  background-color: #ecebf2;
  border-radius: 25%;
  box-shadow: 2px 2px 2px black;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #8d6ad9;
  background-image: linear-gradient(175deg, #9e82d9 50%, #8d6ad9 70%);
`;
const MainTitle = styled.div`
  text-align: center;
`;
const TitleH3 = styled.h3`
  font-family: "Merienda";
  font-size: 1.2vw;
`;
const CopyRigth = styled.p`
  width: 100%;
  text-align: center;
`;
const Title = styled.p`
  color: #fff;
  font-size: 0.9vw;
  font-family: "Vidaloka";

  &:hover {
    border-radius: 10px;
    background-color: #8d6ad9;
    transition: 0.7s;
  }
`;

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <MainTitle>
            <TitleH3>Serviços</TitleH3>
            <Title>Design</Title>
            <Title>Saúde</Title>
            <Title>Ensino</Title>
            <Title>Assistência Técnica</Title>
          </MainTitle>
          <MainTitle>
            <TitleH3>Institucional</TitleH3>
            <Title>Quem somos</Title>
            <Title>Trabalhe conosco</Title>
            <Title>Guia Future Ninjas</Title>
          </MainTitle>
          <MainTitle>
            <TitleH3>Redes Sociais</TitleH3>
            <a href="https://pt-br.facebook.com/">
              <Redes src={IconF} />
            </a>
            <a href="https://www.instagram.com/">
              <Redes src={IconI} />
            </a>
            <a href="https://twitter.com/">
              <Redes src={IconT} />
            </a>
          </MainTitle>
          <CopyRigth>
            © Todos os Direitos reservados <Logo src={Image} />
          </CopyRigth>
        </Container>
      </div>
    );
  }
}
