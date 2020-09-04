import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CardJob from './CardJob'
import Input from '@material-ui/core/TextField'
import Select from '@material-ui/core/NativeSelect'

const DivBody = styled.div`
    min-height: 100vh;

    background-image: linear-gradient(135deg, #667EEA 0%, #764BA2 100%);

    display: flex;
    justify-content: space-between;
`

const DivFilter = styled.div`
    width: 18vw;
    padding: 16px;
    
    display: flex;
    flex-direction: column;
`
const DivCards = styled.div`
    width: 82vw;
`

const DivTop = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 16px 30px;
`

const Cards = styled.div`

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const ButtonCreation = styled.button`
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

const Option = styled(Select)`
    color: #737373;
`

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs"

class Jobs extends React.Component {

    state = {
        inputMaxValue: "",
        inputMinValue: "",
        inputTitle: "",
        inputDescription: "",
        selectOrder: "",
        listJobs: [],
        listFilter: []
    }

    componentDidMount = () => {
        this.getJobs()
    }

    getJobs = () => {
        axios.get(`${baseUrl}`)
            .then((response) => {
                this.setState({
                    listJobs: response.data.jobs,
                    listFilter: response.data.jobs,
                })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    onChangeMaxValue = (event) => {
        this.setState({inputMaxValue: event.target.value})
    }

    onChangeMinValue = (event) => {
        this.setState({inputMinValue: event.target.value})
    }

    onChangeTitle = (event) => {
        this.setState({inputTitle: event.target.value})
    }

    onChangeDescription = (event) => {
        this.setState({inputDescription: event.target.value})
    }

    onChangeSelectOrder = (event) => {
        this.setState({selectOrder: event.target.value})
    }

    
    onClickFilter = () => {

        if (this.state.inputMinValue !== "" || this.state.inputMaxValue !== "") {
            const newFilteredList = this.state.listJobs.filter((job) => {
                if (this.state.inputMinValue !== "" && this.state.inputMaxValue !== "") {
                    if (Number(job.value) >= this.state.inputMinValue && Number(job.value) <= this.state.inputMaxValue) {
                        return true
                    }
                } else if (this.state.inputMinValue === "") {
                    if (Number(job.value) <= this.state.inputMaxValue) {
                        return true
                    }
                } else if (this.state.inputMaxValue === "") {
                    if (Number(job.value) >= this.state.inputMinValue) {
                        return true
                    }
                } 
            })

            this.setState({
                listFilter: newFilteredList, 
                inputMinValue: "", 
                inputMaxValue: ""
            })

        } else {
            const newFilteredList2 = this.state.listJobs.filter((job) => {
                return true
            })

            this.setState({ listFilter: newFilteredList2 })
        } 
        
        if (this.state.inputTitle !== "" && this.state.inputDescription === "") {
            const newFilteredList3 = this.state.listJobs.filter((job) => {
                if (this.state.inputTitle === job.title) {
                    return true
                }
            })

            this.setState({
                listFilter: newFilteredList3, 
                inputTitle: ""
            })
        }
        
        if (this.state.inputDescription !== "" && this.state.inputTitle === "") {
            const newFilteredList4 = this.state.listJobs.filter((job) => {
                if (this.state.inputDescription === job.description) {
                    return true
                }
            })

            this.setState({
                listFilter: newFilteredList4,
                inputDescription: ""
            })
        }
    } 


    render() {
        
        function orderTitleAZ(a, b) {
            return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);
        }

        function orderTitleZA(a, b) {
            return (b.title > a.title) ? 1 : ((a.title > b.title) ? -1 : 0);
        }

        function orderLowerPrice (a, b) {
            return a.value - b.value
        }
        function orderHigherPrice (a, b) {
            return b.value - a.value
        }

        function lowestDeadline (a,b) {
            return (a.dueDate > b.dueDate) ? 1 : ((b.dueDate > a.dueDate) ? -1 : 0);
        }
        function biggestDeadline (a,b) {
            return (b.dueDate > a.dueDate) ? 1 : ((a.dueDate > b.dueDate) ? -1 : 0);
        }

        
        switch(this.state.selectOrder){
            case 'OrderAZ':
                this.state.listJobs.sort(orderTitleAZ)
                this.state.listFilter.sort(orderTitleAZ)
                break;
            case 'OrderZA':
                this.state.listJobs.sort(orderTitleZA)
                this.state.listFilter.sort(orderTitleZA)
                break;
            case 'orderLowerPrice':
                this.state.listJobs.sort(orderLowerPrice)
                this.state.listFilter.sort(orderLowerPrice)
                break;
            case 'orderHigherPrice':
                this.state.listJobs.sort(orderHigherPrice)
                this.state.listFilter.sort(orderHigherPrice)
                break;
            case 'lowestDeadline':
                this.state.listJobs.sort(lowestDeadline)
                this.state.listFilter.sort(lowestDeadline)
                break;
            case 'biggestDeadline':
                this.state.listJobs.sort(biggestDeadline)
                this.state.listFilter.sort(biggestDeadline)
                break;
            default: ;
        }

        return (
            <DivBody>
                <DivFilter>
                    <h2>Filtro</h2>
                    <Input
                        label = "Valor Mínimo"
                        onChange={this.onChangeMinValue}
                        value={this.state.inputMinValue}
                    />
                    <Input
                        label = "Valor Máximo"
                        onChange={this.onChangeMaxValue}
                        value={this.state.inputMaxValue}
                    />
                    <Input 
                        label = "Título"
                        onChange={this.onChangeTitle}
                        value={this.state.inputTitle}
                    />
                    <Input
                        label = "Descrição"
                        onChange={this.onChangeDescription}
                        value={this.state.inputDescription}
                    />
                    <ButtonCreation onClick={this.onClickFilter}>Filtrar</ButtonCreation>
                </DivFilter>
                <DivCards>
                    <DivTop>
                        <h2>Serviços</h2>
                        <Option onChange={this.onChangeSelectOrder} value={this.state.selectOrder}> 
                            <option value="">Ordenar por: </option>
                            <option value="orderLowerPrice">Menor Preço</option>
                            <option value="orderHigherPrice">Maior Preço</option>
                            <option value="OrderAZ">Ordem alfábetica de A-Z</option>
                            <option value="OrderZA">Ordem alfabética de Z-A</option>
                            <option value="lowestDeadline">Menor Prazo</option>
                            <option value="biggestDeadline">Maior Prazo</option>
                        </Option>
                    </DivTop>
                    
                    <Cards>
                        <CardJob 
                            list={this.state.listFilter}
                            update={this.getJobs}
                        />
                    </Cards>
                </DivCards>
            </DivBody>
        )

    }

}

export default Jobs