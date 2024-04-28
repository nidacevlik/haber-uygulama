import { Image,  StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

export default function SignUpScreen() {
  return (
    <View className='flex-row justify-center' style={styles.container}>
   <Image
   resizeMode='contain'
   style={{width:250,height:250}}
   source={require('../assets/logo.png')}>
   </Image> 
   <Text style={styles.customText}>
    Kayıt Ol
   </Text>
   <TextInput
   style={styles.input}
        placeholder="İsim Soyisim"
        autoCapitalize="words"
   />
   <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
   style={styles.input}
        placeholder="Telefon Numaranız"
        keyboardType='phone-pad'
        autoCapitalize="words"
   />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {}}
      >
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
   </View>

  )
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  customText:{
    fontSize:24,
    alignItems:'center',
    padding:10,
    justifyContent:'center',
   

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button:{
    backgroundColor:'#e21200',
    borderRadius:10,
    height:40,
    justifyContent:'center',
    alignItems:'center',

  }

});
