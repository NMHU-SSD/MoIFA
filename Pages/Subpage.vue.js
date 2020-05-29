var Subpage = {
    props:['pages'],
    data: function(){
        var pageId = this.getPageId(this.$route.params.pageid);
        var subpageId = this.getSubPageId(this.$route.params.subpageid)
        console.log(this.pages[pageId].subpages[subpageId])
		return { 
            subpage: this.pages[pageId].subpages[subpageId],
            routepath: this.$route.path  //get current route path          
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
            console.log(this.pages[pageId]);    
            var subpage = this.pages[pageId].subpages.find(subpage => subpage.slug == slug );

            return  this.pages[pageId].subpages.indexOf(subpage);//return index position
        }
    },
    
	template: `<div class="container pt-5">
		<h1>{{ subpage.title }}</h1>
		<h5 v-html="subpage.subtitle"></h5>
        
        <figure class="figure">
            <img :src="subpage.featured.src ">
            <figcaption class="figure-caption">{{subpage.featured.caption}}</figcaption>
        </figure>

        <p>{{ subpage.body }}</p>

        <ol>
            <li v-for="section in subpage.sections">
                <router-link class="nav-link" v-bind:to="{path: routepath+'/'+ section.slug}"> {{ section.title }} </router-link>
            </li>
        </ol>

	</div>`
};