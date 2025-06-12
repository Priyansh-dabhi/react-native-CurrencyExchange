/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

// constants
import { currencyByRupee } from './constant';
//component
import CurrencyBtn from './component/CurrencyBtn';
import Snackbar from 'react-native-snackbar';



function App(): React.JSX.Element {

  const [inputValue,setInputValue] = useState('');
  const [resultValue,setResultValue] = useState('');
  const [targetCurrency,setTargetCurrency] = useState('');

  const BtnPressed = (targetValue:Currency)=>{
    if(!inputValue){
      return Snackbar.show({
        text: "Enter a value",
        backgroundColor: '#EA7773',
        textColor: '#000000'
      })
    }

    const inputAmount = parseFloat(inputValue); 
    if (!isNaN(inputAmount)) {
      const convertValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertValue.toFixed(2)}`
      setResultValue(result);
      setTargetCurrency(targetValue.name)
      
    }else{
      return Snackbar.show({
        text: "Not a valid number",
        backgroundColor: '#f4be2c',
        textColor: '#000000'
      })

    }
  }; 
  return (
    <>
      <StatusBar/>
      <View style={styles.container} >
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text>₹</Text>
            <TextInput 
            maxLength={14}
            value={inputValue}
            onChangeText={setInputValue}
            keyboardType='number-pad'
            placeholder='Enter amount'
            />
          </View>
          {resultValue && (

          <Text style={styles.resultTxt}>
            {resultValue}
          </Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable style={[styles.button, targetCurrency === item.name && styles.selected]} onPress={()=> BtnPressed(item)} >
              <CurrencyBtn {...item} />
            </Pressable>
          )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',

  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
