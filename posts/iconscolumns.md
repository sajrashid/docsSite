---
title: Icon Columns
description: examples with various css framework
date: 2021-06-01
tags:
  - ICONS 
  - Customisation
  - Columns 
  - Custom HTML
  - ICONS
layout: layouts/post.njk
---
# Custom Columns

  All input is auto sanitised using <strong>[dompurify](https://github.com/cure53/DOMPurify)</strong>. 

### Custom Column options
 ```js
    const options = {
    tableCss: "ui fixed green table",
    iconCols: [{ email: '<i class="envelope icon"></i>Email' }]
   
   };
```
```html
  <Table json={json} options={options} />
```
k
