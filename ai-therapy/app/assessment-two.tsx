// app/assessment/step-two.js
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function GenderSelection() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#fdf9f7', justifyContent: 'space-between' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#432818', marginTop: 50, textAlign: 'center' }}>
        What’s your official{'\n'}gender?
      </Text>

      {/* Gender Cards */}
      <View>
        <TouchableOpacity style={{
          backgroundColor: '#fff',
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 15,
          padding: 10,
          marginTop: 30,
        }}>
          <Text style={{ fontWeight: '600' }}>I am Male</Text>
          <Image source={require('../assets/male.png')} style={{ height: 100, width: '100%', resizeMode: 'contain' }} />
        </TouchableOpacity>

        <TouchableOpacity style={{
          backgroundColor: '#fff',
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 15,
          padding: 10,
          marginTop: 20,
        }}>
          <Text style={{ fontWeight: '600' }}>I am Female</Text>
          <Image source={require('../assets/female.png')} style={{ height: 100, width: '100%', resizeMode: 'contain' }} />
        </TouchableOpacity>
      </View>

      {/* Skip & Continue Buttons */}
      <View style={{ marginBottom: 30 }}>
        <TouchableOpacity style={{
          backgroundColor: '#e7f1dc',
          padding: 12,
          borderRadius: 20,
          marginBottom: 10,
          alignItems: 'center'
        }}>
          <Text style={{ color: '#432818', fontWeight: '500' }}>Prefer to skip, thanks ✕</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/assessment-three')} // Next screen
          style={{
            backgroundColor: '#432818',
            padding: 12,
            borderRadius: 20,
            alignItems: 'center'
          }}
        >
          <Text style={{ color: '#fff' }}>Continue →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
