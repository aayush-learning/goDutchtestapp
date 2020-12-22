import React, {memo} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  parentView: { marginVertical: 31 },
  textStyle: { fontSize: 14, color: '#000', fontWeight: '500', marginBottom: 5},
  textinputStyle:{borderRadius: 5, borderWidth:1, borderColor: '#F1F1F1'}
});

const Input = ({text, getText, value, placeholder, keyboardType }) => {
  return (
    <View style={styles.parentView}>
     <Text style={styles.textStyle}>{text}</Text>
     <TextInput style={styles.textinputStyle} placeholder={placeholder} keyboardType={keyboardType} value={value} onChangeText={getText}/>
    </View>
  );
};

Input.defaultProps = {
};

Input.propTypes = {
};

export default memo(Input);
