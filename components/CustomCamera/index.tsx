import { Camera, CameraCapturedPicture, CameraType, FlashMode } from "expo-camera";
import { useRef } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import CustomCameraPreview from "../CustomCameraPreview";
import { useAssets, useCameraCaptured, useCameraPreview, useCameraStarted, useCameraType, useFlashMode } from "../../hooks";
import Styles from '../../styles';

export type CustomCameraProps = {
  startRNCamera: () => void;
};

export default function CustomCamera({ startRNCamera }: CustomCameraProps) {
  const cameraRef = useRef<Camera | null>(null);
  const {setCameraStarted} = useCameraStarted();
  const {cameraPreview, setCameraPreview} = useCameraPreview();
  const {capturedPicture, setCapturedPicture} = useCameraCaptured();
  const {cameraType, setCameraType} = useCameraType();
  const {flashMode, setFlashMode} = useFlashMode();
  const {setAssets} = useAssets();

  const takePicture = async () => {
    const photo: CameraCapturedPicture | undefined = await cameraRef?.current?.takePictureAsync();
    if (photo) {
      setCameraPreview(true);
      setCapturedPicture(photo);
    }
  }

  const savePhoto = async () => {
    if (capturedPicture) {
      setAssets(prevState => ([...prevState, capturedPicture]));
      setCapturedPicture(null);
      setCameraPreview(false);
      setCameraStarted(false);
    }
  }

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
      style={Styles.customCameraContainer}
    >
      {cameraPreview && capturedPicture ? (
        <CustomCameraPreview photo={capturedPicture} savePhoto={savePhoto} retakePicture={retakePicture} />
      ) : (
        <Camera
          type={cameraType}
          flashMode={flashMode}
          style={Styles.flexOneWrapper}
          ref={(ref) => cameraRef.current = ref}
        >
          <View
            style={Styles.customCameraView}
          >
            <View
              style={Styles.customCameraButtonsContainer}
            >
              <TouchableOpacity
                onPress={handleFlashMode}
                style={{
                  backgroundColor: flashMode === FlashMode.off ? '#000' : '#fff',
                  ...Styles.customCameraButtonContainer,
                }}
              >
                <Text
                  style={Styles.customCameraButtonText}
                >
                  🔦
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={switchCamera}
                style={{
                  marginTop: 20,
                  ...Styles.customCameraButtonContainer,
                }}
              >
                <Text
                  style={Styles.customCameraButtonText}
                >
                  🔄
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={Styles.customCameraTakePhotoButtonContainer}
            >
              <View
                style={Styles.customCameraTakePhotoButtonOrientation}
              >
                <TouchableOpacity
                  onPress={takePicture}
                  style={Styles.customCameraTakePhotoButton}
                />
              </View>
            </View>
          </View>
        </Camera>
      )}
    </View>
  )
};
