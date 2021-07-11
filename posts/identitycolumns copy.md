---
title: Identity Columns
description: intallation & simple examples
date: 2021-11-06T00:00:00+00:00
tags:
  - Identity
  - Columns
layout: layouts/doc.njk
---
## NOTE
Although identity columns are not required, where there is non uniquedata underdesiable behaviour may be caused, row selection will cause duplicate rows to be selected for example. Specifiying a identity column will also help with performance.

<code>Where possible identity columns should be an numerical json type.</code>

### Identity Column options

 ```js
    const options = {
    idCol:"userid",
    };

```
```html
   <Table json={json} options={options} />
```
