import React from 'react'
import Container from '../container/Container'
import styled from 'styled-components'
const ContainerHeader = styled.h1`
color: black;
margin-left: 40%;
margin-top: 10%;

`

const ContainerWrap = styled.div`
margin-top: 10%;
margin-right: 32%;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 15px;
`
const ContainerBorder = styled.div`
  
box-sizing: border-box;
width: 50%;
height: 50em;
border: solid #5B6DCD 5px;
padding: 70px;
border-radius: 5%;
margin-left: 25%;
> h1{
  margin-left: 40%;

}

/* margin-right: 60px; */
`


function StyleContainer()  {
    return (
      <>
        <ContainerHeader>
           Notice Board
        </ContainerHeader>
       
        <ContainerBorder>
         <h1>게시글</h1>
         <hr/>
          <ContainerWrap>
           <Container/>     
         </ContainerWrap>  
         </ContainerBorder> 
      </>   
        
    )
}

export default StyleContainer