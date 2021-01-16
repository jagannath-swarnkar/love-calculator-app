import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Header from './src/components/Header';
import CircularLoader from './src/components/loader/CircularLoader';
import LoveCalculator from './src/pages/LoveCalculator';
var width = Dimensions.get('window').width;

const theme = {
  ...DefaultTheme
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <View>
          <Header backArrow={false} />
        </View>
        <ScrollView style={{flex:9, width: '100%'}}>
          <LoveCalculator />
        </ScrollView>
      </View>
      {/* <View>
        <CircularLoader fullScreen={true} size="large" />
      </View> */}
    </PaperProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#cbb2ff",
    width: width
  },
});
