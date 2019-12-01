import React from 'react';
import {Provider} from 'react-redux';
import { mount, shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect, assert } from 'chai';
import { RegisterPage } from '../src/RegisterPage';
import { userActions } from '../src/_actions';

Enzyme.configure({ adapter: new Adapter() });

describe('Test case for login component', () => {

    it('should exists', function () {
        assert.isDefined(RegisterPage)
    });

    it("name label", () => {
        const wrapper = shallow(<RegisterPage/>);
        const forms = wrapper.find('label[htmlFor="name"]');
        expect(forms.length).to.equal(1);
    });
    it("username label", () => {
        const wrapper = shallow(<RegisterPage/>);
        const forms = wrapper.find('label[htmlFor="username"]');
        expect(forms.length).to.equal(1);
    });
    it("email label", () => {
        const wrapper = shallow(<RegisterPage/>);
        const forms = wrapper.find('label[htmlFor="email"]');
        expect(forms.length).to.equal(1);
    });
    it("password label", () => {
        const wrapper = shallow(<RegisterPage/>);
        const forms = wrapper.find('label[htmlFor="password"]');
        expect(forms.length).to.equal(1);
    });

    it("image label", () => {
        const wrapper = shallow(<RegisterPage/>);
        const forms = wrapper.find('label[htmlFor="profile-picture"]');
        expect(forms.length).to.equal(1);
    });

    it("register title", () => {
        const wrapper = shallow(<RegisterPage/>);
        const forms = wrapper.find('h2');
        expect(forms.text()).to.equal('Register');

    });
    it('name check', () => {
        const wrapper = shallow(<RegisterPage/>);
        wrapper.find('input[name="name"]').simulate('change', {target: {name: 'name', value: 'Vlad'}});
        expect(wrapper.state('name')).to.equal('Vlad');
    })

    it('username check', () => {
        const wrapper = shallow(<RegisterPage/>);
        wrapper.find('input[name="username"]').simulate('change', {target: {name: 'username', value: 'vladco'}});
        expect(wrapper.state('username')).to.equal('vladco');
    })
    it('email check', () => {
        const wrapper = shallow(<RegisterPage/>);
        wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'vladco@gmail.com'}});
        expect(wrapper.state('email')).to.equal('vladco@gmail.com');
    })

    it('password check', () => {
        const wrapper = shallow(<RegisterPage/>);
        wrapper.find('input[type="password"]').simulate('change',{target: {name: 'password', value: 'ABa12345'}});
        expect(wrapper.state('password')).to.equal('ABa12345');
    })
    
    it('test user register (correct data)', () => {

        let wrapper = shallow(<RegisterPage/>);
        wrapper.find('input[name="name"]').simulate('change', {target: {name: 'name', value: 'Vlad'}});
        wrapper.find('input[name="username"]').simulate('change', {target: {name: 'username', value: 'vladco'}});
        wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'vladco@gmail.com'}});
        wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'ABa12345'}});
    
        wrapper.find('form[name="form"]').simulate('submit',{
            preventDefault: () => {}
        });        
        expect(wrapper.state('submitted')).to.equal(true);
    })

});
