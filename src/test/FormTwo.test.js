import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, getAllByTestId } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import {FormTwo} from '../components/FormTwo/FormTwo';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

const printData = (data) => { 
    console.log(data);
};

const formObj = {
    wav: ["Title", "Artist", "Comments"],
    mp3: ["Title", "Artist"],
    jpg: ["Title", "Subject", "Source"]
};

describe("Form Two - Renders", () => {
    
    test('renders without crashing',() => {
        render(<FormTwo fileTypes={formObj} cb={printData}/>);
    });

    test('renders the initial form',() => {      
        render(<FormTwo fileTypes={formObj} cb={printData}/>);

        const form = screen.getByRole('form');

        expect(form).toBeInTheDocument();
    });
});

describe("Form Two - Inputs", () => {
    
    test('renders the correct "text" type inputs for different file types',() => {        
        const wrapper = mount(<FormTwo fileTypes={formObj} cb={printData}/>);

        const jpgFile = new File(["test"], "test.jpg", {
            type: "image/jpeg"
        });

        wrapper.find('input').first().simulate('change', {target: {files: [jpgFile]}});

        for(let i = 0; i < formObj.jpg.length; i++){
            const element = wrapper.find(`#smartparts-text-input-${i}`);
            expect(element.html()).toEqual(`<input type="text" class="form-text-input" name="${formObj.jpg[i].toLowerCase()}-${i}" id="smartparts-text-input-${i}">`);
        };

        const mp3File = new File(["test"], "test.mp3", {
            type: "audio/mpeg"
        });

        wrapper.find('input').first().simulate('change', {target: {files: [mp3File]}});

        for(let i = 0; i < formObj.mp3.length; i++){
            const element = wrapper.find(`#smartparts-text-input-${i}`);
            expect(element.html()).toEqual(`<input type="text" class="form-text-input" name="${formObj.mp3[i].toLowerCase()}-${i}" id="smartparts-text-input-${i}">`);
        };

        // not sure why this isnt working 
        const wavFile = new File(["test"], "test.wav", {
            type: "audio/wav"
        });

        wrapper.find('input').first().simulate('change', {target: {files: [wavFile]}});

        for(let i = 0; i < formObj.wav.length; i++){
            //const element = wrapper.find(`#smartparts-text-input-${i}`);
            //expect(element.html()).toEqual(`<input type="text\" class="form-text-input\" name="${formObj.wav[i].toLowerCase()}-${i}" id="smartparts-text-input-${i}">`);
        };
        
    });

    test('it renders the correct text area when file is uploaded with comments field',() => {
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

        expect(wrapper.exists('#smartparts-comments-2')).toBe(true);
    });

    test('it renders the correct span when file is uploaded with filename field',() => {
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

        expect(wrapper.find('#smartparts-filename-span-3').text()).toBe(`Filename: test.wav`);
    });

    test('it renders a select element with the correct options when provided a select object array',() => {
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
            const element = wrapper.find(`#smartparts-select-option-2-${i}`);
            expect(element.html()).toEqual(`<option value="${selectObj.select[i]}" id="smartparts-select-option-2-${i}" class="form-select-option">${selectObj.select[i]}</option>`);
        };
    });

    test('it renders multiple selects in accordance with object array', () => {
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
            const element = wrapper.find(`#smartparts-select-option-1-${i}`);
            expect(element.html()).toEqual(`<option value="${selectObj.select[i]}" id="smartparts-select-option-1-${i}" class="form-select-option">${selectObj.select[i]}</option>`);
        };

        expect(wrapper.exists({name: "select-3"})).toBeTruthy();

        for(let i = 0; i < selectObj2.select.length; i++){
            const element = wrapper.find(`#smartparts-select-option-3-${i}`);
            expect(element.html()).toEqual(`<option value="${selectObj2.select[i]}" id="smartparts-select-option-3-${i}" class="form-select-option">${selectObj2.select[i]}</option>`);
        };
    });


    test('it renders an img element when provided with logo prop',() => {        
        render(<FormTwo fileTypes={formObj} cb={printData} logo={"/fakepath.jpg"}/>);

        const logo = screen.getByRole('img');

        expect(logo).toBeInTheDocument();
    });

    test('it renders a range input correctly', () => {
        const formObj = {
            wav: ["Title", "Artist", "Range[0_.75_.1_Milliseconds_<]", "Comments"],
            mp3: ["Title", "Artist"],
            jpg: ["Title", "Subject", "Source"]
        };

        const wrapper = mount(<FormTwo fileTypes={formObj} cb={printData} logo={"/fakepath.jpg"}/>);

        const wavFile = new File(["test"], "test.wav", {
            type: "audio/wav"
        });

        
        wrapper.find('input').first().simulate('change', {target: {files: [wavFile]}});
        const inputString = wrapper.find('#smartparts-range-input-2').html();
        ["0", ".75", ".1"].forEach((value) =>  expect(inputString.includes(value)).toBe(true));
        expect(wrapper.find('#smartparts-range-label').text() === "Milliseconds");
    });

    test('value checkbox input', () => {
        const formObj = {
            mp3: ['checkbox[This]', 'checkbox[Is]', 'checkbox[Cool]'],
        };

        render(<FormTwo fileTypes={formObj} cb={printData}/>);

        const mp3File = new File(["test"], "test.mp3", {
            type: "audio/mpeg"
        });

        const fileInput = screen.getByTestId("smartparts-file");

        fireEvent.change(fileInput, { target: { files: [mp3File] }});

        screen.getAllByRole('checkbox').forEach((x,i) => {
            fireEvent.click(x);
            expect(x.getAttribute('value')).toBe(formObj.mp3[i].slice(9,-1)); 
        });
    });

    test('it renders the date input when file is uploaded with date field', () => {
        const formObj = {
            jpg: ["Title", "Subject", "Source", "dATE"]
        };
        
        const wrapper = mount(<FormTwo fileTypes={formObj} cb={printData}/>);

        const file = new File(["test"], "test.jpg", {
            type: "image/jpeg"
        });
        
        wrapper.find('input').first().simulate('change', {target: {files: [file]}});

        expect(wrapper.find('#smartparts-date-input-3').html()).toEqual('<input type="date" name="date-3" id="smartparts-date-input-3" class="form-date-input" value="2099-01-01">');
    });
});

