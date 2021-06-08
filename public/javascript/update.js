const updateBtn = document.querySelector(".btn-primary");

async function sendToUpdatePage(event) {
  event.preventDefault();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1];
  const title = document.querySelector("#post-title").placeholder;
  const content = document.querySelector("#post-content").placeholder ;

  if(updateBtn) {
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      // id: id,
      title,
      content
    }),
    headers: {"Content-Type": "application/json"}
  });
  
  if(response.ok) {
    console.log('success');
    document.location.replace('/dashboard');
    } 
  } 
  else {
    alert(response.statusText)
  }
};

updateBtn.addEventListener('click', sendToUpdatePage);