import React from 'react';
import { StyleSheet,Image,SafeAreaView, Text,View} from "react-native";

function Home(props) {
    return (
       <SafeAreaView   style={styles.background}>

           <View styles={styles.logoContainer}>
                <Image source={require("../assets/logo.jpg")} style={styles.logo}/>
                <Text> My Co'Laverie </Text>

           </View>

       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background :{
        flex:1,
        backgroundColor:"white",
        justifyContent:'flex-start',
        alignItems:"center",
    },
    logo:{
        width:100,
        height:100,
    },
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center",
        
    }
    
})

export default Home;