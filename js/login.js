function change(t) {
  switch (t) {
    case "login":
      $("main").removeClass().addClass("login");
      break;
    case "register":
      $("main").removeClass().addClass("register");
      break;
  }
}
