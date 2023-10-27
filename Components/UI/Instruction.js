import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors';

function Instruction({ children, style }) {
    return (
        <View>
            <Text style={[styles.instruction, style]}>{children}</Text>
        </View>
    )
}

export default Instruction;

const styles = StyleSheet.create({
    instruction: {
        color: Colors.accent500,
        fontSize: 24,
    },
})