import { Stack } from 'expo-router';
import React from 'react';

export default function HomeLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}} />
            <Stack.Screen name="detailpage" options={{headerShown: true, title: 'My home',
            headerStyle: {
                backgroundColor: '#275F8E',
              },
              headerTitleStyle: {
                color: 'white',
                fontWeight: 'bold',
              },
            }}            
            />
        </Stack>
    );
}
