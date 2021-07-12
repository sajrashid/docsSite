---
title: Date & Time
description: examples with various css framework
date: 2020-11-06T00:00:00+00:00
tags:
  - DateTime
  - Date
  - Columns
layout: layouts/doc.njk
---

Date is rendered in the browser using the browsers local date and time zone. 
Specify any date-time options that are supported by <strong>Dateto.LocaleDateString();</strong> [MDN Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)

Set <strong> dateCols:[{RetiredDate:''}]</strong> as an empty string to use locale defaults


### Date & Time Options
 ```js
   const options={
      dateCols:[{RetiredDate:'en-GB'}],
      dateOptions: { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' },
   }

 ```


