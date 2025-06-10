import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react';

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyBtn = (props:CurrencyButtonProps): React.JSX.Element =>{
  return (
    <View>
      <Text>CurrencyBtn</Text>
    </View>
  )
}

const styles = StyleSheet.create({
     buttonContainer : {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },
    country: {
        fontSize: 14,
        color: "#2d3436",
    
    }
})
export default CurrencyBtn;