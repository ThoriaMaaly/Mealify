document.getElementById('sun').addEventListener("click", function () {

    this.classList.toggle('fa-moon');
    var sections = document.querySelectorAll(".darkmode");
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.toggle('bg-dark');

    };
    document.body.classList.toggle('bg-dark');

    var allh2=document.getElementsByTagName('h2');
    for (var i = 0; i < allh2.length; i++) {
        allh2[i].classList.toggle('text-white');

    };
    var allh3=document.getElementsByTagName('h3');
    for (var i = 0; i < allh3.length; i++) {
        allh3[i].classList.toggle('text-white');

    };
    var allh4=document.getElementsByTagName('h4');
    for (var i = 0; i < allh4.length; i++) {
        allh4[i].classList.toggle('text-white');

    };
    var allp=document.getElementsByTagName('p');
    for (var i = 0; i < allp.length; i++) {
        allp[i].classList.toggle('text-white');

    };
    document.getElementById('yotube').classList.toggle('text-white');
  
}


)
