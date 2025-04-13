import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function Signup() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Circle Profile Image */}
        <Image
          source={require('../assets/step-three.png')} // replace with your actual image
          style={styles.circleImage}
          resizeMode="cover"
        />

        {/* Title */}
        <Text style={styles.title}>Register</Text>

        {/* Input Fields */}
        <TextInput placeholder="Enter Your Full Name" style={styles.input} />
        <TextInput placeholder="Enter Your Phone No" keyboardType="phone-pad" style={styles.input} />
        <TextInput placeholder="Create Your Id" style={styles.input} />
        <TextInput placeholder="Create Your Password" secureTextEntry style={styles.input} />

        {/* Sign in Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Link href="/signin" style={styles.loginLink}>
            Login
          </Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f2',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40, // equal spacing from top and bottom
  },
  innerContainer: {
    alignItems: 'center',
    width: '100%',
  },
  circleImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4b2e2b',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 6,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
  },
  loginText: {
    marginTop: 15,
    fontSize: 12,
  },
  loginLink: {
    color: '#000',
    fontWeight: '600',
  },
});
