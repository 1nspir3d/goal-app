import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Provider } from 'react-redux'
import InputForm from './src/components/GoalInput'
import GoalsList from './src/components/GoalsList'
import AddButton from './src/components/AddButton'

import store from './src/reducers'


export default function App() {
  

  return (
    <Provider store={store}>
      <View style={styles.screen}>
        <AddButton />
        <InputForm />
        <GoalsList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 60,
    paddingHorizontal: 40,
  }
});
