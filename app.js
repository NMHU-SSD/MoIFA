
var routes = [
/*home*/
{ path: '/', component: Home,name:"home"},
    
//primary for spcific page

    
//primary
{ path: '/:pageid', component: Standard, name:"standard",props: true},
    
//secondary    
{ path: '/:pageid/:subpageid', component: Subpage, name:"subpage", props: true},
//tertiary
//{ path: '/:pageid/:subpageid/:sectionid', component: Section, name:"section"},

];

var router = new VueRouter({
  routes: routes,
  base: '/',
  //mode: 'history'
});


Vue.component('carousel', Carousel);
Vue.component('single-image', SingleImage);
Vue.component('credits-component', Credits);
Vue.component('gallery', VueGallery);

Vue.use(VueLazyload);

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
    },
    watch:{
        isHomepage: function(){
            console.log(this.isHomepage)
        }
    }
})
	