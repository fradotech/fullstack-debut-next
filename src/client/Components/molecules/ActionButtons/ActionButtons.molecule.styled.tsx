import { IoMdCreate, IoMdInformationCircle, IoMdTrash } from 'react-icons/io';
import styled from 'styled-components';

type ActionButtonsContainerProps = {
    position: 'flex-end' | 'center' | 'flex-start';
};

export const ActionButtonsContainer = styled.h2<ActionButtonsContainerProps>`
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.position};
`;

export const ActionButtonsDetailContainer = styled.button`
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #ffffff;
    font-size: 0;
    -webkit-transition: -webkit-box-shadow 0.25s;
    transition: -webkit-box-shadow 0.25s;
    -o-transition: box-shadow 0.25s;
    transition: box-shadow 0.25s;
    transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
    margin-right: 0;

    &:hover {
        -webkit-box-shadow: 0 5px 20px rgba(227, 230, 236, 0.85);
        box-shadow: 0 5px 20px rgba(227, 230, 236, 0.85);
    }
`;

export const ActionButtonsDetailIcon = styled(IoMdInformationCircle)`
    font-size: 16px;
    fill: #007FD0;
    width: 1.5em;
    height: 1.5em;
`;

export const ActionButtonsEditIcon = styled(IoMdCreate)`
    font-size: 17px;
    fill: #11142d;
    width: 1.3em;
    height: 1.3em;
`;

export const ActionButtonsDeleteIcon = styled(IoMdTrash)`
    font-size: 16px;
    fill: #FF0000;
    width: 1.5em;
    height: 1.5em;
`;