import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#25292e',

				// headerShadowVisible: false,
				headerTintColor: '#25292e',
				tabBarStyle: {
					backgroundColor: 'white',
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'My app',
					tabBarIcon: ({ color, focused }) => (
						<Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
					),
				}}
			/>
			
			<Tabs.Screen
				name="about"
				
				options={{
					title: 'About',
					// headerTitle: 'Back',
					headerLeft: () => (
						<Pressable onPress={() => router.back()}>
							<AntDesign name="left" size={24} color="#25292e" />
						</Pressable>
					),
					tabBarIcon: ({ color, focused }) => (
						<Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
					),
				}}
			/>

			<Tabs.Screen
				name="photos"
				options={{
					title: 'Photos',
					//headerTitle: 'Back',
					headerLeft: () => (
						<Pressable onPress={() => router.back()}>
							<AntDesign name="left" size={24} color="#25292e" />
						</Pressable>
					),
					tabBarIcon: ({ color, focused }) => (
						<Ionicons name={focused ? 'camera' : 'camera-outline'} color={color} size={24}/>
					),
				}}
			/>
		</Tabs>
	);
}
