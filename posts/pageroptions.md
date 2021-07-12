---
title: Pager Options
stack: Gatsby & Shopify
slug: pageroptions
date: 2020-04-08T00:00:00+00:00
tags:
  - Pager
  - Pagination
layout: layouts/doc.njk
---
### Add Options
 ```js
    const options = {
      pageable: true,
      pagerCss: "pager",
      pageSize: 5,
      tableCss: "ui fixed green table",
      customCols: [
        {
          Avatar:
            '<div style="min-height:5em"> <img style="height:4em"  decoding="async" src=${Avatar}></img></div'
        }
      ]
    };
```
```html
  <Table json={json} options={options} />
```

https://codesandbox.io/s/damp-waterfall-zb480

