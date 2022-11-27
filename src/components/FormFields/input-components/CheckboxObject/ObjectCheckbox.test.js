import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import ObjectCheckbox from './ObjectCheckbox';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("Object Checkbox", () => {
    it("renders with correct props", () => {
        render(
            <ObjectCheckbox
                value={"Test Value"}
                index={0}
                data={""}
                key={`object-checkbox-i`}
                setData={() => {}}
            />
        );
        expect(screen.getByTestId(`smartparts-object-checkbox`)).toBeTruthy();
    });
});