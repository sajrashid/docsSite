---
title: Table CSS
stack: Next.js
slug: tablecss
date: 2021-01-18T00:00:00+00:00
thumb: ../images/thumbs/drums.png
featuredImg: ../images/featured/drums-banner.png
---

## CSS

Outputs a proper HTML css agnostic table.
Works with any standard table css.

<sub>standard css example, see the second example in basics.</sub>

Utility css framewroks like Tailwind add table styles to specific elements.

### TailWind example
 ```js
 const options = {
    tableCss: "table-fixed cursor-pointer w-full",
    cellCss: "break-words  border p-4 ",
    theadCss: "bg-blue-500 text-gray-200 px-8 py-4",
    selectable: true,
    selectedRowCss: "bg-blue-100"
  }

```

https://codesandbox.io/s/testing-forked-meysj

### Sematic UI React responsive example
```js
const options = {
      tableCss: "ui fixed red table",
    }
```
https://codesandbox.io/s/basicoptions-forked-ugb9g

see more... https://css-tricks.com/complete-guide-table-element/



