const assert = require('assert');
const LocalizationManager = require('../src/localizationManager');

describe('LocalizationManager', function() {
    describe('#loadLocaleData()', function() {
        it('should load localization data for a specific locale', function() {
            const manager = new LocalizationManager();
            const data = { greeting: 'Hello', farewell: 'Goodbye' };
            manager.loadLocaleData('en', data);
            assert.strictEqual(manager.localeData['en'], data);
        });
    });

    describe('#translate()', function() {
        it('should translate the given key to the specified locale', function() {
            const manager = new LocalizationManager();
            const data = { greeting: 'Hello', farewell: 'Goodbye' };
            manager.loadLocaleData('en', data);
            assert.strictEqual(manager.translate('greeting', 'en'), 'Hello');
            assert.strictEqual(manager.translate('farewell', 'en'), 'Goodbye');
        });

        it('should return a message if translation for key/locale is not found', function() {
            const manager = new LocalizationManager();
            assert.strictEqual(manager.translate('missingKey', 'en'), "Translation not found for key 'missingKey' in locale 'en'");
        });
    });
});
