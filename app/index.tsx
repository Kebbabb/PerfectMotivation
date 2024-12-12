//denne ændre jeg så ikke rør noget Beny.
import { Text, View,StyleSheet,ImageBackground } from "react-native";
import {Link} from "expo-router";
const styles = StyleSheet.create({


  Maintext: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom:100
    
  },
  Buttonmargin: { 
    flexDirection: "row",
  },
  Buttons: {
    margin: 50,
    width:100,
    height: 50,
    backgroundColor: "lightblue",
    color: "white",
    borderRadius: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage:{
    flex:1,
    resizeMode: "cover",
    justifyContent:"center",
    alignItems: "center"
  }

});

export default function Index() {
  return (
    <ImageBackground 
    source={require('C:/Users/next4937/Documents/React native/perfectmotivation/assets/images/BB.png')}
    style={styles.backgroundImage}>
      <View>
        <Text style={styles.Maintext}>Hi Benyamin how has your day been!</Text>
      </View>
      <View style={styles.Buttonmargin}>
    
        <View style={styles.Buttons}>
          <Link href={"/Greattrans"}><Text style={{color:"white",fontSize:25}}>Great</Text></Link>
        </View>

        <View style={styles.Buttons}>
          <Link href={"/Badtrans"}><Text style={{color:"white", fontSize:25}}>Bad</Text></Link>
        </View>
      </View>
    </ImageBackground>
  );
}
