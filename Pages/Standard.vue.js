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
         }
    },
	template: `<div v-if="page.slug === 'culture'" class='container-fluid p-0 m-0'>
                <!-- culture section -->
		          <div class='row p-0 m-0'>
                    <div class='col-12 p-0 m-0'>    
                        <div class='img-container p-0 m-0'>
                            <img class="fluid-width fixed-height-1" :src="page.featured.src"/>
                            <h1 class="overlay-text color-primary" v-html="page.title"></h1>
                        </div>
                    </div>
                  </div>
                    <div class='row p-0 m-0'>
                        <div class=' col-9 col-lg-9 d-none d-sm-none d-md-none d-lg-block p-5 m-0'>
                            <div class='img-container p-0 m-0'>
                                <img :src='page.featured.src' class='fixed-height-1'/>
                            </div>
                        </div>
                         <div class='col-xs-12 col-sm-12 col-md-12 col-lg-3 p-5 m-0'>
                        
                                <h1 class='text-center font-bold color-secondary' v-html='page.subtitle'></h1>
                                <p v-html='page.body'></p>

                        </div>
                    </div> 
                  
                  <div v-for='subpage,index in page.subpages' class='container-fluid p-0 m-0 align-content-center'>
                    <!-- show subpages -->
                    <!-- even -->
                    <div v-if='index%2' class='row p-0 m-0'>
                        <div class=' col-9 col-lg-9 d-none d-sm-none d-md-none d-lg-block p-5 m-0'>
                            <div class='img-container p-0 m-0'>
                                <img :src='subpage.featured.src' class='fixed-height-1'/>
                            </div>
                        </div>
                         <div class='col-xs-12 col-sm-12 col-md-12 col-lg-3 p-5 m-0 d-flex justify-content-center flex-column'>
                        
                                <h1 class="text-center font-bold color-secondary" v-html="subpage.title"></h1>
                                <router-link class='btn fluid-width color-primary bg-secondary' :to='"/"+page.slug+"/"+subpage.slug'>EXPLORE</router-link>

                        </div>
                    </div> 
                    <!-- odd -->
                    <div v-else class='row bg-tertiary p-0 m-0'>
                        <div class='col-xs-12 col-sm-12 col-md-12 col-lg-3 p-5 m-0 d-flex justify-content-center flex-column'>
                        
                                <h1 class="text-center font-bold color-secondary" v-html="subpage.title"></h1>
                                <router-link class='btn fluid-width color-primary bg-secondary' :to='"/"+page.slug+"/"+subpage.slug'>EXPLORE</router-link>

                        </div>
                        <div class=' col-9 col-lg-9 d-none d-sm-none d-md-none d-lg-block p-5 m-0'>
                            <div class='img-container p-0 m-0'>
                                <img :src='subpage.featured.src' class='fixed-height-1'/>
                            </div>
                        </div>
                    </div>
                </div>

	           </div>`
};