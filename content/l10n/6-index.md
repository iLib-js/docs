---
title: "loctool for Android devs"
metaTitle: "loctool Android"
metaDescription: "loctool Android"
---

loctool have plugin for android localization. `ilib-loctool-android-resource` and `iilb-loctool-android-layout`. loctool handles text string resources.  
`ilib-loctool-android-resource` is for strings.xml file under `res/values`, `ilib-loctool-android-layout` plugin handles text in layout file under `res/layout`

1) Write code - Extract localizable Strings
====
A string resource provides text strings for your application with optional text styling and formatting. 
There are three types of resources that can provide your application with strings:
* String resource
  * String
  * String Array
  * Quantity Strings (Plurals)
* Layout resource

a) [String](https://developer.android.com/guide/topics/resources/string-resource#String)
``` xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="hello_world">Hello World!</string>
</resources>
```
b) [String-array](https://developer.android.com/guide/topics/resources/string-resource#StringArray)
``` xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string-array name="string_array_name">
        <item>text_string</item>
    </string-array>
</resources>
```

c) [Quantity strings](https://developer.android.com/guide/topics/resources/string-resource#Plurals) (plurals)
``` xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <plurals name="plural_name">
        <item
            quantity=["zero" | "one" | "two" | "few" | "many" | "other"]
            >text_string</item>
    </plurals>
</resources>
```

d) [Layout resource](https://developer.android.com/guide/topics/resources/layout-resource)
``` xml
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android" android:layout_width="match_parent">
  <RelativeLayout android:layout_width="match_parent">
    <com.mycompany.customviews.RobotoRegularTextView
      android:id="@+id/invalidpasswordMsg"
      android:text="This is a test"
      android:textColor="@color/error_red"/>
  </RelativeLayout>
</FrameLayout>
```

2) Write config file for loctool
====
Make sure `resourceDirs`, `resourceFileType` and `plugin` are written correctly in `project.json` file.  

i.e)
```
...
"resourceDirs": {
        "java":"res"
},
"resourceFileTypes": {
    "java":"ilib-loctool-android-resource"
},
"plugins": [
    "ilib-loctool-android-resource",
    "ilib-loctool-android-layout"
],
...
```
3) Run the loctool - Generate localization data 
loctool creates a new folder under `res` with name of `values-local` which follows androld localization rules.

i.e)
Spanish strings (es locale), /values-es/strings.xml:
```
<resources>
    <string name="hello_world">¡Hola Mundo!</string>
</resources>
```

Reference
====
* https://developer.android.com/guide/topics/resources/string-resource
* https://developer.android.com/guide/topics/resources/layout-resource
* https://developer.android.com/guide/topics/resources/localization