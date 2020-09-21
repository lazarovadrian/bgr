import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
export const GamesItem = ({gameItems, search,openPdfRule}) => {
    return(
        <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.gameList}>
                    <ScrollView vertical showsVerticalScrollIndicator={false}>

                        {gameItems.map(item => {
                            // console.log(item.img);
                            if(search.length !== 0){
                                if(item.title.startsWith(search)){
                                    <TouchableOpacity 
                                        key={item.id} 
                                        style={styles.gameItem}
                                        onPress={() => openPdfRule(item)}

                                    >
                                        <Image 
                                            source={{uri: item.img}}
                                            style={styles.gameImg}
                                        />
                                        <Text style={styles.title}>{item.title}</Text>
                                        {item.infoMini.map(info => {
                                            return(
                                                <View key={info.id} style={styles.gameInfo}>
                                                    <Text>{info.countPlayer}</Text>
                                                    <Text>{info.old}</Text>
                                                    <Text>{info.gameTimes}</Text>
                                                </View>
                                            )
                                        })}
                                        <Text style={styles.gameDescription}>
                                            {item.description}
                                        </Text>
                                    </TouchableOpacity>
                                }else{
                                    return null
                                }
                            }
                            return(    
                                <TouchableOpacity 
                                    key={item.id} 
                                    style={styles.gameItem}
                                    onPress={() => openPdfRule(item)}
                                >
                                    <Image 
                                        source={{uri: item.img}}
                                        style={styles.gameImg}
                                    />
                                    <Text style={styles.title}>{item.title}</Text>
                                    {item.infoMini.map(info => {
                                        return(
                                            <View key={info.id} style={styles.gameInfo}>
                                                <Text>{info.countPlayer}</Text>
                                                <Text>{info.old}</Text>
                                                <Text>{info.gameTimes}</Text>
                                            </View>
                                        )
                                    })}
                                    <Text style={styles.gameDescription}>
                                        {item.description}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                    </View>
                </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },  
    wrapper:{
        flex: 1,
    },
    gameList:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 400,
    },
    gameItem:{
        alignSelf: "center",
        width: 360,
        height: 400,
        borderRadius: 5,
        borderWidth: 1.2,
        borderColor: "#ccc",
        marginBottom: 20
    },
    gameImg:{
        width: "100%",
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    title:{
        fontSize: 20,
        textAlign: "center",
        marginTop: 10,
    },  
    gameInfo:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10,
        marginBottom: 20,
    },
    gameDescription:{
        textAlign: "justify",
        paddingLeft: 20,
        paddingRight: 20
        
    }
})