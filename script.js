window.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    // Set the default banner image and text
    banner.style.backgroundImage = "url(images/banner1.svg)";
    bannerImage.setAttribute("src", "https://tse4.mm.bing.net/th?id=OIP.g2GTjEoJdT_HQsnNUdX6hwHaHa&pid=Api&P=0&h=180");
    bannerHeading.textContent = "Random Playlist For You";
    bannerText.textContent = "copyright @sanketha";
  });

function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName = "music/"+songNumber+".mp3";
    var currentRow= document.getElementById("song"+songNumber);
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="https://jccdallas.org/wp-content/uploads/2020/06/Spotify-Play-Button-1.png">';

        banner.style.backgroundImage = "url(images/banner1.svg)";
        bannerImage.setAttribute("src", "https://tse4.mm.bing.net/th?id=OIP.g2GTjEoJdT_HQsnNUdX6hwHaHa&pid=Api&P=0&h=180");
        bannerHeading.textContent = "Deep Focus";
        bannerText.textContent = "Keep your focus and enjoy the serenity";
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-1/254000/06-512.png">';

        if (songNumber === 1) {
            banner.style.backgroundImage = "url(images/b01.png)";
            bannerImage.setAttribute("src", "https://tse4.mm.bing.net/th?id=OIP.YYXhfzSIVuI5iiKyW4ImpAAAAA&pid=Api&P=0&h=180");
            bannerHeading.textContent = "Calm Down(Cover)";
            bannerText.textContent = "By SankethaAde";
        } else if (songNumber === 2) {
            banner.style.backgroundImage = "url(images/b02.png)";
            bannerImage.setAttribute("src", "https://tse2.mm.bing.net/th?id=OIP.iUeze6GXjlDyHyDwWQjEgAAAAA&pid=Api&P=0&h=180");
            bannerHeading.textContent = "Chamkeela Angeelesi";
            bannerText.textContent = "By SankethaAde";
        }
        else if (songNumber === 3) {
            banner.style.backgroundImage = "url(images/b03.png)";
            bannerImage.setAttribute("src", "https://tse2.mm.bing.net/th?id=OIP.YiMTBbg9jrLseK1SE67FbQHaHa&pid=Api&P=0&h=180");
            bannerHeading.textContent = "Main Agar Kahoon - Om Shanti Om";

        }
        else if (songNumber === 4) {
            banner.style.backgroundImage = "url(images/b04.png)";
            bannerImage.setAttribute("src", "https://tse3.mm.bing.net/th?id=OIP.yuWSo_bOU0l94WCCm9pLCAAAAA&pid=Api&P=0&h=180");
            bannerHeading.textContent = "Natu Natu";
            bannerText.textContent = "By SankethaAde";
        }
        else if (songNumber === 5) {
            banner.style.backgroundImage = "url(images/b05.png)";
            bannerImage.setAttribute("src", "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1687954113.jpg?utm_source=fb");
            bannerHeading.textContent = "Tum Kya Mile";
            bannerText.textContent = "By SankethaAde";
        }
        else if (songNumber === 6) {
            banner.style.backgroundImage = "url(images/b06.png)";
            bannerImage.setAttribute("src", "https://tse4.mm.bing.net/th?id=OIP.JHs6AiygoU4c0arYkeew8AHaHa&pid=Api&P=0&h=180");
            bannerHeading.textContent = "Bones";
            bannerText.textContent = "By SankethaAde";
        }
        else if (songNumber === 7) {
            banner.style.backgroundImage = "url(images/b07.png)";
            bannerImage.setAttribute("src", "https://tse1.mm.bing.net/th?id=OIP._ocmFjz78-WQkwwMhM7bWwHaHa&pid=Api&rs=1&c=1&qlt=95&w=93&h=93");
            bannerHeading.textContent = "Cupid";
            bannerText.textContent = "By SankethaAde";
        }
        else if (songNumber === 8) {
            banner.style.backgroundImage = "url(images/b08.png)";
            bannerImage.setAttribute("src", "https://tse4.mm.bing.net/th?id=OIP.PYfErInZrrs4o0YEVeyQLwHaHa&pid=Api&P=0&h=180");
            bannerHeading.textContent = "Pasoori";
            bannerText.textContent = "By SankethaAde";
        }
        else if (songNumber === 9) {
            banner.style.backgroundImage = "url(images/b09.png)";
            bannerImage.setAttribute("src", "https://tse2.mm.bing.net/th?id=OIP.FatlcRuRUDf5l-nG4CML-QHaHa&pid=Api&P=0&h=180");
            bannerHeading.textContent = "Phir Aur Kya Chahiye";
            bannerText.textContent = "By SankethaAde";
        }
        else if (songNumber === 10) {
            banner.style.backgroundImage = "url(images/b010.png)";
            bannerImage.setAttribute("src", "https://tse1.mm.bing.net/th?id=OIP.Br3WkjhlChWviytJ3z0NBQHaEK&pid=Api&P=0&h=180");
            bannerHeading.textContent = "Jhoome Jo Pathaan";
            bannerText.textContent = "By SankethaAde";
        }
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-1/254000/06-512.png">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="https://jccdallas.org/wp-content/uploads/2020/06/Spotify-Play-Button-1.png">';
    }
}
