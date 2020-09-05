import React, { Component } from 'react'
import { Config, Url } from '../../constants/ConstsAxios/ConstsAxios';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Button, Grid, Paper } from '@material-ui/core';
import { DivPrincipal, DivCad, InputLabe, AmountLabel, ButtonD } from '../../styles/styles'
import NavBar from '../../NavBar';
import Footer from '../../Footer';

export class CadProfissional extends Component {
    state = {
        Title: "",
        Description: "",
        Value: "",
        PaymentMethods: [],
        Date: ""
    }

    onEnter = (e) => {
        if (e.key === "Enter") {
            this.NewProfessional()
        }
    }

    // Request axios criar Profissional
    NewProfessional = () => {
        const body = {
            title: this.state.Title,
            description: this.state.Description,
            value: this.state.Value,
            paymentMethods: [this.state.PaymentMethods],
            dueDate: this.state.Date
        }
        const request = axios.post(Url, body, Config)
        console.log(request)
        request
            .then((r) => {
                this.setState({
                    Title: "",
                    Description: "",
                    Value: "",
                    PaymentMethods: [""],
                    Date: ""
                })
                alert(`Registre has been success !!!`)
                console.log(r)
            })
            .catch((e) => {
                alert(e)
                console.log(e)
            })
    }

    // Inputs controlados
    onchangeTitle = (e) => {
        this.setState({ Title: e.target.value })
    }
    onchangeDescription = (e) => {
        this.setState({ Description: e.target.value })
    }
    onchangeValue = (e) => {
        this.setState({ Value: e.target.value })
    }
    onchangePaymentMethods = (e) => {
        this.setState({ PaymentMethods: e.target.value }, () => {
            console.log(this.state.PaymentMethods)

        })
    }
    onchangeDate = (e) => {
        this.setState({ Date: e.target.value })
        console.log(this.state.Date)
    }

    render() {
        return (
            <div>
                <NavBar filho={this.props.name}
                    filho1={this.props.name1}
                    filho2={this.props.name2} />

                <DivPrincipal>

                    <Paper>
                        <DivCad>
                            <h2>Cadastrar</h2>
                            {/* Input Título */}
                            <InputLabe >
                                <TextField id="input-title" label="Title:" type="text" value={this.state.Title} onChange={this.onchangeTitle} />
                            </InputLabe>

                            {/* Input Descrição */}
                            <InputLabe>
                                <TextField id="input-description" label="Description:" type="text" value={this.state.Description} onChange={this.onchangeDescription} />
                            </InputLabe>

                            {/* Input Valor do serviço */}
                            <AmountLabel>
                                <FormControl fullWidth >
                                    <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                                    <Input
                                        type={'number'}
                                        id="standard-adornment-amount"
                                        value={this.state.Value}
                                        min={0}
                                        onChange={this.onchangeValue}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    />
                                </FormControl>
                            </AmountLabel>

                            {/* Método de pagamento com select */}
                            <InputLabe>
                                <FormControl >
                                    <InputLabel id="demo-simple-select-helper-label">Payment Methods:</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={this.state.PaymentMethods}
                                        onChange={this.onchangePaymentMethods}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="Boleto" key="Boleto">Boleto</MenuItem>
                                        <MenuItem value="Cartão de Crédito" key="Cartão de Crédito">Cartão de Crédito</MenuItem>
                                        <MenuItem value="Cartão de Débito" key="Cartão de Débito">Cartão de Débito</MenuItem>
                                        <MenuItem value="Transferência Bancária" key="Transferência Bancária">Transferência Bancária</MenuItem>
                                    </Select>
                                    <FormHelperText>Some important helper text</FormHelperText>
                                </FormControl>
                            </InputLabe>

                            {/* Pega o valor da Data */}
                            <InputLabe>
                                <TextField
                                    onChange={this.onchangeDate}
                                    value={this.state.Date}
                                    id="date"
                                    label="DueDate:"
                                    type="date"
                                    defaultValue="dd-MM-yyyy"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </InputLabe>

                            {/* Botão de Cadastrar */}
                            <ButtonD>

                                <Button onClick={() => this.NewProfessional()} variant="contained" color="primary" onKeyDown={this.onEnter}>Cadastrar</Button>
                            </ButtonD>

                        </DivCad>
                    </Paper>
                </DivPrincipal>
                <Footer />
            </div>
        )
    }
}
// olaaaa