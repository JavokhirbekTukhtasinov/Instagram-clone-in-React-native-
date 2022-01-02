import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import BottomTab from '../components/BottomTab';
import Header from '../components/home/Header';
import Posts from '../components/home/Post';
import Stories from '../components/home/Stories';
import {bottomTabIcons} from '../data/bottom-icons';
import {PostDummy} from '../data/dummyData';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {PostDummy.map((val, index) => (
          <Posts key={index} post={val} />
        ))}
      </ScrollView>
      <BottomTab bottomIcons={bottomTabIcons} />
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
