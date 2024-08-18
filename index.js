window.onscroll = function() {
    var navbar = document.getElementById("fistHeader");
    
    // Mude o valor 100 para o número de pixels que você deseja antes de mudar a cor
    if (window.scrollY > 650) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };