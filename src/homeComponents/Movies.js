import React from 'react';
import styled from 'styled-components';
import Division from './MoviesComponents/Division';

function Movies() {
    return (
        <Container>
            <Division title='Recommended For You' />
            <Division title='You May Like' />
            <Division title='Your Favorites' />
            <Division title='Cartoons' />
        </Container>
    )
}

export default Movies

const Container = styled.div`
`
