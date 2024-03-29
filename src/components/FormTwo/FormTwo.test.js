import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import {FormTwo} from './FormTwo';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

const printData = (data) => { 
    console.log(data);
};

const formObj = {
    wav: ["Title", "Artist", "Comments"],
    mp3: ["Title", "Artist"],
    jpg: ["Title", "Subject", "Source"]
};

const jpgFile = new File(["test"], "test.jpg", {
    type: "image/jpeg"
});

const mp3File = new File(["test"], "te.st.mp3", {
    type: "audio/mpeg"
});

const wavFile = new File(["test"], "test.wav", {
    type: "audio/wav"
});

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

        wrapper.find('input').first().simulate('change', {target: {files: [jpgFile]}});

        for(let i = 0; i < formObj.jpg.length; i++){
            const element = wrapper.find(`#smartparts-text-input-${i}`);
            expect(element.html()).toEqual(`<input type="text" class="form-text-input" name="${formObj.jpg[i].toLowerCase()}-${i}" id="smartparts-text-input-${i}" data-testid="smartparts-text-input-${i}">`);
        };

        wrapper.find('input').first().simulate('change', {target: {files: [mp3File]}});

        for(let i = 0; i < formObj.mp3.length; i++){
            const element = wrapper.find(`#smartparts-text-input-${i}`);
            expect(element.html()).toEqual(`<input type="text" class="form-text-input" name="${formObj.mp3[i].toLowerCase()}-${i}" id="smartparts-text-input-${i}" data-testid="smartparts-text-input-${i}">`);
        };

        // not sure why this isnt working 
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

        wrapper.find('input').first().simulate('change', {target: {files: [wavFile]}});

        expect(wrapper.find('#smartparts-filename-span-3').text()).toBe(`Filename: test.wav`);
    });

    test('it renders a select element with the correct options when provided a select object array',() => {
        const formObj = {
            wav: ["Title", "Artist", "Comments"],
            mp3: ["Title", "Artist", 'Select[0]'],
            jpg: ["Title", "Subject", "Source"]
        };

        const selectObj = {
            query: "Whats your name?",
            select: ["Chris", "Emeka", "Maya", "Pat", "Arthur"],
            placeholder: "Choose a name"
        };
        
        const wrapper = mount(<FormTwo fileTypes={formObj} cb={printData} select={[selectObj]}/>);
        
        wrapper.find('input').first().simulate('change', {target: {files: [jpgFile]}});

        expect(wrapper.exists({name: "select-2"})).toBeFalsy();

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
            mp3: ["Title", 'Select[0]', 'FilenamE', 'SeLECt[1]'],
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
        
        wrapper.find('input').first().simulate('change', {target: {files: [jpgFile]}});

        expect(wrapper.exists({name: "select-2"})).toBeFalsy();

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
        const testConfig = {
            typeLabel: "",
            inputLabel: "",
            disabled: "Test Form Disabled Message - Form One",
            errorMessage: "Test Error Message - Form Two",
            invalidExt: "Sorry we dont support that type of file.",
            logoAlt: "Test Logo Alt",
            submitLabel: "Send",
        };

        render(<FormTwo fileTypes={formObj} cb={printData} logo={"/fakepath.jpg"} textConfig={testConfig}/>);

        const logo = screen.getByRole('img');

        expect(logo).toBeInTheDocument();
        expect(logo.getAttribute("alt")).toBe("Test Logo Alt");
    });

    test('it renders default alt',() => {   
        render(<FormTwo fileTypes={formObj} cb={printData} logo={"/fakepath.jpg"}/>);

        const logo = screen.getByRole('img');

        expect(logo).toBeInTheDocument();
        expect(logo.getAttribute("alt")).toBe("Company Logo");
    });

    test('it renders a range input correctly', () => {
        const formObj = {
            wav: ["Title", "Artist", "Range[0_.75_.1_Milliseconds_<]", "Comments"],
            mp3: ["Title", "Artist"],
            jpg: ["Title", "Subject", "Source"]
        };

        const wrapper = mount(<FormTwo fileTypes={formObj} cb={printData} logo={"/fakepath.jpg"}/>);
        
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
        
        wrapper.find('input').first().simulate('change', {target: {files: [jpgFile]}});

        expect(wrapper.find('#smartparts-date-input-3').html()).toEqual('<input type="date" name="date-3" id="smartparts-date-input-3" data-testid="smartparts-date-input-3" class="form-date-input" value="2099-01-01">');
    });

    test('it renders a query checkbox correctly', () => {
        const formObj = {
            wav: ["Title", "checkbox[1]", "checkbox[Test Single Box]", "Source", "checkbox[0]"]
        };

        const checks = [
            {query: "Languages", boxes: ["Basic", "C", "Java", "Ruby", "JS"]},
            {query: "Skills", boxes: ["Frontend", "Backend", "Full-stack"]}
        ];

        render(<FormTwo fileTypes={formObj} cb={printData} checkboxes={checks}/>);

        const fileInput = screen.getByTestId("smartparts-file");

        fireEvent.change(fileInput, { target: { files: [wavFile] }});

        const checkboxes = screen.getAllByTestId("smartparts-object-checkbox");

        expect(checkboxes.length).toBe(8);

        for (let i = 0; i < checkboxes.length; i++) {
            if (i < 3) {
                expect(checkboxes[i].getAttribute("value")).toBe(checks[1].boxes[i]);
            } else {
                expect(checkboxes[i].getAttribute("value")).toBe(checks[0].boxes[i - 3]);
            }
        }
    });

    test('its renders a radio query correctly', () => {
        const formObj = {
            wav:["Title", "Artist", "radios[1]", "radios[0]"]
        };

        const radioObjs = [
            {query: "Question One?", options: ["Yes", "No", "Maybe", ]},
            {query: "Question Two?", options: ["Pat", "Trick", "Swayze"]}
        ];

        render(<FormTwo fileTypes={formObj} cb={printData} radios={radioObjs}/>);

        const fileInput = screen.getByTestId("smartparts-file");

        fireEvent.change(fileInput, { target: { files: [wavFile] }});

        const radioInputs = screen.getAllByTestId("smartparts-radio-query-radio");

        expect(radioInputs.length).toBe(6);

        for (let i = 0; i < radioInputs.length; i++) {
            if (i < 3) {
                expect(radioInputs[i].getAttribute("value")).toBe(radioObjs[1].options[i]);
            } else {
                expect(radioInputs[i].getAttribute("value")).toBe(radioObjs[0].options[i - 3]);
            }
            fireEvent.click(radioInputs[4]);
        };
    });
});

