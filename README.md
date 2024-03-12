<h1 align="center">Welcome to One Dionys - Localization Manager! 👋 </h1>

<p align="center">Manager to manage various local resources in multilingual applications. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-localization-manager?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-localization-manager?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-localization-manager?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-localization-manager?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-localization-manager.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-localization-manager?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-localization-manager?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
// Example usage of LocalizationManager

const LocalizationManager = require('./src/localizationManager');

// Create a new instance of LocalizationManager
const manager = new LocalizationManager();

// Load localization data for English locale
const englishData = {
    greeting: 'Hello',
    farewell: 'Goodbye'
};
manager.loadLocaleData('en', englishData);

// Translate keys to English
console.log(manager.translate('greeting', 'en')); // Output: Hello
console.log(manager.translate('farewell', 'en')); // Output: Goodbye
console.log(manager.translate('missingKey', 'en')); // Output: Translation not found for key 'missingKey' in locale 'en'
```

#### Explanation

* `loadLocaleData(locale, data)`: Loads localization data for a specific locale. locale is a string representing the locale (e.g., 'en' for English), and data is an object containing key-value pairs of translations.
* `translate(key, locale)`: Translates the given key to the specified locale. Returns the translated string if found, otherwise returns a message indicating that the translation was not found.

#### Return Value

* For `loadLocaleData(locale, data)`: No return value.
* For `translate(key, locale)`: Returns the translated string if found, otherwise returns a message indicating that the translation was not found.

## 📆 Release Date

* v1.0.0 : 08 March 2024
* v1.0.1 : 11 March 2024
* v4.0.0 : 11 March 2024
* v4.0.1 : 12 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Localization Manager is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Localization Manager? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
