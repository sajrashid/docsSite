---
title: Live Data
stack: HTML & CSS
slug: livedata
date: 2021-01-01T00:00:00+00:00
thumb: ../images/thumbs/coffee.png
featuredImg: ../images/featured/coffee-banner.png
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
see the sandbox for a complete example 

https://codesandbox.io/s/ynn88nx9x?view=split

complete example, similar example to the sandbox