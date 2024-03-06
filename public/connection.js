

fetch('http://localhost:3000/api/projects')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));