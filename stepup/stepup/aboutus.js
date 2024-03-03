// AboutUs.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles/styles_abus';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.personContainer}>
        <Image
          source={{ uri: 'https://media.licdn.com/dms/image/C5603AQHYihvIuyhTuQ/profile-displayphoto-shrink_400_400/0/1610021064815?e=1715212800&v=beta&t=RfGwD2-QHhkEdOAtAESfMHQ9iMZl3azRYNMZVaIudDE' }} 
          style={styles.personImage}
        />
        <View style={styles.personInfo}>
          <Text style={styles.personName}>Siddharth Narela</Text>
          <Text style={styles.personRole}>Team Leader</Text>
          <Text style={styles.personDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </View>

      <View style={styles.personContainer}>
        <Image
          source={{ uri: 'https://media.licdn.com/dms/image/D5603AQGvDIcaPnBHdQ/profile-displayphoto-shrink_400_400/0/1708022136163?e=1715212800&v=beta&t=WLHHgfWcpf8F-HC2UyhK8vSzqhInTeKY_om36p4uKO4' }} // Replace with the actual URL
          style={styles.personImage}
        />
        <View style={styles.personInfo}>
          <Text style={styles.personName}>Aditya Srivastava</Text>
          <Text style={styles.personRole}>FrontEnd Developer</Text>
          <Text style={styles.personDescription}>
          🎨 UI/UX Design: Crafting intuitive and aesthetically pleasing user interfaces that enhance the overall user experience.
💻 Front-End Development: Proficient in translating design concepts into code with expertise in React Native, React JS, Node Js, HTML, CSS and others.
          </Text>
        </View>
      </View>

      <View style={styles.personContainer}>
        <Image
          source={{ uri: 'https://example.com/abhi.jpg' }} // Replace with the actual URL
          style={styles.personImage}
        />
        <View style={styles.personInfo}>
          <Text style={styles.personName}>Abhijeet Chaterjee</Text>
          <Text style={styles.personRole}>Backend Developer</Text>
          <Text style={styles.personDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AboutUs;
