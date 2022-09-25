let a = document.getElementById("home-display")
let b = document.getElementById("guest-display")

let count = 0 

function incOne_home(){
    count += 1
    a.textContent = count 
}

function incTwo_home(){
    count += 2
    a.textContent = count
}

function incThree_home(){
    count += 3
    a.textContent = count
}

function incOne_guest(){
    count += 1
    b.textContent = count 
}

function incTwo_guest(){
    count += 2
    b.textContent = count
}

function incThree_guest(){
    count += 3
    b.textContent = count
}