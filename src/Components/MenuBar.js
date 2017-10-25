import React from 'react'
import InputFormRefs from './InputFormRefs'
import './MenuBar.css'

const MenuBar = (props) => (
	<div className="menu-bar">
		<InputFormRefs 
			inputMessage="Search videos"
			buttonTitle="Search"
			onSend={ (value) => props.onSearch(value) }/>
	</div>
)

export default MenuBar