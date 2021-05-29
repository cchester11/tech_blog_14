const createPostPageBtn = document.querySelector('#createPostPageBtn');

async function createNewPost() {
  
  document.location.replace('/createPost');
};

createPostPageBtn.addEventListener('click', createNewPost);

