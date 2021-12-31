import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Posts = () => {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.img} />
      <Text style={{color: 'white'}}>Post </Text> */}
    </View>
  );
};

const PostHeader = () => {};
const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: 'white',
  },
  img: {},
});
export default Posts;
