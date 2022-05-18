import React from 'react';
import AddPostForm from './Components/AddPostForm';
import PostsList from './Components/PostsList';

const App = () => {
  return (
    <div className="App">
       <AddPostForm />
      <PostsList />
     
    </div>
  );
};
export default App;