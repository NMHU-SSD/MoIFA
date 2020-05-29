var data = {
	pages:
    [
        /*home*/
        {
            slug: "home",
            title:"VIVID IN JAPANESE ART AND IMAGINATION ARE CREATURES THAT ARE AT ONCE GHASTLY AND AMUSING.",
            body:"<p><span class='font-weight-bolder'>Yōkai is a catchall word for,</span> ghosts, demons, monsters, shapeshifters, tricksters, and other kinds of supernatural beings and mysterious phenomena. Yōkai interact with the human world and spark common notions of frightful things.</p> <p >Yōkai can definitely be scary, but the experience of fear can also be amusing. When frightening beings copy human behavior, they become less intimidating and can appear playful, relatable, and even cute.</p><p>But yōkai are not all tame and cute. Perhaps the most terrifying yōkai are those that shed light on the faults of human society.</p><span class='font-weight-bolder'><p>Who are the yōkai in your world?<br>Have you ever felt demonized?<br>Are you a yōkai?</p></span>",
            featured:   {
                src:"Assets/content/homepage/ao-bozu.jpg",
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
                src:"Assets/content/yokai/visual-art/print-Kuniyoshi-Earth-Spider.jpg",
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
                    subtitle:"How Stage Performance made Yokai Popular",
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
                            title:"Awa Ningyo Joruri (Puppetry)", 
                            body: "The legend of Dojoji Temple is set in Wakayama in the year 929, the play Hidakagawa iriaizakura, centers on the lovelorn Kiyohime, a monk named Anchin, and the destructive nature of obsessive passion. Kiyohime falls in love with Anchin but he rejects her. Kiyohime’s rage, damaged pride, and emotional pain overtake her and she loses complete control of herself and her humanity. She transforms into a serpent-demon, swims across a river, and makes her way to Dojoji Temple, where Anchin hides from her under a large bronze bell. She finds him, coils herself around the bell, spitting flames until Anchin burns to ashes.", 
                            featured:{
                                src:"",
                                caption:"description"
                            }
                        }
                    ]
                },
                {
                    slug: "story-telling",
                    title:"STORY TELLING",
                    body:"",
                    subtitle:"",
                    featured:{
                    src:"Assets/content/yokai/storytelling/bancho-screenshot.png",
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
            subtitle: "YŌKAI: Ghosts & Demons of Japan <br> (December 6, 2019 – January 16, 2022)",
            body: "",
            featured:   {
                src:"Assets/content/exhibit/gallery/Y200331002-hires.jpg",
                caption:"name,artist,date,locations"
            },
            subpages: [
                {
                    slug: "gallery",
                    title:"EXHIBITION GALLERY",
                    featured: {
                        src:"Assets/content/exhibit/gallery/Y200331001.jpg", 
						caption:""
                    }
                },
                {
                    slug: "catalogue",
                    title:"EXHIBITION CATALOGUE BOOK",
                    subtitle: "Edited by: Felicia Katz-Harris<br>Foreword by: Khristaan Villela, PhD<br>Contributors: Komatsu Kazuhiko; Noriko Tsunoda Reider, PhD; Satoko Shimazaki, PhD; Michael Dylan Foster, PhD; Adam Kabat, PhD; Kagawa Masanobu, PhD; Zack Davisson; Yumoto Kōichi; Kōno Junya",
                    featured: {
                        src:"Assets/content/exhibit/catalogue/book-cover.jpg",
                        link: {
                            url: "https://shopmuseum.org/collections/exhibit-related-books/products/yokai-ghosts-demons-monsters-of-japan",
                            text: "Available at the Museum of International Folk Art Shop"
                        }
                    },
                    body: "Vivid in Japanese art and imagination are creatures that are at once ghastly and humorous. The Japanese word yōkai generally refers to a range of supernatural beings such as ghosts, demons, monsters, shapeshifters, tricksters, and other strange kinds of creatures. While their status is commonly described as supernatural, they intermingle with and appear in the natural, human world. Today, yōkai are wildly popular in Japan—prevalent across contemporary entertainment genres such as manga (“comics”) and anime (“animation”) series, horror movies, and video games, and they also manifest as the subject of related material culture objects like game cards, character t-shirts, cuddly plushies, and collectable gashapon capsule toys. This diverse array of yōkai imagery and materiality is deeply rooted in the past. Yōkai images and their stories are enduring, and there is no question that what we see in hot commodities today is closely aligned with the traditional Japanese folklore. This new book explores yōkai through multiple perspectives: what they are, their associated tales, how people engage with or interpret them in different contexts, and why they remain so popular in Japan. The contributors to this book are eminent scholars, creators, and promoters of various aspects of yōkai culture. The interdisciplinary nature of this book’s presentation vibrantly illustrates yōkai from different angles, allowing for a broad view of their cultural scope in Japan. In addition, the contributors delve into popular culture themes, connecting traditional folklore, folk art, and imagery to trends in Japan as well as in the United States."
                },
                {
                    
                     externalURL:"http://collection.internationalfolkart.org/collections/24685/yokai-exhibit/objects",
                    title:"EXHIBITION COLLECTION",
                    featured: {                       
						 src:"Assets/content/exhibit/collection/emuseum.jpg",
                     caption:"name,artist,date,locations"
                    }
                }
                
            ]

            
        },
        
        /*3*/
        {
            slug: "resources",
            title:"EDUCATIONAL RESOURCES",
            subtitle:"Learn More about Yokai",
            body:"",
            featured:   {
                src:"Assets/content/",
                caption:"name,artist,date,locations"
            },
            //ul of links
            links: [
                {
                    url: "",
                    text: ""
                },
            ]

        },
        /*4*/
        {
            slug: "acknowledgements",
            title:"ACKNOWLEDGEMENTS",
            
            featured:   {
                src:"Assets/content/",
                caption:"name,artist,date,locations"
            },
            body:""

        }
    ]
}
console.log(data);