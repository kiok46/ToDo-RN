import React from 'react';
import GoogleAuthButton from '../GoogleAuthButton';
import { shallow } from 'enzyme';


describe('testing GoogleAuthButton rendering', () => {
    it('renders as expected', () => {
        const wrapper = shallow(
            <GoogleAuthButton />
        )
        expect(wrapper).toMatchSnapshot();
        wrapper.setProps({ showActivity: true })
        expect(wrapper).toMatchSnapshot();
    })
})
