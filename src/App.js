import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css'

import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge'
import BookList from './components/BookList'
import books from './data/fantasy.json'
import SingleBook from './components/SingleBook'
import Selected from './components/Selected'

function App() {
  return (
    <div className="App">
      <WarningSign message="This is my message!"/>
      <MyBadge text="My text goes here" color="secondary"/>
      <BookList array={books}/>
      <SingleBook />
      <Selected />
    </div>
  );
}

export default App;

// import JSONDATA from './data/fantasy.json'
// import {useState} from 'react'

// function App(){
//   const [searchTerm, setSearchTerm] = useState('')

//   return (
//     <div className='App'>
//       <input type='text' placeholder='Search...' onChange={event => {setSearchTerm(event.target.value)}} />
//       {JSONDATA.filter((val) => {
//         if (searchTerm == '') {
//           return val
//         } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
//           return val
//         }
//       }).map((val, key) => {
//         return (
//           <div className='title' key={key}> 
//             <p> {val.title} </p> 
//           </div>
//         ) 
//       })}
//     </div>
//   )
// }

// export default App

// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import MyNavbar from './components/MyNavbar'
// import MyFooter from './components/MyFooter'
// import MyJumbotron from './components/MyJumbotron'
// import Latest from './components/Latest'

// function App() {
//   return (
//     <div>
//         <MyNavbar title="Marcy's Book Store" color="dark" /> 
//         <MyJumbotron />
//         <h2 className="pb-4">Latest Releases from Fantasy</h2>
//         <Latest />
//         <MyFooter />
        
//     </div>
//   )
// }

// export default App