import React, { useCallback, useState } from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { saveNumber } from '../redux/action';
import { logoIcon } from '../assets';
import Input from '../component/Input';
import Button from '../component/Button';

const styles = StyleSheet.create({
  parentView: {
    flex: 1, backgroundColor: '#F8F8F8', paddingHorizontal: 10, justifyContent: 'center',
  },
  headerView: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  iconStyle: { height: 37, width: 37, marginRight: 2 },
  headerText: {
    fontWeight: 'bold', fontSize: 28, color: '#000000', marginLeft: 2,
  },
  cardView: {
    paddingTop: 32, paddingHorizontal: 15, borderRadius: 5, paddingBottom: 50, backgroundColor: '#fff', elevation: 5,
  },
});

const Home = ({ navigation, saveNumber }) => {
  const [number, setNumber] = useState('');
  const phoneNumberRegEx = /^[6-9]\d{9}$/;
  const onClick = useCallback( () => {
    if (phoneNumberRegEx.test(number)) {
      saveNumber(number);
      setNumber('');
      navigation.navigate('setup');
    } else {
      alert('Enter a valid number');
    }
  },[number]);
  const onChangeNumber = (mobileNo) => {
    setNumber(mobileNo);
  };
  return (
    <View style={styles.parentView}>
      <View style={styles.cardView}>
        <View style={styles.headerView}>
          <Image source={logoIcon} style={styles.iconStyle} />
          <Text style={styles.headerText}>goDutch</Text>
        </View>
        <Input text="Mobile Number" getText={onChangeNumber} value={number} placeholder="Enter Mobile number" keyboardType="numeric" />
        <Button onClick={onClick} text="Continue" />
      </View>
    </View>
  );
};

Home.defaultProps = {
};

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = { saveNumber };

export default connect(null, mapDispatchToProps)(Home);
