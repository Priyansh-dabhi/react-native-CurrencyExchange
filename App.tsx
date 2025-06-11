/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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
  const [resultValue,setresultValue] = useState('');
  const [targetCurrency,settargetCurrency] = useState('');

  return (
    <SafeAreaView>
      <StatusBar>
        
      </StatusBar>
      <View>
        <Text>1</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
