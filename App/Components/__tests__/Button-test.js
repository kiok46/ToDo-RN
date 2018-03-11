import React from 'react';
import Button from '../Button';
import { shallow } from 'enzyme';


describe('testing Button rendering', () => {
    it('renders as expected', () => {
        const wrapper = shallow(
            <Button />
        )
        expect(wrapper).toMatchSnapshot();
        wrapper.setProps({ text: "Hello" })
        expect(wrapper).toMatchSnapshot();
        wrapper.setProps({ onPress: () => {} })
        expect(wrapper).toMatchSnapshot();
    })
})
