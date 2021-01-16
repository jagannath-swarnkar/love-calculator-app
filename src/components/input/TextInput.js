import * as React from 'react';
import { TextInput } from 'react-native-paper';

const Input = (props) => {
    const { label, type, value, handleChange, ...other } = props;
    const [text, setText] = React.useState('');

    return (
        <TextInput
            label={label}
            value={value}
            onChangeText={text => handleChange(text)}
            {...other}
        />
    );
};

export default Input;