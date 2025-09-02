addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("login-form").addEventListener('submit', login);
})

async function login(event) {
  event.preventDefault();
  
  var loginFormElement = document.getElementById("login-form")

  var emailOrName = loginFormElement.querySelector("#email_name").value
  var password = loginFormElement.querySelector("#password").value
  var loginInfoBannerElement = loginFormElement.querySelector("#login-info-banner")
  var isChecked = loginFormElement.querySelector('#remember-password').checked;
  loginInfoBannerElement.innerHTML = ""
  if(emailOrName.length === 0 || password.length === 0)
  {
    loginInfoBannerElement.innerHTML = "The credentials that you provided were invalid"
    return false;
  }

  var json = await (await fetch(`${location.protocol === 'https:' ? "https" : "http"}://${window.location.host}/api`, {
    method: "POST",
    body: JSON.stringify({ id: 0, email_name: emailOrName, password: password }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })).json() //Ugly! FUCK THIS SHIT WHO WHY...

  switch(Number(json.id))
  {
    case 0: //Logged in
    if(json.r != 0) {
      loginInfoBannerElement.innerHTML = json.error
      return false
    }
    
    console.log('Login exitoso, UUID recibido:', json.uuid);
    
    // Usar localStorage en lugar de cookies (más confiable en Replit)
    localStorage.setItem('uuid', json.uuid);
    if(isChecked) {
      localStorage.setItem('rememberLogin', 'true');
    }
    
    console.log('UUID guardado en localStorage:', localStorage.getItem('uuid'));
    
    // Redirigir inmediatamente
    window.location.replace("/dashboard.html");
  }
  return false;
}