import React, { Component } from "react";
import { StyleSheet, ViewPropTypes, View } from "react-native";
import PropTypes from "prop-types";

import { Pin } from './Pin'

import style from './PinFragment.style'

class PinFragment extends Component {
  static propTypes = {
    onPress: PropTypes.func
  }

  static defaultProps = {
  }

  _onPress (value) {
    this.props.onPress && this.props.onPress(value)
  }

  _renderPin (value) {
    return <Pin value={value} onPress={() => {
      this._onPress(value)
    }}></Pin>
  }

  _renderPinRows () {
    return <View style={style.pinContainer}>
        <View style={style.pinRowContainer}>
          {this._renderPin(1)}
          {this._renderPin(2)}
          {this._renderPin(3)}
        </View>
        <View style={style.pinRowContainer}>
          {this._renderPin(4)}
          {this._renderPin(5)}
          {this._renderPin(6)}
        </View>
        <View style={style.pinRowContainer}>
          {this._renderPin(7)}
          {this._renderPin(8)}
          {this._renderPin(9)}
        </View>
        <View style={style.pinRowContainer}>
          {this._renderPin()}
          {this._renderPin(0)}
          {this._renderPin()}
        </View>
      </View>;
  }

  render() {
    return <View style={style.container}>
      {this._renderPinRows()}
    </View>
  }
}

export { PinFragment }
