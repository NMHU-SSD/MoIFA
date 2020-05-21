var routes = [
/*home*/
{ path: '/', component: Home,name:"home"},
    
/*1) Yokai Culture// art, history,lore*/
{ path: '/culture', component: Culture, name:"culture",props: true},
    
//secondary    
{ path: '/:pageid/:subpageid', component: Subpage, name:"subpage", props: true},
//tertiary
{ path: '/:pageid/:subpageid/:sectionid', component: Section, name:"section"},
      
	   
            //1a*)
            /*{ path: '/Culture/Art/:id', component: ''},
            //hardcode or use ids for data??
            { path: '/Culture/Art/VisualArt', component: ''},
            { path: '/Culture/Art/StagePerformance', component: ''},
            { path: '/Culture/Art/Storytelling', component: ''},
            { path: '/Culture/Art/Games', component: ''},
            { path: '/Culture/Art/Festivals', component: ''},
            
//        /*1b) Creatures*/
//       /* { path: '/Culture/Creatures/', component: ''},
//            /*1b*)*/
//            /*{ path: '/Culture/Creatures/:id', component: ''},*/
//            //hardcode or use ids for data?
//            { path: '/Culture/Creatures/Oni', component: ''},
//            { path: '/Culture/Creatures/Kappa', component: ''},
//            { path: '/Culture/Creatures/Kitsune', component: ''},
//            { path: '/Culture/Creatures/Tanuki', component: ''},
//            { path: '/Culture/Creatures/Tsukumogami', component: ''},
//            { path: '/Culture/Creatures/Yurei', component: ''},
//
//    /*2) MOIFA //Exhibition & catalog*/
//    { path: '/MOIFA', component: ''},
//        /*2a)Museum Exhihbits*/
//        { path: '/MOIFA/Exhibits', component: ''},
//            /*2a*)*/
//            { path: '/MOIFA/Exhibits/Gallery', component: ''},
//            { path: '/MOIFA/Exhibits/GhostStories', component: ''},
//            { path: '/MOIFA/Exhibits/MonsterHouse', component: ''},
//            { path: '/MOIFA/Exhibits/Collection', component: ''},
//        /*2b)Exhibit Catalogue- outside links??*/
//        { path: '/MOIFA/ExhibtionCatalog', component: ''},
//    
//    /*3) Education//al resources*/
//    { path: '/Education', component: ''},
//        /*3a)*/
//        { path: '/Education/MakeYokai', component: ''},//page for download links
//        /*3b)*/
//        { path: '/Education/Lessons', component: ''},//more download links
//        /*2)*/
//        { path: '/Education/OutsideLinks', component: ''},//more links
//    
//     /*4) Acknowledgments*/
//    { path: '/Acknowledgments', component: ''},
//        /*4a)*/
//        { path: '/Acknowledgments/Exhibition', component: ''},
//        /*4b)*/
//        { path: '/Acknowledgments/Website', component: ''}
//    /*
];


var data = {
	pages:
    [
        /*home*/
        {
            slug: "home",
            title:"<h3>VIVID IN JAPANESE ART AND IMAGINATION ARE CREATURES THAT ARE AT ONCE GHASTLY AND AMUSING.</h3>",
            body:"<p>Yōkai is a catchall word for ghosts, demons, monsters, shapeshifters, tricksters, and other kinds of supernatural beings and mysterious phenomena. Yōkai interact with the human world and spark common notions of frightful things.</p> <p>Yōkai can definitely be scary, but the experience of fear can also be amusing. When frightening beings copy human behavior, they become less intimidating and can appear playful, relatable, and even cute.</p><p>But yōkai are not all tame and cute. Perhaps the most terrifying yōkai are those that shed light on the faults of human society.</p><p>Who are the yōkai in your world?<br>Have you ever felt demonized?<br>Are you a yōkai?</p>",
            featured:   {
                source:"Assets/placeholder_images/homescreen_image.png",
                source2:"Assets/Logos/yokai_logo_color.svg",
                caption:"name,artist,date,locations"
            },
            images:[
                  {
                      source:"Assets/placeholder_images/performing_arts.png",
                      caption:"Art and History"
                  },
                  {
                      source:"Assets/placeholder_images/Ghost_stories.png",
                      caption:"MoIFA"
                  },
                  {
                      source:"Assets/placeholder_images/toys_and_games.png",
                      caption:"Educational Resources"
                  },
            ]
        },
        
        /*1*/
        {
            slug: "culture",
            title: "Yokai History, Art, Lore",
            body:"",
            subtitle:"",
            featured:{src:"%path%",caption:"description"},
            subpages: [
                {
                    slug: "history",
                    title:"Yokai: history to pop culture",
                    body:"",
                    subtitle:"",
                    sections:[
                        {
                            slug: "visual-art",
                            title:"Visual Art", 
                            body: "details", 
                            featured:{src:"%path%",caption:"description"}
                        }
                    ]
                },
                {
                    slug: "creatures",
                    title:"Yokai: Creature-Lore",
                    body:"",
                    subtitle:"",
                    featured:{ 
                        src:"%path%",
                        caption:"description"},
                    images:[
                        {
                            source:"Assets/placeholder_images/homescreenimage.png",
                            caption:"name,artist,date,locations"
                        }
                    ]
                }
            ]
        },
        
        /*2*/
        {
            slug: "exhibit",

            
        },
    ]
}

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
    },
    watch:{
        
        isHomepage: function(){
            console.log(this.isHomepage)
        }
    }
})
	