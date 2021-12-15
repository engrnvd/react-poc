import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  padding: 1em;
  background-color: ${({theme}) => theme.colors.headerBg};
  position: sticky;
  top: 0
`

const SiteTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
`
export default function Header({children, ...props}) {
    return (
        <StyledHeader>
            <SiteTitle>Frontend POC</SiteTitle>
        </StyledHeader>
    );
}

