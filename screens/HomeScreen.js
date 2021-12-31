import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/home/Header';
import Posts from '../components/home/Post';
import Stories from '../components/home/Stories';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        <Posts />
      </ScrollView>
      <Text>test</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
export default HomeScreen;
