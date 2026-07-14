import { Text, View } from 'react-native';
import React,{useState} from 'react';

export const TarjetaPelicula = ({ Titulo, Genero, Pelicula }) => {
    const [mostrar, setMostrar] = useState();

    return (
            <View>

                {mostrar &&  
                <>
                <Text>{Titulo}</Text>
                <Text>{Genero}</Text>
                <Text>{Pelicula}</Text>
                </>
                }
            </View>
    )
}