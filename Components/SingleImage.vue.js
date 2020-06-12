var SingleImage = {
    name: "single-image",
    props: ['image'],
    template:`
        <div class="row w-100 p-0 m-0 container-fluid">
            <figure class="figure container-fluid bg-black p-0 m-0">
                <div class="img-container p-0 m-0">
                    <img v-lazy="image.src" class="figure-img img-fluid">
                </div>
                <figcaption class="row figure-caption bg-red overlay-opacity container-fluid p-0 m-0">

                        <!--credits-->
                        <template v-if="image.credits && image.credits.length > 0">
                            <div class="col-12 col-md-5 pt-2 pl-5 pr-5 m-0">
                                <credits-component :credits="image.credits" />
                            </div>
                        </template>
                        <template v-else-if="image.credit">
                            <div class="col-12 col-md-5 pt-2 pl-5 pr-5 m-0">
                                <credits-component :credits="[image.credit]" />
                            </div>
						</template>
                        

                        <div class="col-12 col-md-7 pt-2 pl-5 pr-5 m-0" v-if="image.caption">
                            <p class="h6 color-white text-left" v-html="image.caption"></p>
                        </div>

                    </figcaption>

            </figure>
        </div>`,
}