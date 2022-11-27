import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import Date from './Date';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("Date", () => {
    it("renders with correct props", () => {
        render(<Date required={false} index={0}/>);
        expect(screen.getByTestId("smartparts-date-input-0")).toBeTruthy();
    });

    it("renders required date input", () => {
        const wrapper = mount(<Date required={true} index={0}/>);
        expect(wrapper.find('#smartparts-date-input-0').html().includes("required"));
    });
});