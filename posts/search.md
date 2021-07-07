---
title: Search & Filter
description: intallation & simple examples
date: 2021-06-03T00:00:00+00:00
tags:
  - Search
  - Filter
layout: layouts/post.njk
---


# Search & Filter

## Fuzzy search
Search supports complex filter options & rules, on a per column basis or globally (all columns). If <strong>filterOptions</strong> are not specfied all columns are searched.

### Filter options 

`supports multi keywords`

**Usage**
 ```js
    const options = {
        searchInputCss: 'searchInputCss',
        searchable: true,
    }
```

```html
   <Table json={json} />
```

