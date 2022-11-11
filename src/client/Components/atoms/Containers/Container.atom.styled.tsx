import styled from 'styled-components';

type ContainerContentItemProps = {
    background: string;
};

export const ContainerContent = styled.div`
    padding: 0;
    
    @media only screen and (max-width: 1280) {
        padding: 0 20px;
    }
`;

export const ContainerContentItem = styled.div<ContainerContentItemProps>`
    padding: 20px;
    position: relative;
    border-radius: 24px;
    background: ${(props) => props.background};

    &:before {
        content: '';
        position: absolute;
        top: 43px;
        left: 32px;
        right: 32px;
        bottom: -43px;
        z-index: -1;
        background: #e3e6ec;
        opacity: 0.91;
        -webkit-filter: blur(86.985px);
        filter: blur(86.985px);
        border-radius: 24px;
    }

    @media only screen and (max-width: 767px) {
        padding: 32px 0;

        &:before {
            -webkit-filter: blur(46.985px);
            filter: blur(46.985px);
        }
    }
`;
