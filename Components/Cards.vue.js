var Cards = {
    name: "cards-component",
    props: ['cards'],
    template:`
        <!-- cards -->
        <div class='row'>
            <div class='col m-3 align-items-stretch' v-for='card,index in cards'>
                <div class="card img-container h-100 bg-red mb-3">
                    <video v-if='card[0].vSrc' :src='card[0].vSrc' class="card-img-top img-fluid mh-100 pointer" controls></video>
                    <vue-preview v-else class="mh-100 card-img-top pointer" :slides="card"></vue-preview>
                    <div v-if='card[0].src' class='card-img-overlay'> 
                        <i class="fas fa-expand color-white"></i>
                    </div>
                    <div class="card-body">
                        <div class="card-text row">
                            <!--credits -->
                            <template v-if="card[0].credits && card[0].credits.length > 0">
                                <div class="col-12 pt-2 pl-5 pr-5 m-0">
                                    <credits-component :credits="card[0].credits" />
                                </div>
                            </template>
                            <template v-else-if="card[0].credit">
                                <div class="col-12 pt-2 pl-5 pr-5 m-0">
                                    <credits-component :credits="[card[0].credit]" />
                                </div>
                            </template>
                            <!-- caption --->
                            <template v-if="card[0].caption && !card[0].credit || card[0].caption && !card.credits ">
                                <div class="col-12 pt-2 pl-5 pr-5 m-0" >
                                    <p class="h6 color-white text-justify" v-html="card[0].caption"></p>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}