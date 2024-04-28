import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
           resizeMode='contain'
            style={{width:250,height:250}}
            source={require('../assets/logo.png')}>

        </Image>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>Misafir Girişi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Üye Girişi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Admin Girişi</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text>Hala üye değil misiniz? <Text style={styles.link}>Üye Ol</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  logoContainer: {
    marginBottom: 10,
  },
  buttonContainer: {
    marginBottom: 200,
  },
  button: {
    backgroundColor: '#e21200',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
    width: 200,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;
