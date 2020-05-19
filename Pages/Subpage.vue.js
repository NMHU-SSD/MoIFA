var Subpage = {
    props:['pages'],
    data: function(){
		return { 
			subpage: this.pages[this.$route.params.id].subpages[this.$route.params.subid]
		}
		
	},
	template: `<div>
		<h1>{{ pages[0].title }}</h1>
		<p>This is Subpage</p>
	</div>`
};