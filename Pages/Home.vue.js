var Home = {
    props:['pages'],
    data: function(){
		return { 
			page: this.pages[0]
		}
		
	},
	template:  `

<div class="container-fluid p-0 m-0">
    <div class="row bg-black">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 bg-tan m-0 p-5 d-none d-sm-none d-lg-inline">
                <h3 class="text-left color-red" v-html="page.title">
                </h3>
                <span v-html="page.body"></span>
                <div  class='text-right justify-content-end' v-html="page.featured.credit"></div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 m-0 p-0 pl-6 img-container">
            <img v-lazy="page.featured.src" class="img-fluid p-0 m-0 w-100"/>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 bg-tan m-0 p-5 d-inline d-xs-inline d-sm-inline d-md-inline d-lg-none">
            <h3 class="text-left color-red" v-html="page.title"></h3>
            <div v-html="page.body"></div>
            <div class='text-right justify-content-end' v-html="page.featured.credit></div>        
        </div>
    </div>
    <div class="row" v-for="p,index in pages">
        <div v-if="index > 0" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-0 p-0">
            <router-link class="nav-link img-container p-0 m-0" :to="p.slug">
                <img class="fluid-width fixed-height-1" v-lazy="p.featured.src"/>
                <h1 class="overlay-text color-tan" v-html="p.title"></h1>
            </router-link>
        </div>  
    </div>
</div>
</div>
`
};