
/* Perfil usando Desestructuración de Props */
import { Text, View, Button } from 'react-native';
import React,{useState} from 'react';

export const Perfil = ({ nombre, carrera, materia, cuatri }) => {
    const [mostrar, setMostrar] = useState(false);

    return (
            <View>
                <Text>{nombre}</Text>

                {mostrar &&  
                <>
                <Text>{carrera}</Text>
                <Text>{materia}</Text>
                <Text>{cuatri}</Text>
                </>
                }
                <Button title="Ver Perfil" onPress={() =>setMostrar(!mostrar)}/>
            </View>
    )
}
    


/* Perfil usando Destructuración de Props */
/* import { Text, View } from 'react-native';

export const Perfil = (props) => {
    return (
            <View>

                <Text>{props.nombre}</Text>
                <Text>{props.carrera}</Text>
                <Text>{props.materia}</Text>
                <Text>{props.cuatri}</Text>

            </View>

    )
}
   */