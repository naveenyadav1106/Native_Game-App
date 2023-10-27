import {
    View,
    Text,
    Pressable,
    StyleSheet,
} from 'react-native';

import Colors from '../../constants/Colors'

function Primarybutton({ children, handlePress }) {
    return (
        <View style={style.buttonOuter}>
            <Pressable
                onPress={handlePress}
                android_ripple={{ color: Colors.primary600 }}
                style={({ pressed }) =>
                    pressed
                        ? [style.buttonInner, style.pressed]
                        : style.buttonInner
                }
            >
                <Text style={style.buttontext}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default Primarybutton;

const style = StyleSheet.create({
    buttonOuter: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInner: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttontext: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
})