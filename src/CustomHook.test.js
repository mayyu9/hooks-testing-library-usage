//import { cleanup, act, testHook } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
import { renderHook, act } from 'react-hooks-testing-library';
import {useCounter} from './CustomHook';

describe('custom hook test', ()=>{
    it('useCounter hook', () =>{
        const {result} = renderHook(()=>useCounter(4))
        expect(result.current.count).toBe(4);

        act(() => result.current.increment())

        expect(result.current.count).toBe(5)

        act(() => result.current.decrement())

        expect(result.current.count).toBe(4)
    })
})