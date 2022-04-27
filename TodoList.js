import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import {  TouchableOpacity,Alert } from 'react-native'

const TodoList = ({item}) => {
  return (
    <View>
        <ScrollView>
        <TouchableOpacity onPress={()=>Alert.alert(`${item.id}`, 'Data of message  ID',[{text:'yes'},{text:'no'}])}>
      <Text style={styles.text}>{item.id}{'.)'} {item.title}</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({
    text:{
        padding:10,
        borderWidth:1,
        width:250,
        borderRadius:20
    }
})