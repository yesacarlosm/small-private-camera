import { useAtom } from "jotai";
import { capturedPictureAtom, cameraPreviewAtom, cameraStartedAtom, cameraTypeAtom, flashModeAtom } from "../storage/index";

export function useCameraStarted() {
  const [cameraStarted, setCameraStarted] = useAtom(cameraStartedAtom);

  return [cameraStarted, setCameraStarted] as const;
}

export function useCameraPreview() {
  const [cameraPreview, setCameraPreview] = useAtom(cameraPreviewAtom);

  return [cameraPreview, setCameraPreview] as const;
}

export function useCameraCaptured() {
  const [capturedPicture, setCapturedPicture] = useAtom(capturedPictureAtom);

  return [capturedPicture, setCapturedPicture] as const;
}

export function useFlashMode() {
  const [flashMode, setFlashMode] = useAtom(flashModeAtom);

  return [flashMode, setFlashMode] as const;
}

export function useCameraType() {
  const [cameraType, setCameraType] = useAtom(cameraTypeAtom);

  return [cameraType, setCameraType] as const;
}