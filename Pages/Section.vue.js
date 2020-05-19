var Section = {
    props:['pages'],
    data: function(){
		return { 
			subpage: this.pages[this.$route.params.id].subpages[this.$route.params.subid].sections[this.$route.params.secid]
		}
		
	},
	template: `<div>
		<h1>{{ pages[0].title }}</h1>
		<p>This is Subpage</p>
	</div>`
};