// Http request
import axios from 'axios';
//React
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
//Styles
import stylesForm from './form.style'

const URL = 'http://127.0.0.1:8000'; // Url where runs laravel api


const Register = ({ setRenderForm, setRenderGame }) => {

    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [message, setMessage] = useState('');

    const submitRegister = () => {

        if (userEmail == '') {
            setMessage('Por favor, ingrese un correo electrónico')
            return;
        }
        if (userName == '') {
            setMessage('Por favor, ingrese un nombre de usuario')
            return;
        }
        if (userPassword == '') {
            setMessage('Por favor, ingrese una contraseña')
            return;
        }

        axios
            .post(URL + '/api/auth/register', { email: userEmail, name: userName, password: userPassword })
            .then((response) => {
                setRenderForm(null);
                setRenderGame(true);
                setMessage('Registation complete');
                console.log(response);
            })
            .catch((err) => {
                console.log('Registation incomplete');
                console.log(err.message);
            });

    }

    return (
        <View style={stylesForm.container}>
            <Text>{message}</Text>
            <Text style={stylesForm.title}>Registro</Text>

            <TextInput style={stylesForm.text_input} placeholder='email' onChangeText={(t) => setUserEmail(t)} value={userEmail} />
            <TextInput style={stylesForm.text_input} placeholder='Nombre' onChangeText={(t) => setUserName(t)} value={userName} />
            <TextInput style={stylesForm.text_input} placeholder='password' onChangeText={(t) => setUserPassword(t)} value={userPassword} secureTextEntry={true} />
            <TouchableOpacity
                style={stylesForm.button}
                onPress={submitRegister}>
                <Text>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
};

const Login = ({ setRenderForm, setRenderGame }) => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [message, setMessage] = useState('');



    const submitLogin = () => {


        if (userEmail === '') {
            setMessage('Por favor, ingrese un correo electrónico')
            return;
        }
        if (userPassword === '') {
            setMessage('Por favor, ingrese una contraseña')
            return;
        }

        axios
            .post(URL + '/api/auth/login', { email: userEmail, password: userPassword })
            .then((response) => {
                setRenderForm(null);
                setRenderGame(true);
                setMessage('Login succesfull');
                console.log(response);
            })
            .catch((err) => {
                console.log('Failed login');
                console.log(err.message);
            });

    }


    return (
        <View style={stylesForm.container}>
            <Text>{message}</Text>
            <Text style={stylesForm.title}>Ingresar</Text>
            <TextInput style={stylesForm.text_input} placeholder='email' onChangeText={(t) => setUserEmail(t)} value={userEmail} />
            <TextInput style={stylesForm.text_input} placeholder='password' onChangeText={(t) => setUserPassword(t)} value={userPassword} secureTextEntry={true} />
            <TouchableOpacity
                style={stylesForm.button}
                onPress={submitLogin}>
                <Text>Ingresar</Text>
            </TouchableOpacity>
        </View>
    );
};

const Edit = ({ setRenderForm, setRenderGame }) => {

    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setPassword] = useState('');
    const [error, setError] = useState('');

    const submitEdit = () => {
        
        
        if (userEmail == '') {
            setError('Por favor, ingrese un correo electrónico')
            return;
        }
        if (userName == '') {
            setError('Por favor, ingrese un nombre de usuario')
            return;
        }
        if (userPassword == '') {
            setError('Por favor, ingrese una contraseña')
            return;
        }

        setRenderForm(null);
        setRenderGame(true);
    }

    return (
        <View style={stylesForm.container}>
            <Text>{error}</Text>
            <Text style={stylesForm.title}>Editar información</Text>
            <TextInput style={stylesForm.text_input} placeholder='Nombre' onChangeText={(t) => setUserEmail(t)} value={userEmail} />
            <TextInput style={stylesForm.text_input} placeholder='email' onChangeText={(t) => setUserName(t)} value={userName} />
            <TextInput style={stylesForm.text_input} placeholder='password' onChangeText={(t) => setPassword(t)} value={userPassword} secureTextEntry={true} />
            <TouchableOpacity
                style={stylesForm.button}
                onPress={submitEdit} >
                <Text>Editar</Text>
            </TouchableOpacity>
        </View>
    );
};




export { Register, Login, Edit };