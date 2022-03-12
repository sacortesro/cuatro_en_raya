import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//Components
import Menu from './src/components/Menu';
import Game from './src/components/Game'

export default function App() {
  const [renderForm, setRenderForm] = useState(null); // 0 for Sign In, 1 for Signt Up, 2 for edit profile
  const [renderGame, setRenderGame] = useState(false);

  return (
    <>
      <Menu setRenderGame={setRenderGame} setRenderForm={setRenderForm} renderForm={renderForm} />
      {!renderGame &&
        <View style={{ alignItems: 'center' }} >
          <TouchableOpacity style={[styleGame.button, { width: 300 }]} 
          onPress={() => {
            setRenderForm(null);
            setRenderGame(true);
            }}>
            <Text style={styleGame.text}>Seguir como invitado</Text>
          </TouchableOpacity>
        </View >
      }
      {renderGame && <Game />}
    </>
  );

}

const styleGame = StyleSheet.create({
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
