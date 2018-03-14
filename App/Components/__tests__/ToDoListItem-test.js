import React from 'react';
import ToDoListItem from '../ToDoListItem';
import { shallow } from 'enzyme';


describe('testing ToDoListItem rendering', () => {
    it('renders as expected', () => {
        const wrapper = shallow(
            <ToDoListItem />
        )
        expect(wrapper).toMatchSnapshot();
        wrapper.setProps({ contentText: "Need to buy biscuits" })
        expect(wrapper).toMatchSnapshot();
        wrapper.setProps({ endAt: "Never" })
        expect(wrapper).toMatchSnapshot();
    })
})
