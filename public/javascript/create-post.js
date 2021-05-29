const submitPostBtn = document.querySelector("#submitPostBtn");

async function submitPostFunc (event) {
  event.preventDefault();

  const title = document.querySelector('#post-content').placeholder;
  const post_url = document.querySelector('#post-url').placeholder;

  if(title && post_url) {
  const response = await fetch('/api/posts', {
    method: 'post',
    body: JSON.stringify({
      title,
      post_url
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