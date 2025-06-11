import React from 'react';
import { View, StyleSheet } from 'react-native';

const lat = '35.69628586699673'
const lon = '139.60121795361565'

export default function MapContainer() {
	return (
		<View style={styles.container}>
			<iframe
				src="https://maps.google.com/maps?q=35.69628586699673,139.60121795361565&hl=es&z=19&output=embed"
				style={styles.map} 
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		width: '100%',
		height: '100%',
		border: 'none',
	},
});