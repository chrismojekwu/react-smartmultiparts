import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import {FormThree} from './FormThree';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

const printData = (data) => { 
    console.log(data);
};

const evaluateData = (data) => {
    console.log(data)
};

const formObj = {
    wav: ["Title", "Artist", "Comments"],
    mp3: ["Title", "Artist"],
    jpg: ["Appointment Name", "select[1]", "Library Name", "select[0]", "CheckBox[1]", "CheckBox[0]", "Comments", "radios[1]", "radios[0]", "checkbox[Include Lunch Order]"]
};

const testConfig = {
    typeLabel: "Valid Files: ",
    inputLabel: "Upload:",
    disabled: "Thanks for the submission!",
    errorMessage: "Something went wrong.",
    invalidExt: "Sorry we cant handle that file.",
    logoAlt: "",
    submitLabel: "Send",
    fileSizeLabel: "",
    fileSizeMessage: ""
};

const selectObjs = [
    {
        query: "Preferred Day",
        select: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        placeholder: "Choose a day"
    },
    {
        query: "Library Wing",
        select: ["North", "South", "East", "West"],
        placeholder: "Choose a direction"
    }
];

const radioObjs = [
    {
        query: "Is this useful?",
        options: ["Yes", "No"]
    },
    {
        query: "Does this work?",
        options: ["Yes", "No", "Maybe"]
    },
];

const jpgFile = new File(["test"], "test.jpg", {
    type: "image/jpeg"
});

const mp3File = new File(["test"], "te.st.mp3", {
    type: "audio/mpeg"
});

const wavFile = new File(["test"], "test.wav", {
    type: "audio/wav"
});

describe("Form Three - Renders", () => {
    
    test('renders without crashing',() => {
        render(<FormThree fileTypes={formObj} cb={printData}/>);
    });

    test('renders the initial form',() => {      
        render(<FormThree fileTypes={formObj} cb={printData}/>);

        const form = screen.getByRole('form');

        expect(form).toBeInTheDocument();
    });
});

describe("Form Three - Inputs", () => {
    
    test('Renders the correct inputs for multiple files ',() => {
        const wrapper = mount(
            <FormThree 
                fileTypes={formObj} 
                cb={evaluateData}
                checkboxes={[
                    {
                        query: "Languages", 
                        boxes: ["Basic", "C", "Java", "Ruby", "JS"]
                    },
                    {
                        query: "Skills", 
                        boxes: ["Frontend", "Backend", "Full-stack"]
                    },
                ]}
                select={selectObjs}
                radios={radioObjs}
                fileSize={{pdf: 1, ics: .5, mp3: 3, jpg: 100}}
                fileLimit={5}
            />
        );

        wrapper.find('input').first().simulate('change', {target: {files: [mp3File, jpgFile]}});
        const htmlString = wrapper.html();
        ["test.jpg", "te.st.mp3"].forEach((x) => {
            expect(htmlString.includes(
                `<div class="multi-file-title"><span>${x}</span></div>`
            )).toBe(true);
        })
    });

});

describe("Form Three - File Limit", () => {

    test('Renders error message when over file limit', () => {
        const wrapper = mount(
            <FormThree 
                fileTypes={formObj} 
                cb={evaluateData}
                checkboxes={[
                    {
                        query: "Languages", 
                        boxes: ["Basic", "C", "Java", "Ruby", "JS"]
                    },
                    {
                        query: "Skills", 
                        boxes: ["Frontend", "Backend", "Full-stack"]
                    },
                ]}
                select={selectObjs}
                radios={radioObjs}
                //fileSize={{pdf: 1, ics: .5, mp3: 3, jpg: 100}}
                fileLimit={2}
            />
        );

        wrapper.find('input').first().simulate('change', {target: {files: [mp3File, jpgFile, wavFile]}});
        const htmlString = wrapper.html();
        expect(htmlString.includes(`<span id="smartparts-error">Over File Limit - Maximum 2 Files</span>`)).toBe(true);
    });
});
