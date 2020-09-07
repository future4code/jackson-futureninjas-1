import React from 'react'
import axios from 'axios'
import CardJob from './CardJob'
import Input from '@material-ui/core/TextField'
import NavBar from "../NavBar/NavBar";
import Footer from '../Footer/Footer'
import { DivBody, DivFilter, ButtonCreation, DivTopJobs, Cards, DivCards, Option, DivSelect } from '../../Styles/styles'
import { Select, MenuItem, FormControl, FormLabel, FormHelperText } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import {Url } from '../../ConstsAxios/ConstsAxios';

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
        axios.get(`${Url}`)
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
        this.setState({ inputMaxValue: event.target.value })
    }

    onChangeMinValue = (event) => {
        this.setState({ inputMinValue: event.target.value })
    }

    onChangeTitle = (event) => {
        this.setState({ inputTitle: event.target.value })
    }

    onChangeDescription = (event) => {
        this.setState({ inputDescription: event.target.value })
    }

    onChangeSelectOrder = (event) => {
        this.setState({ selectOrder: event.target.value })
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

        function orderLowerPrice(a, b) {
            return a.value - b.value
        }
        function orderHigherPrice(a, b) {
            return b.value - a.value
        }

        function lowestDeadline(a, b) {
            return (a.dueDate > b.dueDate) ? 1 : ((b.dueDate > a.dueDate) ? -1 : 0);
        }
        function biggestDeadline(a, b) {
            return (b.dueDate > a.dueDate) ? 1 : ((a.dueDate > b.dueDate) ? -1 : 0);
        }


        switch (this.state.selectOrder) {
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
            <div>
                <NavBar
                    filho={this.props.name}
                    filho1={this.props.name1}
                    filho2={this.props.name2} />
                <DivBody>
                    <DivFilter>
                        <h2>Filtro</h2>
                        <Input
                            label="Valor Mínimo"
                            onChange={this.onChangeMinValue}
                            value={this.state.inputMinValue}
                        />
                        <Input
                            label="Valor Máximo"
                            onChange={this.onChangeMaxValue}
                            value={this.state.inputMaxValue}
                        />
                        <Input
                            label="Título"
                            onChange={this.onChangeTitle}
                            value={this.state.inputTitle}
                        />
                        <Input
                            label="Descrição"
                            onChange={this.onChangeDescription}
                            value={this.state.inputDescription}
                        />
                        <ButtonCreation onClick={this.onClickFilter}>Filtrar</ButtonCreation>
                    </DivFilter>
                    <DivCards>
                        <DivTopJobs>
                            <h2>Serviços</h2>
                                <FormControl>
                                    <InputLabel>Ordenar por:</InputLabel>
                                    <Select
                                        onChange={this.onChangeSelectOrder}
                                        value={this.state.selectOrder}>
                                        <MenuItem value="" id="demo-simple-select-helper-label">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="orderLowerPrice">Menor Preço</MenuItem>
                                        <MenuItem value="orderHigherPrice">Maior Preço</MenuItem>
                                        <MenuItem value="OrderAZ">Ordem alfábetica de A-Z</MenuItem>
                                        <MenuItem value="OrderZA">Ordem alfabética de Z-A</MenuItem>
                                        <MenuItem value="lowestDeadline">Menor Prazo</MenuItem>
                                        <MenuItem value="biggestDeadline">Maior Prazo</MenuItem>
                                    </Select>
                                    <FormHelperText>Filtre todos os produtos</FormHelperText>

                                </FormControl>
                        </DivTopJobs>

                        <Cards>
                            <CardJob
                                list={this.state.listFilter}
                                update={this.getJobs}
                            />
                        </Cards>
                    </DivCards>
                </DivBody>
                <Footer />
            </div>

        )

    }

}

export default Jobs