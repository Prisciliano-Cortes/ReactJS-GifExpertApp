import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Titulo';
    const url = 'https://localhost/alog.jpg';

    test('Debe de mostrar el componente correctamente', () => {

        const wrapper = shallow(<GifGridItem title={title} url={url} />)

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un párrafo con el title', () => {

        const wrapper = shallow(<GifGridItem title={title} url={url} />)

        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );

    });

    test('Debe de tener la imagen igual al url y alt de los props', () => {

        const wrapper = shallow(<GifGridItem title={title} url={url} />)

        const img = wrapper.find('img');

        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    });

    test('Debe de tener animate__flipInX', () => {

        const wrapper = shallow(<GifGridItem title={title} url={url} />);

        const div = wrapper.find('div');

        const className = div.prop('className');

        expect( className.includes('animate__flipInX') ).toBe(true)
    });

});