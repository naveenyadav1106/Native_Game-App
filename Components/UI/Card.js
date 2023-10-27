import { View, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/Colors';

function Card({ children }) {
    return (
        <View style={styles.Card}>{children}</View>
    )
}

export default Card;

const devicewidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    Card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: devicewidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        //IOS PROPERTIES
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        //Andriod specific 
        elevation: 8,
    },
})