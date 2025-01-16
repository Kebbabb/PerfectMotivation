//alt det, der har en grøn tekst foran må ikke fjernes ellers gør hvad du vil fpr at gøre den flot
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';


const Greattrans = () => {
  const router = useRouter(); // MÅ IKKE FJERNES

  useEffect(() => {
    const timer = setTimeout(() => { // MÅ IKKE FJERNES
      router.push('/FrontPage'); // MÅ IKKE FJERNES
    }, 3000); // MÅ IKKE FJERNES

    return () => clearTimeout(timer); // MÅ IKKE FJERNES
  }, [router]);

  
  // skriv herinde fra:
  return (
      <ImageBackground
          source={require('C:/Users/Benyamin/Documents/GitHub/PerfectMotivation/assets/images/BB.png')}
          style={styles.container}>
      <Text style={styles.text}>Great, then let's look at your day for today</Text>
    </ImageBackground>
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
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Greattrans;