import styled from "styled-components";

export const DivPrincipal = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #FF3CAC;
    /* background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%); */
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* background-image: linear-gradient(135deg, #ECEBF2 0%, #8D6AD9 110%); */
    
`

export const DivCad = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    font-weight: bold;

    border-radius: 3px;
/* background-color: #868686; */
    /* background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 0%, #2B86C5 100%); */
    /* background: linear-gradient(to right, #2b5876, #4e4376); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    /* background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
    background-image: linear-gradient(225deg, rgba(74, 74, 74, 0.5) 0%, rgba(162, 162, 162, 0.5) 10%, rgb(113,96,191) 100%);

        @media screen and (max-width: 375px){
            h2{
                margin: 10px 0 0 0;
            }
        width: 270px;
        height: 435px;
    }
`;

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

export const ButtonD = styled.div`
    margin: 20px 0;
    button {
        font-weight: bolder;
        color: black;
    }
        @media screen and (max-width: 375px){
            margin: 5px 0;
        }
`;

export const Sla = styled.span`
input {
font-weight: bold;
}
`