var Home = {
    props:['pages'],
    data: function(){
		return { 
			page: this.pages[0]
		}
		
	},
	template:  `<div class="container-fluid p-0 m-0">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 bg-tertiary align-self-top p-5">
                            <p class="h3 font-bold"> 
                                {{ page.title }}
                            </p>
                        <div v-html="page.body"></div>
                    
                        </div>


                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 m-0 p-0 bg-black align-self-center">
                        <img :src="page.featured.source" class="img-fluid pt-5 pl-5 pb-2 m-0 fixed-height-2 w-100"/>
                    </div>
                </div>        
            </div>`
};