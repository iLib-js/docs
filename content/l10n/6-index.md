---
title: "loctool for Android devs"
metaTitle: "Process page"
metaDescription: "Process page"
---

loctool have plugin for android localization. `ilib-loctool-android-resource` and `iilb-loctool-android-layout`. loctool handles text string resources.  
`ilib-loctool-android-resource` is for strings.xml file under `res/values`, `ilib-loctool-android-layout` plugin handles text in layout file under `res/layout`

1) Extract localizable Strings
====

``` xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="hello_world">Hello World!</string>
</resources>
```

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
* https://developer.android.com/guide/topics/resources/localization