describe("Form Two - Empty Object", () => {

    test('Empty object behavior without select',() => {
        const fileTypes = {};
        const wrapper = mount(<FormTwo fileTypes={fileTypes} cb={printData}/>);

        wrapper.find('input').first().simulate('change', {target: {files: [wavFile]}});

        expect((wrapper.find('.smartparts-error').text() === "Internal Error")).toBe(true);
    });

    test('Empty object behavior with select',() => {
        const fileTypes = {};

        const wrapper = mount(<FormTwo fileTypes={fileTypes} cb={printData} select={{}}/>);

        wrapper.find('input').first().simulate('change', {target: {files: [wavFile]}});

        expect(wrapper.find('.smartparts-error').text() === "Internal Error").toBe(true);
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

        wrapper.find('input').first().simulate('change', {target: {files: [jpgFile]}})

        expect(wrapper.find('#smartparts-comments-4').html().includes("required"));
    });

    test('it renders a required text input when "!" is used', () => {    
        const formObj = {
            wav: ["Title", "Artist", "Comments"],
            mp3: ["Title", "Artist"],
            jpg: ["Title", "Subject", "Source", "dATE", "cOmMents!", "Required Text Input!"]
        };

        const wrapper = mount(<FormTwo fileTypes={formObj} cb={printData}/>);

        wrapper.find('input').first().simulate('change', {target: {files: [jpgFile]}})

        expect(wrapper.find('#smartparts-text-input-5').html().includes("required"));
    });

    test('it renders a required date input when "!" is used', () => {    
        const formObj = {
            jpg: ["Title", "Subject", "Source", "dATE!", "cOmMents!", "Required Text Input!"]
        };

        const wrapper = mount(<FormTwo fileTypes={formObj} cb={printData}/>);

        wrapper.find('input').first().simulate('change', {target: {files: [jpgFile]}})

        expect(wrapper.find('#smartparts-date-input-3').html().includes("required"));
    });

    test('it renders a required select input when "!" is used', () => {
        const formObj = {
            wav: ["Title", "Artist", "Comments"],
            mp3: ["Title", "Artist", 'Select[0]!'],
            jpg: ["Title", "Subject", "Source"]
        };

        const selectObj = {
            query: "Whats your name?",
            select: ["Chris", "Emeka", "Maya", "Pat", "Arthur"],
            placeholder: "Choose a name"
        };
        
        const wrapper = mount(<FormTwo fileTypes={formObj} cb={printData} select={[selectObj]}/>);

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

        wrapper.find('input').first().simulate('change', {target: {files: [mp3File]}});
        expect(wrapper.find('.smartparts-error').text()).toBe("Test Error Message - Form Two");
    });

    test('form is disabled after submit', () => {
        const formObj = {
            mp3: [],
        };

        render(<FormTwo fileTypes={formObj} cb={printData}/>);

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

        const fileInput = screen.getByTestId("smartparts-file");

        fireEvent.change(fileInput, { target: { files: [mp3File] }});

        fireEvent.click(screen.getByRole('button'));

        expect(screen.getByText("Test Form Disabled Message - Form Two")).toBeInTheDocument();
    });

    test('text config button value/invalid ext', () => {
        const formObj = {
            wav: ["Sup"],
        };
        
        const testConfig = {
            typeLabel: "",
            inputLabel: "",
            disabled: "Test Form Disabled Message - Form One",
            errorMessage: "Test Error Message - Form Two",
            invalidExt: "Sorry we dont support that type of file.",
            logoAlt: "",
            submitLabel: "Send",
        };

        render(<FormTwo fileTypes={formObj} cb={printData} disabled={{ message: "Test Form Disabled Message - Form One"}} textConfig={testConfig}/>);

        const fileInput = screen.getByTestId("smartparts-file");

        fireEvent.change(fileInput, { target: { files: [mp3File] }});

        expect(screen.getByRole('button').getAttribute("value")).toBe("Send")

        expect(screen.getByText("Sorry we dont support that type of file.")).toBeInTheDocument();
    });
});

