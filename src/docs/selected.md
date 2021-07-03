---
title: Row Selection
stack: React
slug: selected
date: 2021-02-01T00:00:00+00:00
---

### Row Selection


### Add Options
<sub>Options are not mandatory.</sub>

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

 <Table json={bots} options={options} rowClick={handleClick} />

https://codesandbox.io/s/row-selection-wo0k4?file=/row.css
