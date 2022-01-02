import React, {useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from './home/Post';
const BottomTab = ({bottomIcons}) => {
  const [selectedTab, setSelectedTab] = useState('Home');
  const handleClick = name => {
    setSelectedTab(name);
  };

  console.log('tab: ', selectedTab);
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-around',
      }}>
      {bottomIcons.map((val, idx) => (
        <TouchableOpacity key={idx} onPress={() => setSelectedTab(val?.name)}>
          <Icon
            style={styles.icon}
            imageStyle={{width: 30, height: 30}}
            imageUrl={{
              uri: selectedTab === val.name ? val.active : val.inactive,
            }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: '',
  },
});

export default BottomTab;
