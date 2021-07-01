---
title: Custom Columns
stack: Gatsby & Shopify
slug: customcolumns
date: 2021-01-05T00:00:00+00:00
thumb: ../images/thumbs/food.png
featuredImg: ../images/featured/food-banner.png
---

### Customising Columns

pass icons, change column headings and pass custom HTML and css into the table headers, the input is safely sanitised using dompurify.


 ```js
    options = {
     //tbale css semantic ui react 
    tableCss: "ui fixed green table",
    iconCols: [{ email: '<i class="envelope icon"></i>email' }],
    customCols: [
      {
        Avatar:
          '<div style="min-height:5em"><img  decoding="async" src=${Avatar}></img></div'
      }
    ]
  };
```
```html
<Table json={json} options={options} />
```
https://codesandbox.io/s/currying-sunset-dwik5
