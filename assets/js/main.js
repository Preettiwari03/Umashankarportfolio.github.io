const scriptURL = 'https://script.google.com/macros/s/AKfycbzhaR99IynD2hKrEY8J9wy9hMgN9d9cEnwFusevH3Oz9ZJll0oG4_7OvrRav-yF8aeYqg/exec'
const form = document.forms['contactform']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
//   .then(() => {  window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})