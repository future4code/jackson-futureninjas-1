import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import Icone from "./img/icone-busca.png";
import Imgbody from "./img/image-body1.png";
import Icone1 from "./img/icone1.png";
import Icone2 from "./img/icone2.png";
import Icone3 from "./img/icone3.1.png";
import Card1 from "./img/service1.png";
import Card2 from "./img/service2.png";
import Card3 from "./img/service3.png";
import Card4 from "./img/service4.png";
import Services from "./Services";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Background from "./img/background11.jpg";
import { Input } from "@material-ui/core";



//parte da estilização
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleF = styled.h2`
  display: flex;
  margin-top: 7vh;
  font-size: 2.1vw;
  font-family: "Trade Winds";
  color: #ecebf2;
`;

const Body = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  Input {
    color: white;
  }
`;

const NavbarItens = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: 0 auto;
  margin-top: 2%;
`;

const Itens = styled.a`
  width: 6vw;
  height: 10vh;
  border: 3px solid black;
  border-radius: 15%;
  box-shadow: 2px 2px 2px purple;
  background-color: #ecebf2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardImg = styled.img`
  width: 4vw;
  height: 7vh;
`;

const DivImg = styled.div`
display: flex;
justify-items: center;
align-items: center;
border: 2px solid black;
border-radius: 10px;
margin-left: 1vw;
background-color: rgba(36, 44, 46, 0.3);
`;


const Imagem = styled.img`
  background-color: rgb(236,235,242, 0.7);
  border-radius: 7px;
  transition: all 0.5s;
  padding: 2px;
:hover {
  transform: scale(0.9);
  transition: all 0.5s;
  cursor: pointer;
  margin: 2px;
}
`;

const TitleD = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 3%;
  margin-bottom: 3%;
`;

const Imgb = styled.img`
  width: 30vw;
`;

const Parag = styled.p`
  width: 40%;
  margin: 0 0 auto;
  margin-bottom: 1vw;
  font-family: "Vidaloka";
  font-size: 2.5vh;
  color: #ecebf2;
`;

const Parag1 = styled.p`
  width: 40%;
  margin: 0 auto;
  margin-bottom: 9vh;
  text-align: center;
  font-family: "Vidaloka";
  font-size: 1vw;
  color: #ecebf2;
`;
const TitleH2 = styled.h2`
  font-size: 2vw;
  font-family: "Trade Winds";
  color: #ffff;
`;
const TextBox = styled.input`
  width: 10vw;
  height: 2vh;
`;
const DivTop = styled.div`
  margin-bottom: 3vh;
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
  irPraOutraPagina = () => {
    return <Services />;
  };

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

          <DivTop>
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
          </DivTop>
        </Container>

        <NavbarItens>
          <Itens>
            <CardImg src={Card1} />
          </Itens>
          <Itens>
            <CardImg src={Card2} />
          </Itens>
          <Itens>
            <CardImg src={Card3} />
          </Itens>
          <Itens>
            <CardImg src={Card4} />
          </Itens>
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

          <Footer />
        </div>
      </Body>
    );
  }
}

export default Home;