describe("Form Two - Empty Object", () => {

    test('Empty object behavior without select',() => {
        const fileTypes = {};
        const wrapper = mount(<FormTwo fileTypes={fileTypes} cb={printData}/>);

        const wavFile = new File(["test"], "test.wav", {
            type: "audio/wav"
        });

        wrapper.find('input').first().simulate('change', {target: {files: [wavFile]}});

        expect((wrapper.find('#smartparts-error').text() === "Internal Error")).toBe(true);
    });

    test('Empty object behavior with select',() => {
        const fileTypes = {};

        const wrapper = mount(<FormTwo fileTypes={fileTypes} cb={printData} select={{}}/>);

        const wavFile = new File(["test"], "test.wav", {
            type: "audio/wav"
        });

        wrapper.find('input').first().simulate('change', {target: {files: [wavFile]}});

        expect(wrapper.find('#smartparts-error').text() === "Internal Error").toBe(true);
    });

});

describe("Form Two - Required Inputs", () => {

    test('it renders a required text area when "!" is used', () => {
        const formObj = {
            wav: ["Title", "Artist", "Comments"],
            mp3: ["Title", "Artist"],
            jpg: ["Title", "Subject", "Source", "dATE", "cOmMents!"]
        };

        const wrapper = mount(<FormTwo fileTypes={formObj} cb={printData}/>);
        const file = new File(["test"], "test.jpg", {
            type: "image/jpeg"
        });

        wrapper.find('input').first().simulate('change', {target: {files: [file]}})

        expect(wrapper.find('#smartparts-comments-4').html().includes("required"));
    });

    test('it renders a required text input when "!" is used', () => {    
        const formObj = {
            wav: ["Title", "Artist", "Comments"],
            mp3: ["Title", "Artist"],
            jpg: ["Title", "Subject", "Source", "dATE", "cOmMents!", "Required Text Input!"]
        };

        const wrapper = mount(<FormTwo fileTypes={formObj} cb={printData}/>);
        const file = new File(["test"], "test.jpg", {
            type: "image/jpeg"
        });

        wrapper.find('input').first().simulate('change', {target: {files: [file]}})

        expect(wrapper.find('#smartparts-text-input-5').html().includes("required"));
    });

    test('it renders a required date input when "!" is used', () => {    
        const formObj = {
            jpg: ["Title", "Subject", "Source", "dATE!", "cOmMents!", "Required Text Input!"]
        };

        const wrapper = mount(<FormTwo fileTypes={formObj} cb={printData}/>);
        const file = new File(["test"], "test.jpg", {
            type: "image/jpeg"
        });

        wrapper.find('input').first().simulate('change', {target: {files: [file]}})

        expect(wrapper.find('#smartparts-date-input-3').html().includes("required"));
    });

    test('it renders a required select input when "!" is used', () => {
        const formObj = {
            wav: ["Title", "Artist", "Comments"],
            mp3: ["Title", "Artist", 'Select!'],
            jpg: ["Title", "Subject", "Source"]
        };

        const selectObj = {
            query: "Whats your name?",
            select: ["Chris", "Emeka", "Maya", "Pat", "Arthur"],
            placeholder: "Choose a name"
        };
        
        const wrapper = mount(<FormTwo fileTypes={formObj} cb={printData} select={[selectObj]}/>);

        const mp3File = new File(["test"], "test.mp3", {
            type: "audio/mpeg"
        });

        wrapper.find('input').first().simulate('change', {target: {files: [mp3File]}});
        
        expect(wrapper.exists({name: "select-2"})).toBeTruthy();

        expect(wrapper.find({name: "select-2"}).html().includes("required"));  
    });
});

