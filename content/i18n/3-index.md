---
title: "Data Formatting"
metaTitle: "Formatting page"
metaDescription: "Formatting page"
---

### Date and Times
Dates and times are formatted differently in different locales. These are all the same date:

|Locale|Format|
|------|---|
|en-US|March 2, 2021 at 3:38 PM|
|en-GB|2 March 2021 at 15:38|
|ko-KR|2021년 3월 2일 오후 3:38|
|de-DE|2. März 2021 um 15:38|
|zh-Hans-CN|2021年3月2日 下午3:38|


### Date Formatting
Date and time formatting is done through the [DateFmt](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/DateFmt.html) formatter class Constructor takes options
controlling how the formatter behaves Call the [format()](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/DateFmt.html#format) method of the formatter as many times as you want to format dates with those options

```javascript
var DateFmt = require("<path-to-ilib>/lib/DateFmt.js")

var fmt = new DateFmt();
var d = fmt.format(date);
```

#### Date/Time Formatting Options
There are options to control:
If you see more in detail, Please visit the [link](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/DateFmt.html).
* locale: Which locale to use
* type: Format the date only, time only, or both the date and time together
* clock: Use the 12- or 24-hour clock, or use the default for the locale
* length: Use short-, medium-, long-, or full-length text for components that use words.
* and more
```javascript
var DateFactory=require("<path-to-ilib>/lib/DateFactory");
var DateFmt = require("<path-to-ilib>/lib/DateFmt.js")
var date=DateFactory({year:2021, month:3, day:4, hour:14, minute:19});

var fmt = new DateFmt({
   locale: "ko-KR",
   type: "datetime",
   length: "short",
   timezone: "local"
});
var d = fmt.format(date);
// 21. 3. 4. 오후 2:19
```

### Date-related Formatting

#### Date RangeRange
Date/time ranges are periods of time with a specific start and end points Can be formatted using the [DateRngFmt](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/DateRngFmt.html) class
Example output: "Mar 11-14, 2013"

``` javascript
var DateFactory = require("<path-to-ilib>/lib/DateFactory");
var DateRngFmt = require("<path-to-ilib>/lib/DateRngFmt.js")

var start = DateFactory({year:2021, month:3, day:4, hour:14, minute:19});
var end = DateFactory({year:2021, month:4, day:14, hour:14, minute:19});

var fmt = new DateRngFmt({locale:"de-DE", length:"full"});
var d = fmt.format(start, end);
// 4. März – 14. April 2021
```
#### Duration

Durations are a measure of how long something took to happen Can be formatted using the [DurFmt](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/DurationFmt.html) class
Example output: "36 hours, 24 minutes, and 37 seconds"

``` javascript
var DurFmt = require("<path-to-ilib>/lib/DurationFmt.js")

var fmt = new DurFmt({locale:"en-US", length:"full"});

var result = fmt.format({
            year:1, month:1, week:1, day:1,
            hour:1, minute:1, second:1}).toString();

// 1 year, 1 month, 1 week, 1 day, 1 hour, 1 minute, 1 second

var result = fmt.format({
            year:2, month:2, week:2, day:2,
            hour:2, minute:2, second:2}).toString();

// 2 years, 2 months, 2 weeks, 2 days, 2 hours, 2 minutes, 2 seconds
```

### Calendar 

#### Calendar Conversion
iLib supports dates in multiple calendaring systems:  
 * Coptic
 * Ethiopic
 * Gregorian
 * Han
 * Hebrew
 * Islamic
 * Julian
 * Persian
 * PersianAlgo
 * ThaiSolar`
 
Default is the familiar Gregorian calendar  
Create dates using the factory method or using the calendar dates directly:
```javascript
var HebrewDate = require("<path-to-ilib>/lib/HebrewDate.js")
var now = new HebrewDate();

// This is This is equivalent to the factory method:
var DateFactory = require("<path-to-ilib>/lib/DateFactory.js")
var now = DateFactory({type: "hebrew"});
```
#### Calendar Information
Information about a calendar can be retrieved using the Cal.* classes
```javascript
var PersianCal = require("<path-to-ilib>/lib/PersianCal.js");
var cal = new PersianCal();
cal.getNumMonths(1392)
// 12
```
Use a factory method to create the other calendar types

```javascript
var CalendarFactory = require("<path-to-ilib>/lib/CalendarFactory.js");
var cal = CalendarFactory({
  // looks up calendar for this locale
  locale: "nl-NL"
});
var days = cal.getMonLength(2, year);
// days is 28 in regular years, 29 in leap years
```
#### Formatting in Other Calendars
```javascript
var DateFactory = require("<path-to-ilib>/lib/DateFactory.js");
var DateFmt = require("<path-to-ilib>/lib/DateFmt.js");

var now = DateFactory({
   type: "hebrew"
});
var fmt = new DateFmt({
   length: "full",
   locale: "en-US",
   calendar: "hebrew"
});
var d = fmt.format(date);
// Adar 19, 5781
```

### Numbers
Number, currency, and percentage formats are locale-sensitive  

|Locale|Float|Currency|Percentage|
|------|---|---|---|
|en-US|123,456,789|$123.00|57.2%|
|de-DE|123.456.789|123,00 €|57,2 %|
|fr-FR|123 456 789|123,00 €|57,2 %|
|tr-TR|123.456.789|₺123,00|%57,2|

#### Numeric Formatting
Formatting numbers is achieved with the [NumFmt](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/NumFmt.html) class
```javascript
var NumFmt = require("<path-to-ilib>/lib/NumFmt.js");
var fmt = new NumFmt({
   locale: "de-DE"
});

var str = fmt.format(1234567.89);
// 1.234.567,89
```
#### Currency Formatting
Currency is formatted with the same [NumFmt](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/NumFmt.html) class:
```javascript
var NumFmt = require("<path-to-ilib>/lib/NumFmt.js");
var fmt = new NumFmt({
   type: "currency",
   currency: "EUR",
   locale: "de-DE"
});
var amount = fmt.format(1234.56289);
// 1.234,56 €
```

#### Percentage Formatting
Percentages are formatted with the same [NumFmt](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/NumFmt.html) class:
```javascript
var NumFmt = require("<path-to-ilib>/lib/NumFmt.js");
var fmt = new NumFmt({
   type: "percentage",
   maxFractionDigits: 2,
   locale: "tr-TR"
});
var percentString = fmt.format(0.893453);
// % 89,34
```

### Units
Various unit date is locale sensitive:Temperature, Speed, etc  
Unit are formatted with the [UnitFmt](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/UnitFmt.html) class.  
If you see more in detail, Please visit the [here](https://github.com/iLib-js/iLib/blob/development/docs/tutorial/units.md).

|Locale|Temperature|Vehicle Distance|Vehicle Speed|Fuel Volume|
|------|---|---|---|---|
|en-US|87.8°F|30 mi|30 mph|30 gal|
|ko-KR|31°C|42.28 km|42.28 km/h|113.56L|
|de-DE|31 °C|42.28 km|42.28 km/h|113.56 l|


#### Automatic Conversion
```javascript
var MeasurementFactory = require("<path-to-ilib>/lib/MeasurementFactory")
var UnitFmt = require("<path-to-ilib>/lib/UnitFmt");

var m1 = MeasurementFactory({unit:"celsius", amount:31});
var uf = new UnitFmt({locale:"en-US", length:"short", autoConvert:true});
uf.format(m1)
// '87.8°F'
```

#### Automatic Scaling
```javascript
var m1 = MeasurementFactory({unit: "hectare", amount: 100});
         
var uf = new UnitFmt({locale:"en-US",autoScale:true, autoConvert:false});
var str = uf.format(m1);
// 1 square kilometer
```