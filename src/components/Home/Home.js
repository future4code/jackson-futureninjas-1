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
import { Container, DivTopHome, Label, Itens, CardImg, Body, Imgb, TitleF, Parag, DivImg, Imagem, NavbarItens, TitleD, TitleH2, Parag1, DivSecundary } from "../../Styles/styles";


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
