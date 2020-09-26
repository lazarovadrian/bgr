import React, {useState,useEffect} from 'react'
import {View, StyleSheet} from 'react-native'
import axios from 'react-native-axios'
import {SearchBar} from 'react-native-elements'
import {GamesItem} from '../Components/GamesItem'

export const MainScreen = ({navigation}) => {
  const [gameItems, setGameData] = useState([]);
  const url = 'https://bgr.lazarovstudio.ru/bgr.json';

  useEffect(() => {
    axios.get(url)
      .then(data => setGameData(data.data))
      .catch(err => console.log(err))
  }, [])
const openGameInfo = res =>{
  navigation.navigate('GameInfo', {gameInfoData: res})
}
//search
  const [search, setSearch] = useState('');
  
  const searchFitler = (text) => {
    gameItems.filter(item => {
      const itemData = item.title ? item.title : '';
      const textData = text;
      return itemData.indexOf(textData) > -1;
    });
    setSearch(text);
  }

  return (
    <View style={styles.container}>
      <SearchBar
            placeholder="Search Games..."
            onChangeText={searchFitler}
            value={search}
        />

      <GamesItem 
        gameItems={gameItems} 
        search={search}
        openGameInfo={openGameInfo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
