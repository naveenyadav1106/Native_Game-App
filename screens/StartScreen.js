import {
    View,
    TextInput,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,      //IOS
    ScrollView,
} from 'react-native'
import { useState } from 'react';
import Primarybutton from '../Components/UI/Primarybutton';
// import { Dimensions } from 'react-native';

import { useWindowDimensions } from 'react-native';

import Colors from '../constants/Colors';
import Title from '../Components/UI/Title';
import Card from '../Components/UI/Card';
import Instruction from '../Components/UI/Instruction';

function StartScreen({ onPick }) {

    const [enterNumber, setenterNumber] = useState('')

    const { width, height } = useWindowDimensions();

    function handleinput(inputnumber) {
        setenterNumber(inputnumber)
    }

    function resetinput() {
        setenterNumber('')
    }

    function confirminput() {
        const chosenNumber = parseInt(enterNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Number has to be a number between 1 and 99.',
                [
                    {
                        text: 'okay',                     //these are options for button
                        onPress: resetinput,
                        style: 'destructive',             //style only applicable to IOS
                    }
                ],
                {
                    cancelable: true                     //AlertOPTIONS is an object
                }
            );
            return;
        }
        onPick(chosenNumber)
    }

    const marginTopdistance = height < 380 ? 30 : 100;

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen}>
                <View style={[styles.rootContainer, { marginTop: marginTopdistance }]}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <Instruction>Enter A Number</Instruction>
                        <TextInput
                            style={styles.numberinput}
                            maxLength={2}
                            keyboardType='number-pad'
                            autoCapitalize='none'
                            autoCorrect={false}
                            value={enterNumber}
                            onChangeText={handleinput}
                        />
                        <View style={styles.ButtonContainer}>
                            <View style={styles.button}>

                                {/* custom button do not have onPress property so we have to create custom function to handlePress from the custom button component */}

                                <Primarybutton handlePress={resetinput}>Reset</Primarybutton>
                            </View>
                            <View style={styles.button}>

                                <Primarybutton handlePress={confirminput}>Confirm</Primarybutton>

                            </View>
                        </View>
                    </Card >
                </View >
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartScreen;

// const deviceheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        // marginTop: deviceheight < 380 ? 30 : 100,
        alignItems: 'center',
    },
    numberinput: {
        width: 45,
        textAlign: 'center',
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
    },
    ButtonContainer: {
        flexDirection: 'row'
    },
    button: {
        flex: 1,
    }
})