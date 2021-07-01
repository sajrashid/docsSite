---
title: Basics
stack: React
slug: basics
date: 2021-02-01T00:00:00+00:00
thumb: ../images/thumbs/skate.png
featuredImg: ../images/featured/skate-banner.png
---
## Motivation

Sometimes, you just want a simple easy start component. perhaps you're just prototyping. some componenets are opinionated about the UI or require significant plumbing. Finding one was proving a challenge so I created this. A CSS agnostic proper HTML table that does the basics, sorting, paging, has filters etc, plugin some Json and you're good to go.


## Installation

>yarn add react-dj-table

### Reference the table
```js
import Table from 'react-dj-table'
```
Regular array json data, <b>Id</b> column is not mandatory.
### Provide Data
 ```js
    alert('click to copy 💾');
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
    selectable: true,
    selectedRowCss: "selectedRow"
  };

```
```html
<Table json={json} options={options} />
```

https://codesandbox.io/s/crazy-lehmann-nt9e5
