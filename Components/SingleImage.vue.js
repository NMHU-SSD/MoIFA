var SingleImage = {
    name: "single-image",
    props: ['image'],
    methods:{
         gotoExternalURL(url){
             location.href = url
         }
    },
    template:`
        <div class="row w-100 p-0 m-0 container-fluid">
            <figure class="figure container-fluid bg-black p-0 m-0">
                <div class="img-container p-0 m-0">
                    <template v-if='image.vidSrc'>
                        <video class="d-block img-fluid mx-auto pointer" controls> 
                            <source :src="image.vidSrc" type='video/mp4'></source>
                        </video>
                    </template>
                    <template v-else>
                        <img class="d-block img-fluid mx-auto" v-lazy="image.src"/>
                    </template>
                </div>
                 <template v-if="image.credits || image.credit || image.caption">
                    <figcaption class="row figure-caption bg-red overlay-opacity container-fluid pt-3 pb-3 m-0">
                        <!--credits-->
                        <template v-if="image.credits && image.credits.length > 1">
                            <div class="col pt-2 pl-5 pr-5 m-0">
                                <credits-component :credits="image.credits" />
                            </div>
                        </template>
                        <template v-else-if="image.credit">
                            <div class="col pt-2 pl-5 pr-5 m-0">
                                <credits-component :credits="[image.credit]" />
                            </div>
						</template>
                        <!-- caption -->
                        <template v-if="image.caption && image.credit || image.caption && image.credits && image.credits.length > 0">
                            <div class="col-12 col-md-7 pt-2 pl-5 pr-5 m-0" >
                                <p class="h6 color-white text-justify" v-html="image.caption"></p>
                            </div>
                        </template>
                        <template v-else-if="image.caption">
                            <div class="col pt-2 pl-5 pr-5 m-0" >
                                <p class="h6 color-white text-justify" v-html="image.caption"></p>
                            </div>
                        </template>
                    </figcaption>
                </template>
            </figure>
        </div>`,
}