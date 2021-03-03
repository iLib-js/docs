---
title: "Basic Information"
metaTitle: "Basic Locale Info page"
metaDescription: "Basic Locale Info page"
---

### Locale Info
A lot of other information about a locale is available via the [LocaleInfo](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/LocaleInfo.html) class:

```javascript
var LocaleInfo = require("<path-to-ilib>/lib/LocaleInfo.js");
var li = new LocaleInfo({locale: "ru-RU"});
```
Things that the locale information instance can tell you:

* Scripts used to write the language
* The first day of the week in calendars
* The default paper sizes
* The currency
* The default time zone
* The measurement units system ("metric", "uscustomary", or "imperial")
* The default calendar type (usually "gregorian")
* The default clock hours, 12 or 24
* The default rounding mode
* and more

### Script Info
### Currency Info
### Timezone Info