---
title: Label Columns
description: examples with various css framework
date: 2021-06-01
tags:
  - LABELS 
  - Customisation
  - Columns 
layout: layouts/doc.njk
---

Use label colums to individually control the column titles, if you need to change case on all your colums use css <strong>text-transform</strong>

### Label Column options
 ```js
    const options = {
    labelCols: [{ last_name: "LastName" }, { gender: "Gender" }]
   
   };
```
```html
  <Table json={json} options={options} />
```
k
