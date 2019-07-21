import DeviceInfo from 'react-native-device-info'

const hasNotch = DeviceInfo.hasNotch()

export default {
    hasNotch,
    statusBar: hasNotch ? 28 : 16,
    statusBarBottom: hasNotch ? 16 : 8,
    gutter: 12,
    gutterLarge: 16,
    radius: 8,
}
