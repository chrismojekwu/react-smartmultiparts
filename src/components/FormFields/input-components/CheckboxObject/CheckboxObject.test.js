import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import CheckboxObject from './CheckboxObject';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

const checkboxObj = {
    query: "Languages", 
    boxes: ["Basic", "C", "Java", "Ruby", "JS"]
};

describe("CheckboxObject", () => {
    it("renders with correct props", () => {
        render(
            <CheckboxObject 
                index={0} 
                checks={checkboxObj} 
                key={`checkbox-object-0`}
            />
        );
        ["smartparts-checkbox-object-query", "smartparts-checkbox-object-input", `smartparts-object-checkbox`].forEach((id, i) => {
            if (i !== 2) {
                expect(screen.getByTestId(id)).toBeTruthy();
            } else {
                expect(screen.getAllByTestId(id).length).toBe(5);
            }
        });
    });
});