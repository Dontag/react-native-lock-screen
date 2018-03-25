
# React Native: Lock Screen

An easy-to-use, customizable and Material Design ready Pattern/Pin Lock view for Android & iOS.

| **Pin** |
| ----------------- |
| <img src="./assets/hero1.gif" width="600" height="600" />                  |

| **Pattern** |
| ----------------- |
| <img src="./assets/hero2.gif" width="600" height="600" />                  |

| **With Background** |
| ----------------- |
| <img src="./assets/hero3.png" width="600" height="600" />                  |

## Getting started

`$ npm install react-native-lock-screen --save`

`$ react-native link react-native-lock-screen`

`$ react-native link react-native-svg`



## Usage
```javascript
import RNPopoverMenu from 'react-native-popover-menu';

<RNLockScreen type={RNPopoverMenu.Type.Pin} mode={RNPopoverMenu.Mode.Capture} onCapture={lock => {
  }}
  lock={'123'}
/>

```

## Props

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `type`       | `number`     |   Pin - 0     | Specify type of lock (Pin/Pattern)
| `mode`       | `number`     |   Capture - 0     | Specify mode of lock (Capture/Verify)
| `lock`       | `string`     |        | Specify lock then the mode is Verify
| `backgroundImage`       | `number` : `optional`     |        | Specify lock screen background image

| `renderHeaderFragment`       | `func` : `optional`     |        | Specify func to customize header fragment
| `renderSeparator`       | `func` : `optional`     |        | Specify func to customize separator
| `renderLockFragment`       | `func` : `optional`     |        | Specify func to customize lock fragment

| `patternProps`       | `object` : `optional`     |        | Specify obj to pass pattern props
| `pinProps`       | `object` : `optional`     |        | Specify obj to pass pin props

| `headerFragmentProps`       | `object` : `optional`     |        | Specify obj to pass header fragment props
| `lockFragmentProps`       | `object` : `optional`     |        | Specify obj to pass lock fragment props

| `defaultState`       | `object` : `optional`     |        | Specify obj to pass `DEFAULT` state props
| `reenterState`       | `object` : `optional`     |        | Specify obj to pass `REENTER` state props
| `successState`       | `object` : `optional`     |        | Specify obj to pass `SUCCESS` state props
| `errorState`       | `object` : `optional`     |        | Specify obj to pass `error` state props


- **defaultState Prop**

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `title`       | `string`     |   Enter a passcode     | Specify the header fragment title
| `titleStyle`       | `string`     |  `{ fontSize: 24, color: "#FFF" }`      | Specify title style
| `icon`       | `string`     |   lock icon     | Specify the header circle icon
| `dotProps`       | `string`     |   `style: { backgroundColor: "#FFFFFF" }`     | Specify the Dot component props


- **reenterState Prop**

- **successState Prop**

- **errorState Prop**

| `title`       | `string`     |        | Specify the title of tour
| `title`       | `string`     |        | Specify the title of tour
| `title`       | `string`     |        | Specify the title of tour
| `title`       | `string`     |        | Specify the title of tour
| `title`       | `string`     |        | Specify the title of tour
| `title`       | `string`     |        | Specify the title of tour
| `title`       | `string`     |        | Specify the title of tour


## Credit
- [Android: Gesture Lock](https://github.com/aritraroy/PatternLockView)
- [iOS: Gesture Lock](https://github.com/Tuqierrenzu/TQGestureLockView)

## Contribution
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## License
This library is provided under the Apache 2.0 License.

RNLockScreen @ Pranav Raj Singh Chauhan
