import React from 'react'
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import styled from 'styled-components';
import { selectMovies } from '../../redux/slices/movieSlice';
import MovieCover from './MovieCover';
import { Link } from 'react-router-dom';

function Division(props) {

    const myMovies = useSelector(selectMovies);

    var settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 6,
        responsive: [
          {
            breakpoint: 1909,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 5,
              initialSlide: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 5,
              infinite: true,
            }
          }
        ]
      };
    return (
        <Container>
            <h2>{props.title}</h2>
            <MoviesList {...settings}>
                {myMovies && 
                    myMovies.map((movie)=>(
                    <Link to={`detail/${movie.id}`}>
                        <MovieCover
                            title={movie.title} 
                            timestamp={movie.subTitle} 
                            details={movie.description}
                            cardImage={movie.cardImg}
                            key={movie.id}
                            id={movie.id}
                        />
                    </Link>
                    ))
                }
            </MoviesList>
        </Container>
    )
}

export default Division

const media = {
    mobile:'@media(max-width:1000px)'
}

const Container = styled.div`
    padding-bottom: 50px;
    z-index:-1;
    h2{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
`

const MoviesList = styled(Slider)`
    /* margin-bottom:50px; */


    .slick-list{
        /* width:100px; */
        overflow:visible;
    }

    button{
        /* display: none; */
        z-index:1;
        visibility: hidden;
    }

    button:before{
        ${media.mobile} {
            display:none;
        }
        /* line-height: 3; */
        font-size:40px;
    }
    
    &:hover{
            button{
                ${media.mobile} {
                    visibility: hidden;                    
                }
            }
        button{
            visibility: visible;
            height:200px;
        }
    }

`