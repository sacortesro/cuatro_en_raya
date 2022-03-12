import { StyleSheet } from 'react-native';

const styleGame = StyleSheet.create({

    body: {
        fontSize: 14,
        fontFamily: "Sans-serif",
        fontWeight: 'bold'
    },
    ul: {
        paddingLeft: 30,
    },
    ol: {
        paddingLeft: 30,
    },

    //     board-row: after {
    //     clear: both;
    //     content: "";
    //     display: table;
    // }
    board_row:{
        display: 'table'
    },

    status: {
        marginBottom: 10,
    },

    square: {
        backgroundColor: '#ffeead',
        borderWidth: 2,
        borderColor: '#ffcc5c',
        float: 'left',
        lineHeight: 34,
        height: 50,
        width: 50,
        marginRight: -1,
        marginTop: -1,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    text_square: {
        fontSize: 23,
        fontWeight: 'bold',
    },
    game: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    game_info: {
        backgroundColor: '#88d8b0',
        borderRadius:8,
        padding: 20,
        marginBottom: 20,
        marginHorizontal: 5,
        fontSize: 20,
    }

});

export default styleGame;