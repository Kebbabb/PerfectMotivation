//gør hvad du vil med denne  lav den flot
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FrontPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Perfect Motivation!</Text>
            <Text style={styles.subtitle}>Your journey to success starts here.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
});

export default FrontPage;