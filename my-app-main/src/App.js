import { Platform } from 'react-native';
import WebComponent from "web.js";
import NativeComponent from "nativeindex.js";

const MyComponent = () => {
  return (
    <>
      {Platform.OS === 'web' ? (
        <WebComponent />
      ) : (
        <NativeComponent />
      )}
    </>
  );
};

export default MyComponent;