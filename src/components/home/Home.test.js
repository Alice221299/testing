import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import Home from './Home'

describe('Prueba del componente Home', () => {
    test('should show Introducción al testing', () => { 
       render(<Home/>)
        // const title  = getByText('Introducción al testing')
            expect(screen.getByText('Introducción al testing')).toBeInTheDocument()
     })
})