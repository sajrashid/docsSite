---
title: Custom Columns
description: examples with various css framework
date: 2020-08-01
tags:
  - Custom 
  - Customisation
  - Columns 
  - Custom HTML
  - SVG
  - IMAGES
layout: layouts/doc.njk
sortName: Custom
---
 Use custom colums to render images (including svg's), add background colours etc. All input is auto sanitised using <strong>[dompurify](https://github.com/cure53/DOMPurify)</strong>. 

### Import any SVG's
 ```js
    import YourSvg from "./img.svg";
 ```

### Custom Column options
 ```js
    const options = {
    customCols: [
      {
        Avatar:
          '<div style="min-height:4em"> <img style="height:3em"  decoding="async" src=${Avatar}></img></div'
      },
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

https://codesandbox.io/s/custom-icon-label-columns-hxr8k
