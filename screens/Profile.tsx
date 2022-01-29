import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';

const ProfileScreen = () => {
    return (
        <View>
            <Text style={styles.screenTitle}>Profile Screen</Text>

            <Text>Name: John Doe</Text>
            <TouchableOpacity>
                <Text>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    },
});

export default ProfileScreen