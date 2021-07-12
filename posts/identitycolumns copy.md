---
title: Identity Columns
description: intallation & simple examples
date: 2020-05-06T00:00:00+00:00
tags:
  - Identity
  - Columns
layout: layouts/doc.njk
---
## NOTE
Although identity columns are not required, where there is non duplicate data, undesiable behaviour may be caused. For example row selection will cause duplicate rows to be selected. **It is advisable to include an identity column**.

The first column [0] is assumed to be the identity column unless specified using **idCol**.

<sub>Where possible identity columns should be a numerical json type.</sub>

### Identity Column options

 ```js
    const options = {
    idCol:"userid",
    };

```
```html
   <Table json={json} options={options} />
```
<sub>Identity columns, can be removed from the UI, see [Hidden Columns](/posts/hiddencolumns/)</sub>
 