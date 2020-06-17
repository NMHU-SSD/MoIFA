var data = {
	pages:
    [
        /*home*/
        {
            slug: "home",
            title:"VIVID IN JAPANESE ART AND IMAGINATION ARE CREATURES THAT ARE AT ONCE GHASTLY AND AMUSING.",
            body:"<p>Yōkai is a catchall word for, ghosts, demons, monsters, shapeshifters, tricksters, and other kinds of supernatural beings and mysterious phenomena. Yōkai interact with the human world and spark common notions of frightful things.</p> <p >Yōkai can definitely be scary, but the experience of fear can also be amusing. When frightening beings copy human behavior, they become less intimidating and can appear playful, relatable, and even cute.</p><p>But yōkai are not all tame and cute. Perhaps the most terrifying yōkai are those that shed light on the faults of human society.</p><span class='font-weight-bolder'><p>Who are the yōkai in your world?<br>Have you ever felt demonized?<br>Are you a yōkai?</p></span>",
            featured:  {
                src:"Assets/content/homepage/ao-bozu.jpg",
                credit:{
                    title: "AO BŌZU (BLUE MONK)",
                    artist: "KŌNO JUNYA",
                    date: "2006, Kyoto",
                    medium: "Papier-mâché, craft foam, paint",
                    collection: "International Folk Art Foundation Collection, Museum of International Folk Art (T.2019.48.1)"
                },
                link: ""
                
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
                    body:"",
                    featured:   {
                    src:"Assets/content/yokai/visual-art/visual-art.jpg",
                    caption:"name,artist,date,locations"
                    },   
                    sections:[
                        {
                            title:"EARLY YOKAI PAINTINGS", 
                            body: "<p>The repertoire of bizarre creatures in Japan was expanded by painters of the Muromachi period (1336 - 1573). These artists borrowed traditional characters found in serious religious images, such as horned and hideous demons (oni), and added to the assortment by illustrating oral tales of inexplicable phenomena and weird beings. These monster paintings transformed religious subjects into entertaining ones, creating funny monsters engaged in human activity. </p><p>The Night Parade of One Hundred Demons scroll (Hyakki yagyo emaki) is an early monster painting. The oldest known version comes from the Muromachi period. It was copied over and over again.  View the scroll in its entirety at the <a href='http://lapis.nichibun.ac.jp/ema/Detail?tid=20&sid=01&did=01'>International Research center for Japanese Studies (Nichibinken)</a></p><p>Following the creation of the Hyakki yagyo and other early monster paintings, fantastic creatures were no longer limited to horned demons. They could materialize into a variety of different beings.  Explore popular forms of yokai and yokai lore <a href='#/culture/creatures'>here</a>.</p><p>Although the variety of monster expanded, their audiences were still limited.  Scroll paintings were often painted by master artists and then copied by their students; they required much time and great skill to produce. Due to their small size, the scrolls could only be viewed by a few people at a time. Plus, scroll paintings were commonly kept in temples and shrines or in the storehouses of aristocratic families. Viewers needed access to such elite places. </p>" ,
                            slides:[
                                {
                                    src:"Assets/content/yokai/visual-art/parade_scroll.jpg",
                                    credit: 
                                    {
                                        title: "Hyakki yagyo emaki (Night Parade of One Hundred Demons scroll)",
                                        artist:"Artist unknown",
                                        date:"This copy is probably Edo period (1603–1867)",
                                        medium: "Ink and natural pigment on paper",
                                        collection:"Courtesy of International Research Center for Japanese Studies (Nichibunken)", link:"http://db.nichibun.ac.jp/pc1/en/"
                                    },
                                    caption:`
                                        The Night Parade of One Hundred Demons scroll features demons, ghosts, shapeshifters, objects that come to life as monsters (tsukumogami), and a variety of other weird creatures that appear as bumbling beasts on parade carrying festival banners. According to one interpretation, the scroll originated from a legend about a horde of demons and monsters streaming down a street one night in Kyoto. The monsters and demons are weird, but full of humor.`
                                }
                            ]
                        },
                         {
                            title:"YOKAI & PRINT TECHNOLOGY", 
                            body: `<p>Yokai images left the confines of elite settings in the Edo period (1603–1867), and they burst onto the popular scene thanks to woodblock print technology.  With the new technology, many impressions of a print could be created quickly and cheaply. Whereas the early scroll paintings had limited audiences, prints were accessible and affordable. As specific depictions of yokai stories began to circulate among the masses, the images became popular cultural references.<br>

                            Toriyama Sekien’s series of books of The Illustrated Night Parade of a Hundred Demons (Gazu hyakki yagyo) is based on the Hyakki yagyo scrolls. This series of books is considered the first mass-produced and illustrated yokai encyclopedia. Its yokai range from the very popular to the lesser known, including some dreamed up by Sekien himself. Images of specific creatures drawn by Sekien served as an important visual resource for later artists, including Edo-period print makers, twentieth-century manga creators, and yokai artists today. They are now accepted as standard forms of yokai.<br>  

                            Explore Toriyama Sekien’s yokai encyclopedias. Visit the Smithsonian Libraries website [add hyperlink to italicized words: https://library.si.edu/books-online/subjects/monsters-in-art</p>
`, 
                            slides:[
                                {
                                    src:"Assets/content/yokai/visual-art/Sekien-1.jpg",
                                    credit:
                                    {
                                        title:"Hyakki tsurezurebukuro (volume 1)",
                                        artist: "Toriyama Sekien",
                                        date: "1805",
                                        medium:"Ink on paper",
                                        collection:"Courtesy of the Smithsonian Libraries"
                                    }
                                },
                                {
                                     src:"Assets/content/yokai/visual-art/Sekien-2.jpg", 
                                     credit:
                                    {
                                        title:"Gazu hyakki yagyo  (volume 1)",
                                        artist:"Toriyama Sekien",
                                        date:"1776",
                                        medium:"Ink on paper",
                                        collection:"Courtesy of the Smithsonian Libraries"
                                    }
                                }
                            ]
                        },
                        {
                            title:"",//no title 
                            body: `<p>Master woodblock printers of the Edo period often made reference to tales of monsters.  For example, Utagawa Kuniyoshi combined characters from the Night Parade of a Hundred Demons (Hyakki yagyo) and another early handscroll, the Tale of the Earth Spider (Tsuchigumo zoshi) in a famous printed triptych (a three-part print).<br>
                            Artists today are still inspired by the Night Parade of One Hundred Demons! Playing off of traditional images found in historical paintings, the contemporary artist, “Sakyu” depicts classical yokai alongside modern yokai. . In the Modern hyakki yagyo, Sakyu dreams up new tsukumogami, the discarded objects that become animated and haunt the owner who failed to appreciate the service they had provided. Sakyu includes not only traditional demons, but also spirited floppy disks and an angry rotary dial phone. </p>`, 
                            slides:[
                                {src:"Assets/content/yokai/visual-art/print-Kuniyoshi-Earth-Spider.jpg",
                                 credits:
                                 {
                                     title:"The Earth Spider Conjures up Demons at the Mansion of Minamoto no Raiko",
                                     artist:"Utagawa Kuniyoshi",
                                     date:"1843; this edition likely published in the Kaei period (1848-1854)",
                                     medium:"Ink on paper",
                                     collection:"International Folk Art Foundation Collection, Museum of International Folk Art (T.2010.10.1)"
                                 },
                                caption:`Minamoto no Raiko, a valiant military leader of the eleventh century, is depicted in the foreground with his four retainers. The Earth Spider, Tsuchigumo, appears in the background and dispatches yokai to attack the heroes. This three-part print is known for its social commentary, critiquing oppressive governmental codes enacted as the Tenpo Reforms (1841-1843). When Kuniyoshi published this work, viewers understood the yokai to be those who suffered due to the reforms. The image therefore suggests the government’s nightmare of a popular uprising. Another layer of social commentary concerns the Earth Spider, traditionally viewed as a legendary outcast and a source of evil. But Kuniyoshi made the Earth Spider into a hero who leads the angry mob of monsters in seeking revenge against the shogun and his administrators.`},
                                {src:"Assets/content/yokai/visual-art/modern_night_parade_detail.jpg",
                                 credit:
                                 {
                                     title:"Modern Hyakki yagyo (Night Parade of One Hundred Demons) book",
                                     artist:"Sakyu",
                                     date:"2018",
                                     medium:"Giclée print, digital art, washi paper, cloth, adhesive",
                                     collection:"International Folk Art Foundation, Museum of International Folk Art [P.2019.14.14-16]"
                                 },
                                caption:`Sakyu is a member of the artist collective, Hyakuyobako (Box of 100 Yokai). The collective re-enacts the Night Parade of One Hundred Demons annually in Kyoto.  
                                [hyperlink Hyakuyobako to: http://kyotohyakki.com/`}
                            ]
                        },
                        {
                            title:"MANGA: ILLUSTRATED BOOKS & WHIMSICAL IMAGES", 
                            body: `<p>Short books with woodblock printed illustrations were widely available during the Edo period (1603–1867). They met the needs of Japan’s growing market for popular literature. Today these books are considered as precursors to manga, which include comics, graphic novels, and “whimsical drawings.”<br>
                            Monster stories were a favorite of Edo-period manga. Many tales had political undertones and critiqued the strictness of the shogunal government and the conservativism of Edo society. That was especially the case in the late eighteenth and early-nineteenth centuries, when censorship laws landed some authors in jail.<br>
                            Today manga remains hugely popular among all ages and social groups, from young school children to mature corporate executives. Manga enjoys a surprisingly wide range of subject matters, including action, science fiction, sports, erotica, history, and of course, yokai.</p>`, 
                            slides:[
                                {
                                    src:"Assets/content/yokai/visual-art/F180615062.jpg",
                                    credit:
                                     {
                                         title:"Jiraiya Goketsu Monogatari 13-hen (Tale of a Hero, part 13)",
                                         artist:"Utagawa Toyokuni",
                                         date:"Circa 1800",
                                         medium:"Ink on paper, cotton string",
                                         collection:"International Folk Art Foundation, Museum of International Folk Art (FA.2002.3.2v)"
                                     }
                                },
                                {src:"Assets/content/yokai/visual-art/wiki.jpg",
                                 caption:`
                                           Cover art for the first tankōbon of the Nurarihyon no Mago manga released in Japan by Shueisha.
                                           Wikipedia - link: https://en.wikipedia.org/wiki/Nura:_Rise_of_the_Yokai_Clan#/media/File:Nurarihyon_no_Mago_Japanese_Vol_1_Cover.jpg`
                                }
                            ]
                        },
                         {
                            title:"ANIME", 
                            body: `<p>Japanese anime (animation) has become an international pop-culture phenomenon over the past twenty years. Anime is an outgrowth of manga. It grew in popularity after World War II but especially in the 1960s, when animation premiers captured the attention of young television viewers.<br>
                            The award-winning films of Studio Ghibli are at the forefront of anime productions. My Neighbor Totoro (1988) and Spirited Away (2001) are some of the highest-grossing anime films ever. Both were created by Miyazaki Hayao, who is a writer, illustrator, and co-founder of Studio Ghibli. Miyazaki is praised as one of the greatest animation filmmakers of all time. His films tend to deal with the challenge of balancing traditional values and contemporary demands</p>`, 
                            slides:[
                                {src:"Assets/content/yokai/visual-art/totoro.jpg",
                                 caption:`use credit from the image source AND add button or link to below:
                                 [link]: https://ghibli.fandom.com/wiki/Ghibli_Wiki`},
                            ]
                        },
                        
                    ]
                },
                {
                    slug: "stage-performance",
                    title:"STAGE PERFORMANCE",
                    subtitle:"HOW STAGE PERFORMANCE MADE YOKAI POPULAR",
                    body:`
                            Like visual arts, performance is one of the cultural modes that popularized yokai stories and imagery. Stage theater was particularly popular during the Edo period (1603–1867) and numerous classical plays feature ghost, demon, and monster-like characters. These characters and their stories have enjoyed long-lasting appeal. Ghostly stage presentations from centuries ago inform today’s iconic image of vengeful female ghosts, with long disheveled hair, a white death kimono, and no feet. A number of contemporary Japanese horror films feature these images and they have also made their way into Hollywood blockbusters.<br>

                            Among the forms of traditional Japanese stage performance that portray demons and ghosts are puppetry, noh, and kabuki theater.
                        `,
                    featured:{
                        src:"Assets/content/yokai/performance/noh-mask.jpg",
                    },
                    sections:[
                        {
                            title:"AWA NINGYO JORURI (Puppetry)", 
                            body: `
                                <p>The legend of Dojoji Temple is set in Wakayama in the year 929, the play Hidakagawa iriaizakura, centers on the lovelorn Kiyohime, a monk named Anchin, and the destructive nature of obsessive passion. Kiyohime falls in love with Anchin but he rejects her. Kiyohime’s rage, damaged pride, and emotional pain overtake her and she loses complete control of herself and her humanity. She transforms into a serpent-demon, swims across a river, and makes her way to Dojoji Temple, where Anchin hides from her under a large bronze bell. She finds him, coils herself around the bell, spitting flames until Anchin burns to ashes.<br>

                                Awa ningyo joruri is a regional style of puppet theater specific to Tokushima, where performances take place on an open‑air, village stage. It takes three puppeteers to operate one puppet: one each for the head, hands, and feet. Puppetry is one of Japan’s oldest performance genres and some forms are inscribed on UNESCO’s list of Intangible Cultural Heritage.</p>`, 
                            slides:[
                                {src:"Assets/content/yokai/performance/puppet.jpg",
                                 credit:
                                    {
                                        title:"Kiyohime, Awa Ningyo Joruri (Puppet from Awa)",
                                        artist:"Amari Yoichiro (aka Ningyo Yo)",
                                        date:"2019, commissioned by the Museum of International Folk Art",
                                        location:"Tokushima",
                                        date:"Wood, natural pigments, lacquer, hair, silk cloth, metal springs, paper, cord",
                                        medium:"Museum of New Mexico Foundation purchase with funds from the E. Rhodes and Leona B. Carpenter Foundation, Museum of International Folk Art (T.2019.51.1)"
                                    }
                                },
                                {src:"Assets/content/yokai/performance/puppetfinal.mov",
                                 credit:{},
                                caption:`Kiyohime is crafted with strings and levers that are manipulated by the puppeteer to transform her from princess to demon. Click the image to view her transformation.`},
                                {src:"Assets/content/yokai/performance/puppet-artist-amari.jpg",
                                 credit:{},
                                caption:`Amari Yoichiro, from Tokushima, is a renowned maker of Awa ningyo joruri. He explains that Kiyohime is a challenging character to create because her articulated structure is complex and her emotions are intense; this makes her a favorite character for him to craft.` },
                            ]
                        },
                         {
                            title:"NOH THEATER", 
                            body: `<p>Noh theater is a formal masked dance drama with musical accompaniment. Plays often involve deities, ghosts, and demons. Established as a theatrical form in the fourteenth century, noh developed through the Edo period (1603–1867) but declined in popularity when Japan was (forced) open to the outside world after 1868. Actors played an active role in ensuring that the tradition continued. Today, noh theater is inscribed on UNESCO’s list of Intangible Cultural Heritage.</p>`, 
                            slides:[
                                {
                                    src:"Assets/content/yokai/performance/noh-mask.jpg",
                                    credit:
                                    {
                                        title:"White Hannya, Noh mask",
                                        artist:"Terai Ichiyu",
                                        date:"2017, commissioned by the Museum of International Folk Art",
                                        location:"Kyoto",
                                        medium:"Wood (cypress), natural paints (shell, mercury, carbon [sumi], ocher, gold), cotton cord",
                                        collection:"International Folk Art Foundation, Museum of International Folk Art (FA.2018.33.1)"
                                    },
                                    caption:`Hannya is a female demon transformed from a human woman due to jealousy and rage. An example of a hannya character is Lady Rokujo from the play Aoi no Ue (Lady Aoi ), based on a chapter from Tale of Genji. The story is primarily about the life, loves, and exploits of Prince Genji, who is married to Lady Aoi. A known philanderer, Genji takes Lady Rokujo as a mistress and she falls in love with him, but her love is unrequited. Cast aside by her lover and in a jealous rage, Lady Rokujo loses control of her emotions and she transforms into a vengeful demon.`
                                },
                                {
                                    src:"Assets/content/yokai/performance/noh-artist-terai.jpg",
                                    credit:{},
                                    caption:`Artist Terai Ichiyu, from Kyoto, explains that mask making is like “time travel” in that it makes him feel connected to the generations of mask-makers who have crafted that same character before him. In creating a powerful mask like hannya, Terai says he senses her energy, enabling him to help the mask express its complex set of emotions: ferocious rage, fear, and sadness. He notes: “the character loses control of herself, and that is a terrifying place to be.” PHOTO BY TERAI SHUHEI, 2017.`
                                }
                            ]
                        },
                        {
                            title:"KABUKI", 
                            body: `<p>Tokaido Yotsuya kaidan (Ghost Story of Yotsuya Road) was written by Tsuruya Nanboku in 1825 and is one of Japan’s most famous ghost stories. The story centers on a woman, Oiwa, whose husband, Iemon, decides he wants to be married to a wealthier woman. He poisons his wife’s cosmetics, which horribly disfigures her face. He then tries to set her up to look like she was having an affair so he could divorce her. She eventually dies in a dramatic, self-inflicted accident. Her strong emotions transform into an uncontrollable, terrifying rage. Oiwa comes back as a vengeful ghost and haunts Iemon for the rest of his life. She appears to him in different environments and in objects. For example, in one scene she emerges from a lantern.<br>
                            Kabuki theatrical performance developed in the Edo period (1603–1867), a time of relative prosperity with new markets for leisure activities. People of all social classes were drawn to the theater to see the newest plays. Kabuki was especially popular for its stage tricks, special effects, and action. Ghost stories were very popular and often challenged social norms, especially those related to gender roles and economic status. Kabuki is inscribed on UNESCO’s list of Intangible Cultural Heritage.</p>`,
                            slides:[
                                {
                                    src:"Assets/content/yokai/performance/kabuki.jpg",
                                    credits:[
                                        {
                                            title:"Oiwa, from the play Tokaido Yotsuya kaidan (Ghost Story of the Yotsuya Road),Kabuki Ghost Costume",
                                            artist:"Shochiku Costume, LTD",
                                            date:"Early 2000s replica of 1950s costume",
                                            location:"Tokyo",
                                            medium:"Silk",
                                            collection:"Courtesy of U.S. Kabuki Kenkyū Kai in cooperation with Shochiku Costume, LTD."
                                         },
                                        {
                                            title:"Chochin (lantern) stage prop",
                                            artist:"Fujinama Props",
                                            date:"2018",
                                            location:"Tokyo",
                                            medium:"Metal, paper, wood, cord",
                                            collection:"Courtesy of U.S. Kabuki Kenkyū Kai in cooperation with Fujinama Props"
                                         }
                                    ],
                                    caption:``
                                },
                            ]
                        }
                    ]
                },
                {
                    slug: "story-telling",
                    title:"STORY TELLING",
                    subtitle:"HOW STORYTELLING MADE YOKAI POPULAR",
                    body:`<p>Storytelling was one of the ways that yokai types expanded during the medieval period. Over the course of time, the reach of yokai stories spread far and wide. Kaidan (stories of strange and mysterious things) from different regions of Japan circulated in the city of Edo (modern-day Tokyo). A popular pastime surrounding kaidan emerged sometime in the early Edo period (1603–1867), known as hyakumonogatari kaidankai (special gatherings for the telling of one hundred ghost stories). At these events, people told regional ghost stories they knew, or they invented new ghost stories. Traditionally, the storytelling began with lighting one hundred candles and at the end of each story, a candle was extinguished; when the last flame went out and darkness descended, yokai were said to appear. These hyakumonogatari kaidankai-style videos were co-produced by the Museum of International Folk Art and Kyoto-based yokai-artist collective, Hyakuyobako (Box of 100 Yokai). These kaidan include traditional and contemporary Japanese ghost stories.</p>`,
                    caption:`Japanese Ghost Storytelling and Gatherings for 100 Weird Tales (Hyakumonogatari kaidankai)
                            Produced in collaboration with Hyakuyobako (Box of 100 Yokai) artist collective  [hyperlink   http://kyotohyakki.com/  ]`,
                    featured:{
                        src:"Assets/content/yokai/storytelling/stories.jpg",
                    },
                    images:[
                        {
                            title:"Black Photo", 
                            href: "https://www.youtube.com/embed/wTVPZ6n9gQI",
                            type: 'text/html',
                            youtube: 'wTVPZ6n9gQI',
                            poster: 'https://img.youtube.com/vi/wTVPZ6n9gQI/maxresdefault.jpg'
                        },
                        {
                            title:"Kudan (The Human-Faced Crow)", 
                            href: "https://www.youtube.com/embed/TJ1VE2__Gvw",
                            type: 'text/html',
                            youtube: 'TJ1VE2__Gvw',
                            poster: 'https://img.youtube.com/vi/TJ1VE2__Gvw/maxresdefault.jpg'
                        },
                        {
                            title:"Hyakki Yagyō (The Night Parade of 100 Demons)", 
                            href: "https://www.youtube.com/embed/lIouEKd74MM",
                            type: 'text/html',
                            youtube: 'lIouEKd74MM',
                            poster: 'https://img.youtube.com/vi/lIouEKd74MM/maxresdefault.jpg'
                        },
                        {
                            title:"Banchō Sarayashiki (The Dish Mansion at Banchō)", 
                            href: "https://www.youtube.com/embed/0NMwrbQcvGo",
                            type: 'text/html',
                            youtube: '0NMwrbQcvGo',
                            poster: 'https://img.youtube.com/vi/0NMwrbQcvGo/maxresdefault.jpg'
                        },
                        {
                            title:"At the Graveyard", 
                            href: "https://www.youtube.com/embed/dXKmkox0WKs",
                            type: 'text/html',
                            youtube: 'dXKmkox0WKs',
                            poster: 'https://img.youtube.com/vi/dXKmkox0WKs/maxresdefault.jpg'
                        }
                    ]
                },
                {
                    slug: "toys-and-games",
                    title:"TOYS AND GAMES",
                    body:`<p>Toys and games are an important part of yokai culture and a fun way that children have learned about yokai through the ages. Similar to Pokémon cards, children were especially delighted by paper based toys with yokai images that they collected and traded. Toys and games reflect the popular culture of their time and those that were played centuries ago still bring joy and challenges to children today.</p>`,
                    featured:{
                        src:"Assets/content/yokai/toys-and-games/menko-cards.jpg",
                    },
                            slides:[
                                {
                                    src:"Assets/content/yokai/toys-and-games/zukushi_print.jpg",
                                    credit:
                                    {
                                        title:"Bakemono zukushi (All about bakemono) woodblock print",
                                        artist:"Unknown Artist",
                                        date:"Edo Perriod (1603-1867)",
                                        location:"Japan",
                                        collection:"Courtesy of the Yumoto Koichi Memorial Yokai Museum of Japan (Miyoshi Mononoke Museum)"
                                    },
                                    caption:`Produced in large quantities, omocha-e (paper toys) were inexpensive enough for children to buy. Zukushi prints were made to be cut, and children would trade and collect various images. Monsters, being a persistently popular theme, were a favorite.  Putting images together created a catalog of yokai. These may be considered “Edo period Pokémon cards.”
                                    Learn more about the connection between Pokémon and yokai here [hyperlink to here: https://mluce.ro/articles/the-yokai-roots-of-pokemon/]`
                                },
                                {
                                    src:"Assets/content/yokai/toys-and-games/A.2018.40.1(3).jpg",
                                    credit:
                                    {
                                        title:"Kawari-e: obake andon (Trick monster lantern)",
                                        artist:"Unknown Artist",
                                        date:"Meiji period (1868–1912)",
                                        location:"Japan",
                                        medium:"Ink on paper, Adhesive",
                                        collection:"Gift of David M. Kahn, Museum of International Folk Art (A.2018.40.1)"
                                    },
                                    caption:`Omocha-e are woodblock prints meant to be cut, pasted, and arranged to craft a three dimensional paper toy. This example is an andon (floor lantern) that transforms into an obake yashiki (ghost house). Lifting paper flaps reveals various yokai, including tanuki (raccoon-dog), O-Nyudo (a stretchy-necked monk), tsukumogami (in the form of a tea kettle), skeleton musicians, and a buriburi (shaking ghost).`
                                },
                                {
                                    src:"Assets/content/yokai/toys-and-games/karuta.jpg",
                                    credit:
                                    {
                                        title:"Obake karuta (Monster-themed playing cards)",
                                        artist:"Unknown Artist",
                                        date:"Post-Meiji Period (after 1912)",
                                        location:"Japan",
                                        medium:"Ink on cardstock",
                                        collection:"On loan from the Yumoto Koichi Memorial Yōkai Museum in Japan (Miyoshi Mononoke Museum)"
                                    },
                                    caption:`The word karuta derives from the Portuguese word for “card.” Portuguese traders introduced playing cards to Japan during the sixteenth century. Some karuta games involved finding images to match written Japanese syllables. In the case of these monster cards, the name of a monster would be matched to its picture.`,
                                },
                                {
                                    src:"Assets/content/yokai/toys-and-games/menko-cards.jpg",
                                    credit:
                                    {
                                        title:"Menko playing cards with yokai characters",
                                        artist:"Unknown Artist/Manufacturer",
                                        date:"1970s",
                                        location:"Japan",
                                        medium:"Cardboard, Ink"
                                    },
                                    caption:`Menko involves throwing cards in attempt to flip those already laid out on the ground. Menko cards commonly depict images and characters that reflect popular culture of the time. Yokai were a long-time favorite, and other popular themes have included ninja, samurai, military images (prior to the World War II era), manga characters (such asGeGeGe no Kitaro), and baseball.`
                                },
                                {
                                    src:"Assets/content/yokai/toys-and-games/pop-out-yokai.jpg",
                                    credit:
                                    {
                                        title:"Unpunched, die-cut paper yokai toys",
                                        artist:"Unknown Artist/Manufacturer",
                                        date:"1950s-1960s",
                                        location:"Japan",
                                        medium:"Coated cardboard, Ink",
                                    },
                                    caption:`Toys like this are a more contemporary, industrially produced version of omocha-e (paper toy) prints`
                                },
                                {
                                    src:"Assets/content/yokai/toys-and-games/M181227016.jpg",
                                    credit:
                                    {
                                        title:'"Heroes going into the Mountain of Hell", Sugoroku (illustrated board game)',
                                        artist:"Hasegawa Konobu",
                                        date:"1875",
                                        location:"Japan",
                                        medium:"Paper, Ink, Adhesive",
                                        colection:"International Folk Art Foundation, Museum of International Folk Art (T.2019.2.1)"
                                    },
                                    caption:`Dating to the first half of the eighteenth century, sugoroku were among the earliest yokai-themed toys. Similar to Chutes and Ladders, the game involves rolling dice and advancing a marker, trying to reach the goal. In each square, this example shows scenes from heroes’ journeys and encounters with yokai such as tsuchigumo (earth spider), Ao Bozu (a monster-monk), yamamba (mountain hag), Shuten Doji, and various oni.`
                                }
                            ]
                        
                    
                },
                 {
                    slug: "festivals",
                    title:"FESTIVALS",
                    subtitle:"YOKAI IN JAPANESE FESTIVALS",
                    featured:{
                        src:"Assets/content/yokai/festivals/ushioni-matsuri.jpg",
                    },
                     sections:[
                        {
                            title:"Ushioni Matsuri: The Cow-Demon Festival", 
                            body:`<p>Every year, from July 22–24, Uwajima (Ehime Prefecture) is taken over by the Ushioni Matsuri.<br>

                                    This popular festival involves up to twenty-two, eighteen-foot-high, 650—1500-pound ushioni (cow demon) floats, each associated with different local shrines. They are carried by fifty shrine members to the center of town, where the ushioni dance and battle with one another as they parade towards Warei Jjinja (Uwajima’s main Shinto shrine). Each festival day centers on different activities including a youth-float parade (involving smaller ushioni floats), music and dance, bamboo pole-climbing competitions, and fireworks.<br>

                                    The floats are highly interactive. Attached to a long neck that extends from the float’s enormous body, the ushioni head swings across crowds of people creating delight among tens of thousands of spectators. The festival’s roots are in Warei Jinja’s four hundred-year-old rituals where smaller-scale ushioni are purified by shrine priests, dispel negative spirits, and bring blessings to the community. In 1965, the city of Uwajima developed the Ushioni matsuri as a public festival to increase tourism and boost the local economy. More than that, the festival brings local communities together to compete, to collaborate, and to celebrate; it is a source of community enjoyment, identity, and pride.</p>`, 
                            slides:[
                                {
                                    src:"Assets/content/yokai/festivals/ushioni-matsuri.jpg",
                                    credit:{
                                        title:"Ushioni Matsuri",
                                        location:"Uwajima, Ehime Prefecture",
                                        collection:"Photo courtesy of the Uwajima City Tourist Association"
                                    },
                                    caption:""
                                },
                                {
                                    src:"Assets/content/yokai/festivals/FA.2018.76.1A-F.A.jpg",
                                     credit:
                                    {
                                        title:"Ushioni head for a youth float with an amulet plaque from Warei Jinja",
                                        artist:"Utsunomiya Yoshiwo II (aka Utsunomiya Keisuke)",
                                        date:"2018, commissioned by the Museum of International Folk Art",
                                        location:"Uwajima, Ehime Prefecture",
                                        medium:"Washi paper, lacquer, brass, paint, oak wood, horsehair, cotton fabric, twine, white paper, ink",
                                        collection:"International Folk Art Foundation, Museum of International Folk Art (FA.2018.76.1; FA.2018.75.1)"
                                    },
                                    caption:`This special float head was completed shortly before the 2018 festival was supposed to take place.<br>
                                                Sadly, due to record rains that caused floods and landslides in July 2018 the festival was canceled for the first time in forty years. The community’s focus was on rescue and recovery efforts and offering<br>
                                                support to families that lost loved ones.`
                                },
                                {
                                    src:"Assets/content/yokai/festivals/utsunomiya.jpg",
                                    caption:`Utsunomiya Yoshiwo II is Uwajima’s master ushioni-head maker, who learned from his father, Utsunomiya Yoshiwo. The artist reminds us that there is a distinction between festival ushioni, which are secular, and the ushioni that are involved in the Warei Jinja rituals, which is a deity.`
                                }
                            ]
                        },
                         {
                            title:"Namahage Matsuri: A Festival of Monstrous Demon-Deities", 
                            body: `<p>On New Year’s Eve, Namahage trample through the snow of Oga (Akita Prefecture), demanding entrance to individual homes. Once admitted, they chase family members, roar, and call out children for laziness or misbehavior. Children provide offerings of food and sake to the Namahage, who then talk with family members, explaining their role as gods descended from the mountains to bless people with good fortune.<br> 
                            This ritual is distinct, but related to the festival, Namahage Sedo Matsuri, created in 1963 to share Namahage with outsiders. As opposed to the private New Year’s ritual within the household, the public three-day festival occurs on the grounds of the Shinzan Jinja (a local Shinto shrine) in mid-February. It is a large event that involves dancing, roaring demons that chase audiences around icy grounds, bonfires, food, sake, and taiko drumming. Fear is at the heart of the Namahage experience, and the Namahage is at the heart of regional identity and pride. In 2018, Namahage was added to UNESCO’s Representative List of Intangible Cultural Heritage</p>`, 
                            slides:[
                                    {
                                        src:"Assets/content/yokai/festivals/Y200331058.jpg",
                                        credits:[
                                            {
                                                title:"Namahage mask and costume",
                                                artist:"Ishikawa Taiko",
                                                date:"2012",
                                                location:"Oga City, Akita Prefecture",
                                                medium:"Wood, paint, horsehair, Velcro, nylon, baseball catcher’s mask, fiber, straw, plastic, cotton",
                                                collection:"Museum of New Mexico Foundation, Museum of International Folk Art (A.2013.1.1-2)"
                                            },
                                            {
                                                title:"Namahage knife",
                                                artist:"Unknown Artist",
                                                date:"1960s",
                                                location:"Oga City, Akita Prefecture",
                                                medium:"Wood, paint, horsehair, Velcro, nylon, baseball catcher’s mask, fiber, straw, plastic, cotton",
                                                collection:"Museum of New Mexico Foundation, Museum of International Folk Art (A.2013.1.1-2)",
                                                link:""
                                                
                                            }
                                        ],
                                        caption:"Background photo by Michael Dylan Foster, 2014"
                                    },
                                
                                
                            ]
                        },
                    ]
                },
                {
                    slug: "creatures",
                    title:"YOKAI! CREATURE-LORE",
                    subtitle:"WHAT ARE YOKAI?",
                    body:`<p>In Japan today, debates exist as to what exactly is a “yokai”.  Nevertheless, yokai are generally considered to be a catchall term for beings like ghosts, demons, and a wide variety of monsters as well as “mysterious phenomena.”<br>  
                    Some people prefer words such as bakemono (changing things), obake (spooky things), and mononoke (weird, mysterious occurances) to describe specific beings. The word “yokai” came into use during the Meiji period (1868–1912) when scholars began studying Japanese folklore.<br>
                    Despite ambiguities, scholars generally agree that yokai include tanuki (raccoon-dogs), kitsune (foxes), tsukumogami (haunted tools or objects), kappa (water yokai), tengu (mountain spirits or goblins), and oni (demons).<br> 
                    Yurei (ghosts) are included in this museum exhibition as a kind of a yokai, but not everyone agrees that they belong in this group. Yurei are spirits of deceased humans with intense emotions and lingering ties or resentments in this world, whereas yokai were never human, are very much alive, and can be playful (yurei are not playful!). Looking at representations of yokai in popular media and art from the last five centuries, we find all sorts of beings: tormented ghosts, ogres, demons, monsters, shapeshifters, and personified animals. They all seem to categorically belong.<br> 
                    Do you agree?</p>
`,
                    featured:{
                        src:"Assets/content/yokai/creature-lore/creature-lore.jpg",
                    },
                    sections:[
                        {
                            title:"Yokai Lore",
                            body:`<p>Explore these categories of yokai in the collection of the Museum of International Folk Art.</p>`,
                            slides:
                            [
                                {   
                                    credit:
                                    {
                                        title:"TANUKI"
                                    }, 
                                    src:"; hyper link to MOIFA collection /tanuki group",
                                    caption:`A tanuki is an animal species indigenous to East Asia that is sometimes referred to as a raccoon-dog. As yokai, tanuki are recognized as shapeshifters and tricksters just like kitsune (foxes). They may be annoying but are often less evil or dangerous. Tanuki figures are found all over Japan, often welcoming patrons to shops and especially restaurants and bars. Holding a bottle of sake, these tanuki like to get people drunk so they lose track of time. It is easier to trick people out of their money when they are drunk. Although they may be creatures to approach with caution, for businesses and shop-owners their image is used as a charm for bringing prosperity. Tanuki are most notoriously known for their larger-than-life testicles, which they may sometimes use as a prop for their disguises or use in their pranking activities`
                                    
                                },
                                {
                                    credit:
                                    {
                                        title:"KITSUNE"
                                    },
                                    src:"kitsune file?",
                                    caption:`Similar to the ways that the fox is imagined in other cultures, kitsune (foxes), are shapeshifting tricksters known for their cunning behavior. These clever creatures use magical powers and play tricks on people. Kitsune like to live among people, and the way that humans treat them determines if their power is used for good or evil. Stories of kitsune include beautiful fox-women, fox weddings, foxes disguised as priests, and foxes that possess people. Kitsune are associated with women and bewitch men with their beauty.`
                                },
                                {
                                    credit:
                                    {
                                        title:"TSUKUMOGAMI"
                                    },
                                    src:"TSUKUMOGAMI file?",
                                    caption:`Tsukumogami are spirited tools or haunted objects. In ancient times, yokai were limited in their physical form to oni (demons) and religious contexts. The Muromachi period (1336–1573) introduced new sorts of beings with a famous narrative scroll painting called the Tsukumogami ki (The Record of Tool Specters). According to the story, if tools and other implements are discarded without a proper show of thanks, they become resentful of their former owners and haunt them with a vengeance. The scroll likely served the purpose of spreading Shingon Buddhism, but sarcasm and wit narrate the illustrations.<br>
                                    Tsukumogami are something to be feared, but they definitely have a comical and entertaining side. Additionally, these spirited objects freed oni from its depiction as a menacing demon, allowing a nearly limitless array of forms. By the Edo period (1603-1867), all sorts of “things” could come to life and transform into yokai.`
                                },
                                {
                                    credit:
                                    {
                                        title:"KAPPA"
                                    },
                                    src:"kappa file?",
                                    caption:`Kappa are water yokai. With amphibian features and beak-like mouths, kappa are as small as children but very strong. These yokai have notoriously smelly gas. Some stories say that kappa might be repelled by human farts. Folklore suggests that kappa are relatively harmless creatures but they can indeed be very dangerous. For example, kappa infamously drown people to eat their livers, accessed by sucking out an imaginary organ called the shirikodama, found in the anus. Luckily, kappa are appeased with cucumbers, their favorite food. A dish-like depression on their heads contains water, the source of their power. If they spill the water not only can they lose power, but they can die.`
                                },
                                {
                                    credit:
                                    {
                                        title:"TENGU"
                                    },
                                    src:"tengu file?",
                                    caption:`A tengu is a yokai in the form of a mountain goblin or spirit. There are different types of tengu. Daitengu are usually depicted as a male human, or at times as a yamabushi (“mountain priest”) with a long nose and a red face. A karasu tengu is a bird or bird-like tengu. They are usually associated with flight, and sometimes their form is a combination of a long-nosed man with bird wings. Tengu are generally considered malevolent spirits. In early Japanese Buddhism the image of the tengu as a monk was sometimes used to convince people not to follow opposing Buddhist groups.<br>
                                    However, like other yokai, tengu do not easily fall into a good or bad category. Despite their description as evil, tengu can also be noble and helpful to people`
                                },
                                {
                                    credit:
                                    {
                                        title:"ONI: DEMONS, OGRES, AND GOBLINS"
                                    },
                                    src:"oni file?",
                                    caption:`Oni are visual representations of ancient ideas of mononoke (weird, unexplainable events and invisible beings). Imagined as oni (demons, ogres, or goblins), mononoke probably took physical form when they manifested into specific characters. In religious contexts, oni—fierce, frightening, and powerful creatures—became protective guardians and deities as well as evil transgressors. Early ideas of yokai not only centered specifically around oni, representations of yokai were limited to oni forms, complete with horns and fangs.`
                                },
                                {
                                    credit:
                                    {
                                        title:"YUREI"
                                    },
                                    src:"yurei file?",
                                    caption:`Yurei are spirits of the deceased, or ghosts, and arguably a type of yokai. Japanese ghosts are typically portrayed wearing a white death kimono. Their hair is disheveled, and they do not have feet. These paintings are images of ghosts in typical spectral settings. For example, yurei tend to emerge from willows, hover over their own bones, or stalk specific people to seek revenge.<br>
                                    A common theme for Japanese ghosts is that of scorned women who endured abuse or heartache by men in their lifetime. After death, these female spirits find their voice and seek retribution as vengeful ghosts and haunt the men who have hurt or killed them. Ghost paintings may have been hung in homes for protection. They may have also been displayed by collectors who find ghosts and ghost stories to be fun!`
                                },
                                
                            ]
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
                src:"Assets/content/exhibit/gallery/Y200331002.jpg",
                caption:"name,artist,date,locations"
            },
            subpages: [
                {
                    slug: "gallery",
                    title:"EXHIBITION GALLERY",
                    featured: {
                        src:"Assets/content/exhibit/gallery/Y200331002.jpg", 
						caption:""
                    },
                    index: null,
                    images:
                    [
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331001.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331001.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331002.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331002.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331003.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331003.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331004.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331004.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331006.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331006.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331007.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331007.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331008.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331008.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331009.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331009.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331010.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331010.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331012.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331012.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331014.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331014.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331015.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331015.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331016.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331016.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331018.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331018.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331019.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331019.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331020.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331020.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331021.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331021.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331022.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331022.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331023.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331023.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331024.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331024.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331025.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331025.jpg"},
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331044.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331044.jpg"},
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331045.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331045.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331046.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331046.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331047.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331047.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331048.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331048.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331050.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331050.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331052.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331052.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331054.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331054.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331056.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331056.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331058.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331058.jpg"
                        },
                        {
                            title: 'Image',
                            type: 'image/jpeg',
                            poster:"Assets/content/exhibit/gallery/Y200331059.jpg",
                            href:"Assets/content/exhibit/gallery/Y200331059.jpg"
                        },
                    ]
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
                    body: "<p>Vivid in Japanese art and imagination are creatures that are at once ghastly and humorous. The Japanese word yōkai generally refers to a range of supernatural beings such as ghosts, demons, monsters, shapeshifters, tricksters, and other strange kinds of creatures. While their status is commonly described as supernatural, they intermingle with and appear in the natural, human world. Today, yōkai are wildly popular in Japan—prevalent across contemporary entertainment genres such as manga (“comics”) and anime (“animation”) series, horror movies, and video games, and they also manifest as the subject of related material culture objects like game cards, character t-shirts, cuddly plushies, and collectable gashapon capsule toys. This diverse array of yōkai imagery and materiality is deeply rooted in the past. Yōkai images and their stories are enduring, and there is no question that what we see in hot commodities today is closely aligned with the traditional Japanese folklore. This new book explores yōkai through multiple perspectives: what they are, their associated tales, how people engage with or interpret them in different contexts, and why they remain so popular in Japan. The contributors to this book are eminent scholars, creators, and promoters of various aspects of yōkai culture. The interdisciplinary nature of this book’s presentation vibrantly illustrates yōkai from different angles, allowing for a broad view of their cultural scope in Japan. In addition, the contributors delve into popular culture themes, connecting traditional folklore, folk art, and imagery to trends in Japan as well as in the United States.</p>"
                    
                    
                    
                    
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
                src:"Assets/content/resources/tengucard.jpg",
                caption:""
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
                src:"Assets/content/acknowledements/A.2017.91.1a-c4.jpg",
                caption:""
            },
            body:""

        }
    ]
}
console.log(data);