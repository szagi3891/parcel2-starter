import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

interface ButtonInnerPropsType {
    version: 'version1' | 'version2' | 'version3',
    children: React.ReactNode,
}

const calculateColor = (version: 'version1' | 'version2' | 'version3'): string => {
    if (version === 'version1') {
        return 'color: red;';
    }

    if (version === 'version2') {
        return 'color: blue;';
    }

    return `
        font-size: 16px;
        color: green;
    `;
};

const ButtonInner = styled('span')<ButtonInnerPropsType>`
    ${props => calculateColor(props.version)}
    border: 1px solid black;
`;

interface ButtonPropsType {
    version: 'version1' | 'version2' | 'version3',
    children: React.ReactNode,
}

export const Button = observer((props: ButtonPropsType) => {
    const { version, children } = props;

    return (
        <button>
            <ButtonInner version={version}>
                { children }
            </ButtonInner>
        </button>
    )
});

