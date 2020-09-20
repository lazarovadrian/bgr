import React,{ useState } from 'react'
import {View,Text, SafeAreaView, StyleSheet} from 'react-native'
import {WebView} from 'react-native-webview'
import PdfReader from 'rn-pdf-reader-js'
import * as FileSystem from 'expo-file-system'
import Constants from 'expo';

export const PdfScreen = ({route}) => {
    const ruleData = route.params.ruleData;
    // const [pdfFile, setDownloadFile] = useState();
    //console.log(FileSystem.documentDirectory + 'test.pdf');

    return(
        <View>
            <Text>{ruleData.title}</Text>
            <PdfReader 
                source={{ uri: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf' }}
            />
        </View>
    )
}