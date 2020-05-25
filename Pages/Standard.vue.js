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
	template: `<div>
		<h1>{{ page.title }}</h1>
		<p>This is standard</p>
        <ol>
            <li v-for="subpage,index in page.subpages">
                <router-link class="nav-link" v-bind:to="{path:'/page.slug/'+ subpage.slug}"> {{ subpage.title }} </router-link>
            </li>
        </ol>
	</div>`
};