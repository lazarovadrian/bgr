import React from 'react'
import PdfReader from 'rn-pdf-reader-js'

export const PdfScreen = ({route}) => {
    const ruleData = route.params.ruleData;
    console.log(ruleData);
    return(
        <PdfReader 
            source={{ uri: ruleData }}
            withScroll={true}
        />
    )
}