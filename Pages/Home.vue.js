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
                        <div class="p-1" v-for="bodyItem in page.body">
                                
                            <span class="font-normal">
                                    <p v-html="bodyItem.text"></p>
                            </span>
                        </div>
                            </br>
                            <p class="font-normal">
                                {{ page.body[0].text }}
                            </p>
                            <p class="font-normal">
                                {{ page.body[1].text }}
                            </p>
                            <p class="font-normal">
                                {{ page.body[2].text }}
                            </p>
                            <p class="font-normal">
                                {{ page.body[3].text }}
                                </br>
                                {{ page.body[4].text }}
                                </br>
                                {{ page.body[5].text }}
                            </p>
                        </div>


                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 m-0 p-0 bg-black align-self-center">
                        <img :src="page.featured.source" class="img-fluid pt-5 pl-5 pb-2 m-0 fixed-height-2 w-100"/>
                    </div>
                </div>        
            </div>`
};