import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

//Screens
import {MainScreen} from '../Screens/MainScreen'
import {PdfScreen} from '../Screens/PdfScreen'

//Components

const HomeScreen = createStackNavigator();

function MainNavigation ({navigation}){
    return(
       <NavigationContainer>
           <HomeScreen.Navigator>
               <HomeScreen.Screen 
                name='Home' 
                component={MainScreen}
                options={{
                    title: 'Board Game Rules'
                }}
                />
            <HomeScreen.Screen 
                name='RuleItemDetail'
                component={PdfScreen}
                options={({route}) =>({
                    headerTitle: route.params.ruleData.title
                })}
            />
           </HomeScreen.Navigator>
       </NavigationContainer>
    )
}

export default MainNavigation;