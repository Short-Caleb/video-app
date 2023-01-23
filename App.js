import * as React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import AntDesign from '@expo/vector-icons/AntDesign'
import VideoPlayer from './components/VideoPlayer';


export default function App() {

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const [dimensions, setDimensions] = React.useState({});

  return (
    <View style={styles.container} >
      <VideoPlayer video={"https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: { 
    width: '100%',
    aspectRatio: 16/9,
  
  },
  iconContainer: {
    width: '100%',
    aspectRatio: 16/9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconBackground : {
    justifyContent: 'center',
    alignItems: 'center',
   
    height: 38,
    width: 38,
    borderRadius: 19,
  },
  playIcon: {
    marginTop: 0,
    backgroundColor: 'white'
  }



});
