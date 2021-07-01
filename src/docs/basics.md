---
title: Basics
stack: React
slug: basics
date: 2021-02-01T00:00:00+00:00
thumb: ../images/thumbs/skate.png
featuredImg: ../images/featured/skate-banner.png
---
## Installation

>yarn add react-dj-table

### Reference the table
```js
import Table from 'react-dj-table'
```
Regular array json data, <b>Id</b> column is not mandatory.
### Provide Data
 ```js
    json=[{id:0, name:'snowy',age: 4, desc:'fluffy',isParent:true},
          {id:1, name:'felix',age: 2, desc:'tricky',isParent:false}]
```
### Add Table Component
```html
<Table json={json} />
```
Options are not mandatory.

**Options**
 ```js
   options={
            tableCss:'cssClass',
            pageable:true, // enable paging
            selectable:false //row selection default is true
           }
```
```html
<Table json={json} options={options} />
```

https://codesandbox.io/s/mystifying-diffie-qgrpp
