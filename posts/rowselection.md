---
title: Row Selection
description: intallation & simple examples
date: 2021-06-03T00:00:00+00:00
tags:
  - Row
  - Select
  - Selection
layout: layouts/doc.njk
---

### Add Options

 ```js
    const options = {
    selectable: true,
    selectedRowCss: "selectedRow"
    };

```
### Add click handler to return the selected Row

 ```js
    const handleClick = (row) => {
    console.log(row)
    };
 ```
### Pass the click handler to the table
```js
    <Table json={bots} options={options} rowClick={handleClick} />
 ```
https://codesandbox.io/s/row-selection-wo0k4?file=/row.css
