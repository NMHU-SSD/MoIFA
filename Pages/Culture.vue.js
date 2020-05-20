var Culture = {

    props:['pages'],
    data: function(){
		return { 
			page: this.pages[1]
		}
	},
	template: `<div>
		<h1>{{ page.title }}</h1>
		<p>This is standard</p>
        <ol>
            <li v-for="subpage,index in page.subpages">
                <router-link class="nav-link" v-bind:to="{path:'/culture/'+ subpage.slug}"> {{ subpage.title }} </router-link>
            </li>
        </ol>
	</div>`
};