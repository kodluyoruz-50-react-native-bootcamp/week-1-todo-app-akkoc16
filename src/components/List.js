import React, { useState } from 'react'
import {TouchableOpacity,Text,View,StyleSheet,Dimensions,Image} from 'react-native'
 
const List=props=>{
    const [done,setDone]=useState(false)
    const [undone, setUndone] =useState(true)
    const styles=done ? doneStyles : undoneStyles

    doneItem=()=>{
        setDone(!done)
        setUndone(!undone)
    }
    return(
        <TouchableOpacity
            style={styles.container}
            onPress={doneItem}>
            <View style={{flexDirection:'row', justifyContent: "space-between"}}>
                <Image source={{uri: "https://www.onlygfx.com/wp-content/uploads/2018/01/grunge-hashtag-6.png"}}
                     style = {styles.imageStyle}></Image>
                    <Text style={styles.textStyle}>{props.data.myEntry}</Text>
                    {
                        done && <Text style={styles.textStyle}>Yapıldı!</Text>
                    }
                    {
                        undone && <Text style={styles.textStyle}>Yapılmadı!</Text>
                    }
                </View>
        </TouchableOpacity>
    )
}

const doneStyles=StyleSheet.create({
    imageStyle: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        alignSelf: 'center',
    },
    container:{
        backgroundColor:'#5fdde5',
        margin:15,
        padding:10,
        borderRadius:10,
        flexDirection:'column',

    },
    textStyle:{
        fontSize:15,
        marginLeft:20,
        textDecorationLine: 'line-through',
        fontStyle: "italic",
    },

})

const undoneStyles=StyleSheet.create({
    imageStyle: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        alignSelf: 'center',
    },
    container:{
        backgroundColor:'#f37121',
        margin:15,
        padding:10,
        borderRadius:10,
        flexDirection:'column',
    },
    textStyle:{
        fontSize:15,
        marginLeft:20,
        fontStyle: "italic",
        textDecorationLine: 'underline',
    },
})

export {List}