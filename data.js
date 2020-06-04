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
                    body:`The repertoire of bizarre creatures in Japan was expanded by painters of the Muromachi period (1336 - 1573). These artists borrowed traditional characters found in serious religious images, such as horned and hideous demons (oni), and added to the assortment by illustrating oral tales of inexplicable phenomena and weird beings. These monster paintings transformed religious subjects into entertaining ones, creating funny monsters engaged in human activity. `,
                    featured:   {
                    src:"Assets/content/yokai/visual-art/visual-art.jpg",
                    caption:"name,artist,date,locations"
                    },   
                    slides:[
                        {
                            title:"EARLY YOKAI PAINTINGS", 
                            body: `<p> Although the variety of monster expanded, their audiences were still limited.  Scroll paintings were often painted by master artists and then copied by their students; they required much time and great skill to produce. Due to their small size, the scrolls could only be viewed by a few people at a time. Plus, scroll paintings were commonly kept in temples and shrines or in the storehouses of aristocratic families. Viewers needed access to such elite places.</p>`, 
                            sections:[
                                {src:"Assets/content/yokai/visual-art/parade_combined.jpg",
                                 caption:`<p>The Night Parade of One Hundred Demons scroll (Hyakki yagyo emaki) is an early monster painting. The oldest known version comes from the Muromachi period. It was copied over and over again.
                                 Following the creation of the Hyakki yagyo and other early monster paintings, fantastic creatures were no longer limited to horned demons. They could materialize into a variety of different beings. 
                                 Explore popular forms of yokai and yokai lore here. [link to “Yokai Lore” page]</p>`}
                            ]
                        },
                         {
                            title:"YOKAI & PRINT TECHNOLOGY", 
                            body: `<p>Yokai images left the confines of elite settings in the Edo period (1603–1867), and they burst onto the popular scene thanks to woodblock print technology.  With the new technology, many impressions of a print could be created quickly and cheaply. Whereas the early scroll paintings had limited audiences, prints were accessible and affordable. As specific depictions of yokai stories began to circulate among the masses, the images became popular cultural references.</p>`, 
                            sections:[
                                {src:"Assets/content/yokai/visual-art/Sekien-1.jpg",
                                 caption:`<p>Hyakki tsurezurebukuro (volume 1)  
                                            Toriyama Sekien
                                            1805
                                            Ink on paper
                                            Courtesy of the Smithsonian Libraries
                                            Toriyama Sekien’s series of books of The Illustrated Night Parade of a Hundred Demons (Gazu hyakki yagyo) is based on the Hyakki yagyo scrolls. This series of books is considered the first mass-produced and illustrated yokai encyclopedia. Its yokai range from the very popular to the lesser known, including some dreamed up by Sekien himself. Images of specific creatures drawn by Sekien served as an important visual resource for later artists, including Edo-period print makers, twentieth-century manga creators, and yokai artists today. They are now accepted as standard forms of yokai.
 
                                            Explore Toriyama Sekien’s yokai encyclopedias. Visit the Smithsonian Libraries website [add hyperlink to italicized words: https://library.si.edu/books-online/subjects/monsters-in-art

                                            Master woodblock printers of the Edo period often made reference to tales of monsters.  For example, Utagawa Kuniyoshi combined characters from the Night Parade of a Hundred Demons (Hyakki yagyo) and another early handscroll, the Tale of the Earth Spider (Tsuchigumo zoshi) in a famous printed triptych (a three-part print).
                                            
                                            Artists today are still inspired by the Night Parade of One Hundred Demons! Playing off of traditional images found in historical paintings, the contemporary artist, “Sakyu” depicts classical yokai alongside modern yokai. . In the Modern hyakki yagyo, Sakyu dreams up new tsukumogami, the discarded objects that become animated and haunt the owner who failed to appreciate the service they had provided. Sakyu includes not only traditional demons, but also spirited floppy disks and an angry rotary dial phone</p>`},
                                {src:"Assets/content/yokai/visual-art/print-Kuniyoshi-Earth-Spider.jpg",
                                 caption:`<p>The Earth Spider Conjures up Demons at the Mansion of Minamoto            no Raiko 
                                            Utagawa Kuniyoshi
                                            1843; this edition likely published in the Kaei period (1848-1854)
                                            Ink on paper
                                            International Folk Art Foundation Collection, Museum of International Folk Art (T.2010.10.1)


                                            Minamoto no Raiko, a valiant military leader of the eleventh century, is depicted in the foreground with his four retainers. The Earth Spider, Tsuchigumo, appears in the background and dispatches yokai to attack the heroes. This three-part print is known for its social commentary, critiquing oppressive governmental codes enacted as the Tenpo Reforms (1841-1843). When Kuniyoshi published this work, viewers understood the yokai to be those who suffered due to the reforms. The image therefore suggests the government’s nightmare of a popular uprising. Another layer of social commentary concerns the Earth Spider, traditionally viewed as a legendary outcast and a source of evil. But Kuniyoshi made the Earth Spider into a hero who leads the angry mob of monsters in seeking revenge against the shogun and his administrators.</p>`}
                            ]
                        },
                        {
                            title:"MANGA: ILLUSTRATED BOOKS & WHIMSICAL IMAGES", 
                            body: `<p>Short books with woodblock printed illustrations were widely available during the Edo period (1603–1867). They met the needs of Japan’s growing market for popular literature. Today these books are considered as precursors to manga, which include comics, graphic novels, and “whimsical drawings.”
                            Monster stories were a favorite of Edo-period manga. Many tales had political undertones and critiqued the strictness of the shogunal government and the conservativism of Edo society. That was especially the case in the late eighteenth and early-nineteenth centuries, when censorship laws landed some authors in jail.
                            Today manga remains hugely popular among all ages and social groups, from young school children to mature corporate executives. Manga enjoys a surprisingly wide range of subject matters, including action, science fiction, sports, erotica, history, and of course, yokai.</p>`, 
                            sections:[
                                {src:"Assets/content/yokai/visual-art/F180615062.jpg",
                                 caption:`<p>Jiraiya Goketsu Monogatari 13-hen (Tale of a Hero, part 13)
                                            Illustrator: Utagawa Toyokuni
                                            Circa 1800
                                            Ink on paper, cotton string
                                            International Folk Art Foundation, Museum of International Folk Art (FA.2002.3.2v)</p>`},
                            ]
                        },
                         {
                            title:"ANIME", 
                            body: `<p>Japanese anime (animation) has become an international pop-culture phenomenon over the past twenty years. Anime is an outgrowth of manga. It grew in popularity after World War II but especially in the 1960s, when animation premiers captured the attention of young television viewers.
                            The award-winning films of Studio Ghibli are at the forefront of anime productions. My Neighbor Totoro (1988) and Spirited Away (2001) are some of the highest-grossing anime films ever. Both were created by Miyazaki Hayao, who is a writer, illustrator, and co-founder of Studio Ghibli. Miyazaki is praised as one of the greatest animation filmmakers of all time. His films tend to deal with the challenge of balancing traditional values and contemporary demands.</p>`, 
                            sections:[
                                {src:"Assets/content/yokai/visual-art/totoro.jpg",
                                 caption:`<p>screen shot from the movie 'My Neighbor Totoro'</p>`},
                            ]
                        },
                        
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
                    slides:[
                        {
                            title:"AWA NINGYO JORURI (Puppetry)", 
                            body: "The legend of Dojoji Temple is set in Wakayama in the year 929, the play Hidakagawa iriaizakura, centers on the lovelorn Kiyohime, a monk named Anchin, and the destructive nature of obsessive passion. Kiyohime falls in love with Anchin but he rejects her. Kiyohime’s rage, damaged pride, and emotional pain overtake her and she loses complete control of herself and her humanity. She transforms into a serpent-demon, swims across a river, and makes her way to Dojoji Temple, where Anchin hides from her under a large bronze bell. She finds him, coils herself around the bell, spitting flames until Anchin burns to ashes.", 
                            sections:[
                                {src:"Assets/content/yokai/performance/puppet.jpg",
                                caption:"caption text"},
                                {src:"Assets/content/yokai/performance/puppetfinal.mov",
                                caption:"caption text"},
                                 {src:"Assets/content/yokai/performance/puppet-artist-amari.jpg",
                                caption:"caption text"},
                            ]
                        },
                         {
                            title:"NOH THEATER", 
                            body: `Hannya is a female demon transformed from a human woman due to jealousy and rage. An example of a hannya character is Lady Rokujo from the play Aoi no Ue (Lady Aoi ), based on a chapter from Tale of Genji. The story is primarily about the life, loves, and exploits of Prince Genji, who is married to Lady Aoi. A known philanderer, Genji takes Lady Rokujo as a mistress and she falls in love with him, but her love is unrequited. Cast aside by her lover and in a jealous rage, Lady Rokujo loses control of her emotions and she transforms into a vengeful demon.

                            Noh theater is a formal masked dance drama with musical accompaniment. Plays often involve deities, ghosts, and demons. Established as a theatrical form in the fourteenth century, noh developed through the Edo period (1603–1867) but declined in popularity when Japan was (forced) open to the outside world after 1868. Actors played an active role in ensuring that the tradition continued. Today, noh theater is inscribed on UNESCO’s list of Intangible Cultural Heritage.`, 
                            sections:[
                                {src:"Assets/content/yokai/performance/noh-mask.jpg",
                                caption:"caption text"},
                                {src:"Assets/content/yokai/performance/noh-artist-terai.jpg",
                                caption:"caption text"}
                            ]
                        },
                        {
                            title:"KABUKI", 
                            body: `Tokaido Yotsuya kaidan (Ghost Story of Yotsuya Road) was written by Tsuruya Nanboku in 1825 and is one of Japan’s most famous ghost stories. The story centers on a woman, Oiwa, whose husband, Iemon, decides he wants to be married to a wealthier woman. He poisons his wife’s cosmetics, which horribly disfigures her face. He then tries to set her up to look like she was having an affair so he could divorce her. She eventually dies in a dramatic, self-inflicted accident. Her strong emotions transform into an uncontrollable, terrifying rage. Oiwa comes back as a vengeful ghost and haunts Iemon for the rest of his life. She appears to him in different environments and in objects. For example, in one scene she emerges from a lantern.

                            Kabuki theatrical performance developed in the Edo period (1603–1867), a time of relative prosperity with new markets for leisure activities. People of all social classes were drawn to the theater to see the newest plays. Kabuki was especially popular for its stage tricks, special effects, and action. Ghost stories were very popular and often challenged social norms, especially those related to gender roles and economic status. Kabuki is inscribed on UNESCO’s list of Intangible Cultural Heritage.`, 
                            sections:[
                                {src:"Assets/content/yokai/performance/kabuki.jpg",
                                caption:"caption text"},
                            ]
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
                    videos:[
                        {
                            title:"VIDEOS", 
                            body: "details", 
                        }
                    ]
                },
                {
                    slug: "toys-and-games",
                    title:"TOYS AND GAMES",
                    body:"",
                    featured:{
                        src:"Assets/content/yokai/toys-and-games/menko-cards.jpg",
                        caption:"name,artist,date,locations"
                    },
                    slides:[
                        {
                            title:"TOYS AND GAMES", 
                            body: "details", 
                            sections:[
                                {src:"Assets/content/yokai/toys-and-games/zukushi_print.jpg",
                                 caption:"description"},
                                {src:"Assets/content/yokai/toys-and-games/A.2018.40.1(3).jpg",
                                 caption:"<p class='color-red'>description</p>"},
                                {src:"Assets/content/yokai/toys-and-games/karuta.jpg",
                                 caption:"description"},
                                {src:"Assets/content/yokai/toys-and-games/menko-cards.jpg",
                                 caption:"description"},
                                {src:"Assets/content/yokai/toys-and-games/pop-out-yokai.jpg",
                                 caption:"description"},
                                {src:"Assets/content/yokai/toys-and-games/M181227016.jpg",
                                 caption:"description"},
                            ]
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
                     slides:[
                        {
                            title:"Ushioni Matsuri: The Cow-Demon Festival", 
                            body: "details", 
                            sections:[
                                {src:"Assets/content/yokai/festivals/ushioni-matsuri.jpg",
                                 caption:"description"},
                                {src:"Assets/content/yokai/festivals/FA.2018.76.1A-F.A.jpg",
                                 caption:"<p>description</p>"},
                                {src:"Assets/content/yokai/festivals/utsunomiya.jpg",
                                 caption:"description"},
                                
                                
                            ]
                        },
                         {
                            title:"Namahage Matsuri: A Festival of Monstrous Demon-Deities", 
                            body: "details", 
                            sections:[
                                {src:"Assets/content/yokai/festivals/Y200331058.jpg",
                                 caption:"description"},
                                
                                
                            ]
                        },
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
                    }
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