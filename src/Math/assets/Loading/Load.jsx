import React from 'react'
import styled from "styled-components";
import App from '../../../App';
import load from './img/giphy.gif'
import fff from './img/fffffffff.wmv'
import g7 from './img/teste4.gif'
import Bg from './img/background11.jpg'

const Header = styled.div`
min-height: 100vh;
background-image: url(${Bg});
background-color: #181414;
display: flex;
justify-content: center;
align-items: center;
z-index: 111;

img {
    height: 40vmin;
    animation: loading 2s infinite ease-in;
    @keyframes loading {
0% {border-radius: 300px 300px 300px 150px;}
25% {border-radius: 150px 300px 300px 300px;}
50% {border-radius: 300px 150px 300px 300px;}
75% {border-radius: 300px 300px 150px 300px;}
100% {border-radius: 300px 300px 300px 150px;}
    }
}
`;

export default class Load extends React.Component {
    state = {
        done: undefined
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ done: true })
        }, 2000);
    }

    render() {
        return (
            <div>
                {!this.state.done ? (
                    <Header>
                        <img src={g7} alt="" />
                    </Header>
                ) : (
                        <App />
                    )}
            </div>
        )
    }
}
