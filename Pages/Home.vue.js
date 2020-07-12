var Home = {
    props:['pages'],
    data: function(){
		return { 
			page: this.pages[0]
		}
		
	},
	template:  `
<div class="container-fluid">
    <!--landing description and image/2 displays-->
    <div class="row bg-black">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 bg-tan m-0 p-5 d-none d-sm-none d-lg-inline">
                <h3 class="text-left color-red" v-html="page.title">
                </h3>
                <div v-html="page.body"></div>
                
                <div class='blockquote text-right justify-content-end'>
                    <span class="font-weight-bolder">{{page.featured.credit.title}}</span><br>
                    <span class="font-weight-bolder">{{page.featured.credit.artist}}</span><br>
                    <span class='font-weight-lighter h6'>{{page.featured.credit.date}}</span> <br>
                    <span class='font-weight-lighter h6'>{{page.featured.credit.medium}}</span>
                </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 m-0 p-0 img-container">
            <img v-lazy="page.featured.src" class="img-fluid p-0 m-0 w-100"/>
            
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 bg-tan m-0 pt-3 pb-5 pr-5 pl-5 d-inline d-xs-inline d-sm-inline d-md-inline d-lg-none">
             <div class='blockquote text-right justify-content-end pb-5'>
                    <span class="font-weight-bolder">{{page.featured.credit.title}}</span><br>
                    <span class="font-weight-bolder">{{page.featured.credit.artist}}</span><br>
                    <span class='font-weight-lighter h6'>{{page.featured.credit.date}}</span> <br>
                    <span class='font-weight-lighter h6'>{{page.featured.credit.medium}}</span>
            </div>
            <h3 class="text-left color-red" v-html="page.title"></h3>
            <div v-html="page.body"></div>
        </div>
    </div>
    <!-- page naveigation -->
    <div class="row" v-for="p,index in pages">
        <div v-if="index > 0" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-0 p-0">
            <router-link class="nav-link img-container p-0 m-0" :to="p.slug">
                <img class="fluid-width fixed-height-1" v-lazy="p.featured.src"/>
                <h1 class="overlay-text color-tan bg-red pb-0 pl-2 pr-2 pt-2 m-0">{{p.title}}</h1>
            </router-link>
        </div>  
    </div>
</div>
`
};