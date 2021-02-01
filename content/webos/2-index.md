---
title: "webOS Localization"
metaTitle: "webOS Localization Page"
metaDescription: "webOS Localization Page"
---

Overview
=============


If your applications or serves need localization string,
First, You need to Write code for your apps and services using the provided internationalization (i18n) libraries. 

Please refer to the following explanation depends on your programming languages.


JavaScript
=============

Enact
-------------

Enact provides functions called [$L](https://enactjs.com/docs/modules/i18n/$L/) to map to translated strings.


```javascript
import $L, {toIString} from '@enact/i18n/$L';

$L('Close');        // => "Close" in the current locale
toIString('Close'); // => an ilib IString representing "Close" in the current locale
```

Non Enact
-------------

For web apps that do not utilize Enact framework, use the  [__ResBundle.getString__](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/ResBundle.html#getString) API of ResBundle feature in iLib.


1. First, load the iLib library ilib-web.js through the  __script__ tag.

```HTML

<html>
<head>
<script src=<path-to-ilib>/lib/ilib-web.js type="text/javascript"></script>
...
</head>
</html>
```
For instance, if you’re developing a built-in web app, the iLib library can be loaded as follows:

```javascript
<script src=file://usr/share/javascript/ilib/lib/ilib-web.js type="text/javascript"></script>
```

2. After that, use the [__ResBundle.getString__](https://ilib-js.github.io/iLib/docs/api/jsdoc/symbols/ResBundle.html#getString) method of iLib as shown in the example below:

```javascript
var ResBundle = require("ResBundle.js");

var rb = new ResBundle({locale: "en-US"});
var str = rb.getString("String 1"); // str is iLib string object
var jsStr = str.toString(); // jsStr is js string object
```


Nodejs
-------------

If you are a nodejs developer, you need to load _iLib_ first using the built-in nodejs require() function.

```javascript
var ResBundle = require("/usr/share/javascript/ilib/lib/ResBundle");

var rb = new ResBundle({locale: "ko-KR"});
var str = rb.getString("Hello");
var jsStr = str.toString()
```

QML
=============

It follows the general rules.
Strings in QML can be marked for translation using __qsTr__, __qsTranslate()__, __qsTrId()__, __QT_TR_NOOP()__, __QT_TRANSLATE_NOOP()__, and __QT_TRID_NOOP()__. Pleas refer to the [official documentation](https://doc.qt.io/qt-5/qtquick-internationalization.html).

```qml

Text {
    id: txt1;
    text: qsTr("Back");
}

```


C/C++
=============
Translated strings can be retrieved by calling functions and methods implemented in the library [__libwebosi18n__](https://github.com/webosose/libwebosi18n)
This is a small library that allows you to load sets of strings known as a resource bundle from json files
in the same way that the Javascript code does. This class retrieves translations
for strings, and formats them with parameters for display to the user.

```c

#include <webosi18n_C.h>
// put this include at the top
const char* locale = "en-US";
const char* file = "cstrings.json";
const char* resources_path = "/usr/share/localization/samplec";
ResBundleC* resBundle = resBundle_createWithRootPath(locale, file, resources_path);

resBundle_getLocString(resBundle, "String 1");

```

This does the same thing as the C code above:

```cpp
// put this include at the top
#include <webosi18n.h>

std::string locale = "en-US";
const std::string file = "cppstrings.json";
const std::string resources_path = "/usr/share/localization/samplecpp";
ResBundle* resBundle = new ResBundle(locale, file, resources_path);

resBundle->getLocString("String 1");

```