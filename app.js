var routes = [
/*home*/
{ path: '/', component: Home,name:"home"},
    
    /*1) Yokai Culture// art, history,lore*/
	{ path: '/Culture', component: Culture,name:"culture"},
        /*1a)art?*/
	    { path: '/Culture/:subid', component: Subpage,name:"subpage"},
            { path: '/Culture/:subid/:secid', component: Section,name:"section"},
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
        {title:"VIVID IN JAPANESE ART AND IMAGINATION ARE CREATURES THAT ARE AT ONCE GHASTLY AND AMUSING.",
        body:
         [{text: "<h1>Yōkai is a catchall word for ghosts, demons, monsters,\n shapeshifters, tricksters, and other kinds of supernatural beings \n and mysterious phenomena. Yōkai interact with the human world and spark common notions of frightful things.</h1>"},
         { text: "Yōkai can definitely be scary, but the experience of fear can also be amusing. When frightening beings copy human behavior, they become less intimidating and can appear playful, relatable, and even cute."},
         {text:"But yōkai are not all tame and cute. Perhaps the most terrifying yōkai are those that shed light on the faults of human society."},
         {text:"Who are the yōkai in your world?"},
         {text: "Have you ever felt demonized?"}, 
         {text: "Are you a yōkai?"}
         ],
        featured:{source:"Assets/placeholder_images/homescreenimage.png",caption:"name,artist,date,locations"},
        images:[
                  {},
              ]
        },
        
        /*1*/
        {title: "Yokai History, Art, Lore",
         body:"",
         subtitle:"",
         featured:{src:"%path%",caption:"description"},
         subpages:[
             {title:"Yokai: history to pop culture",
              body:"",
              subtitle:"",
              sections:[
                  {title:"Visual Art", body: "details", featured:{src:"%path%",caption:"description"}}
              ]
             },
             {title:"Yokai: Creature-Lore",
              body:"",
              subtitle:"",
              featured:{src:"%path%",caption:"description"},
              images:[
                  {
                      
                  }
              ]
             }
            ]
        },
        
        /*2*/
        {},
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

	data: {pages: data.pages, isHomepage: false},
    created(){
        console.log(this.$route.name)
    },
    mounted(){
    console.log(this.$route.name)
    }
})
	