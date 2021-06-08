const deleteBtn = document.getElementById("deletePost-btn");

async function deletePostFunc (event) {
  event.preventDefault();
  console.log('hello')
  const response = await fetch('/api/posts/deletePost/' + deleteBtn.dataset.count, {
    method: "DELETE",
    headers: {"Content-Type": "application/json"}
  })
if(response.ok) {
  console.log('success');
  document.location.replace('/dashboard')
} else {
  alert(response.statusText)
}
}

deleteBtn.addEventListener('click', deletePostFunc)