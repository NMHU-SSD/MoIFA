var Subpage = {
    props:['pages'],
    data: function(){
        var pageId = this.getPageId(this.$route.params.pageid);
        var subpageId = this.getSubPageId(this.$route.params.subpageid)
        console.log(this.pages[pageId].subpages[subpageId])
		return { 
            subpage: this.pages[pageId].subpages[subpageId],
            routepath: this.$route.path            
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
           return this.pages.indexOf(page);
        },
        getSubPageId(slug){
            var pageId = this.getPageId(this.$route.params.pageid);           
            var subpage = this.pages[pageId].subpages.find(subpage => subpage.slug == slug );

            return  this.pages[pageId].subpages.indexOf(subpage);
        }
    },
    
	template: `<div>
		<h1>{{ subpage.title }}</h1>
		<p>This is Subpage</p>
        <ol>
            <li v-for="section in subpage.sections">
                <router-link class="nav-link" v-bind:to="{path: routepath+'/'+ section.slug}"> {{ section.title }} </router-link>
            </li>
        </ol>

	</div>`
};