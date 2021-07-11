---
title: Custom Columns
description: examples with various css framework
date: 2020-08-01
tags:
  - Custom 
  - Customisation
  - Columns 
  - Custom HTML
layout: layouts/doc.njk
sortName: Custom
---
 Use custom colums to render images, add background colours etc. All input is auto sanitised using <strong>[dompurify](https://github.com/cure53/DOMPurify)</strong>. 

### Custom Column options
 ```js
    const options = {
    pageable: true,
    pagerCss: "pager",
    pageSize: 5,
    tableCss: "ui fixed green table",
    customCols: [
      {
        Avatar:
          '<div style="min-height:4em"> <img style="height:3em"  decoding="async" src=${Avatar}></img></div'
      }
    ],
    iconCols: [{ email: '<i class="envelope icon"></i>Email' }],
    labelCols: [{ last_name: "LastName" }, { gender: "Gender" }]
   };
```
```html
  <Table json={json} options={options} />
```
https://codesandbox.io/s/custom-icon-label-columns-hxr8k
