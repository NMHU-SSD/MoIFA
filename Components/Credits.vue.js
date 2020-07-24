var Credits = {
    name: "credits-component",
    props: ['credits'],
    template:`
            <div clas="row row-cols-2 container-fluid p-0 m-0">
                <div class="col p-0 mb-3" v-for="credit,i in credits">
                     <div class="text-left">
                        <span v-if='credit.title' class='font-weight-bolder color-white'>{{credit.title}}<br></span>
                        <span class="color-white font-weight-light" v-if="credit.artist">{{credit.artist}}<br></span>
                        <span class="color-white font-weight-light" v-if="credit.date">{{credit.date}}<br></span>
                        <span class="color-white font-weight-light" v-if="credit.location">{{credit.location}}<br></span>
                        <span class="color-white font-weight-light" v-if="credit.medium">{{credit.medium}}<br></span>
                        <span class="color-white font-weight-light" v-if="credit.collection">{{credit.collection}}<br></span>
                        <span><a v-if='credit.link' class='color-dark-tan font-weight-bolder' target="_blank" :href='credit.link'>Learn More</a></span>
                    </div>
                </div>
            </div>`
}