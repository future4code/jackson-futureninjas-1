import React from "react";
import Cards from "../Cards/Cards";
import Icone from "../../Assets/img/icone-busca.png";
import Imgbody from "../../Assets/img/image-body1.png";
import Icone1 from "../../Assets/img/icone1.png";
import Icone2 from "../../Assets/img/icone2.png";
import Icone3 from "../../Assets/img/icone3.1.png";
import Card1 from "../../Assets/img/service1.png";
import Card2 from "../../Assets/img/service2.png";
import Card3 from "../../Assets/img/service3.png";
import Card4 from "../../Assets/img/service4.png";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Input } from "@material-ui/core";
import { device } from "../../Styles/MediaQuery";
import { Container, DivTopHome, Label, Itens, CardImg, Body, Imgb, TitleF, Parag, DivImg, Imagem, NavbarItens, TitleD, TitleH2, Parag1, DivSecundary } from "../../Styles/styles";
import styled from "styled-components";

const LegendCardSpan1 = styled.span`
:hover span, label{
  opacity: 1;

}
text-align: center;
cursor: help;

`;

const LegendCard1 = styled.span`

background-color: white;
color: black;
font-weight: bold;
display: block;
opacity: 0;
position: absolute;
top: 67%;
margin-right: 40px;
padding: 15px 20px;
transition: all .5s ease-in-out;
transition-delay: 1s;
box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
border: 7px solid black;
border-radius: 10px;
::after {
  border-left: solid transparent 5px;
  border-right: solid transparent 10px;
  border-top: solid white 10px;
  border-bottom-right-radius: 30px;
  bottom: -10px;
  content: "";
  right: 5px;
  margin-left: -13px;
  position: absolute;
  width: 0;
}
`;



class Home extends React.Component {
  state = {
    nameValue: ""
  };

  // createUser = () => {
  //   nameValue: this.state.nameValue;
  //   this.setState({ nameValue: "" });
  // };

  OnEnter = (e) => {
    if (e.key === "Enter") {
      this.props.name1()
    }
  }

  onChangeName = (event) => {
    this.setState({ nameValue: event.target.value });
  };
  // irPraOutraPagina = () => {
  //   return <Services />;
  // };

  render() {
    { console.log(this.props.name1) }
    return (
      <Body>

        <NavBar
          filho={this.props.name}
          filho1={this.props.name1}
          filho2={this.props.name2}
        />
        <Container>
          {<Imgb src={Imgbody} />}

          <DivTopHome>
            <DivSecundary>
              <TitleF>Nossa qualidade é a sua garantia</TitleF>
              <Parag>
                Uma variedade imensa de profissionais a disposição para solucionar
                seus problemas e realizar projetos que você sonha.
            </Parag>
              <Label>
                <Input
                  value={this.state.nameValue}
                  onChange={this.onChangeName}
                  placeholder="Nome do serviço"
                  onKeyPress={this.OnEnter}
                />
                <DivImg>
                  <Imagem
                    onClick={this.props.name1}
                    src={Icone}
                    width="20px"
                  />
                </DivImg>

              </Label>
            </DivSecundary>

          </DivTopHome>
        </Container>

        <NavbarItens>
          <LegendCardSpan1>

            <Itens>
              <LegendCard1>Design</LegendCard1>
              <CardImg src={Card1} />
            </Itens>

          </LegendCardSpan1>

          <LegendCardSpan1>
            <Itens>
              <LegendCard1>Life</LegendCard1>
              <CardImg src={Card2} />
            </Itens>

          </LegendCardSpan1>

          <LegendCardSpan1>

            <Itens>
              <LegendCard1>Education</LegendCard1>
              <CardImg src={Card3} />
            </Itens>

          </LegendCardSpan1>

          <LegendCardSpan1>

            <Itens>
              <LegendCard1>Engine</LegendCard1>
              <CardImg src={Card4} />
            </Itens>

          </LegendCardSpan1>
        </NavbarItens>

        <TitleD>
          <TitleH2>O que é a Future Ninjas?</TitleH2>
          <Parag1>
            É uma plataforma de contratação de serviços. Conectamos
            profissionais de todo país com pessoas que solicitam serviços,
            dispondo atendimento de qualidade, e agilidade em todas as
            categorias de necessidades.
          </Parag1>
        </TitleD>

        <div>
          <Cards
            imagem={Icone1}
            imagem1={Icone2}
            imagem2={Icone3}
            nome="Solicite o Serviço desejado"
            name="Deixe uma solicitação de serviço. 
            Simples e facil."
            nome1="Receba orçamentos"
            name1="Profissionais entraram em contato, 
            repassando valores dos serviços."
            nome2="Escolha os profissionais"
            name2="Negocie diretamente com os profissionais, 
            combinando valores acessiveis pro seu bolso."
          />
        </div>
        <Footer />

      </Body>
    );
  }
}

export default Home;
