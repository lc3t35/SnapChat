'use strict';

import React, {
  Component,
} from 'react';

import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Router, Route, Scene, Animations, TabBar} from 'react-native-router-flux';

import {
  Navigator,
} from 'react-native-deprecated-custom-components';



import Splash from './splash.js';
import Dashboard from './dashboard.js';
import Snaps from './snaps.js';
import Discover from './discover.js';
import AddMe from './AddMe.js';
import Chats from './chats.js';
import Stories from './stories.js';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
const RouterWithRedux = connect()(Router);


class RootRouter extends Component {
	constructor(props) {
    super(props);

  }

 renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;
    if (routeId === 'chat') {
      return (
        <Chats
         // data = {route.data}
          navigator={navigator}
         {...route.passProps}
          {...state}
           />
      );
    }
    if (routeId === 'AddMe') {
      return (
        <AddMe
          navigator={navigator} />
      );
    }
         if (routeId === 'Dashboard') {
      return (
        <Dashboard
          actions = {actions}
          {...state}
          navigator={navigator} />
      );
    }
    if (routeId === 'Discover') {
      return (
        <Discover

          navigator={navigator} />
      );
    }
    if (routeId === 'Stories') {
      return (
        <Stories

          navigator={navigator} />
      );
    }
    if (routeId === 'Snaps') {
      return (
        <Snaps

          navigator={navigator} />
      );
    }
    if (routeId === 'Splash') {
      return (
        <Splash
          {...this.props}
          navigator={navigator} />
      );
    }

    }

  render() {
    return (
      <View style={{flex:1}}>

        <Navigator
        style={{flex: 1}}
        initialRoute={{id: 'Splash', name: 'Splash'}}
          renderScene={this.renderScene.bind(this)}
      /></View>
    );
  }





}
export default connect(state => ({
    state: state.SnapChat
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(RootRouter);