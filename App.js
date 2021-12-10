import React from 'react';
import { StyleSheet, Text, Image, View, FlatList, ScrollView, Dimensions } from 'react-native';
import NewsCard from './NewsCard/NewsCard.js';
import store_data from './store_data.json';
import SearchBar from "./SearchBar/SearchBar";



function App() {

  const renderNews = ({item}) => <NewsCard news={item} />;
  return (
    
      <View style={styles.container} >
      <Text style = {styles.headerText}>PatikaStore</Text>
      <SearchBar />

      <FlatList
        horizontal={false}
        numColumns={2}
        data={store_data}
        renderItem={renderNews}
        
      />
    </View>
    
    
  );
}

const styles= StyleSheet.create({
  container: {
    flex:1,
    backgroundColor : '#eceff1',
  },
  banner_image:{
    height: Dimensions.get('window').height/4,
    width: Dimensions.get('window').width/2,
  },
  headerText:{
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop:15,
    marginLeft:10,
    
  },
  
});
 
export default App;
