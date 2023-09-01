import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import Counter from './Counter'

test('should increase by 1 by doing click', () => { 
    const {getByRole} = render(<Counter/>)
    const buttonIncrease = getByRole('increase')
    const valueText = getByRole('value')
    fireEvent.click(buttonIncrease)
    expect(valueText).toHaveTextContent(1)
 })

 test('should decrease by 1 by doing click', () => { 
    const {getByRole} = render(<Counter/>)
    const buttonIncrease = getByRole('decrease')
    const valueText = getByRole('value')
    fireEvent.click(buttonIncrease)
    expect(valueText).toHaveTextContent(-1)
 })