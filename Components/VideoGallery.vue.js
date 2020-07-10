var VideoGallery = {
    name:"video-gallery",
    props:['gallery'],
    mounted(){
        /*var $ = document.querySelector.bind(document);
        // Once the user clicks a custom fullscreen button
        $(playButtonClass).addEventListener('click', function(){
            // Play video and go fullscreen
            player.playVideo();

            var playerElement = $(playerWrapperClass);
            var requestFullScreen = playerElement.requestFullScreen || playerElement.mozRequestFullScreen || playerElement.webkitRequestFullScreen;
            if (requestFullScreen) {
                requestFullScreen.bind(playerElement)();
            }
        })*/
    },
    template:`
        <div class="w-100 p-0 m-0 container-fluid">
            <div class ="row bg-light-tan">
                <div class= "col-12">
                    <h3 class="font-weight-bolder pl-4 pr-4 pt-4 m-0"> {{gallery.title}}</h3>
                </div>
                <div class= "col-12">
                    <p class="pb-4 pl-4 pr-4 m-0" v-html='gallery.caption'></p>
                </div>
            </div>
            <div class='container-fluid bg-light-tan justify-content-start p-0 m-0 row'>
                <template v-for="(video, videoIndex) in gallery.videos">
                    <div class="col-sm-12 col-md-4 p-3 bg-light-tan">
                        <iframe
                            width="100%"
                            height="300px"
                            :title="video.title"
                            :key="videoIndex"
                            :src="video.url"
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen>
                        </iframe>
                        <p class='font-weight-bolder'>{{video.title}}</p>
                    </div>
                </template>
            </div>
        </div>`,
}