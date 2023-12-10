
export const getTodos = (param?: number) => fetch(`https://jsonplaceholder.typicode.com/todos/${param || '?_limit=10'}`)
      .then(response => {
        if (response.ok) return response.json()
        throw new Error('Network response was not ok.')
        })
        .catch(error => console.log(error));