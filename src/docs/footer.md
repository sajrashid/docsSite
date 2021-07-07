---
path: "/docs/search"
type: "search"
title: Search & Filter
date: 2021-01-03T00:00:00+00:00
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

