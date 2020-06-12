var Subpage = {
    props:['pages'],
    data: function(){
        var pageId = this.getPageId(this.$route.params.pageid);
        var subpageId = this.getSubPageId(this.$route.params.subpageid)
        console.log(this.pages[pageId].subpages[subpageId])
		return { 
            subpage: this.pages[pageId].subpages[subpageId],
            routepath: this.$route.path  //get current route path          
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

        <div class='row p-0 m-0'>
            <div class='col-12 p-0 m-0'>    
                    <div class='img-container p-0 m-0'>
                        <img class="fluid-width fixed-height-1" v-lazy="subpage.featured.src"/>
                        <h1 class="overlay-text bg-red color-tan pb-0 pl-2 pr-2 pt-2 m-0">{{subpage.title}}</h1>
                    </div>
                </div>
        </div>
        <div class="container-fluid p-5">

            <!-- subpage carousel or single image-->
            <template v-if="subpage.slides && subpage.slides.length > 1">
                    <carousel v-bind:slides="subpage.slides" id="subpageCarousel"></carousel>
            </template>
            <template v-else-if="subpage.slides">
                    <single-image v-bind:image="subpage.slides[0]"/>
            </template>

            <h1 class="color-red display-text text-center" v-html="subpage.subtitle"></h1>
            <p v-html='subpage.body'></p>

        </div>



        <template v-if="subpage.sections">
        <div v-for='section,index in subpage.sections' :class='["container-fluid", "p-5", (index%2 ? "bg-light-tan" : "")]'>
            <div class='container-fluid'>

                <!-- section carousel or single image-->

                <template v-if="section.slides.length > 1">
                    <carousel v-bind:slides="section.slides" :id="'carousel'+index"></carousel>
                </template>
                <template v-else>
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