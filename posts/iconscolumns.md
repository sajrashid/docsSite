---
title: Icon Columns
description: examples with various css framework
date: 2020-07-06T00:00:00+00:00
tags:
  - ICONS 
  - Customisation
  - Columns 
  - Custom HTML
  - ICONS
layout: layouts/doc.njk
---

The table support loading any valid markup, font icons, images including svgs directly into the table headers.

### Font Icon
 ```js
    const options = {
    iconCols: [{ email: '<i class="envelope icon"></i>Email' }]
    };
```

### SVG Icon
 ```js
    import YourSvg from "./img.svg";
```

 ```js
    const options = {
    iconCols: [
      {
        Department: `<span style="position:relative; top:-0.3em;"> <img src=${YourSvg} style="width:1.5em;height:1.5em; position:relative; top:0.4em;" /> Dept </span>`
      }
    ]
   };
```


```html
  <Table json={json} options={options} />
```
The Tailwind [example](https://codesandbox.io/s/testing-forked-meysj?file=/index.js) uses [HeroIcons](https://heroicons.com/)
