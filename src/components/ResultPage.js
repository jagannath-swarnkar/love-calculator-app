import React from 'react'
import { Text, View } from 'react-native';
import { Avatar, Button } from 'react-native-paper';

const ResultPage = (props) => {
    return (
        <View>
            <Button
            icon={{ uri: 'https://i.imgur.com/98P1j6s.jpg'}}
            color="#ff009e"
            >
                {props && props.data && props.data.percentage} %
            </Button>

        </View>
    )
}

export default ResultPage;