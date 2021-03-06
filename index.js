//Import a library to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


//Create a component
const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

// Render component to device
AppRegistry.registerComponent('albums', () => App);
