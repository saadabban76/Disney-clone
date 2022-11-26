import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import LineWeightIcon from '@material-ui/icons/LineWeight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react'
import styled from 'styled-components'
import './Header.css';
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();
    
    const [barActive, setBarActive] = useState(true);

    const loginHandler = (e) =>{
        history.push('/login');
        setBarActive(true);
    }

    return (
        <Nav>
            <LeftSide>
                <LeftSide1>
                    <IconButton className='IconButton' onClick={()=>setBarActive(!barActive)} >
                        {barActive ? 
                            <LineWeightIcon style={{color:'#A1A3A9',fontSize:'30px'}}/>
                            : <CloseIcon style={{color:'white',fontSize:'30px'}} />
                        }
                    </IconButton>
                    <IconButton>
                        <Logo src="/images/logo.svg"  onClick={e=>history.push('/')} />
                    </IconButton>
                </LeftSide1>
                <LeftSide2 className={barActive ? "LeftSide2" : "mobileView"} >
                    <Types>TV</Types>
                    <Types>Movies</Types>
                    <Types>Sports</Types>
                    <Types>Premium</Types>
                    <Types>Disney+</Types>
                    <Types style={{color:'#FFAA05',fontFamily:'fantasy',fontSize:'1.5rem'}}>Kids</Types>
                    <Types onClick={loginHandler} className='authorize'>
                        Login
                    </Types>
                </LeftSide2>
            </LeftSide>
            <RightSide>
                <RightSide1>
                    <SearchInput type='text' placeholder='Search' />
                    <SearchIcon style={{color:'#d4d4d4',position:'relative',left:'-20px',bottom:'0px'}} />
                </RightSide1>
                <RightSide2>
                    <AccountCircleIcon  onClick={()=>history.push('/login')} style={{color:'#d4d4d4',fontSize:'2rem',cursor:'pointer'}} />
                </RightSide2>
            </RightSide>
        </Nav>
    )
}

export default Header

const media = {
    mobile:'@media(max-width:1000px)',
    desktop:'@media(min-width:1000px)'
}


const Nav = styled.nav`
    display:flex;
    /* justify-content: space-between; */
    align-items: center;
    background-color: #131A28;
    height:75px;
    width:100vw;
`

const LeftSide = styled.div`
    flex:1;
    display:flex;
`

const Logo = styled.img`
    margin-left:15px;
    width:80px;
    height:50px;
    margin-top: -10px;
    ${media.mobile} {
        margin-left:-15px;
        width:60px;
    }
`

const LeftSide1 = styled.div`
    display:flex;
    align-items: center;
    .IconButton{
        display: none;
        ${media.mobile} {
            display:initial;
        }
    }
`

const LeftSide2 = styled.div`
    .authorize{
        font-variant-caps:all-petite-caps;
        font-size:1.4rem;
        background-color: #0063e5;
        color:#d2e1ff;
        width:98%;
        text-align:center;
        border-radius:5px;
        letter-spacing: 5px;
    }

    ${media.desktop} {
        position:relative;
        display: flex;
        flex-direction: row;
        height:auto;
        margin-top:0px;
        background-color: initial;
        align-items: center;
        justify-content: space-evenly;
        width: 500px;
        overflow: hidden;
        .authorize{
            display:none;
        }
    }
`

const Types = styled.h3`
    color:#b1b1b1;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight:400;
    cursor: pointer;
    &:hover{
        color:white;
    }

    ${media.mobile} {
        padding:8px;
        background-color:  #171f2f;
        /* border-bottom: 1px solid white; */
        font-size:1.2rem;
        font-weight: bold;
    }

`
const RightSide = styled.div`
    display:flex;
`

const RightSide1 = styled.div`
  display:flex;
`;

const RightSide2 = styled.div`
  margin-left:20px;
  margin-right:30px;
  ${media.mobile} {
      display:none;
  }
`;

const SearchInput = styled.input`
    padding:5px;
    width:190px;
    background:none;
    border:none;
    border-bottom: 1px solid #b1b1b1;
    &::placeholder,::-webkit-input-placeholder{
        color:#d4d4d4;
        font-family:sans-serif;
        font-size: 1;
    }
`;