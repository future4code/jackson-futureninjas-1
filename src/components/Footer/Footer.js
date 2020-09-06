import React from "react";
import Image from "../../Assets/img/logo.png";
import styled from "styled-components";
import IconF from "../../Assets/img/icon-facebook.png";
import IconI from "../../Assets/img/icon-instagram.png";
import IconT from "../../Assets/img/icon-twitter.png";
import { ContainerFooter, ModTop, MainTitle, TitleH3, Title, Redes, CopyRigth, ModMid, Logo } from "../../Styles/styles";


export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <ContainerFooter>
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


        </ContainerFooter>
      </div >
    );
  }
}
