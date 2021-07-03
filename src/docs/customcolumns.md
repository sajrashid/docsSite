---
title: Custom Columns
stack: Gatsby & Shopify
slug: customcolumns
date: 2021-01-05T00:00:00+00:00
---

# Custom Columns

 Add icons, modify column headings. Use custom colums to render images, add background colours etc. All input is auto sanitised using <strong>[dompurify](https://github.com/cure53/DOMPurify)</strong>. 

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
