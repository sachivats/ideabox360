function changeImage(imgName, textNumber) {
    image = document.getElementById("image-box");
    image.src = imgName;
    switch (textNumber) {
        case 1:
            document.getElementById("jstext1").style.display = "block";
            document.getElementById("jstext2").style.display = "none";
            document.getElementById("jstext3").style.display = "none";
            document.getElementById("jstext4").style.display = "none";
            document.getElementById("jstext5").style.display = "none";
            document.getElementById("jsmenu1").style = "color: #3D3D3D; border-bottom: 1px solid #3D3D3D;"
            document.getElementById("jsmenu2").removeAttribute('style');
            document.getElementById("jsmenu3").removeAttribute('style');
            document.getElementById("jsmenu4").removeAttribute('style');
            document.getElementById("jsmenu5").removeAttribute('style');
            break;
        case 2:
            document.getElementById("jstext1").style.display = "none";
            document.getElementById("jstext2").style.display = "block";
            document.getElementById("jstext3").style.display = "none";
            document.getElementById("jstext4").style.display = "none";
            document.getElementById("jstext5").style.display = "none";
            document.getElementById("jsmenu1").removeAttribute('style');
            document.getElementById("jsmenu2").style = "color: #3D3D3D; border-bottom: 1px solid #3D3D3D;"
            document.getElementById("jsmenu3").removeAttribute('style');
            document.getElementById("jsmenu4").removeAttribute('style');
            document.getElementById("jsmenu5").removeAttribute('style');
            break;
        case 3:
            document.getElementById("jstext1").style.display = "none";
            document.getElementById("jstext2").style.display = "none";
            document.getElementById("jstext3").style.display = "block";
            document.getElementById("jstext4").style.display = "none";
            document.getElementById("jstext5").style.display = "none";
            document.getElementById("jsmenu1").removeAttribute('style');
            document.getElementById("jsmenu2").removeAttribute('style');
            document.getElementById("jsmenu3").style = "color: #3D3D3D; border-bottom: 1px solid #3D3D3D;"
            document.getElementById("jsmenu4").removeAttribute('style');
            document.getElementById("jsmenu5").removeAttribute('style');
            break;
        case 4:
            document.getElementById("jstext1").style.display = "none";
            document.getElementById("jstext2").style.display = "none";
            document.getElementById("jstext3").style.display = "none";
            document.getElementById("jstext4").style.display = "block";
            document.getElementById("jstext5").style.display = "none";
            document.getElementById("jsmenu1").removeAttribute('style');
            document.getElementById("jsmenu2").removeAttribute('style');
            document.getElementById("jsmenu3").removeAttribute('style');
            document.getElementById("jsmenu4").style = "color: #3D3D3D; border-bottom: 1px solid #3D3D3D;"
            document.getElementById("jsmenu5").removeAttribute('style');
            break;
        case 5:
            document.getElementById("jstext1").style.display = "none";
            document.getElementById("jstext2").style.display = "none";
            document.getElementById("jstext3").style.display = "none";
            document.getElementById("jstext4").style.display = "none";
            document.getElementById("jstext5").style.display = "block";
            document.getElementById("jsmenu1").removeAttribute('style');
            document.getElementById("jsmenu2").removeAttribute('style');
            document.getElementById("jsmenu3").removeAttribute('style');
            document.getElementById("jsmenu4").removeAttribute('style');
            document.getElementById("jsmenu5").style = "color: #3D3D3D; border-bottom: 1px solid #3D3D3D;"
            break;
    }
}