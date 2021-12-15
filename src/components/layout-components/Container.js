import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
display: flex;
`
export default function Container({children, ...props}) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
}

