import { atom } from 'jotai';
import { CameraCapturedPicture, CameraType, FlashMode } from 'expo-camera/build/Camera.types';

export const cameraStartedAtom = atom<boolean>(false);
export const cameraPreviewAtom = atom<boolean>(false);
export const capturedPictureAtom = atom<CameraCapturedPicture | null>(null);
export const flashModeAtom = atom<FlashMode>(FlashMode.off);
export const cameraTypeAtom = atom<CameraType>(CameraType.back);
export const assetsAtom = atom<Array<CameraCapturedPicture | null>>([]);