import React, {useState} from 'react'
import {View, StyleSheet} from "react-native"

import {SearchBar} from 'react-native-elements'
import {GamesItem} from '../Components/GamesItem'

export const MainScreen = ({navigation}) => {
  const gameItems = [
    {
        "id": "0",
        "image": require("../../assets/img/svins.png"),
        "title": "Luna",
        "infoMini":[{
            "id": "0",
            "countPlayer": "от 2 до 10 игроков",
            "old": "от 5 лет",
            "gameTimes": "от 15 до 20 минут",
        }],
        "description": "И пусть название игры не вызывает у вас отторжения: новая версия пресловутой офисной и домашней настольной игры отличается от предыдущей более творческим подходом к оформлению рубашки карточек, красочностью и невероятно тонким юмором исполнения рисунков.",
        "genre": "rpg",
        "pdfRules": "../../assets/pdf/test.pdf"
      },
      {
        "id": "1",
        "image": require("../../assets/img/svins.png"),
        "title": "Mars Big",
        "infoMini":[{
            "id": "1",
            "countPlayer": "от 2 до 10 игроков",
            "old": "от 5 лет",
            "gameTimes": "от 15 до 20 минут",
        }],
        "description": "И пусть название игры не вызывает у вас отторжения: новая версия пресловутой офисной и домашней настольной игры отличается от предыдущей более творческим подходом к оформлению рубашки карточек, красочностью и невероятно тонким юмором исполнения рисунков.",
        "genre": "rpg",
        "pdfRules": ""
      },
]

const openPdfRule = res =>{
  navigation.navigate('RuleItemDetail', {ruleData: res})
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
        openPdfRule={openPdfRule}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
