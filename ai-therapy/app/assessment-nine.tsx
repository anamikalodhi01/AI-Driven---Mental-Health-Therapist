import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
// const router = useRouter();

const stressMessages = [
  'You Are Totally Relaxed.',
  'You Are A Little Tense.',
  'You Are Getting Stressed.',
  'You Are Very Stressed.',
  'You Are Extremely Stressed Out.',
];

const StressLevelScreen: React.FC = () => {
  const [selected, setSelected] = useState<number>(5);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How would you rate your stress level?</Text>

      <Text style={styles.bigNumber}>{selected}</Text>

      <View style={styles.levelContainer}>
        {[1, 2, 3, 4, 5].map((level) => (
          <TouchableOpacity
            key={level}
            onPress={() => setSelected(level)}
            style={[
              styles.levelCircle,
              selected === level && styles.selectedCircle,
            ]}
          >
            <Text
              style={[
                styles.levelText,
                selected === level && styles.selectedText,
              ]}
            >
              {level}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.feedback}>{stressMessages[selected - 1]}</Text>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => router.push('/dashboard')}
      >
        <Text style={styles.continueText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StressLevelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7F2',
    paddingHorizontal: 20,
    justifyContent: 'space-evenly', // spreads evenly top to bottom
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B3E2A',
    textAlign: 'center',
  },
  bigNumber: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#4B3E2A',
  },
  levelContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 18,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  levelCircle: {
    width: 40,
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    backgroundColor: '#fff',
  },
  selectedCircle: {
    backgroundColor: '#FFB46A',
  },
  levelText: {
    color: '#4B3E2A',
    fontSize: 16,
    fontWeight: '600',
  },
  selectedText: {
    color: '#fff',
  },
  feedback: {
    fontSize: 14,
    color: '#4B3E2A',
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#4B3E2A',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

