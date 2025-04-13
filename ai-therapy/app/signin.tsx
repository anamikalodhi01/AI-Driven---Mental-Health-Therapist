import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';

const router = useRouter();

export default function SignIn() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fdf9f7',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      
      {/* Circle Image */}
      <View style={{
        width: 120,
        height: 120,
        borderRadius: 60,
        overflow: 'hidden',
        marginBottom: 30
      }}>
        <Image 
          source={require('../assets/step-one.png')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      </View>

      {/* Title */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Login</Text>

      {/* ID Input */}
      <TextInput 
        placeholder="Enter Your Id"
        placeholderTextColor="black"
        style={{
          width: '100%',
          padding: 12,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 10,
          marginBottom: 15,
          backgroundColor: '#fff' // 👈 background color same as register page
        }}
      />

      {/* Password Input */}
      <TextInput 
        placeholder="Enter Your Password"
        placeholderTextColor="black"
        secureTextEntry
        style={{
          width: '100%',
          padding: 12,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 10,
          marginBottom: 10,
          backgroundColor: '#fff' // 👈 same here
        }}
      />

      {/* Forgot Password */}
      <Text style={{ alignSelf: 'flex-end', marginBottom: 20, color: '#333' }}>
        Forgot Password
      </Text>

      {/* Login Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#432818',
          paddingVertical: 12,
          paddingHorizontal: 40,
          borderRadius: 8,
          marginBottom: 20
        }}  onPress={() => router.push('/assessment')}
      >
        <Text style={{ color: '#fff' }}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <Text>
        Don't have an account?{' '}
        <Link href="/signup" style={{ color: '#432818', fontWeight: '600' }}>
          Sign up
        </Link>
      </Text>
    </View>
  );
}
