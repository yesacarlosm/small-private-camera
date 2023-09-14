import { useAtom } from "jotai";
import {
  capturedPictureAtom,
  cameraPreviewAtom,
  cameraStartedAtom,
  cameraTypeAtom,
  flashModeAtom,
  assetsAtom,
} from "../storage/index";

export function useCameraStarted() {
  const [cameraStarted, setCameraStarted] = useAtom(cameraStartedAtom);

  return {cameraStarted, setCameraStarted};
}

export function useCameraPreview() {
  const [cameraPreview, setCameraPreview] = useAtom(cameraPreviewAtom);

  return {cameraPreview, setCameraPreview};
}

export function useCameraCaptured() {
  const [capturedPicture, setCapturedPicture] = useAtom(capturedPictureAtom);

  return {capturedPicture, setCapturedPicture};
}

export function useFlashMode() {
  const [flashMode, setFlashMode] = useAtom(flashModeAtom);

  return {flashMode, setFlashMode};
}

export function useCameraType() {
  const [cameraType, setCameraType] = useAtom(cameraTypeAtom);

  return {cameraType, setCameraType};
}

export function useAssets() {
  const [assets, setAssets] = useAtom(assetsAtom);

  return {assets, setAssets};
}