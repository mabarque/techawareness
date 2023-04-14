import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import arrowUpIcon from './assets/Arrowup.png';
import arrowDownIcon from './assets/Arrowdown.png';

const CustomTab = ({ title, children, isLast, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.tabContainer}>
      <View style={styles.centered}>
        <TouchableOpacity
          onPress={toggleOpen}
          style={[
            styles.tabHeader,
            !isLast && { borderBottomWidth: 2, borderColor: '#b691d2', borderColor: 'rgba(182, 145, 210, 0.5)',        },
            index === 0 ? styles.firstTabHeader : null,
          ]}
        >
          {/* Add the arrow character to the tab title */}
          <Text style={styles.tabTitle}>{title}</Text>
          <Image
            source={isOpen ? arrowUpIcon : arrowDownIcon}
            style={styles.tabIcon}
          />
        </TouchableOpacity>
      </View>
      {isOpen && (
        <View style={styles.centered}>
          <View style={styles.tabContent}>{children}</View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    marginTop: 10,
  },
  centered: {
    alignItems: 'center',
  },
  tabHeader: {
    backgroundColor: 'white',
    padding: 20,
    width: '50%',
    borderBottomWidth: 2,
    borderColor: '#b691d2',
    borderColor: 'rgba(182, 145, 210, 0.5)',


    flexDirection: 'row', // Make the content horizontal
    justifyContent: 'space-between', // Push the title to the left and icon to the right
  },
  tabTitle: {
    fontSize: 20,
    fontFamily: 'Nunito',
    fontWeight: 'bold',
  },
  tabContent: {
    backgroundColor: 'white',
    padding: 10,
    width: '50%',
    borderTopWidth: 2,
    borderColor: '#b691d2',
    borderColor: 'rgba(182, 145, 210, 0.5)',


  },
  firstTabHeader: {
    borderTopWidth: 2,
    borderColor: '#b691d2',
    borderColor: 'rgba(182, 145, 210, 0.5)',


  },
  tabIcon: {
    width: 30,
    height: 30,
  },
});

export default CustomTab;


/*
Nunito: require("../assets/fonts/Nunito.ttf"),
Exo: require("../assets/fonts/Exo.ttf"),
Anton: require("../assets/fonts/Anton-Regular.ttf"),
GolosBold: require("../assets/fonts/GolosText-Bold.ttf"),
GolosRegular: require("../assets/fonts/GolosText-Regular.ttf"),
Lemon: require("../assets/fonts/Lemon-Regular.ttf"),
BLackHanSans: require("../assets/fonts/BLackHanSans-Regular.ttf"),
Cooper: require("../assets/fonts/cooper.ttf"),
*/