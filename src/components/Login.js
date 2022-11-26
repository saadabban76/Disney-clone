import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

function Login() {
    const history = useHistory();
    return (
        <Container>
            <Content>
                <Logo1 src='/images/cta-logo-one.svg' />
                <Button  onClick={()=>history.push('/')} className='button' variant='contained'>Get All In Here</Button>
                <p>Laboris proident ullamco non ullamco labore ea exercitation exercitation id voluptate velit nisi dolore minim. Cillum ullamco dolor fugiat proident non elit occaecat cillum duis. Dolore deserunt officia nostrud consectetur quis et cillum commodo occaecat. </p>
                <Logo2 src='/images/cta-logo-two.png' />
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position:relative;
    height: calc(100vh - 70px);
    display:flex;
    align-items:center;
    justify-content: center;
    &::before{
        content:'';
        position:absolute;
        background-size: cover;
        background-repeat: no-repeat;
        background-image:url('/images/login-background.jpg');
        top:0px;
        bottom:0px;
        right:0px;
        left:0px;
        z-index:-1;
    }
`

const Content = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-evenly;
    max-width:800px;
    height:480px;
    .button{
        width:95%;
        height: 55px;
        background-color: #0063e5;
        cursor:pointer;
        letter-spacing: 2.5px;
        font-size:1rem;
        color:white;
        &:hover{
            background-color:#0483ee;
        }
    }
    p{
        font-size:13px;
        color:white;
        max-width:90%;
        letter-spacing:1.5px;
        text-align:center;
        line-height:1.5;
    }
`

const Logo1 = styled.img`
    max-width:650px;
`

const Logo2 = styled.img`
    max-width:500px;
`