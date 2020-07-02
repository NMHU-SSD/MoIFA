var Carousel = {
    name: "carousel",
    props: ['slides', 'id'],
    methods:{
         gotoExternalURL(url){
             location.href = url
         }
    },
    template:`
        <div :id="id" class="carousel slide bg-black" data-ride="slide" data-interval="false">
			<ol class="carousel-indicators text-right">
                <!--- indicators -->
                <li v-for="(slide,i) in slides" :data-target="'#'+id" data-slide-to="i" :class="(i==0 ? 'active' : '')"></li>
			</ol>
	
            <div class="carousel-inner">
                <!-- slide show -->
                <div v-for="(slide,i) in slides" :class="['carousel-item', (i==0 ? 'active' : '')]" >
                    <!-- inner-content -->
                    <div class=" img-container w-100 p-0 m-0 position-absolute">
                        <template v-if='slide.externalURL'>
                            <img @click="gotoExternalURL(slide.externalURL)" class="d-block img-fluid mx-auto pointer" v-lazy="slide.src"/>
                        </template>
                        <template v-else-if='slide.vidSrc'>
                             <video class="d-block img-fluid mx-auto pointer" controls> 
                                <source :src="slide.vidSrc" type='video/mp4'></source>
                            </video>
                        </template>
                        <template v-else>
                            <img class="d-block img-fluid mx-auto" v-lazy="slide.src"/>
                        </template>
                    </div>
                    <!-- hover caption -->
                    <div class="row carousel-caption bg-red overlay-opacity container-fluid pl-3 pr-3 pt-3 m-0  position-absolute">

                        <!--credits-->
                        <template v-if="slide.credits && slide.credits.length > 0">
                            <div class="col pt-2 pl-5 pr-5 m-0">
                                <credits-component :credits="slide.credits" />
                            </div>
                        </template>
                        <template v-else-if="slide.credit">
                            <div class="col pt-2 pl-5 pr-5 m-0">
                                <credits-component :credits="[slide.credit]" />
                            </div>
						</template>

                       <!-- caption -->
                        <template v-if="slide.caption && !slide.credit || slide.caption && !slide.credits ">
                            <div class="col-12 col-md-7 pt-2 pl-5 pr-5 m-0" >
                                <p class="h6 color-white text-justify" v-html="slide.caption"></p>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <!-- controls -->
            <a class="carousel-control-prev" :href="'#'+id" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" :href="'#'+id" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>`,
}