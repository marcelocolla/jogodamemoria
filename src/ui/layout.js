import { Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'

const hasNotch = DeviceInfo.hasNotch(),
    barHeight = Platform.OS === 'ios' ? 16 : 4

export default {
    hasNotch,
    statusBar: hasNotch ? 28 : barHeight,
    statusBarBottom: hasNotch ? 16 : 8,
    gutter: 12,
    gutterLarge: 16,
    radius: 8,
}
