

import "./external.css"

function App() {
  const blogArr=[
    {
    id:1,
    title:'paragraph',
    description:'This is a paragraph to explain about react internal styling, You can style it by using style as object and apply to the needed element whereas in HTML we use style as string here we use it as key value pair'

    },
    {
      id:2,
      title:'paragraph',
    description:'This is a paragraph to explain about react internal styling, You can style it by using style as object and apply to the needed element whereas in HTML we use style as string here we use it as key value pair'

    },
    {
    id:3,
    title:'paragraph',
    description:'This is a paragraph to explain about react internal styling, You can style it by using style as object and apply to the needed element whereas in HTML we use style as string here we use it as key value pair'

    }
  ]
  const blog=blogArr.map((item)=>{
        return(
          <div className='blog' key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          </div>
        )
  })
  
  return (
    <div className="App">
     {blog}
    </div>
  );
}

export default App;
