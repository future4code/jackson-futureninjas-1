import React from 'react'
import styled from "styled-components";
import App from '../../../App';
import load from './img/giphy.gif'
import Gif from './img/ghy.gif'
import Bg from  './img/background11.jpg'

const Header = styled.div`
min-height: 100vh;
background-image: url(${Bg});
background-color: #181414;
display: flex;
justify-content: center;
align-items: center;
z-index: 111;

img {
    height: 60vmin;
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
                        <img src={Gif} alt="" />
                    </Header>
                ) : (
                        <App />
                    )}
            </div>
        )
    }
}
