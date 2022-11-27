import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import Radios from './Radios';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

const radioObj = {
    query: "Test Radios",
    options: ["One", "Two", "Three"]
}

describe("Radios", () => {
    it("renders with correct props", () => {
        render(<Radios obj={radioObj} index={0} key={`radio-input-0`}/>);
        expect(screen.getAllByTestId("smartparts-radio-query-input")).toBeTruthy();
        const radios = screen.getAllByTestId("smartparts-radio-query-radio");
        expect(screen.getAllByTestId("smartparts-radio-query-radio").length).toBe(3);
        radios.forEach((radio, i) => {
            expect(radio.getAttribute("value")).toBe(radioObj.options[i]);
        });
    });
});