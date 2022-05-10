import styled from 'styled-components'

export const Box = styled.div`
    height: 20px;
    width: ${props => props.change ? 'auto' : '40px'};
    background-color: whitesmoke;
    padding: 20px 0px;
    display: flex;
    justify-content: ${props => props.change ? 'right' : 'center'};
    align-items: center;
    padding-right: ${props => props.change ? '50px' : '14px'};
    border-radius: 1rem;
    position: ${props => props.change ? '' : 'absolute'};
    right: ${props => props.change ? '' : 0};

`

export const IconBox = styled.div`
    position: ${props => props.change ? 'absolute' : ''};
    left: ${props => props.change ? 0 : ''};
    right: ${props => props.change ? '' : 0};
    margin-left: 10px;
`