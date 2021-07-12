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

The table is easily able to render and page ten of thousands of rows, however there is a cost to rendering data types dynamically. The cost of reflection increases proportianally with the size of your dataset.

In practice the size of your dataset introduces limitations ie:- filtering larger datasets just takes longer.

Specifying the column types such as **booleans** and especially <strong>identity columns</strong>, are likely to help with performance.

<sub>sever side paging will be implented in a future release</sub>

### Search filtering
on large volume data sets a debounce should be added to the search as the ui may feel sticky while the dataset is filtered

Todo add debounce example

### Dates
The table does not attempt to infer dates, as JSON dates are strings and not date types. Although parsing a date type is perfectly valid, the performance loss is not inconsequental. As such date columns should be specified with the<strong> isDateCols</strong> option, or they will be treated as strings.

The example below contains 5 columns with 10,000 rows the id column is hidden, nb: this is running on a low powered sandbox, is there is any noticeable performance degradation ? 

https://codesandbox.io/s/10000-row-example-npxvq

Todo add 100,000k row example
