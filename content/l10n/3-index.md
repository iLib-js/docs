---
title: "loctool Setup"
metaTitle: "loctool Setup"
metaDescription: "loctool Setup"
---

loctool
====
This tool reads source files in various formats, extracts strings for translation, and writes out the translated strings the various resource file formats needed by each project.

### Installation

To install the loctool, you will need to make sure you have nodejs installed on your machine and in your path, as this is used to run the code. (Use 7.0 or later) 

Once nodejs is installed, you can install the loctool itself. You can either get it from npm or from github.com:  

```
npm install loctool 
npm install -g loctool // to install it globally 

// Alternately, 
yarn add loctool
```

Depending on the language of your project, you will need to install additional plugins as well.
Please refer to ilib-loctool's [plugin information](6-index).

### Basic Operation
1. Create a project.json configuration file for your project
2. Run the loctool to produce a set of xliff files with new strings to translate in them
3. Send the xliff files to your translators for translation and, some time later, receive the translations back
4. Make the translations available into your project
5. Run the loctool again to produce a set of translated files and a set of new xliff files. The new xliff files contain all the new or changed strings since the last time that the loctool was ru