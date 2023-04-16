import { Platform } from 'react-native';
import WebComponent from "./src/web.js";
import NativeComponent from "./src/nativeindex.js";

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