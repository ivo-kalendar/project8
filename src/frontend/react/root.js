import React from 'react'
import ReactDOM from 'react-dom'
import Index from './index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faAd, faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCoffee, faAd, faEnvelopeSquare, faPhoneSquare)

ReactDOM.render(<Index />, document.getElementById('react-root'))