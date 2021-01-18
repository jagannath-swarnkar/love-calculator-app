import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from 'react-native-paper';

const ResultPage = (props) => {
    return (
        <View>
            <Button
            icon={{ uri: 'https://i.imgur.com/98P1j6s.jpg'}}
            color="#ff009e"
            labelStyle={{fontSize: 25}}
            style={styles.btn_txt}
            >
                <Text style={{fontSize:20}}>{props && props.data && props.data.percentage} %</Text>
            </Button>

        </View>
    )
}

export default ResultPage;

const styles = StyleSheet.create({
    btn_txt: {
    }
})