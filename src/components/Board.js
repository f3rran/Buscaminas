import { useReducer } from "react";
import { StyleSheet, View, Text } from "react-native";
import { gameReducer } from "../reducers/gameReducer";
import { createBoard } from "../utils/createBoard";
import Cell from "./Cell";

const BOARD_SIZE = 10;
const BOMBS_NUM = 10;

export default function Board() {
    const [gameState, dispatch] = useReducer(gameReducer, {
        board: createBoard(BOARD_SIZE, BOARD_SIZE, BOMBS_NUM),
        isGameOver: false
    })

    function handlePress(row,col){
        dispatch({type: "HANDLE_CELL", row, col})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{gameState.isGameOver ? 'Game Over' : 'Buscaminas'}</Text>
            {gameState.board.map((row, rowIdx) => (
                <View key={rowIdx} style={styles.row}>
                    {row.map((cell, cellIdx) => (
                        <Cell key={cellIdx} handlePress={handlePress} {...cell} />
                    ))}
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
    },
    text: {
        fontWeight: '900',
        fontSize: 32
    }
})