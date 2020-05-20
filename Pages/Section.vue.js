var Section = {
    props:['pages'],
    data: function(){
        var pageId = this.getPageId(this.$route.params.pageid); 
        var subpageId = this.getSubPageId(this.$route.params.subpageid)
        var sectionId = this.getSectionId(this.$route.params.sectionid)

		return { 
			section: this.pages[pageId].subpages[subpageId].sections[sectionId]
		}
		
	},
    methods:{
         getPageId(slug){
            var page = this.pages.find(page => page.slug == slug );//find match
            return this.pages.indexOf(page);//return index position
         },
         getSubPageId(slug){
             var pageId = this.getPageId(this.$route.params.pageid);
             var subpage = this.pages[pageId].subpages.find(subpage => subpage.slug == slug );//find match
             return  this.pages[pageId].subpages.indexOf(subpage);//return index position
         },
         getSectionId(slug){
             var pageId = this.getPageId(this.$route.params.pageid);
             var subpageId = this.getSubPageId(this.$route.params.subpageid)
             var section = this.pages[pageId].subpages[subpageId].sections.find(section => section.slug == slug );//find match
             return this.pages[pageId].subpages[subpageId].sections.indexOf(section);//return index position
         }
    },
	template: `<div>
		<h1>{{ section.title }}</h1>
		<p>This is a Section of a subpage</p>
	</div>`
};