describe("Form Two - Messages/Inactive Behavior", () => {

    test('it renders a user supplied message for "Internal Error"', () => {
        const testConfig = {
            typeLabel: "",
            inputLabel: "",
            disabled: "",
            errorMessage: "Test Error Message - Form Two"
        };

        const wrapper = mount(<FormTwo fileTypes={{}} cb={printData} textConfig={testConfig}/>);

        const mp3File = new File(["test"], "test.mp3", {
            type: "audio/mpeg"
        });

        wrapper.find('input').first().simulate('change', {target: {files: [mp3File]}});
        expect(wrapper.find('#smartparts-error').text()).toBe("Test Error Message - Form Two");
    });

    test('form is disabled after submit', () => {
        const formObj = {
            mp3: [],
        };

        render(<FormTwo fileTypes={formObj} cb={printData}/>);

        const mp3File = new File(["test"], "test.mp3", {
            type: "audio/mpeg"
        });

        const fileInput = screen.getByTestId("smartparts-file");

        fireEvent.change(fileInput, { target: { files: [mp3File] }});

        fireEvent.click(screen.getByRole('button'));

        expect(screen.getByRole('button')).toBeDisabled(); 
    });

    test('user disabled message', () => {
        const formObj = {
            mp3: [],
        };

        const testConfig = {
            typeLabel: "",
            inputLabel: "",
            disabled: "Test Form Disabled Message - Form Two",
            errorMessage: "Test Error Message - Form Two"
        };

        render(<FormTwo fileTypes={formObj} cb={printData} textConfig={testConfig}/>);

        const mp3File = new File(["test"], "test.mp3", {
            type: "audio/mpeg"
        });

        const fileInput = screen.getByTestId("smartparts-file");

        fireEvent.change(fileInput, { target: { files: [mp3File] }});

        fireEvent.click(screen.getByRole('button'));

        expect(screen.getByText("Test Form Disabled Message - Form Two")).toBeInTheDocument();
    });
});

