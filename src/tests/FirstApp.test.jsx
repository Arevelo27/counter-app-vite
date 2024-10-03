import React from 'react';
import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('Pruebas en <FirstApp />', () => {

    test('Debe de hacer match con el snapshot', () => {

        const title = 'Hola, soy Goku'
        const subTitle = 'Hola, soy un subtítulo'

        const { container } = render(<FirstApp title={title} subTitle={subTitle} />)

        // render( <FirstApp title={title} subTitle={subTitle}/> )

        expect(container).toMatchSnapshot()


    });

    test('Debe de mostrar el tiúlo en un h1', () => {

        const title = 'Hola, soy Goku'
        const subTitle = 'Hola, soy un subtítulo'

        const { container, getByText, getByTestId } = render(<FirstApp title={title} subTitle={subTitle} />)

        expect(getByText(title)).toBeTruthy()

        // const h1 = container.querySelector('h1')
        // expect( h1.innerHTML ).toBe(title)
        // expect( h1.innerHTML ).toContain(title)

        const h1 = getByTestId('test-title')

        // expect( h1.innerHTML ).toBe(title)
        expect(h1.innerHTML).toContain(title)

    });

    test('Debe de mostrar el subtiúlo enviado por props', () => {
        const title = 'Hola, soy Goku'
        const subTitle = 'Hola, soy un subtítulo'

        const { getAllByText } = render(<FirstApp title={title} subTitle={subTitle} />)

        expect(getAllByText(subTitle).length).toBe(1)

        // const p = container.querySelector('p')
        // expect( p.innerHTML ).toBe(subTitle)
        // expect( p.innerHTML ).toContain(subTitle)

        // const p = getByText(subTitle)

        // expect( p.innerHTML ).toBe(subTitle)
        // expect( p.innerHTML ).toContain(subTitle)

        // expect( p.innerHTML ).toBe(subTitle)
        // expect( p.innerHTML ).toContain(subTitle)

        // expect( p.innerHTML ).toBe(subTitle)
        // expect( p.innerHTML ).toContain(subTitle)

    });



})
