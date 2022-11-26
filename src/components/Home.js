import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import db from '../firebase';
import Movies from '../homeComponents/Movies';
import ImageSlider from '../homeComponents/Slider';
import Viewer from '../homeComponents/Viewer';
import { setMovies } from '../redux/slices/movieSlice';

function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot)=>{
            const tempMovies = snapshot.docs.map((doc)=>{
                return { id:doc.id, ...doc.data()}
            })
                dispatch(setMovies(tempMovies));
        })
    })

    return (
        <Container>
            <ImageSlider />
            <Viewer />
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
    position:relative;
    width:100vw;
    /* height:100vh; */
    max-height: max-content;
    overflow: hidden;
    color:white;
    display:flex;
    flex-direction: column;
    min-height: calc(100vh - 75px);
    padding:0 calc(3.5vw + 5px);
    color:white;
    &::before{
        content:'';
        background: #0C111B center center / cover no-repeat fixed;
        position: absolute;
        top:0px;
        left:0px;
        right:0px;
        bottom:0px;
        z-index:-1 !important;
    }
`