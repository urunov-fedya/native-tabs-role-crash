# NativeTabs: changing `role` on a mounted trigger crashes on iOS 26.1+ (SDK 58)

Minimal reproduction for expo/expo.

The cart tab gets `role="search"` only while `/detail` is open
(`src/app/_layout.tsx`). On SDK 57 the tab moved aside and back. On SDK 58 the
app crashes as soon as the role changes:

```
*** Terminating app due to uncaught exception 'NSInternalInconsistencyException',
reason: '[RNScreens] Changing `role` on a mounted tab screen is not supported.'
```

## Steps

```bash
npm install
npx expo run:ios
```

Tap "Open detail (crashes)".

Tested on iOS 26.3 and 26.5 simulators (iPhone Air), expo 58.0.21,
expo-router 58.0.28, react-native-screens 4.30.x, react-native 0.88.1.
