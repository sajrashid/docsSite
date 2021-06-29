---
title: Table CSS
stack: Next.js
slug: tablecss
date: 2021-01-18T00:00:00+00:00
thumb: ../images/thumbs/drums.png
featuredImg: ../images/featured/drums-banner.png
---

###react-dj-table css

`Outputs a standard css agnostic table.
the example css belows works with any HTML table element`

**example**
 ```css
    table {
  font-family: 'Arial';
  margin: 25px auto;
  border-collapse: collapse;
  border: 1px solid #eee;
  border-bottom: 2px solid #00cccc;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.05), 0px 20px 20px rgba(0, 0, 0, 0.05), 0px 30px 20px rgba(0, 0, 0, 0.05);
}
table tr:hover {
  background: #f4f4f4;
}
table tr:hover td {
  color: #555;
}
table th, table td {
  color: #999;
  border: 1px solid #eee;
  padding: 12px 35px;
  border-collapse: collapse;
}
table th {
  background: #00cccc;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
}
table th.last {
  border-right: none;
}

```

```html
<Table json={json} />
```

https://codesandbox.io/s/ynn88nx9x?view=split


see more... https://css-tricks.com/complete-guide-table-element/

[![Netlify Status](https://api.netlify.com/api/v1/badges/ad1de4da-ad86-4c8f-a533-732539d451a7/deploy-status)](https://app.netlify.com/sites/jolly-hodgkin-af839c/deploys)


