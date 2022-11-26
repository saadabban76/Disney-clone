import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        adaptiveHight:true
      };
    return (
        <Carousel {...settings}>
            <Wrap>
                <img alt='img' src='/images/sliderImages/slider-scale1.jpg' />
            </Wrap>
            <Wrap>
                <img alt='img' src='/images/sliderImages/slider-scale2.jpg' />
            </Wrap>
            <Wrap>
                <img alt='img' src='/images/sliderImages/slider-scale3.jpg' />
            </Wrap>
            <Wrap>
                <img alt='img' src='/images/sliderImages/slider-scale4.jpg' />
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider

const media = {
    mobile:'@media(max-width:1000px)'
}

const Carousel = styled(Slider)`
    margin-top:10px;
    color:white;

    ul li button{
        &:before{
            font-size: 10px;
            color:rgba(150,158,171);
        }
    }

    li.slick-active button:before{
        color:white;
    }

    .slick-list{
        /* width:100px; */
        overflow:visible;
    }

    button{
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
    
    /* &:hover{
        button{
            visibility: visible;
            height:200px;
        }
    } */

`

const Wrap = styled.div`

    padding:0px 10px 0 10px;

    img{
        object-fit: fill;
        width:100%;
        height:580px;
        ${media.mobile} {
            min-height:290px;
            width:100%;
        }
        min-height: 320px;
        border-radius: 8px;
        transition-duration: 300ms;
        cursor: pointer;
    }

`