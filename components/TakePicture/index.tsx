import { TouchableOpacity, Text, ViewStyle, StyleProp } from "react-native";
import Styles from '../../styles';

export type TakePictureButtonProps = {
  startRNCamera: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function TakePicture({ startRNCamera, style }: TakePictureButtonProps) {
  return (
    <TouchableOpacity
      onPress={startRNCamera}
      style={style}
    >
      <Text
        style={Styles.takePictureButtonText}
      >
        Take picture
      </Text>
    </TouchableOpacity>
  )
} 