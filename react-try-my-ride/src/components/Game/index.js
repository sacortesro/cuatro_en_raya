import React, { Component } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native'
//Style
import styleGame from './Game.style';
//Components

function Square(props) {
  return (
    <TouchableOpacity
      style={styleGame.square}
      onPress={() => props.onPress()}
    >
      <Text style={styleGame.text_square}>{props.value}</Text>
    </TouchableOpacity>
  );
}

class Board extends Component {
  renderSquare(i) {
    return (<Square
      value={this.props.squares[i]}
      onPress={() => this.props.onPress(i)}
    />);
  }

  render() {
    return (
      <View>
        <View style={styleGame.board_row} >
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </View>
        <View style={styleGame.board_row}>
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </View>
        <View style={styleGame.board_row}>
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </View>
        <View style={styleGame.board_row}>
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </View>
      </View>
    );
  }
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(16).fill(null),
      xIsNext: true,
    }
  }


  handlePress(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  restartGame() {
    this.setState({
      squares: Array(16).fill(null),
      xIsNext: true,
    })
  }

  render() {
    const winner = calculateWinner(this.state.squares);

    let status;

    if (winner) {
      status = 'Winner ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <View style={styleGame.game}>
        <View style={{flexDirection: 'row'}}>
          <View style={styleGame.game_info}>
            <Text>{status}</Text>
          </View >
          <TouchableOpacity style={[styleGame.game_info, {backgroundColor:'#ff6f69'} ]} onPress={() => this.restartGame()}>
            <Text>Reinciar juego</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Board
            squares={this.state.squares}
            onPress={(i) => this.handlePress(i)}
          />
        </View>
      </View>
    );
  }
}

// ======================================== 
// HELPER FUNCTION

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;

// ========================================
