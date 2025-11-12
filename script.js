const songs = [
  { title: "Damodar Ashtakam", artist: "Artist A", file: "music/sri-damodarashtakam-shrii-daameaadraassttkm-shrii-daamodr-assttkm-128-ytshorts.savetube.me.mp3", cover: "https://i1.sndcdn.com/artworks-000455138877-qbi9he-t500x500.jpg" },
  { title: "Tum Se Hi", artist: "Artist B", file: "music/Full Video_ Tum Se Hi  Jab We Met  Kareena Kapoor, Shahid Kapoor  Mohit Chauhan  Pritam.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogU-aeZjIUojLXjUPP3BmH24-kFACeevhqA&s" },
  { title: "Teri Meri Kahaani Hai Baarishon Ka Paani", artist: "Himesh Reshammiya", file: "music/Teri Meri Kahaani Hai Baarishon Ka Paani - Arijit Singh  Gabbar Is Back  Akshay Kumar & Kareena K.mp3", cover: "https://i.ytimg.com/vi/aZUF9zy0LKw/sddefault.jpg" },
  { title: "Dunki: O Maahi", artist: "Arijit Singh", file: "music/Dunki_ O Maahi 8K Full Song  Shah Rukh Khan  Taapsee Pannu  Pritam  Arijit Singh  Irshad Kamil.mp3", cover: "https://i1.sndcdn.com/artworks-xbu4Q1a88BZ68E0X-JUzXUg-t1080x1080.jpg" },
  { title: "Tune Jo Na Kaha Song", artist: "John Abraham, Katrina Kaif, Neil Nitin M", file: "music/Tune Jo Na Kaha Song  New York  John Abraham, Katrina Kaif, Neil Nitin M  Mohit Chauhan  Pritam.mp3", cover: "https://c.saavncdn.com/978/New-York-Hindi-2009-20190329182537-500x500.jpg" },
  { title: "Rang Lageya", artist: "Paras Chhabra | Mahira Sharma | Mohit Chauhan | Rochak Kohli | Kumaar", file: "music/Rang Lageya  Official Video  Paras Chhabra  Mahira Sharma  Mohit Chauhan  Rochak Kohli  Kumaar.mp3", cover: "https://c.saavncdn.com/861/Rang-Lageya-Hindi-2021-20210315162921-500x500.jpg" },
  { title: "Jeno Tomari Kache (যেন তোমারই কাছে)", artist: "Shudhu Tomari Jonyo | Dev | Srabanti", file: "music/Jeno Tomari Kache (যন তমরই কছ)-Lyrical  Shudhu Tomari Jonyo  Dev  Srabanti  SVF.mp3", cover: "https://c-cdnet.cdn.smule.com/rs-s80/arr/f1/f7/c6e27c74-9c1c-412f-9e01-d584a043a993.jpg" },
  { title: "Benche Thakar Gaan", artist: "Anupam Roy", file: "music/Benche Thakar Gaan.mp3", cover: "https://gdn8.com/wp-content/uploads/2014/03/Beche-Thakar-Gaan-Lyrics-by-Anupam-Roy.jpg" },
  { title: "Jor Jhattka Legeche জোর ঝটকা লেগেছে", artist: "Nakash Aziz & June B | Dabbu | Rajiv Dutta", file: "music/Jor Jhattka Legeche জর ঝটক লগছ Video  Nakash Aziz & June B  Dabbu  Rajiv Dutta.mp3", cover: "https://c.saavncdn.com/921/Jor-Jhattka-Legeche-Bengali-2025-20250808141003-500x500.jpg" },
  { title: "Bojhena Shey Bojhena (বোঝেনা সে বোঝেনা)", artist: "Soham |Abir | Payel |Mimi | Arijit Singh", file: "music/Bojhena Shey Bojhena (বঝন স বঝন)  Title Track Soham Abir  Payel Mimi  Arijit Singh SVF.mp3", cover: "https://upload.wikimedia.org/wikipedia/en/5/54/It_is_the_poster_of_the_film_Bojhena_Shey_Bojhena.jpg" },
  { title: "Egiye de", artist: "Dev | Srabanti | Arijit Singh | Madhubanti Bagchi | Arindom", file: "music/Egiye de  Shudhu Tomari Jonyo  Dev  Srabanti  Arijit Singh  Madhubanti Bagchi  Arindom  SVF.mp3", cover: "https://i.ytimg.com/vi/6rOCiszTz-I/maxresdefault.jpg" },
  { title: "Rimjhim E Dhara Te", artist: "Dev | Koel | Shaan |Jeet Gannguli", file: "music/Rimjhim E Dhara Te  Premer Kahini  Dev  Koel  Shaan Jeet Gannguli  SVF.mp3", cover: "https://i.ytimg.com/vi/AtnMG_40604/hqdefault.jpg" },
  { title: "Ghum Ghum Ei Chokhe", artist: "Dev | Subhashree | Shreya | Sonu Nigam | Jeet Gannguli | Sujit", file: "music/Ghum Ghum Ei Chokhe  Romeo  Dev  Subhashree  Shreya  Sonu Nigam  Jeet Gannguli  Sujit  SVF.mp3", cover: "https://i.ytimg.com/vi/rqUPmN-rGhw/maxresdefault.jpg" },
  { title: "(তোর মতোই)", artist: "Ankush, Mimi |Jeet Gannguli |Prasen ", file: "music/Tor Motoi - Lyrical (তর মতই)  Ki Kore Toke Bolbo  Ankush, Mimi Jeet Gannguli Prasen SVF Music.mp3", cover: "https://c.saavncdn.com/538/Ki-Kore-Toke-Bolbo-Bengali-2016-20230901151808-500x500.jpg" },
  { title: "Dekhechi Tomake Srabone", artist: "Dev | Subhashree | Shaan, June | Jeet G", file: "music/Dekhechi Tomake Srabone  Challenge  Lyrical  Dev  Subhashree  Shaan, June  Jeet G  SVF Music.mp3", cover: "https://i.ytimg.com/vi/KCBtz-I738A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDfyWkX488EnlY2OphRLIFxaVggCA" },
  { title: "Ke Tui Bol", artist: "Dev | Sayantika | Arijit Singh | Jeet Gannguli", file: "music/Ke Tui Bol  Herogiri  Dev  Sayantika  Arijit Singh  Jeet Gannguli.mp3", cover: "https://i.scdn.co/image/ab67616d0000b27360cfcf88dec05aaaf1c49853" },
  { title: "Tomake Chai", artist: "Yash | Mimi | Arijit Singh | Birsa Dasgupta", file: "music/Tomake Chai (তমক চই )  Gangster  Arijit Singh  Arindom  Yash  Mimi  Birsa Dasgupta  SVF.mp3", cover: "https://c.saavncdn.com/107/Gangster-Original-Motion-Picture-Soundtrack-Bengali-2016-20240830180301-500x500.jpg" },
  { title: "Tor Ek Kothaye", artist: " Koel | Jeet | Arijit Singh | Jeet Gannguli", file: "music/Tor Ek Kothaye  Besh Korechi Prem Korechi  Koel  Jeet  Arijit Singh  Jeet Gannguli.mp3", cover: "https://i1.sndcdn.com/artworks-000122335998-ozivz9-t240x240.jpg" },
  { title: "Oviman | অভিমান", artist: "Tanveer Evan | Piran Khan | Jovan | Mehazabien", file: "music/Oviman  অভমন  Tanveer Evan  Piran Khan  Jovan  Mehazabien  Best Friend 3 Drama Song.mp3", cover: "https://c.saavncdn.com/376/Oviman-From-Best-friend-3--Bengali-2021-20210316123306-500x500.jpg" },
  { title: "Ei Bhalo Ei Kharap", artist: "Soham | Mimi | Arijit Singh | Monali Thakur | Indraadip", file: "music/Ei Bhalo Ei Kharap  Golpo Holeo Shotti  Soham  Mimi  Arijit Singh  Monali Thakur  Indraadip.mp3", cover: "https://i.ytimg.com/vi/Pd-60UCPYe4/maxresdefault.jpg" },
  { title: "Tomar Ghore Bosot Kore Koyjona", artist: "Anirban Sur", file: "music/Tomar Ghore Bosot Kore Koyjona Anirban Sur  Official Lyrical Video.mp3", cover: "https://c.saavncdn.com/465/Tomar-Ghore-Bosot-Kore-Koyjona-Bengali-2021-20240904050417-500x500.jpg" },
  { title: "Mon Majhi Re", artist: "Jeet & Subhasree", file: "music/Arijit Singh Mon Majhi Re Full HD Video Song  Boss Bengali Movie  Jeet & Subhasree.mp3", cover: "https://i.ytimg.com/vi/V4EVWIgu0y8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBsZG_Xdiy8vh0k9iNcKB5NoDX-Aw" },
  { title: "Tomake Chai (তোমাকে চাই)", artist: " Bonny | Koushani | Arijit Singh | Indraadip Dasgupta ", file: "music/Tomake Chai Title Track  তমক চই  Bonny  Koushani  Arijit Singh  Indraadip Dasgupta  SVF.mp3", cover: "https://upload.wikimedia.org/wikipedia/en/9/9f/Tomake_Chai_-_Poster.jpg" },
  { title: "Shedin Dekha Hoyechilo", artist: "Dev | Srabanti | Sujit Mondal", file: "music/Shedin Dekha Hoyechilo ( সদন দখ হয়ছল )  Title Track  Dev  Srabanti  Sujit Mondal  SVF.mp3", cover: "https://i.scdn.co/image/ab67616d0000b273e0494d000b6e517ea7d5f79b" },
  { title: "Ekta Premer Gaan Likhechi", artist: " Dev | Koel Mallick | Jeet Gannguli | Sujit Mondal", file: "music/Ekta Premer Gaan Likhechi _ Paglu 2 _ Dev _ Koel Mallick _ Jeet Gannguli _ Sujit Mondal [RUGtY2EGGl4].mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPi_XBZ9Y5gtwyTSBn7FcLVgyIQgUrvkmOkQ&s" },
  { title: "Jane Mon", artist: "Dev | Koel Mallick | Jeet Gannguli | Rajib Kumar", file: "music/Jane Mon  Paglu  Dev  Koel Mallick  Jeet Gannguli  Rajib Kumar.mp3", cover: "https://i.ytimg.com/vi/aaIIlnE-XF0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD7sVDMRCmzZ4uavQcRb8FMNvfzXA" },
  { title: "Eshechi Toke Niye", artist: " Dev | Koel Mallick | Mohit Chouhan | Jeet Gannguli | Rajib Kumar", file: "music/Eshechi Toke Niye  Paglu  Dev  Koel Mallick  Mohit Chouhan  Jeet Gannguli  Rajib Kumar.mp3", cover: "https://i.ytimg.com/vi/N3pDIcLo3wQ/maxresdefault.jpg" },
  { title: "Shudhu Tui (শুধু তুই)", artist: "Ankush | Mimi | Raj Barman | Trissha | Amlaan | Baba Yadav", file: "music/Shudhu Tui (শধ তই)  Villain  Ankush  Mimi  Raj Barman  Trissha  Amlaan  Baba Yadav  SVF.mp3", cover: "https://i.ytimg.com/vi/7XGr7KOcvyM/maxresdefault.jpg" },
  { title: "Parbona Ami Charte Toke", artist: " Bonny | Koushani | Arijit | Indraadip | Raj C", file: "music/Parbona Ami Charte Toke - Lyrical  Title Track  Bonny  Koushani  Arijit  Indraadip  Raj C SVF.mp3", cover: "https://i.ytimg.com/vi/zo3jN2UjMVQ/sddefault.jpg" },
  { title: "Bhalobashar Morshum (ভালবাসার মরশুম)", artist: "Shreya Ghoshal | Sanai | Srijit", file: "music/Bhalobashar Morshum (ভলবসর মরশম)  X=Prem  Shreya Ghoshal  Sanai  Srijit  SVF.mp3", cover: "https://i.ytimg.com/vi/9T3SypTYidg/maxresdefault.jpg" },
  { title: "Bhalobeshe Kono Bhool", artist: " Dev | Srabanti | Sayantika | Arindom | Shalmali Kholgade", file: "music/Bhalobeshe Kono Bhool  Bindaas  Dev  Srabanti  Sayantika  Arindom  Shalmali Kholgade  SVF.mp3", cover: "https://i.ytimg.com/vi/R65MnL6-pNo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC7RpaZR80LG1Og_JGp47cMh2jH4g" },
  { title: "Bhalolaage Tomake", artist: "Bonny | Koushani | Arijit Singh | Anwesshaa | Indraadip Dasgupta", file: "music/Bhalolaage Tomake  Tomake Chai  Bonny  Koushani  Arijit Singh  Anwesshaa  Indraadip Dasgupta.mp3", cover: "https://i.ytimg.com/vi/4WuFQEGoTlg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBdvdHW3H9_E3i-3vq-NbcMqjg8rQ" },
  { title: "Hote Paare Na | হতে পারে না", artist: "Ankush | Nusrat | Arindom | Prashmita | Raj", file: "music/Hote Paare Na  হত পর ন  Bolo Dugga Maiki  Ankush  Nusrat  Arindom  Prashmita  Raj.mp3", cover: "https://i.scdn.co/image/ab67616d0000b273149dd3cae2bff0373c7f890a" },
  { title: "Baar Baar Dekho Hazar Baar Dekho", artist: " Mohammed Rafi | China Town", file: "music/Baar Baar Dekho Hazar Baar Dekho with lyrics  बर बर दख हजर बर  Mohammed Rafi  China Town.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLXEUGgksWurqjbmcyw9rVjsUckwq700nmw&s" },
  { title: "Palat Tera Hero Idhar Hai", artist: " Arijit Singh | Varun Dhawan", file: "music/Palat Tera Hero Idhar Hai (Full Video) Song Main Tera Hero  Arijit Singh  Varun Dhawan.mp3", cover: "https://i.ytimg.com/vi/9vkcYxbGdTE/maxresdefault.jpg" },
  { title: "Tu Hi Toh Hai", artist: "Pritam | Benny Dayal", file: "music/Tu Hi Toh Hai  Akshay Kumar & Sonakshi Sinha  Holiday  Pritam  Benny Dayal.mp3", cover: "https://i.ytimg.com/vi/1JLWzJxG2Ac/maxresdefault.jpg" },
  { title: "Saiyaara", artist: "Tanishk Bagchi, Faheem A, Arslan N | Irshad Kamil", file: "music/Saiyaara Full Song  Ahaan Panday, Aneet Padda  Tanishk Bagchi, Faheem A, Arslan N  Irshad Kamil.mp3", cover: "https://m.media-amazon.com/images/M/MV5BMTk2ZmFhYjctYWZiYy00N2IxLWEzMWItZGRiMDY4ZDQwZWFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { title: "Aaj dil Shaayraana ", artist: "Akshay Kumar & Sonakshi Sinha | Pritam | Irshad K", file: "music/Aaj dil Shaayraana - Arijit Singh  Holiday  Akshay Kumar & Sonakshi Sinha  Pritam  Irshad K.mp3", cover: "https://i.ytimg.com/vi/6HUYAfCB728/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBZfgLAotjNRckN32rmKV8UeARodQ" },
  { title: "Dagabaaz Re Dabangg 2", artist: "Salman Khan, Sonakshi Sinha", file: "music/Dagabaaz Re Dabangg 2 Full Video Song ᴴᴰ  Salman Khan, Sonakshi Sinha.mp3", cover: "https://i.scdn.co/image/ab67616d0000b27305b3ca44c67b40e983179d1c" },
  { title: "WAJAH TUM HO", artist: "Zareen Khan, Karan Singh Grover ", file: "music/WAJAH TUM HO Full Video Song  HATE STORY 3 Songs  Zareen Khan, Karan Singh Grover  T-Series.mp3", cover: "https://i.ytimg.com/vi/__ZvXBf1rmw/maxresdefault.jpg" },
  { title: "Bheege Hoth Tere Pyasa Dil Mera", artist: "", file: "music/Bheege Hoth Tere Pyasa Dil Mera LYRICS   Murder   Kunal Ganjawala   Emraan Hashmi,Mallika Sherawat 1.mp3", cover: "https://bollywoodproduct.in/wp-content/uploads/Lyrics-Bheege-Hont-Tere-from-Murder-2004.webp" },
  { title: "Aashiq Banaya Aapne", artist: "Himesh Reshammiya,Shreya Ghoshal | Emraan", file: "music/Aashiq Banaya Aapne Title (Full Song)  Himesh Reshammiya,Shreya Ghoshal  Emraan Hashmi,Tanushree D.mp3", cover: "https://i.ytimg.com/vi/0bAVd9jJE2Q/maxresdefault.jpg" },
  { title: "Mar Jaawan Mit Jaawan", artist: "Aashiq Banaya Aapne | Himesh Reshammiya", file: "music/Mar Jaawan Mit Jaawan Lyrical Video Sng  Aashiq Banaya Aapne  Emraan Hashmi, Tanushree Dutta.mp3", cover: "https://i.ytimg.com/vi/RRXyD89Mqyc/maxresdefault.jpg" },
  { title: "Tui Borsha Bikeler Dheu", artist: "Rocky | Mimoh | Puja Bose | Shaan | Palak Muchhal | Jeet Gannguli", file: "music/Tui Borsha Bikeler Dheu  Rocky  Mimoh  Puja Bose  Shaan  Palak Muchhal  Jeet Gannguli.mp3", cover: "https://i.ytimg.com/vi/bhaS8sOfYIo/maxresdefault.jpg" },
  { title: "Dil Tu Hi Bataa", artist: "Hrithik Roshan, Kangana Ranaut", file: "music/Dil Tu Hi Bataa Krrish 3 Full Video Song  Hrithik Roshan, Kangana Ranaut.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8qNQKuLLr4lI-4kirynXBGYop8fvl7CbSw&s" },
  { title: "Mahiya Mahiya", artist: "Awarapan Movie | Mrinalini Sharma, Emraan Hashmi", file: "music/Mahiya Mahiya (HD) Video Song  Awarapan Movie  Mrinalini Sharma, Emraan Hashmi  Hindi Songs.mp3", cover: "https://i.ytimg.com/vi/vU3X1Bv18Ac/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC69v6lswIhacHVIRbGitl1hab7tw" },
  { title: "Chupi Chupi", artist: "Hiran | Payel | Mohit | Shreya | Jeet", file: "music/Chupi Chupi (চপ চপ)  Le Halua Le  Lyrical  Hiran  Payel  Mohit  Shreya  Jeet  SVF Music.mp3", cover: "https://i.ytimg.com/vi/VLVamYa3Psg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAkXOebfsmvv4WwoP_-mhR9lFoqxw" },
  { title: "Woh Ladki Jo Sabse Alag", artist: "Shahrukh Khan, Twinkle Khanna | Baadshah", file: "music/Woh Ladki Jo Sabse Alag Hai 4K HD Video  Shahrukh Khan, Twinkle Khanna  Baadshah  90's Hits Songs.mp3", cover: "https://i.ytimg.com/vi/GpytkKq0VF8/maxresdefault.jpg" },
  { title: "Oh Mama! TETEMA", artist: "ShreyaGhoshal, Vishal Mishra, Sanjoy |Bhushan K", file: "music/Oh Mama! TETEMA (Song) Rayvanny, Nora Fatehi  ShreyaGhoshal, Vishal Mishra, Sanjoy Bhushan K.mp3", cover: "https://c.saavncdn.com/405/Oh-Mama-TETEMA-Hindi-2025-20250908181014-500x500.jpg" },
  { title: "Akhiyaan Gulaab", artist: "Shahid Kapoor, Kriti Sanon | Mitraz", file: "music/Akhiyaan Gulaab (Song)_ Shahid Kapoor, Kriti Sanon  Mitraz  Teri Baaton Mein Aisa Uljha Jiya.mp3", cover: "https://c.saavncdn.com/214/Teri-Baaton-Mein-Aisa-Uljha-Jiya-Hindi-2024-20240205151011-500x500.jpg" },
  { title: "Udi Udi Jaye", artist: " Raees | Shah Rukh Khan | Ram Sampath", file: "music/Udi Udi Jaye  Raees  Shah Rukh Khan & Mahira Khan  Ram Sampath.mp3", cover: "https://i.ytimg.com/vi/YZV0birVI-o/maxresdefault.jpg" },
  { title: "Queen: London Thumakda", artist: "", file: "music/Queen_ London Thumakda Full Video Song  Kangana Ranaut, Raj Kumar Rao.mp3", cover: "https://i.ytimg.com/vi/udra3Mfw2oo/maxresdefault.jpg" },
  { title: "Cham Cham", artist: " BAAGHI | Tiger Shroff, Shraddha Kapoor| Meet Bros, Monali Thakur| Sabbir Khan", file: "music/Cham Cham Full Video  BAAGHI  Tiger Shroff, Shraddha Kapoor Meet Bros, Monali Thakur Sabbir Khan.mp3", cover: "https://i.ytimg.com/vi/f6vY6tYvKGA/maxresdefault.jpg" },
  { title: "Chittiyaan Kalaiyaan", artist: "| Roy | Meet Bros Anjjan, Kanika Kapoor", file: "music/'Chittiyaan Kalaiyaan' FULL VIDEO SONG  Roy  Meet Bros Anjjan, Kanika Kapoor  T-SERIES.mp3", cover: "https://i.ytimg.com/vi/zpsVpnvFfZQ/maxresdefault.jpg" },
  { title: "Namaste Narasimhaya Narasimha Arati Kirtan", artist: "Bhakti Charu Swami", file: "music/Namaste Narasimhaya  Narasimha Arati Kirtan  Bhakti Charu Swami.mp3", cover: "https://i.ytimg.com/vi/VFQOVZeB8CM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDARyx8qzg7S6DvtUB_Vc5FI3MENA" },
  { title: "Namah Namah Tulsi", artist: "Iskcon Bhajans", file: "music/Iskcon Bhajans  Namah Namah Tulsi  Iskcon Prabhati Aarti.mp3", cover: "https://i.ytimg.com/vi/2nzgDj2CLcw/maxresdefault.jpg" },
  { title: "Jaya Jaya Gora Chander", artist: "Iskcon Sandhya aarti", file: "music/Iskcon Sandhya aarti  Jaya Jaya Gora Chander  Hare Krishna.mp3", cover: "https://i.ytimg.com/vi/2JadzV0IzbY/maxresdefault.jpg" },
  { title: "Tu Hi Meri Shab Hai - K.K", artist: "Gangster | Emraan Hashmi, Kangna Ranaut", file: "music/Tu Hi Meri Shab Hai - K.K _ Gangster _ Emraan Hashmi, Kangna Ranaut _ Full 4K Video Song [mWBvudKcByg].mp3", cover: "https://i.scdn.co/image/ab67616d0000b27321e6dee5578b2c6357a3cdc1" },
  { title: "Jaavedaan Hai", artist: "KK, Suzanne D'Mello", file: "music/Jaavedaan Hai Lyrical Video  1920 Evil Returns  KK, Suzanne D'Mello.mp3", cover: "https://i.ytimg.com/vi/Oocst6d2scU/maxresdefault.jpg" },
  { title: "Mere Sapno Ki Rani", artist: "", file: "music/Mere Sapno Ki Rani 4K Song _ मर सपन क रन  आरधन  रजश खनन - शरमल टगर - कशर कमर.mp3", cover: "https://i.ytimg.com/vi/9PdSmDRGIwM/maxresdefault.jpg" },
  { title: "Dekha Ek Khwab", artist: "Silsila |Amitabh Bachchan| Lata Mangeshkar, Kishore Kumar", file: "music/Dekha Ek Khwab with lyrics दख एक खवब Silsila Amitabh Bachchan Lata Mangeshkar, Kishore Kumar.mp3", cover: "https://c.saavncdn.com/471/Dekha-Ek-Khwab-Hindi-2015-500x500.jpg" },
  { title: "Tuje Dekha Toye Jana Sanam", artist: "Dilwale Dulhania Le Jayenge | Shah Rukh Khan, Kajol | Lata, Kumar Sanu ", file: "music/Tujhe Dekha Toh Song  Dilwale Dulhania Le Jayenge  Shah Rukh Khan, Kajol  Lata, Kumar Sanu  DDLJ.mp3", cover: "https://i.ytimg.com/vi/cNV5hLSa9H8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA_CpsUcG0kBzsrRdTCNMRif6YNKw" },
  { title: "Illahi", artist: "Yeh Jawaani Hai Deewani | Ranbir Kapoor, Deepika Padukone", file: "music/Illahi - Yeh Jawaani Hai Deewani  Ranbir Kapoor, Deepika Padukone.mp3", cover: "https://i.ytimg.com/vi/AicKz1ISNjU/maxresdefault.jpg" },
  { title: "Sajni", artist: "Arijit Singh, Ram Sampath | Laapataa Ladies", file: "music/Sajni 8K Full Video Song_ Arijit Singh, Ram Sampath  Laapataa Ladies  Aamir Khan Productions.mp3", cover: "https://i.scdn.co/image/ab67616d0000b273d5f4378b1ffc9119fdc7306d" },
  { title: "Tere Liye", artist: "Prince | Vivek Oberoi | Atif Aslam, Shreya Ghoshal", file: "music/Tere Liye - Lyrical - Prince  Vivek Oberoi  Atif Aslam, Shreya Ghoshal  Hindi Hits Dance Songs.mp3", cover: "https://i.ytimg.com/vi/rs5gAjNytAo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAs0UgW-Esww5kN_7ouo6XLNv_UtA" },
  { title: "Pehla Pehla Pyaar", artist: "Hum Aapke Hai Kon | Salman Khan | Madhuri Dixit", file: "music/Pehla Pehla Pyaar with lyrics  पहल पहल पयर  Hum Aapke Hai Kon  Salman Khan  Madhuri Dixit.mp3", cover: "https://i.ytimg.com/vi/GAYU-oUcEU0/sddefault.jpg" },
  { title: "Pehla Pyaar", artist: " Kabir Singh | Shahid Kapoor, Kiara Advani | Armaan Malik | Vishal Mishra", file: "music/Full Song_ Pehla Pyaar  Kabir Singh  Shahid Kapoor, Kiara Advani  Armaan Malik  Vishal Mishra.mp3", cover: "https://i.ytimg.com/vi/B7SkAq_94J8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCq1fHCFc6YBNtxKvhFLOCtTibr9g" },
  { title: "Jab Se Tere Naina", artist: "Saawariya | Ranbir Kapoor | Sonam Kapoor | Shaan", file: "music/Jab Se Tere Naina Lyrical Video - Saawariya  Ranbir Kapoor  Sonam Kapoor  Shaan.mp3", cover: "https://i.ytimg.com/vi/6_1p9FZSSUs/maxresdefault.jpg" },
  { title: " Aashayein ", artist: "", file: "music/KK Best Song - Aashayein  Iqbal  KK Best Songs  Best Of KK.mp3", cover: "https://i.ytimg.com/vi/Hjg4Fxrflqg/maxresdefault.jpg" },
  { title: "Pehle Bhi Main", artist: "", file: "music/ANIMAL_Pehle Bhi Main(Full Video)  Ranbir Kapoor,Tripti Dimri Sandeep V Vishal M,Raj S Bhushan K.mp3", cover: "https://i.ytimg.com/vi/lwv_0SEJ4NQ/sddefault.jpg" },
  { title: "Tere Mast Mast Do Nain", artist: "", file: "music/Tere Mast Mast Do Nain ( With Lyrics) Full Song Dabangg  Salman Khan.mp3", cover: "https://m.media-amazon.com/images/I/61dIeAK6ucL._UXNaN_FMjpg_QL85_.jpg" },
  { title: "Jag Ghoomeya", artist: "SULTAN | Salman Khan, Anushka Sharma | Rahat Fateh Ali Khan, Vishal-Shekhar", file: "music/Jag Ghoomeya Full Song  SULTAN  Salman Khan, Anushka Sharma  Rahat Fateh Ali Khan, Vishal-Shekhar.mp3", cover: "https://i.ytimg.com/vi/t10sQb0Zmjs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCT1PqBWczK_-dwCCEPEweQNrllZg" },
  { title: "Chori Kiya Re Jiya", artist: "Dabangg | Salman Khan, Sonakshi Sinha | Sonu Nigam", file: "music/Chori Kiya Re Jiya - Full Song  Dabangg  Salman Khan, Sonakshi Sinha  Sonu Nigam  tinyaudio.mp3", cover: "https://i.ytimg.com/vi/z84tRtT7dvk/maxresdefault.jpg" },
  { title: "Khoya Khoya", artist: "Sooraj Pancholi, Athiya Shetty ", file: "music/'Khoya Khoya' FULL VIDEO Song  Sooraj Pancholi, Athiya Shetty  Hero  T-Series.mp3", cover: "https://i.ytimg.com/vi/Qrhl4uxAeu8/maxresdefault.jpg" },
  { title: "Musu Musu", artist: " Pyaar Mein Kabhi Kabhi|Dino Morea,Rinke|Shaan|Vishal Dadlani", file: "music/Musu Musu Full Video - Pyaar Mein Kabhi KabhiDino Morea,RinkeShaanVishal Dadlani.mp3", cover: "https://i.ytimg.com/vi/5ahWUJsgqGg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAHksxUoaOXRil1SH6bkPoJHPmf5A" },
  { title: "Tere Naina", artist: "Jai Ho | Salman Khan, Tabu", file: "music/Tere Naina Full Song with Lyrics  Jai Ho  Salman Khan, Tabu  Releasing_ 24 Jan 2014.mp3", cover: "https://i.ytimg.com/vi/B5r_Z6sot1c/maxresdefault.jpg" },
  { title: "Tere Vaaste", artist: "Zara Hatke Zara Bachke | Vicky, Sara, Varun J, Sachin-Jigar, Amitabh B", file: "music/Tere Vaaste  Full Video  Zara Hatke Zara Bachke  Vicky, Sara, Varun J, Sachin-Jigar, Amitabh B.mp3", cover: "https://i.ytimg.com/vi/X7WXHhokylc/maxresdefault.jpg" },
  { title: "Mere Nishaan", artist: "Oh My God | Akshay Kumar, Paresh Rawal | Kailash Kher, Meet Bros Anjjan", file: "music/Mere Nishaan Full Song  Oh My God   Akshay Kumar, Paresh Rawal  Kailash Kher, Meet Bros Anjjan.mp3", cover: "https://i.ytimg.com/vi/zzYutgiQVac/maxresdefault.jpg" },
  { title: "I Am In Love", artist: "Pritam | Emraan Hashmi, Prachi Desai", file: "music/I Am In Love Lyrical Video  Once Upon A Time In Mumbai  Pritam  Emraan Hashmi, Prachi Desai.mp3", cover: "https://i.ytimg.com/vi/BDQG49CgQL4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCIl4XKH8rarcLucLin-6jAbWCHGg" },
  { title: "Humdard", artist: " Ek Villain | Arijit Singh | Mithoon", file: "music/Humdard Full Video Song  Ek Villain  Arijit Singh  Mithoon.mp3", cover: "https://c.saavncdn.com/151/Ek-Villain-Hindi-2014-500x500.jpg" },
  { title: "Itni Si Baat Hain", artist: "AZHAR | Emraan Hashmi, Prachi Desai | Arijit Singh, Pritam", file: "music/Itni Si Baat Hain Full Video Song  AZHAR  Emraan Hashmi, Prachi Desai  Arijit Singh, Pritam.mp3", cover: "https://i.ytimg.com/vi/1o_brS03A5A/maxresdefault.jpg" },
  { title: "kukkad", artist: "", file: "music/Vishal & Shekhar, Shahid Mallya, Nisha Mascarenhas, Marianne D'cruz Aiman - Kukkad.mp3", cover: "https://i.ytimg.com/vi/1Na8nKEUjYI/maxresdefault.jpg" },
  { title: "Haaye Oye ", artist: "Haaye Oye", file: "music/QARAN, Ash King - Haaye Oye (Lyrics).mp3", cover: "https://c.saavncdn.com/397/Haaye-Oye-Acoustic--Hindi-2019-20190529064502-500x500.jpg" },
  { title: "Mera Mann Kehne Laga", artist: "Nautanki Saala | Ayushmann Khurrana,Kunaal Roy Kapur", file: "music/Mera Mann Kehne Laga Full Song with Lyrics  Nautanki Saala  Ayushmann Khurrana,Kunaal Roy Kapur.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUNvji0nQMjlOcl5avwMrNwfmDbQSzvgSDaQ&s" },
  { title: "Dil Na Diya", artist: "Krrish | Kunal Ganjawala | Rajesh Roshan | Hrithik Roshan,Priyanka Chopra", file: "music/Dil Na Diya - Video Song  Krrish  Kunal Ganjawala  Rajesh Roshan  Hrithik Roshan,Priyanka Chopra.mp3", cover: "https://i.ytimg.com/vi/-eRzKCeX7YM/maxresdefault.jpg" },
  { title: "Ure Geche", artist: "Bonny | Koushani | Raj Chakraborty ", file: "music/Ure Geche  পরব ন আম ছড়ত তক  Full Video Song  Bonny  Koushani  Raj Chakraborty  SVF.mp3", cover: "https://i.ytimg.com/vi/gg9eX9MzLxo/maxresdefault.jpg" },
  { title: "Thik Jeno Love Story", artist: "Arindom, Prashmita", file: "music/Thik Jeno Love Story (Title Song) - Arindom, Prashmita Full HD Audio Song with Lyrics Star Jalsha.mp3", cover: "https://c.saavncdn.com/985/Thik-Jeno-Love-Story-Bengali-2014-20230912071433-500x500.jpg" },
  { title: "Tumi Aashe Paashe (তুমি আশে পাশে )", artist: " Parbona Ami Chartey Tokey | Bonny | Koushani ", file: "music/Tumi Aashe Paashe (তম আশ পশ )  Parbona Ami Chartey Tokey  Bonny  Koushani  SVF Music.mp3", cover: "https://i.ytimg.com/vi/bnFiJ_e_dEg/sddefault.jpg" },
  { title: "Aami Tomar Kache (আমি তোমার কাছে)", artist: "Yoddha | Dev | Mimi | Arijit Singh | Prasen", file: "music/Aami Tomar Kache (আম তমর কছ)  Lyrical  Yoddha  Dev  Mimi  Arijit Singh  Prasen SVF Music.mp3", cover: "https://i.ytimg.com/vi/u_4BBFxp7Rs/maxresdefault.jpg" },
  { title: "Emotional Saiyaan", artist: "Shudhu Tomari Jonyo | Dev | Mimi | Arijit | Shalmali | Arindom", file: "music/Emotional Saiyaan  Shudhu Tomari Jonyo  Dev  Mimi  Arijit   Shalmali  Arindom.mp3", cover: "https://i.ytimg.com/vi/YBU97Lb6jHw/maxresdefault.jpg" },
  { title: "Bojhabo Ki Kore", artist: "Haripada Bandwala | Ankush | Nusrat | Arijit | Anwesshaa | Indraadip", file: "music/Bojhabo Ki Kore  Haripada Bandwala  Ankush  Nusrat  Arijit  Anwesshaa  Indraadip  SVF Music.mp3", cover: "https://i.ytimg.com/vi/CP2AYEqoaZo/maxresdefault.jpg" },
  { title: "Jodi Bolo (যদি বলো)", artist: "One Movie Song | Yash | Nusrat | Birsa Dasgupta | Arijit Singh | Arindom", file: "music/Jodi Bolo (যদ বল)  One Movie Song  Yash  Nusrat  Birsa Dasgupta  Arijit Singh  Arindom  SVF.mp3", cover: "https://i.ytimg.com/vi/jKMZZX2YMg0/sddefault.jpg" },
  { title: "Jhilmil Laage Re (ঝিলমিল লাগে রে)", artist: "Raghu Dakat | Dev, Idhika | Nilayan,Prasen,Ishan,Shuchismita", file: "music/Jhilmil Laage Re (ঝলমল লগ র) Raghu Dakat  Dev, Idhika  Nilayan,Prasen,Ishan,Shuchismita SVF.mp3", cover: "https://i.ytimg.com/vi/mQ4h0-dxbww/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAP4sZv51Q2ROAV5lLGfoMdQyGaSA" },
  { title: "Jalte Diye", artist: "Prem Ratan Dhan Payo | Himesh Reshammiya | Salman Khan, Sonam Kapoor", file: "music/'JALTE DIYE' Full VIDEO song  PREM RATAN DHAN PAYO  Salman Khan, Sonam Kapoor  T-Series.mp3", cover: "https://c.saavncdn.com/140/Prem-Ratan-Dhan-Payo-Hindi-2015-500x500.jpg" },
  { title: "Jani Na (জানি না)", artist: "Challenge | Nachiketa | Dev | Subhashree | Jeet Gannguli ", file: "music/Jani Na (জন ন)  Lyrical  Challenge  Nachiketa  Dev  Subhashree  Jeet Gannguli  SVF Music.mp3", cover: "https://i.ytimg.com/vi/qBwUXrnJ21s/maxresdefault.jpg" },
  { title: "Poran Jai Jolia Re (পরাণ যায় জ্বলিয়া রে)", artist: "Dev | Subhashree | Jeet Gannguli ", file: "music/Poran Jai Jolia Re (পরণ যয় জবলয় র)  Title Track  Dev  Subhashree  Jeet Gannguli  SVF.mp3", cover: "https://i.ytimg.com/vi/Mktl_fwILpg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDsFRBGxmq4rRrY3a7xQkfmwNpZlg" },
  { title: "Sharatadin", artist: " Yoddha | Dev | Mimi | Arijit | Anwesshaa | Indraadip | Raj Chakraborty", file: "music/Sharatadin  Yoddha  Dev  Mimi  Arijit  Anwesshaa  Indraadip  Raj Chakraborty  SVF.mp3", cover: "https://i.ytimg.com/vi/DbXP1TqLwrs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDYabi78evIMxvYOnItxqlGK56hkw" },
  { title: "Joy Kali (জয় কালী)", artist: "Raghu Dakat | Dev | Rathijit, Ishan, Shreya | Dhrubo B ", file: "music/Joy Kali (জয় কল) - Lyrical  Raghu Dakat  Dev  Rathijit, Ishan, Shreya  Dhrubo B  SVF Music.mp3", cover: "https://i.ytimg.com/vi/sdHa9xsvWts/maxresdefault.jpg" },
  { title: "Mon Bojhe Naa (মন বোঝে না)", artist: "Chirodini Tumi Je Amar 2 | Arjun | Arijit Singh | Jeet G ", file: "music/Mon Bojhe Naa (মন বঝ ন)  Chirodini Tumi Je Amar 2  Arjun  Arijit Singh  Jeet G  SVF Music.mp3", cover: "https://i.ytimg.com/vi/6SkQ-srIJVM/hqdefault.jpg" },
  { title: "", artist: "", file: "music/.mp3", cover: "" },
  { title: "", artist: "", file: "music/.mp3", cover: "" },
  { title: "", artist: "", file: "music/.mp3", cover: "" },
  { title: "", artist: "", file: "music/.mp3", cover: "" },
  { title: "", artist: "", file: "music/.mp3", cover: "" },

];


let currentSong = 0;
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let currentList = "all";

const audio = document.getElementById("audio");
audio.preload = "metadata"; // only load info, not full audio
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.getElementById("progress");
const progressContainer = document.querySelector(".progress-container");
const volumeSlider = document.getElementById("volume");
const muteBtn = document.getElementById("mute");
const volumeValue = document.getElementById("volumeValue");
const favCurrent = document.getElementById("favCurrent");
const songList = document.getElementById("songList");
const allTab = document.getElementById("allSongsTab");
const favTab = document.getElementById("favSongsTab");
const allCount = document.getElementById("allCount");
const favCount = document.getElementById("favCount");
const search = document.getElementById("search");

/* ===== Load & Play ===== */
function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
  audio.src = song.file;
  favCurrent.classList.toggle("active", favorites.some(fav => fav.title === song.title));
}
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

