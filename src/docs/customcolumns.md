---
title: Custom Columns
stack: Gatsby & Shopify
slug: customcolumns
date: 2021-01-05T00:00:00+00:00
thumb: ../images/thumbs/food.png
featuredImg: ../images/featured/food-banner.png
---

### Custom Columns

 add icons mpodify column headings
 use customColums to render images, or custom HTML & CSS the input is sanitised using [dompurify](https://github.com/cure53/DOMPurify).


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
