import React from 'react'
import styled from 'styled-components';

function Viewer() {
    return (
        <Container>
            <Wrap>
                <video autoPlay muted loop>
                    <source src='/videos/disney.mp4' type='video/mp4' />
                </video>
                <img alt='viewerImage' src='/images/viewerImages/viewers-disney.png' />
            </Wrap>
            <Wrap>
                <video autoPlay muted loop>
                    <source src='/videos/pixar.mp4' type='video/mp4' />
                </video>
                <img alt='viewerImage' src='/images/viewerImages/viewers-pixar.png' />
            </Wrap>
            <Wrap>
                <video autoPlay muted loop>
                    <source src='/videos/marvel.mp4' type='video/mp4' />
                </video>
                <img alt='viewerImage' src='/images/viewerImages/viewers-marvel.png' />
            </Wrap>
            <Wrap>
                <video autoPlay muted loop>
                    <source src='/videos/national.mp4' type='video/mp4' />
                </video>
                <img alt='viewerImage' src='/images/viewerImages/viewers-national.png' />
            </Wrap>
            <Wrap>
                <video autoPlay muted loop>
                    <source src='/videos/star-wars.mp4' type='video/mp4' />
                </video>
                <img alt='viewerImage' src='/images/viewerImages/viewers-starwars.png' />
            </Wrap> 
        </Container>
    )
}

export default Viewer

const Container = styled.div`
    margin-top:30px;
    padding:30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
    position: relative;
    overflow:hidden;
    display: flex;
    max-width:230px;
    border-radius: 6px;
    border:1px solid #504f4f;
    cursor: pointer;
    /* box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px; */
        transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;
    &:hover{
        /* box-shadow:rgb(0 0 0 /80%) 0px 46px 50px -10px,
        rgb(0 0 0 / 73%) 0px 30px 22px -10px; */
        transform: scale(1.08);
        border-color: rgba(249,249,249,0.8);
        video{
            visibility: visible;
        }
    }
    video{
        visibility: hidden;
        width:100%;
        height:100%;
        object-fit: fill;
        z-index :-1;
    }
    img{
        position: absolute;
        width:100%;
        height: 100%;
        object-fit: cover;
        z-index:1;
    }
`
