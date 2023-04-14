import { Platform } from 'react-native';
import WebComponent from "./screens/web.js";
import NativeComponent from "./screens/nativeindex.js";

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