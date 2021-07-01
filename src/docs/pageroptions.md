---
title: Pager Options
stack: Gatsby & Shopify
slug: pageroptions
date: 2021-01-08T00:00:00+00:00
thumb: ../images/thumbs/shoes.png
featuredImg: ../images/featured/shoes-banner.png
---

**Options**
 ```js
   options={
            pageable:true, // enables paging
            pageSize:50 //items per page
            pagerCss:'cssClass' 
           }
```
```html
<Table json={json} options={options} />
```

```css
.pager {
   float: left;
   margin: 0 auto;
}
.pager > * {
    color: #eee;
    float: left;
    margin: 0 auto;
}

```

Todo codesanbox example

complete example, similar example to the sandbox

```css
.pager {
   float: left;
   margin: 0 auto;
   line-height: 1.8rem;
   margin-top: 0.5rem;
   padding: 0.4rem;
   background-color: rgba(59, 130, 246);
   min-height:3rem;
}
.pager > * {
    color: #eee;
    float: left;
    margin: 0 auto;
  
}

.pager .numberOfPages{
    display: inline-block;
    min-width:15rem;
    background-color: rgb(34, 115, 247);
    margin-left: 1rem;
    margin-right: 1rem;
    border-radius: 0.3rem;
}
.pager input {
    border: 1px solid #666;
    margin: 0 0.4rem 0 0.4rem;
    color: #666;
    border-radius: 0.3rem;
}
/* current page no */
.pager input[type='number']{
    position: relative;
    top:0.1rem;
    max-width: 3.2rem;
    padding-left: 0.4rem;
} 
.pager button {
    position: relative;
    font-size: 2rem;
    padding:0rem 0.8rem 0.2rem 0.8rem;
    margin: 0 0.3rem 0 0.6rem;
    border-radius: 0.3rem;
    box-shadow:0.02em 0 0.02em 0 rgba(26, 9, 9, 0.719) ;
}
.pager button:hover::after {
    position: absolute;
    opacity: 0.8;
    border-radius: 0.3rem;
    font-size: 0.8rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: rgb(44, 44, 44);
    bottom: -2rem;
    color: #eee;
    content: attr(data-content);
}

.pager button:hover{
    background-color: rgb(42, 61, 122);
}
.pager button:focus {
    outline: none;

}
/* targets number of pages without classname numberOfPages */
.pager :nth-child(6){
    position: relative;
    top:0.1rem;
    font-size: 1rem;
    padding:  0 1rem 0 1rem;
    color: #ddd;
}
/* targets the last item show page count */
.pager :nth-child(7){
    color: #333;
}
.pager :nth-child(7) span {
    top:0.2rem;
    color: #333;

}
/* show select element 10 / 20 / 100 etc */
.pager :nth-child(7) select {
  height: 1.6rem;
  position: relative;
  top:0.15rem;
margin-right: 0.7rem;
border-radius: 0.3rem;
padding-left: 0.3rem;
}

.pager button:disabled,
 button[disabled]{
  background-color: #cccccc;
  color: #666666;
  box-shadow:0.02em 0 0.02em 0 rgba(26, 9, 9, 0.719) ;
}
```