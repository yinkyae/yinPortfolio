document.addEventListener("DOMContentLoaded", function () {
   
    setTimeout(() => {
      var slideInElement = document.querySelector('.slide-in');
      slideInElement.classList.add('show');
    }, 800);


    setTimeout(() => {
      console.log("hello");
      var slideInElement2 = document.querySelector('.slide-in2');
      slideInElement2.classList.add('show');
    }, 1600);
   

    setTimeout(() => {
      console.log("hello");
      var slideInElement3 = document.querySelector('.slide-in3');
      slideInElement3.classList.add('show');
    }, 2400);

  });
  