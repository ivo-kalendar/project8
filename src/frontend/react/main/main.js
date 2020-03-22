import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Main = () => (
  <div className='icon-container'>
    <FontAwesomeIcon className="icon" icon="phone-square" />
    <FontAwesomeIcon className="icon" icon="envelope-square" />
    <FontAwesomeIcon className="icon" icon={['fab', 'github-square']} />
    <FontAwesomeIcon className="icon" icon={['fab', 'linkedin']} />
    <br/>
    <FontAwesomeIcon className="icon" icon={['fab', 'youtube-square']} />
    <FontAwesomeIcon className="icon" icon={['fab', 'facebook-square']} />
    <FontAwesomeIcon className="icon" icon={['fab', 'instagram-square']} />
    <FontAwesomeIcon className="icon" icon={['fab', 'twitter-square']} />
    <br/>
    <FontAwesomeIcon className="icon" icon={['fab', 'google-plus-square']} />
    <FontAwesomeIcon className="icon" icon={['fab', 'whatsapp-square']} />
    <FontAwesomeIcon className="icon" icon={['fab', 'app-store-ios']} />
    <FontAwesomeIcon className="icon" icon={['fab', 'pinterest-square']} />
  </div>
)

export default Main