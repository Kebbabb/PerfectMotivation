//gør hvad du vil med denne  lav den flot
import React from 'react';
import { View, Text, StyleSheet, ImageBackground,Dimensions, ScrollView,Button, Alert} from 'react-native';

const ButtonPress = () => {
    Alert.alert('LING GANG GULLI GULLI ')
}

const FrontPage = () => {
    return (
        <ImageBackground
            source={require('C:/Users/Benyamin/Documents/GitHub/PerfectMotivation/assets/images/BB.png')}
            style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.title}>Welcome to Perfect Motivation!</Text>
                    <Text style={styles.subtitle}>Your journey to success starts here.</Text>
                </View>
                <View>
                    <View style={styles.Menu}>
                        <View style={styles.MotivationButton}>
                            <Button color="Grey" title="Get Motivated" onPress={ButtonPress} />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.Menubar }>

            </View>
        </ImageBackground>
    );
};
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    MotivationButton: {
        backgroundColor: 'grey',
        width: 200,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,

    },
    Menubar: {
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: 'grey',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 100,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',

    },
    Menu: {
            
            width: Dimensions.get('window').width-30,
            marginTop: 100,
            height: screenHeight,
            backgroundColor: "lightgrey",
            borderColor: "white",
        borderRadius: 30,
        borderWidth: 4,
            alignItems: 'center',
        
    },
});

export default FrontPage;