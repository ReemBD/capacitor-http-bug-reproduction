import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.reembd.bugrepro',
  appName: 'capacitor-native-plugin-bug-code-repro',
  webDir: 'dist/capacitor-native-plugin-bug-code-repro',
  bundledWebRuntime: false,
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  }
};

export default config;
