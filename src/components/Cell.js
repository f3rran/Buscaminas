import { Pressable, StyleSheet, Text } from "react-native";

export default function Cell({
    row,
    col,
    isBomb,
    value,
    isFlipped,
    handlePress,
}){
    return (
        <Pressable onPress={() => handlePress(row,col)} style={[styles.container, !isFlipped && styles.isFlipped]}>
            <Text style={styles.text}>
                {isFlipped && (isBomb ? '💣' : (value === 0) ? '' : value)}
            </Text>
        </Pressable>
    )
}

const styles =  StyleSheet.create({
    container: {
        width: 35,
        height: 35,
        borderWidth: 1,
        borderColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 22,
        fontWeight: '800'
    },
    isFlipped: {
        backgroundColor: 'lightblue'
    }
})