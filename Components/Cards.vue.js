var Cards = {
    name: "cards-component",
    props: ['cards','id'],
    template:`
        <!-- cards -->
        <div class='row container-fluid p-0 m-0'>
            <div :class="[(cards.length >= 1 ? 'col' : ''), (cards.length >= 3 ? 'col-sm-12 col-md-12 col-lg-4' : ''), (cards.length == 2 ? 'col-sm-12 col-md-12 col-lg-6' : ''),  'p-2']" v-for='card,index in cards'>
                <div class="card h-100 carousel-card bg-red">

                    <!-- credit and caption -->
                    <template v-if="card.sources && card.sources.length > 1">
                        <div :id="'carouselCard'+index+'-TopIndicators-'+id" class="card-img-top bg-black carousel slide p-0 m-0" data-ride="false">
                            <ol class="carousel-indicators">
                                <li v-for="(source,i) in card.sources" :data-target="'#carouselCard'+index+'-TopIndicators-'+id" :data-slide-to="i" :class="(i==0 ? 'active' : '')"></li>
                            </ol>
                            <div class="carousel-inner ">
                                 <div v-for="(source,i) in card.sources" :class="['carousel-item p-0 m-0', 'card-image-container', (i==0 ? 'active' : '')]">
                                    <vue-preview class="pointer  d-block container-fluid p-0 m-0" :slides="[source]"></vue-preview>
                                </div>
                            </div>
                            <a class="carousel-control-prev" :href="'#carouselCard'+index+'-TopIndicators-'+id" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" :href="'#carouselCard'+index+'-TopIndicators-'+id" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                            <div class='card-img-overlay'> 
                                <i class="fas fa-expand color-white opacity-1"></i>
                            </div>
                        </div>
                            
                    </template>

                    
                    <video v-else-if='card.video' :src='card.video' class="card-img-top bg-black d-block img-fluid mx-auto pointer" controls></video>
                    
                    <div v-else-if='card.sources && card.sources.length == 1' class='card-img-top bg-black'>
                        <div class="card-image-container">
                            <vue-preview  class="pointer d-block mh-100 container-fluid p-0 m-0" :slides="[card.sources[0]]"></vue-preview>
                        </div>
                        <div class='card-img-overlay'> 
                            <i class="fas fa-expand color-white opacity-1"></i>
                        </div>
                    </div>
                    <div v-else  class='card-img-top bg-black'>
                        <div class="card-image-container">
                            <vue-preview  class="pointer d-block mh-100 container-fluid p-0 m-0" :slides="[card]"></vue-preview>
                        </div>
                        <div class='card-img-overlay'> 
                            <i class="fas fa-expand color-white opacity-1"></i>
                        </div>

                    </div>
                    <div class="card-body pl-1 pr-1 pt-3 m-0">
                        <div class="row-fluid mh-100">
                            
                            <!-- credit and caption -->
                            <template v-if="card.credit && card.caption || card.caption && card.credits">
                                <div :id="'carouselCard'+index+'-BottomIndicators-'+id" class="carousel slide p-2 m-0" data-ride="false">
                                    <!-- loop through credits -->
                                    <ol class="carousel-indicators ">
                                        <li :data-target="'#carouselCard'+index+'-BottomIndicators-'+id" data-slide-to="0" class="active"></li>
                                        <li :data-target="'#carouselCard'+index+'-BottomIndicators-'+id" data-slide-to="1"></li>
                                    </ol>
                                    <div class="carousel-inner container-fluid">
                                        <div v-if="card.credit" class="carousel-item active">
                                            <credits-component :credits="[card.credit]" />
                                        </div>
                                        <template v-if="card.credits && card.credits.length > 1">
                                            <div  v-for="credit,i in card.credits"  :class="[(i==0 ? ' carousel-item active' : 'carousel-item')]">
                                                <credits-component :credits="[credit]" />
                                            </div>
                                        </template>
                                        <div v-if="card.caption" class="carousel-item card-text">
                                            <p class="h6 color-white text-left overflow-scroll pb-2 " v-html="card.caption"></p>
                                        </div>
                                    </div>
                                </div>
                            </template>

                            <!-- credit -->
                            <template v-else-if="card.credit && !card.caption && !card.credits">
                                <div class="col-12 pt-2 pl-5 pr-5 m-0">
                                    <credits-component :credits="[card.credit]" />
                                </div>
                            </template>
                            <template v-else-if="card.credits && !card.caption && !card.credit">
                                <div class="col-12 pt-2 pl-5 pr-5 m-0">
                                    <credits-component :credits="card.credits" />
                                </div>
                            </template>

                            <!-- caption -->
                            <template v-if="card.caption && !card.credit && !card.credits ">
                                <div class="col-12 pt-2 pb-2 pl-5 pr-5 m-0 card-text" >
                                    <p class="h6 color-white text-left" v-html="card.caption"></p>
                                </div>
                            </template>

                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}