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
any correct table css styles should work`

see the second example is basics if you want to use standard css

Utility css require adding table styles to specific elements *react-dj-table* supports utility type syntax

**TailWind example**
 ```js

 const options = {
    tableCss: "table-fixed cursor-pointer w-full",
    cellCss: "break-words  border p-4 ",
    pagerCss: "pager",
    pageable: true,
    theadCss: "bg-blue-500 text-gray-200 px-8 py-4",
    selectable: true,
    selectedRowCss: "selectedRow"
  }

```

https://codesandbox.io/s/testing-forked-meysj


see more... https://css-tricks.com/complete-guide-table-element/



