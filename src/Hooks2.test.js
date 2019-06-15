import React from 'react';
import {
    render,
    fireEvent,
    getByTestId,
    rerender
} from '@testing-library/react';
import Hooks from './Hooks2';

describe('hooks example to test useEffect and useRef', () => {
    it('submitting a value via the input field changes the name state value', () => {
        const {container, rerender} = render(<Hooks />);
        const nameValue = getByTestId(container, 'nameValue');
        const inputName = getByTestId(container,"inputName");

        const submitButton = getByTestId(container, "submitRefButton");

        const newName ="Mahendar Singh";
        //console.log(nameValue);
        fireEvent.change(inputName, { target: { value: newName } })
        fireEvent.click(submitButton)
        expect(nameValue.textContent).toBe(newName)

        rerender(<Hooks />);
        expect(window.localStorage.getItem("name")).toBe(newName);
    })
})