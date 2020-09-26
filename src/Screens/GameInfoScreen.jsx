import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Button } from 'react-native-elements'

export const GameInfoScreen = ({route,navigation}) => {
    const gameInfoData = route.params.gameInfoData;
    
    const openPdfRule = res => {
        navigation.navigate('Pdf',{
            screen: 'PdfRule',
            params: {ruleData: res.pdfRule}
        })
    }
    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.btnsInfo}>
                    <Button 
                        title="PDF правила"
                        buttonStyle={{
                            marginRight:10,
                            marginBottom: 20
                        }}
                        onPress={() => openPdfRule(gameInfoData)}
                    />
                    <Button 
                        title="Видео правила"
                        buttonStyle={{marginBottom: 20}}
                    />
                </View>

                <View style={styles.gameInfo}>
                    {gameInfoData.infoMini.map(info => {
                        return(
                            <View key={info.id} style={styles.info}>
                                <Text>{info.countPlayer}</Text>
                                <Text>{info.old}</Text>
                                <Text>{info.gameTimes}</Text>
                            </View>
                        )
                    })}
                    <Text style={styles.gameDescription}>
                        {gameInfoData.description}
                    </Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    wrapper:{
        marginLeft: 10,
        marginRight: 10
    },
    btnsInfo:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    gameInfo:{

    },
    info:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10,
        marginBottom: 20,
    },
    gameDescription:{
        textAlign: 'justify'
    }
})