import layout from './layout'
import theme from './theme'

export default {
    row: `flex-direction: row;`,
    column: `flex-direction: column;`,
    statusBar: `padding-top: ${layout.statusBar}`,
    flex: 'flex: 1;',

    router: `
        background-color: ${theme.white.base};
        flex: 1;
    `,

    bold: `font-weight: bold; `,

    center: `
        justify-content: center;
        align-items: center;
    `,

    bordersolid: `
        border-style: solid;
        border-color: ${theme.border};
    `,
}
