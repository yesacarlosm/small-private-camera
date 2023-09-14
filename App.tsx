import AsyncStorage from '@react-native-async-storage/async-storage';
import {StatusBar} from 'expo-status-bar'
import React, { useEffect } from 'react';
import { SafeAreaView, View, Alert, FlatList, Image} from 'react-native';
import {Camera, PermissionResponse, PermissionStatus} from 'expo-camera';
import CustomCamera from './components/CustomCamera';
import { useCameraStarted, useAssets } from './hooks';
import { ALBUM_NAME } from './constants';
import TakePicture from './components/TakePicture';
import Styles from './styles';

export default function App() {
  const {cameraStarted, setCameraStarted} = useCameraStarted();
  const {assets, setAssets} = useAssets();

  useEffect(() => {
    AsyncStorage.getItem(ALBUM_NAME)
      .then(item => {
        const value = item ? JSON.parse(item) : [];
        setAssets(value);
      }, (err) => console.log(err))
  }, []);

  useEffect(() => {
    if (assets && assets.length) {
      AsyncStorage.setItem(ALBUM_NAME, JSON.stringify(assets));
    }
  }, [assets]);

  const startRNCamera = async () => {
    const { status }: Partial<PermissionResponse> = await Camera.requestCameraPermissionsAsync();
    if (status === PermissionStatus.GRANTED) {
      setCameraStarted(true);
    } else {
      Alert.alert('Access denied');
    }
  }
  return (
    <SafeAreaView style={Styles.container}>
      {cameraStarted ? (
        <CustomCamera startRNCamera={startRNCamera}/>
      ) : (
        <View
          style={Styles.galleryContainer}
        >
          <FlatList
            data={assets}
            renderItem={({item}) => (
              <Image
                source={{ uri: item?.uri }}
                style={{
                  minWidth: 200,
                  minHeight: 200,
                  maxWidth: 400,
                  maxHeight: 400,
                  marginBottom: 5,
                }}
              />
            )}
            keyExtractor={(item) => {
              const uriParts = item?.uri.split('/');
              return uriParts ? uriParts[uriParts.length-1] : '';
            }}
          />
          <TakePicture
            startRNCamera={startRNCamera}
            style={Styles.takePictureButton}
          />
        </View>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  )
};
