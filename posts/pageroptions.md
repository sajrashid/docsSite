---
title: Pager Options
stack: Gatsby & Shopify
slug: pageroptions
date: 2021-01-08T00:00:00+00:00
tags:
  - Pager
  - Pagination
layout: layouts/post.njk
---
### Add Options
 ```js
    const options = {
      pageable: true,
      pagerCss: "pager",
      pageSize: 5,
      tableCss: "ui fixed green table",
      customCols: [
        {
          Avatar:
            '<div style="min-height:5em"> <img style="height:4em"  decoding="async" src=${Avatar}></img></div'
        }
      ]
    };
```
```html
  <Table json={json} options={options} />
```

https://codesandbox.io/s/damp-waterfall-zb480

```css
  /* styling the pager would again require passing lots of classes and 
  custom options, that can make config difficult
  for the sake of simplicity the pager is buit using standard css  */
  /* move the pager left or right by chaging float left/right */
  .pager {
    float: left;
    margin: 0 auto;
    box-shadow: 1px 3px 3px 0 #e2e2e2;
  }
  .pager > * {
    color: #eee;
    float: left;
    margin: 0 auto;
  }
  .pager {
    line-height: 1.8rem;
    margin-top: 0.5rem;
    padding: 0.4rem;
    min-height: 2.4em;
    border-radius: 0.3em;
  }

  .pager input {
    border: 1px solid #666;
    margin: 0 0.4rem 0 0.4rem;
    color: #666;
    border-radius: 0.3rem;
  }
  /* current page no */
  .pager input[type="number"] {
    position: relative;
    max-width: 3em;
    height: 2em;
    padding-left: 0.4rem;
    box-shadow: 1px 3px 3px 0 #e2e2e2;
  }
  .pager button {
    position: relative;
    font-size: 1.5em;
    padding: 0rem 0.8rem 0.2rem 0.8rem;
    margin: 0 0.3rem 0 0.6rem;
    border-radius: 0.3rem;
    border: none;
    color: #333;
    box-shadow: 1px 3px 3px 0 #e2e2e2;
  }
  .pager button:hover::after {
    position: absolute;
    opacity: 0.5;
    border-radius: 0.3em;
    font-size: 0.8em;
    padding-left: 0.5em;
    padding: em 0.4em 0.3em 0em;
    padding-right: 0.5em;
    background-color: rgb(44, 44, 44);
    top: 1e;
    top: 1.4em;
    line-height: 1.4em;
    color: #eee;
    content: attr(data-content);
    z-index: 100;
  }

  .pager button:hover {
    background-color: #e6ffff;
  }
  .tablecss .pager button:focus {
    outline: none;
  }

  /* targets number of pages without classname numberOfPages */
  .pager :nth-child(6) {
    position: relative;
    top: 0.1rem;
    font-size: 1rem;
    padding: 0 1rem 0 1rem;
    color: #333;
  }
  /* targets the last item show page count */
  .pager :nth-child(7) span {
    top: 0.2rem;
  }
  /* show select element 10 / 20 / 100 etc */
  .pager :nth-child(7) select {
    min-height: 2.2em;
    position: relative;
    /* top: 0.15rem; */
    margin-right: 0.7rem;
    border-radius: 0.3rem;
    padding-left: 0.3rem;
    box-shadow: 1px 3px 3px 0 #e2e2e2;
  }
  /*  move the search input left or right by chaging float left/right */
  .searchInputCss span {
    float: right;
    margin-bottom: 0.3rem;
  }
  .searchInputCss input {
    border-radius: 0.3rem;
    outline: none !important;
    border: solid 1px rgb(36, 36, 39);
    padding: 0.3rem;
  }
  .searchInputCss input:focus {
    outline: none !important;
    border: solid 1px #d3d3d3;
  }

  .pager button:disabled,
  button[disabled] {
    background-color: #cccccc;
    color: #666666;
    box-shadow: 0.02em 0 0.02em 0 rgba(26, 9, 9, 0.719);
  }

```