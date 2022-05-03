import { View, Text,TextInput,SafeAreaView,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import {styles} from './Style'
import TodoList from './TodoList'

const App = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const APIURL='https://jsonplaceholder.typicode.com/todos'

  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=()=>{
    fetch(APIURL).then(res=>res.json()).then(out=>setData(out))
  }
  
  
  const filterData=data.filter(item=>{
    const itemData=item.title.toLowerCase()
    const textData= search.toLowerCase()
    return itemData.indexOf(textData) >-1
  })


  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder='Search for anything....' value={search} onChangeText={(text)=>setSearch(text)} />
      <FlatList data={filterData} renderItem={({item})=>(
      <TodoList item={item} />)} keyExtractor={(item,index)=>index.toString()}/>
    </SafeAreaView>
  )
}

export default App
