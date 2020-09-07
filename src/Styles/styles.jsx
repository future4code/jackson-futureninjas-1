import styled from "styled-components";
// Background do Home
import Background from "../Assets/img/background11.jpg";
// Select do Jobs
import Select from '@material-ui/core/NativeSelect'
// import {device} from "./MediaQuery"

//  const size = {
//     mobileS: '320px',
//     mobileM: '375px',
//     mobileL: '425px',
//     tablet: '768px',
//     laptop: '1024px',
//     laptopL: '1440px',
//     desktop: '2560px'
//   }

//    const device = {
//     mobileS: `(min-width: ${size.mobileS})`,
//     mobileM: `(min-width: ${size.mobileM})`,
//     mobileL: `(min-width: ${size.mobileL})`,
//     tablet: `(min-width: ${size.tablet})`,
//     laptop: `(min-width: ${size.laptop})`,
//     laptopL: `(min-width: ${size.laptopL})`,
//     desktop: `(min-width: ${size.desktop})`,
//     desktopL: `(min-width: ${size.desktop})`
//   };

// 1 NAVBAR
// 2 FOOTER
// 3 HOME
// 4 JOBS
// 5 REGISTER


//  - - - Style NAVBAR
export const Navegation = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #8d6ad9;
    border-bottom: 2px solid black;
    text-align: center;
    align-items: center;
    height: 10vh;
    padding: 0 3vw 0 3vw;
    background-color: #8d6ad9;
    background-image: linear-gradient(75deg, #9e82d9 50%, #8d6ad9 70%);
`;
export const ImagemNavBar = styled.img`
    background-color: #ecebf2;
    border-radius: 25%;
    box-shadow: 2px 2px 2px black;
    width: 5vw;
    margin-top: 0.4vh;

    :hover {
        cursor: pointer;
    box-shadow:  2px 2px 9px black;
    }
    @media screen and (min-width: 200px) and (max-width:766px) {
        width:10vw
       
      }
`;

export const Menu = styled.label`
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
     transition: 0.7s; 
    transform: scale(1);
    }
    @media screen and (min-width: 200px) and (max-width:766px) {
        font-size:4vw;
        padding: 0;
       
      }
`;
export const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 60%;
    @media screen and (min-width: 200px) and (max-width:766px) {
        align-items:center
      }
`;

// - - -    - - -    - - - 



//  - - - Style FOOTER - - - 

export const ModTop = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 30px;
  /* align-items: center; */
    width: 100%;
    height: 100%;
    @media screen and (min-width: 200px) and (max-width:766px) {
        flex-direction: column;
        padding-top:5px
       
      }
   
;`


export const ModMid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const Redes = styled.img`
    width: 2vw;
    margin-left: 1vw;
    @media screen and (min-width: 200px) and (max-width:766px) {
        width:5vw
      }
    
`;
export const Logo = styled.img`
    width: 4vmin;
    margin: 0 0 0 10px;
    background-color: #ecebf2;
    border-radius: 25%;
    box-shadow: 2px 2px 2px black;
`;

export const ContainerFooter = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 25vh;
    background-color: #8d6ad9;
    background-image: linear-gradient(175deg, #9e82d9 50%, #8d6ad9 70%);
    border-top: 2px solid black;
    @media screen and (min-width: 200px) and (max-width:766px) {
        height:50vh;
      
      
       }
   
`;
export const MainTitle = styled.div`
    text-align: center;
    height: 5vh;
    @media screen and (min-width: 200px) and (max-width:766px) {
       margin-bottom:10vh
       
      }
    
`;
export const TitleH3 = styled.h3`
    font-family: "Merienda";
    font-size: 1.2vw;
    cursor: default;
    @media screen and (min-width: 200px) and (max-width:766px) {
       font-size:8vw;
       
      }
    
`;
export const CopyRigth = styled.p`
    width: 100%;
    text-align: center;
    padding-bottom: 7px;
`;
export const Title = styled.p`
    color: #fff;
    font-size: 0.9vw;
    font-family: "Vidaloka";

    &:hover {
        border-radius: 10px;
        background-color: #8d6ad9;
        transition: 0.7s;
        cursor: pointer;
}
@media screen and (min-width: 200px) and (max-width:766px) {
    font-size:4vw;
   }
`;
// - - -    - - -    - - - 



// - - - Style HOME - - -
//parte da estilização
export const Container = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (min-width: 200px) and (max-width:766px) {
        flex-direction: column;
      }
      
`;


export const TitleF = styled.h2`
    display: flex;
    margin-top: 7vh;
    margin-bottom: 1vh;
    font-size: 2.1vw;
    font-family: "Trade Winds";
    color: #ecebf2;
    @media screen and (min-width: 200px) and (max-width:766px) {
        font-size:5vw;
        text-align:center
      }
`;


export const Body = styled.div`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;
export const Label = styled.label`
    display: flex;
    align-items: center;
    margin-top: 3vh;
    Input {
        color: white;
    }
`;

export const NavbarItens = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    margin: 0 auto;
    margin-top: 2%;
  
        
      @media screen and (min-width: 200px) and (max-width:766px) {
          flex-direction:column;
          align-items:center;
          width:10vw;
          margin-top:10vh
      }
