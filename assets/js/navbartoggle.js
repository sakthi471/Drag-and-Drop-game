


const menubar = document.querySelectorAll('.menubar');


for (var i = 0; i < menubar.length; i++) {
        var obj=menubar[i]
        obj.addEventListener("click", () => {
       
        const menulist = document.querySelector('.menulist');
        menulist.classList.toggle("show");


    });
}