function playSong() {
  audio.play();
  playBtn.textContent = "⏸";
  document.querySelector(".player").classList.add("playing");
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = "▶️";
  document.querySelector(".player").classList.remove("playing");
}

playBtn.addEventListener("click", () => audio.paused ? playSong() : pauseSong());
nextBtn.addEventListener("click", () => changeSong(1));
prevBtn.addEventListener("click", () => changeSong(-1));

function changeSong(dir) {
  const list = currentList === "fav" ? favorites : songs;
  currentSong = (currentSong + dir + list.length) % list.length;
  loadSong(list[currentSong]);
  playSong();
}

/* ===== Progress Bar (Swipable) ===== */
let isDragging = false;
progressContainer.addEventListener("mousedown", e => { isDragging = true; setProgress(e); });
window.addEventListener("mousemove", e => { if (isDragging) setProgress(e); });
window.addEventListener("mouseup", e => { if (isDragging) { setProgress(e); isDragging = false; } });
progressContainer.addEventListener("touchstart", e => { isDragging = true; setProgress(e.touches[0]); });
window.addEventListener("touchmove", e => { if (isDragging) setProgress(e.touches[0]); });
window.addEventListener("touchend", e => { if (isDragging) { setProgress(e.changedTouches[0]); isDragging = false; } });

