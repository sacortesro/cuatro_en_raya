import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
//Styles
import stylesButton from './Button.style';

const ButtonMenu = ({ text, callback }) => (
    <TouchableOpacity
        style={stylesButton.button}
        onPress={callback} >
        <Text style={stylesButton.text}>{text}</Text>
    </TouchableOpacity>

);

export default ButtonMenu;