`;

export const Itens = styled.a`
    width: 6vw;
    height: 10vh;
    border: 3px solid black;
    border-radius: 15%;
    box-shadow: 2px 2px 2px purple;
    background-color: #ecebf2;
    display: flex;
    justify-content: center;
    align-items: center;
      
    @media screen and (min-width: 200px) and (max-width:766px) {
        margin-top:2vh;
        width:15vw
    }
`;

export const CardImg = styled.img`
    width: 4vw;
    height: 7vh;
`;

export const DivImg = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 10px;
    margin-left: 1vw;
    background-color: rgba(36, 44, 46, 0.3);
`;


export const Imagem = styled.img`
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

export const TitleD = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 3%;
    margin-bottom: 3%;
`;

export const Imgb = styled.img`
    width: 30vw;

    @media screen and (min-width: 200px) and (max-width:766px){
        display: block;
        margin-left: auto;
        margin-right: auto
    }
`;

export const Parag = styled.p`
    width: 70%;
    margin: 0 0 1vh 0;
    text-align: justify;
    font-family: "Vidaloka";
    font-size: 2.5vh;
    color: #ecebf2;
    @media screen and (min-width: 200px) and (max-width:766px) {
        width:100%;
        text-align:center
      }
`;

export const Parag1 = styled.p`
    width: 40%;
    margin: 0 auto;
    margin-bottom: 9vh;
    text-align: center;
    font-family: "Vidaloka";
    font-size: 1vw;
    color: #ecebf2;
    @media screen and (min-width: 200px) and (max-width:766px) {
        font-size:4vw;
        
       }
`;
export const TitleH2 = styled.h2`
    font-size: 2vw;
    font-family: "Trade Winds";
    color: #ffff;
    @media screen and (min-width: 200px) and (max-width:766px) {
       font-size:7vw;
        text-align:center
      }
`;
export const TextBox = styled.input`
    width: 10vw;
    height: 2vh;
`;
export const DivTopHome = styled.div`
display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 3vh;
    width: 100vw;
`;

export const DivSecundary = styled.div`
width: 50vw;
height: 30vh;
`
//  - - -   - - -   - - -



// - - - Style JOBS - - - 
export const DivBody = styled.div`
    min-height: 100vh;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: space-between;
`

export const DivFilter = styled.div`
    width: 18vw;
    padding: 16px;
    
    display: flex;
    flex-direction: column;
`
export const DivCards = styled.div`
    width: 82vw;
`

export const DivTopJobs = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 30px;
`

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
`

export const ButtonCreation = styled.button`
    margin: 12.5px;
    height: 40px;
    width: 100px;
    background-color: #ECEBF2;
    box-shadow: 2px 3px 10px rgba(50, 50, 50, 0.77);
    color: black;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    outline:none;
    :hover{
        background-color: #8D6AD9;
        color: white;
    }
    align-self: center;
`

export const Option = styled(Select)`
    color: #737373;
`
//  - - -   - - -   - - -



//  - - - Style REGISTER - - - 
// Div que engloba todo o componente de registro
export const DivPrincipal = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url(${Background});
    /* background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);     */
`

// Div que contêm o formulário com media query
export const DivCad = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    font-weight: bold;
    border-radius: 3px;
    h2 {
        margin: 15px 0;
    }
    background-image: linear-gradient(225deg, rgba(74, 74, 74, 0.5) 0%, rgba(162, 162, 162, 0.5) 10%, rgb(113,96,191) 100%);
        @media screen and (max-width: 375px){
            h2{
                margin: 10px 0 0 0;
            }
        width: 270px;
        height: 435px;
    }
`;

// Estilo que altera os inputs e labels de título e descrição 
export const InputLabe = styled.label`
display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px 10px;
    
    label {
        font-weight: bold;
        font-size: 17px;
    }
    input {
    
        color: black;
        font-weight: bold;
    }
    option: {
        
    font-weight: bold;
}
        div {
        width: 250px;
        color: black;

        }
        @media screen and (max-width: 375px){
            margin: 5px 0px;

            div {
            width: 200px;
            }
        }
`;

// Estilo que altera o input e label de valor do serviço
export const AmountLabel = styled.label`
    width: 250px;
    label {
        font-weight: bold;
        font-size: 17px;
    }
    input {
        font-weight: bold;
        color: black;
    }
        @media screen and (max-width: 375px){
            width: 200px;
        }
`;

// Estilo que altera o botão de cadastrar serviço
export const ButtonD = styled.div`
    margin: 20px 0;
    button {
        font-weight: bolder;
        color: black;
        background-color: #6b3595;
    }
        @media screen and (max-width: 375px){
            margin: 5px 0;
        }
`;



// Style Legends

export const SpanCenterLogo = styled.span`
    :hover span, label{
        opacity: 1;
    }
`;

export const SpanLegendLogo = styled.span`
    /* background-color: white; */
    color: black;
    font-weight: bold;
    display: block;
    opacity: 0;
    position: absolute;
    top: 2%;
    left: 5%;
    transition: all .25s ease-out;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
pointer-events: none;
`;