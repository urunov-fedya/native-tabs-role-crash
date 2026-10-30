import { usePathname } from 'expo-router';
import { NativeTabs } from 'expo-router/native-tabs';

export default function RootLayout() {
  // The cart tab moves aside (role="search") only while the detail screen is open.
  const onDetail = usePathname() === '/detail';

  return (
    <NativeTabs>
      <NativeTabs.Trigger name="(home)">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="cart" role={onDetail ? 'search' : undefined}>
        <NativeTabs.Trigger.Label>Cart</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="cart.fill" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
