import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
`;
const CardCenter = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding-bottom: 6vh;
  width: 50%;
`;

const CardImg = styled.img`
  width: 4vw;
  align-self: center;
`;

const Parag = styled.p`
  width: 50%;
  margin: 0 auto;
  font-family: "Vidaloka";
  font-size: 1vw;
  color: #ffff;
  margin-top: 2vh;
`;
const TitleParag = styled.h4`
  margin: 0 auto;
  font-size: 1vw;
  font-family: "Trade Winds";
  color: #ffff;
`;

class Cards extends React.Component {
  render() {
    return (
      <Card>
        <CardCenter>
          <CardImg src={this.props.imagem} />
          <TitleParag>{this.props.nome}</TitleParag>
          <Parag>{this.props.name}</Parag>
        </CardCenter>
        <CardCenter>
          <CardImg src={this.props.imagem1} />
          <TitleParag>{this.props.nome1}</TitleParag>
          <Parag>{this.props.name1}</Parag>
        </CardCenter>
        <CardCenter>
          <CardImg src={this.props.imagem2} />
          <TitleParag>{this.props.nome2}</TitleParag>
          <Parag>{this.props.name2}</Parag>
        </CardCenter>
      </Card>
    );
  }
}

export default Cards;
