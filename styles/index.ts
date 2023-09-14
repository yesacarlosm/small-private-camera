import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  galleryContainer: {
    flex: 1,
    alignItems: 'center',
  },
  takePictureButton: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#14274e',
    position: 'absolute',
    width: 'auto',
    bottom: 0,
  },
  flexOneWrapper: {
    flex: 1,
  },
  customCameraContainer: {
    flex: 1,
    width: '100%'
  },
  customCameraView: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  customCameraButtonsContainer: {
    position: 'absolute',
    left: '90%',
    top: '10%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  customCameraButtonContainer: {
    borderRadius: 30,
    height: 30,
    width: 30
  },
  customCameraButtonText: {
    fontSize: 25
  },
  customCameraTakePhotoButtonContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'space-between'
  },
  customCameraTakePhotoButtonOrientation: {
    alignSelf: 'center',
    flex: 1,
    alignItems: 'center'
  },
  customCameraTakePhotoButton: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: '#fff'
  },
  cameraPreviewContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    width: '100%',
    height: '100%'
  },
  cameraPreviewButtonsContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    justifyContent: 'flex-end'
  },
  cameraPreviewButton: {
    width: 130,
    height: 40,
    backgroundColor: '#14274e',
    alignItems: 'center',
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  cameraPreviewButtonText: {
    color: '#fff',
    fontSize: 20
  },
  takePictureButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});