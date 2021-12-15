import React from 'react';
import styled from "styled-components";

const StyledSkeleton = styled.div`
  background-color: hsl(0, 0%, 16%);
  width: 100%;
  height: ${({height}) => height || '1rem'};
  margin: 1em 0;
`
export default function Skeleton({height, ...props}) {
    return (
        <StyledSkeleton height={height}/>
    );
}

