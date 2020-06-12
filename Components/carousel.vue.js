var Carousel = {
    name: "carousel",
    props: ['slides', 'id'],
    template:`
        <div :id="id" class="carousel slide bg-black" data-ride="slide" data-interval="false">
			<ol class="carousel-indicators text-right">
                <li v-for="(slide,i) in slides" :data-target="'#'+id" data-slide-to="i" :class="(i==0 ? 'active' : '')"></li>
			</ol>
	
            <div class="carousel-inner">
                <div v-for="(slide,i) in slides" :class="['carousel-item', (i==0 ? 'active' : '')]" >
                    <div class="img-container w-100 p-0 m-0 position-absolute">
                        <img class="d-block img-fluid mx-auto" v-lazy="slide.src">
                    </div>
                    <div class="row carousel-caption bg-red overlay-opacity container-fluid pl-3 pr-3 m-0  position-absolute">

                        <!--credits-->
                        <template v-if="slide.credits && slide.credits.length > 0">
                            <div class="col-12 col-md-5 pt-2 pl-5 pr-5 m-0">
                                <credits-component :credits="slide.credits" />
                            </div>
                        </template>
                        <template v-else-if="slide.credit">
                            <div class="col-12 col-md-5 pt-2 pl-5 pr-5 m-0">
                                <credits-component :credits="[slide.credit]" />
                            </div>
						</template>
                       
                        <div class="col-12 col-md-7 pt-2 pl-5 pr-5 m-0" v-if="slide.caption">
                            <p class="h6 color-white text-justify" v-html="slide.caption"></p>
                        </div>
				            
                    </div>
                    
                </div>

            </div>
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