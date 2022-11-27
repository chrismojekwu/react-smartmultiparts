import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import Select from './Select';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

const selectObj = {
    query: "Whats your name?",
    select: ["Chris", "Emeka", "Maya", "Pat", "Arthur"],
    placeholder: "Choose a name"
};

describe("Select", () => {
    it("renders with correct props", () => {
        render(<Select obj={selectObj} index={0} required={false} key={`select-input-0`}/>);
        expect(screen.getByTestId(`smartparts-select-input-0`)).toBeTruthy();
    });

    it("renders required Select", () => {
        const wrapper = mount(<Select obj={selectObj} index={0} required={true} key={`select-input-0`}/>);
        expect(wrapper.find('#smartparts-select-input-0').html().includes("required"));
    });
});