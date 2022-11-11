import styled from 'styled-components';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export const PasswordInputContainer = styled.div`
    position: relative;
`;

export const VisibleEye = styled(AiFillEye)`
    font-size: 25px;
    right: 10px;
    transform: translateY(-50%);
    top: 50%;
    position: absolute;
    cursor: pointer;
`;

export const InvisibleEye = styled(AiFillEyeInvisible)`
    font-size: 25px;
    right: 10px;
    transform: translateY(-50%);
    top: 50%;
    position: absolute;
    cursor: pointer;
`;
