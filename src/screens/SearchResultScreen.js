import React from 'react'
import { View, FlatList, StyleSheet} from 'react-native'
import feed from '../../assets/data/feed'
import Post from '../components/Post'


const SearchResultScreen = () => {
  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({item}) => 
        <View style={styles.root}>
           <Post post={item}/>
        </View>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    margin: 15,
    backgroundColor: '#eaf1f1',
    borderRadius: 15,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowOpacity: 0.20,
    shadowRadius: 4.65,
    
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SearchResultScreen