function setProgress(e) {
  const rect = progressContainer.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const width = rect.width;
  const duration = audio.duration;
  if (!duration) return;
  
  const newTime = Math.max(0, Math.min((offsetX / width) * duration, duration));
  audio.currentTime = newTime;

  // Single unified bar and dot update
  const percent = (newTime / duration) * 100;
  progress.style.width = `${percent}%`;
  document.querySelector(".progress-dot").style.left = `calc(${percent}% - 7px)`;
}


audio.addEventListener("timeupdate", e => {
  if (isDragging) return;
  const { duration, currentTime } = e.srcElement;
  if (!duration) return;
  const percent = (currentTime / duration) * 100;
  progress.style.width = `${percent}%`;
 document.querySelector(".progress-dot").style.left = `calc(${percent}% - 7px)`;
  document.getElementById("currentTime").textContent = formatTime(currentTime);
  document.getElementById("timeLeft").textContent = "-" + formatTime(duration - currentTime);
});

function formatTime(t) {
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

/* ===== Volume ===== */
audio.volume = 1;
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
  volumeValue.textContent = Math.round(volumeSlider.value * 100) + "%";
});
muteBtn.addEventListener("click", () => {
  audio.muted = !audio.muted;
  muteBtn.textContent = audio.muted ? "🔇" : "🔊";
});

