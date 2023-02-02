const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    ...options.headers,
    "X-CSRF-Token": csrfToken,
    Accept: "application/json"
  };

  // return await fetch(url, options);
  // const response = await fetch(url, options);
  return fetch(url, options) 
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw response;
      }
    })
    // .then(data => console.log(data))
    // .catch(error => console.log(error.statusText)) 
  // return response.json();
}

export const followerUser = function(id){
  return customFetch(`/users/${id}/follow`, {method: 'post'})
};

export const unfollowerUser = function(id){
  return customFetch(`/users/${id}/follow`, {method: 'delete'})
};
// export const unfollowerUser(id) = ;

// export const foo = "bar"; 

export const fetchTweets = function(options = {}) {
  return customFetch(`/tweets?type=${options.type}&offset=${options.offset}`)
};
