## Treinamento de automação mobile com codeceptjs + appium

### Executando os testes

> 1° Passo: Altere o arquivo de configurações `codecept.conf.js` com suas respectivas configurações

```javascript
Appium: {
  platform: 'Android',
  app: 'C:/Users/<seu_usuario>/app-release.apk',
  desiredCapabilities: {
    appPackage: "com.qazandoapp",
    appActivity: "MainActivity",
    deviceName: "pixel",
    platformVersion: "9"
  }
}
```

> 2° Passo: Execute o appium

> 3° Passo: Inicie o emulador

> 4° Passo: Execute o comando:
```
npm run android
```