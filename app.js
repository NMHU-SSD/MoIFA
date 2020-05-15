var routes = [
/*home*/
{ path: '/', component: '<p> Home</p>' },
    
    /*1) Yokai Culture// art, history,lore*/
	{ path: '/Culture', component: ''},
        /*1a)art?*/
	    { path: '/Culture/Art', component: ''},
            //1a*)
            /*{ path: '/Culture/Art/:id', component: ''},*/
            //hardcode or use ids for data??
            { path: '/Culture/Art/VisualArt', component: ''},
            { path: '/Culture/Art/StagePerformance', component: ''},
            { path: '/Culture/Art/Storytelling', component: ''},
            { path: '/Culture/Art/Games', component: ''},
            { path: '/Culture/Art/Festivals', component: ''},
        /*1b) Creatures*/
        { path: '/Culture/Creatures/', component: ''},
            /*1b*)*/
            /*{ path: '/Culture/Creatures/:id', component: ''},*/
            //hardcode or use ids for data?
            { path: '/Culture/Creatures/Oni', component: ''},
            { path: '/Culture/Creatures/Kappa', component: ''},
            { path: '/Culture/Creatures/Kitsune', component: ''},
            { path: '/Culture/Creatures/Tanuki', component: ''},
            { path: '/Culture/Creatures/Tsukumogami', component: ''},
            { path: '/Culture/Creatures/Yurei', component: ''},

    /*2) MOIFA //Exhibition & catalog*/
    { path: '/MOIFA', component: ''},
        /*2a)Museum Exhihbits*/
        { path: '/MOIFA/Exhibits', component: ''},
            /*2a*)*/
            { path: '/MOIFA/Exhibits/Gallery', component: ''},
            { path: '/MOIFA/Exhibits/GhostStories', component: ''},
            { path: '/MOIFA/Exhibits/MonsterHouse', component: ''},
            { path: '/MOIFA/Exhibits/Collection', component: ''},
        /*2b)Exhibit Catalogue- outside links??*/
        { path: '/MOIFA/ExhibtionCatalog', component: ''},
    
    /*3) Education//al resources*/
    { path: '/Education', component: ''},
        /*3a)*/
        { path: '/Education/MakeYokai', component: ''},//page for download links
        /*3b)*/
        { path: '/Education/Lessons', component: ''},//more download links
        /*2)*/
        { path: '/Education/OutsideLinks', component: ''},//more links
    
     /*4) Acknowledgments*/
    { path: '/Acknowledgments', component: ''},
        /*4a)*/
        { path: '/Acknowledgments/Exhibition', component: ''},
        /*4b)*/
        { path: '/Acknowledgments/Website', component: ''}
    
];




var data = {
	Arts:
    [
		{
			title: "Visual Art",
			details: "Stuff about the art",
			otherValue: 0
		},
        {
			title: "Stage Performace",
			details: "Stuff about the art",
			otherValue: 0
		},
        {
			title: "Storytelling",
			details: "Stuff about the art",
			otherValue: 0
		},
        {
			title: "Games",
			details: "Stuff about the art",
			otherValue: 0
		},
        {
			title: "Festivals",
			details: "Stuff about the art",
			otherValue: 0
		}
	],
    Monsters:
    [
		{
			name: "Oni",
			desc: "Stuff about the creature",
			otherValue: 0
		},
        {
			name: "Kappa",
			desc: "Stuff about the the creature",
			otherValue: 0
		},
        {
			name: "Kitsune",
			desc: "Stuff about the the creature",
			otherValue: 0
		},
        {
			name: "Tanuki",
			desc: "Stuff about the creature",
			otherValue: 0
		},
        {
			name: "Tsukumogami",
			desc: "Stuff about the creature",
			otherValue: 0
		},
        {
			name: "Yurei",
			desc: "Stuff about the creature",
			otherValue: 0
		}
	]
    
    
}