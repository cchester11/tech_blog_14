const updateBtn = document.querySelector(".btn-primary");

async function sendToUpdatePage() {
  const title = document.querySelector("#post-title").value;
  const content = document.querySelector("#post-content").value;

  if(updateBtn) {
  const response = await fetch(`/api/posts/:id`, {
    method: "POST",
    body: JSON.stringify({
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
};

updateBtn.addEventListener('click', sendToUpdatePage);