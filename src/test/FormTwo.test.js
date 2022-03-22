import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import {FormTwo} from '../components/FormTwo/FormTwo';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


test('renders without crashing',() => {

    const printData = (data) => { 
        console.log(data);
    };

    const formObj = {
        wav: ["Title", "Artist", "Comments"],
        mp3: ["Title", "Artist"],
        jpg: ["Title", "Subject", "Source"]
    };
    
    render(<FormTwo fileTypes={formObj} cb={printData}/>);
});

test('renders the initial form',() => {

    const printData = (data) => { 
        console.log(data);
    };

    const formObj = {
        wav: ["Title", "Artist", "Comments"],
        mp3: ["Title", "Artist"],
        jpg: ["Title", "Subject", "Source"]
    };
    
    render(<FormTwo fileTypes={formObj} cb={printData}/>);

    const form = screen.getByRole('form');

    expect(form).toBeInTheDocument();
});

test('renders the correct "text" type inputs for different file types',() => {

    const printData = (data) => { 
        console.log(data);
    };

    const formObj = {
        wav: ["Title", "Artist", "Source"],
        mp3: ["Title", "Artist"],
        jpg: ["Title", "Subject", "Source"]
    };
    
    const wrapper = mount(<FormTwo fileTypes={formObj} cb={printData}/>);

    const jpgFile = new File(["test"], "test.jpg", {
        type: "image/jpeg"
    });

    wrapper.find('input').first().simulate('change', {target: {files: [jpgFile]}});

    for(let i = 0; i < formObj.jpg.length; i++){

        const element = wrapper.find(`#${formObj.jpg[i]}`);

        expect(element.html()).toEqual(`<input type="text form-textinput\" name="${formObj.jpg[i]}" id="${formObj.jpg[i]}">`);
    };

    const mp3File = new File(["test"], "test.mp3", {
        type: "audio/mpeg"
    });

    wrapper.find('input').first().simulate('change', {target: {files: [mp3File]}});

    for(let i = 0; i < formObj.mp3.length; i++){

        const element = wrapper.find(`#${formObj.mp3[i]}`);

        expect(element.html()).toEqual(`<input type="text form-textinput\" name="${formObj.mp3[i]}" id="${formObj.mp3[i]}">`);
    };

    const wavFile = new File(["test"], "test.wav", {
        type: "audio/wav"
    });

    wrapper.find('input').first().simulate('change', {target: {files: [wavFile]}});

    for(let i = 0; i < formObj.wav.length; i++){

        const element = wrapper.find(`#${formObj.wav[i]}`);

        expect(element.html()).toEqual(`<input type="text form-textinput\" name="${formObj.wav[i]}" id="${formObj.wav[i]}">`);
    };
});

test('it renders the correct text area when file is uploaded with comments field',() => {

    const printData = (data) => { 
        console.log(data);
    };

    const formObj = {
        wav: ["Title", "Artist", "Comments"],
        mp3: ["Title", "Artist"],
        jpg: ["Title", "Subject", "Source"]
    };
    
    const wrapper = mount(<FormTwo fileTypes={formObj} cb={printData}/>);

    const wavFile = new File(["test"], "test.wav", {
        type: "audio/wav"
    });

    wrapper.find('input').first().simulate('change', {target: {files: [wavFile]}});

    expect(wrapper.exists('#smartparts-comments')).toBe(true);
});

test('it renders the correct span when file is uploaded with filename field',() => {

    const printData = (data) => { 
        console.log(data);
    };

    const formObj = {
        wav: ["Title", "Artist", "Comments", "filEnaMe"],
        mp3: ["Title", "Artist"],
        jpg: ["Title", "Subject", "Source"]
    };
    
    const wrapper = mount(<FormTwo fileTypes={formObj} cb={printData}/>);

    const wavFile = new File(["test"], "test.wav", {
        type: "audio/wav"
    });

    wrapper.find('input').first().simulate('change', {target: {files: [wavFile]}});

    expect(wrapper.find('#filename-span').text()).toBe(`Filename: test.wav`);
});

test('it renders a select element with the correct options when provided a select object array',() => {

    const printData = (data) => { 
        console.log(data);
    };

    const formObj = {
        wav: ["Title", "Artist", "Comments"],
        mp3: ["Title", "Artist", 'Select'],
        jpg: ["Title", "Subject", "Source"]
    };

    const selectObj = {
        query: "Whats your name?",
        select: ["Chris", "Emeka", "Maya", "Pat", "Arthur"],
        placeholder: "Choose a name"
    };
    
    const wrapper = mount(<FormTwo fileTypes={formObj} cb={printData} select={[selectObj]}/>);

    const file = new File(["test"], "test.jpg", {
        type: "image/jpeg"
    });
    
    wrapper.find('input').first().simulate('change', {target: {files: [file]}});

    expect(wrapper.exists({name: "select-2"})).toBeFalsy();

    const mp3File = new File(["test"], "test.mp3", {
        type: "audio/mpeg"
    });

    wrapper.find('input').first().simulate('change', {target: {files: [mp3File]}});
    
    expect(wrapper.exists({name: "select-2"})).toBeTruthy();

    for(let i = 0; i < selectObj.select.length; i++){
        const element = wrapper.find(`#${selectObj.select[i]}`);
        expect(element.html()).toEqual(`<option value="${selectObj.select[i]}" id="${selectObj.select[i]}">${selectObj.select[i]}</option>`);
    };
});

