import { GET_POSTS, NEW_POST } from "./types";
import axios from 'axios'
// export const getPosts = () => dispatch => {
//   console.log("its fetching yeah....");

//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(posts =>
//       dispatch({
//         type: GET_POSTS,
//         payload: posts
//       })
//     );
// };
export const getPosts = () => dispatch => {
  console.log("its fetching yeah....");

//   axios.get("https://jsonplaceholder.typicode.com/posts")
//     // .then(res => res.json())
//     .then(posts =>
//       dispatch({
//         type: GET_POSTS,
//         payload: posts
//       })
//     );
//     .catch(err => (error) {
//         console.log(error);
//       });
//       .then(d => () {
//         console.log('sucess');
//       }); 



axios.get('https://jsonplaceholder.typicode.com/posts', {
  
  })
  .then(function (response) {
    console.log(response.data);
    dispatch({
                type: GET_POSTS,
                payload: response.data
              })
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  
};


export const createPost = postData => dispatch => {
  console.log("create post action called");

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
