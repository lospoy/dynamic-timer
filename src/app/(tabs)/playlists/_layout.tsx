import { defaultStyles, StackScreenWithSearchBar } from '@/app/styles'
import { View } from 'react-native'
import { Stack } from 'expo-router'

const PlaylistsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ ...StackScreenWithSearchBar, headerTitle: 'Playlists' }}
				/>
			</Stack>
		</View>
	)
}

export default PlaylistsScreenLayout
