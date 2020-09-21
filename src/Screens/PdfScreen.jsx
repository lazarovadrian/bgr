import React,{ useState } from 'react'
import {View,Text, SafeAreaView, StyleSheet} from 'react-native'
import PdfReader from 'rn-pdf-reader-js'

export const PdfScreen = ({route}) => {
    const ruleData = route.params.ruleData;
    return(
        <PdfReader 
            source={{ uri: ruleData.pdfRules }}
            withScroll={true}
        />
    )
}