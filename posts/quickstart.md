---
title: Quick Start
description: intallation & simple examples
date: 2020-01-07T00:00:00+00:00
tags:
  - Yarn
  - Install
  - QuickStart
  - JSON
layout: layouts/doc.njk
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

<sub>Id columns are not required, **although  advised**</sub>

### Provide Data
 ```js
   const json = [
     { Name: "Tye", Email: "ttorr0@ucoz.com", IsRetired: true, Department: "Marketing"},
     { Name: "Marna", Email: "mverbeke1@admin.ch", IsRetired: false, Department: "Business Development"},
     { Name: "Becca", Email: "bboddie2@clickbank.net", IsRetired: true, Department: "Accounting"}
  ];
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
