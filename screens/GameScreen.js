import {
    View,
    StyleSheet,
    Alert,
    FlatList,
    useWindowDimensions,
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import { useState, useEffect } from 'react';

import Title from '../Components/UI/Title';
import Number from '../Components/game/Number';
import Primarybutton from '../Components/UI/Primarybutton'
import Card from '../Components/UI/Card';
import Instruction from '../Components/UI/Instruction';
import Guesslog from '../Components/game/Guesslog';

function generateRandom(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandom(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandom(1, 100, userNumber)
    const [currentGuess, setcurrentGuess] = useState(initialGuess)
    const [guessRounds, setguessRounds] = useState([initialGuess])


    const { width, height } = useWindowDimensions()

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])                             //dependencies for useEffect on which it activates

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])



    function nextGuess(direction) {                                        //direction => 'lower' , 'greater'

        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert(
                "Don't lie",
                "You know that this is wrong....",
                [
                    {
                        text: 'Sorry',
                        style: 'destructive', //IOS 
                    }
                ],
                // {
                //     cancelable: true
                // }
            )
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandom(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setcurrentGuess(newRndNumber);
        setguessRounds(prevGuessrounds => [newRndNumber, ...prevGuessrounds]);
    }

    const guessroundlength = guessRounds.length;

    let content = (
        <>
            <Number>{currentGuess}</Number>
            <Card>
                <Instruction style={styles.Instruction}>Higher or Lower?</Instruction>
                <View style={styles.buttoncontainer}>
                    <View style={styles.button}>
                        <Primarybutton handlePress={nextGuess.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} color="white" />
                        </Primarybutton>
                    </View>
                    <View style={styles.button}>
                        <Primarybutton handlePress={nextGuess.bind(this, 'greater')}>
                            <Ionicons name="md-add" size={24} color="white" />
                        </Primarybutton>
                    </View>
                </View>
            </Card>
        </>
    );

    if (width > 500) {
        content =
            <>
                <View style={styles.buttoncontainerWide}>
                    <View style={styles.button}>
                        <Primarybutton handlePress={nextGuess.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} color="white" />
                        </Primarybutton>
                    </View>
                    <Number>{currentGuess}</Number>
                    <View style={styles.button}>
                        <Primarybutton handlePress={nextGuess.bind(this, 'greater')}>
                            <Ionicons name="md-add" size={24} color="white" />
                        </Primarybutton>
                    </View>
                </View>
            </>
    }

    return (
        <View style={styles.Screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listcontainer}>
                {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList
                    data={guessRounds}
                    renderItem={(itemdata) => <Guesslog roundNumber={guessroundlength - itemdata.index} guess={itemdata.item} />}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>

    )
}

export default GameScreen;

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
    },
    Instruction: {
        marginBottom: 12,
    },
    buttoncontainer: {
        flexDirection: 'row',
    },
    buttoncontainerWide: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        flex: 1,
    },
    listcontainer: {
        flex: 1,
        padding: 16,
    }
})