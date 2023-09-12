import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native'
import {Camera, PermissionResponse, PermissionStatus} from 'expo-camera'
import CustomCamera from './components/CustomCamera';
import { useCameraStarted } from './hooks';

export default function App() {
  const [cameraStarted, setCameraStarted] = useCameraStarted();

  const startRNCamera = async () => {
    const { status }: Partial<PermissionResponse> = await Camera.requestCameraPermissionsAsync();
    if (status === PermissionStatus.GRANTED) {
      setCameraStarted(true)
    } else {
      Alert.alert('Access denied')
    }
  }
  return (
    <View style={styles.container}>
      {cameraStarted ? (
        <CustomCamera startRNCamera={startRNCamera}/>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <TouchableOpacity
            onPress={startRNCamera}
            style={{
              padding: 10,
              borderRadius: 4,
              backgroundColor: '#14274e',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              top: '80%',
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Take picture
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
