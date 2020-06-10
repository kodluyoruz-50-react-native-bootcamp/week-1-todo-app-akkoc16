import React from 'react'
import { View, Text, StyleSheet, SafeAreaView , Dimensions, TextInput, FlatList, ImageBackground} from 'react-native'
import { Button,List} from './components'

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            entry: "",
            list: [],
        }
        
    }

    changeText = (text) => {
        this.setState({entry: text}) 
    }

    addToList = () => {
        
        let newList = [...this.state.list] 
        newList.push({myEntry: this.state.entry})
        this.setState({list: newList})

    }
    

    render(){
        
        return(
            <SafeAreaView style={{flex:1, justifyContent:'center' }}>
              <View style={styles.background}>
                <Text style={styles.textStyle}>MyList</Text>
              </View>
                <View style={{flex:1, backgroundColor: "#222831"}}>
                    <FlatList
                        keyExtractor= {(item,index)=>index.toString()}
                        data={this.state.list}
                        renderItem={({item}) => <List data={item}></List>}/>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            onChangeText={this.changeText} myTitle={this.entry} ></TextInput>
                    </View>
                    <Button myTitle="Add to List" myPress={this.addToList}></Button>
                </View>

            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create ( { 
    background: {
      backgroundColor: "#0097A7",
      height: Dimensions.get("window").height/4,
      justifyContent: "center",
      alignItems:"center",

    },
    inputContainer: {
      backgroundColor: '#B2EBF2',
      padding: 10,
      margin: 5,
      borderRadius: 10,
      width: Dimensions.get("window").width/1.1,
      alignSelf: 'center' 
    },
    textStyle:{
      color: "black",
      fontSize:40,
      marginLeft:10,
    }
})

export default App