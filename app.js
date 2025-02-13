
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
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
  //mode: 'history'
});

Vue.component('cards-component', Cards);
Vue.component('carousel', Carousel);
Vue.component('single-image', SingleImage);
Vue.component('credits-component', Credits);
Vue.component('video-gallery', VideoGallery)
Vue.component('gallery', VueGallery);

Vue.use(VuePreview);
Vue.use(VueLazyload, {
	preLoad: 1.3,
	loading: 'Assets/loading.gif',
	attempt: 1
});

var app = new Vue({
	el: '#app',
    router: router,
	data: { pages: data.pages, isHomepage: false},
    mounted(){
        //auto close when selecting nav item
      $('.nav-link').on('click',function() {
          $('.navbar-collapse').collapse('hide');
      });
        //auto close when selecting nav dropdown item
      $('.dropdown-item').on('click',function() {
          $('.navbar-collapse').collapse('hide');
      });
    },
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
	