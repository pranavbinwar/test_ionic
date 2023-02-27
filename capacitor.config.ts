import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'capicitor-app',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.29.59:3000',
    cleartext:true
  }
};

export default config;
