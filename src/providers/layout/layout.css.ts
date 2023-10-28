import { style } from '@vanilla-extract/css'

import { vars } from '../../styles/vars.css'
import { MAX_WIDTH } from '../../constants'

export const container = style({
    width: '100%',
    minHeight: 'calc(100vh - 50px)',
    paddingTop: 50
})

export const header = style({
    height: 50,
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: vars.elementBackground
})

export const headerContent = style({
    width: '100%',
    maxWidth: MAX_WIDTH,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 1rem'
})

export const button = style({
    width: 36,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    borderRadius: 100
})

export const content = style({
    width: '100%',
    maxWidth: MAX_WIDTH,
    backgroundColor: vars.subtleBackground,
    padding: '2rem',
    borderRadius: 10,
    margin: '0 auto'
})