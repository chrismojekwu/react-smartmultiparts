import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import Range from './Range';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("Range", () => {
    it("renders with correct props", () => {
        render(
            <Range 
                index={0} 
                min={0} 
                max={10} 
                step={1} 
                label={"Test Label"} 
                rangeLeftSide={false} 
                key={`range-input-0`}
            />
        );
        const input = screen.getByTestId(`smartparts-date-input-0`);
        expect(input.getAttribute("min")).toBe("0");
        expect(input.getAttribute("max")).toBe("10");
        expect(input.getAttribute("step")).toBe("1");
        expect(screen.getByText("Test Label")).toBeTruthy();
    });
});