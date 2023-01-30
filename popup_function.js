function blur_dashboard() {
    let a = document.getElementById("dashboard");
    a.classList.toggle("mystyle");

    let b = document.getElementById("main_section");
    b.classList.toggle("mystyle");

    let popup_deposit = document.getElementById("popup_deposit");
    popup_deposit.classList.toggle("mystyle");
    // Also updated the width of the date which is in header.
    //when click on deposit the mystyle class will be added to the main and dashboard section .
}

function blur_withdraw() {
    let d = document.getElementById("dashboard");
    d.classList.toggle("mystyle");

    let c = document.getElementById("main_section");
    c.classList.toggle("mystyle");
    
    let popup_withdraw = document.getElementById("popup_withdraw");
    popup_withdraw.classList.toggle("mystyle");

    // Also updated the width of the date which is in header.
    //when click on deposit the mystyle class will be added to the main and dashboard section .
}

function blur_edit(){
    let e = document.getElementById("dashboard");
    e.classList.toggle("mystyle");

    let f = document.getElementById("main_section");
    f.classList.toggle("mystyle");
    
    let popup_edit = document.getElementById("popup_edit");
    popup_edit.classList.toggle("mystyle");

    // Also updated the width of the date which is in header.
    //when click on deposit the mystyle class will be added to the main and dashboard section .
}