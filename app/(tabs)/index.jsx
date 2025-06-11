import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
	return (
		<ScrollView contentContainerStyle={styles.contentContainer}>
			<View style={styles.centeredView}>
				<Text style={styles.text}>TOP PAGE</Text>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#fff',
	},
})