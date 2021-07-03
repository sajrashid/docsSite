---
title: Live Data
stack: HTML & CSS
slug: livedata
date: 2021-01-01T00:00:00+00:00
---
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

