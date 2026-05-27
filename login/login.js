// LOGIN

const loginForm =
document.getElementById("loginForm");

if(loginForm){

  loginForm.addEventListener(
  "submit",

  function(e){

    e.preventDefault();

    const username =
    document.getElementById("username").value;

    const password =
    document.getElementById("password").value;

    const savedUser =
    JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if(

      (username === "admin" &&
      password === "123")

      ||

      (

        savedUser &&
        username === savedUser.username &&
        password === savedUser.password

      )

    ){

      localStorage.setItem(
        "loggedInUser",
        username
      );

      alert("Login berhasil!");

      window.location.href =
      "../index.html";

    }else{

      alert(
        "Username atau password salah!"
      );

    }

  });

}

// REGISTER

const registerForm =
document.getElementById("registerForm");

if(registerForm){

  registerForm.addEventListener(
  "submit",

  function(e){

    e.preventDefault();

    const username =
    document.getElementById("username").value;

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    localStorage.setItem(

      "registeredUser",

      JSON.stringify({

        username,
        email,
        password

      })

    );

    alert("Register berhasil!");

    window.location.href =
    "login.html";

  });

}

// FORGOT PASSWORD

const forgotForm =
document.getElementById("forgotForm");

if(forgotForm){

  forgotForm.addEventListener(
  "submit",

  function(e){

    e.preventDefault();

    const username =
    document.getElementById(
      "forgotUsername"
    ).value;

    const savedUser =
    JSON.parse(
      localStorage.getItem(
        "registeredUser"
      )
    );

    if(

      savedUser &&
      username === savedUser.username

    ){

      alert(
        "Password kamu adalah: " +
        savedUser.password
      );

    }else{

      alert(
        "Username tidak ditemukan!"
      );

    }

  });

}