/* ===== Favorites ===== */
favCurrent.addEventListener("click", () => {
  const song = songs[currentSong];
  const index = favorites.findIndex(fav => fav.title === song.title);
  if (index === -1) {
  favorites.push(song);
  showToast(`💖 "${song.title}" added to Favorites`);
} else {
  favorites.splice(index, 1);
  showToast(`💔 "${song.title}" removed from Favorites`);
}

  localStorage.setItem("favorites", JSON.stringify(favorites));
  favCurrent.classList.toggle("active", index === -1);
  updateCounts();
  createPlaylist(currentList === "fav" ? favorites : songs);
});

/* ===== Playlist ===== */
function createPlaylist(list) {
  songList.innerHTML = "";
  list.forEach(song => {
    const li = document.createElement("li");
    li.classList.add("song-item");
   li.innerHTML = `
  <img data-src="${song.cover}" src="placeholder.jpg" class="song-cover lazy" />
  <div class="song-details">
    <p class="song-title">${song.title}</p>
    <p class="song-artist">${song.artist}</p>
  </div>
  <button class="heart-btn ${favorites.some(f => f.title === song.title) ? "active" : ""}">❤</button>
`;

    li.querySelector(".heart-btn").addEventListener("click", e => {
      e.stopPropagation();
      toggleFavorite(song, e.target);
    });
    li.addEventListener("click", () => {
      const list = currentList === "fav" ? favorites : songs;
      currentSong = list.findIndex(s => s.title === song.title);
      loadSong(song);
      playSong();
    });
    songList.appendChild(li);
    initLazyLoading();

  });
}

