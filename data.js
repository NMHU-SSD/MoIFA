var data = {
	pages:
    [
        /*home*/
        {
            slug: "home",
            title:"<h3 class='text-justify color-secondary'>VIVID IN JAPANESE ART AND IMAGINATION ARE CREATURES THAT ARE AT ONCE GHASTLY AND AMUSING.</h3>",
            body:"<p>Yōkai is a catchall word for ghosts, demons, monsters, shapeshifters, tricksters, and other kinds of supernatural beings and mysterious phenomena. Yōkai interact with the human world and spark common notions of frightful things.</p> <p >Yōkai can definitely be scary, but the experience of fear can also be amusing. When frightening beings copy human behavior, they become less intimidating and can appear playful, relatable, and even cute.</p><p>But yōkai are not all tame and cute. Perhaps the most terrifying yōkai are those that shed light on the faults of human society.</p><p>Who are the yōkai in your world?<br>Have you ever felt demonized?<br>Are you a yōkai?</p>",
            featured:   {
                source:"Assets/placeholder_images/homescreen_image2.jpg",
                caption:
                `<div class='text-right'>
                    <span class='font-weight-bolder'><u>AO BŌZU (BLUE MONK)</u></span> <br>  
                    <span class='font-weight-bolder'>KŌNO JUNYA</span> <br>
                    <span class='font-size-1'>2006</span> <br>
                    <span class='font-size-1'>Kyoto</span> <br>
                    <span class='font-size-1'>Papier-mâché, craft foam, paint</span>
                </div>`
            }
        },
        
        /*1*/
        {
            slug: "culture",
            title: "Yokai History, Art, Lore",
            body:"",
            subtitle:"",
             featured:   {
                source:"Assets/placeholder_images/performing_arts.png",
                caption:"name,artist,date,locations"
            },
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
                            source:"Assets/placeholder_images/preforming_arts.jpg",
                            caption:"name,artist,date,locations"
                        }
                    ]
                }
            ]
        },
        
        /*2*/
        {
            slug: "exhibition",
            title:"Exhibition & Catalogue",
            featured:   {
                source:"Assets/placeholder_images/ghost_stories.png",
                caption:"name,artist,date,locations"
            },

            
        },
        
        /*3*/
        {
            slug: "resources",
            title:"Educational Resources",
            featured:   {
                source:"Assets/placeholder_images/Toys_and_games.png",
                caption:"name,artist,date,locations"
            },

        },
        /*4*/
        {
            slug: "acknowledgements",
            title:"Acknowledgements",
            featured:   {
                source:"Assets/placeholder_images/Toys_and_games.png",
                caption:"name,artist,date,locations"
            },

        }
    ]
}
console.log(data);