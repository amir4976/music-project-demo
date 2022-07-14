let musicLists = document.getElementById('musicList')
let audio = document.querySelector('audio');
let covers = document.querySelector('.background');
let musicBackground = document.querySelector('.music-background');
let musicTitle = document.querySelector('.music-title');
let musicplay = document.getElementById('playSung')
let prevMusic = document.getElementById('prev')
let nextMusic = document.getElementById('next')
let cTimeMusic = document.getElementById('cTime')
let FTimeMusic = document.getElementById('fTime')
let musicBar = document.getElementById('current')
let progressContainer = document.getElementById('progressContainer')
let musicnav= document.getElementById('musicnav')



let musicList = [{
        name: 'enemy',
        artist: 'imagin dragon',
        cover: './img/Imagine-Dragons-Wallpaper-Hd.jpg',
        src: './music/imagine dragons-enemy-musicDel-320.mp3',
        time: '02:53'

    },
    {
        name: 'Gozashteh',
        artist: 'moein',
        cover: './img/moein.JPG',
        src: './music/01 Gozashteh.mp3',
        time: '03:48'

    },
    {
        name: 'Ki Behtar Az to',
        artist: 'aref',
        cover: './img/aref.JPG',
        src: './music/Aref - Ki Behtar Az to.mp3',
        time: '03:55'
    },
    {
        name: 'bliver',
        artist: 'imagin Dragons',
        cover: './img/wp9980718.png',
        src: './music/Imagine Dragons - Believer.mp3',
        time: '03:24'
    },
    {
        name: 'my silver lining',
        artist: 'aid kid',
        cover: './img/5e7efc2ed3cf55acf7bc8d7b6132d019781ca92ccd851cf1474eee50967c5392._RI_V_TTW_.jpg',
        src: './music/My Silver Lining - FIRST AID KIT-2.mp3',
        time: '03:34'
    },
    {
        name: 'blinding by the light',
        artist: 'weekend',
        cover: './img/coverart.jpg',
        src: './music/The Weeknd - Blinding Lights.mp3',
        time: '03:20'
    }


]





musicList.forEach(function (musics) {
    let musicElem = document.createElement('div')
    musicElem.className = 'music'

    let left = document.createElement('div')
    left.className = 'left'

    let musicBg = document.createElement('div')
    musicBg.className = 'music-background'
    musicBg.style.background = 'url(' + musics.cover + ')'
    musicBg.style.backgroundSize = 'cover'

    let inf = document.createElement('div')
    inf.className = 'information'

    let musicName = document.createElement('h3')
    musicName.className = 'music-name'
    musicName.innerHTML = musics.name


    let artistName = document.createElement('div')
    artistName.className = 'artist-name';
    artistName.innerHTML = musics.artist

    let right = document.createElement('div')
    right.className = 'right'

    let p = document.createElement('p')
    p.innerHTML = musics.time

    musicElem.appendChild(left)
    musicElem.appendChild(right)
    left.appendChild(musicBg)
    left.appendChild(inf)
    musicLists.appendChild(musicElem)
    inf.appendChild(musicName)
    inf.appendChild(artistName)
    right.appendChild(p)



    

    musicElem.addEventListener('click', function () {
        console.log('object');
        audio.src = musics.src
        covers.style.background = 'url(' + musics.cover + ')'
        covers.style.backgroundSize = 'cover'
        if(window.Screen.availWidth < 400){
            covers.style.background = 'url(' + musics.cover + ')'
        covers.style.backgroundSize = 'cover'
            covers.style.backgroundPosition='center'
          }

          musicnav.style.display='flex'
        audio.play()

        musicBackground.style.background = 'url(' + musics.cover + ')'
        musicBackground.style.backgroundSize = 'cover'

        musicTitle.innerHTML = musics.name
        musicplay.className = 'fa fa-pause'
        playFlag = true
        FTimeMusic.innerHTML = musics.time
        if(window.screen.availWidth < 500){
            covers.style.background = 'url(' + musics.cover + ')'
        covers.style.backgroundSize = 'cover'
            covers.style.backgroundPosition='center'

            let find  = musicList.findIndex(function (music) {
                return music.name == 'blinding by the light'
            })
                musicList[find].cover= './img/The-Weeknd-Wallpaper-For-Phone-521x1024.jpeg'
          }

    })


})


  
let playFlag = false;


function timingBar() {
    if (playFlag) {
        let duration = audio.duration;
        let currentTime = audio.currentTime;

        // console.log(currentTime);
        // console.log(duration);
        let persen = (currentTime / duration) * 100;
        musicBar.style.width = persen + '%'






        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10) {
            currentSeconds = "0" + currentSeconds;
        }
        cTimeMusic.textContent = currentMinutes + ":" + currentSeconds;

    }
}




    musicplay.addEventListener('click', function () {
        if (playFlag == true) {
            playFlag = false
            audio.play();

            musicplay.className = 'fa fa-pause'
        } else {
            playFlag = true
            audio.pause();

            musicplay.className = 'fa fa-play'
        }


    })










    let sungIndex = 0

    prevMusic.addEventListener('click', function () {

        let musicIndexFlag = musicList[sungIndex]

        musicBackground.style.background = 'url(' + musicIndexFlag.cover + ')'
        musicBackground.style.backgroundSize = 'cover'


        covers.style.background = 'url(' + musicIndexFlag.cover + ')'
        covers.style.backgroundSize = 'cover'


        musicTitle.innerHTML = musicIndexFlag.name
            --sungIndex
        if (sungIndex < 0) {
            sungIndex = musicList.length - 1
        }

        audio.src = musicIndexFlag.src

        audio.play()
        musicplay.className = 'fa fa-pause'

    })


    nextMusic.addEventListener('click', function () {

        let musicIndexFlag = musicList[sungIndex]

        musicBackground.style.background = 'url(' + musicIndexFlag.cover + ')'
        musicBackground.style.backgroundSize = 'cover'


        covers.style.background = 'url(' + musicIndexFlag.cover + ')'
        covers.style.backgroundSize = 'cover'


        musicTitle.innerHTML = musicIndexFlag.name
        sungIndex++
        if (sungIndex == musicList.length) {
            sungIndex = 0
        }

        audio.src = musicIndexFlag.src

        audio.play()
        musicplay.className = 'fa fa-pause'

    })

    function setProgressBar(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;

        musicBar.style.width=clickX+'px'
        audio.currentTime= (clickX / width) * duration;
      }

    audio.addEventListener('timeupdate', timingBar);
progressContainer.addEventListener("click", setProgressBar);

