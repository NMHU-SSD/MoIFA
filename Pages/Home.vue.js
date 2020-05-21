var Home = {
    props:['pages'],
    data: function(){
		return { 
			page: this.pages[0]
		}
		
	},
	template:  `<div class="container-fluid p-0 m-0">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 bg-tertiary m-0 p-5">
                            <p class="font-bold" v-html="page.title">
                            </p>
                        <div v-html="page.body"></div>
                    
                        </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 m-0 p-0 bg-black img-container">
                            <img :src="page.featured.source" class="img-fluid  p-0 pl-5 m-0 w-100 fixed-height-2"/>
                        <div class="img-offset" >
                            <img :src="page.featured.source2" class="img-logo"/>
                        </div>
                    </div>
                </div>
                <div class="row" v-for="image,index in page.images">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-0 p-0">
                        <router-link class="nav-link img-stretch p-0 m-0" to="/culture">
                            <img class="img-stretch" :src="page.images[index].source"/>
                            <h1 class="caption font-bold">{{ page.images[index].caption }}</h1>
                        </router-link>
                    </div>  
                </div>
            </div>`
};