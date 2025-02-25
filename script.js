function openLogin() {
    document.getElementById("loginDialog").classList.add("show");
    document.getElementById("loginDialog").style.display = "block";
}

function closeLogin() {
    document.getElementById("loginDialog").classList.remove("show");
    setTimeout(() => {
        document.getElementById("loginDialog").style.display = "none";
    }, 300);
}

function checkLogin() {
    var username = document.getElementById("username").value;

    if (username === "Tahir") {
        closeLogin();
        setTimeout(() => {
            document.getElementById("mainDialog").classList.add("show");
            document.getElementById("mainDialog").style.display = "block";
        }, 500);
    } else {
        document.getElementById("error-message").innerText = "Invalid Username!";
    }
}

function closeMainDialog() {
    document.getElementById("mainDialog").classList.remove("show");
    setTimeout(() => {
        document.getElementById("mainDialog").style.display = "none";
    }, 300);
}

function openDemoDialog() {
    document.getElementById("demoDialog").classList.add("show");
    document.getElementById("demoDialog").style.display = "block";
}

function closeDemoDialog() {
    document.getElementById("demoDialog").classList.remove("show");
    setTimeout(() => {
        document.getElementById("demoDialog").style.display = "none";
    }, 300);
}

function contactWhatsApp() {
    window.location.href = "https://wa.me/923001234567"; // Replace with actual number
}

function downloadApp() {
    alert("Downloading App...");
}
