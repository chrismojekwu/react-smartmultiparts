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

const evaluateData = jest.fn(data => {
    let fileNames = true;
    ["test.jpg", "te.st.mp3", "test.wav"].forEach((x,i ) => {
        for (var value of data.values()) {
            if (value === x) {
                fileNames = true;
                break;
            }
            fileNames = false;
        };
    });
    return fileNames;
})

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
                cb={printData}
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
                cb={printData}
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

describe("Form Three - Messages/Inactive Behavior", () => {
    const testConfig = {
        typeLabel: "",
        inputLabel: "",
        disabled: "",
        errorMessage: "Test Error Message - Form Two"
    };

    test('it renders a user supplied message for "Internal Error"', () => {

        const wrapper = mount(
            <FormThree
                fileTypes={{}} 
                cb={printData} 
                textConfig={testConfig}
            />
        );

        wrapper.find('input').first().simulate('change', {target: {files: [mp3File]}});
        expect(wrapper.find('#smartparts-error').text()).toBe("Test Error Message - Form Two");
    });

    test('form is disabled after submit', () => {
        const formObj = {
            mp3: [],
        };

        render(
            <FormThree
                fileTypes={formObj} 
                cb={printData}
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
                fileLimit={2}
            />);

        const fileInput = screen.getByTestId("smartparts-file");

        fireEvent.change(fileInput, { target: { files: [mp3File] }});

        fireEvent.click(screen.getByRole('button'));

        expect(screen.getByRole('button')).toBeDisabled(); 
    });

    test('user disabled message', () => {
        const formObj = {
            mp3: [],
        };

        render(
            <FormThree
                fileTypes={formObj} 
                cb={printData}
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
                fileLimit={2}
            />
        );

        const fileInput = screen.getByTestId("smartparts-file");

        fireEvent.change(fileInput, { target: { files: [mp3File] }});

        fireEvent.click(screen.getByRole('button'));

        expect(screen.getByText("Thanks")).toBeInTheDocument();
    });

    test('text config button value/invalid ext', () => {
        const formObj = {
            wav: ["Sup"],
        };
        
        const testConfig2 = {
            typeLabel: "",
            inputLabel: "",
            disabled: "Test Form Disabled Message - Form Three",
            errorMessage: "Test Error Message - Form Three",
            invalidExt: "Sorry we dont support that type of file.",
            logoAlt: "",
            submitLabel: "Send",
        };

        render(
            <FormThree fileTypes={formObj} cb={printData} disabled={{ message: "Test Form Disabled Message - Form Three"}} textConfig={testConfig2}/>);

        const fileInput = screen.getByTestId("smartparts-file");

        fireEvent.change(fileInput, { target: { files: [mp3File] }});

        expect(screen.getByRole('button').getAttribute("value")).toBe("Send")

        expect(screen.getByText("Sorry we dont support that type of file.")).toBeInTheDocument();
    });

    test('filenames exist in formdata object', () => {
        const formObjInner = {
            wav: ["Title", "Artist", "Comments"],
            mp3: ["Title", "Artist"],
            jpg: ["Appointment Name", "select[1]", "Library Name", "select[0]", "CheckBox[1]", "CheckBox[0]", "Comments", "radios[1]", "radios[0]", "checkbox[Include Lunch Order]"]
        };

        render(
            <FormThree
                fileTypes={formObjInner} 
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
                fileLimit={2}
            />);

        const fileInput = screen.getByTestId("smartparts-file");

        fireEvent.change(fileInput, { target: { files: [mp3File, wavFile, jpgFile] }});

        fireEvent.click(screen.getByRole('button'));

        expect(screen.getByRole('button')).toBeDisabled(); 

        expect(evaluateData.mock.results[0].value).toBe(true)
    });
});