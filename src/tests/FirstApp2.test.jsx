import React from 'react';
import { render, screen } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('Pruebas en <FirstApp />', () => {

    const title = 'Hola, soy Goku'
    const subTitle = 'Hola, soy un subtítulo'

    test('Debe de hacer match con el snapshot', () => {

        const { container } = render(<FirstApp title={title} subTitle={subTitle} />)

        expect(container).toMatchSnapshot()

    });

    test('Debe de mostrar el mensaje "Hola, soy Goku"', () => {

        render(<FirstApp title={title} subTitle={subTitle} />)
        expect(screen.getByText(title)).toBeTruthy()

    });

    test('Debe de mostrar el tiúlo en un h1', () => {

        render(<FirstApp title={title} subTitle={subTitle} />)
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)

    });

    test('Debe de mostrar el subtiúlo enviado por props', () => {

        render(<FirstApp title={title} subTitle={subTitle} />)
        expect(screen.getAllByText(subTitle).length).toBe(1)

    });



})