function toggleFavorite(song, btn) {
  const i = favorites.findIndex(f => f.title === song.title);
  if (i === -1) { favorites.push(song); btn.classList.add("active"); }
  else { favorites.splice(i, 1); btn.classList.remove("active"); }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  updateCounts();
  showToast(`${song.title} ${i === -1 ? "added to" : "removed from"} Favorites`);
}

/* ===== Search ===== */
search.addEventListener("input", e => {
  const term = e.target.value.toLowerCase().trim();
  const list = currentList === "fav" ? favorites : songs;
  const filtered = list.filter(song =>
    song.title.toLowerCase().includes(term) ||
    song.artist.toLowerCase().includes(term)
  );
  createPlaylist(filtered);
});

/* ===== Tabs ===== */
allTab.addEventListener("click", () => {
  currentList = "all";
  allTab.classList.add("active");
  favTab.classList.remove("active");
  createPlaylist(songs);
});
favTab.addEventListener("click", () => {
  currentList = "fav";
  favTab.classList.add("active");
  allTab.classList.remove("active");
  createPlaylist(favorites);
});

function updateCounts() {
  allCount.textContent = songs.length;
  favCount.textContent = favorites.length;
}
/* ===== Lazy Loading for Images ===== */
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img.lazy');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;  // load actual image
        img.classList.remove('lazy');
        obs.unobserve(img);
      }
    });
  }, { rootMargin: "200px" }); // loads 200px before entering viewport

  lazyImages.forEach(img => observer.observe(img));
}

/* ===== Init ===== */
updateCounts();
loadSong(songs[currentSong]);
createPlaylist(songs);
initLazyLoading(); // initialize lazy image loading
