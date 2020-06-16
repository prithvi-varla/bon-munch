import React from 'react'

import bonMunchLogo from '../../assets/images/bon-munch.png'

export default () => 
  <div className={'loading-wrapper fadein'}>
    <div className={'loading'}>
      <div className={'background'}>
      <img src={bonMunchLogo} />
      </div>
      <div className={'spinner'} />
    </div>
  </div>