var data = {
	pages:
    [
        /*home*/
        {
            slug: "home",
            title:"VIVID IN JAPANESE ART AND IMAGINATION ARE CREATURES THAT ARE AT ONCE GHASTLY AND AMUSING.",
            body:"<p><span class='font-weight-bolder'>Yōkai is a catchall word for,</span> ghosts, demons, monsters, shapeshifters, tricksters, and other kinds of supernatural beings and mysterious phenomena. Yōkai interact with the human world and spark common notions of frightful things.</p> <p >Yōkai can definitely be scary, but the experience of fear can also be amusing. When frightening beings copy human behavior, they become less intimidating and can appear playful, relatable, and even cute.</p><p>But yōkai are not all tame and cute. Perhaps the most terrifying yōkai are those that shed light on the faults of human society.</p><span class='font-weight-bolder'><p>Who are the yōkai in your world?<br>Have you ever felt demonized?<br>Are you a yōkai?</p></span>",
            featured:   {
                src:"Assets/placeholder_images/homescreen_image2.jpg",
                caption:
                `<div>
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
            title: "YOKAI! HISTORY, ART, LORE",
            subtitle: "YOKAI! FROM HISTORY TO POP CULTURE", 
            body:`<p>Japan is notorious for its variety of yokai. Early ideas of yokai were based in religion and they appeared in art as demons (oni) with horns and fangs.</p>
            <p>Yokai expanded from demons into a wide range of creatures and, in Japan today, they are pop-culture sensations. Yokai popularity grew over the centuries as they were presented in different cultural forms including visual arts, stage performance, storytelling, and games. Yokai are now such smash hits that some Japanese cities and prefectures have reshaped traditional images of demons and demon-like deities for festivals and tourist attractions. Yokai have even been modified as cute regional mascots.</p>`,
             featured:   {
                src:"Assets/placeholder_images/performing_arts.png",
                caption:"name,artist,date,locations"
            },
            subpages: [
                {
                    slug: "visual-arts",
                    title:"VISUAL ART",
                    subtitle:"HOW VISUAL ARTISTS MADE YOKAI POPULAR",
                    featured:   {
                    src:"Assets/content/yokai/visual-art/visual-art.jpg",
                    caption:"name,artist,date,locations"
                    },   
                    sections:[
                        {
                            slug: "early-painting",
                            title:"EARLY PAINTINGS", 
                            body: "details", 
                            featured:{src:"Assets/content/yokai/visual-art/Sekien-1.jpg",caption:"description"}
                        }
                    ]
                },
                {
                    slug: "stage-performance",
                    title:"STAGE PERFORMANCE",
                    body:`<p>Like visual arts, performance is one of the cultural modes that popularized yokai stories and imagery. Stage theater was particularly popular during the Edo period (1603–1867) and numerous classical plays feature ghost, demon, and monster-like characters. These characters and their stories have enjoyed long-lasting appeal. Ghostly stage presentations from centuries ago inform today’s iconic image of vengeful female ghosts, with long disheveled hair, a white death kimono, and no feet. A number of contemporary Japanese horror films feature these images and they have also made their way into Hollywood blockbusters.</p>

                    <p>Among the forms of traditional Japanese stage performance that portray demons and ghosts are puppetry, noh, and kabuki theater.</p>`,
                    subtitle:"",
                    featured:{
                    src:"Assets/content/yokai/performance/noh-mask.jpg",
                    caption:"name,artist,date,locations"
                    },
                    sections:[
                        {
                            slug: "puppetry",
                            title:"PUPPETRY", 
                            body: "details", 
                            featured:{src:"%path%",caption:"description"}
                        }
                    ]
                },
                {
                    slug: "story-telling",
                    title:"STORY TELLING",
                    body:"",
                    subtitle:"",
                    featured:{
                    src:"Assets/content/yokai/storytelling/stories.jpg",
                    caption:"name,artist,date,locations"
                    },
                    sections:[
                        {
                            slug: "videos",
                            title:"VIDEOS", 
                            body: "details", 
                            featured:{src:"%path%",caption:"description"}
                        }
                    ]
                },
                {
                    slug: "toys-and-games",
                    title:"TOYS AND GAMES",
                    body:"",
                    subtitle:"",
                    featured:{
                    src:"Assets/content/yokai/toys-and-games/menko-cards.jpg",
                    caption:"name,artist,date,locations"
                    },
                    sections:[
                        {
                            slug: "early-painting",
                            title:"EARLY PAINTINGS", 
                            body: "details", 
                            featured:{src:"%path%",caption:"description"}
                        }
                    ]
                },
                 {
                    slug: "festivals",
                    title:"FESTIVALS",
                    body:"",
                    subtitle:"",
                    featured:{
                    src:"Assets/content/yokai/festivals/ushioni-matsuri.jpg",
                    caption:"name,artist,date,locations"
                    },
                    sections:[
                        {
                            slug: "early-painting",
                            title:"EARLY PAINTINGS", 
                            body: "details", 
                            featured:{src:"%path%",caption:"description"}
                        }
                    ]
                },
                {
                    slug: "creatures",
                    title:"YOKAI! CREATURE-LORE",
                    body:"",
                    subtitle:"",
                    featured:{
                    src:"Assets/content/yokai/creature-lore/creature-lore.jpg",
                    caption:"name,artist,date,locations"
                    },
                    images:[
                        {
                            src:"Assets/placeholder_images/preforming_arts.jpg",
                            caption:"name,artist,date,locations"
                        }
                    ]
                }
            ]
        },
        
        /*2*/
        {
            slug: "exhibition",
            title:"EXHIBITION & CATALOG",
            featured:   {
                src:"Assets/placeholder_images/ghost_stories.png",
                caption:"name,artist,date,locations"
            },

            
        },
        
        /*3*/
        {
            slug: "resources",
            title:"EDUCATIONAL RESOURCES",
            featured:   {
                src:"Assets/placeholder_images/Toys_and_games.png",
                caption:"name,artist,date,locations"
            },

        },
        /*4*/
        {
            slug: "acknowledgements",
            title:"ACKNOWLEDGEMENTS",
            featured:   {
                src:"Assets/placeholder_images/homescreen_image.png",
                caption:"name,artist,date,locations"
            },

        }
    ]
}
console.log(data);