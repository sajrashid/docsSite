---
title: Pagination
stack: Gatsby & Shopify
slug: pagination
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
    };
```
```html
  <Table json={json} options={options} />
```

https://codesandbox.io/s/damp-waterfall-zb480

