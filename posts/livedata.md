---
title: Live Data
description: intallation & simple examples
date: 2021-05-11T00:00:00+00:00
tags:
  - Live Data
  - Data
layout: layouts/doc.njk
---
### Fetch Data

 ```js
    const [json, setJson] = useState([])
    useEffect(() => {
        async function fetchAPI() {
            const url = 'https://jsonplaceholder.typicode.com/docs'
            const response = await fetch(url)
            const json = await response.json()
            setJson(json)
        }
        fetchAPI()
      }, [])
 ```

Todo example sandbox

