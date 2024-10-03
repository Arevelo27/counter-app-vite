import React from 'react';
import { fireEvent, render, screen, act } from "@testing-library/react"
import { CounterApp } from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

    const value = 100

    test('Debe de hacer match con el snapshot', () => {

        const value = 10
        const { container } = render(<CounterApp value={value} />)
        expect(container).toMatchSnapshot()

    });

    test('Debe de mostrar el valor inicial de 100 <CounterApp value={100}/>', () => {

        render(<CounterApp value={100} />)
        expect(screen.getByText(100)).toBeTruthy()
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100')

    });

    test('Debe de incrementar con el botón +1', () => {

        render(<CounterApp value={value} />)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText(value + 1)).toBeTruthy()

    });

    test('Debe de decrementar con el botón -1', () => {

        render(<CounterApp value={value} />)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText(value - 1)).toBeTruthy()

    });

    test('Debe de funcionar el botón de reset', () => {
        
        render(<CounterApp value={value} />);

        const addButton = screen.getByText('+1');
        const resetButton = screen.getByRole('button', { name: 'btn-reset' });

        fireEvent.click(addButton);
        fireEvent.click(addButton);
        fireEvent.click(addButton);
        fireEvent.click(resetButton);        

        // fireEvent.click(screen.getByText('Reset'))

        expect(screen.getByText(value)).toBeTruthy()

    });

})
