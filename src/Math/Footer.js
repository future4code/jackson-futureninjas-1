import React from "react";
import Image from "./img/logo.png";
import styled from "styled-components";
import IconF from "./img/icon-facebook.png";
import IconI from "./img/icon-instagram.png";
import IconT from "./img/icon-twitter.png";

const ModTop = styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 30px;
  /* align-items: center; */
  width: 100%;
  height: 100%;
  ;`


const ModMid = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`;

const Redes = styled.img`
  width: 2vw;
  margin-left: 1vw;
`;
const Logo = styled.img`
  width: 4vmin;
  margin: 0 0 0 10px;
  background-color: #ecebf2;
  border-radius: 25%;
  box-shadow: 2px 2px 2px black;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 25vh;
  background-color: #8d6ad9;
  background-image: linear-gradient(175deg, #9e82d9 50%, #8d6ad9 70%);
`;
const MainTitle = styled.div`
  text-align: center;
  height: 5vh;
`;
const TitleH3 = styled.h3`
  font-family: "Merienda";
  font-size: 1.2vw;
  cursor: default;
  
`;
const CopyRigth = styled.p`
  width: 100%;
  text-align: center;
  padding-bottom: 7px;
`;
const Title = styled.p`
  color: #fff;
  font-size: 0.9vw;
  font-family: "Vidaloka";

  &:hover {
    border-radius: 10px;
    background-color: #8d6ad9;
    transition: 0.7s;
    cursor: pointer;
  }
`;

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <ModTop>
            <MainTitle>
              <TitleH3>Serviços</TitleH3>
              <Title>Design</Title>
              <Title>Saúde</Title>
              <Title>Ensino</Title>
              <Title>Assistência Técnica</Title>
            </MainTitle>
            <MainTitle>
              <TitleH3
              >Institucional</TitleH3>
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
          </ModTop>

          <CopyRigth>
            <ModMid>
              © Todos os Direitos reservados. <Logo src={Image} />
            </ModMid>
          </CopyRigth>


        </Container>
      </div >
    );
  }
}
