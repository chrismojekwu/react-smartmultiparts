import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import { FormOne } from '../components/FormOne/FormOne'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test('renders without crashing', () => {
    const fields = ["Title", "Submitee", "Name", "Comments", "filename"];

    const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];
    
    const printData = (data) => { 
        console.log(data);
    };

    render(<FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>);
});

test('it renders the initial form', () => {
    const fields = ["Title", "Submitee", "Name", "Comments", "filename"];

    const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];
    
    const printData = (data) => { 
        console.log(data);
    };

    render(<FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>);

    const form = screen.getByRole('form');

    expect(form).toBeInTheDocument();
});

test('it renders the correct "text" type inputs when file is uploaded', () => {
    const fields = ["Title", "Submitee", "Name"];

    const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];
    
    const printData = (data) => { 
        console.log(data);
    };

    const wrapper = mount(<FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>)
    const file = new File(["test"], "test.jpg", {
        type: "image/jpeg"
    });

    wrapper.find('input').first().simulate('change', {target: {files: [file]}});

    for(let i = 0; i < fields.length; i++){

        const element = wrapper.find(`#${fields[i]}`);

        expect(element.html()).toEqual(`<input type="text form-textinput\" name="${fields[i]}" id="${fields[i]}">`);
    };

});

test('it renders the correct text area when file is uploaded with comments field', () => {
    const fields = ["cOmmEnts"];

    const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];
    
    const printData = (data) => { 
        console.log(data);
    };

    const wrapper = mount(<FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>)
    const file = new File(["test"], "test.jpg", {
        type: "image/jpeg"
    });
    
    wrapper.find('input').first().simulate('change', {target: {files: [file]}});

    expect(wrapper.exists('#smartparts-comments')).toBe(true);
});

test('it renders the correct span when file is uploaded with filename field', () => {
    const fields = ["filEnaMe"];

    const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];
    
    const printData = (data) => { 
        console.log(data);
    };

    const wrapper = mount(<FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>)
    const file = new File(["test"], "test.jpg", {
        type: "image/jpeg"
    });
    
    wrapper.find('input').first().simulate('change', {target: {files: [file]}});

    expect(wrapper.find('#filename-span').text()).toBe(`Filename: test.jpg`);
});

test('it renders a select element with the correct options when provided a select object', () => {
    const fields = ["filEnaMe"];

    const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];
    
    const printData = (data) => { 
        console.log(data);
    };

    const selectObj = {
        query: "Whats your name?",
        select: ["Chris", "Emeka", "Maya", "Pat", "Arthur"],
    };

    const wrapper = mount(<FormOne fields={fields} fileTypes={fileTypes} cb={printData} select={selectObj}/>);
    const file = new File(["test"], "test.jpg", {
        type: "image/jpeg"
    });
    
    wrapper.find('input').first().simulate('change', {target: {files: [file]}});

    expect(wrapper.exists({name: "select"})).toBeTruthy();
    
    for(let i = 0; i < selectObj.select.length; i++){

        const element = wrapper.find(`#${selectObj.select[i]}`);

        expect(element.html()).toEqual(`<option value="${selectObj.select[i]}" id="${selectObj.select[i]}">${selectObj.select[i]}</option>`);
    };
    
});

test('it renders an img element when provided with logo prop', () => {
    const fields = ["Title", "Submitee", "Name", "Comments", "filename"];

    const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];
    
    const printData = (data) => { 
        console.log(data);
    };

    render(<FormOne fields={fields} fileTypes={fileTypes} cb={printData} logo={"/fakepath.jpg"}/>);

    const logo = screen.getByRole('img');

    expect(logo).toBeInTheDocument();
});

test('Empty Fields behavior no select', () => {
    const fields = [];

    const fileTypes = [];
    
    const printData = (data) => { 
        console.log(data);
    };

    const wrapper = mount(<FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>)

    const file = new File(["test"], "test.jpg", {
        type: "image/jpeg"
    });

    wrapper.find('input').first().simulate('change', {target: {files: [file]}});

    expect(wrapper.find('#smartparts-error').text() === "Internal Error").toBe(true);
});

test('Empty Fields behavior with select', () => {
    const fields = [];

    const fileTypes = [];
    
    const printData = (data) => { 
        console.log(data);
    };

    const wrapper = mount(<FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>)

    const file = new File(["test"], "test.jpg", {
        type: "image/jpeg"
    });

    wrapper.find('input').first().simulate('change', {target: {files: [file]}});

    expect(wrapper.find('#smartparts-error').text() === "Internal Error").toBe(true);
});