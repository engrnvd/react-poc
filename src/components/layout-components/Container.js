import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  padding: 1em;
  gap: 1em;
  flex-wrap: wrap;
`
export default function Container({children, ...props}) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
}

