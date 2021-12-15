import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.header`
display: flex;
  padding: 0.5em 1em;
`
export default function Header({children, ...props}) {
    return (
        <StyledHeader>
            <h1>Frontend POC</h1>
        </StyledHeader>
    );
}

