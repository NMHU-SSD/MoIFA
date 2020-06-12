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
                    <div class="img-container container-fluid p-0 m-0">
                        <img class="d-block img-fluid mx-auto" v-lazy="slide.src">
                    </div>
                    <div class="row carousel-caption bg-red opacity-1 pl-5 pr-5 m-0 w-100">
                        <div class="col p-0 m-0 blockquote">
                            <div class="blockquote text-left justify-content-start">
                                <span v-if='slide.credit.title' class='font-weight-bolder color-white'>{{slide.credit.title}}<br></span>
                                <span class="color-white h6" v-if="slide.credit.arist">{{slide.credit.artist}}<br></span>
                                <span class="color-white h6" v-if="slide.credit.date">{{slide.credit.date}}<br></span>
                                <span class="color-white h6" v-if="slide.credit.location">{{slide.credit.location}}<br></span>
                                <span class="color-white h6" v-if="slide.credit.medium">{{slide.credit.medium}}<br></span>
                                <span class="color-white h6" v-if="slide.credit.collection">{{slide.credit.collection}}<br></span>
                                <span class="color-white h6" v-if="slide.credit.link">{{slide.credit.link}}</span>
                            </div>
                        </div>
                        <div class="col p-0 m-0">
                        </div>
                        <div class="col p-0 m-0">
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