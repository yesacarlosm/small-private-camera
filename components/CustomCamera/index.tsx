import { Camera, CameraType, FlashMode, PermissionResponse, PermissionStatus } from "expo-camera";
import { useRef, useState } from "react";
import { View, TouchableOpacity, Alert, Text } from "react-native";
import CustomCameraPreview from "../CustomCameraPreview";
import React from "react";
import { useCameraCaptured, useCameraPreview, useCameraStarted, useCameraType, useFlashMode } from "../../hooks";

export type CustomCameraProps = {
  startRNCamera: () => void;
};

export default function CustomCamera({ startRNCamera }: CustomCameraProps) {
  const cameraRef = useRef<Camera | null>(null);
  const [cameraStarted, setCameraStarted] = useCameraStarted();
  const [cameraPreview, setCameraPreview] = useCameraPreview();
  const [capturedPicture, setCapturedPicture] = useCameraCaptured();
  const [cameraType, setCameraType] = useCameraType();
  const [flashMode, setFlashMode] = useFlashMode();

  const takePicture = async () => {
    const photo: any = await cameraRef?.current?.takePictureAsync();
    setCameraPreview(true);
    setCapturedPicture(photo);
  }
  const savePhoto = () => { }
  const retakePicture = () => {
    setCapturedPicture(null);
    setCameraPreview(false);
    startRNCamera();
  }
  const handleFlashMode = () => {
    if (flashMode === FlashMode.on) {
      setFlashMode(FlashMode.off)
    } else if (flashMode === FlashMode.off) {
      setFlashMode(FlashMode.on)
    } else {
      setFlashMode(FlashMode.auto)
    }
  }
  const switchCamera = () => {
    if (cameraType === CameraType.back) {
      setCameraType(CameraType.front)
    } else {
      setCameraType(CameraType.back)
    }
  }

  return (
    <View
      style={{
        flex: 1,
        width: '100%'
      }}
    >
      {cameraPreview && capturedPicture ? (
        <CustomCameraPreview photo={capturedPicture} savePhoto={savePhoto} retakePicture={retakePicture} />
      ) : (
        <Camera
          type={cameraType}
          flashMode={flashMode}
          style={{ flex: 1 }}
          ref={(ref) => cameraRef.current = ref}
        >
          <View
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: 'transparent',
              flexDirection: 'row'
            }}
          >
            <View
              style={{
                position: 'absolute',
                left: '90%',
                top: '10%',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <TouchableOpacity
                onPress={handleFlashMode}
                style={{
                  backgroundColor: flashMode === FlashMode.off ? '#000' : '#fff',
                  borderRadius: 30,
                  height: 30,
                  width: 30
                }}
              >
                <Text
                  style={{
                    fontSize: 25
                  }}
                >
                  🔦
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={switchCamera}
                style={{
                  marginTop: 20,
                  borderRadius: 30,
                  height: 30,
                  width: 30
                }}
              >
                <Text
                  style={{
                    fontSize: 25
                  }}
                >
                  🔄
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                flexDirection: 'row',
                flex: 1,
                width: '100%',
                padding: 20,
                justifyContent: 'space-between'
              }}
            >
              <View
                style={{
                  alignSelf: 'center',
                  flex: 1,
                  alignItems: 'center'
                }}
              >
                <TouchableOpacity
                  onPress={takePicture}
                  style={{
                    width: 70,
                    height: 70,
                    bottom: 0,
                    borderRadius: 50,
                    backgroundColor: '#fff'
                  }}
                />
              </View>
            </View>
          </View>
        </Camera>
      )}
    </View>
  )
}