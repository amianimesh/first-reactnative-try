/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [text, setText] = useState('text');
  const [list, setList] = useState(['Useless Text', 'Useless Text']);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const filterList = list
    .filter(s => s.includes(text))
    .map((e, index) => {
      return (
        <Text key={index} style={[{fontSize: 18, margin: 10}]}>
          {e}
        </Text>
      );
    });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={[{flexDirection: 'row', margin: 12}]}>
          <TextInput
            style={styles.input}
            onChangeText={setText}
            placeholder="text"
            value={text}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              let listCopy = [...list];
              listCopy.push(text);
              setList(listCopy);
              setText('');
            }}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        {filterList}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    height: 40,
    width: 270,
    borderWidth: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    marginLeft: 12,
    height: 40,
    flex: 1,
  },
});

export default App;
