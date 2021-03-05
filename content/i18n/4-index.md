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

li.getScript()
//'Cyrl'
li.getClock()
//'24'
li.getCurrency()
//'RUB'
li.getFirstDayOfWeek()
//1
li.getMeridiemsStyle()
//'gregorian'
li.getPaperSize()
//'A4'
li.getTimeZone()
//'Europe/Moscow'
li.getUnits()
//'metric'

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
A information about a Script is available via the [ScriptInfo](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/ScriptInfo.html) class:  
Thigs that the Script information instance can tell you:  
* The 4-letter ISO 15924 identifier 
* The ISO 15924 code number
* The name of this script in English
* the usual direction that text in this script is written in
* and more

```javascript
var ScriptInfo = require("<path-to-ilib>/lib/ScriptInfo.js");
var si = new ScriptInfo("Latn");

si.getCode()
// 'Latn'
si.getCodeNumber()
// 215
si.getName()
// 'Latin'
si.getScriptDirection()
// 'ltr'
```
### Currency Info
A information about a Currency is available via the [Currency](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/Currency.html) class: 
Thigs that the Currency information instance can tell you:  
* The ISO 4217 currency code
* The locale for this currency
* the name of the currency in English
* The sign commonly used to represent this currency.
* and more

```javascript
var Currency = require("<path-to-ilib>/lib/Currency.js");
var cur = new Currency({code: "KRW"});

cur.getName()
// 'South Korean Won'
cur.getSign()
// '₩'
```

### Timezone Info
A information about a Timezone is available via the [TimeZone](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/TimeZone.html) class: 

```javascript
var TimeZone = require("<path-to-ilib>/lib/TimeZone.js");
var tz = new TimeZone({id: "America/Los_Angeles"});

tz.getCountry()
// 'US'
tz.getDisplayName()
// 'PST'
tz.getDSTSavings()
// { h: 1 }
```
Thigs that the TimeZone information instance can tell you:  
* The ISO 3166 code of the country for which this time zone is defined.
* The amount of time in hours:minutes that the clock is advanced during daylight savings time.
* The offset of this time zone from UTC at the given date/time.
* and more