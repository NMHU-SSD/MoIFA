var routes = [
/*home*/
{ path: '/', component: Home,name:"home"},
    
//primary
{ path: '/:pageid', component: Standard, name:"standard",props: true},
    
//secondary    
{ path: '/:pageid/:subpageid', component: Subpage, name:"subpage", props: true},
//tertiary
{ path: '/:pageid/:subpageid/:sectionid', component: Section, name:"section"},

];

var router = new VueRouter({
  routes: routes,
  base: '/',
  //mode: 'history'
});

var app = new Vue({
	el: '#app',
    router: router,
	data: { pages: data.pages, isHomepage: false},
    updated(){
        console.log(this.$route)
        if (this.$route.name == "home"){
            this.isHomepage = true
        } else {
            this.isHomepage = false
        }
        location.reload(); 
    },
    watch:{
        
        isHomepage: function(){
            console.log(this.isHomepage)
        }
    }
})
	