
window.onload = function() {
  var password = prompt("Enter the password:");

  
  if (password !== null && password === 'bolambot2024') {
    
   
  } else {
  
    alert('Incorrect password. Access denied.');
    window.location.href = 'https://google.com'; 
  }
}
