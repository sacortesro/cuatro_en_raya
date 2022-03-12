//React
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
//Components
import ButtonMenu from './Button';
import { Register, Login, Edit } from './Form';

const Menu = () => {
  const [renderForm, setRenderForm] = useState(null); // 0 for Sign In, 1 for Signt Up, 2 for edit profile
  const [renderGame, setRenderGame] = useState(false);

  return (
    <>
      <View style={styleMenu.menu_container}>
        <ButtonMenu text='Iniciar sesión' callback={() => setRenderForm(0)} />
        <ButtonMenu text='Registrar' callback={() => setRenderForm(1)} />
        <ButtonMenu text='Editar perfil' callback={() => setRenderForm(2)} />
      </View>
      <View style={styleMenu.form_container}>
        <View>
          {renderForm === 0 && <Login setRenderForm={setRenderForm} setRenderGame={setRenderGame} />}
          {renderForm === 1 && <Register setRenderForm={setRenderForm} setRenderGame={setRenderGame} />}
          {renderForm === 2 && <Edit setRenderForm={setRenderForm} setRenderGame={setRenderGame} />}
        </View>
        {renderForm !== null &&
          <TouchableOpacity style={styleMenu.button} onPress={() => setRenderForm(null)}>
            <Text style={styleMenu.text}>Cancelar</Text>
          </TouchableOpacity>
        }
      </View>
        <View style={{ alignItems: 'center' }} >
          <TouchableOpacity style={[styleMenu.button, { width: 300 }]} onPress={() => setRenderGame(true)}>
            <Text style={styleMenu.text}>Seguir como invitado</Text>
          </TouchableOpacity>
        </View >
    </>
  );
}

const styleMenu = StyleSheet.create({
  menu_container: {
    position: 'relative',
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
  },
  form_container: {
    alignItems: 'center',
    position: 'relative',
    top: 10,
    padding: 20,
    flexDirection: 'column',
  },
  button: {
    margin: 10,
    backgroundColor: '#ff6f69',
    borderRadius: 8,
    maxHeight: 50,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: '#fff'
  }
});

export default Menu;