console.log("lets write javascript")


async function getSongs() {
    let a= await fetch("http://127.0.0.1:5500/songs/")
    let data = await a.text()
    let div=document.createElement("div");
    div.innerHTML=data;
    let as=div.getElementsByTagName("a")
    let songs=[]
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs;
}

// (async function() {
//     let songs=await getSongs();
//     console.log(songs);
//     var audio = new Audio(songs[0]);
//     audio.play();
// })();
async function main() {
        let songs= await getSongs();
        console.log(songs);

        let songUL=document.querySelector(".songList").getElementsByTagName("ul")[0];
        console.log(songUL);
        for (const song of songs) {
            songUL.innerHTML=songUL.innerHTML+`<li>${song.replaceAll("%20" , " ")}</li>`;
        }

        var audio = new Audio(songs[0]);
        // await audio.play();
} 

main()