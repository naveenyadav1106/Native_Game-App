import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

export default function Guesslog({ roundNumber, guess }) {
    return (
        <View style={styles.listitem}>
            <Text>#{roundNumber}</Text>
            <Text>Opponent's Guess:{guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listitem: {
        borderColor: Colors.primary500,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 8,
    }
})