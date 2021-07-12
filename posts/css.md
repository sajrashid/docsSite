---
title: CSS.
description: examples with various css framework
date: 2020-02-05T00:00:00+00:00
tags:
  - CSS
  - Tailwind
  - Semantic UI React 
  - Bootstrap
layout: layouts/doc.njk
sortName: CSS
---

react-dj-table uutputs a semantically correct, css agnostic HTML table. CSS abstraction provides flexiblity and tables are easy to style.

<sub>standard css example, see the second example in basics.</sub>

Utility type css frameworks, like Tailwind, add  styles to HTML elements.

### Tailwind example
 ```js
   const options = {
    tableCss: "table-fixed cursor-pointer w-full",
    cellCss: "break-words  border p-4 ",
    theadCss: "bg-blue-500 text-gray-200 px-8 py-4",
    selectable: true,
    selectedRowCss: "bg-blue-100"
   }

```
<sub>TODO add tailwind groups to child pager elements</sub>

https://codesandbox.io/s/testing-forked-meysj

### Sematic UI React responsive example
```js
  const options = {tableCss: "ui fixed red table"}
```
https://codesandbox.io/s/basicoptions-forked-ugb9g

### BootStrap responsive example
```js
  const options = {tableCss: "table"}
```

https://codesandbox.io/s/bootstap-demp-o2562


see more... https://css-tricks.com/complete-guide-table-element/





