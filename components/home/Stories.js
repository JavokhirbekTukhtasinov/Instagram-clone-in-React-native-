import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import dummyData from '../../data/dummyData';
const Stories = () => {
  console.log(dummyData);

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {dummyData.map(val => (
          <View style={styles.storeCover} key={val.id}>
            <Image
              style={styles.img}
              source={require('../../assets/ronaldo.jpg')}
            />
            <Text style={{color: 'white'}}>
              {val.text.length > 10
                ? val.text.slice(0, 10).toLocaleLowerCase() + ' ...'
                : val.text.toLocaleLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  storeCover: {
    alignItems: 'center',
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#e7f549',
    marginLeft: 10,
    resizeMode: 'cover',
  },
  text: {
    color: 'white',
  },
});
export default Stories;
