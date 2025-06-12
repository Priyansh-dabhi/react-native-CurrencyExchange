import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react';

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyBtn = (props:CurrencyButtonProps): React.JSX.Element =>{
  return (
      <View style={styles.buttonContainer}>
        <Text style={styles.flag}>{props.flag}</Text>
        <Text style={styles.country}>{props.name}
        </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer : {
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom:10,
      height:60,
      width:100,
      // borderWidth:1
      // backgroundColor:'red',
    },
    flag: {
        fontSize: 22,
        color: "#FFFFFF",
        marginBottom: 4
    },
    country: {
        fontSize: 12,
        color: "#2d3436",
    
    }
})
export default CurrencyBtn;