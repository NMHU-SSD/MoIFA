var Standard = {

    props:['pages'],
    data: function(){
        var pageId = this.getPageId(this.$route.params.pageid); 
		return { 
			page: this.pages[pageId]
		}
	},
     methods:{
         getPageId(slug){
            var page = this.pages.find(page => page.slug == slug );//find match
            return this.pages.indexOf(page);//return index position
         },
         gotoExternalURL(url){
             location.href = url
         }
    },
	template: `
    <div class='container-fluid p-0 m-0'>
		  <div class='row p-0 m-0'>
            <div class='col-12 p-0 m-0'>    
                    <div class='img-container p-0 m-0'>
                        <img class="fluid-width fixed-height-1" v-lazy="page.featured.src"/>
                        <h1 class="overlay-text bg-red color-tan pb-0 pl-2 pr-2 pt-2 m-0" v-html="page.title"></h1>
                    </div>
                </div>
            </div>
            <!-- end featured image -->
                    
            <div class='container-fluid p-4'>
                        
                <h1 class='color-red' v-html='page.subtitle'></h1>
                <p v-html='page.body'></p>

            </div> 
         
            <template v-if="page.subpages">

            <div v-for='subpage,index in page.subpages' class='container-fluid p-0 m-0 align-content-center'>
                    <!-- show subpages -->
                    <!-- even -->
                    <div v-if='index%2' class='row p-0 m-0'>
                        <div class='col-9 col-md-8 col-lg-9 d-none d-sm-none d-md-block d-lg-block p-5 m-0'>
                            <div class='img-container p-0 m-0'>
                                <img v-lazy='subpage.featured.src' class='fixed-height-1'/>
                            </div>
                        </div>
                         <div class='col-xs-12 col-sm-12 col-md-4 col-lg-3 p-5 m-0 d-flex justify-content-center  flex-column '>
                        
                                <h1 class="text-center color-red align-self-center" v-html="subpage.title"></h1>
                                    
                        
                                <button v-if="subpage.externalURL" class='btn  btn-block btn-lg color-tan bg-red align-self-center' @click="gotoExternalURL(subpage.externalURL)">EXPLORE</button>
                                <router-link v-else class='btn  btn-block btn-lg color-tan bg-red align-self-center' :to='"/"+page.slug+"/"+subpage.slug'>EXPLORE</router-link>

                        </div>
                    </div> 
                    <!-- odd -->
                    <div v-else class='row bg-light-tan p-0 m-0'>
                        <div class='col-xs-12 col-sm-12 col-md-4 col-lg-3 p-5 m-0 d-flex justify-content-center flex-column'>
                        
                                <h1 class="text-center font-bold color-red align-self-center" v-html="subpage.title"></h1>


                                <button v-if="subpage.externalURL" class='btn  btn-block btn-lg color-tan bg-red align-self-center'  v-on:click="gotoExternalURL(subpage.externalURL)">EXPLORE</button>

                                <router-link v-else class='btn  btn-block btn-lg color-tan bg-red align-self-center' :to='"/"+page.slug+"/"+subpage.slug'>EXPLORE</router-link>

                        </div>
                        <div class=' col-9 col-lg-9 col-md-8 d-none d-sm-none d-md-block d-lg-block p-5 m-0'>
                            <div class='img-container p-0 m-0'>
                                <img v-lazy='subpage.featured.src' class='fixed-height-1'/>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

	   </div>`
};