import React, {memo} from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  parentView: { alignItems: 'center', justifyContent: 'center', backgroundColor:'#5A67F2', borderRadius: 5, paddingHorizontal: 45, paddingVertical: 14, width: 180, alignSelf: 'center' },
  textStyle: {fontSize: 19, fontWeight: '500', color: '#fff'}
});

const Button = ({text, onClick}) => {
   
  return (
    <TouchableOpacity onPress={onClick} style={styles.parentView}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export default memo(Button);
