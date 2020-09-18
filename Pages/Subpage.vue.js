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
            var subpage = this.pages[pageId].subpages.find(subpage => subpage.slug == slug );

            return  this.pages[pageId].subpages.indexOf(subpage);//return index position
        }
    },
    
	template: `
    <div class="container-fluid p-0">
        <!-- featured  header image -->
        <div class='container-fluid p-0 m-0 border-bottom border-dark' v-if="subpage.featured">
            <div class='img-container p-0 m-0'>
                <img class="fluid-width fixed-height-1" v-lazy="subpage.featured.src"/>

                <!--<div class='container-fluid bg-red overlay-text'>    
                    <h1 class="col-12 color-tan pb-0 pl-2 pr-2 pt-2 m-0">{{subpage.title}}</h1>
                    <h5 v-if='subpage.featured.link' class='col-12'> <a class='font-weight-bolder color-dark-tan' :href='subpage.featured.link.url' target="_blank">{{subpage.featured.link.text}}</a></h5>
                </div>-->

            </div>
        </div>

        <!-- body content container-->
        <div class="container-fluid p-5 m-0">
            <!-- body/title -->
            <template v-if='subpage.title'>
                <h1 class="color-red display-text text-uppercase text-center" v-html="subpage.title"></h1>
            </template>
            <template class='row' v-if='subpage.subtitle'>
                <h4 class="color-red display-text text-uppercase text-center" v-html="subpage.subtitle"></h4>
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
                <h3 class="p-5 m-0 text-uppercase"> {{subpage.gallery.title}}</h3>
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

            <div v-for='section, index in subpage.sections' :class='["container-fluid", "p-3", (index%2 == 0 ? "bg-light-tan" : "")]'>
                <div class='container-fluid'>

                <div class='row mb-2 d-flex justify-content-center' v-if="section.featured">
                    <figure>
                        <img class="img-fluid mx-auto" v-lazy="section.featured.src" >
                        <figcaption class="text-center pt-3" v-if="section.featured.caption" v-html="section.featured.caption">
                        </figcaption>
                    </figure>

                 </div>   

                    <div class='row pb-4'>
                        <div class="col-sm-12 col-md-12 col-lg-12 ">
                            <h3 class='font-weight-bolder text-uppercase'>{{section.title}}</h3>
                            <div v-html='section.body'></div>
                        </div>
                    </div>

                     <!-- carousel --->
                    <div v-if='section.slides' class='col-12 col-lg-10 offset-lg-1 pb-5'>
                        <template v-if="section.slides && section.slides.length > 1">
                            <carousel v-bind:slides="section.slides" :id="'carousel'+index"></carousel>
                        </template>
                        <template v-else-if="section.slides && section.slides.length == 1">
                            <single-image v-bind:image="section.slides[0]"/>
                        </template>
                        
                    </div>
                    

                    <!-- cards -->
                    <template v-if="section.cards">
                        <cards-component :cards="section.cards" :id="'section'+index" />
                    </template>
                   
                    
                </div>
            </div>
        </template>
        <!-- links/files -->
        <div class="container-fluid pb-5" v-if='subpage.resources'>     
            <h3 class="text-center text-uppercase color-red" v-if='subpage.resources.title'>{{subpage.resources.title}}</h3>
            <h3 class="text-center color-red text-uppercase" v-else>Resources</h3>
            <template v-if='subpage.resources.body'>
                <div class="text-center color-red text-uppercase pb-3" v-html='subpage.resources.body'></div>
            </template>
            <div class="row justify-content-center">
                
                <template v-if='subpage.resources.downloads' v-for="downloads in subpage.resources.downloads">
                   <div class='col-12 pt-5 pb-0 m-0' >
                      <h5 class='font-weight-bolder text-center text-uppercase color-red' v-html='downloads.title'></h5>
                      <h4 class='color-red font-weight-bolder text-center text-uppercase' v-html='downloads.subtitle'></h4>
                   </div> 
                   <div class='col-12'>
                        <div class="row p-0 m-0">
                            <div class="col-md-3 col-12 color-red p-5 m-0" v-for="file in downloads.files">
                                <div class='img-container'>
                                    <a class='color-red img-container' :href='file.src' download>
                                        <img class='img-fluid border border-red' v-lazy='file.src'>
                                    </a>
                                </div>
                                <div class='blockquote'>
                                     <p v-if='file.text' class="mt-2 h4 text-uppercase color-red font-weight-bolder" v-html='file.text'></p>
                                    <p v-if='file.caption' class="mt-2" v-html='file.caption'></p>
                                </div>
                            </div>
                        </div>
                   </div>
			     </template>

                <template v-for='link in subpage.resources.links'>
                <template v-if='link.src'>
                        <div class='col-12 p-0 m-0'>
                            <p class='font-weight-bolder text-center text-justify' v-html='link.text'></p>
                        </div>
                        <br>
                        <div class='col-12 p-0 m-0'>
                            <a class='color-red p-5 img-container' :href='link.src' download>
                                <img class='img-fluid fixed-width-1 border border-red' v-lazy='link.src'/>   
                            </a>
                        </div>
              </template>
			  
              <div class='col-12 text-center' v-else-if='link.extUrl'>
                   <a class='color-red' :href='link.extUrl' target="_blank"> {{ link.text }}</a>
              </div>
            </template>
            <template v-for='section in subpage.resources.sections'>
                    <template v-if='section.title'>
                        <h4 class="color-red display-text text-uppercase text-center pt-4" v-html="section.title"></h4>
                    </template>
                    <template v-for='link in section.links'>
                        <template v-if='link.extUrl'>
                            <div class='col-12 text-center' v-if='link.extUrl'>
                                <a class='color-red' :href='link.extUrl' target="_blank"> {{ link.text }}</a>
                            </div>
                        </template>
                    </template>
            </template>
                
            
    </div>
</div>
	</div>`
};