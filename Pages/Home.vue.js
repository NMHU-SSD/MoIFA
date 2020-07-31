var Home = {
    props:['pages'],
    data: function(){
		return { 
			page: this.pages[0]
		}
		
	},
	template:  `
<div class="container-fluid p-0">
    
    <!--landing description and image/2 displays-->
    <div class="row bg-black">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 bg-tan m-0 p-5 d-none d-sm-none d-lg-inline">
                <h3 class="text-left color-red text-uppercase" v-html="page.title">
                </h3>
                <div v-html="page.body"></div>
                
                <div class='blockquote text-right mt-auto' v-if="page.featured">
                    <p class="credit-spacing font-weight-bolder p-0 m-0 h6">{{page.featured.credit.title}}</p>
                    <p class="credit-spacing font-weight-bolder p-0 m-0 h6">{{page.featured.credit.artist}}</p>
                    <p class='credit-spacing font-weight-lighter p-0 m-0 font-size-1'>{{page.featured.credit.date}}</p>
                    <p class='credit-spacing font-weight-lighter p-0 m-0 font-size-1'>{{page.featured.credit.medium}}</p>
                    <p class='credit-spacing font-weight-lighter p-0 m-0 font-size-1'>{{page.featured.credit.collection}}</p>
                    <a class='color-red font-weight-lighter p-0 m-0 font-size-1' :href="page.featured.credit.link.url">{{page.featured.credit.link.text}}</a>
                </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 m-0 p-0 img-container">
            <img v-lazy="page.featured.src" class="img-fluid home-img  p-0 m-0 w-100"/>
            
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 bg-tan m-0 pt-3 pb-5 pr-5 pl-5 d-inline d-xs-inline d-sm-inline d-md-inline d-lg-none">
             <div class='blockquote text-right justify-content-end pb-5'>
                    <p class="credit-spacing font-weight-bolder p-0 m-0 h6">{{page.featured.credit.title}}</p>
                    <p class="credit-spacing font-weight-bolder p-0 m-0 h6">{{page.featured.credit.artist}}</p>
                    <p class='credit-spacing font-weight-lighter p-0 m-0 font-size-1'>{{page.featured.credit.date}}</p>
                    <p class='credit-spacing font-weight-lighter p-0 m-0 font-size-1'>{{page.featured.credit.medium}}</p>
                    <p class='credit-spacing font-weight-lighter p-0 m-0 font-size-1'>{{page.featured.credit.collection}}</p>
                    <a class='color-red font-weight-lighter p-0 m-0 font-size-1' :href="page.featured.credit.link.url">{{page.featured.credit.link.text}}</a>
             </div>
             <h3 class="text-left color-red text-uppercase" v-html="page.title"></h3>
             <div v-html="page.body"></div>
        </div>
    </div>


    <!-- page navigation -->
    <template v-if="pages">

        <div v-for='page,index in pages' v-if='index !== 0' class='container-fluid p-0 m-0 align-content-center'>
                    <!--show pages-->
                    <!--even-->
                    <div v-if='index%2 == 0' class='row p-2 m-0'>
                        <div class='col-9 col-md-8 col-lg-9 d-none d-sm-none d-md-block d-lg-block p-5 m-0'>
                            <div class='img-container p-0 m-0'>
                                <img v-lazy='page.featured.src' class='fixed-height-3'/>
                            </div>
                        </div>
                         <div class='col-xs-12 col-sm-12 col-md-4 col-lg-3 p-5 m-0 d-flex justify-content-center flex-column '>
                        
                                <h1 class="text-center color-red text-uppercase align-self-center text-responsive" v-html="page.title"></h1>
                                    
                                <button v-if="page.externalURL" class='btn  btn-block btn-lg color-tan bg-red align-self-center' @click="gotoExternalURL(page.externalURL)">EXPLORE</button>
                                <router-link v-else class='btn  btn-block btn-lg color-tan bg-red align-self-center' :to='"/"+page.slug+"/"'>EXPLORE</router-link>

                        </div>
                    </div> 
                    <!--odd-->
                    <div v-else class='row bg-light-tan p-5 m-0'>
                        <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 p-5 m-0 d-flex justify-content-center flex-column'>
                        
                                <h1 class="text-center font-bold color-red text-uppercase align-self-center text-responsive" v-html="page.title"></h1>


                                <button v-if="page.externalURL" class='btn  btn-block btn-lg color-tan bg-red align-self-center'  v-on:click="gotoExternalURL(page.externalURL)">EXPLORE</button>

                                <router-link v-else class='btn  btn-block btn-lg color-tan bg-red align-self-center' :to='"/"+page.slug+"/"'>EXPLORE</router-link>

                        </div>
                        <div class='col-8 col-lg-8 col-md-8 d-none d-sm-none d-md-block d-lg-block p-5 m-0'>
                            <div class='img-container p-0 m-0'>
                                <img v-lazy="page.featured.src" class='fixed-height-3'/>
                            </div>
                        </div>
                    </div>

                </div>
            </template>


    
    <!--<div class="row bg-light-tan" v-for="p,index in pages" v-if="index > 0">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-0 p-0">
                <router-link class="nav-link img-container p-0 m-0" :to="p.slug">
                    <img class="fluid-width fixed-height-3" v-lazy="p.featured.src"/>
                    <h1 class="overlay-text text-uppercase color-tan bg-red pb-0 pl-2 pr-2 pt-2 m-0">{{p.title}}</h1>
                </router-link>
            </div>
    </div>-->




</div>
`
};