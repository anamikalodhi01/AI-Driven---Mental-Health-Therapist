// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { useState } from 'react';

// export default function MoodSelection() {
//   const moods = [
//     { label: 'Sad', color: '#E97A3C', icon: require('../assets/sad.png') },
//     { label: 'Neutral', color: '#FFD54F', icon: require('../assets/confused.png') },
//     { label: 'Happy', color: '#A5C48F', icon: require('../assets/smile.png') },
//     { label: 'Excited', color: '#AC9DF6', icon: require('../assets/happy-face.png') },
//   ];

//   const [selectedMood, setSelectedMood] = useState(1); // 0 = sad, 1 = neutral, 2 = happy, 3 = excited

//   return (
//     <View style={styles.container}>
//       {/* Top Nav */}
//       <Text style={styles.stepIndicator}>5 of 14</Text>
//       <Text style={styles.title}>How would you describe your mood?</Text>

//       {/* Mood emoji display */}
//       <Text style={styles.moodText}>I Feel {moods[selectedMood].label}.</Text>
//       <Image source={moods[selectedMood].icon} style={styles.moodImage} />

//       {/* Mood selector arc */}
//       <View style={styles.arc}>
//         {moods.map((mood, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.moodSegment,
//               {
//                 backgroundColor: mood.color,
//                 borderColor: selectedMood === index ? '#5c3d20' : 'transparent',
//                 zIndex: selectedMood === index ? 1 : 0,
//               },
//             ]}
//             onPress={() => setSelectedMood(index)}
//           >
//             <Image source={mood.icon} style={styles.smallIcon} />
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Continue Button */}
//       <TouchableOpacity style={styles.continueBtn}>
//         <Text style={styles.continueText}>Continue →</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fdf9f7',
//     alignItems: 'center',
//     paddingTop: 60,
//   },
//   stepIndicator: {
//     alignSelf: 'flex-end',
//     marginRight: 20,
//     backgroundColor: '#f0dfd8',
//     paddingVertical: 4,
//     paddingHorizontal: 12,
//     borderRadius: 10,
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#5c3d20',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#5c3d20',
//     textAlign: 'center',
//     marginVertical: 15,
//   },
//   moodText: {
//     fontSize: 16,
//     color: '#5c3d20',
//     marginBottom: 10,
//   },
//   moodImage: {
//     width: 60,
//     height: 60,
//     marginBottom: 20,
//   },
//   arc: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     width: '100%',
//     marginVertical: 20,
//   },
//   moodSegment: {
//     width: 60,
//     height: 60,
//     marginHorizontal: 5,
//     borderRadius: 30,
//     borderWidth: 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   smallIcon: {
//     width: 32,
//     height: 32,
//   },
//   continueBtn: {
//     backgroundColor: '#5c3d20',
//     paddingHorizontal: 40,
//     paddingVertical: 12,
//     borderRadius: 25,
//     marginTop: 20,
//   },
//   continueText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
// });





import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
const router = useRouter();

const moods = [
  { name: 'Sleepy', icon: 'meh-rolling-eyes', color: '#F28C61' },
  { name: 'Neutral', icon: 'meh', color: '#FFD93D' },
  { name: 'Happy', icon: 'smile-beam', color: '#B4E197' },
  { name: 'Excited', icon: 'laugh-beam', color: '#B4A7FF' },
];

