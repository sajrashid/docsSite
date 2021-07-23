---
title: Edit Modes
description: intallation & simple examples
date: 2021-06-06T00:00:00+00:00
tags:
  - Edit
  - CRUD
  - Editable
  - ReadOnly
layout: layouts/doc.njk
---
# Editing 

## Now released

### NOTE: update to v 1.1.6 contains bugfix for setting id on post.

<sub>Editing works without an id. The table will use the first columns values as an identity, duplicates will cause conflicts!</sub>

<sub>Ensure your first column is unique, you can always specify an id column via options</sub> **"idCol":"colname"** <sub>, recomended if your first column is not an identity type.</sub> 

### Edit example

 ```js
   const options = {
   editable: "true",
   readOnly:['Avatar'] // specify read-only edit cell
    ....
   }

```

```js
  const handleRowClick = (row, oldRowData, action, dispatch) => {
        mydispatch = dispatch
        
        if (action === 'SELECT') {
            console.log(action,row)
         // informational
         // returns row
        
        }
        if (action === 'VALIDATE') {
            console.log("VALIDATE")
            // old data what do you want to do
            // user has not clicked the update button 
            // and they have attempted to move to a different row
            // warn user they will loose the changes and to accept or reject
            setUserMessage('Warning: you have not saved your changes, click OK to go back, then click update to save your changes! Click Undo to undo your changes.')
            setMsgClassName('msgDiv warning msgDivShow')
            //dispatch({ type: ACTIONS.REJECTCHANGES})
        }
        if (action === "UPDATE") {
            console.log(action,row,oldRowData)
            // put or post data to DB or confirm changes, with the user 
            dispatch({ type: ACTIONS.CONFIRMUPDATE})  
             // save to DB
             // incase of failure call rejectchanges
        }

        if (action === "CREATE"){
            // informational 
            // user has clicked create
            console.log(action)
            // no confirm action is needed as it's a temp UI change 
            // action will be triggered next is insert unless users decides to cancel
           
        }
        if (action === "DELETE"){
            console.log(action)
            // delete from DB, once confirmed delete from table JSON
            // no need to refresh your data
            dispatch({ type: ACTIONS.CONFIRMDELETE})  
        }
         if (action === "INSERT"){
            console.log(action,row)
            // insert DB, once confirmed  from DB confirm
            // incase of failure call rejectchanges
            // no need to refresh your data
            dispatch({ type: ACTIONS.CONFIRMINSERT, payload: { id: 29 } })
        }
    }

```
Embedded sandbox see [Home Page](https://react-dj-table.netlify.app/) or open [here](https://codesandbox.io/s/full-example-sematic-ui-pageable-searchable-v151w?from-embed=&file=/index.js)


TODO more edit examples



