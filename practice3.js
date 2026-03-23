function passwordCheck() {
        var password1 = document.getElementById("password1").value;
        var password2 = document.getElementById("password2").value;

        if (password1.length < 8) {
                alert("The first password needs to be at least 8 characters long.")
        } else if (password2.length < 8) {
                alert("The second password needs to be at least 8 characters long.")
        } else if (password1 != password2) {
                alert("The passwords don't match.")
        } else {
                alert("The passwords match and are long enough.")
        }
}

