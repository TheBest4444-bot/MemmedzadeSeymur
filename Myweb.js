const links = document.querySelectorAll("nav a");


links.forEach(link => {
    link.addEventListener("click", function (e) {

        e.preventDefault();

        const id = this.getAttribute("href").substring(1);

        showPage(id);

        // URL yadda saxlayır
        history.pushState(null, null, "#" + id);

    });
});


function showPage(id){

    const pages = document.querySelectorAll(".page");

    pages.forEach(page=>{
        page.classList.remove("active");
    });


    const current = document.getElementById(id);

    if(current){
        current.classList.add("active");
    }


    links.forEach(link=>{
        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + id){
            link.classList.add("active");
        }
    });

}



// səhifə yenilənəndə işləyir
window.addEventListener("load", ()=>{

    const page = location.hash.substring(1);


    if(page && document.getElementById(page)){
        showPage(page);
    }
    else{
        showPage("home");
    }

});

function toggleMenu() {

    const sidebar = document.querySelector(".left");
    const icon = document.getElementById("menuIcon");

    sidebar.classList.toggle("active");

    if (sidebar.classList.contains("active")) {
        icon.innerHTML = "✕";
    } else {
        icon.innerHTML = "☰";
    }

}
