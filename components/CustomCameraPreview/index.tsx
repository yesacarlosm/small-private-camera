import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
import { CameraCapturedPicture } from 'expo-camera/build/Camera.types';
import Styles from '../../styles';

export type CustomCameraProps = {
  photo: CameraCapturedPicture;
  retakePicture: () => void;
  savePhoto: () => void;
};

export default function CustomCameraPreview ({photo, retakePicture, savePhoto}: CustomCameraProps) {
  return (
    <View
      style={Styles.cameraPreviewContainer}
    >
      <ImageBackground
        source={{uri: photo && photo.uri}}
        resizeMode='contain'
        style={Styles.flexOneWrapper}
      >
        <View
          style={Styles.cameraPreviewButtonsContainer}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <TouchableOpacity
              onPress={retakePicture}
              style={Styles.cameraPreviewButton}
            >
              <Text
                style={Styles.cameraPreviewButtonText}
              >
                Re-take
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={savePhoto}
              style={Styles.cameraPreviewButton}
            >
              <Text
                style={Styles.cameraPreviewButtonText}
              >
                Save photo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
};
