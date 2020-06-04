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
    <div class="container-fluid pt-5">
		<h1 class=' text-center color-red'>{{ subpage.title }}</h1>
		<h5 class='text-center color-red' v-html="subpage.subtitle"></h5>
        <p v-html='subpage.body'></p>



        <!--<figure class="figure">
            <img :src="subpage.featured.src ">
            <figcaption class="figure-caption">{{subpage.featured.caption}}</figcaption>
        </figure>-->


        <!-- if we have slides generate them-->
        <div v-if='subpage.slides !== null' id="carouselIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li v-for='slide,index in subpage.slides' data-target="#carouselIndicators" data-slide-to="index"></li>
            </ol>
            <div class="carousel-inner p-0 m-0 bg-light-tan">
                <div v-for='slide,index in subpage.slides' v-if='index > 0' class="carousel-item">
                    <div class='container-fluid bg-light-tan'>
                        <div class='row justify-content-center'>
                            <h1 class="color-red" v-html="slide.title"></h1>
                        </div>
                        <div class='row justify-content-center'>
                            <p v-html='slide.body'></p>
                        </div>
                        <div v-for='section,i in slide.sections' class='container-fluid carousel-caption p-0 m-0 justify-content-center'>
                            <div class='row bg-white' v-if='i%2'>   
                                <div class='col-xs-12 col-sm-12 col-md-8 col-lg-9'> <img class="d-block w-100 m-0 p-5 fixed-height-1" v-lazy="section.src"></div>
                                <div class='col-xs-12 col-sm-12 col-md-4 col-lg-3' v-html='section.caption'></div>
                            </div>
                            <div class='row bg-tan' v-else>  
                                <div class='col-xs-12 col-sm-12 col-md-4 col-lg-3'v-html='section.caption'></div>
                                <div class='col-xs-12 col-sm-12 col-md-8 col-lg-9'> <img class="d-block w-100 m-0 p-5 fixed-height-1" v-lazy="section.src"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Index = 0-->
                <div v-else class="carousel-item active">
                    <div class='container-fluid bg-light-tan'>
                        <div class='row justify-content-center'>
                            <h1 class="color-red" v-html="slide.title"></h1>
                        </div>
                        <div class='row justify-content-center'>
                            <p v-html='slide.body'></p>
                        </div>
                        <div v-for='section,i in slide.sections' class='container-fluid bg-light-tan carousel-caption p-0 m-0 justify-content-center'>
                            <div class='row bg-white' v-if='i%2'>   
                                <div class='col-xs-12 col-sm-12 col-md-8 col-lg-9'> <img class="d-block w-100 m-0 p-5 fixed-height-1" v-lazy="section.src"></div>
                                <div class='col-xs-12 col-sm-12 col-md-4 col-lg-3' v-html='section.caption'></div>
                            </div>
                            <div class='row bg-tan' v-else>  
                                <div class='col-xs-12 col-sm-12 col-md-4 col-lg-3'v-html='section.caption'></div>
                                <div class='col-xs-12 col-sm-12 col-md-8 col-lg-9'> <img class="d-block w-100 m-0 p-5 fixed-height-1" v-lazy="section.src"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
	</div>`
};