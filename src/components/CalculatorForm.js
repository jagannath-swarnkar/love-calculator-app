import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { IconButton, Colors, Button } from 'react-native-paper';
import { getResult } from '../services/service';
import Input from './input/TextInput';
import CircularLoader from './loader/CircularLoader';
import ResultPage from './ResultPage';

const CalculatorForm = (props) => {
    const {calculatedResult} = props;
    const [fname, setFname] = useState('')
    const [sname, setSname] = useState('')
    const [loader, setLoader] = useState(false);
    const [result, setResult] = useState({})

    const handleCalculate = () => {
        if(!fname || !sname) return true;
        setLoader(true)
        getResult({fname, sname})
        // .then(res=>res.json())
        .then(res=>{
            console.log('res: ', res.data)
            setResult(res.data)
            setLoader(false);
            // setFname('')
            // setSname('')
        })
        .catch(err=>{
            console.log('err', err)
            setLoader(false)
        })
    }

    useEffect(() => {
        return () => {
            cleanup()
        }
    },[])

    const cleanup = () => {
        setResult({})
        setFname('')
        setSname('')
        setLoader(false)
    }
    return (
        <View style={styles.cont}>
            <Text style={styles.label_txt}>
                Your Name
                { result && result.percentage &&
                <IconButton
                    icon="notification-clear-all"
                    animated={true}
                    color={Colors.red500}
                    size={20}
                    onPress={cleanup}
                />}
            </Text>
            <Input 
                label=""
                value={fname}
                isFocused
                placeholder="Your name..."
                style={styles.input_box}
                handleChange={(txt)=>setFname(txt)}
            />
            <Text style={{...styles.label_txt, paddingTop:26}}>Partner Name</Text>
            <Input 
                label=""
                value={sname}
                placeholder="Partner name..."
                style={styles.input_box}
                handleChange={(txt)=>setSname(txt)}
            />

            <Button
                icon={{ uri: 'https://i.imgur.com/98P1j6s.jpg'}}
                color="#ff009e"
                mode="contained"
                uppercase={false}
                labelStyle={{fontSize: 20}}
                loading={loader}
                style={styles.calc_btn}
                disabled={!fname || !sname}
                onPress={handleCalculate}
            >
                Calculate
            </Button>
            <View>
                {/* {loader && <CircularLoader size="large" />} */}
                {!loader && result && result.percentage && <ResultPage data={result} />}
            </View>
        </View>
    )
}
export default CalculatorForm;

const styles = StyleSheet.create({
    cont: {
        width: '100%'
    },
    label_txt: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: "sans-serif",
        paddingBottom: 10
    },
    input_box: {
        borderRadius: 8
    },
    calc_btn: {
        margin:20,
        marginTop: 50,
        padding:10,
        fontSize:20,
        fontWeight: 'bold',
        // width: 160,
        alignSelf: 'center'
    }
})