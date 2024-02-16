
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TextInput, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Splash_GainsText from '../../../assets/svg/Splash_GainsText';
import Splash_IconGains from '../../../assets/svg/Splash_IconGains';
import Icon_Gains from '../../../assets/svg/Icon_Gains';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as Haptics from 'expo-haptics';
import Arrow from '../../../assets/svg/Arrow';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GoogleAuthSvg from '../../../assets/svg/GoogleAuthSvg';
import FbAuthSvg from '../../../assets/svg/FbAuthSvg';

interface IFormInput {
  firstName: string;
  email: string;
  password: string;
}

export default function RegisterLayout() {
  const widthS = Dimensions.get('window').width;
  const heightS = Dimensions.get('window').height;
  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    defaultValues: {
      firstName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: '#06070A' }}>
      <View style={headerStyle.bg}>
        <SafeAreaView>
          <View style={headerStyle.mainCont}>

            <View style={headerStyle.header}>
              <View style={headerStyle.iconHeader}>
                <Icon_Gains />
                <Splash_GainsText width={80} height={31} />
              </View>
              <Text style={headerStyle.headerText}>Become a member!</Text>
            </View>

            <View style={inputsStyle.containerInput}>
              <Controller
                control={control}
                rules={{
                  minLength: 3,
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View style={{ gap: 8 }}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={inputsStyle.upperInputText}>Your name</Text>
                    {errors.firstName && <Text style={inputsStyle.errorInput}>This is required.</Text>}
                    </View>
                    <TextInput
                      placeholder="Enter your name"
                      onBlur={onBlur}
                      style={inputsStyle.inputText}
                      placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                )}
                name="firstName"
              />
              
              <Controller
                control={control}
                rules={{
                  minLength: 8,
                  required: true,
                  maxLength: 40,
                }}
                
                render={({ field: { onChange, onBlur, value } }) => (
                  <View style={{ gap: 8 }}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                      <Text style={inputsStyle.upperInputText}>E-mail address</Text>
                      {errors.email && <Text style={inputsStyle.errorInput}>This is required.</Text>}
                    </View>
                    <TextInput
                      placeholder="Enter your e-mail"
                      onBlur={onBlur}
                      style={inputsStyle.inputText}
                      placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                )}
                name="email"
              />
              

              <Controller
                control={control}
                rules={{
                  minLength: 8,
                  required: true,
                  maxLength: 40,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View style={{ gap: 8 }}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                      <Text style={inputsStyle.upperInputText}>Password</Text>
                      {errors.password && <Text style={inputsStyle.errorInput}>This is required.</Text>}
                    </View>
                    <TextInput
                      placeholder="Enter your password"
                      style={inputsStyle.inputText}
                      placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      secureTextEntry={true}
                    />
                  </View>
                )}
                name="password"
              />

            </View>

            <View style={inputsStyle.lineContainer}>
              <View style={inputsStyle.line} />
              <Text style={inputsStyle.text}>or</Text>
              <View style={inputsStyle.line} />
            </View>

            <View style={{
              display: 'flex', 
              flexDirection: 'row',
              alignItems: 'center', 
             

 justifyContent: 'center',
              gap:20,
              marginBottom: 30,
            }}>
              <GoogleAuthSvg />
              <FbAuthSvg />
            </View>

            {/* Create acc */}
            <TouchableOpacity onPress={() => {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              handleSubmit(onSubmit)();
            }}>
              <View style={{
                width: Dimensions.get('window').width - 80,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                paddingVertical: 20,
                backgroundColor: '#1E1E1E',
                borderRadius: 15,
              }}>
                <Text style={{
                  fontFamily: 'Bold',
                  fontSize: 17,
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}>
                  Create an account
                </Text>
                <Arrow color={'#FFFFFF'} />
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <StatusBar style="light" />
      </View>
    </KeyboardAwareScrollView>
  );
}

const inputsStyle = StyleSheet.create({
  containerInput: {
    marginVertical: 35,
    gap: 20,
  },
  inputText: {
    width: Dimensions.get('window').width - 80,
    paddingVertical: 17,
    paddingHorizontal: 18,
    backgroundColor: '#06070A',
    borderRadius: 12,
    borderColor: '#262626',
    borderWidth: 1,
    color: '#FFFFFF',
  },
  upperInputText: {
    fontFamily: 'Regular',
    fontSize: 17,
    color: '#FFFFFF',
  },
  errorInput: {
    fontFamily: 'Regular',
    fontSize: 14,
    color: '#FF0000',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  text: {
    marginHorizontal: 10,
    fontFamily: 'Regular',
    fontSize: 15,
    color: 'rgba(255,255,255,0.5)',
  },
});


const headerStyle = StyleSheet.create({
  bg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#06070A',
  },
  mainCont: {
    marginVertical: 30,
    marginHorizontal: 40,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: 25,
    alignItems: 'center',
  },
  iconHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Bold',
    fontSize: 32,
    color: '#FFFFFF'
  },
});
