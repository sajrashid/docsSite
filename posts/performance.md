---
title: Performance
description: intallation & simple examples
date: 2021-06-03T00:00:00+00:00
tags:
  - Performance
  - Identity
  - Columns
  - Types
layout: layouts/doc.njk
---

## Performance

###  General 

The table is easily able to render and page ten of thousands of rows, however there is a cost to rendering data types dynamically. Specifying the column types such as **booleans** and especially <strong>identity columns</strong>, will help to boost performance sometimes significantly. 
Is any of this likely to be an issue ? should you really ever send thousands of rows of data to a client ? possibly but it should be very rare.

<code>sever side paging will be implented in a future release</code>

### Search filtering
on large volume data sets a debounce should be added to the search as the ui may feel sticky while the dataset is filtered

Todo add debounce example

### Dates
The table does not attempt to infer dates as JSON dates are strings and not date types, altough parsing a date type is perfectly valid, the performance loss is not inconsequental. All date columns should be specified with the<strong> isDateCols</strong> option 

The following example contains 5 columns with 10'000 row the id column is hidden

See the example, don't forget this is running on a very low powered free sandbox and there is no notice perfoormance degradation

https://codesandbox.io/s/10000-row-example-npxvq

Todo add 100,000k row example
