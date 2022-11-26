import React , { useEffect, useState } from 'react'
import styled from 'styled-components';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useParams } from 'react-router-dom';
import db from '../../firebase';

function MovieDetail() {

    const { id } = useParams();
    const [ movie, setMovie ] = useState()

    useEffect(() => {
        // Grab the movie info from Db
        db.collection('movies')
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                // Save the movie data
                setMovie(doc.data());
            }else{
                // redirect to home page
            }
        })
    }, [])
    
    return (
        <Container>
            {movie && (
            <>
                <MovieScreen>
                <img src={movie.backgroundImg} alt='detailImage' />
                <span>
                        <PlayArrowIcon style={{fontSize:'50px',color:'white'}} />
                        <h3>Watch Movie</h3>
                </span>
                <InsideContainer>
                    <h2>{movie.title}</h2>
                    <h4>{movie.subtitle}</h4>
                    <p>{movie.description}</p>
                </InsideContainer>
            </MovieScreen>
            <Trailer>
                <h2>Trailers & Extras</h2>
                <Wrap>
                    <img src={movie.titleImg} alt='movieImage' />
                    <span>
                            <PlayArrowIcon style={{fontSize:'38px',color:'#CDCED1',marginRight:'5px'}} />
                            Watch Trailer - {movie.title}
                        </span>
                    <Description className={'description'}>
                        <h6>{movie.type}</h6>
                    </Description>
                </Wrap>
            </Trailer>
            <Morelikethis>

            </Morelikethis>
            </>
            )}
        </Container>            
    )
}

export default MovieDetail

const media = {
    mobile:'@media(max-width:1000px)'
}


const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    height:100%;
    background: #0C111B center center / cover no-repeat fixed;
`

const MovieScreen = styled.div`

    ${media.mobile} {
        width:100%;
        height:500px;
    }

    position:relative;
    margin-top:50px;
    display:flex;
    align-items: center;
    width:80%;
    height:600px;
    border-radius:7px;
    /* z-index:1; */

    span{
        &:hover{
            h3{
                color:whitesmoke;
            }
        }
        z-index:555555555;
        cursor: pointer;
        position: absolute;
        left:7%;
        bottom:37px;
        display:flex;
        align-items: center;
        width:38%;
        h3{
            margin-left:13px;
            color:#CDCED1;
            font-size:2;
            font-weight:bolder;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
    }

    &:before{
        content:'';
        ${media.mobile} {
            background: linear-gradient(0deg, hsla(216, 77%, 5%, 1) 10%, hsla(216, 53%, 10%, 0) 30%);
        }
        position: absolute;
        background: linear-gradient(90deg, hsla(216, 77%, 5%, 1) 23%, hsla(216, 53%, 10%, 0) 44%);
        top:0%;
        left:0%;
        bottom:0%;
        right:0%;
        z-index:1;
    }

    
    img{
        ${media.mobile} {
            object-fit: cover;
            left:0%;
            border-radius:7px;
            height:100%;
            width:100%;
    }
        position:absolute;
        width:80%;
        height:100%;
        top:0%;
        bottom:0%;
        left:20%;
        object-fit: cover;
        border-radius:7px;
    }
`

const InsideContainer = styled.div`

    ${media.mobile} {
        display:none;
    }

    display:flex;
    position:relative;
    flex-direction: column;
    margin-left: 80px;
    width:40%;
    height:80%;
    z-index:1111111;

        h2{
        color:white;
        font-size:2rem;
        font-variant-caps: titling-caps;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight:bolder;
        text-transform:capitalize;
        letter-spacing: 1px;
    }

    h4{
        color:#4A524D;
        font-size:1.4rem;
        font-weight:2;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        margin-top:10px;
    }

    p{
        padding-right:15px;
        white-space:normal;
        color:#efdddd;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: 1;
        font-size:1.2rem;
        word-wrap: inherit;
        margin-top:20px;
    }
`

const Trailer = styled.div`
    ${media.mobile} {
        margin-left:5%;
    }
    align-self: flex-start;
    margin:40px 0px 0px 100px;
    h2{
        ${media.mobile} {
            font-size:1.2rem;
        }
        color:white;
        font-size:1.7rem;
        font-variant-caps: titling-caps;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight:bolder;
        text-transform:capitalize;
        letter-spacing: 1px;
    }
`

const Wrap = styled.div`
    margin-top: 20px;
    position: relative;
    border-radius: 15px;
    /* overflow: hidden; */
    display: flex;
    flex-direction: column;
    max-width:400px;
    min-width:280px;
    height:225px;
    cursor: pointer;
    border:none;
    transform:scale(0.90);
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;
    z-index:1;
    &:hover{
        z-index:1;
        border:none;
        transform: scalex(1.10);
        transform: scaley(1);
        box-shadow:rgb(0 0 0 /80%) 0px 46px 50px -10px,
        rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    }
    img{
        overflow:visible;
        object-fit: cover;
        border-radius: 15px;
        width:100%;
        height:100%;
        &:hover{
            transform: scalex(1.10);
            transform: scaley(1);
        }
    }

    span{
        ${media.mobile} {
            font-size:1rem;
        }
        border-radius: 15px;
        height:30%;
        width:100%;
        position:absolute;
        background-image: linear-gradient(180deg,rgba(0,0,0,0) ,#1C2334 45%);
        z-index:11111;
        cursor: pointer;
        display:flex;
        bottom:0%;
        align-items: center;
        color:white;
        font-size:1.2rem;
        font-weight:bolder;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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
    position:absolute;
    top:5%;
    right:7%;
    z-index:111111;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    h6{
        color:white;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: bolder;
        font-size:1.2rem;
        font-weight:bolder;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    ${media.mobile} {
        display: none;
    }
`

const Morelikethis = styled.div``