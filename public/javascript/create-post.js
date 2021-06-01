const submitPostBtn = document.querySelector("#submitPostBtn");

async function submitPostFunc (event) {
  event.preventDefault();

  const content = document.querySelector('#post-content').value;
  const title = document.querySelector('#post-title').value;

  if(title && content) {
  const response = await fetch('/api/posts/', {
    method: "POST",
    body: JSON.stringify({
      title,
      content
    }),
    headers: ({ 'Content-Type': 'application/json' })
  });

  if(response.ok) {
    console.log(response);
    document.location.replace('/dashboard')
  } else {
    alert(response.statusText)
  }
}
};

submitPostBtn.addEventListener('click', submitPostFunc);