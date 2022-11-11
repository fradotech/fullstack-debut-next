import Link from 'next/link';
import React, { MouseEventHandler } from 'react';
import {
    ActionButtonsContainer,
    ActionButtonsDeleteIcon,
    ActionButtonsDetailContainer,
    ActionButtonsDetailIcon,
    ActionButtonsEditIcon
} from './ActionButtons.molecule.styled';

type ActionButtonsProps = {
    updateLink?: string;
    onDelete?: MouseEventHandler<HTMLButtonElement>;
    detailLink?: string;
    position?: 'flex-end' | 'center' | 'flex-start';
};

const ActionButtons: React.FC<ActionButtonsProps> = ({
    updateLink,
    onDelete,
    detailLink,
    position = 'flex-start',
}) => {
    return (
        <ActionButtonsContainer position={position}>
            {detailLink && (
                <Link href={detailLink}>
                    <ActionButtonsDetailContainer>
                        <ActionButtonsDetailIcon />
                    </ActionButtonsDetailContainer>
                </Link>
            )}

            {updateLink && (
                <Link href={updateLink}>
                    <ActionButtonsDetailContainer>
                        <ActionButtonsEditIcon />
                    </ActionButtonsDetailContainer>
                </Link>
            )}

            {onDelete && (
                <ActionButtonsDetailContainer onClick={onDelete}>
                    <ActionButtonsDeleteIcon />
                </ActionButtonsDetailContainer>
            )}

        </ActionButtonsContainer>
    );
};

export default ActionButtons;
