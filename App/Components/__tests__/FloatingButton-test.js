import React from 'react';
import FloatingButton from '../FloatingButton';
import { shallow } from 'enzyme';


describe('testing FloatingButton rendering', () => {
    it('renders as expected', () => {
        const wrapper = shallow(
            <FloatingButton />
        )
        expect(wrapper).toMatchSnapshot();
    })
})
