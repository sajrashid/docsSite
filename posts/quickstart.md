---
title: Quick Start
description: intallation & simple examples
date: 2021-06-07T00:00:00+00:00
tags:
  - Yarn
  - Install
  - QuickStart
  - JSON
layout: layouts/post.njk
eleventyNavigation:
    key: QuickStart
order: 1
---

## Installation

>yarn add react-dj-table

### Reference the table
```js
   import Table from 'react-dj-table'
```
The table expects an array of JSON objects, nothing special just regular tabular json.

<sub>Id columns are not required</sub>

### Provide Data
 ```js
    json=[{id:0, name:'snowy',age: 4, desc:'fluffy',isParent:true},
          {id:1, name:'felix',age: 2, desc:'tricky',isParent:false}]
```
### Add Table Component
```html
   <Table json={json} />
```

https://codesandbox.io/s/mystifying-diffie-qgrpp

### Add Options
<sub>Options are not mandatory.</sub>

 ```js
    const options = {
        sortable:true,
        selectable: true,
        selectedRowCss: "selectedRow"
    };

```
```html
    <Table json={json} options={options} />
```

https://codesandbox.io/s/crazy-lehmann-nt9e5
