import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, SetIsLoading] = useState( true );
    
    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        SetIsLoading ( false );
    }
        
    useEffect( () => {
        getImages( );
    }, [ ]); // [ ] => Dependencias vacías, solo se ejecuta la primera vez.

    return {
        images,
        isLoading
    }
}
