---
layout: post
title: "Playing with Google Apps Script"
date: 2013-12-03 00:52
---
I wrote a google apps script for a spreadsheet.
I've never done it before and I hope not to to do it again.

The reason I've wrote it was to automate some tasks on my dad's budget spreadsheet:

* Create a new row in a given place with a given formula.
* Duplicate a document used as template.

## Insert a row

I created a template row and made it hidden. Then my function uses it to create 
a new one and place it in the right place. Everything gets copied,
including the formulas.

    function newLine() {
      var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = spreadsheet.getActiveSheet();
      sheet.insertRowsAfter(10, 1);
      sheet.getRange("A10:F10").copyTo(sheet.getRange("A11:F11"));
    }

## Create a new document

I created a default document to be used as a template for all budgets.
Then I need a function to duplicate that document (teaching my dad
wasn't working).

    function newSheet() {
      var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = spreadsheet.getSheetByName('Default')
      sheet.copyTo(spreadsheet).setName("Novo orçamento");
    }

## Wrap it up

I made both functions available on the top menu, as seen in the image

![google-apps-pring](/images/2013/12/google-apps-print.png)

And the full script 

    function newLine() {
      var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = spreadsheet.getActiveSheet();
      sheet.insertRowsAfter(10, 1);
      sheet.getRange("A10:F10").copyTo(sheet.getRange("A11:F11"));
    }

    function newSheet() {
      var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = spreadsheet.getSheetByName('Default')
      sheet.copyTo(spreadsheet).setName("Novo orçamento");
    }

    // The onOpen function is executed automatically every time a Spreadsheet is loaded
    function onOpen() {
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var menuEntries = [];

      menuEntries.push({name: "Novo orçamento", functionName: "newSheet"});
      menuEntries.push(null);
      menuEntries.push({name: "Adicionar novo produto", functionName: "newLine"});

      ss.addMenu("Orçamento", menuEntries);
    }

It took a whole morning.
