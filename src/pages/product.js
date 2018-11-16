import React, { Component } from 'react';
import { View, WebView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Product extends Component {
    state = { 
        showLoading: true
    };

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.product.title
    });

    showSpinner = () => this.setState({ showLoading: true });
    
    hideSpinner = () => this.setState({ showLoading: false });

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Spinner
                    visible={this.state.showLoading}
                    textContent={'Carregando...'}
                    textStyle={{ color: '#DA552F' }}
                    color={'#DA552F'}
                    overlayColor={'#DDD'}
                    animation={'fade'}
                />
                <WebView
                    source={{ uri: navigation.state.params.product.url }}
                    onLoadStart={() => (this.showSpinner())}
                    onLoad={() => (this.hideSpinner())} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});