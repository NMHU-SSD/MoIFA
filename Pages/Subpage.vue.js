var Subpage = {
    props:['pages'],
    data: function(){
        var pageId = this.getPageId(this.$route.params.pageid);
        var subpageId = this.getSubPageId(this.$route.params.subpageid)
        console.log(this.pages[pageId].subpages[subpageId])
		return { 
            subpage: this.pages[pageId].subpages[subpageId],
            routepath: this.$route.path,  //get current route path
            index: null //index for gallery
        }
	},
    mounted(){
        
     var pageId = this.getPageId(this.$route.params.pageid);
     var subpageId = this.getSubPageId(this.$route.params.subpageid)
     console.log(pageId,subpageId)
    },
    methods: {
        getPageId(slug){
           var page = this.pages.find(page => page.slug == slug );
           return this.pages.indexOf(page); //return index position
        },
        getSubPageId(slug){
            var pageId = this.getPageId(this.$route.params.pageid);
            console.log(this.pages[pageId]);    
            var subpage = this.pages[pageId].subpages.find(subpage => subpage.slug == slug );

            return  this.pages[pageId].subpages.indexOf(subpage);//return index position
        }
    },
    
	template: `
    <div class="container-fluid p-0">
        <!-- featured  header image -->
        <div class='container-fluid p-0 m-0 border-bottom border-dark'>
            <div class='img-container p-0 m-0'>
                <img class="fluid-width fixed-height-1" v-lazy="subpage.featured.src"/>
                <h1 class="overlay-text bg-red color-tan pb-0 pl-2 pr-2 pt-2 m-0">{{subpage.title}}</h1>
            </div>
        </div>

        <!-- body content container-->
        <div class="container-fluid p-5">
            <!-- body/title -->
            <template v-if='subpage.title'>
                <h1 class="color-red display-text text-center" v-html="subpage.subtitle"></h1>
            </template>
            <template v-if='subpage.body'>
                <div v-html='subpage.body'></div>
            </template>
            <!-- subpage carousel or single image-->
            <template v-if="subpage.slides && subpage.slides.length > 1">
                <carousel v-bind:slides="subpage.slides" id="subpageCarousel"></carousel>
            </template>
            <template v-else-if="subpage.slides">
                <single-image v-bind:image="subpage.slides[0]"/>
            </template>
        </div>

        <!-- video gallery -->
        <template v-if='subpage.gallery && subpage.gallery.videos'>
            <video-gallery v-bind:gallery='subpage.gallery'/>
        </template>

        <!-- image gallery -->
        <template v-if='subpage.gallery && subpage.gallery.images'>
            <div class ="row bg-light-tan">
                <h3 class="p-5 m-0"> {{subpage.gallery.title}}</h3>
            </div>
            <div class='container-fluid row justify-content-start pb-3 m-0 bg-light-tan'>
                <gallery :images="subpage.gallery.images" :index="index" @close="index = null"></gallery>
                <div class="image pointer img-thumbnail m-3"
                    v-for="(image, imageIndex) in subpage.gallery.images"
                    :key="imageIndex"
                    @click="index = imageIndex"
                    :style="{ backgroundImage: 'url(' + image + ')', width: '200px', height: '200px' }">
                </div>
            </div>
        </template>
        
        <!-- section carousel or single image-->
        <template v-if="subpage.sections">
            <div v-for='section,index in subpage.sections' :class='["container-fluid", "p-5", (index%2 == 0 ? "bg-light-tan" : "")]'>
                <div class='container-fluid'>
                    <div class='row pb-4'>
                        <div class="col-sm-12 col-md-12 col-lg-10 offset-lg-1">
                            <h3 class='font-weight-bolder'>{{section.title}}</h3>
                            <div v-html='section.body'></div>
                        </div>

                        <!-- cards -->
                        <template v-if='section.cards'>
                            <div class='container-fluid' v-for='card,index in section.cards'>
                                <div class="card bg-red mb-3">
                                    <vue-preview  class="card-img-top pointer" :slides="section.cards"></vue-preview>
                                    <div class="card-body">
                                        <div class="card-text">
                                             <!--credits -->
                                            <template v-if="card.credits && card.credits.length > 0">
                                                <div class="col pt-2 pl-5 pr-5 m-0">
                                                    <credits-component :credits="card.credits" />
                                                </div>
                                            </template>
                                            <template v-else-if="card.credit">
                                                <div class="col pt-2 pl-5 pr-5 m-0">
                                                    <credits-component :credits="[card.credit]" />
                                                </div>
						                   </template>
                                            <!-- caption --->
                                            <template v-if="card.caption && !card.credit || card.caption && !card.credits ">
                                                <div class="col-12 col-md-7 pt-2 pl-5 pr-5 m-0" >
                                                    <p class="h6 color-white text-justify" v-html="card.caption"></p>
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <!-- carousel --->
                        <div v-if='section.slides' class='col-12 col-lg-10 offset-lg-1'>
                            <template v-if="section.slides && section.slides.length > 1">
                                <carousel v-bind:slides="section.slides" :id="'carousel'+index"></carousel>
                            </template>
                            <template v-else-if="section.slides && section.slides.length == 1">
                                <single-image v-bind:image="section.slides[0]"/>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </template>
	</div>`
};