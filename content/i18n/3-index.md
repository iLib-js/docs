---
title: "Formatting in JavaScript"
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
Date and time formatting is done through the `DateFmt` formatter class Constructor takes options
controlling how the formatter behaves Call the `format()` method of the formatter as many times
as you want to format dates with those options

```javascript
var DateFmt = require("<path-to-ilib>/lib/DateFmt.js")
var fmt = new DateFmt();
var d = fmt.format(date);
```

#### Date/Time Formatting Options
There are options to control:
* Which locale to use
* Format the date only, time only, or both the date and time together
* Which components of the date or time should be formatted. Eg. only format the month and year of the date
* Use the 12- or 24-hour clock, or use the default for the locale
* Use short-, medium-, long-, or full-length text for components that use words.
* Eg. Sunday is "S", "Su", "Sun", or "Sunday"
* and more


### Date-related Formatting
Date/time ranges are periods of time with a specific start and end points Can be formatted using the DateRngFmt class
Example output: "Mar 11-14, 2013"

Durations are a measure of how long something took to happen
Can be formatted using the DurFmt class
Example output: "36 hours, 24 minutes, and 37 seconds"


### Calendar Conversion

#### Formatting in Other Calendars


### Numbers
Number, currency, and percentage formats are locale-sensitive
|Locale|Float|Currency|Percentage|
|------|---|---|---|
|en-US|123,456,789|$123.00|57.2%|
|de-DE|123.456.789|123,00 €|57,2 %|
|fr-FR|123 456 789|123,00 €|57,2 %|
|tr-TR|123.456.789|₺123,00|%57,2|

#### Numeric Formatting
Formatting numbers is achieved with the NumFmt class
```javascript
var NumFmt = require("<path-to-ilib>/lib/NumFmt.js");
var fmt = new NumFmt({
   locale: "de-DE"
});

var str = fmt.format(1234567.89);
Str is now "1.234.567,89"
```
#### Currency Formatting
```javascript
Currency is formatted with the same ilib.NumFmt class:
var NumFmt = require("<path-to-ilib>/lib/NumFmt.js");
var fmt = new NumFmt({
   type: "currency",
   currency: "EUR",
   locale: "de-DE"
});
var amount = fmt.format(1234.56289);
amount is now "1.234,56 €"
```

#### Percentage Formatting

Percentages are formatted with the same NumFmt class:
```javascript
var NumFmt = require("<path-to-ilib>/lib/NumFmt.js");
var fmt = new NumFmt({
   type: "percentage",
   maxFractionDigits: 2,
   locale: "tr-TR"
});
var percentString = fmt.format(0.893453);
percentString is now "% 89,34"
```

#### etc

### Units

