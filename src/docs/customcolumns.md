---
title: Custom Columns
stack: Gatsby & Shopify
slug: customcolumns
date: 2021-01-05T00:00:00+00:00
thumb: ../images/thumbs/food.png
featuredImg: ../images/featured/food-banner.png
---

### Customising Columns

`pass icons, change column headings and pass custom HTML and css into the table headers, the input is safely sanitised using dompurify.`


 ```js
   options={
           labelCols:[{'name':'Name'},{'col2':'Column2'}],

           iconCols: [{ 'email': '<i class="envelope icon"></i>Email' },
                      { 'Avatar': '<i class="id badge icon"></i>Avatar' }],

           // eslint-disable-next-line no-template-curly-in-string
           customCols: [{ 'Avatar': '<div style="min-height:6em"><img  decoding="async" src=${Avatar}></img></div' }] 
           //adding min height reduces loading flash as image cells are not resized vertically
           }
```
```html
<Table json={json} options={options} />
```
https://codesandbox.io/s/ynn88nx9x?view=split
