import React, { Component } from 'react'

class InputFormRefs extends Component {

	constructor(props) {
		super(props)

		this.form = null
	}

	search() {
		const input = this.form.term
		this.props.onSend(input.value)
	}

	render() {
		return (
			<form
				onSubmit={ (event) => {
					event.preventDefault()
					this.search() 
				}} ref={(form) => this.form = form } >
				<input name="term" placeholder={this.props.inputMessage} /> 
	  		<button>{this.props.buttonTitle}</button>
	  	</form>
		)
	}
}

	export default InputFormRefs