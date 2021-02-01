---
title: "webOS Internationalization"
metaTitle: "webOS Internationalization Page"
metaDescription: ""webOS Internationalization Page"
---

Overview
=============
In order to support webOS Internationalization, webOS adopts the opensource project called [__iLib__](https://ilib-js.github.io/iLib/docs/).  
iLib contains many classes that cover a large number of i18n topics, a lot more than almost all other JS i18n libraries.  
In order to see usages, Please refer to the general guide page.

### Installed location
In webOS, iLib files are installed  **`/usr/share/javascript/ilib`**  
You can use it by referring appropriately as needed.

JavaScript
=============

Enact
-------------

Enact framework adopts __iLib__ through install  `npm install`. Please refer to the link follow. [here](https://enactjs.com/docs/developer-guide/i18n/ilib/)  
Here's example to use iLib in Enact application.

``` javascript
import DateFmt from 'ilib/lib/DateFmt';

const formatter = new DateFmt({
	date: 'dmwy',
	length: 'full',
	timezone: 'local',
	useNative: false
});
```

Others
=============

iLib is a opensource project. Please refer to the general guide page.