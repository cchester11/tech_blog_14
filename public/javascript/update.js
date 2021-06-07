const updateBtn = document.querySelector(".btn-primary");

async function sendToUpdatePage() {
  var id = updateBtn.getAttribute('id');

  if(id) {
  const response = await fetch('/api/posts/' + id, {
    method: "POST",
    body: JSON.stringify({
      id
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