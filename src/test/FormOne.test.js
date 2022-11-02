import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import { FormOne } from '../components/FormOne/FormOne'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("Form One", () => { 

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

    // INPUTS

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
            const element = wrapper.find(`#${fields[i].toLowerCase()}`);
            expect(element.html()).toEqual(`<input type="text\" class="form-text-input\" name="${fields[i].toLowerCase()}-${i}" id="${fields[i].toLowerCase()}">`);
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

    test('it renders a select element with the correct options when provided a select object array', () => {
        const fields = ["filEnaMe", 'sElect'];

        const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];
        
        const printData = (data) => { 
            console.log(data);
        };

        const selectObj = {
            query: "Whats your name?",
            select: ["Chris", "Emeka", "Maya", "Pat", "Arthur"],
            placeholder: "Choose a name"
        };

        const wrapper = mount(<FormOne fields={fields} fileTypes={fileTypes} cb={printData} select={[selectObj]}/>);
        const file = new File(["test"], "test.jpg", {
            type: "image/jpeg"
        });
        
        wrapper.find('input').first().simulate('change', {target: {files: [file]}});

        expect(wrapper.exists({name: "select-1"})).toBeTruthy();
        
        for(let i = 0; i < selectObj.select.length; i++){
            const element = wrapper.find(`#${selectObj.select[i]}`);
            expect(element.html()).toEqual(`<option value="${selectObj.select[i]}" id="${selectObj.select[i]}" class="form-select-option">${selectObj.select[i]}</option>`);
        };
        
    });

    test('it renders multiple selects in accordance with object array', () => {
        const fields = ['sElect', "filEnaMe", 'comments', 'squanchy', 'Select'];

        const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];
        
        const printData = (data) => { 
            console.log(data);
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

        const wrapper = mount(<FormOne fields={fields} fileTypes={fileTypes} cb={printData} select={[selectObj, selectObj2]}/>);
        const file = new File(["test"], "test.jpg", {
            type: "image/jpeg"
        });
        
        wrapper.find('input').first().simulate('change', {target: {files: [file]}});

        expect(wrapper.exists({name: "select-0"})).toBeTruthy();
        
        for(let i = 0; i < selectObj.select.length; i++){
            const element = wrapper.find(`#${selectObj.select[i]}`);
            expect(element.html()).toEqual(`<option value="${selectObj.select[i]}" id="${selectObj.select[i]}" class="form-select-option">${selectObj.select[i]}</option>`);
        };

        expect(wrapper.exists({name: "select-4"})).toBeTruthy();
        
        for(let i = 0; i < selectObj.select.length; i++){
            const element = wrapper.find(`#${selectObj2.select[i]}`);
            expect(element.html()).toEqual(`<option value="${selectObj2.select[i]}" id="${selectObj2.select[i]}" class="form-select-option">${selectObj2.select[i]}</option>`);
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

    // EMPTY FIELDS 

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

    test('it renders the date input when file is uploaded with date field', () => {
        const fields = ["dAtE"];

        const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];
        
        const printData = (data) => { 
            console.log(data);
        };

        const wrapper = mount(<FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>);
        const file = new File(["test"], "test.jpg", {
            type: "image/jpeg"
        });
        
        wrapper.find('input').first().simulate('change', {target: {files: [file]}});
        
        expect(wrapper.find('#smartparts-date-input').html()).toEqual('<input type="date" name="date-0" id="smartparts-date-input" class="form-date-input" value="2099-01-01">');
    });

    test('it renders a range input correctly', () => {
        const fields = ["Title", "Artist", "Range[1_200_5_Hours_<]", "Comments"];

        const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png","pdf"];
        
        const printData = (data) => { 
            console.log(data);
        };

        const wrapper = mount(<FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>);

        const wavFile = new File(["test"], "test.wav", {
            type: "audio/wav"
        });

        wrapper.find('input').first().simulate('change', {target: {files: [wavFile]}});
        const inputString = wrapper.find('#smartparts-range-input').html();
        ["1", "200", "5"].forEach((value) =>  expect(inputString.includes(value)).toBe(true));
        expect(wrapper.find('#smartparts-range-label').text() === "Hours");
    });


    // REQUIRED INPUTS

    test('it renders a required text area when "!" is used', () => {
        const fields = ["cOmMenTS!"];

        const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];
        
        const printData = (data) => { 
            console.log(data);
        };

        const wrapper = mount(<FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>)
        const file = new File(["test"], "test.jpg", {
            type: "image/jpeg"
        });

        wrapper.find('input').first().simulate('change', {target: {files: [file]}})

        expect(wrapper.find('#smartparts-comments').html().includes("required"));
    });

    test('it renders a required text input when "!" is used', () => {
        const fields = ["Required Text Input!"];

        const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];
        
        const printData = (data) => { 
            console.log(data);
        };

        const wrapper = mount(<FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>)
        const file = new File(["test"], "test.jpg", {
            type: "image/jpeg"
        });

        wrapper.find('input').first().simulate('change', {target: {files: [file]}})

        expect(wrapper.find('#required-text-input').html().includes("required"));
    });

    test('it renders a required date input when "!" is used', () => {
        const fields = ["dAtE!"];

        const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];
        
        const printData = (data) => { 
            console.log(data);
        };

        const wrapper = mount(<FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>)
        const file = new File(["test"], "test.jpg", {
            type: "image/jpeg"
        });

        wrapper.find('input').first().simulate('change', {target: {files: [file]}})

        expect(wrapper.find('#smartparts-date-input').html().includes("required"));
    });

    test('it renders a required select input when "!" is used', () => {
        const fields = ["filEnaMe", 'sElect!'];

        const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];
        
        const printData = (data) => { 
            console.log(data);
        };

        const selectObj = {
            query: "Whats your name?",
            select: ["Chris", "Emeka", "Maya", "Pat", "Arthur"],
            placeholder: "Choose a name"
        };

        const wrapper = mount(<FormOne fields={fields} fileTypes={fileTypes} cb={printData} select={[selectObj]}/>);
        const file = new File(["test"], "test.jpg", {
            type: "image/jpeg"
        });
        
        wrapper.find('input').first().simulate('change', {target: {files: [file]}});

        expect(wrapper.exists({name: "select-1"})).toBeTruthy();

        expect(wrapper.find({name: "select-1"}).html().includes("required"));  
    });

    // USER SUPPLIED MESSAGES

    test('it renders a user supplied message for "Internal Error"', () => {        
        const printData = (data) => { 
            console.log(data);
        }

        const testConfig = {
            typeLabel: "",
            inputLabel: "",
            disabled: "Test Form Disabled Message - Form One",
            errorMessage: "Test Error Message - Form One"
        };

        const wrapper = mount(<FormOne fields={[]} fileTypes={[]} cb={printData} textConfig={testConfig}/>);
        const file = new File(["test"], "test.jpg", {
            type: "image/jpeg"
        });
        
        wrapper.find('input').first().simulate('change', {target: {files: [file]}});
        expect(wrapper.find('#smartparts-error').text()).toBe("Test Error Message - Form One");
    });

    test('form is disabled after submit', () => {
        const fileTypes = ["mp3"];
        
        const printData = (data) => { 
            console.log(data);
        };

        const mp3File = new File(["test"], "test.mp3", {
            type: "audio/mpeg"
        });

        render(<FormOne fields={[]} fileTypes={fileTypes} cb={printData}/>);

        const fileInput = screen.getByTestId("smartparts-file");

        fireEvent.change(fileInput, { target: { files: [mp3File] }});

        fireEvent.click(screen.getByRole('button'));

        expect(screen.getByRole('button')).toBeDisabled();
    });

    test('user disabled message', () => {
        const fileTypes = ["mp3"];
        
        const printData = (data) => { 
            console.log(data);
        };

        const mp3File = new File(["test"], "test.mp3", {
            type: "audio/mpeg"
        });
        
        const testConfig = {
            typeLabel: "",
            inputLabel: "",
            disabled: "Test Form Disabled Message - Form One",
            errorMessage: "Test Error Message - Form Two"
        };

        render(<FormOne fields={[]} fileTypes={fileTypes} cb={printData} disabled={{ message: "Test Form Disabled Message - Form One"}}/>);

        const fileInput = screen.getByTestId("smartparts-file");

        fireEvent.change(fileInput, { target: { files: [mp3File] }});

        fireEvent.click(screen.getByRole('button'));

        expect(screen.getByText("Test Form Disabled Message - Form One")).toBeInTheDocument();
    });

    test('user textConfig prop', () => {

    });
});