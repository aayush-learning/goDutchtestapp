import React, { useCallback, useState } from 'react';
import {
  View, TouchableOpacity, Text, StyleSheet,
} from 'react-native';
import PropTypes, { number } from 'prop-types';
import { connect } from 'react-redux';

import { setup } from '../redux/action';
import Input from '../component/Input';
import Button from '../component/Button';

const styles = StyleSheet.create({
  parentView: {
    flex: 1, backgroundColor: '#F8F8F8', paddingHorizontal: 10, justifyContent: 'center',
  },
  topText: { marginBottom: 5, fontSize: 14, fontWeight: '500' },
  cardView: {
    paddingTop: 32, paddingHorizontal: 15, borderRadius: 5, paddingBottom: 50, backgroundColor: '#fff', elevation: 5,
  },
  professionHeader: { fontSize: 14, fontWeight: '500', marginBottom: 5 },
  professionViews: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' },
  professionView: {
    alignItems: 'center', justifyContent: 'center', paddingVertical: 11, paddingHorizontal: 35, borderColor: '#F1F1F1', borderWidth: 2, flex: 1, borderRadius: 5,
  },
  professionViewText: { fontSize: 15, fontWeight: '400' },
});

const SetUp = ({ navigation, setup }) => {
  const [id, setID] = useState('');
  const [fullName, setName] = useState('');
  const [profession, setProfession] = useState('Student');
  const onClick = useCallback(() => {
    if (id !== '' && fullName !== '') {
      setup({ upiId: id, fullname: fullName, currentProfession: profession });
      navigation.navigate('details');
    } else {
      alert('All fields are mandatory');
    }
  }, [id, number, profession]);
  const onChangeName = (name) => {
    setName(name);
  };
  const onChangeID = (upiID) => {
    setID(upiID);
  };
  return (
    <View style={styles.parentView}>
      <Text style={styles.topText}>SetUp your goDutch account</Text>
      <View style={styles.cardView}>
        <View style={styles.professionHeaderText}>
          <Text style={styles.professionHeaderText}>current profession</Text>
          <View style={styles.professionViews}>
            <TouchableOpacity onPress={() => setProfession('Student')} style={[styles.professionView, { marginRight: 5, borderColor: profession === 'Student' ? '#5A67F2' : '#F1F1F1' }]}><Text style={styles.professionViewText}>Student</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setProfession('Professional')} style={[styles.professionView, { marginLeft: 5, borderColor: profession === 'Professional' ? '#5A67F2' : '#F1F1F1' }]}><Text style={styles.professionViewText}>Professional</Text></TouchableOpacity>
          </View>
        </View>
        <Input text="Full Name" getText={onChangeName} value={fullName} placeholder="Enter full name" keyboardType="default" />
        <Input text="UPI ID" getText={onChangeID} value={id} placeholder="Enter upi id" keyboardType="email-address" />
        <Button onClick={onClick} text="Continue" />
      </View>
    </View>
  );
};

SetUp.defaultProps = {
};

SetUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = { setup };

export default connect(null, mapDispatchToProps)(SetUp);
