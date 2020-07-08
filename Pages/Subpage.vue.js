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
                <p v-html='subpage.body'></p>
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
                    <div class ="row bg-light-tan">
                        <div class= "col-12">
                            <h3 class="font-weight-bolder pl-4 pr-4 pt-4 m-0"> {{subpage.gallery.title}}</h3>
                        </div>
                        <div class= "col-12">
                            <p class="pb-4 pl-4 pr-4 m-0" v-html='subpage.gallery.caption'></p>
                        </div>
                    </div>
            <div class='container-fluid bg-light-tan justify-content-start p-0 m-0 row'>
                <template v-for="(video, videoIndex) in subpage.gallery.videos">
                    <div class="col-sm-12 col-md-4 p-3 bg-light-tan">
                        <iframe
                            width="100%"
                            height="300px"
                            :title="video.title"
                            :key="videoIndex"
                            :src="video.url"
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen>
                        </iframe>
                        <p class='font-weight-bolder'>{{video.title}}</p>
                    </div>
                </template>
            </div>
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
                    <template v-if="section.slides && section.slides.length > 1">
                        <carousel v-bind:slides="section.slides" :id="'carousel'+index"></carousel>
                    </template>
                    <template v-else-if="section.slides && section.slides.length == 1">
                        <single-image v-bind:image="section.slides[0]"/>
                    </template>
                    <div class='row'>
                        <div class="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                            <h3 class='font-weight-bolder pt-5'>{{section.title}}</h3>
                            <div v-html='section.body'></div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

    

	</div>`
};