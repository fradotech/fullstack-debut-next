import { Container as MuiContainer } from '@mui/material';
import React from 'react';
import {
    ContainerContent,
    ContainerContentItem
} from './Container.atom.styled';

type ContainerProps = {
    children: React.ReactNode;
    showBackground?: boolean;
};

const Container: React.FC<ContainerProps> = ({ children, showBackground }) => {
    return (
        <MuiContainer>
            <ContainerContent className="container px-0">
                <ContainerContentItem background={!showBackground && 'white'}>
                    {children}
                </ContainerContentItem>
            </ContainerContent>
        </MuiContainer>
    );
};

export default Container;
