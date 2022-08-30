let video = document.querySelector( '.player video' )
let controls = document.querySelector( '.player .controls' )
let playButton = document.querySelector( '.player .play' )
let pauseButton = document.querySelector( '.player .pause' )
let fullscreen = document.querySelector( '.player .fullscreen' )
let progress = document.querySelector( '.player .progress' )
let progressBar = document.querySelector( '.player .bar' )

playButton.addEventListener( 'click', playVideo );

function playVideo( event ) {
    video.play();
    playButton.classList.add( 'hidden' );
    pauseButton.classList.remove( 'hidden' );
}



pauseButton.addEventListener( 'click', pauseVideo );

function pauseVideo( event ) {
    video.pause();
    playButton.classList.remove( 'hidden' );
    pauseButton.classList.add( 'hidden' );
}

video.addEventListener( 'timeupdate', updateProgress );

function updateProgress( event ) {
    let progress = video.currentTime * 100 / video.duration;
    progressBar.style.width = progress + '%';
}

progress.addEventListener( 'click', setProgress );

function setProgress( event ) {
    let progress = event.offsetX / event.currentTarget.clientWidth;
    video.currentTime = progress * video.duration;
}

fullscreen.addEventListener( 'click', enterFullscreen );

function enterFullscreen( event ) {
    video.requestFullscreen();
}

document.addEventListener ( 'fullscreenchange', checkFullscreen );

function checkFullscreen( event ) {
    if( document.fullscreenElement == video ) {
        //video is in fullscreen
        video.style.objectFit = 'contain';
        if ( screen.orientation ) screen.orientation.lock( 'landscape' );
    } else {
        //video is not in fullscreen
        video.style.objectFit = 'cover';
        if ( screen.orientation ) screen.orientation.unlock();
    }

}