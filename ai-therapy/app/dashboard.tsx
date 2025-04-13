// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { useRouter } from 'expo-router';

// const Dashboard = () => {
//   const router = useRouter();

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.header}>
//         <Image source={require('../assets/Anamika (1).png')} style={styles.avatar} />
//         <Text style={styles.greeting}>Welcome back, <Text style={styles.name}>Aarav</Text> 👋</Text>
//       </View>

//       <View style={styles.cardContainer}>
//         <TouchableOpacity style={styles.card} onPress={() => router.push('/assessment')}>
//           <Text style={styles.cardTitle}>📝 Self Assessment</Text>
//           <Text style={styles.cardText}>Check your current mental health state</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.card} onPress={() => router.push('/chat')}>
//           <Text style={styles.cardTitle}>💬 AI Chat Therapy</Text>
//           <Text style={styles.cardText}>Talk to your AI therapist</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.card} onPress={() => router.push('/meditation')}>
//           <Text style={styles.cardTitle}>🧘‍♀️ Meditation</Text>
//           <Text style={styles.cardText}>Relax with guided exercises</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.card} onPress={() => router.push('/journal')}>
//           <Text style={styles.cardTitle}>📖 Mood Journal</Text>
//           <Text style={styles.cardText}>Track your emotions and thoughts</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// export default Dashboard;

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#FAF7F2',
//     padding: 20,
//     paddingTop: 50,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   avatar: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginRight: 15,
//   },
//   greeting: {
//     fontSize: 18,
//     color: '#4B3E2A',
//   },
//   name: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     color: '#3E3E2A',
//   },
//   cardContainer: {
//     gap: 15,
//   },
//   card: {
//     backgroundColor: '#D9EAD3',
//     borderRadius: 20,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#3E3E2A',
//     marginBottom: 8,
//   },
//   cardText: {
//     fontSize: 14,
//     color: '#5F5F5F',
//   },
// });











import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const Dashboard = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <Ionicons name="search" size={24} color="#3e3e2a" />
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Introduction to Mental Health Issues</Text>
        <Image source={require('../assets/banner.png')} style={styles.bannerImage} />
      </View>

      {/* Mood Tracker */}
      <Text style={styles.moodTitle}>How do you feel today?</Text>
      <View style={styles.moodContainer}>
        {['#EA4B48', '#F79E1B', '#5A5A5A', '#9DCB6D', '#50B66B'].map((color, index) => (
          <TouchableOpacity key={index} style={[styles.moodButton, { backgroundColor: color }]} />
        ))}
      </View>

      {/* Chat Options */}
      <View style={styles.chatOptions}>
        <TouchableOpacity style={styles.chatBox}>
          <MaterialIcons name="smart-toy" size={28} color="#3e3e2a" />
          <Text style={styles.chatText}>Chat with Mindy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chatBox}>
          <FontAwesome5 name="user-md" size={28} color="#3e3e2a" />
          <Text style={styles.chatText}>Talk with Coach</Text>
        </TouchableOpacity>
      </View>

      {/* Daily Plans */}
      <Text style={styles.planTitle}>Your plans for today (0/5)</Text>
      <View style={styles.planBox}>
        <Text style={styles.planCategory}>Meditation</Text>
        <Text style={styles.planTitleText}>Intro to Meditation</Text>
        <Text style={styles.planTime}>8 mins</Text>
      </View>

      <View style={styles.planBox}>
        <Text style={styles.planCategory}>Articles</Text>
        <Text style={styles.planTitleText}>Mindfulness Techniques to...</Text>
        <Text style={styles.planTime}>2 mins read</Text>
      </View>

      {/* Bottom Nav (Optional) */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={24} color="#50B66B" />
        <Ionicons name="call" size={24} color="#9DCB6D" />
        <Ionicons name="calendar" size={24} color="#9DCB6D" />
        <Ionicons name="person" size={24} color="#9DCB6D" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3e3e2a',
  },
  banner: {
    marginVertical: 20,
    backgroundColor: '#D2E6C8',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerText: {
    flex: 1,
    color: '#3e3e2a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bannerImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  moodTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#3e3e2a',
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  moodButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  chatOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatBox: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: 16,
    marginHorizontal: 5,
    borderRadius: 12,
    alignItems: 'center',
  },
  chatText: {
    marginTop: 8,
    fontWeight: '500',
    color: '#3e3e2a',
    textAlign: 'center',
  },
  planTitle: {
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#3e3e2a',
  },
  planBox: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  planCategory: {
    fontSize: 12,
    color: '#50B66B',
    marginBottom: 4,
  },
  planTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3e3e2a',
  },
  planTime: {
    fontSize: 12,
    color: '#7a7a7a',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    paddingVertical: 10,
    borderTopColor: '#eee',
    borderTopWidth: 1,
  },
});

export default Dashboard;
