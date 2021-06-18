import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    width: 100px;
    height: 50px;

    border: none;
    border-radius: 10px;

    font-size: 18px;
    font-weight: 500;
`;

export const LockButton = styled(Button)`
    background-color: #41DC51;
    color: white;

    &:hover{
        background-color: #23B031;
    }
`;

export const UnlockButton = styled(Button)`
    background-color: orange;
    color: white;

    &:hover{
        background-color: darkorange;
    }
`;

export const ResetButton = styled(Button)`
    background-color: #FF2F2F;
    color: white;

    &:hover{
        background-color: #E02727;
    }

    &:disabled{
        background-color: lightgray;
    }
`;