import React, { useState } from 'react';
import { Pressable, ScrollView, Dimensions, StyleSheet, Text, View } from "react-native";
import SwipeDownModal from '@/components/SwipeDownModal'

export default function Index() {
	const [isModalVisible, setIsModalVisible] = useState(false);
		
	const showModal = () => {
		setIsModalVisible(true);
	};

	const onModalClose = () => {
		setIsModalVisible(false);
	};

	const screenHeight = Dimensions.get('window').height;
  const [contentHeight, setContentHeight] = useState(0);
	const handleContentSizeChange = (width, height) => {
    setContentHeight(height);
  };

	return (
		<ScrollView 
			contentContainerStyle={styles.contentContainer}
			onContentSizeChange={handleContentSizeChange}
      scrollEnabled={contentHeight > screenHeight}
		>
			<View style={styles.constentInner}>
				<Pressable
					onPress={showModal}>
					<Text style={styles.text}>Show modal</Text>
				</Pressable>

				<SwipeDownModal isVisible={isModalVisible} onClose={onModalClose}/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20
	},
	constentInner: {
		flexGrow: 1,
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#fff',
	},
})