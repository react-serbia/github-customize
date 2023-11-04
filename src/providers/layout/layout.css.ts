import { style } from '@vanilla-extract/css'

import { vars } from '../../styles/vars.css'
import { MAX_WIDTH } from '../../constants'

export const container = style({
    width: '100%',
    minHeight: 'calc(100vh - 50px)',
    paddingTop: 80
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
    backdropFilter: 'blur(9px)',
    WebkitBackdropFilter: 'blur(9px)'
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
    // backgroundColor: vars.subtleBackground,
    overflow: 'hidden',
    margin: '0 auto'
})

export const octocats = style({
    width: 'auto',
    minHeight: 300,
    backgroundImage: `url('/images/octocats.jpeg')`,
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: 10
})
