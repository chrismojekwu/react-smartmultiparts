import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import TextInput from './TextInput';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("TextInput", () => {
    it("renders with correct props", () => {
        render(<TextInput field={"Test Field Name"} index={0} required={false} key={`text-input-0`}/>);
        expect(screen.getByTestId(`smartparts-text-input-0`)).toBeTruthy()
    });

    it("renders required TextInput", () => {
        const wrapper = mount(<TextInput field={"Test Field Name"} index={0} required={false} key={`text-input-0`}/>);
        expect(wrapper.find('#smartparts-text-input-0').html().includes("required"));
    });
});