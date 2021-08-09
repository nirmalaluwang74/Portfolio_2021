

    let showEl = document.getElementById("showMenu")
    let hideEl = document.getElementById("hideMenu")
    let navlinksEl = document.getElementById("nav-links")


    // console.log(navlinksEl)

    showEl.addEventListener("click", () => {
        navlinksEl.style.right = "5%";
    })

    hideEl.addEventListener("click", () => {
        navlinksEl.style.right = "-45%";
    })

    // -----portfolio----

    let resumeShowEl = document.getElementById("resume-showMenu")
    let resumeHideEl = document.getElementById("resume-hideMenu")
    let resumeNavlinksEl = document.getElementById("resume-nav-links")


    console.log(resumenavlinksEl)

    resumeShowEl.addEventListener("click", () => {
        resumeNavlinksEl.style.right = "5%";
    })

    resumeHideEl.addEventListener("click", () => {
        resumeNavlinksEl.style.right = "-45%";
    })



function validateForm() {
    let name =  document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    let email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
    let subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Subject cannot be empty";
        return false;
    }
    let message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";
  }