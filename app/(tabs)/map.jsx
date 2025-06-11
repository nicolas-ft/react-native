
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import MapContainer from '@/components/MapContainer';

export default function Map() {
  return (
		<MapContainer />
  );
}


// import { WebView } from 'react-native-webview';
// import Constants from 'expo-constants';
// import { StyleSheet } from 'react-native';

// export default function Map() {
//   return (
//     <WebView
//       style={styles.container}
//       originWhitelist={['*']}
//       source={{ html: '<h1><center>Hello world</center></h1>' }}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//   },
// });