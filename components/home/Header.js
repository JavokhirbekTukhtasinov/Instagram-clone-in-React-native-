import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/header-logo.png')}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push('createPost')}>
          <Image style={styles.icon} source={require('../../assets/add.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../assets/like.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>5</Text>
          </View>
          <Image
            style={styles.icon}
            source={require('../../assets/messanger.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  unreadBadge: {
    backgroundColor: '#ff3250',
    position: 'absolute',
    width: 25,
    height: 18,
    left: 20,
    bottom: 18,
    borderRadius: 25,
    alignItems: 'center',
    zIndex: 100,
  },
  unreadBadgeText: {
    color: '#fff',
    fontWeight: '600',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
});

export default Header;
