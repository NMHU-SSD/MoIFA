var Carousel = {
    name: "carousel",
    props: ['slides', 'id'],
    template:`
        <div :id="id" class="carousel slide" data-ride="carousel">

            
            <div class="carousel-inner">

                <div v-for="(slide,i) in slides" :class="['carousel-item', (i==0 ? 'active' : '')]" >

                    <img class="d-block w-100" v-lazy="slide.src">
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