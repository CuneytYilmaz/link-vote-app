import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddLink } from '../actions/shared'

class AddLinkContainer extends Component {  
    state = {
    	linkName: '',
        linkURL: '',
    }

    handleChangeLinkName = (e) => {
    	const linkName = e.target.value
      
      	this.setState({
        	linkName
        })
    }

	handleChangeLinkURL = (e) => {
    	const linkURL = e.target.value
      
      	this.setState({
        	linkURL
        })
    }

    handleAdd = (e) => {
    	e.preventDefault();
      
      	const { linkName, linkURL } = this.state
        const { dispatch } = this.props
      
      	dispatch(handleAddLink(linkName, linkURL));
      
      	this.setState({
        	linkName: '',
            linkURL: ''
        })
    }

    render () {
        const { linkName, linkURL } = this.state

        return (
            <div>
                <input 
          			placeholder='e.g. Alphabet'
          			className=''
          			onChange={this.handleChangeLinkName}
  					text={linkName}
          		/>
                
                <input 
          			placeholder='e.g. http://abc.xyz'
          			className=''
          			onChange={this.handleChangeLinkURL}
  					text={linkURL}
          		/>
                
                <button
					type='submit'
					disabled={linkName === '' || linkURL === ''}
					onClick={this.handleAdd}
					className=''
				>
					ADD
				</button>
            </div>
        )
    }
}

export default connect()(AddLinkContainer)
