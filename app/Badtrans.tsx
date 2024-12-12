//alt det, der har en grøn tekst foran må ikke fjernes ellers gør hvad du vil fpr at gøre den flot
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';


const Badtrans = () => {
  const router = useRouter(); // MÅ IKKE FJERNES

  useEffect(() => {
    const timer = setTimeout(() => { // MÅ IKKE FJERNES
      router.push('/FrontPage'); // MÅ IKKE FJERNES
    }, 3000); // MÅ IKKE FJERNES

    return () => clearTimeout(timer); // MÅ IKKE FJERNES
  }, [router]);

  
  // skriv herinde fra:
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WOMP WOMP NIGGA!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 100,
    fontWeight: 'bold',
  },
});

export default Badtrans;