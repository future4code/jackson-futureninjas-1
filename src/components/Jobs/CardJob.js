import React from 'react'
import styled from 'styled-components'
import axios from 'axios'


const ContainerCardJob = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    padding: 16px 30px;
` 

const ContainerCard = styled.div`

background-image: linear-gradient(135deg, #ECEBF2 0%, #8D6AD9 110%);
box-shadow: 9px 7px 10px rgba(50, 50, 50, 0.77);

width: 450px;

padding: 16px 16px;
margin-bottom: 30px;

display: flex;
flex-direction: column;
justify-content: center;
`

const H2Card = styled.h2`
margin: 0;
padding: 0;
padding-bottom: 10px;
border-bottom: 1px solid black;
text-align: center;
`

const H3Card = styled.h3`
margin: 0;
padding: 0;
padding-bottom: 15px;
padding-top: 8px;
font-size: 16px;
font-weight: 600;
`

const ButtonCr = styled.button`
    margin: 10px auto 0;
    grid-row: 7/8;
    height: 40px;
    width: 200px;
    box-shadow: 2px 3px 10px rgba(50, 50, 50, 0.77);
    background-color:  ${props => props.cor};
    color: ${props => props.texto};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    cursor: pointer;
    outline: none;
    :hover{
        background-color: ${props => props.hover};
        color: ${props => props.txt};
    }
    
`

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs"

class CardJob extends React.Component {
    
    state = {
        job: false,
        buttonName: ""
    }

    componentDidMount = () => {
        this.props.update()
    }

    onClickTakeJob = (id) => {
        console.log(this.state.job)

        axios.put(`${baseUrl}/${id}/take`)
            .then((response) => {
                alert("Você se candidatou na vaga")
                this.componentDidMount()
            })
            .catch((error) => {
                console.log(error.message)
        })

        this.setState({ job: !this.state.job })

        console.log(this.state.job)
    }

    onClickGiveUpJob = (id) => {
        console.log(this.state.job)

        axios.put(`${baseUrl}/${id}/giveup`)
            .then((response) => {
                alert("Voce se descandidatou desta vaga")
                this.componentDidMount()
            })
            .catch((error) => {
                console.log(error.message)
        })

        this.setState({ job: !this.state.job })

        console.log(this.state.job)
    }

    render() {
        return(
            <ContainerCardJob>
                {this.props.list.map((job) => {

                    const renderButton = job.taken === true ? "DESCANDIDATAR-ME" : "CANDIDATAR-ME"

                    if (job.taken) {
                        return (
                            <ContainerCard key={job.id}>
                                <H2Card> {job.title} </H2Card>
                                <H3Card> Descrição: {job.description} </H3Card>
                                <p> <strong>Valor: R$ {job.value}</strong> </p>
                                <p> Data de Vencimento: {job.dueDate} </p>
                                <p> Pagamento: {job.paymentMethods.map((method) => {
                                    return (`${method}; `)
                                })} </p>
                                <ButtonCr  
                                    border={"none"} 
                                    borderRadius={"10px"} 
                                    cor={"#9E82D9"} 
                                    hover={"#8D6AD9"} 
                                    txt={"white"} 
                                    texto={"black"}
                                    onClick={() => this.onClickGiveUpJob(job.id)}
                                > {renderButton} </ButtonCr>
                            </ContainerCard>
                        )
                    } else {
                        return (
                            <ContainerCard key={job.id}>
                                <H2Card>{job.title} </H2Card>
                                <H3Card>Descrição: {job.description} </H3Card>
                                <p><strong>Valor: R$ {job.value}</strong></p>
                                <p>Data de Vencimento: {job.dueDate} </p>
                                <p>Pagamento: {job.paymentMethods.map((method) => {
                                    return (`${method}; `)
                                })}</p>
                                <ButtonCr  
                                    border={"none"} 
                                    borderRadius={"10px"} 
                                    cor={"#ECEBF2"} 
                                    hover={"#8D6AD9"} 
                                    txt={"white"} 
                                    texto={"black"} 
                                    onClick={() => this.onClickTakeJob(job.id)}
                                > {renderButton} </ButtonCr>
                            </ContainerCard>
                        )
                    }

                })}
            </ContainerCardJob>
        )
    }
}

export default CardJob