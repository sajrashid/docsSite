---
title: Table CSS
stack: Next.js
slug: tablecss
date: 2021-01-18T00:00:00+00:00
thumb: ../images/thumbs/drums.png
featuredImg: ../images/featured/drums-banner.png
---

## CSS

Outputs a standard css agnostic table.
Works with table css.

<sub>see the second example in basics if you want to use standard css.</sub>

Utility css require adding table styles to specific elements *react-dj-table* supports utility type syntax.

**TailWind example**
 ```js
 const options = {
    tableCss: "table-fixed cursor-pointer w-full",
    cellCss: "break-words  border p-4 ",
    theadCss: "bg-blue-500 text-gray-200 px-8 py-4",
    selectable: true,
    selectedRowCss: "selectedRow"
  }

```

https://codesandbox.io/s/testing-forked-meysj

**Sematic UI React example**
```js
   tableCss: "ui fixed red table",
```
https://codesandbox.io/s/basicoptions-forked-ugb9g

see more... https://css-tricks.com/complete-guide-table-element/



