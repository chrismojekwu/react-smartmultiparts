import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import CheckBox from './Checkbox';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("Checkbox Input", () => {
    it("renders with correct props", () => {
        render(<CheckBox index={0} value={"Checkbox Test"} key={`checkbox-input-${0}`} req={false}/>);
        expect(screen.getByTestId("smartparts-checkbox-0")).toBeTruthy();
        expect(screen.getByText("Checkbox Test")).toBeTruthy();
    });

    it("renders required checkbox", () => {
        const wrapper = mount(<CheckBox index={0} value={"Checkbox Test"} key={`checkbox-input-${0}`} req={true}/>);
        expect(wrapper.find('#smartparts-checkbox-0').html().includes("required"));
    });
});