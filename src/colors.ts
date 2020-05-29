import { IColors } from '@meetio/scheme-generator';
import { colors } from '@primer/primitives';

const dark: IColors = {
    cursor: colors.blue[2],
    foreground: colors.gray[0],
    background: '#1f2428',
    comments: '#637777',
    black: '#1b1f23',
    white: '#fff',
    gray: colors.gray[0],
    blue: colors.blue[3],
    green: colors.green[3],
    yellow: colors.yellow[0],
    orange: colors.orange[3],
    red: colors.red[3],
    purple: colors.purple[3],
    pink: colors.pink[3],
    deprecated: colors.red[7],
    invalid: colors.red[7],
    diffAdded: '#28a74580',
    diffModified: '#e2b93d80',
    diffDeleted: '#d73a4980',
};

const light: IColors = {
    cursor: colors.blue[7],
    foreground: colors.gray[9],
    background: '#fff',
    comments: colors.gray[5],
    black: '#1b1f23',
    white: '#fff',
    gray: colors.gray[9],
    blue: colors.blue[6],
    green: colors.green[6],
    yellow: colors.yellow[9],
    orange: colors.orange[6],
    red: colors.red[5],
    purple: colors.purple[5],
    pink: colors.pink[5],
    deprecated: '#ffc777a1',
    invalid: '#d46c6c66',
    diffAdded: '#28a74580',
    diffModified: '#e2b93d80',
    diffDeleted: '#d73a4980',
};

export { light, dark };
