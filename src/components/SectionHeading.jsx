import React from 'react'
import styled from 'styled-components'

const SectionHeader = styled.h2`
    margin: 0;
    color: #fff;
    font-size: 5rem;
    margin-bottom: 3vw;
    font-size: 100px;
    span {
        background: #f6c388;
        background: -webkit-linear-gradient(
        140deg,
        #f6c388,
        #3a2818
        );
        background: linear-gradient(
        140deg,
        #f6c388,
        #3a2818
        );
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
        background-size: 100%;
    }
`


const SectionHeading = ({primary, span}) => {
  return (
    <SectionHeader>{primary} <span>{span}</span></SectionHeader>
  )
}

export default SectionHeading