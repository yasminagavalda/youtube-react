import React from 'react'
import VideoItem from './VideoItem'
import { shallow } from 'enzyme'

describe('VideoItem', () => {
	it('renders correctly', () => {

		const video = {
			title: "Pulp - Common People",
			id: "yuTMWgOduFM",
			image: "https://i.ytimg.com/vi/yuTMWgOduFM/mqdefault.jpg"
		}
 
		const component = shallow(<VideoItem video={video}/>)
		expect(component).toMatchSnapshot()
	})
})