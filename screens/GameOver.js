import {
    View,
    Image,
    Text,
    StyleSheet,
    useWindowDimensions,
    ScrollView
} from 'react-native'
import Title from '../Components/UI/Title';
import Colors from '../constants/Colors'
import Primarybutton from '../Components/UI/Primarybutton';
// import { Dimensions } from 'react-native';

function GameOver({ onStartNewGame }) {

    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    };

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootcontainer}>
                <Title>GAME OVER!!</Title>
                <View style={[styles.imagecontainer, imageStyle]}>
                    <Image
                        source={require('../assets/images/win.png')}
                        style={styles.Image}
                    />
                </View>
                <Text style={styles.winner}>JEET GYE REY BHAIYA!!!</Text>
                <Primarybutton handlePress={onStartNewGame}>Start New Game</Primarybutton>
            </View>
        </ScrollView>
    )
}

export default GameOver;

// const devicewidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootcontainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagecontainer: {
        // width: devicewidth < 380 ? 150 : 300,
        // height: devicewidth < 380 ? 150 : 300,
        // borderRadius: devicewidth < 380 ? 74 : 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    Image: {
        width: '100%',
        height: '100%',
    },
    winner: {
        fontWeight: 'bold',
        fontSize: 24,
        color: Colors.primary500,
        marginBottom: 10,
    }
})