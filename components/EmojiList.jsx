import { Image } from 'expo-image';
import { useState } from 'react';
import { FlatList, Platform, Pressable, StyleSheet } from 'react-native';

export default function EmojiList({ onSelect, onCloseModal }) {
	const [emoji] = useState([
		require("../assets/images/emoji1.png"),
		require("../assets/images/emoji2.png"),
		require("../assets/images/emoji3.png"),
		require("../assets/images/emoji4.png"),
		require("../assets/images/emoji5.png"),
		require("../assets/images/emoji6.png"),
	]);

	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={Platform.OS === 'web'}
			data={emoji}
			contentContainerStyle={styles.listContainer}
			renderItem={({ item, index }) => (
				<Pressable
					onPress={() => {
						onSelect(item);
						onCloseModal();
					}}>
					<Image source={item} key={index} style={styles.image} />
				</Pressable>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		paddingHorizontal: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginHorizontal: 'auto',
	},
	image: {
		width: 50,
		height: 50,
		marginRight: 5,
		marginLeft: 5,
	},
});