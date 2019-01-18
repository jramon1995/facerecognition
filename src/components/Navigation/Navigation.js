import React from 'react';

const Navigation = ({OnRouteChange, isSignedIn}) => {
	if(isSignedIn) {
		return (
			<nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => OnRouteChange('Signout')} className='f3 link dim black underline pa3 pointer'> Sign out </p>
			</nav>
		);
	} else {
		return (
			<nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => OnRouteChange('Signin')} className='f3 link dim black underline pa3 pointer'> Sign in </p>
				<p onClick={() => OnRouteChange('Register')} className='f3 link dim black underline pa3 pointer'> Register</p>
			</nav>
			)
	}
}

export default Navigation;