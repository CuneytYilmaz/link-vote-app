import React, { Component } from 'react';

class Nav extends Component {  
	render () {
    	return(
        	<nav className='nav'>
              <ul>
                <li className='left'>
                    <h2 className='m-0'>hepsiburada</h2>
                </li>
                <li className='right'>
                    Link Vote Challenge
                </li>
              </ul>
           </nav>
        );
    }
} 

export default Nav;