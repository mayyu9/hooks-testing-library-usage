import React from 'react';
import ReactDom from 'react-dom';
import {
    render,
    fireEvent,
    getByTestId,
    rerender,
    cleanup,
} from '@testing-library/react';
import Counterhooks from './Counterhooks';

describe('Counter App', () => {
    it("render counter app without crashing", () =>{
        const div = document.createElement('div');
        ReactDom.render(<Counterhooks />, div);
        ReactDom.unmountComponentAtNode(div);
    })
})

describe('conter hooks test', ()=>{

    // beforeEach(()=>{
    //     var {container} = render(<Counterhooks />);
    //     console.log(container);
    // })
    it('increment and decrement buttons work', () => {
        const {container} = render(<Counterhooks />);
        const countValue = getByTestId(container, "countValue");
        const incBtn = getByTestId(container, "incBtn");
        const decBtn = getByTestId(container, "decBtn");
        expect(countValue.textContent).toBe('0');

        fireEvent.click(incBtn);
        expect(countValue.textContent).toBe('1');

        fireEvent.click(decBtn);
        expect(countValue.textContent).toBe('0');
    })
})
