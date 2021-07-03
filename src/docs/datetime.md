---
title: Date & Time
stack: HTML & CSS
slug: datetime
date: 2021-01-01T00:00:00+00:00
---
# Date & Time

Date in rendered in the browser using the browsers Local date and time zone, you may specify any date-time  options that are supported by <strong>Dateto.LocaleDateString();</strong> [MDN Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)

you may also set <strong> dateCols:[{RetiredDate:''}]</strong> as empty string to use locale defaults


### Date & Time Options
 ```js
 const options={
      dateCols:[{RetiredDate:'en-GB'}],
      dateOptions: { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' },
 }

 ```


