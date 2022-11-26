import React from 'react'
import styled from 'styled-components'

function MovieCover({id, title , timestamp, cardImage}) {
    return (
        <Wrap>
            <img src={cardImage} alt='cardImage' />
            <Description className={'description'}>
                <h4>{title}</h4>
                <h6>{timestamp}</h6>
                {/* <p>{details}</p> */}
            </Description>
        </Wrap>
    )
}

export default MovieCover

const media = {
    mobile:'@media(max-width:1000px)'
}

const Wrap = styled.div`
    color:white;
    position: relative;
    border-radius: 6px;
    display: flex;
    width:260px;
    height:360px;
    cursor: pointer;
    border:none;
    transform:scale(0.90);
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;
    z-index:1;

    ${media.mobile} {
        width:200px;
        height:200px;
    }

    &:hover{
        z-index:1;
        border:none;
        transform: scale(1.10);
        box-shadow:rgb(0 0 0 /80%) 0px 46px 50px -10px,
        rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    
        .description{
            visibility: visible;
            overflow: hidden;
            z-index:111111111111;
        }

    }
    img{
        overflow:visible;
        object-fit: fill;
        border-radius: 6px;
        width:100%;
        height:100%;
    }

    button:before{
        ${media.mobile} {
            display:none;
        }
        /* line-height: 3; */
        font-size:40px;
    }

`

const Description = styled.div`
    visibility: hidden;
    position:absolute;
    overflow: visible;
    top:68%;
    padding-left:14px;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 6px;
    height:40%;
    width:100%;
    background-image: linear-gradient(180deg,rgba(0,0,0,0) ,#1C2334 45%);
    h4{
        font-size:1rem;
        font-variant-caps: titling-caps;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight:bolder;
        text-transform:capitalize;
        letter-spacing: 1px;
    }

    h6{
        font-size:0.9rem;
        font-weight:2;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    p{
        padding-right:15px;
        white-space:normal;
        color:#efdddd;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: 1;
        font-size:0.8rem;
        word-wrap: break-word;
        text-overflow:ellipsis;
        height:20px;
    }
    ${media.mobile} {
        display: none;
    }
`
