    import React from 'react';
    import { Marker } from 'react-native-maps'; // Assuming you're using react-native-maps

    const CustomMarker = React.memo(({ coordinate, title, onPress }) => {
      // Render your marker content here
      return (
        <Marker 
          coordinate={coordinate} 
          title={title} 
          onPress={onPress} 
        />
      );
    });

    export default CustomMarker;