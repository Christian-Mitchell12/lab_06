function font_control() {
        var border_R = document.getElementById("border_R").value;
        var border_G = document.getElementById("border_G").value;
        var border_B = document.getElementById("border_B").value;
        var width = document.getElementById("width").value;
        var bg_R = document.getElementById("bg_R").value;
        var bg_G = document.getElementById("bg_G").value;
        var bg_B = document.getElementById("bg_B").value;

        document.getElementById("paragraph").style.borderColor = `rgb(${border_R}, ${border_G}, ${border_B})`;
        document.getElementById("paragraph").style.backgroundColor = `rgb(${bg_R}, ${bg_G}, ${bg_B})`;
        document.getElementById("paragraph").style.borderWidth = width + "px";

}

