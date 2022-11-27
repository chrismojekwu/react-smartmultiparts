import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import TextArea from './TextArea';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("TextArea", () => {
    it("renders with correct props", () => {
        render(<TextArea index={0} required={false} key={`text-area-0`}/>);
        expect(screen.getByTestId("smartparts-comments-0")).toBeTruthy();
    });

    it("renders required TextArea", () => {
        const wrapper = mount(<TextArea index={0} required={false} key={`text-area-0`}/>);
        expect(wrapper.find('#smartparts-comments-0').html().includes("required"));
    });
});