test('it renders multiple selects in accordance with object array', () => {

    const printData = (data) => { 
        console.log(data);
    };

    const formObj = {
        wav: ["Title", "Artist", "Comments"],
        mp3: ["Title", 'Select', 'FilenamE', 'SeLECt'],
        jpg: ["Title", "Subject", "Source"]
    };

    const selectObj = {
        query: "Whats your name?",
        select: ["Chris", "Emeka", "Maya", "Pat", "Arthur"],
        placeholder: "Choose a name"
    };

    const selectObj2 = {
        query: "Whats your sign?",
        select: ["Virgo", "Libra", "Cancer", "Leo", "Pisces"],
        placeholder: "Choose a sign"
    };
    
    const wrapper = mount(<FormTwo fileTypes={formObj} cb={printData} select={[selectObj, selectObj2]}/>);

    const file = new File(["test"], "test.jpg", {
        type: "image/jpeg"
    });
    
    wrapper.find('input').first().simulate('change', {target: {files: [file]}});

    expect(wrapper.exists({name: "select-2"})).toBeFalsy();

    const mp3File = new File(["test"], "test.mp3", {
        type: "audio/mpeg"
    });

    wrapper.find('input').first().simulate('change', {target: {files: [mp3File]}});
    
    expect(wrapper.exists({name: "select-1"})).toBeTruthy();

    for(let i = 0; i < selectObj.select.length; i++){
        const element = wrapper.find(`#${selectObj.select[i]}`);
        expect(element.html()).toEqual(`<option value="${selectObj.select[i]}" id="${selectObj.select[i]}">${selectObj.select[i]}</option>`);
    };

    expect(wrapper.exists({name: "select-3"})).toBeTruthy();

    for(let i = 0; i < selectObj.select.length; i++){
        const element = wrapper.find(`#${selectObj2.select[i]}`);
        expect(element.html()).toEqual(`<option value="${selectObj2.select[i]}" id="${selectObj2.select[i]}">${selectObj2.select[i]}</option>`);
    };
});


test('it renders an img element when provided with logo prop',() => {

    const printData = (data) => { 
        console.log(data);
    };

    const formObj = {
        wav: ["Title", "Artist", "Comments"],
        mp3: ["Title", "Artist"],
        jpg: ["Title", "Subject", "Source"]
    };
    
    render(<FormTwo fileTypes={formObj} cb={printData} logo={"/fakepath.jpg"}/>);

    const logo = screen.getByRole('img');

    expect(logo).toBeInTheDocument();
});

test('Empty object behavior without select',() => {
    const fileTypes = {};

    const printData = (data) => { 
        console.log(data);
    };

    const wrapper = mount(<FormTwo fileTypes={fileTypes} cb={printData}/>);

    const wavFile = new File(["test"], "test.wav", {
        type: "audio/wav"
    });

    wrapper.find('input').first().simulate('change', {target: {files: [wavFile]}});

    expect((wrapper.find('#smartparts-error').text() === "Internal Error")).toBe(true);
});

test('Empty object behavior with select',() => {

    const printData = (data) => { 
        console.log(data);
    };

    const fileTypes = {};

    const wrapper = mount(<FormTwo fileTypes={fileTypes} cb={printData} select={{}}/>);

    const wavFile = new File(["test"], "test.wav", {
        type: "audio/wav"
    });

    wrapper.find('input').first().simulate('change', {target: {files: [wavFile]}});

    expect(wrapper.find('#smartparts-error').text() === "Internal Error").toBe(true);
});

test('it renders the date input when file is uploaded with date field', () => {

    const printData = (data) => { 
        console.log(data);
    };

    const formObj = {
        wav: ["Title", "Artist", "Comments"],
        mp3: ["Title", "Artist"],
        jpg: ["Title", "Subject", "Source", "dATE"]
    };
    
    const wrapper = mount(<FormTwo fileTypes={formObj} cb={printData}/>);

    const file = new File(["test"], "test.jpg", {
        type: "image/jpeg"
    });
    
    wrapper.find('input').first().simulate('change', {target: {files: [file]}});

    expect(wrapper.find('#date-input').html()).toEqual('<input type="date" name="date" id="date-input" value="2099-01-01">');
});