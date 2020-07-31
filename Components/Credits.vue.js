var Credits = {
    name: "credits-component",
    props: ['credits'],
    template:`
            <div clas="row row-cols-2 container-fluid p-0 m-0">
                <div class="col p-0 mb-3" v-for="credit,i in credits">
                     <div class="text-left">
                        <p v-if='credit.title' class='credit-spacing p-0 m-0 font-weight-bolder color-white h4 mb-1' v-html='credit.title'></p>
                        <p class="credit-spacing font-weight-bolder p-0 m-0 color-white h5" v-if="credit.artist" v-html='credit.artist'></p>
                        <p class="credit-spacing font-weight-lighter p-0 m-0 color-white font-size-1" v-if="credit.date">{{credit.date}}</p>
                        <p class="credit-spacing font-weight-lighter p-0 m-0 color-white font-size-1" v-if="credit.location">{{credit.location}}</p>
                        <p class="credit-spacing font-weight-lighter p-0 m-0 color-white font-size-1" v-if="credit.medium">{{credit.medium}}</p>
                        <p class="credit-spacing font-weight-lighter p-0 m-0 color-white font-size-1" v-if="credit.collection" v-html='credit.collection'></p>
                        <template v-if='credit.link'>
                        <i><p class='credit-spacing p-0 m-0 color-dark-tan'><a  class='credit-spacing p-0 m-0 color-dark-tan font-weight-bolder font-size-1' target="_blank" :href='credit.link.url'> {{credit.link.text}} </a></p></i>
                        </template>
                    </div>
                </div>
            </div>`
}