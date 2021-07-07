---
title: Live Data
description: intallation & simple examples
date: 2021-01-01T00:00:00+00:00
tags:
  - Live Data
  - Data
layout: layouts/post.njk
---


# Live Data

### Fetch Data

 ```js
    const [json, setJson] = useState([])
    useEffect(() => {
        async function fetchAPI() {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url)
            const json = await response.json()
            setJson(json)
        }
        fetchAPI()
      }, [])
 ```

Todo example sandbox

