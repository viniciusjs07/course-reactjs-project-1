import './App.css';
import { Component } from 'react';

class App extends Component {

 state = {
    posts: []
    }

  componentDidMount(){
    this.loadPosts()
  }

  loadPosts = async () => {
    const postResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos')
    const [posts, photos] = await Promise.all([postResponse, photoResponse])
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return {...post, cover: photosJson[index]?.url}
    })
    this.setState({posts: postsAndPhotos})
  }

    render() {
    const {posts} = this.state
     return (
    <section className='container'>
    <div className='posts'>
     {posts.map(post =>(
      <div className='post'>
        <img src={post?.cover} alt={post.title}></img>
       <div key={post.id} className='post-content'>
         <h1>{post.title}</h1>
         <p>{post.body}</p>
        </div>
      </div> 
     ))
     }
    </div>
    </section>
  );
        
    }
  
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
