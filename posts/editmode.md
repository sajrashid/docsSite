---
title: Edit Modes
description: intallation & simple examples
date: 2021-06-06T00:00:00+00:00
tags:
  - Edit
  - Editbale
layout: layouts/post.njk
---
# Editing 

## Not released in development, release due 14/07/2021

<sub>Editing works without an id. The table will use the first columns values as an identity, duplicates will cause conflicts!</sub>

<sub>Ensure your first column is unique, you can always specify an id column via options</sub> **"idCol":"colname"** <sub>, recomended if your first column is not an identity type.</sub> 

### Edit example
 ```js
   const options = {
   editable: "true",
    ....
   }

```

TODO codesandbox



