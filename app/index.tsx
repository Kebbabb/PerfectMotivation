//denne ændre jeg så ikke rør noget Beny.
import { Text, View,StyleSheet,Button,TouchableHighlight,TouchableOpacity,Dimensions } from "react-native";
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
    margin: 10,
    padding: 10,
    backgroundColor: "lightblue",
    color: "white",
    borderRadius: 10,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
  },

});

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -200,
        backgroundColor: "white",
      }}
    >
      <View>
        <Text style={styles.Maintext}>Hi Benyamin how has your day been!</Text>
      </View>
      <View style={styles.Buttonmargin}>
    
        <View style={styles.Buttons}>
          <Link href={"/Greattrans"}><Text style={{color:"white",}}>Great</Text></Link>
        </View>

        <View style={styles.Buttons}>
          <Link href={"/Badtrans"}><Text style={{color:"white",}}>Bad</Text></Link>
        </View>
      </View>
    </View>
  );
}
