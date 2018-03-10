import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';


describe('testing Card rendering', () => {
    it('renders as expected', () => {
        const wrapper = shallow(
            <Card />
        )
        expect(wrapper).toMatchSnapshot();
    })
})
