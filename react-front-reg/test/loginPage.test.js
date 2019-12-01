import React from 'react';
import {Provider} from 'react-redux';
import { mount, shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect, assert } from 'chai';
import { LoginPage } from '../src/LoginPage';
import { userActions } from '../src/_actions';

Enzyme.configure({ adapter: new Adapter() });

describe('Test case for login component', () => {

    it('should exists', function () {
        assert.isDefined(LoginPage)
    });

    it("username label", () => {
        const wrapper = shallow(<LoginPage/>);
        const forms = wrapper.find('label[htmlFor="username"]');
        expect(forms.length).to.equal(1);
    });

    it("login title", () => {
        const wrapper = shallow(<LoginPage/>);
        const forms = wrapper.find('h2');
        expect(forms.text()).to.equal('Login');

    });
    it('username check', () => {
        const wrapper = shallow(<LoginPage/>);
        wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'vladco'}});
        expect(wrapper.state('username')).to.equal('vladco');
    })

    it('password check', () => {
        const wrapper = shallow(<LoginPage/>);
        wrapper.find('input[type="password"]').simulate('change',{target: {name: 'password', value: 'ABa12345'}});
        expect(wrapper.state('password')).to.equal('ABa12345');
    })
    
    it('test username login in(correct data)', () => {

        const wrapper = shallow(<LoginPage/>);
        wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'vladco'}});
        wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'ABa12345'}});
    
        wrapper.find('form[name="form"]').simulate('submit',{
            preventDefault: () => {}
        });        
        expect(wrapper.state('submitted')).to.equal(true);
        expect(wrapper.state('loggedIn')).to.equal(true);
    })

});
