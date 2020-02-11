import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} 
          className='f4 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib white pointer'>
          ログアウト</p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} 
          className='f4 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib white pointer'>ログイン</p>
          <p onClick={() => onRouteChange('register')} 
          className='f4 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib white pointer'>登録</p>
        </nav>
      );
    }
}

export default Navigation;