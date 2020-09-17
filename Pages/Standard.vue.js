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
             window.open(url);
         }
    },
	template: `
    <div class='container-fluid p-0 m-0'>

          <!--features-img/title-->
		  <div class='container-fluid p-0 m-0 border-bottom border-secondary' v-if="page.featured">
                    <div class='img-container p-0 m-0'>
                        <img class="fluid-width fixed-height-1" v-lazy="page.featured.src"/>

                        <!--<div class='container-fluid bg-red overlay-text'>    
                            <!--<h1 class="col-12 color-tan pb-0 pl-2 pr-2 pt-2 m-0">{{page.title}}</h1>
                            <h5 v-if='page.featured.link' class='col-12'> <a class='font-weight-bolder color-dark-tan' :href='page.featured.link.url' target="_blank">{{page.featured.link.text}}</a></h5>
                        </div>-->
                    </div>
            </div>

            <!--subtitle/body-->                    
            <template class='row' v-if='page.title'>
                <h1 class="color-red display-text text-uppercase text-center pt-4 pl-4 pr-4 pb-2 m-0" v-html="page.title"></h1>
            </template>
            <template class='row' v-if='page.subtitle'>
                <h4 class="color-red display-text text-uppercase text-center pt-4 pl-4 pr-4 pb-2 m-0" v-html="page.subtitle"></h4>
            </template>
            <template class='row pl-5 pr-5' v-if='page.body'>
                <div class='pb-4 pl-4 pr-4 m-0 display-text' v-html='page.body'></div>
            </template>

            <!-- acknowledgments/downloads/ext-links(content for no subpage)-->
            <template v-if='page.sections' >
                <div v-for='section,index in page.sections' :class='["container-fluid p-5 m-0 text-center", (index%2 == 0 ? "bg-light-tan" : "")]'>
                    <!-- body/title-->
                    <div class="row justify-content-center text-center">
                        <template v-if='section.title'>
                            <div class='col-12'>
                                <h3 class="font-weight-bolder text-uppercase display-text text-center" v-html="section.title"></h3>
                            </div>
                        </template>
                        <div class='container p-0 m-2' v-if='section.featured'>
                            <div class='col-12'>
                                <img v-lazy='section.featured.src' class='fixed-height-1 img-fluid'/>
                            </div>
                        </div>
                        <template v-if='section.body'>
                            <div class='col-12'>
                                <div class='display-text text-center' v-html='section.body'></div>
                            </div>
                        </template>
                    </div>
                </div>
            </template>


            <!--nested subpage links/preview-->
            <template v-if="page.subpages">
                <div v-for='subpage,index in page.subpages' class='container-fluid p-0 m-0 align-content-center'>
                    <!--show subpages-->
                    <!--even-->
                    <div v-if='index%2' class='row p-0 m-0'>
                        <div class='col-8 col-md-8 col-lg-8 d-none d-sm-none d-md-block d-lg-block p-5 m-0'>
                            <div class='img-container p-0 m-0'>
                                <img v-lazy='subpage.featured.src' class='fixed-height-3'/>
                            </div>
                        </div>
                         <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 p-5 m-0 d-flex justify-content-center flex-column '>
                        
                                <h1 class="text-center color-red text-uppercase align-self-center text-responsive" v-html="subpage.title"></h1>
                                    
                                <button v-if="subpage.externalURL" class='btn  btn-block btn-lg color-tan bg-red align-self-center' @click="gotoExternalURL(subpage.externalURL)">EXPLORE</button>
                                <router-link v-else class='btn  btn-block btn-lg color-tan bg-red align-self-center' :to='"/"+page.slug+"/"+subpage.slug'>EXPLORE</router-link>

                        </div>
                    </div> 
                    <!--odd-->
                    <div v-else class='row bg-light-tan p-0 m-0'>
                        <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 p-5 m-0 d-flex justify-content-center flex-column'>
                        
                                <h1 class="text-center font-bold color-red text-uppercase align-self-center text-responsive" v-html="subpage.title"></h1>


                                <button v-if="subpage.externalURL" class='btn  btn-block btn-lg color-tan bg-red align-self-center'  v-on:click="gotoExternalURL(subpage.externalURL)">EXPLORE</button>

                                <router-link v-else class='btn  btn-block btn-lg color-tan bg-red align-self-center' :to='"/"+page.slug+"/"+subpage.slug'>EXPLORE</router-link>

                        </div>
                        <div class='col-8 col-lg-8 col-md-8 d-none d-sm-none d-md-block d-lg-block p-5 m-0'>
                            <div class='img-container p-0 m-0'>
                                <img v-lazy="subpage.featured.src" class='fixed-height-3'/>
                            </div>
                        </div>
                    </div>

                </div>
            </template>

	   </div>`
};