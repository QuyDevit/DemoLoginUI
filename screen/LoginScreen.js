import { View, Text, Image, StatusBar, TextInput, TouchableOpacity,Keyboard, Alert  } from 'react-native'
import React,{ useState } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
   const datalogin = [
        {
            name: 'Nguyễn Ngọc Quý',
            username: 'nguyenngocquy',
            password:'123'
        },
        {
            name: 'Nguyễn Văn A',
            username: 'nguyenvana',
            password:'123'
        },
        {
            name: 'Nguyễn Văn B',
            username: 'nguyenvanb',
            password:'123'
        },
    ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleLogin = () => {
    const user = datalogin.find(data => data.username === username && data.password === password);
    if (user) {
       Alert.alert(
      'Đăng nhập thành công',
      '',
      [
        {
          text: 'OK',
          onPress: () => {
            setIsLoggedIn(true);
            navigation.navigate('Home', { name: user.name });
          },
        },
      ],
      { cancelable: false }
    );
    } else {
      setError('Tên tài khoản hoặc mật khẩu không chính xác');
    }
  };

  if (isLoggedIn) {
    return null;
  }

  const handlePasswordSubmit = () => {
    handleLogin();
    Keyboard.dismiss(); 
  };
  return (
    <View  style={tw`bg-white h-full w-full `}>
      <StatusBar style="light" translucent={true} backgroundColor="transparent"></StatusBar>
      <Image style={tw`h-120 w-full absolute`} source={require('../assets/img/background.png')}>
      </Image>

      {/* Bóng đèn */}
      <View style={tw`flex-row absolute justify-around w-full`}>
        <Image  style={tw`h-45 w-18`} source={require('../assets/img/light.png')} >
         </Image>
         <Image  style={tw`h-32 w-13`} source={require('../assets/img/light.png')} >
          </Image>
      </View>

        {/* Form đăng nhập*/}
        <View style={tw`w-full h-full  pt-60 flex `}>
            <View style={tw`flex items-center mx-3 mb-4`}>
                <Image style={[tw`h-35 w-full `, { resizeMode: 'contain' }]} source={require('../assets/img/iconlogin.png')} >
                </Image>
                <Text style={tw`text-sky-500 font-bold text-3xl mt-2`}>Đăng Nhập</Text>
            </View>

            <View style={tw`flex items-center mx-4 gap-y-4`}>
                <View style={tw`w-full bg-black/5 px-3 rounded-md`}>
                    <TextInput placeholder='Tên tài khoản' placeholderTextColor={'gray'} onChangeText={setUsername}></TextInput>
                </View>

                <View style={tw`w-full bg-black/5 px-3 rounded-md mb-3`}>
                    <TextInput placeholder='Mật khẩu' placeholderTextColor={'gray'} secureTextEntry onChangeText={setPassword} onSubmitEditing={handlePasswordSubmit}></TextInput>
                </View>
                <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>
                <View style={tw`w-full`}>
                    <TouchableOpacity style = {tw`rounded-3 bg-sky-400 p-2 mb-2`} onPress={handleLogin}>
                        <Text style={tw`text-white text-center font-bold text-xl`}>Đăng Nhập</Text>
                    </TouchableOpacity>
                </View>

                <View style={tw`flex-row justify-center`}>
                    <Text>Bạn chưa có tài khoản?</Text>
                     <TouchableOpacity style = {tw`ml-1`} >
                        <Text style={tw`text-sky-400 font-bold `}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View >
  )
}

export default LoginScreen