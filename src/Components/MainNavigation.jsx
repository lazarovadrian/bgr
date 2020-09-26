import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

//Screens
import {MainScreen} from '../Screens/MainScreen'
import {GameInfoScreen} from '../Screens/GameInfoScreen'
import {PdfScreen} from '../Screens/PdfScreen'

//Components
const HomeScreen = createStackNavigator();
const GameRuleStack = createStackNavigator();

function MainNavigation (){
    return(
       <NavigationContainer>
           <HomeScreen.Navigator>
               <HomeScreen.Screen 
                name='Home' 
                component={MainScreen}
                options={{
                    title: 'Правила настольных игр'
                }}
                />
            <HomeScreen.Screen 
                name='GameInfo'
                component={GameInfoScreen}
                options={({route}) =>({
                    headerTitle: route.params.gameInfoData.title
                })}
            />
            <HomeScreen.Screen name="Pdf" component={GameRule} options={{headerTitle: "Правила"}}/>
           </HomeScreen.Navigator>
       </NavigationContainer>
    )
}

const GameRule = () =>{
    return(
        <GameRuleStack.Navigator>
            <GameRuleStack.Screen
                name="PdfRule"
                component={PdfScreen}
            />
        </GameRuleStack.Navigator>
    )
}

export default MainNavigation;