import React from 'react'
import { StyleSheet, View, Image } from 'react-native';
import CalculatorForm from '../components/CalculatorForm';

const LoveCalculator = () => {
    return (
        <View style={styles.cont}>
            <Image
                source={{
                    uri: 'https://imgur.com/n1CtDnT.png',
                }}
                style={{ width: 120, height: 120, position: 'absolute' }}
                />
            <Image
                source={{
                    uri: 'https://imgur.com/F7qF7Ld.png',
                }}
                style={{ width: 160, height: 160, marginLeft: 'auto' }}
                />
            <CalculatorForm  />
        </View>
    )
}
export default LoveCalculator;

const styles = StyleSheet.create({
    cont: {
        width: '90%',
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
        margin: 20
        // justifyContent: 'center'
    }
})