export default function MoodSelectionScreen() {
  const [selectedMood, setSelectedMood] = useState('Neutral');

  return (
    <View style={styles.container}>
      {/* Top step label  */}
      <View style={styles.stepContainer}>
        <Text style={styles.stepText}></Text>
       </View>

      {/* Heading */}
      <Text style={styles.heading}>How would you describe your mood?</Text>

      {/* Selected mood text */}
      <Text style={styles.currentMood}>I Feel {selectedMood}.</Text>

      {/* Big emoji */}
      <FontAwesome5 
        name={moods.find(m => m.name === selectedMood).icon} 
        size={50} 
        color={moods.find(m => m.name === selectedMood).color} 
        style={styles.mainEmoji}
      />

      {/* Mood options */}
      <View style={styles.emojiRow}>
        {moods.map((mood) => (
          <TouchableOpacity
            key={mood.name}
            onPress={() => setSelectedMood(mood.name)}
            style={[
              styles.emojiCircle,
              { backgroundColor: mood.color },
              selectedMood === mood.name && styles.selectedBorder
            ]}
          >
            <FontAwesome5 name={mood.icon} size={24} color="#000" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Continue button */} 
      { <TouchableOpacity style={styles.button}  onPress={() => router.push('/assessment-five')}  >
        <Text style={styles.buttonText}>Continue →</Text>
      </TouchableOpacity>
}
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf9f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  stepContainer: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: '#f1dcd4',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  stepText: {
    fontSize: 12,
    color: '#432818',
    fontWeight: '600',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#432818',
    textAlign: 'center',
    marginBottom: 10,
  },
  currentMood: {
    fontSize: 14,
    color: '#432818',
    marginBottom: 10,
  },
  mainEmoji: {
    marginBottom: 20,
  },
  emojiRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width - 60,
    marginBottom: 30,
    flexWrap: 'wrap',
  },
  emojiCircle: {
    width: 55,
    height: 55,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 8,
  },
  selectedBorder: {
    borderWidth: 2,
    borderColor: '#432818',
  },
  // button: {
  //   backgroundColor: '#432818',
  //   paddingVertical: 12,
  //   paddingHorizontal: 30,
  //   borderRadius: 24,
  // },
  // buttonText: {
  //   color: '#fff',
  //   fontWeight: 'bold',
  // },
  button: {
    backgroundColor: '#4B3E2A',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});











// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import React, { useState } from 'react';

// export default function MoodSelection() {
//   const [selectedMood, setSelectedMood] = useState('neutral');

//   const moods = [
//     { id: 'sad', label: 'I feel Sad', emoji: require('../assets/sad.png') },
//     // { id: 'sleepy', label: 'I feel Sleepy', emoji: require('../assets/sleepy.png') },
//     { id: 'neutral', label: 'I feel Neutral', emoji: require('../assets/confused.png') },
//     { id: 'happy', label: 'I feel Happy', emoji: require('../assets/smile.png') },
//     { id: 'excited', label: 'I feel Excited', emoji: require('../assets/happy-face.png') },
//   ];

//   const selectedLabel = moods.find(m => m.id === selectedMood)?.label;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>How would you describe your mood?</Text>
//       <Text style={styles.subtitle}>{selectedLabel}</Text>

//       {/* Big Selected Emoji */}
//       <Image source={moods.find(m => m.id === selectedMood).emoji} style={styles.bigEmoji} />

//       {/* Emoji Options */}
//       <View style={styles.emojiRow}>
//         {moods.map(mood => (
//           <TouchableOpacity key={mood.id} onPress={() => setSelectedMood(mood.id)}>
//             <Image
//               source={mood.emoji}
//               style={[
//                 styles.emoji,
//                 selectedMood === mood.id && styles.selectedEmoji
//               ]}
//             />
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Continue Button */}
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Continue →</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fdf9f7',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#432818',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   subtitle: {
//     color: '#555',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   bigEmoji: {
//     width: 60,
//     height: 60,
//     marginBottom: 25,
//   },
//   emojiRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 40,
//   },
//   emoji: {
//     width: 50,
//     height: 50,
//     marginHorizontal: 5,
//     borderRadius: 25,
//     borderWidth: 2,
//     borderColor: 'transparent',
//   },
//   selectedEmoji: {
//     borderColor: '#432818',
//   },
//   button: {
//     backgroundColor: '#432818',
//     paddingHorizontal: 40,
//     paddingVertical: 12,
//     borderRadius: 30,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });









// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import React, { useState } from 'react';

// export default function MoodSelection() {
//   const [selectedMood, setSelectedMood] = useState('neutral');

//   const moods = [
//     { id: 'sleepy', label: 'I Feel Sleepy.', emoji: require('../assets/smile.png') },
//     { id: 'neutral', label: 'I Feel Neutral.', emoji: require('../assets/confused.png') },
//     { id: 'happy', label: 'I Feel Happy.', emoji: require('../assets/happy-face.png') },
//   ];

//   const selectedLabel = moods.find(m => m.id === selectedMood)?.label;

//   return (
//     <View style={styles.container}>
//       {/* Spacer to push content slightly down */}
//       <View style={{ flex: 1 }} />

//       <Text style={styles.title}>How would you describe your mood?</Text>
//       <Text style={styles.subtitle}>{selectedLabel}</Text>

//       {/* Main Mood Emoji */}
//       <Image
//         source={moods.find(m => m.id === selectedMood).emoji}
//         style={styles.bigEmoji}
//       />

//       {/* Emoji Options */}
//       <View style={styles.emojiRow}>
//         {moods.map(mood => (
//           <TouchableOpacity key={mood.id} onPress={() => setSelectedMood(mood.id)}>
//             <Image
//               source={mood.emoji}
//               style={[
//                 styles.emoji,
//                 selectedMood === mood.id && styles.selectedEmoji
//               ]}
//             />
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Continue Button */}
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Continue →</Text>
//       </TouchableOpacity>

//       {/* Bottom Spacer */}
//       <View style={{ flex: 1 }} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fdf9f7',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#432818',
//     textAlign: 'center',
//     marginBottom: 6,
//   },
//   subtitle: {
//     color: '#555',
//     marginBottom: 12,
//     textAlign: 'center',
//   },
//   bigEmoji: {
//     width: 60,
//     height: 60,
//     marginBottom: 25,
//   },
//   emojiRow: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 30,
//   },
//   emoji: {
//     width: 50,
//     height: 50,
//     marginHorizontal: 10,
//     borderRadius: 25,
//     borderWidth: 2,
//     borderColor: 'transparent',
//   },
//   selectedEmoji: {
//     borderColor: '#432818',
//   },
//   button: {
//     backgroundColor: '#432818',
//     paddingHorizontal: 40,
//     paddingVertical: 12,
//     borderRadius: 30,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });
