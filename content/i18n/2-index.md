---
title: "Handling Strings"
metaTitle: "Handling Strings page"
metaDescription: "Handling Strings Service page"
---


### String Translation
All translable strings should be wrapped in a [getString](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/ResBundle.html#getString) call. 

``` javascript
var ResBundle = require("<path-to-ilib>/lib/ResBundle.js")

var rb = new ResBundle({locale: "ko-KR"});
var str = rb.getString("My Label");
``` 


### Disambiguating String
Let's say you had two strings that have the same text but are used in a different context and therefore possible could have different translations. To disambiguate these, use an object with `key-value` pair rather than a single string as the parameter. The key must be unique.
``` javascript
var ResBundle = require("<path-to-ilib>/lib/ResBundle.js")

var rb = new ResBundle({locale: "ko-KR"});
var str = rb.getString("My Label", "Common String");
```


### Resource Bundles
iLib's [ResBundle](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/ResBundle.html) is the resource bundle class that represents the translation of a set of strings each app has its own resource bundle. Resource bundles are loaded dynamically. The most important method is [getString](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/ResBundle.html#getString).


### Translating Strings
Strings inside of [getString](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/ResBundle.html#getString) calls are automatically extracted from the source code using the localization tool called [loctool](https://github.com/iLib-js/loctool), translated, then written out to the locale's resource file Strings returned from [getString](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/ResBundle.html#getString) are translated to the current UI locale.


### Where the Resources are Stored
Each app contains a `resources` directory. 
Under the resources dir are directories named for the locales.  
iLib reads the translations from multiple `strings.json` files under the locale directories.  
Layered: lower levels override strings in the upper levels  
eg. `resources/sr/Latn/RS/strings.json` overrides strings in `resources/sr/Latn/strings.json`, which override `resources/sr/strings.json`, which overrides the English source string  
Resources Dir Layout:
```
resources/
   en/
      strings.json - shared strings for all English
      CA/
         strings.json - only strings special to Canada
      GB/
         strings.json - only strings special to Great Britain
```
You do not have to create this structure yourself. The localization tool will do this for you.


### Formatting Strings
In order to format strings, use the iLib's [IString](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/IString.html) class. The [format](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/IString.html#format) methods allows 
for interpolation of named parameters into the string. Example:

```javascript
var IString = require("<path-to-ilib>/lib/IString.js")
var template = new IString("There are {n} objects.");
var str = template.format({n: 15});

// str now has the value "There are 15 objects."
```

**`rb.getString()` returns an IString instance, so the results can be used for formatting right away.**  
[IString](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/IString.html) has all the same methods as an intrinsic string, so it is almost a replacement.  
It cannot be used in certain places that require an intrinsic string.  
Must call the `toString()` method to convert to an intrinsic string.

```javascript
var ResBundle = require("<path-to-ilib>/lib/ResBundle.js")
var rb = new ResBundle({locale: "ko-KR"});

var number = 3;
var template = rb.getString( "0#There are no objects.|1#There is 1 object.|#There are {n} objects.");
var str = template.formatChoice(number, {n: number});

// str now has the value "There are 3 objects."
```

### Choice Formats
Languages vary in how they handle plurals of nouns or unit expressions ("hour" vs "hours", and so on). Some languages have two forms, like English; some languages have only a single form; and some languages have multiple forms. 
* zero
* one (singular)
* two (dual)
* few (paucal)
* many (also used for fractions if they have a separate class)
* other (required—general plural form—also used if the language only has a single form)


Handling of plurals in Russian, Serbian, etc. is accomplished in formatChoice() using number classes
Allows the translators to handle complex plural rules properly for their language
Classes are "zero", "one", "two", "few" and "many"
Example:

```javascript
var ResBundle = require("<path-to-ilib>/lib/ResBundle.js")
var rb = new ResBundle({locale: "ru-RU"});

var template = rb.getString( "0#There are no objects.|few#There are a few ({n}) objects.|many#There are a many ({n}) objects.|#There are many  objects. ({n})");

var number=0
template.formatChoice(number,{n:number})
// 'There are no objects.'

var number=2
template.formatChoice(number,{n:number})
// 'There are a few (2) objects.'

var number=8
template.formatChoice(number,{n:number})
// 'There are a many (8) objects.'
```