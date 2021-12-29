// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeSc from './src/screens/HomeSn/HomeSc';
// import Constants from './src/assets/Constants';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
        <Stack.Screen name="Movie Star" component={HomeSc} options={headerStyle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const textColor = '#fff';

const headerStyle ={
  title : 'Movies',
  headerStyle : {backgroundColor : '#151C26'},
  headerTitleStyle : {color:'#fff'},
  headerLeft : () => <Icon name="menu" size={34} color='#fff'/>,
  headerRight : () => <Icon name="search" size={25} color='#fff'/>,
}

export default App;


























// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import Constants from './src/assets/Constants';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your appppppp!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
