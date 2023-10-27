import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Dimensions } from 'react-native';

import Colors from '../../constants/Colors';

function Number({ children }) {
    return (
        <View style={style.container}>
            <Text style={style.numbertext}>{children}</Text>
        </View>
    )
}

export default Number;

const devicewidth = Dimensions.get('window').width;

const style = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: devicewidth < 380 ? 12 : 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numbertext: {
        color: Colors.accent500,
        fontWeight: 'bold',
        fontSize: devicewidth < 380 ? 28 : 36,
    }
})