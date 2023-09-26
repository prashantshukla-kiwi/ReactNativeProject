import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { normalizeFont, scaleHeight } from './DynamicStyle';
import FONTS from '../Constants/FONTS';
import CONSTANT from '../Constants/Constant';
const CustomInput = ({ placeholder, onChangeText,secureTextEntry }) => {
  const [text, setText] = useState('');

  const handleTextChange = (newText) => {
    setText(newText);
    onChangeText(newText); 
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={CONSTANT.COLOR253553} 
        onChangeText={handleTextChange}
        value={text}
        secureTextEntry={secureTextEntry} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
  },
  input: {
    height: scaleHeight(64),
    fontSize: normalizeFont(14),
    backgroundColor: CONSTANT.COLORF2F3F5,
    borderRadius: 20,
    padding: 20,
    fontFamily:FONTS.WorkSansMedium,
  },
});

export default CustomInput;

