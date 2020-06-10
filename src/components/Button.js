import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'

const Button = props => {
    return (
        <TouchableOpacity 
            style = {styles.buttonContainer}
            onPress={props.myPress}>
              <Text style={styles.textStyle}>{props.myTitle}</Text>
        </TouchableOpacity> 
    )

}
const styles = StyleSheet.create({

    textStyle: {
        color: 'black',
        fontWeight: 'bold'
    
      },
      buttonContainer: {
        backgroundColor: '#0097A7',
        width: Dimensions.get("window").width/2,
        alignSelf: 'center',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        margin: 5
      }


}

)

export {Button}