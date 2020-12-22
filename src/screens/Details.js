import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../component/Button';
import { clearStore} from '../redux/action';

const styles = StyleSheet.create({
  parentView: {
    flex: 1, backgroundColor: '#F8F8F8', paddingHorizontal: 10, justifyContent: 'center',
  },
  topText: { marginBottom: 5, fontSize: 14, fontWeight: '500' },
  cardView: {
    paddingTop: 32, paddingHorizontal: 15, borderRadius: 5, paddingBottom: 50, backgroundColor: '#fff', elevation: 5,
  },
  buttonView: { marginTop: 44 },
  text: {fontSize: 15, fontWeight: '500', paddingVertical:16, borderBottomWidth: 1, borderBottomColor: '#F1F1F1'}
});

const DetailField = ({title, value }) =>{
    return(<View>
        <Text style={[styles.text, {color:'#444444'}]}>{title}</Text>
        <Text style={[styles.text, {color:'#5A67F2'}]}>{value}</Text>
    </View>)
}

const details = ({
  mobileno, currentProfession, fullname, upiId, navigation, clearStore
}) => {
  const onClick = useCallback(() => {
    clearStore();
    navigation.navigate('home');
  }, []);
  return (
    <View style={styles.parentView}>
      <Text style={styles.topText}>Your Details</Text>
      <View style={styles.cardView}>
          <DetailField title={'Name'} value={fullname}/>
          <DetailField title={'Mobile number'} value={mobileno}/>
          <DetailField title={'Upi Id'} value={upiId}/>
          <DetailField title={'Cureent Profession'} value={currentProfession}/>
      </View>
      <View style={styles.buttonView}>
        <Button onClick={onClick} text={'Continue'} />
      </View>
    </View>
  );
};

details.defaultProps = {
};

details.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  const { reducer } = state;
  const { mobileno, setup } = reducer;
  const { currentProfession, fullname, upiId } = setup;
  return {
    mobileno,
    currentProfession,
    fullname,
    upiId,
  };
};
const mapDispatchToProps = {clearStore};

export default connect(mapStateToProps, mapDispatchToProps)(details);
