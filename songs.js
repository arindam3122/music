// ==========================================
// 🎵 YOUR MUSIC PLAYLIST CONFIGURATION
// ==========================================

const songs = [
  {
    id: 0,
    title: "Aaj dil Shaayraana - Arijit Singh  Holiday  Akshay Kumar & Sonakshi Sinha  Pritam  Irshad K",
    artist: "Arijit Singh",
    src: "songs/Aaj dil Shaayraana - Arijit Singh  Holiday  Akshay Kumar & Sonakshi Sinha  Pritam  Irshad K.mp3", // Path to your MP3 file
    imgSrc: "https://www.google.com/imgres?q=aaj%20dil%20shayrana&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F6HUYAfCB728%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6HUYAfCB728&docid=jd_-buQ8Nx6hkM&tbnid=feJq0PNjk5h2yM&vet=12ahUKEwi-vfOLzZiWAxUuR2wGHZqGGV0QnPAOegQINBAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwi-vfOLzZiWAxUuR2wGHZqGGV0QnPAOegQINBAA", // Image link
    isLiked: false
  },
  {
    id: 1,
    title: "Aami Tomar Kache (আম তমর কছ)  Lyrical  Yoddha  Dev  Mimi  Arijit Singh  Prasen SVF Music",
    artist: "Arijit Singh",
    src: "songs/Aami Tomar Kache (আম তমর কছ)  Lyrical  Yoddha  Dev  Mimi  Arijit Singh  Prasen SVF Music.mp3",
    imgSrc: "https://www.google.com/imgres?q=ami%20tomar%20kache%20rakhbo%20lyrics&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fu_4BBFxp7Rs%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLC-SOZL7URrriX-uU4IgiZKb98KBg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Du_4BBFxp7Rs&docid=WqG9vn65Sd3ReM&tbnid=e1GDalVcrowC6M&vet=12ahUKEwiD15Co2piWAxUTkOEIHRvCBQwQnPAOegQIQBAA..i&w=686&h=386&hcb=2&ved=2ahUKEwiD15Co2piWAxUTkOEIHRvCBQwQnPAOegQIQBAA",
    isLiked: false
  },
  {
    id: 2,
    title: "Aashiq Banaya Aapne Title (Full Song)  Himesh Reshammiya,Shreya Ghoshal  Emraan Hashmi,Tanushree D",
    artist: "Himesh Reshammiya,Shreya Ghoshal  Emraan Hashmi,Tanushree D",
    src: "songs/Aashiq Banaya Aapne Title (Full Song)  Himesh Reshammiya,Shreya Ghoshal  Emraan Hashmi,Tanushree D.mp3",
    imgSrc: "https://www.google.com/imgres?q=aashiq%20banaya%20aapne&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Fe%2Fec%2FAashiq_Banaya_Aapne.jpg%2F250px-Aashiq_Banaya_Aapne.jpg%3Futm_source%3Den.wikipedia.org%26utm_campaign%3Dparser%26utm_content%3Dthumbnail&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAashiq_Banaya_Aapne&docid=YOngozbb165gPM&tbnid=aTkJuSkcpk_u0M&vet=12ahUKEwjoxMef55iWAxW5zTgGHYEJH_oQnPAOegQINRAA..i&w=250&h=361&hcb=2&ved=2ahUKEwjoxMef55iWAxW5zTgGHYEJH_oQnPAOegQINRAA",
    isLiked: false
  },
  {
    id: 3,
    title: "Akhiyaan Gulaab (Song)_ Shahid Kapoor, Kriti Sanon  Mitraz  Teri Baaton Mein Aisa Uljha Jiya",
    artist: "Shahid Kapoor, Kriti Sanon",
    src: "songs/Akhiyaan Gulaab (Song)_ Shahid Kapoor, Kriti Sanon  Mitraz  Teri Baaton Mein Aisa Uljha Jiya.mp3",
    imgSrc: "https://www.google.com/imgres?q=akhiyaan%20gulaab&imgurl=https%3A%2F%2Fc.saavncdn.com%2F878%2FAkhiyaan-Gulaab-From-Teri-Baaton-Mein-Aisa-Uljha-Jiya-Hindi-2024-20240119131017-500x500.jpg&imgrefurl=https%3A%2F%2Fwww.jiosaavn.com%2Flyrics%2Fakhiyaan-gulaab-from-teri-baaton-mein-aisa-uljha-jiya-lyrics%2FNQQcXh54aFU&docid=_7S4TTPbI1RWdM&tbnid=-06gFTlV2Aa7CM&vet=12ahUKEwiW1ZGx85iWAxUOa2wGHVxMOeAQnPAOegQIORAA..i&w=500&h=500&hcb=2&ved=2ahUKEwiW1ZGx85iWAxUOa2wGHVxMOeAQnPAOegQIORAA",
    isLiked: false
  },
  {
    id: 4,
    title: "ANIMAL_Pehle Bhi Main(Full Video)  Ranbir Kapoor,Tripti Dimri Sandeep V Vishal M,Raj S Bhushan K",
    artist: "Ranbir Kapoor, Tripti Dimri",
    src: "songs/ANIMAL_Pehle Bhi Main(Full Video)  Ranbir Kapoor,Tripti Dimri Sandeep V Vishal M,Raj S Bhushan K.mp3",
    imgSrc: "https://www.google.com/imgres?q=ANIMAL_Pehle%20Bhi%20Main&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Flwv_0SEJ4NQ%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dlwv_0SEJ4NQ&docid=gxJ9vAc7UKWoMM&tbnid=J_xUTFSJxaLjmM&vet=12ahUKEwjl9dze85iWAxXBXGwGHUakMWMQnPAOegQIOxAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjl9dze85iWAxXBXGwGHUakMWMQnPAOegQIOxAA",
    isLiked: false
  },
  {
    id: 5,
    title: "Benche Thakar Gaan",
    artist: "",
    src: "songs/Benche Thakar Gaan.mp3",
    imgSrc: "https://www.google.com/imgres?q=Benche%20Thakar%20Gaan&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fep52mT-w_TI%2Fsddefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dep52mT-w_TI&docid=a_X0QyW3iIczhM&tbnid=QyVRCuq3RwK-mM&vet=12ahUKEwidnsCC95iWAxVGTmwGHTt2F-8QnPAOegQIQRAA..i&w=640&h=480&hcb=2&ved=2ahUKEwidnsCC95iWAxVGTmwGHTt2F-8QnPAOegQIQRAA",
    isLiked: false
  },
    {
    id: 6,
    title: "Baar Baar Dekho Hazar Baar Dekho",
    artist: "Mohammed Rafi",
    src: "songs/Baar Baar Dekho Hazar Baar Dekho with lyrics  बर बर दख हजर बर  Mohammed Rafi  China Town.mp3",
    imgSrc: "https://www.google.com/imgres?q=bar%20bar%20dekho&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FBRhBGZcEkdY%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBRhBGZcEkdY&docid=eC2SfebfeSl0pM&tbnid=y4H8thdH-AjZeM&vet=12ahUKEwin9MnW95iWAxV6aHADHeE5AFIQnPAOegQIOBAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwin9MnW95iWAxV6aHADHeE5AFIQnPAOegQIOBAA",
    isLiked: false
  },
    {
    id: 7,
    title: "Bhalobashar Morshum (ভলবসর মরশম)  X=Prem  Shreya Ghoshal  Sanai  Srijit  SVF",
    artist: "Shreya Ghoshal  Sanai  Srijit",
    src: "songs/Bhalobashar Morshum (ভলবসর মরশম)  X=Prem  Shreya Ghoshal  Sanai  Srijit  SVF.mp3",
    imgSrc: "https://www.google.com/imgres?q=Bhalobashar%20Morshum&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9T3SypTYidg%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLBDwl335kPDq_VoEdOaeMJui-LWhA&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9T3SypTYidg&docid=BnjHvqIv2Le6XM&tbnid=do3vHOTpGj5mRM&vet=12ahUKEwjNyf7khJqWAxWtWXADHWJ9Kb4QnPAOegQIQxAA..i&w=686&h=386&hcb=2&ved=2ahUKEwjNyf7khJqWAxWtWXADHWJ9Kb4QnPAOegQIQxAA",
    isLiked: false
  },
    {
    id: 8,
    title: "Bhalobeshe Kono Bhool  Bindaas  Dev  Srabanti  Sayantika  Arindom  Shalmali Kholgade  SVF",
    artist: "Bindaas  Dev  Srabanti  Sayantika  Arindom  Shalmali Kholgade",
    src: "songs/Bhalobeshe Kono Bhool  Bindaas  Dev  Srabanti  Sayantika  Arindom  Shalmali Kholgade  SVF.mp3",
    imgSrc: "https://www.google.com/imgres?q=Bhalobeshe%20Kono%20Bhool&imgurl=https%3A%2F%2Fc.saavncdn.com%2F650%2FBindaas-Original-Motion-Picture-Soundtrack-Bengali-2014-20251216013603-500x500.jpg&imgrefurl=https%3A%2F%2Fwww.jiosaavn.com%2Fsong%2Fbhalobeshe-kono-bhool%2FBF0kXExxeko&docid=z7FOxPuykRrq3M&tbnid=Mu-ofL13e0pdrM&vet=12ahUKEwizssm0hZqWAxXIVWwGHRU8IuAQnPAOegQIShAA..i&w=500&h=500&hcb=2&ved=2ahUKEwizssm0hZqWAxXIVWwGHRU8IuAQnPAOegQIShAAxAA",
    isLiked: false
  },
  {
    id: 9,
    title: "Bhalolaage Tomake  Tomake Chai  Bonny  Koushani  Arijit Singh  Anwesshaa  Indraadip Dasgupta",
    artist: "Bonny  Koushani  Arijit Singh  Anwesshaa  Indraadip Dasgupta",
    src: "songs/Bhalolaage Tomake  Tomake Chai  Bonny  Koushani  Arijit Singh  Anwesshaa  Indraadip Dasgupta.mp3",
    imgSrc: "https://www.google.com/imgres?q=Bhalolaage%20Tomake%20Tomake%20Chai&imgurl=https%3A%2F%2Fc.saavncdn.com%2F597%2FTomake-Chai-Original-Motion-Picture-Soundtrack-Bengali-2017-20251112000002-500x500.jpg&imgrefurl=https%3A%2F%2Fwww.jiosaavn.com%2Fsong%2Fbhalolaage-tomake%2FQkUiaxxpW30&docid=CefHaz7CTyW-aM&tbnid=xhGrOBTMH_hnHM&vet=12ahUKEwi7icv6hZqWAxVtS2wGHWpMCYYQnPAOegQIQRAA..i&w=500&h=500&hcb=2&ved=2ahUKEwi7icv6hZqWAxVtS2wGHWpMCYYQnPAOegQIQRAA",
    isLiked: false
  },
  {
    id: 10,
    title: "Bheege Hoth Tere Pyasa Dil Mera LYRICS   Murder   Kunal Ganjawala   Emraan Hashmi,Mallika Sherawat 1",
    artist: "Kunal Ganjawala   Emraan Hashmi,Mallika Sherawat",
    src: "songs/Bheege Hoth Tere Pyasa Dil Mera LYRICS   Murder   Kunal Ganjawala   Emraan Hashmi,Mallika Sherawat 1.mp3",
    imgSrc: "https://www.google.com/imgres?q=Bheege%20Hoth%20Tere%20Pyasa%20Dil%20Mera%20cover&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FojUTswFMjyM%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DojUTswFMjyM&docid=ERYX83FSze-7WM&tbnid=aUQA6r3yPzjqZM&vet=12ahUKEwj2vuykh5qWAxW2T2wGHSUnDzsQnPAOegQIPRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwj2vuykh5qWAxW2T2wGHSUnDzsQnPAOegQIPRAA",
    isLiked: false
  },
  {
    id: 11,
    title: "Bojhena Shey Bojhena (বঝন স বঝন)  Title Track Soham Abir  Payel Mimi  Arijit Singh SVF",
    artist: "Soham Abir  Payel Mimi  Arijit Singh",
    src: "songs/Bojhena Shey Bojhena (বঝন স বঝন)  Title Track Soham Abir  Payel Mimi  Arijit Singh SVF.mp3",
    imgSrc: "https://www.google.com/imgres?q=Bojhena%20Shey%20Bojhena%20(%E0%A6%AC%E0%A6%9D%E0%A6%A8%20%E0%A6%B8%20%E0%A6%AC%E0%A6%9D%E0%A6%A8)%20%20Title%20Track%20Soham%20Abir%20%20Payel%20Mimi%20%20Arijit%20Singh%20SVF&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJY43PceHMq4%2Fsddefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJY43PceHMq4&docid=f2dwzuW1zKMnvM&tbnid=-nybILWyN__iEM&vet=12ahUKEwj2qJP0h5qWAxWwRmwGHb17ETEQnPAOegQIRBAA..i&w=640&h=480&hcb=2&ved=2ahUKEwj2qJP0h5qWAxWwRmwGHb17ETEQnPAOegQIRBAA",
    isLiked: false
  },
  {
    id: 12,
    title: "Cham Cham Full Video  BAAGHI  Tiger Shroff, Shraddha Kapoor Meet Bros, Monali Thakur Sabbir Khan",
    artist: "Tiger Shroff, Shraddha Kapoor, Meet Bros, Monali Thakur, Sabbir Khan",
    src: "songs/Cham Cham Full Video  BAAGHI  Tiger Shroff, Shraddha Kapoor Meet Bros, Monali Thakur Sabbir Khan.mp3",
    imgSrc: "https://www.google.com/imgres?q=Cham%20Cham%20Full%20Video%20%20BAAGHI%20%20Tiger%20Shroff%2C%20Shraddha%20Kapoor%20Meet%20Bros%2C%20Monali%20Thakur%20Sabbir%20Khan&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FszQBjrJ_6eE%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DszQBjrJ_6eE&docid=BeZed02FFnIBZM&tbnid=NKchdTKUcKFW5M&vet=12ahUKEwiA57egiJqWAxXNdmwGHZ_7KVcQnPAOegQIPRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiA57egiJqWAxXNdmwGHZ_7KVcQnPAOegQIPRAA",
    isLiked: false
  },
  {
    id: 13,
    title: "'Chittiyaan Kalaiyaan' FULL VIDEO SONG  Roy  Meet Bros Anjjan, Kanika Kapoor  T-SERIES",
    artist: "Roy  Meet Bros Anjjan, Kanika Kapoor",
    src: "songs/'Chittiyaan Kalaiyaan' FULL VIDEO SONG  Roy  Meet Bros Anjjan, Kanika Kapoor  T-SERIES.mp3",
    imgSrc: "https://www.google.com/imgres?q=%27Chittiyaan%20Kalaiyaan%27%20FULL%20VIDEO%20SONG%20%20Roy%20%20Meet%20Bros%20Anjjan%2C%20Kanika%20Kapoor%20%20T-SERIES&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FzpsVpnvFfZQ%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLBf0gmQnWAxmPvgPcmKAHPyvQ9Nig&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DzpsVpnvFfZQ&docid=U_pSvJyDavr2PM&tbnid=31ihvemsDOiaoM&vet=12ahUKEwjH4cuVi5qWAxWRyzgGHRg1O1EQnPAOegQIOhAA..i&w=686&h=386&hcb=2&ved=2ahUKEwjH4cuVi5qWAxWRyzgGHRg1O1EQnPAOegQIOhAA",
    isLiked: false
  },
  {
    id: 14,
    title: "Chori Kiya Re Jiya - Full Song  Dabangg  Salman Khan, Sonakshi Sinha  Sonu Nigam  tinyaudio",
    artist: "Salman Khan, Sonakshi Sinha, Sonu Nigam",
    src: "songs/Chori Kiya Re Jiya - Full Song  Dabangg  Salman Khan, Sonakshi Sinha  Sonu Nigam  tinyaudio.mp3",
    imgSrc: "https://www.google.com/imgres?q=Chori%20Kiya%20Re%20Jiya%20-%20Full%20Song%20Dabangg&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FrxgF5Ng2Exw%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DrxgF5Ng2Exw&docid=Ybo8nu9AmTUqUM&tbnid=4YRaBIfCUJVt1M&vet=12ahUKEwi8_eywjZqWAxVZ8zgGHY2nLA4QnPAOegQINhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwi8_eywjZqWAxVZ8zgGHY2nLA4QnPAOegQINhAA",
    isLiked: false
  },
  {
    id: 15,
    title: "Chupi Chupi (চপ চপ)  Le Halua Le  Lyrical  Hiran  Payel  Mohit  Shreya  Jeet  SVF Music",
    artist: "Hiran, Payel, Mohit, Shreya, Jeet",
    src: "songs/Chupi Chupi (চপ চপ)  Le Halua Le  Lyrical  Hiran  Payel  Mohit  Shreya  Jeet  SVF Music.mp3",
    imgSrc: "https://www.google.com/imgres?q=Chupi%20Chupi%20(%E0%A6%9A%E0%A6%AA%20%E0%A6%9A%E0%A6%AA)%20%20Le%20Halua%20Le%20%20Lyrical%20%20Hiran%20%20Payel%20%20Mohit%20%20Shreya%20%20Jeet%20%20SVF%20Music&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FVLVamYa3Psg%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLAkXOebfsmvv4WwoP_-mhR9lFoqxw&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVLVamYa3Psg&docid=5ExKT6p-hN2BoM&tbnid=-bpoAfY4VZ0zHM&vet=12ahUKEwi1mIXZkpqWAxXNdmwGHZ_7KVcQnPAOegQIOhAA..i&w=686&h=386&hcb=2&ved=2ahUKEwi1mIXZkpqWAxXNdmwGHZ_7KVcQnPAOegQIOhAA",
    isLiked: false
  },
  {
    id: 16,
    title: "Dagabaaz Re Dabangg 2 Full Video Song ᴴᴰ  Salman Khan, Sonakshi Sinha",
    artist: "Salman Khan, Sonakshi Sinha",
    src: "songs/Dagabaaz Re Dabangg 2 Full Video Song ᴴᴰ  Salman Khan, Sonakshi Sinha.mp3",
    imgSrc: "https://www.google.com/imgres?q=Dagabaaz%20Re%20Dabangg%202%20Full%20Video%20Song&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FhOfRdmYWgKg%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLA5eBmS1uN_wFxAwKodwKJue1vWMw&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOfRdmYWgKg&docid=uDfb0YUGqYJOYM&tbnid=FTvSxiGecY2W7M&vet=12ahUKEwiypYStk5qWAxUtb2wGHe-5MbwQnPAOegUImAEQAA..i&w=686&h=386&hcb=2&ved=2ahUKEwiypYStk5qWAxUtb2wGHe-5MbwQnPAOegUImAEQAA",
    isLiked: false
  },
  {
    id: 17,
    title: "Shyama Aan Baso Vrindavan Mein  Swasti Mehul  Latest Krishna Bhajan",
    artist: "Swasti Mehul",
    src: "songs/Shyama Aan Baso Vrindavan Mein  Swasti Mehul  Latest Krishna Bhajan.mp3",
    imgSrc: "https://www.google.com/imgres?q=Shyama%20Aan%20Baso%20Vrindavan%20Mein&imgurl=https%3A%2F%2Fc.saavncdn.com%2F401%2FShyama-Aan-Baso-Hindi-2022-20220714164649-500x500.jpg&imgrefurl=https%3A%2F%2Fwww.jiosaavn.com%2Fsong%2Fshyama-aan-baso%2FJywISR9jYAQ&docid=VfQ20pprj_h3tM&tbnid=-vrikVTEp9LqfM&vet=12ahUKEwjegKeLlJqWAxXMcmwGHSzEOp4QnPAOegUIhQEQAA..i&w=500&h=500&hcb=2&ved=2ahUKEwjegKeLlJqWAxXMcmwGHSzEOp4QnPAOegUIhQEQAA",
    isLiked: false
  },
  {
    id: 18,
    title: "Nitai Chander Dorbare (নিতাই চাঁদের দরবারে) Pousali Banerjee Bhaba Pagla Aalo - Aalo আলো 🪔 (128k)",
    artist: "Pousali Banerjee, Bhaba Pagla",
    src: "songs/Nitai Chander Dorbare (নিতাই চাঁদের দরবারে) Pousali Banerjee Bhaba Pagla Aalo - Aalo আলো 🪔 (128k).mp3",
    imgSrc: "https://www.google.com/imgres?q=Nitai%20Chander%20Dorbare%20(%E0%A6%A8%E0%A6%BF%E0%A6%A4%E0%A6%BE%E0%A6%87%20%E0%A6%9A%E0%A6%BE%E0%A6%81%E0%A6%A6%E0%A7%87%E0%A6%B0%20%E0%A6%A6%E0%A6%B0%E0%A6%AC%E0%A6%BE%E0%A6%B0%E0%A7%87)&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgZtIPExifpY%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DgZtIPExifpY&docid=A7nvIKCTfo0zhM&tbnid=QAAXt155dnx-sM&vet=12ahUKEwjWgrvtlJqWAxVySmwGHfOQKsMQnPAOegQIRBAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjWgrvtlJqWAxVySmwGHfOQKsMQnPAOegQIRBAA",
    isLiked: false
  },
  {
    id: 19,
    title: "Dekha Ek Khwab with lyrics दख एक खवब Silsila Amitabh Bachchan Lata Mangeshkar, Kishore Kumar",
    artist: "Amitabh Bachchan Lata Mangeshkar, Kishore Kumar",
    src: "songs/Dekha Ek Khwab with lyrics दख एक खवब Silsila Amitabh Bachchan Lata Mangeshkar, Kishore Kumar.mp3",
    imgSrc: "https://www.google.com/imgres?q=Dekha%20Ek%20Khwab&imgurl=https%3A%2F%2Fc.saavncdn.com%2F471%2FDekha-Ek-Khwab-Hindi-2015-500x500.jpg&imgrefurl=https%3A%2F%2Fwww.jiosaavn.com%2Falbum%2Fdekha-ek-khwab%2F8hlbX-q8T8Q_&docid=gc0ActF8jNXdFM&tbnid=NQ_i5zNsRTegsM&vet=12ahUKEwjrxfKstZqWAxU5XWwGHdQeH4cQnPAOegQIPxAA..i&w=500&h=500&hcb=2&ved=2ahUKEwjrxfKstZqWAxU5XWwGHdQeH4cQnPAOegQIPxAA",
    isLiked: false
  },
  {
    id: 20,
    title: "Dekhechi Tomake Srabone  Challenge  Lyrical  Dev  Subhashree  Shaan, June  Jeet G  SVF Music",
    artist: "Dev  Subhashree  Shaan, June  Jeet G",
    src: "songs/Dekhechi Tomake Srabone  Challenge  Lyrical  Dev  Subhashree  Shaan, June  Jeet G  SVF Music.mp3",
    imgSrc: "https://www.google.com/imgres?q=Dekhechi%20Tomake%20Srabone&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F6WMMvXbiU6U%2Fsddefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6WMMvXbiU6U&docid=iPjPWcHm5ndhMM&tbnid=A33zFQW4gUx1nM&vet=12ahUKEwidyJbOtZqWAxXvSWwGHY9CK7MQnPAOegUIhgEQAA..i&w=640&h=480&hcb=2&ved=2ahUKEwidyJbOtZqWAxXvSWwGHY9CK7MQnPAOegUIhgEQAA",
    isLiked: false
  },
  {
    id: 21,
    title: "Dil Na Diya - Video Song  Krrish  Kunal Ganjawala  Rajesh Roshan  Hrithik Roshan,Priyanka Chopra",
    artist: "Kunal Ganjawala  Rajesh Roshan  Hrithik Roshan,Priyanka Chopra",
    src: "songs/Dil Na Diya - Video Song  Krrish  Kunal Ganjawala  Rajesh Roshan  Hrithik Roshan,Priyanka Chopra.mp3",
    imgSrc: "https://www.google.com/imgres?q=Dil%20Na%20Diya&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F-eRzKCeX7YM%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-eRzKCeX7YM&docid=A6A4YLrQUYbRlM&tbnid=BFL_rAHD_iwFEM&vet=12ahUKEwjh9umbtpqWAxVxWXADHYjRNWIQnPAOegQIRBAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjh9umbtpqWAxVxWXADHYjRNWIQnPAOegQIRBAA",
    isLiked: false
  },
  {
    id: 22,
    title: "Dil Tu Hi Bataa Krrish 3 Full Video Song  Hrithik Roshan, Kangana Ranaut",
    artist: "Hrithik Roshan, Kangana Ranaut",
    src: "songs/Dil Tu Hi Bataa Krrish 3 Full Video Song  Hrithik Roshan, Kangana Ranaut.mp3",
    imgSrc: "https://www.google.com/imgres?q=Dil%20Tu%20Hi%20Bataa%20Krrish%203&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FocfLz44HoTA%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLA1duNGiqlQlmeOF81KMl8e199PsA&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DocfLz44HoTA&docid=RHnxCdNizripqM&tbnid=WZgLORpMrzPm3M&vet=12ahUKEwj0tLP3tpqWAxXXRWwGHbHkNSoQnPAOegQIQxAA..i&w=686&h=386&hcb=2&ved=2ahUKEwj0tLP3tpqWAxXXRWwGHbHkNSoQnPAOegQIQxAA",
    isLiked: false
  },
  {
    id: 23,
    title: "Dunki_ O Maahi 8K Full Song  Shah Rukh Khan  Taapsee Pannu  Pritam  Arijit Singh  Irshad Kamil",
    artist: "Shah Rukh Khan  Taapsee Pannu  Pritam",
    src: "songs/Dunki_ O Maahi 8K Full Song  Shah Rukh Khan  Taapsee Pannu  Pritam  Arijit Singh  Irshad Kamil.mp3",
    imgSrc: "https://www.google.com/imgres?q=Dunki_%20O%20Maahi&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51i%2BcTjaSAL._UXNaN_FMjpg_QL85_.jpg&imgrefurl=https%3A%2F%2Fmusic.amazon.in%2Ftracks%2FB0CQPH8LHS&docid=LjqgT8IginnHLM&tbnid=icdgadjcLRQdZM&vet=12ahUKEwiS7rWyt5qWAxWeRmwGHYcHDj8QnPAOegUIqgEQAA..i&w=500&h=500&hcb=2&ved=2ahUKEwiS7rWyt5qWAxWeRmwGHYcHDj8QnPAOegUIqgEQAA",
    isLiked: false
  },
  {
    id: 24,
    title: "Egiye de  Shudhu Tomari Jonyo  Dev  Srabanti  Arijit Singh  Madhubanti Bagchi  Arindom  SVF",
    artist: "Dev  Srabanti  Arijit Singh  Madhubanti Bagchi  Arindom",
    src: "songs/Egiye de  Shudhu Tomari Jonyo  Dev  Srabanti  Arijit Singh  Madhubanti Bagchi  Arindom  SVF.mp3",
    imgSrc: "https://www.google.com/imgres?q=Egiye%20de%20%20Shudhu%20Tomari%20Jonyo&imgurl=https%3A%2F%2Fc.saavncdn.com%2F196%2FShudhu-Tomari-Jonyo-Original-Motion-Picture-Soundtrack-Bengali-2015-20260530013204-500x500.jpg&imgrefurl=https%3A%2F%2Fwww.jiosaavn.com%2Fsong%2Fegiye-de%2FF1olexp6Rls&docid=fJmvZiI1vhNO2M&tbnid=z8mscvQjOAOumM&vet=12ahUKEwiLsYmsuJqWAxV0T2wGHRGiNNAQnPAOegQIbhAA..i&w=500&h=500&hcb=2&ved=2ahUKEwiLsYmsuJqWAxV0T2wGHRGiNNAQnPAOegQIbhAA",
    isLiked: false
  },
  {
    id: 25,
    title: "Ei Bhalo Ei Kharap  Golpo Holeo Shotti  Soham  Mimi  Arijit Singh  Monali Thakur  Indraadip",
    artist: "Soham  Mimi  Arijit Singh  Monali Thakur  Indraadip",
    src: "songs/Ei Bhalo Ei Kharap  Golpo Holeo Shotti  Soham  Mimi  Arijit Singh  Monali Thakur  Indraadip.mp3",
    imgSrc: "https://www.google.com/imgres?q=Ei%20Bhalo%20Ei%20Kharap%20%20Golpo%20Holeo%20Shotti&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FU2xrwSBJjGM%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DU2xrwSBJjGM&docid=4G2ZvA9HSQE-lM&tbnid=aIxYZas3YNz6AM&vet=12ahUKEwjY-_PTuJqWAxUQTWwGHTXXC94QnPAOegQIPRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjY-_PTuJqWAxUQTWwGHTXXC94QnPAOegQIPRAA",
    isLiked: false
  },
  {
    id: 26,
    title: "Ekta Premer Gaan Likhechi _ Paglu 2 _ Dev _ Koel Mallick _ Jeet Gannguli _ Sujit Mondal [RUGtY2EGGl4]",
    artist: "Dev _ Koel Mallick _ Jeet Gannguli _ Sujit Mondal",
    src: "songs/Ekta Premer Gaan Likhechi _ Paglu 2 _ Dev _ Koel Mallick _ Jeet Gannguli _ Sujit Mondal [RUGtY2EGGl4].mp3",
    imgSrc: "https://www.google.com/imgres?q=Ekta%20Premer%20Gaan%20Likhechi&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FRUGtY2EGGl4%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRUGtY2EGGl4&docid=ahxItc1T_KgSUM&tbnid=BGkG23dYp8LTKM&vet=12ahUKEwjH_cOAuZqWAxUQR2wGHQ7nOSUQnPAOegQIRRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjH_cOAuZqWAxUQR2wGHQ7nOSUQnPAOegQIRRAA",
    isLiked: false
  },
  {
    id: 27,
    title: "Eshechi Toke Niye  Paglu  Dev  Koel Mallick  Mohit Chouhan  Jeet Gannguli  Rajib Kumar",
    artist: "Dev  Koel Mallick  Mohit Chouhan  Jeet Gannguli  Rajib Kumar",
    src: "songs/Eshechi Toke Niye  Paglu  Dev  Koel Mallick  Mohit Chouhan  Jeet Gannguli  Rajib Kumar.mp3",
    imgSrc: "https://www.google.com/imgres?q=Eshechi%20Toke%20Niye&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FN3pDIcLo3wQ%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DN3pDIcLo3wQ&docid=3FbsRqVdSOXcqM&tbnid=7Eag3s_vYV_jKM&vet=12ahUKEwi88oPNuZqWAxUDyzgGHRh2GxMQnPAOegQIOxAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwi88oPNuZqWAxUDyzgGHRh2GxMQnPAOegQIOxAA",
    isLiked: false
  },
  {
    id: 28,
    title: "Full Song_ Pehla Pyaar  Kabir Singh  Shahid Kapoor, Kiara Advani  Armaan Malik  Vishal Mishra",
    artist: "Kabir Singh  Shahid Kapoor, Kiara Advani  Armaan Malik  Vishal Mishra",
    src: "songs/Full Song_ Pehla Pyaar  Kabir Singh  Shahid Kapoor, Kiara Advani  Armaan Malik  Vishal Mishra.mp3",
    imgSrc: "https://www.google.com/imgres?q=pehla%20pyaar%20kabir%20singh%20&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FB7SkAq_94J8%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DB7SkAq_94J8&docid=Ph-OKgjAM3SKgM&tbnid=VkJ-u2WEKiZmWM&vet=12ahUKEwjL3ZK9jpuWAxVJ2TgGHd1NOtYQnPAOegQIOhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjL3ZK9jpuWAxVJ2TgGHd1NOtYQnPAOegQIOhAA",
    isLiked: false
  },
  {
    id: 29,
    title: "Full Video_ Tum Se Hi  Jab We Met  Kareena Kapoor, Shahid Kapoor  Mohit Chauhan  Pritam",
    artist: "Kareena Kapoor, Shahid Kapoor  Mohit Chauhan  Pritam",
    src: "songs/Full Video_ Tum Se Hi  Jab We Met  Kareena Kapoor, Shahid Kapoor  Mohit Chauhan  Pritam.mp3",
    imgSrc: "https://www.google.com/imgres?q=Tum%20Se%20Hi%20%20Jab%20We%20Met%20%20Kareena%20Kapoor&imgurl=https%3A%2F%2Fa10.gaanacdn.com%2Fgn_img%2Falbums%2FoAJbDElKnL%2FoAJbDElKnL%2Fsize_m.jpg&imgrefurl=https%3A%2F%2Fgaana.com%2Fsong%2Ftum-se-hi-remix&docid=83DaVCUn1CbZJM&tbnid=zNZNnHY8GMfusM&vet=12ahUKEwjqrbDtjpuWAxVb3jgGHZRaPdIQnPAOegUImQEQAA..i&w=200&h=200&hcb=2&ved=2ahUKEwjqrbDtjpuWAxVb3jgGHZRaPdIQnPAOegUImQEQAA",
    isLiked: false
  },
  {
    id: 30,
    title: "Ghum Ghum Ei Chokhe  Romeo  Dev  Subhashree  Shreya  Sonu Nigam  Jeet Gannguli  Sujit  SVF",
    artist: "Dev  Subhashree  Shreya  Sonu Nigam  Jeet Gannguli  Sujit",
    src: "songs/Ghum Ghum Ei Chokhe  Romeo  Dev  Subhashree  Shreya  Sonu Nigam  Jeet Gannguli  Sujit  SVF.mp3",
    imgSrc: "https://www.google.com/imgres?q=Ghum%20Ghum%20Ei%20Chokhe%20%20Romeo%20%20Dev%20%20Subhashree%20%20Shreya%20%20Sonu%20Nigam%20%20Jeet%20Gannguli%20%20Sujit%20%20SVF&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FrqUPmN-rGhw%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DrqUPmN-rGhw&docid=np4x_KQ8LhMkTM&tbnid=LESua--C04O_LM&vet=12ahUKEwjmz5mMj5uWAxWD8zgGHdCnNBYQnPAOegQIPhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjmz5mMj5uWAxWD8zgGHdCnNBYQnPAOegQIPhAA",
    isLiked: false
  },
  {
    id: 31,
    title: "Hote Paare Na  হত পর ন  Bolo Dugga Maiki  Ankush  Nusrat  Arindom  Prashmita  Raj",
    artist: "Ankush  Nusrat  Arindom  Prashmita  Raj",
    src: "songs/Hote Paare Na  হত পর ন  Bolo Dugga Maiki  Ankush  Nusrat  Arindom  Prashmita  Raj.mp3",
    imgSrc: "https://www.google.com/imgres?q=Hote%20Paare%20Na%20%20%E0%A6%B9%E0%A6%A4%20%E0%A6%AA%E0%A6%B0%20%E0%A6%A8%20%20Bolo%20Dugga%20Maiki%20%20Ankush%20%20Nusrat%20%20Arindom%20%20Prashmita%20%20Raj&imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2732cf78e9352b8cdb025babdf5&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F2QSX6Bv7ONPEkrSkx1YhMd&docid=1jmtt8_zJ4-S8M&tbnid=Sdzcs2FuBfvw-M&vet=12ahUKEwjksZGkj5uWAxXE2DgGHYL8ENQQnPAOegUIkAEQAA..i&w=640&h=640&hcb=2&ved=2ahUKEwjksZGkj5uWAxXE2DgGHYL8ENQQnPAOegUIkAEQAA",
    isLiked: false
  },
  {
    id: 32,
    title: "Humdard Full Video Song  Ek Villain  Arijit Singh  Mithoon",
    artist: "Arijit Singh",
    src: "songs/Humdard Full Video Song  Ek Villain  Arijit Singh  Mithoon.mp3",
    imgSrc: "https://www.google.com/imgres?q=Humdard%20Full%20Video%20Song%20%20Ek%20Villain%20%20Arijit%20Singh%20%20Mithoon&imgurl=https%3A%2F%2Fi1.sndcdn.com%2Fartworks-000080949258-rn3yzi-t500x500.jpg&imgrefurl=https%3A%2F%2Fm.soundcloud.com%2Fcutebut_syko%2Fhumdard-ek-villain-2014-arijit-singh%3Fin%3Ditslovesmusic%252Fsets%252Ftop-50-bollywood-songs-2023&docid=DRkfzFida4EgyM&tbnid=c4iJeQ5O30oq9M&vet=12ahUKEwiPh_q_j5uWAxVu8jgGHXZTPWAQnPAOegUImwEQAA..i&w=500&h=500&hcb=2&itg=1&ved=2ahUKEwiPh_q_j5uWAxVu8jgGHXZTPWAQnPAOegUImwEQAA",
    isLiked: false
  },
  {
    id: 33,
    title: "I Am In Love Lyrical Video  Once Upon A Time In Mumbai  Pritam  Emraan Hashmi, Prachi Desai",
    artist: "Pritam  Emraan Hashmi, Prachi Desai",
    src: "songs/I Am In Love Lyrical Video  Once Upon A Time In Mumbai  Pritam  Emraan Hashmi, Prachi Desai.mp3",
    imgSrc: "https://www.google.com/imgres?q=I%20Am%20In%20Love%20Lyrical%20Video%20%20Once%20Upon%20A%20Time%20In%20Mumbai%20%20Pritam%20%20Emraan%20Hashmi%2C%20Prachi%20Desai&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDMLrGfMxOQA%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDMLrGfMxOQA&docid=lrXBluasM6aDKM&tbnid=qUCtx65sGTay3M&vet=12ahUKEwi98OHGkJuWAxXnRCoJHa0NDYAQnPAOegQIRBAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwi98OHGkJuWAxXnRCoJHa0NDYAQnPAOegQIRBAA",
    isLiked: false
  },
  {
    id: 34,
    title: "Illahi - Yeh Jawaani Hai Deewani  Ranbir Kapoor, Deepika Padukone",
    artist: "Ranbir Kapoor, Deepika Padukone",
    src: "songs/Illahi - Yeh Jawaani Hai Deewani  Ranbir Kapoor, Deepika Padukone.mp3",
    imgSrc: "https://www.google.com/imgres?q=Illahi%20-%20Yeh%20Jawaani%20Hai%20Deewani%20%20Ranbir%20Kapoor%2C%20Deepika%20Padukone&imgurl=https%3A%2F%2Fc.saavncdn.com%2F440%2FYeh-Jawaani-Hai-Deewani-2013-500x500.jpg&imgrefurl=https%3A%2F%2Fapi.jiosaavn.com%2Fsong%2Filahi%2FRCsibkRSTUc&docid=uQqelCQapuGkZM&tbnid=Won5MNaz19yj1M&vet=12ahUKEwiqudflkJuWAxUmzTgGHTDdLtEQnPAOegQIRRAA..i&w=500&h=500&hcb=2&itg=1&ved=2ahUKEwiqudflkJuWAxUmzTgGHTDdLtEQnPAOegQIRRAA",
    isLiked: false
  },
  {
    id: 35,
    title: "Iskcon Bhajans  Namah Namah Tulsi  Iskcon Prabhati Aarti",
    artist: "Iskcon Prabhati Aarti",
    src: "songs/Iskcon Bhajans  Namah Namah Tulsi  Iskcon Prabhati Aarti.mp3",
    imgSrc: "https://www.google.com/imgres?q=skcon%20Bhajans%20%20Namah%20Namah%20Tulsi&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2nzgDj2CLcw%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2nzgDj2CLcw&docid=882lXeFWAk60iM&tbnid=LWCn3nEkrAdWnM&vet=12ahUKEwjPkuuukZuWAxU9wzgGHQgcDRIQnPAOegQIQBAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjPkuuukZuWAxU9wzgGHQgcDRIQnPAOegQIQBAA",
    isLiked: false
  },
  {
    id: 36,
    title: "Iskcon Sandhya aarti  Jaya Jaya Gora Chander  Hare Krishna",
    artist: "Jaya Jaya Gora Chander",
    src: "songs/Iskcon Sandhya aarti  Jaya Jaya Gora Chander  Hare Krishna.mp3",
    imgSrc: "https://www.google.com/imgres?q=Iskcon%20Sandhya%20aarti%20%20Jaya%20Jaya%20Gora%20Chander%20%20Hare%20Krishna&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2JadzV0IzbY%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2JadzV0IzbY&docid=7rhWcENOwgg4jM&tbnid=sla7O_8U8OsHkM&vet=12ahUKEwio4IDNkZuWAxVP6jgGHYXuNecQnPAOegQIRRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwio4IDNkZuWAxVP6jgGHYXuNecQnPAOegQIRRAA",
    isLiked: false
  },
  {
    id: 37,
    title: "Itni Si Baat Hain Full Video Song  AZHAR  Emraan Hashmi, Prachi Desai  Arijit Singh, Pritam",
    artist: "AZHAR  Emraan Hashmi, Prachi Desai  Arijit Singh",
    src: "songs/Itni Si Baat Hain Full Video Song  AZHAR  Emraan Hashmi, Prachi Desai  Arijit Singh, Pritam.mp3",
    imgSrc: "https://www.google.com/imgres?q=Itni%20Si%20Baat%20Hain%20Full%20Video%20Song%20%20AZHAR%20%20Emraan%20Hashmi%2C%20Prachi%20Desai%20%20Arijit%20Singh%2C%20Pritam&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F1o_brS03A5A%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1o_brS03A5A&docid=a9_9EoiWU3VMLM&tbnid=VvjO50sjPrrshM&vet=12ahUKEwivw-bukZuWAxWm8qACHaNdA8wQnPAOegQIRRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwivw-bukZuWAxWm8qACHaNdA8wQnPAOegQIRRAA",
    isLiked: false
  },
  {
    id: 38,
    title: "Jaavedaan Hai Lyrical Video  1920 Evil Returns  KK, Suzanne D'Mello",
    artist: "KK",
    src: "songs/Jaavedaan Hai Lyrical Video  1920 Evil Returns  KK, Suzanne D'Mello.mp3",
    imgSrc: "https://www.google.com/imgres?q=Jaavedaan%20Hai%20Lyrical%20Video%20%201920%20Evil%20Returns%20%20KK%2C%20Suzanne%20D%27Mello&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FOocst6d2scU%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOocst6d2scU&docid=u4-rdqVLobsVCM&tbnid=Xn5CEMI9xEsbGM&vet=12ahUKEwi06-eJkpuWAxVfwTgGHe0TI5sQnPAOegQIIBAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwi06-eJkpuWAxVfwTgGHe0TI5sQnPAOegQIIBAA",
    isLiked: false
  },
  {
    id: 39,
    title: "Jab Se Tere Naina Lyrical Video - Saawariya  Ranbir Kapoor  Sonam Kapoor  Shaan",
    artist: "Saawariya  Ranbir Kapoor  Sonam Kapoor  Shaan",
    src: "songs/Jab Se Tere Naina Lyrical Video - Saawariya  Ranbir Kapoor  Sonam Kapoor  Shaan.mp3",
    imgSrc: "https://www.google.com/imgres?q=Jab%20Se%20Tere%20Naina%20Lyrical%20Video%20-%20Saawariya%20%20Ranbir%20Kapoor%20%20Sonam%20Kapoor%20%20Shaan&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F6_1p9FZSSUs%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLCnAYUyztJNK3mnR3STmG0mVZzsCw&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6_1p9FZSSUs&docid=5m0Aq0JT-1tezM&tbnid=BNCbWY4volOy9M&vet=12ahUKEwj-y4CqkpuWAxW53TgGHcpLOAAQnPAOegQIQRAA..i&w=686&h=386&hcb=2&ved=2ahUKEwj-y4CqkpuWAxW53TgGHcpLOAAQnPAOegQIQRAA",
    isLiked: false
  },
  {
    id:40,
    title: "Jag Ghoomeya Full Song  SULTAN  Salman Khan, Anushka Sharma  Rahat Fateh Ali Khan, Vishal-Shekhar",
    artist: "Salman Khan, Anushka Sharma  Rahat Fateh Ali Khan, Vishal-Shekhar",
    src: "songs/Jag Ghoomeya Full Song  SULTAN  Salman Khan, Anushka Sharma  Rahat Fateh Ali Khan, Vishal-Shekhar.mp3",
    imgSrc: "https://www.google.com/imgres?q=Jag%20Ghoomeya%20Full%20Song%20%20SULTAN%20%20Salman%20Khan%2C%20Anushka%20Sharma%20%20Rahat%20Fateh%20Ali%20Khan%2C%20Vishal-Shekhar&imgurl=https%3A%2F%2Fa10.gaanacdn.com%2Fgn_img%2Falbums%2F4Z9bqgo3yQ%2FZ9bq1A9Dby%2Fsize_m.webp&imgrefurl=https%3A%2F%2Fgaana.com%2Fsong%2Fjag-ghoomeya&docid=r-zZ5S61-ZSgKM&tbnid=NxgxNhB_TvFZoM&vet=12ahUKEwic9erFkpuWAxWj8DgGHWdZDkgQnPAOegUIpwEQAA..i&w=200&h=200&hcb=2&ved=2ahUKEwic9erFkpuWAxWj8DgGHWdZDkgQnPAOegUIpwEQAA",
    isLiked: false
  },
  {
    id: 41,
    title: "Jane Mon  Paglu  Dev  Koel Mallick  Jeet Gannguli  Rajib Kumar",
    artist: "Dev  Koel Mallick  Jeet Gannguli  Rajib Kumar",
    src: "songs/Jane Mon  Paglu  Dev  Koel Mallick  Jeet Gannguli  Rajib Kumar.mp3",
    imgSrc: "https://www.google.com/imgres?q=Jane%20Mon%20%20Paglu%20%20Dev%20%20Koel%20Mallick%20%20Jeet%20Gannguli%20%20Rajib%20Kumar&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9XalgNH_FOs%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9XalgNH_FOs&docid=2lE_rQd1bK-PJM&tbnid=ICjE7zA7-usvFM&vet=12ahUKEwif88rnkpuWAxWuzjgGHU-1ArgQnPAOegQIQxAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwif88rnkpuWAxWuzjgGHU-1ArgQnPAOegQIQxAA",
    isLiked: false
  },
  {
    id: 42,
    title: "Jeno Tomari Kache (যন তমরই কছ)-Lyrical  Shudhu Tomari Jonyo  Dev  Srabanti  SVF",
    artist: "Dev  Srabanti",
    src: "songs/Jeno Tomari Kache (যন তমরই কছ)-Lyrical  Shudhu Tomari Jonyo  Dev  Srabanti  SVF.mp3",
    imgSrc: "https://www.google.com/imgres?q=Jeno%20Tomari%20Kache%20(%E0%A6%AF%E0%A6%A8%20%E0%A6%A4%E0%A6%AE%E0%A6%B0%E0%A6%87%20%E0%A6%95%E0%A6%9B)-Lyrical%20%20Shudhu%20Tomari%20Jonyo%20%20Dev%20%20Srabanti%20%20SVF&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Ftn0-kZMpL9M%2Fsddefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dtn0-kZMpL9M&docid=k-99jY0ucPYSuM&tbnid=Hy_FijxIxZYieM&vet=12ahUKEwiVob7MmJuWAxWUUGcHHZi4NisQnPAOegQIRhAA..i&w=640&h=480&hcb=2&ved=2ahUKEwiVob7MmJuWAxWUUGcHHZi4NisQnPAOegQIRhAA",
    isLiked: false
  },
  {
    id: 43,
    title: "Jor Jhattka Legeche জর ঝটক লগছ Video  Nakash Aziz & June B  Dabbu  Rajiv Dutta",
    artist: "Nakash Aziz & June B  Dabbu  Rajiv Dutta",
    src: "songs/Jor Jhattka Legeche জর ঝটক লগছ Video  Nakash Aziz & June B  Dabbu  Rajiv Dutta.mp3",
    imgSrc: "https://www.google.com/imgres?q=Jor%20Jhattka%20Legeche%20%E0%A6%9C%E0%A6%B0%20%E0%A6%9D%E0%A6%9F%E0%A6%95%20%E0%A6%B2%E0%A6%97%E0%A6%9B%20Video%20%20Nakash%20Aziz%20%26%20June%20B%20%20Dabbu%20%20Rajiv%20Dutta&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FM9WwvTGnCIo%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DM9WwvTGnCIo&docid=hkWCRh0MIBY4GM&tbnid=fnQGFMtMHdSv-M&vet=12ahUKEwj1k4bpmJuWAxX6SWwGHfy6Kg8QnPAOegQIQhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwj1k4bpmJuWAxX6SWwGHfy6Kg8QnPAOegQIQhAA",
    isLiked: false
  },
  {
    id: 44,
    title: "Ke Tui Bol  Herogiri  Dev  Sayantika  Arijit Singh  Jeet Gannguli",
    artist: "Dev  Sayantika  Arijit Singh  Jeet Gannguli",
    src: "songs/Ke Tui Bol  Herogiri  Dev  Sayantika  Arijit Singh  Jeet Gannguli.mp3",
    imgSrc: "https://www.google.com/imgres?q=Ke%20Tui%20Bol%20%20Herogiri%20%20Dev%20%20Sayantika%20%20Arijit%20Singh%20%20Jeet%20Gannguli&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8NbpwbrJrFA%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8NbpwbrJrFA&docid=BB4y5VaDSj8rRM&tbnid=S0Rz0p9C-TFf5M&vet=12ahUKEwjm8bqGmZuWAxXDT2wGHYzcJIgQnPAOegQIQRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjm8bqGmZuWAxXDT2wGHYzcJIgQnPAOegQIQRAA",
    isLiked: false
  },
  {
    id: 45,
    title: "'Khoya Khoya' FULL VIDEO Song  Sooraj Pancholi, Athiya Shetty  Hero  T-Series",
    artist: "Sooraj Pancholi, Athiya Shetty",
    src: "songs/'Khoya Khoya' FULL VIDEO Song  Sooraj Pancholi, Athiya Shetty  Hero  T-Series.mp3",
    imgSrc: "https://www.google.com/imgres?q=%27Khoya%20Khoya%27%20FULL%20VIDEO%20Song%20%20Sooraj%20Pancholi%2C%20Athiya%20Shetty%20%20Hero%20%20T-Series&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIMEfTUlD6YU%2Fhq720.jpg%3Fsqp%3D-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH8CYAC0AWKAgwIABABGH8gEyhDMA8%3D%26rs%3DAOn4CLCRiocVd-wIxXjz8cuYxpSMsa72rg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIMEfTUlD6YU&docid=uFZqgsp7shOrvM&tbnid=OZSPQ5ay4grDbM&vet=12ahUKEwiSiuCgmZuWAxXqTGwGHR3DAeMQnPAOegUIiQEQAA..i&w=686&h=386&hcb=2&itg=1&ved=2ahUKEwiSiuCgmZuWAxXqTGwGHR3DAeMQnPAOegUIiQEQAA",
    isLiked: false
  },
  {
    id: 46,
    title: "KK Best Song - Aashayein  Iqbal  KK Best Songs  Best Of KK",
    artist: "KK",
    src: "songs/KK Best Song - Aashayein  Iqbal  KK Best Songs  Best Of KK.mp3",
    imgSrc: "https://www.google.com/imgres?q=KK%20Best%20Song%20-%20Aashayein%20%20Iqbal%20%20KK%20Best%20Songs%20%20Best%20Of%20KK&imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273891e0c17f252e109c20a7882&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F0d54B7VI12WOMK8AoIWllf&docid=tQjCdb6gdCO8_M&tbnid=YwVpDBCX6LbzKM&vet=12ahUKEwjCzKG-mZuWAxWFTGwGHVjzGEMQnPAOegQIPBAA..i&w=640&h=640&hcb=2&ved=2ahUKEwjCzKG-mZuWAxWFTGwGHVjzGEMQnPAOegQIPBAA",
    isLiked: false
  },
  {
    id: 47,
    title: "Mahiya Mahiya (HD) Video Song  Awarapan Movie  Mrinalini Sharma, Emraan Hashmi  Hindi Songs",
    artist: "Mrinalini Sharma, Emraan Hashmi",
    src: "songs/Mahiya Mahiya (HD) Video Song  Awarapan Movie  Mrinalini Sharma, Emraan Hashmi  Hindi Songs.mp3",
    imgSrc: "https://www.google.com/imgres?q=Mahiya%20Mahiya%20(HD)%20Video%20Song%20%20Awarapan%20Movie%20%20Mrinalini%20Sharma%2C%20Emraan%20Hashmi%20%20Hindi%20Songs&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FPSZZbcIttzg%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLDHeEGrjyrz-8MI2cxsLbO_W3lLMg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPSZZbcIttzg&docid=BSL-CKsW4M2x8M&tbnid=ncnN-4egxbwTLM&vet=12ahUKEwjkhd3WmZuWAxXhT2wGHXBcLAEQnPAOegQINxAA..i&w=686&h=386&hcb=2&ved=2ahUKEwjkhd3WmZuWAxXhT2wGHXBcLAEQnPAOegQINxAA",
    isLiked: false
  },
  {
    id: 48,
    title: "Mar Jaawan Mit Jaawan Lyrical Video Sng  Aashiq Banaya Aapne  Emraan Hashmi, Tanushree Dutta",
    artist: "Emraan Hashmi, Tanushree Dutta",
    src: "songs/Mar Jaawan Mit Jaawan Lyrical Video Sng  Aashiq Banaya Aapne  Emraan Hashmi, Tanushree Dutta.mp3",
    imgSrc: "https://www.google.com/imgres?q=Mar%20Jaawan%20Mit%20Jaawan%20Lyrical%20Video%20Sng%20%20Aashiq%20Banaya%20Aapne%20%20Emraan%20Hashmi%2C%20Tanushree%20Dutta&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FRRXyD89Mqyc%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRRXyD89Mqyc&docid=WTiqY48celsHHM&tbnid=PDLUu87G5OzDoM&vet=12ahUKEwjTnND2mZuWAxUSSmwGHdLCM7AQnPAOegQIQhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjTnND2mZuWAxUSSmwGHdLCM7AQnPAOegQIQhAA",
    isLiked: false
  },
  {
    id: 49,
    title: "Mera Mann Kehne Laga Full Song with Lyrics  Nautanki Saala  Ayushmann Khurrana,Kunaal Roy Kapur",
    artist: "Nautanki Saala  Ayushmann Khurrana,Kunaal Roy Kapur",
    src: "songs/Mera Mann Kehne Laga Full Song with Lyrics  Nautanki Saala  Ayushmann Khurrana,Kunaal Roy Kapur.mp3",
    imgSrc: "https://www.google.com/imgres?q=Mera%20Mann%20Kehne%20Laga%20Full%20Song%20with%20Lyrics%20%20Nautanki%20Saala%20%20Ayushmann%20Khurrana%2CKunaal%20Roy%20Kapur&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSBuPjMDPXJU%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSBuPjMDPXJU&docid=ncVsOuT5E-IH5M&tbnid=zGUsJ3PB34JNAM&vet=12ahUKEwjKuKG-mpuWAxXDT2wGHYzcJIgQnPAOegUIlAEQAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjKuKG-mpuWAxXDT2wGHYzcJIgQnPAOegUIlAEQAA",
    isLiked: false
  },
  {
    id: 50,
    title: "Mere Nishaan Full Song  Oh My God   Akshay Kumar, Paresh Rawal  Kailash Kher, Meet Bros Anjjan",
    artist: "Akshay Kumar, Paresh Rawal  Kailash Kher, Meet Bros Anjjan",
    src: "songs/Mere Nishaan Full Song  Oh My God   Akshay Kumar, Paresh Rawal  Kailash Kher, Meet Bros Anjjan.mp3",
    imgSrc: "https://www.google.com/imgres?q=Mere%20Nishaan%20an&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8c6GRDxa6HQ%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8c6GRDxa6HQ&docid=WNB5eX7KngXAZM&tbnid=roDp7oHrLxTokM&vet=12ahUKEwiDn9ip1pyWAxXt3jgGHdRkLTkQnPAOegQIShAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiDn9ip1pyWAxXt3jgGHdRkLTkQnPAOegQIShAA",
    isLiked: false
  },
  {
    id: 51,
    title: "Mere Sapno Ki Rani 4K Song _ मर सपन क रन  आरधन  रजश खनन - शरमल टगर - कशर कमर",
    artist: "",
    src: "songs/Mere Sapno Ki Rani 4K Song _ मर सपन क रन  आरधन  रजश खनन - शरमल टगर - कशर कमर.mp3",
    imgSrc: "https://www.google.com/imgres?q=Mere%20Sapno%20Ki%20Rani%204K%20Song%20_%20%E0%A4%AE%E0%A4%B0%20%E0%A4%B8%E0%A4%AA%E0%A4%A8%20%E0%A4%95%20%E0%A4%B0%E0%A4%A8%20%20%E0%A4%86%E0%A4%B0%E0%A4%A7%E0%A4%A8%20%20%E0%A4%B0%E0%A4%9C%E0%A4%B6%20%E0%A4%96%E0%A4%A8%E0%A4%A8%20-%20%E0%A4%B6%E0%A4%B0%E0%A4%AE%E0%A4%B2%20%E0%A4%9F%E0%A4%97%E0%A4%B0%20-%20%E0%A4%95%E0%A4%B6%E0%A4%B0%20%E0%A4%95%E0%A4%AE%E0%A4%B0&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F3-_g8mXTutQ%2Fsddefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3-_g8mXTutQ&docid=zbiTTan5GQfvCM&tbnid=4uEcZg-Q3GgsfM&vet=12ahUKEwjn_qjP1pyWAxU29zgGHXc9EHsQnPAOegQIPhAA..i&w=640&h=480&hcb=2&ved=2ahUKEwjn_qjP1pyWAxU29zgGHXc9EHsQnPAOegQIPhAA",
    isLiked: false
  },
  {
    id: 52,
    title: "Musu Musu Full Video - Pyaar Mein Kabhi KabhiDino Morea,RinkeShaanVishal Dadlani",
    artist: "",
    src: "songs/Musu Musu Full Video - Pyaar Mein Kabhi KabhiDino Morea,RinkeShaanVishal Dadlani.mp3",
    imgSrc: "https://www.google.com/imgres?q=Musu%20Musu%20Full%20Video%20-%20Pyaar%20Mein%20Kabhi%20KabhiDino%20Morea%2CRinkeShaanVishal%20Dadlani&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fvr1si6G3JeM%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dvr1si6G3JeM&docid=cxM_3s5OQdHCUM&tbnid=uVYp3Nr8c9k4rM&vet=12ahUKEwiitY371pyWAxXTxDgGHdmKH3YQnPAOegQIKxAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiitY371pyWAxXTxDgGHdmKH3YQnPAOegQIKxAA",
    isLiked: false
  },
  {
    id: 53,
    title: "Namaste Narasimhaya  Narasimha Arati Kirtan  Bhakti Charu Swami",
    artist: "Bhakti Charu Swami",
    src: "songs/Namaste Narasimhaya  Narasimha Arati Kirtan  Bhakti Charu Swami.mp3",
    imgSrc: "https://www.google.com/imgres?q=Namaste%20Narasimhaya%20%20Narasimha%20Arati%20Kirtan%20%20Bhakti%20Charu%20Swami&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FVFQOVZeB8CM%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLDARyx8qzg7S6DvtUB_Vc5FI3MENA&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DETgOxIXLATI&docid=De3wlLcZf4c05M&tbnid=SBbjknUU8G0v_M&vet=12ahUKEwio8_6d15yWAxVB3TgGHWvwEnIQnPAOegQIORAA..i&w=686&h=386&hcb=2&ved=2ahUKEwio8_6d15yWAxVB3TgGHWvwEnIQnPAOegQIORAA",
    isLiked: false
  },
  {
    id: 54,
    title: "Oh Mama! TETEMA (Song) Rayvanny, Nora Fatehi  ShreyaGhoshal, Vishal Mishra, Sanjoy Bhushan K",
    artist: "Shreya Ghoshal, Vishal Mishra, Sanjoy Bhushan K",
    src: "songs/Oh Mama! TETEMA (Song) Rayvanny, Nora Fatehi  ShreyaGhoshal, Vishal Mishra, Sanjoy Bhushan K.mp3",
    imgSrc: "https://www.google.com/imgres?q=Oh%20Mama!%20TETEMA%20(Song)%20Rayvanny%2C%20Nora%20Fatehi%20%20ShreyaGhoshal%2C%20Vishal%20Mishra%2C%20Sanjoy%20Bhushan%20K&imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273c019f17563fcc8cc9db655c2&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F6LWd4TAkJt6kfHIQatolHP&docid=LwYIYeL6A_jHZM&tbnid=eXM_hXwyCCwz6M&vet=12ahUKEwiR6Y_V15yWAxUJ8jgGHfGPLa8QnPAOegUInwEQAA..i&w=640&h=640&hcb=2&ved=2ahUKEwiR6Y_V15yWAxUJ8jgGHfGPLa8QnPAOegUInwEQAA",
    isLiked: false
  },
  {
    id: 55,
    title: "Oviman  অভমন  Tanveer Evan  Piran Khan  Jovan  Mehazabien  Best Friend 3 Drama Song",
    artist: "",
    src: "songs/Oviman  অভমন  Tanveer Evan  Piran Khan  Jovan  Mehazabien  Best Friend 3 Drama Song.mp3",
    imgSrc: "https://www.google.com/imgres?q=Oviman%20%20%E0%A6%85%E0%A6%AD%E0%A6%AE%E0%A6%A8%20%20Tanveer%20Evan%20%20Piran%20Khan%20%20Jovan%20%20Mehazabien%20%20Best%20Friend%203%20Drama%20Song&imgurl=https%3A%2F%2Fc.saavncdn.com%2F376%2FOviman-From-Best-friend-3--Bengali-2021-20210316123306-500x500.jpg&imgrefurl=https%3A%2F%2Fwww.jiosaavn.com%2Falbum%2Foviman-from-best-friend-3%2FVKYMgVEWKAU_&docid=XUJPN2XXVbkjGM&tbnid=bOS0GKYuFkppmM&vet=12ahUKEwiGmaPq15yWAxUCxjgGHR6IJyoQnPAOegQIPxAA..i&w=500&h=500&hcb=2&ved=2ahUKEwiGmaPq15yWAxUCxjgGHR6IJyoQnPAOegQIPxAA",
    isLiked: false
  },
  {
    id: 56,
    title: "Palat Tera Hero Idhar Hai (Full Video) Song Main Tera Hero  Arijit Singh  Varun Dhawan",
    artist: "Arijit Singh  Varun Dhawan",
    src: "songs/Palat Tera Hero Idhar Hai (Full Video) Song Main Tera Hero  Arijit Singh  Varun Dhawan.mp3",
    imgSrc: "https://www.google.com/imgres?q=Palat%20Tera%20Hero%20Idhar%20Hai%20(Full%20Video)%20Song%20Main%20Tera%20Hero%20%20Arijit%20Singh%20%20Varun%20Dhawan&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9vkcYxbGdTE%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9vkcYxbGdTE&docid=0vYfVNncRu1TkM&tbnid=H1HomyZgxnkW0M&vet=12ahUKEwjIp4HB2JyWAxVp6zgGHU1MAM0QnPAOegQINBAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjIp4HB2JyWAxVp6zgGHU1MAM0QnPAOegQINBAA",
    isLiked: false
  },
    {
    id: 57,
    title: "Parbona Ami Charte Toke - Lyrical  Title Track  Bonny  Koushani  Arijit  Indraadip  Raj C SVF",
    artist: "Bonny  Koushani  Arijit  Indraadip  Raj C",
    src: "songs/Parbona Ami Charte Toke - Lyrical  Title Track  Bonny  Koushani  Arijit  Indraadip  Raj C SVF.mp3",
    imgSrc: "https://www.google.com/imgres?q=Parbona%20Ami%20Charte%20Toke%20-%20Lyrical%20%20Title%20Track%20%20Bonny%20%20Koushani%20%20Arijit%20%20Indraadip%20%20Raj%20C%20SVF&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fzo3jN2UjMVQ%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dzo3jN2UjMVQ&docid=UBbqlwN3EZKpZM&tbnid=wssy488QvluAYM&vet=12ahUKEwjVo9bZ2JyWAxVfwTgGHWTfEGcQnPAOegQIQhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjVo9bZ2JyWAxVfwTgGHWTfEGcQnPAOegQIQhAA",
    isLiked: false
  },
    {
    id: 58,
    title: "Pehla Pehla Pyaar with lyrics  पहल पहल पयर  Hum Aapke Hai Kon  Salman Khan  Madhuri Dixit",
    artist: "Salman Khan  Madhuri Dixit",
    src: "songs/Pehla Pehla Pyaar with lyrics  पहल पहल पयर  Hum Aapke Hai Kon  Salman Khan  Madhuri Dixit.mp3",
    imgSrc: "https://www.google.com/imgres?q=Pehla%20Pehla%20Pyaar%20with%20lyrics%20%20%E0%A4%AA%E0%A4%B9%E0%A4%B2%20%E0%A4%AA%E0%A4%B9%E0%A4%B2%20%E0%A4%AA%E0%A4%AF%E0%A4%B0%20%20Hum%20Aapke%20Hai%20Kon%20%20Salman%20Khan%20%20Madhuri%20Dixit&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FGAYU-oUcEU0%2Fsddefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGAYU-oUcEU0&docid=uhDNdah1_8Ih0M&tbnid=-_AJq1zjgYAuOM&vet=12ahUKEwjFjeqA2ZyWAxUH3TgGHaIUNKAQnPAOegQIRBAA..i&w=640&h=480&hcb=2&ved=2ahUKEwjFjeqA2ZyWAxUH3TgGHaIUNKAQnPAOegQIRBAA",
    isLiked: false
  },
    {
    id: 59,
    title: "QARAN, Ash King - Haaye Oye (Lyrics)",
    artist: "",
    src: "songs/QARAN, Ash King - Haaye Oye (Lyrics).mp3",
    imgSrc: "https://www.google.com/imgres?q=QARAN%2C%20Ash%20King%20-%20Haaye%20Oye%20(Lyrics)&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeGy-zA2HFvM%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeGy-zA2HFvM&docid=oDeAzLUdPuWqAM&tbnid=QGoS7jTRuHnfLM&vet=12ahUKEwj7s_396JyWAxWtSmwGHTqGI4oQnPAOegUImgEQAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwj7s_396JyWAxWtSmwGHTqGI4oQnPAOegUImgEQAA",
    isLiked: false
  },
    {
    id: 60,
    title: "Queen_ London Thumakda Full Video Song  Kangana Ranaut, Raj Kumar Rao",
    artist: "Kangana Ranaut, Raj Kumar Rao",
    src: "songs/Queen_ London Thumakda Full Video Song  Kangana Ranaut, Raj Kumar Rao.mp3",
    imgSrc: "https://www.google.com/imgres?q=Queen_%20London%20Thumakda%20Full%20Video%20Song%20%20Kangana%20Ranaut%2C%20Raj%20Kumar%20Rao&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fudra3Mfw2oo%2Fsddefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dudra3Mfw2oo&docid=JXwPWghe8QLSeM&tbnid=Rea_aIM5AWx52M&vet=12ahUKEwjoxYWi6ZyWAxUqTGwGHSAFPQMQnPAOegQIRhAA..i&w=640&h=480&hcb=2&ved=2ahUKEwjoxYWi6ZyWAxUqTGwGHSAFPQMQnPAOegQIRhAA",
    isLiked: false
  },
    {
    id: 61,
    title: "Rang Lageya  Official Video  Paras Chhabra  Mahira Sharma  Mohit Chauhan  Rochak Kohli  Kumaar",
    artist: "Mahira Sharma  Mohit Chauhan  Rochak Kohli  Kumaar",
    src: "songs/Rang Lageya  Official Video  Paras Chhabra  Mahira Sharma  Mohit Chauhan  Rochak Kohli  Kumaar.mp3",
    imgSrc: "https://www.google.com/imgres?q=Rang%20Lageya%20%20Official%20Video%20%20Paras%20Chhabra%20%20Mahira%20Sharma%20%20Mohit%20Chauhan%20%20Rochak%20Kohli%20%20Kumaar&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fl171yz-OVeE%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dl171yz-OVeE&docid=m1mh2nTSCJpHyM&tbnid=HgfOvKBYyZq4eM&vet=12ahUKEwj4gPno6ZyWAxUZT2wGHVSPDiUQnPAOegUIogEQAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwj4gPno6ZyWAxUZT2wGHVSPDiUQnPAOegUIogEQAA",
    isLiked: false
  },
    {
    id: 62,
    title: "Rimjhim E Dhara Te  Premer Kahini  Dev  Koel  Shaan Jeet Gannguli  SVF",
    artist: "Dev  Koel  Shaan Jeet Gannguli",
    src: "songs/Rimjhim E Dhara Te  Premer Kahini  Dev  Koel  Shaan Jeet Gannguli  SVF.mp3",
    imgSrc: "https://www.google.com/imgres?q=Rimjhim%20E%20Dhara%20Te%20%20Premer%20Kahini%20%20Dev%20%20Koel%20%20Shaan%20Jeet%20Gannguli%20%20SVF&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FAtnMG_40604%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.shazam.com%2Fsong%2F1636677053%2Frimjhim-e-dharatey-male%2Fmusic-video&docid=WJNHJSa0y4bzhM&tbnid=qj_8tCoLdWwI7M&vet=12ahUKEwiy7r6D6pyWAxXPSGcHHQE4EpEQnPAOegQIQRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiy7r6D6pyWAxXPSGcHHQE4EpEQnPAOegQIQRAA",
    isLiked: false
  },
    {
    id: 63,
    title: "Saiyaara Full Song  Ahaan Panday, Aneet Padda  Tanishk Bagchi, Faheem A, Arslan N  Irshad Kamil",
    artist: "Aneet Padda  Tanishk Bagchi, Faheem A, Arslan N  Irshad Kamil",
    src: "songs/Saiyaara Full Song  Ahaan Panday, Aneet Padda  Tanishk Bagchi, Faheem A, Arslan N  Irshad Kamil.mp3",
    imgSrc: "https://www.google.com/imgres?q=Saiyaara%20Full%20Song%20%20Ahaan%20Panday%2C%20Aneet%20Padda%20%20Tanishk%20Bagchi%2C%20Faheem%20A%2C%20Arslan%20N%20%20Irshad%20Kamil&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Fb%2Fbb%2FSaiyaara_%2528soundtrack%2529.jpg%2F250px-Saiyaara_%2528soundtrack%2529.jpg%3Futm_source%3Den.wikipedia.org%26utm_campaign%3Dparser%26utm_content%3Dthumbnail&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSaiyaara_(soundtrack)&docid=5aboQnrx4ZmXjM&tbnid=e3doYVSwQf0HWM&vet=12ahUKEwi_pZWi6pyWAxWzXGcHHaR4N3sQnPAOegQIRhAA..i&w=250&h=250&hcb=2&ved=2ahUKEwi_pZWi6pyWAxWzXGcHHaR4N3sQnPAOegQIRhAA",
    isLiked: false
  },
    {
    id: 64,
    title: "Sajni 8K Full Video Song_ Arijit Singh, Ram Sampath  Laapataa Ladies  Aamir Khan Productions",
    artist: "Arijit Singh, Ram Sampath  Laapataa Ladies",
    src: "songs/Sajni 8K Full Video Song_ Arijit Singh, Ram Sampath  Laapataa Ladies  Aamir Khan Productions.mp3",
    imgSrc: "https://www.google.com/imgres?q=Sajni%208K%20Full%20Video%20Song_%20Arijit%20Singh%2C%20Ram%20Sampath%20%20Laapataa%20Ladies%20%20Aamir%20Khan%20Productions&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXJAMVPQWvGY%2Fmqdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXJAMVPQWvGY&docid=pmwxkKOfZYFQ4M&tbnid=h4rAlYYmBuDG2M&vet=12ahUKEwifsMC96pyWAxVrSmwGHShtAGcQnPAOegUIoAEQAA..i&w=320&h=180&hcb=2&ved=2ahUKEwifsMC96pyWAxVrSmwGHShtAGcQnPAOegUIoAEQAA",
    isLiked: false
  },
    {
    id: 65,
    title: "Shedin Dekha Hoyechilo ( সদন দখ হয়ছল )  Title Track  Dev  Srabanti  Sujit Mondal  SVF",
    artist: "Dev  Srabanti  Sujit Mondal",
    src: "songs/Shedin Dekha Hoyechilo ( সদন দখ হয়ছল )  Title Track  Dev  Srabanti  Sujit Mondal  SVF.mp3",
    imgSrc: "https://www.google.com/imgres?q=Shedin%20Dekha%20Hoyechilo%20(%20%E0%A6%B8%E0%A6%A6%E0%A6%A8%20%E0%A6%A6%E0%A6%96%20%E0%A6%B9%E0%A7%9F%E0%A6%9B%E0%A6%B2%20)%20%20Title%20Track%20%20Dev%20%20Srabanti%20%20Sujit%20Mondal%20%20SVF&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FqycdD_0NsGo%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqycdD_0NsGo&docid=eHw39h8XR9IWTM&tbnid=wTzoNDNgUaNKyM&vet=12ahUKEwiCucvX6pyWAxX8zzkIHTYFLbIQnPAOegQIORAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiCucvX6pyWAxX8zzkIHTYFLbIQnPAOegQIORAA",
    isLiked: false
  },
    {
    id: 66,
    title: "Shudhu Tui (শধ তই)  Villain  Ankush  Mimi  Raj Barman  Trissha  Amlaan  Baba Yadav  SVF",
    artist: "Ankush  Mimi  Raj Barman  Trissha  Amlaan  Baba Yadav",
    src: "songs/Shudhu Tui (শধ তই)  Villain  Ankush  Mimi  Raj Barman  Trissha  Amlaan  Baba Yadav  SVF.mp3",
    imgSrc: "https://www.google.com/imgres?q=Shudhu%20Tui%20(%E0%A6%B6%E0%A6%A7%20%E0%A6%A4%E0%A6%87)%20%20Villain%20%20Ankush%20%20Mimi%20%20Raj%20Barman%20%20Trissha%20%20Amlaan%20%20Baba%20Yadav%20%20SVF&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F7XGr7KOcvyM%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7XGr7KOcvyM&docid=175S5d2mcwUq-M&tbnid=W1YDPxQw-Pu1oM&vet=12ahUKEwjlnpPz6pyWAxWRcWwGHfJcKNgQnPAOegQIQxAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjlnpPz6pyWAxWRcWwGHfJcKNgQnPAOegQIQxAA",
    isLiked: false
  },
    {
    id: 67,
    title: "sri-damodarashtakam-shrii-daameaadraassttkm-shrii-daamodr-assttkm-128-ytshorts.savetube.me",
    artist: "",
    src: "songs/sri-damodarashtakam-shrii-daameaadraassttkm-shrii-daamodr-assttkm-128-ytshorts.savetube.me.mp3",
    imgSrc: "https://www.google.com/imgres?q=damodarashtakam&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FF47hXjf-PfI%2Fhqdefault.jpg%3Fv%3D653919e1&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DF47hXjf-PfI&docid=nzdlhCO7ekGiSM&tbnid=qKHww5WzAV7NjM&vet=12ahUKEwiau4eV65yWAxXUcmwGHRAMD3oQnPAOegQIahAA..i&w=480&h=360&hcb=2&ved=2ahUKEwiau4eV65yWAxXUcmwGHRAMD3oQnPAOegQIahAA",
    isLiked: false
  },
    {
    id: 68,
    title: "Tere Liye - Lyrical - Prince  Vivek Oberoi  Atif Aslam, Shreya Ghoshal  Hindi Hits Dance Songs",
    artist: "Atif Aslam, Shreya Ghoshal",
    src: "songs/Tere Liye - Lyrical - Prince  Vivek Oberoi  Atif Aslam, Shreya Ghoshal  Hindi Hits Dance Songs.mp3",
    imgSrc: "https://www.google.com/imgres?q=Tere%20Liye%20-%20Lyrical%20-%20Prince%20%20Vivek%20Oberoi%20%20Atif%20Aslam%2C%20Shreya%20Ghoshal%20%20Hindi%20Hits%20Dance%20Songs&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FAlvUuGJccKs%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DAlvUuGJccKs&docid=O6H4pQZU06wX_M&tbnid=EbV7dJpW73Me5M&vet=12ahUKEwiL6IC665yWAxVoWGwGHaWuHZEQnPAOegQIORAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiL6IC665yWAxVoWGwGHaWuHZEQnPAOegQIORAA",
    isLiked: false
  },
    {
    id: 69,
    title: "Tere Mast Mast Do Nain ( With Lyrics) Full Song Dabangg  Salman Khan",
    artist: "Salman Khan",
    src: "songs/Tere Mast Mast Do Nain ( With Lyrics) Full Song Dabangg  Salman Khan.mp3",
    imgSrc: "https://www.google.com/imgres?q=Tere%20Mast%20Mast%20Do%20Nain%20(%20With%20Lyrics)%20Full%20Song%20Dabangg%20%20Salman%20Khan&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIXH7OkXHTGA%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLAwsuSNnsdj8YS1f8DUIa5Fak4E0g&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIXH7OkXHTGA&docid=-rBOWhaEmHg7FM&tbnid=scCgjM0UWMSFnM&vet=12ahUKEwjynOjT65yWAxWRbmwGHZwBDYkQnPAOegQIPhAA..i&w=686&h=386&hcb=2&itg=1&ved=2ahUKEwjynOjT65yWAxWRbmwGHZwBDYkQnPAOegQIPhAA",
    isLiked: false
  },
    {
    id: 70,
    title: "Tere Naina Full Song with Lyrics  Jai Ho  Salman Khan, Tabu  Releasing_ 24 Jan 2014",
    artist: "Salman Khan",
    src: "songs/Tere Naina Full Song with Lyrics  Jai Ho  Salman Khan, Tabu  Releasing_ 24 Jan 2014.mp3",
    imgSrc: "https://www.google.com/imgres?q=Tere%20Naina%20Full%20Song%20with%20Lyrics%20%20Jai%20Ho%20%20Salman%20Khan%2C%20Tabu%20%20Releasing_%2024%20Jan%202014&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FEQFDf96XRrc%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DEQFDf96XRrc&docid=0AAGWFy8Lq6lSM&tbnid=R4eliYeKbq8KKM&vet=12ahUKEwjAhLS37JyWAxU3dmwGHZKCGy0QnPAOegQIQRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjAhLS37JyWAxU3dmwGHZKCGy0QnPAOegQIQRAA",
    isLiked: false
  },
    {
    id: 71,
    title: "Tere Vaaste  Full Video  Zara Hatke Zara Bachke  Vicky, Sara, Varun J, Sachin-Jigar, Amitabh B",
    artist: "Vicky, Sara, Varun J, Sachin-Jigar, Amitabh B",
    src: "songs/Tere Vaaste  Full Video  Zara Hatke Zara Bachke  Vicky, Sara, Varun J, Sachin-Jigar, Amitabh B.mp3",
    imgSrc: "https://www.google.com/imgres?q=Tere%20Vaaste%20%20Full%20Video%20%20Zara%20Hatke%20Zara%20Bachke%20%20Vicky%2C%20Sara%2C%20Varun%20J%2C%20Sachin-Jigar%2C%20Amitabh%20B&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FklwqJIAGqMM%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLBbLllbzfyzwfsl4FdN1v9AdXREPg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DklwqJIAGqMM&docid=zabHR04dJAph9M&tbnid=wa-DP61wa16FvM&vet=12ahUKEwiOudCA7ZyWAxXBa2wGHdJbCJoQnPAOegUIsQEQAA..i&w=686&h=386&hcb=2&ved=2ahUKEwiOudCA7ZyWAxXBa2wGHdJbCJoQnPAOegUIsQEQAA",
    isLiked: false
  },
    {
    id: 72,
    title: "Teri Meri Kahaani Hai Baarishon Ka Paani - Arijit Singh  Gabbar Is Back  Akshay Kumar & Kareena K",
    artist: "Arijit Singh",
    src: "songs/Teri Meri Kahaani Hai Baarishon Ka Paani - Arijit Singh  Gabbar Is Back  Akshay Kumar & Kareena K.mp3",
    imgSrc: "https://www.google.com/imgres?q=Teri%20Meri%20Kahaani%20Hai%20Baarishon%20Ka%20Paani%20-%20Arijit%20Singh%20%20Gabbar%20Is%20Back%20%20Akshay%20Kumar%20%26%20Kareena%20K&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZWAGn4yyRMM%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLA4kSh5EGvsbwXFeH0uvSeEE18Y6g&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZWAGn4yyRMM&docid=xq4e9FwzAXiEEM&tbnid=9LnjHnzCRewviM&vet=12ahUKEwj9sprT7ZyWAxVTamwGHXanBPkQnPAOegQIRhAA..i&w=686&h=386&hcb=2&ved=2ahUKEwj9sprT7ZyWAxVTamwGHXanBPkQnPAOegQIRhAA",
    isLiked: false
  },
  {
    id: 73,
    title: "Thik Jeno Love Story (Title Song) - Arindom, Prashmita Full HD Audio Song with Lyrics Star Jalsha",
    artist: "Arindom, Prashmita",
    src: "songs/Thik Jeno Love Story (Title Song) - Arindom, Prashmita Full HD Audio Song with Lyrics Star Jalsha.mp3",
    imgSrc: "https://www.google.com/imgres?q=Thik%20Jeno%20Love%20Story%20(Title%20Song)%20-%20Arindom%2C%20Prashmita%20Full%20HD%20Audio%20Song%20with%20Lyrics%20Star%20Jalsha&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FV0J7UO4xX9Q%2Fsddefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DV0J7UO4xX9Q&docid=8L_tp2xI9dWFhM&tbnid=xQa2ZLVLBtPB-M&vet=12ahUKEwiGqaWz7pyWAxVH1zgGHVvDDEwQnPAOegUIqgEQAA..i&w=640&h=480&hcb=2&ved=2ahUKEwiGqaWz7pyWAxVH1zgGHVvDDEwQnPAOegUIqgEQAA",
    isLiked: false
  },
  {
    id: 74,
    title: "Tomake Chai (তমক চই )  Gangster  Arijit Singh  Arindom  Yash  Mimi  Birsa Dasgupta  SVF",
    artist: "Arijit Singh  Arindom  Yash  Mimi  Birsa Dasgupta",
    src: "songs/Tomake Chai (তমক চই )  Gangster  Arijit Singh  Arindom  Yash  Mimi  Birsa Dasgupta  SVF.mp3",
    imgSrc: "https://www.google.com/imgres?q=Tomake%20Chai%20(%E0%A6%A4%E0%A6%AE%E0%A6%95%20%E0%A6%9A%E0%A6%87%20)%20%20Gangster%20%20Arijit%20Singh%20%20Arindom%20%20Yash%20%20Mimi%20%20Birsa%20Dasgupta%20%20SVF&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSzsbcLBb9to%2Fsddefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSzsbcLBb9to&docid=Syfgynbm-6InqM&tbnid=zuFS5jQ0S0_ifM&vet=12ahUKEwig_ZXM7pyWAxUzxzgGHfiBKyMQnPAOegUIngEQAA..i&w=640&h=480&hcb=2&itg=1&ved=2ahUKEwig_ZXM7pyWAxUzxzgGHfiBKyMQnPAOegUIngEQAA",
    isLiked: false
  },
  {
    id: 75,
    title: "Tomake Chai Title Track  তমক চই  Bonny  Koushani  Arijit Singh  Indraadip Dasgupta  SVF",
    artist: "Bonny  Koushani  Arijit Singh  Indraadip Dasgupta",
    src: "songs/Tomake Chai Title Track  তমক চই  Bonny  Koushani  Arijit Singh  Indraadip Dasgupta  SVF.mp3",
    imgSrc: "https://www.google.com/imgres?q=Tomake%20Chai%20Title%20Track%20%20%E0%A6%A4%E0%A6%AE%E0%A6%95%20%E0%A6%9A%E0%A6%87%20%20Bonny%20%20Koushani%20%20Arijit%20Singh%20%20Indraadip%20Dasgupta%20%20SVF&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F3mW_-8jGOMs%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3mW_-8jGOMs&docid=Tc5o35t_Ms2NoM&tbnid=hlR7SpEinE7xcM&vet=12ahUKEwjeq4vv7pyWAxUrzDgGHS_FBREQnPAOegQIQBAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjeq4vv7pyWAxUrzDgGHS_FBREQnPAOegQIQBAA",
    isLiked: false
  },
  {
    id: 76,
    title: "Tomar Ghore Bosot Kore Koyjona Anirban Sur  Official Lyrical Video",
    artist: "Anirban Sur",
    src: "songs/Tomar Ghore Bosot Kore Koyjona Anirban Sur  Official Lyrical Video.mp3",
    imgSrc: "https://www.google.com/imgres?q=Tomar%20Ghore%20Bosot%20Kore%20Koyjona%20Anirban%20Sur%20Official%20Lyrical%20Video&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FlYg7gzSF434%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlYg7gzSF434&docid=AkoWODfjmY67HM&tbnid=C4jG3jzdX2Ov6M&vet=12ahUKEwj8sO-ty52WAxUgcmwGHU1kGlIQnPAOegQIQBAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwj8sO-ty52WAxUgcmwGHU1kGlIQnPAOegQIQBAA",
    isLiked: false
  },
  {
    id: 77,
    title: "Tor Ek Kothaye  Besh Korechi Prem Korechi  Koel  Jeet  Arijit Singh  Jeet Gannguli",
    artist: "Koel  Jeet  Arijit Singh  Jeet Gannguli",
    src: "songs/Tor Ek Kothaye  Besh Korechi Prem Korechi  Koel  Jeet  Arijit Singh  Jeet Gannguli.mp3",
    imgSrc: "https://www.google.com/imgres?q=Tor%20Ek%20Kothaye%20%20Besh%20Korechi%20Prem%20Korechi%20%20Koel%20%20Jeet%20%20Arijit%20Singh%20%20Jeet%20Gannguli&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FCab_vw7bBsc%2Fmqdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCab_vw7bBsc&docid=JmEH8ciZu7lTsM&tbnid=Lu48WiIr6NbZSM&vet=12ahUKEwj145Hdy52WAxWzjOEIHWj1Kj4QnPAOegQIfRAA..i&w=320&h=180&hcb=2&ved=2ahUKEwj145Hdy52WAxWzjOEIHWj1Kj4QnPAOegQIfRAA",
    isLiked: false
  },
  {
    id: 78,
    title: "Tor Motoi - Lyrical (তর মতই)  Ki Kore Toke Bolbo  Ankush, Mimi Jeet Gannguli Prasen SVF Music",
    artist: "Ankush, Mimi Jeet Gannguli",
    src: "songs/Tor Motoi - Lyrical (তর মতই)  Ki Kore Toke Bolbo  Ankush, Mimi Jeet Gannguli Prasen SVF Music.mp3",
    imgSrc: "https://www.google.com/imgres?q=Tor%20Motoi%20-%20Lyrical%20(%E0%A6%A4%E0%A6%B0%20%E0%A6%AE%E0%A6%A4%E0%A6%87)%20%20Ki%20Kore%20Toke%20Bolbo%20%20Ankush%2C%20Mimi%20Jeet%20Gannguli%20Prasen%20SVF%20Music&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FR43LsDPae-s%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DR43LsDPae-s&docid=lp5Rq0QF4ehj2M&tbnid=rwr470GW_sLpsM&vet=12ahUKEwi9i8z7y52WAxWEzjgGHT1dGqMQnPAOegQIOhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwi9i8z7y52WAxWEzjgGHT1dGqMQnPAOegQIOhAA",
    isLiked: false
  },
  {
    id: 79,
    title: "Tu Hi Meri Shab Hai - K.K _ Gangster _ Emraan Hashmi, Kangna Ranaut _ Full 4K Video Song [mWBvudKcByg]",
    artist: "Emraan Hashmi, Kangna Ranaut",
    src: "songs/Tu Hi Meri Shab Hai - K.K _ Gangster _ Emraan Hashmi, Kangna Ranaut _ Full 4K Video Song [mWBvudKcByg].mp3",
    imgSrc: "https://www.google.com/imgres?q=Tu%20Hi%20Meri%20Shab%20Hai%20-%20K.K%20_%20Gangster%20_%20Emraan%20Hashmi%2C%20Kangna%20Ranaut%20_%20Full%204K%20Video%20Song%20%5BmWBvudKcByg%5D&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FHT-BGBbOD9I%2Fmqdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHT-BGBbOD9I&docid=UapuOh2QxNrn2M&tbnid=xA300K8nCj6UxM&vet=12ahUKEwiw-fGXzJ2WAxUE2TgGHVhUABAQnPAOegQIOxAA..i&w=320&h=180&hcb=2&ved=2ahUKEwiw-fGXzJ2WAxUE2TgGHVhUABAQnPAOegQIOxAA",
    isLiked: false
  },
  {
    id: 80,
    title: "Tu Hi Toh Hai  Akshay Kumar & Sonakshi Sinha  Holiday  Pritam  Benny Dayal",
    artist: "Akshay Kumar & Sonakshi Sinha",
    src: "songs/Tu Hi Toh Hai  Akshay Kumar & Sonakshi Sinha  Holiday  Pritam  Benny Dayal.mp3",
    imgSrc: "https://www.google.com/imgres?q=Tu%20Hi%20Toh%20Hai%20%20Akshay%20Kumar%20%26%20Sonakshi%20Sinha%20%20Holiday%20%20Pritam%20%20Benny%20Dayal&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FmQbLzqGUmpg%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DmQbLzqGUmpg&docid=QLd88xl-depR0M&tbnid=-B0h9RjpZi-mLM&vet=12ahUKEwimtqixzJ2WAxW2yzgGHW7mAFkQnPAOegQIRBAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwimtqixzJ2WAxW2yzgGHW7mAFkQnPAOegQIRBAA",
    isLiked: false
  },
  {
    id: 81,
    title: "Tui Borsha Bikeler Dheu  Rocky  Mimoh  Puja Bose  Shaan  Palak Muchhal  Jeet Gannguli",
    artist: "Rocky  Mimoh  Puja Bose  Shaan  Palak Muchhal  Jeet Gannguli",
    src: "songs/Tui Borsha Bikeler Dheu  Rocky  Mimoh  Puja Bose  Shaan  Palak Muchhal  Jeet Gannguli.mp3",
    imgSrc: "https://www.google.com/imgres?q=Tui%20Borsha%20Bikeler%20Dheu%20%20Rocky%20%20Mimoh%20%20Puja%20Bose%20%20Shaan%20%20Palak%20Muchhal%20%20Jeet%20Gannguli&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F7mTReTTvhvw%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLBByKWYHTkPSnPTLBsH-qXdP2TCDg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbhaS8sOfYIo&docid=6bI1TsYCGgsB9M&tbnid=YilBqku6fHgVQM&vet=12ahUKEwjJy-LOzJ2WAxXqxDgGHV4JKnwQnPAOegQIRBAA..i&w=686&h=386&hcb=2&ved=2ahUKEwjJy-LOzJ2WAxXqxDgGHV4JKnwQnPAOegQIRBAA",
    isLiked: false
  },
  {
    id: 82,
    title: "Tujhe Dekha Toh Song  Dilwale Dulhania Le Jayenge  Shah Rukh Khan, Kajol  Lata, Kumar Sanu  DDLJ",
    artist: "Shah Rukh Khan, Kajol  Lata, Kumar Sanu",
    src: "songs/Tujhe Dekha Toh Song  Dilwale Dulhania Le Jayenge  Shah Rukh Khan, Kajol  Lata, Kumar Sanu  DDLJ.mp3",
    imgSrc: "https://www.google.com/imgres?q=Tujhe%20Dekha%20Toh%20Song%20%20Dilwale%20Dulhania%20Le%20Jayenge%20%20Shah%20Rukh%20Khan%2C%20Kajol%20%20Lata%2C%20Kumar%20Sanu%20%20DDLJ&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FvCTW2GfcepQ%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvCTW2GfcepQ&docid=nr7PJZekxxUAKM&tbnid=OHH2LgptAenE2M&vet=12ahUKEwih8fLozJ2WAxVNRCoJHT69HZUQnPAOegQIPRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwih8fLozJ2WAxVNRCoJHT69HZUQnPAOegQIPRAA",
    isLiked: false
  },
  {
    id: 83,
    title: "Tumi Aashe Paashe (তম আশ পশ )  Parbona Ami Chartey Tokey  Bonny  Koushani  SVF Music",
    artist: "Bonny  Koushani",
    src: "songs/Tumi Aashe Paashe (তম আশ পশ )  Parbona Ami Chartey Tokey  Bonny  Koushani  SVF Music.mp3",
    imgSrc: "https://www.google.com/imgres?q=Tumi%20Aashe%20Paashe%20(%E0%A6%A4%E0%A6%AE%20%E0%A6%86%E0%A6%B6%20%E0%A6%AA%E0%A6%B6%20)%20%20Parbona%20Ami%20Chartey%20Tokey%20%20Bonny%20%20Koushani%20%20SVF%20Music&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FbnFiJ_e_dEg%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbnFiJ_e_dEg&docid=xu_a1FR5oHvpOM&tbnid=ReyYMW8y7eNeDM&vet=12ahUKEwjNjvSpzZ2WAxWIcmwGHdgmFWkQnPAOegQIQBAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjNjvSpzZ2WAxWIcmwGHdgmFWkQnPAOegQIQBAA",
    isLiked: false
  },
  {
    id: 84,
    title: "Tune Jo Na Kaha Song  New York  John Abraham, Katrina Kaif, Neil Nitin M  Mohit Chauhan  Pritam",
    artist: "Katrina Kaif, Neil Nitin M  Mohit Chauhan  Pritam",
    src: "songs/Tune Jo Na Kaha Song  New York  John Abraham, Katrina Kaif, Neil Nitin M  Mohit Chauhan  Pritam.mp3",
    imgSrc: "https://www.google.com/imgres?q=Tune%20Jo%20Na%20Kaha%20Song%20%20New%20York%20%20John%20Abraham%2C%20Katrina%20Kaif%2C%20Neil%20Nitin%20M%20%20Mohit%20Chauhan%20%20Pritam&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FdTu5dTEzVM4%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdTu5dTEzVM4&docid=7LILFsz3i6Ch8M&tbnid=UhwWFPpTbp7RxM&vet=12ahUKEwjmn67IzZ2WAxWOiuEIHeLUDF8QnPAOegQIORAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjmn67IzZ2WAxWOiuEIHeLUDF8QnPAOegQIORAA",
    isLiked: false
  },
  {
    id: 85,
    title: "Udi Udi Jaye  Raees  Shah Rukh Khan & Mahira Khan  Ram Sampath",
    artist: "Shah Rukh Khan & Mahira Khan",
    src: "songs/Udi Udi Jaye  Raees  Shah Rukh Khan & Mahira Khan  Ram Sampath.mp3",
    imgSrc: "https://www.google.com/imgres?q=Udi%20Udi%20Jaye%20%20Raees%20%20Shah%20Rukh%20Khan%20%26%20Mahira%20Khan%20%20Ram%20Sampath&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FdFJEJ-KTfWQ%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLBkRLdwdiSyrDI95aE_A-QejxE_6A&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdFJEJ-KTfWQ&docid=4r1JyZAtTt50hM&tbnid=V5cejuFuEES5MM&vet=12ahUKEwjEvOzfzZ2WAxUjwzgGHS4pMj4QnPAOegQIRRAA..i&w=686&h=386&hcb=2&ved=2ahUKEwjEvOzfzZ2WAxUjwzgGHS4pMj4QnPAOegQIRRAA",
    isLiked: false
  },
  {
    id: 86,
    title: "Ure Geche  পরব ন আম ছড়ত তক  Full Video Song  Bonny  Koushani  Raj Chakraborty  SVF",
    artist: " Bonny  Koushani  Raj Chakraborty",
    src: "songs/Ure Geche  পরব ন আম ছড়ত তক  Full Video Song  Bonny  Koushani  Raj Chakraborty  SVF.mp3",
    imgSrc: "https://www.google.com/imgres?q=Ure%20Geche%20%20%E0%A6%AA%E0%A6%B0%E0%A6%AC%20%E0%A6%A8%20%E0%A6%86%E0%A6%AE%20%E0%A6%9B%E0%A7%9C%E0%A6%A4%20%E0%A6%A4%E0%A6%95%20%20Full%20Video%20Song%20%20Bonny%20%20Koushani%20%20Raj%20Chakraborty%20%20SVF&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fgg9eX9MzLxo%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dgg9eX9MzLxo&docid=YaxE4P4y1kcMOM&tbnid=TlOIo7XrFzJlKM&vet=12ahUKEwj8gfj4zZ2WAxXFyzgGHQ0lFWMQnPAOegQIPRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwj8gfj4zZ2WAxXFyzgGHQ0lFWMQnPAOegQIPRAA",
    isLiked: false
  },
  {
    id: 87,
    title: "WAJAH TUM HO Full Video Song  HATE STORY 3 Songs  Zareen Khan, Karan Singh Grover  T-Series",
    artist: "Zareen Khan, Karan Singh Grover",
    src: "songs/WAJAH TUM HO Full Video Song  HATE STORY 3 Songs  Zareen Khan, Karan Singh Grover  T-Series.mp3",
    imgSrc: "https://www.google.com/imgres?q=WAJAH%20TUM%20HO%20Full%20Video%20Song%20%20HATE%20STORY%203%20Songs%20%20Zareen%20Khan%2C%20Karan%20Singh%20Grover%20%20T-Series&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F__ZvXBf1rmw%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D__ZvXBf1rmw&docid=XaaCWY-h52S2OM&tbnid=WfT1bC4vgkgB_M&vet=12ahUKEwibhOmizp2WAxU-xDgGHeaND5QQnPAOegQIOhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwibhOmizp2WAxU-xDgGHeaND5QQnPAOegQIOhAA",
    isLiked: false
  },
  {
    id: 88,
    title: "Woh Ladki Jo Sabse Alag Hai 4K HD Video  Shahrukh Khan, Twinkle Khanna  Baadshah  90's Hits Songs",
    artist: "Shahrukh Khan, Twinkle Khanna",
    src: "songs/Woh Ladki Jo Sabse Alag Hai 4K HD Video  Shahrukh Khan, Twinkle Khanna  Baadshah  90's Hits Songs.mp3",
    imgSrc: "https://www.google.com/imgres?q=Woh%20Ladki%20Jo%20Sabse%20Alag%20Hai%204K%20HD%20Video%20%20Shahrukh%20Khan%2C%20Twinkle%20Khanna%20%20Baadshah%20%2090%27s%20Hits%20Songs&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FqrCKwbXCf20%2Fhqdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqrCKwbXCf20&docid=hFMkZt5lWgUlVM&tbnid=fMiuZwwuNoDpAM&vet=12ahUKEwixgKi_zp2WAxV4umMGHU7oNdcQnPAOegQIPRAA..i&w=480&h=360&hcb=2&ved=2ahUKEwixgKi_zp2WAxV4umMGHU7oNdcQnPAOegQIPRAA",
    isLiked: false
  },
  {
    id: 89,
    title: "Arijit Singh Mon Majhi Re Full HD Video Song  Boss Bengali Movie  Jeet & Subhasree",
    artist: "Jeet & Subhasree",
    src: "songs/Arijit Singh Mon Majhi Re Full HD Video Song  Boss Bengali Movie  Jeet & Subhasree.mp3",
    imgSrc: "https://www.google.com/imgres?q=Arijit%20Singh%20Mon%20Majhi%20Re%20F&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeORVpaICbzk%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeORVpaICbzk&docid=u40gGbXY5_fIuM&tbnid=i1Lerjotl2z5vM&vet=12ahUKEwiD3Mm_0J2WAxUKi-EIHVeXGy8QnPAOegQIOhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiD3Mm_0J2WAxUKi-EIHVeXGy8QnPAOegQIOhAA",
    isLiked: false
  },
  {
    id: 90,
    title: "Fevicol Se Full Video Song Dabangg 2 (Official) ★ Kareena Kapoor ★ Salman Khan",
    artist: "Kareena Kapoor ★ Salman Khan",
    src: "songs/Fevicol Se Full Video Song Dabangg 2 (Official) ★ Kareena Kapoor ★ Salman Khan.mp3",
    imgSrc: "https://www.google.com/imgres?q=Fevicol%20Se%20Full%20Video%20Song%20Dabangg%202%20(Official)%20%E2%98%85%20Kareena%20Kapoor%20%E2%98%85%20Salman%20Khan&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FzE7Pwgl6sLA%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DzE7Pwgl6sLA&docid=48vli39JBYB9iM&tbnid=T5V4V4dm_WxMyM&vet=12ahUKEwj93N-CkqeWAxX1amwGHZgFGWkQnPAOegQIPBAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwj93N-CkqeWAxX1amwGHZgFGWkQnPAOegQIPBAA",
    isLiked: false
  },
  {
    id: 91,
    title: "Full Video_ YU KARKE_ Dabangg 3 _ Salman Khan, Sonakshi Sinha,Saiee Manjrekar_Payal Dev _Sajid Wajid [jWpGP8_aAVk]",
    artist: "Salman Khan, Sonakshi Sinha",
    src: "songs/Full Video_ YU KARKE_ Dabangg 3 _ Salman Khan, Sonakshi Sinha,Saiee Manjrekar_Payal Dev _Sajid Wajid [jWpGP8_aAVk].mp3",
    imgSrc: "https://www.google.com/imgres?q=Full%20Video_%20YU%20KARKE_%20Dabangg%203%20_%20Salman%20Khan%2C%20Sonakshi%20Sinha%2CSaiee%20Manjrekar_Payal%20Dev%20_Sajid%20Wajid%20%5BjWpGP8_aAVk%5D&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXYpu-J6M7Io%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLCqsCuoG1xGdPvP681qU24RCrXTWw&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXYpu-J6M7Io&docid=yYi6w5MwrttPoM&tbnid=xhdXD_0MTFYhQM&vet=12ahUKEwi42vSvkqeWAxXlTmwGHTfeNksQnPAOegQIRhAA..i&w=686&h=386&hcb=2&ved=2ahUKEwi42vSvkqeWAxXlTmwGHTfeNksQnPAOegQIRhAA",
    isLiked: false
  },
  {
    id: 92,
    title: "Munni Badnaam Hui Full Song Feat. Malaika Arora Dabangg Salman Khan",
    artist: "Salman Khan",
    src: "songs/Munni Badnaam Hui Full Song Feat. Malaika Arora Dabangg Salman Khan.mp3",
    imgSrc: "https://www.google.com/imgres?q=Munni%20Badnaam%20Hui%20Full%20Song%20Feat.%20Malaika%20Arora%20Dabangg%20Salman%20Khan&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJn5hsfbhWx4%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJn5hsfbhWx4&docid=XliHGTQY6oMG2M&tbnid=YdA9VAlmkGvEiM&vet=12ahUKEwjm8OuKk6eWAxUGSWwGHbb5OKQQnPAOegQIQRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjm8OuKk6eWAxUGSWwGHbb5OKQQnPAOegQIQRAA",
    isLiked: false
  },
  {
    id: 93,
    title: "Jumme Ki Raat Full Video Song  Salman Khan, Jacqueline Fernandez  Mika Singh  Himesh Reshammiya",
    artist: "Salman Khan",
    src: "songs/Jumme Ki Raat Full Video Song  Salman Khan, Jacqueline Fernandez  Mika Singh  Himesh Reshammiya.mp3",
    imgSrc: "https://www.google.com/imgres?q=Jumme%20Ki%20Raat%20Full%20Video%20Song%20%20Salman%20Khan%2C%20Jacqueline%20Fernandez%20%20Mika%20Singh%20%20Himesh%20Reshammiya&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fdv_Qjzca56k%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Ddv_Qjzca56k&docid=ygCl8wEnM-9cOM&tbnid=VgaSY8iMFtwbNM&vet=12ahUKEwjwweeE16eWAxXLUGwGHefYG1YQnPAOegQIHxAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjwweeE16eWAxXLUGwGHefYG1YQnPAOegQIHxAA",
    isLiked: false
  },
  {
    id: 94,
    title: "Je Jon Premer Bhab Jane Na Ankita Bhattacharyya Tithi Trending Bangla Folk Song Dance - DropsPlay (128k)",
    artist: "Ankita Bhattacharyya",
    src: "songs/Je Jon Premer Bhab Jane Na Ankita Bhattacharyya Tithi Trending Bangla Folk Song Dance - DropsPlay (128k).mp3",
    imgSrc: "https://www.google.com/imgres?q=Je%20Jon%20Premer%20Bhab%20Jane%20Na%20Ankita%20Bhattacharyya%20Tithi%20Trending%20Bangla%20Folk%20Song%20Dance%20-%20DropsPlay%20(128k)&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FWUqP3lmmcCI%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWUqP3lmmcCI&docid=igh5heUsUytEiM&tbnid=t0et6rzHv7UY3M&vet=12ahUKEwia0tza5KeWAxW0yTgGHckxJDYQnPAOegQIQRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwia0tza5KeWAxW0yTgGHckxJDYQnPAOegQIQRAA",
    isLiked: false
  },
  {
    id: 95,
    title: "Bondhu Bine Pran Bachena  Debolinaa Nandy  Ft. Neel  Bengali folk  Radharaman Dutta  Dance 2023",
    artist: "Debolinaa Nandy",
    src: "songs/Bondhu Bine Pran Bachena  Debolinaa Nandy  Ft. Neel  Bengali folk  Radharaman Dutta  Dance 2023.mp3",
    imgSrc: "https://www.google.com/imgres?q=Bondhu%20Bine%20Pran%20Bachena%20%20Debolinaa%20Nandy%20%20Ft.%20Neel%20%20Bengali%20folk%20%20Radharaman%20Dutta%20%20Dance%202023&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FGq8gO0now_s%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGq8gO0now_s&docid=sq8acyyfwpNH0M&tbnid=ivBjW4rJrL3O3M&vet=12ahUKEwiZ3Lax7qeWAxVOzDgGHTxjLIYQnPAOegQIPBAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiZ3Lax7qeWAxVOzDgGHTxjLIYQnPAOegQIPBAA",
    isLiked: false
  },
  {
    id: 96,
    title: "Shundori Komola (সনদর কমল)  Villain  Ankush, Mimi  Armaan, Antara  Subho JAM8 SVF Music",
    artist: "Ankush, Mimi",
    src: "songs/Shundori Komola (সনদর কমল)  Villain  Ankush, Mimi  Armaan, Antara  Subho JAM8 SVF Music.mp3",
    imgSrc: "https://www.google.com/imgres?q=Shundori%20Komola%20(%E0%A6%B8%E0%A6%A8%E0%A6%A6%E0%A6%B0%20%E0%A6%95%E0%A6%AE%E0%A6%B2)%20%20Villain%20%20Ankush%2C%20Mimi%20%20Armaan%2C%20Antara%20%20Subho%20JAM8%20SVF%20Music&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgwjWIawYyNs%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DgwjWIawYyNs&docid=eL7-Ny5FdLDdfM&tbnid=cCi94mR9mc8xeM&vet=12ahUKEwiKqfDH-6eWAxU9keEIHRgoBmwQnPAOegQIRhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiKqfDH-6eWAxU9keEIHRgoBmwQnPAOegQIRhAA",
    isLiked: false
  },
  {
    id: 97,
    title: "Kashmir Main Tu Kanyakumari(Lyrical)Chennai Express Shahrukh K, Deepika P,Sunidhi C,Arijit S,Neeti",
    artist: "Shahrukh K, Deepika P",
    src: "songs/Kashmir Main Tu Kanyakumari(Lyrical)Chennai Express Shahrukh K, Deepika P,Sunidhi C,Arijit S,Neeti.mp3",
    imgSrc: "https://www.google.com/imgres?q=Kashmir%20Main%20Tu%20Kanyakumari(Lyrical)Chennai%20Express%20Shahrukh%20K%2C%20Deepika%20P%2CSunidhi%20C%2CArijit%20S%2CNeeti&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FWxtJqyIyThU%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWxtJqyIyThU&docid=byh2HkNMo2n4EM&tbnid=Q9Pom19A4ZwUlM&vet=12ahUKEwiOqeHp-6eWAxW3kuEIHR7tMwYQnPAOegQIORAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiOqeHp-6eWAxW3kuEIHR7tMwYQnPAOegQIORAA",
    isLiked: false
  },
  {
    id: 98,
    title: "Fagunero Mohonaye 2.0  Antara Nandy  Ankita Nandy  Aviman Paul  New Bengali Folk Song 2024",
    artist: "Antara Nandy  Ankita Nandy",
    src: "songs/Fagunero Mohonaye 2.0  Antara Nandy  Ankita Nandy  Aviman Paul  New Bengali Folk Song 2024.mp3",
    imgSrc: "https://www.google.com/imgres?q=Fagunero%20Mohonaye%202.0%20Antara%20Nandy%20Ankita%20Nandy%20Aviman%20Paul%20New%20Bengali%20Folk%20Song%202024&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F47BOJY1sheQ%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D47BOJY1sheQ&docid=sbGL7mNYgM3YyM&tbnid=NTzoLbe2hIjvLM&vet=12ahUKEwiZ1a38uKqWAxUGieEIHXjED3kQnPAOegQIPRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiZ1a38uKqWAxUGieEIHXjED3kQnPAOegQIPRAA",
    isLiked: false
  },
  {
    id: 99,
    title: "Aj Shara Bela (Official Video )  Shreya Ghoshal  Bohurupi  Anupam Roy  Ritabhari C  Abir C",
    artist: "Shreya Ghoshal",
    src: "songs/Aj Shara Bela (Official Video )  Shreya Ghoshal  Bohurupi  Anupam Roy  Ritabhari C  Abir C.mp3",
    imgSrc: "https://www.google.com/imgres?q=Aj%20Shara%20Bela%20(Official%20Video%20)%20%20Shreya%20Ghoshal%20%20Bohurupi%20%20Anupam%20Roy%20%20Ritabhari%20C%20%20Abir%20C&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fh73K8pZFSwQ%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dh73K8pZFSwQ&docid=mv4EWx4wsHQx4M&tbnid=vStRQYba_uuVWM&vet=12ahUKEwjrk4-auqqWAxUKWHADHXBCECcQnPAOegQIRRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjrk4-auqqWAxUKWHADHXBCECcQnPAOegQIRRAA",
    isLiked: false
  },
  {
    id: 100,
    title: "A.R. Rahman - Tere Bina  Lyrical Song  Aishwarya Rai  Abhishek Bachchan  Guru  Gulzar",
    artist: "Aishwarya Rai  Abhishek Bachchan",
    src: "songs/A.R. Rahman - Tere Bina  Lyrical Song  Aishwarya Rai  Abhishek Bachchan  Guru  Gulzar.mp3",
    imgSrc: "https://www.google.com/imgres?q=A.R.%20Rahman%20-%20Tere%20Bina%20%20Lyrical%20Song%20%20Aishwarya%20Rai%20%20Abhishek%20Bachchan%20%20Guru%20%20Gulzar&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_mwqXnTEHSc%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_mwqXnTEHSc&docid=eE_JZeRsjQzZSM&tbnid=awDczBqcGrG24M&vet=12ahUKEwibg_jVuqqWAxXARmwGHbfcFdEQnPAOegQIPhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwibg_jVuqqWAxXARmwGHbfcFdEQnPAOegQIPhAA",
    isLiked: false
  },
  {
    id: 101,
    title: "Dakatiya Banshi ( Official Video )  Bohurupi  Shiboprosad  Koushani  New Bengali Movie Song 2024",
    artist: "Koushani",
    src: "songs/Dakatiya Banshi ( Official Video )  Bohurupi  Shiboprosad  Koushani  New Bengali Movie Song 2024.mp3",
    imgSrc: "https://www.google.com/imgres?q=Dakatiya%20Banshi%20(%20Official%20Video%20)%20%20Bohurupi%20%20Shiboprosad%20%20Koushani%20%20New%20Bengali%20Movie%20Song%202024&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwF9oo8dJ5t4%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwF9oo8dJ5t4&docid=7DIM5oZZzAariM&tbnid=XQ76hT8f-6diMM&vet=12ahUKEwj0qPS6u6qWAxVHmeEIHYYVK8sQnPAOegQIOhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwj0qPS6u6qWAxVHmeEIHYYVK8sQnPAOegQIOhAA",
    isLiked: false
  },
  {
    id: 102,
    title: "Tumpa  Official Video  Rest in পরম by Arijit Sorkar  Sayan,Sumana,Dipangshu  CONFUSED Picture",
    artist: "Arijit Sorkar  Sayan,Sumana,Dipangshu",
    src: "songs/Tumpa  Official Video  Rest in পরম by Arijit Sorkar  Sayan,Sumana,Dipangshu  CONFUSED Picture.mp3",
    imgSrc: "https://www.google.com/imgres?q=Tumpa%20%20Official%20Video%20%20Rest%20in%20%E0%A6%AA%E0%A6%B0%E0%A6%AE%20by%20Arijit%20Sorkar%20%20Sayan%2CSumana%2CDipangshu%20%20CONFUSED%20Picture&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Foh-btKnbTpY%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Doh-btKnbTpY&docid=N7z2a7xEIQhdmM&tbnid=PbdGeAGFKJ5T1M&vet=12ahUKEwiS69P-vKqWAxVVT2wGHVBRLPYQnPAOegQIQRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiS69P-vKqWAxVVT2wGHVBRLPYQnPAOegQIQRAA",
    isLiked: false
  },
  {
    id: 103,
    title: "First Class  Kalank  Varun Dhawan, Alia Bhatt, Kiara  Arijit Singh  Pritam Amitabh  Full Video",
    artist: "Alia Bhatt, Kiara  Arijit Singh  Pritam Amitabh",
    src: "songs/First Class  Kalank  Varun Dhawan, Alia Bhatt, Kiara  Arijit Singh  Pritam Amitabh  Full Video.mp3",
    imgSrc: "https://www.google.com/imgres?q=First%20Class%20Kalank%20Varun%20Dhawan%2C%20Alia%20Bhatt%2C%20Kiara%20Arijit%20Singh%20Pritam%20Amitabh%20Full%20Video&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F5LOIEqNLNuY%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLCm08ozt75_LfxYcbIxEDKvkaBT4A&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5LOIEqNLNuY&docid=UrAuv_kx0e5V0M&tbnid=1lA8CWLxpfwsVM&vet=12ahUKEwiFlMHp96uWAxVIlOEIHWz5ER0QnPAOegQIPRAA..i&w=686&h=386&hcb=2&ved=2ahUKEwiFlMHp96uWAxVIlOEIHWz5ER0QnPAOegQIPRAA",
    isLiked: false
  },
  {
    id: 104,
    title: "'Aaj Ki Party' FULL VIDEO Song - Mika Singh Pritam  Salman Khan, Kareena Kapoor  Bajrangi Bhaijaan",
    artist: "Salman Khan, Kareena Kapoor",
    src: "songs/'Aaj Ki Party' FULL VIDEO Song - Mika Singh Pritam  Salman Khan, Kareena Kapoor  Bajrangi Bhaijaan.mp3",
    imgSrc: "https://www.google.com/imgres?q=%27Aaj%20Ki%20Party%27%20FULL%20VIDEO%20Song%20-%20Mika%20Singh%20Pritam%20%20Salman%20Khan%2C%20Kareena%20Kapoor%20%20Bajrangi%20Bhaijaan&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fx4UjdNUjwoQ%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dx4UjdNUjwoQ&docid=GEchbgm5vAyNnM&tbnid=MKLpE_p_4fLDPM&vet=12ahUKEwiciuO2-KuWAxV5lOEIHRSOKoUQnPAOegQINhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiciuO2-KuWAxV5lOEIHRSOKoUQnPAOegQINhAA",
    isLiked: false
  },
  {
    id: 105,
    title: "Afghan Jalebi (Film Version) Lyrics  Phantom  Saif Ali Khan  Katrina Kaif  Pritam",
    artist: "Saif Ali Khan  Katrina Kaif",
    src: "songs/Afghan Jalebi (Film Version) Lyrics  Phantom  Saif Ali Khan  Katrina Kaif  Pritam.mp3",
    imgSrc: "https://www.google.com/imgres?q=Afghan%20Jalebi%20(Film%20Version)%20Lyrics%20%20Phantom%20%20Saif%20Ali%20Khan%20%20Katrina%20Kaif%20%20Pritam&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FuQ5JzXlioWQ%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DuQ5JzXlioWQ&docid=vosJSh0TCw2g3M&tbnid=5TdIZfJjaKY2lM&vet=12ahUKEwidq4Se-auWAxVHiuEIHbdwBxAQnPAOegQIPxAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwidq4Se-auWAxVHiuEIHbdwBxAQnPAOegQIPxAA",
    isLiked: false
  },
  {
    id: 106,
    title: "Bol Bachchan_ Chalao Na Naino Se (Lyrics)  Ajay Devgn, Asin  Himesh Reshammiya, Shreya Ghoshal",
    artist: "Ajay Devgn, Asin  Himesh Reshammiya, Shreya Ghoshal",
    src: "songs/Bol Bachchan_ Chalao Na Naino Se (Lyrics)  Ajay Devgn, Asin  Himesh Reshammiya, Shreya Ghoshal.mp3",
    imgSrc: "https://www.google.com/imgres?q=Bol%20Bachchan_%20Chalao%20Na%20Naino%20Se%20(Lyrics)%20%20Ajay%20Devgn%2C%20Asin%20%20Himesh%20Reshammiya%2C%20Shreya%20Ghoshal&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FqMYICPUKLf8%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqMYICPUKLf8&docid=1LM7TrsME51GbM&tbnid=4CK2CkyT-nnhwM&vet=12ahUKEwit-Yn2-auWAxXln2MGHX-zInkQnPAOegQIRhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwit-Yn2-auWAxXln2MGHX-zInkQnPAOegQIRhAA",
    isLiked: false
  },
  {
    id: 107,
    title: "Tomar Amar Prem  Jaaneman  Soham  Koel  Zubeen Garg  Jeet Gannguli  Raja Chanda",
    artist: "Soham  Koel  Zubeen Garg  Jeet Gannguli",
    src: "songs/Tomar Amar Prem  Jaaneman  Soham  Koel  Zubeen Garg  Jeet Gannguli  Raja Chanda.mp3",
    imgSrc: "https://www.google.com/imgres?q=Tomar%20Amar%20Prem%20%20Jaaneman%20%20Soham%20%20Koel%20%20Zubeen%20Garg%20%20Jeet%20Gannguli%20%20Raja%20Chanda&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fi-uhtKaVLB8%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Di-uhtKaVLB8&docid=YDG9cmaAiCsy6M&tbnid=l2qxzoh4aN7HAM&vet=12ahUKEwibp5L7-6uWAxXK7DgGHcNkEwsQnPAOegQIOhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwibp5L7-6uWAxXK7DgGHcNkEwsQnPAOegQIOhAA",
    isLiked: false
  },
  {
    id: 108,
    title: "Aaj Ki Raat  Stree 2  Tamannaah Bhatia  Sachin-Jigar  Madhubanti  Divya  Amitabh  15th August",
    artist: "Madhubanti  Divya  Amitabh",
    src: "songs/Aaj Ki Raat  Stree 2  Tamannaah Bhatia  Sachin-Jigar  Madhubanti  Divya  Amitabh  15th August.mp3",
    imgSrc: "https://www.google.com/imgres?q=Aaj%20Ki%20Raat%20Stree%202%20Tamannaah%20Bhatia%20Sachin-Jigar%20Madhubanti%20Divya%20Amitabh%2015th%20August&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Froz9sXFkTuE%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLBg91j7ebK5OK2dAO717BtCQTC03A&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Droz9sXFkTuE&docid=gGkX7s-rBS1cAM&tbnid=ecx-4nLwQno2pM&vet=12ahUKEwitgOTdiqyWAxWKmuEIHTnnG-YQnPAOegQINxAA..i&w=686&h=386&hcb=2&ved=2ahUKEwitgOTdiqyWAxWKmuEIHTnnG-YQnPAOegQINxAA",
    isLiked: false
  },
  {
    id: 109,
    title: "Uyi Amma - Azaad  Aaman Devgan, Rasha Thadani  Madhubanti Bagchi,Amit Trivedi,Amitabh Bhattacharya",
    artist: "Rasha Thadani  Madhubanti Bagchi,Amit Trivedi,Amitabh Bhattacharya",
    src: "songs/Uyi Amma - Azaad  Aaman Devgan, Rasha Thadani  Madhubanti Bagchi,Amit Trivedi,Amitabh Bhattacharya.mp3",
    imgSrc: "https://www.google.com/imgres?q=Uyi%20Amma%20-%20Azaad%20%20Aaman%20Devgan%2C%20Rasha%20Thadani%20%20Madhubanti%20Bagchi%2CAmit%20Trivedi%2CAmitabh%20Bhattacharya&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FFZLadzn5i6Q%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFZLadzn5i6Q&docid=9vMYy3PLqgQ29M&tbnid=BVtp5hv-XuMooM&vet=12ahUKEwjPutfAi6yWAxUBm-EIHR9vHZ4QnPAOegQIPxAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjPutfAi6yWAxUBm-EIHR9vHZ4QnPAOegQIPxAA",
    isLiked: false
  },
  {
    id: 110,
    title: "Full Song_ O SAKI SAKI  Batla House  Nora Fatehi, Tanishk B,Neha K,Tulsi K, B Praak,Vishal-Shekhar",
    artist: "Tanishk B,Neha K,Tulsi K, B Praak,Vishal-Shekhar",
    src: "songs/Full Song_ O SAKI SAKI  Batla House  Nora Fatehi, Tanishk B,Neha K,Tulsi K, B Praak,Vishal-Shekhar.mp3",
    imgSrc: "https://www.google.com/imgres?q=Full%20Song_%20O%20SAKI%20SAKI%20%20Batla%20House%20%20Nora%20Fatehi%2C%20Tanishk%20B%2CNeha%20K%2CTulsi%20K%2C%20B%20Praak%2CVishal-Shekhar&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_uUdJalMaF8%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_uUdJalMaF8&docid=4KkNZacicRs69M&tbnid=SA-gCGLIkw8YwM&vet=12ahUKEwiw78a0jKyWAxVDkuEIHR_oJucQnPAOegQIPRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiw78a0jKyWAxVDkuEIHR_oJucQnPAOegQIPRAA",
    isLiked: false
  },
  {
    id: 111,
    title: "DILBAR Full Song  Satyameva Jayate  John Abraham Nora Fatehi  Tanishk B Neha Kakkar Ikka Dhvani",
    artist: "John Abraham Nora Fatehi  Tanishk B Neha Kakkar Ikka Dhvani",
    src: "songs/DILBAR Full Song  Satyameva Jayate  John Abraham Nora Fatehi  Tanishk B Neha Kakkar Ikka Dhvani.mp3",
    imgSrc: "https://www.google.com/imgres?q=DILBAR%20Full%20Song%20%20Satyameva%20Jayate%20%20John%20Abraham%20Nora%20Fatehi%20%20Tanishk%20B%20Neha%20Kakkar%20Ikka%20Dhvani&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJFcgOboQZ08%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJFcgOboQZ08&docid=S9FWGkh9KH98yM&tbnid=y9oYD_EqYrVBSM&vet=12ahUKEwjdhvzujKyWAxXOm-EIHcGtMnAQnPAOegQIPhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjdhvzujKyWAxXOm-EIHcGtMnAQnPAOegQIPhAA",
    isLiked: false
  },
  {
    id: 112,
    title: "Manike (Full Video)_ Thank God  Nora,Sidharth Tanishk,Yohani,Jubin,Surya R Rashmi ViragBhushan K",
    artist: "Sidharth Tanishk,Yohani,Jubin,Surya R Rashmi ViragBhushan",
    src: "songs/Manike (Full Video)_ Thank God  Nora,Sidharth Tanishk,Yohani,Jubin,Surya R Rashmi ViragBhushan K.mp3",
    imgSrc: "https://www.google.com/imgres?q=Manike%20(Full%20Video)_%20Thank%20God%20%20Nora%2CSidharth%20Tanishk%2CYohani%2CJubin%2CSurya%20R%20Rashmi%20ViragBhushan%20K&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FP9Rx8Yvzb64%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLD7cfOe-XToCWBnZcLkJqYRIHexmg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DP9Rx8Yvzb64&docid=q3oRJXEWAk7IBM&tbnid=2odwWBYJg5k-TM&vet=12ahUKEwiL39aUjayWAxVWkeEIHbNNGfwQnPAOegQIRRAA..i&w=686&h=386&hcb=2&ved=2ahUKEwiL39aUjayWAxVWkeEIHbNNGfwQnPAOegQIRRAA",
    isLiked: false
  },
  {
    id: 113,
    title: "LAAL PARI (Song)_ Yo Yo Honey Singh  Sajid Nadiadwala  Tarun Mansukhani  Housefull 5 - 6th June",
    artist: "Sajid Nadiadwala  Tarun Mansukhani",
    src: "songs/LAAL PARI (Song)_ Yo Yo Honey Singh  Sajid Nadiadwala  Tarun Mansukhani  Housefull 5 - 6th June.mp3",
    imgSrc: "https://www.google.com/imgres?q=LAAL%20PARI%20(Song)_%20Yo%20Yo%20Honey%20Singh%20%20Sajid%20Nadiadwala%20%20Tarun%20Mansukhani%20%20Housefull%205%20-%206th%20June&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FrcPuG_PkAf8%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DrcPuG_PkAf8&docid=hhYqRED1Ckbn4M&tbnid=QJnSRPh-HRB2sM&vet=12ahUKEwjOrZybjqyWAxVJmuEIHXTLLFMQnPAOegQIOhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjOrZybjqyWAxVJmuEIHXTLLFMQnPAOegQIOhAA",
    isLiked: false
  },
  {
    id: 114,
    title: "Bom Diggy Diggy  (VIDEO)  Zack Knight  Jasmin Walia  Sonu Ke Titu Ki Sweety",
    artist: "Zack Knight  Jasmin Walia  Sonu Ke Titu Ki Sweety",
    src: "songs/Bom Diggy Diggy  (VIDEO)  Zack Knight  Jasmin Walia  Sonu Ke Titu Ki Sweety.mp3",
    imgSrc: "https://www.google.com/imgres?q=Bom%20Diggy%20Diggy%20%20(VIDEO)%20%20Zack%20Knight%20%20Jasmin%20Walia%20%20Sonu%20Ke%20Titu%20Ki%20Sweety&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FyIIGQB6EMAM%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyIIGQB6EMAM&docid=KMxcfHPnTbhL7M&tbnid=_r5RELb6G50DyM&vet=12ahUKEwiIrsiej6yWAxXHkeEIHdxcENAQnPAOegQIQxAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiIrsiej6yWAxXHkeEIHdxcENAQnPAOegQIQxAA",
    isLiked: false
  },
  {
    id: 115,
    title: "Nainowale Ne Full Video Song  Padmaavat  Deepika Padukone  Shahid Kapoor  Ranveer Singh",
    artist: "Deepika Padukone  Shahid Kapoor  Ranveer Singh",
    src: "songs/Nainowale Ne Full Video Song  Padmaavat  Deepika Padukone  Shahid Kapoor  Ranveer Singh.mp3",
    imgSrc: "https://www.google.com/imgres?q=Nainowale%20Ne%20Full%20Video%20Song%20%20Padmaavat%20%20Deepika%20Padukone%20%20Shahid%20Kapoor%20%20Ranveer%20Singh&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FxE9FBL7jUGA%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxE9FBL7jUGA&docid=UtHtuiTzcHbq7M&tbnid=1Rr9ltg2EErh8M&vet=12ahUKEwjt_ZurkKyWAxXxjeEIHTmWLYAQnPAOegQIPxAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjt_ZurkKyWAxXxjeEIHTmWLYAQnPAOegQIPxAA",
    isLiked: false
  },
  {
    id: 116,
    title: "Hangover Full Video Song  Kick  Salman Khan, Jacqueline Fernandez  Meet Bros Anjjan",
    artist: "Salman Khan, Jacqueline Fernandez  Meet Bros Anjjan",
    src: "songs/Hangover Full Video Song  Kick  Salman Khan, Jacqueline Fernandez  Meet Bros Anjjan.mp3",
    imgSrc: "https://www.google.com/imgres?q=Hangover%20Full%20Video%20Song%20%20Kick%20%20Salman%20Khan%2C%20Jacqueline%20Fernandez%20%20Meet%20Bros%20Anjjan&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F1gqBb4Y7LJA%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1gqBb4Y7LJA&docid=KH8BOpSM-WtFoM&tbnid=jmgoeGAJVCCTOM&vet=12ahUKEwjJz7OIkayWAxUhmeEIHcS9K5EQnPAOegQIPRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjJz7OIkayWAxUhmeEIHcS9K5EQnPAOegQIPRAA",
    isLiked: false
  },
  {
    id: 117,
    title: "Devil-Yaar Naa Miley FULL VIDEO SONG  Salman Khan  Yo Yo Honey Singh  Kick",
    artist: "Salman Khan",
    src: "songs/Devil-Yaar Naa Miley FULL VIDEO SONG  Salman Khan  Yo Yo Honey Singh  Kick.mp3",
    imgSrc: "https://www.google.com/imgres?q=Devil-Yaar%20Naa%20Miley%20FULL%20VIDEO%20SONG%20%20Salman%20Khan%20%20Yo%20Yo%20Honey%20Singh%20%20Kick&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FiMmKHLFZn10%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiMmKHLFZn10&docid=ZOmB26Sj1y-XvM&tbnid=ITvaTBgs3Js-wM&vet=12ahUKEwiFjbLckayWAxU3kuEIHUwtEsIQnPAOegQIPBAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiFjbLckayWAxU3kuEIHUwtEsIQnPAOegQIPBAA",
    isLiked: false
  },
    {
    id: 118,
    title: "Character Dheela - Video Song  Ready  Pritam  Neeraj Shridhar  Salman Khan, Zarine Khan",
    artist: "Neeraj Shridhar  Salman Khan",
    src: "songs/Character Dheela - Video Song  Ready  Pritam  Neeraj Shridhar  Salman Khan, Zarine Khan.mp3",
    imgSrc: "https://www.google.com/imgres?q=Character%20Dheela%20-%20Video%20Song%20%20Ready%20%20Pritam%20%20Neeraj%20Shridhar%20%20Salman%20Khan%2C%20Zarine%20Khan&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fp_0zsIyYs08%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dp_0zsIyYs08&docid=Vnt1tx0uqwWU5M&tbnid=qjiIG-k37QcnEM&vet=12ahUKEwjY3ofVkqyWAxUZiuEIHew_B94QnPAOegQIOBAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjY3ofVkqyWAxUZiuEIHew_B94QnPAOegQIOBAA",
    isLiked: false
  },
    {
    id: 119,
    title: "Dhinka Chika Full Video Song  Ready Feat. Salman Khan, Asin",
    artist: "Salman Khan, Asin",
    src: "songs/Dhinka Chika Full Video Song  Ready Feat. Salman Khan, Asin.mp3",
    imgSrc: "https://www.google.com/imgres?q=Dhinka%20Chika%20Full%20Video%20Song%20%20Ready%20Feat.%20Salman%20Khan%2C%20Asin&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fp6D8u6lEDjQ%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLA2OCgFVQTF8E5-2x-GtMqjf6H_-w&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dp6D8u6lEDjQ&docid=B0jbWKRDaFwRDM&tbnid=ACiwtAEDwolyFM&vet=12ahUKEwju4YuNk6yWAxU0muEIHRx1OtcQnPAOegQIPhAA..i&w=686&h=386&hcb=2&ved=2ahUKEwju4YuNk6yWAxU0muEIHRx1OtcQnPAOegQIPhAA",
    isLiked: false
  },
    {
    id: 120,
    title: "Sheila Ki Jawani Full Song  Tees Maar Khan  Katrina Kaif  Vishal Dadlani, Sunidhi Chauhan",
    artist: "Katrina Kaif  Vishal Dadlani",
    src: "songs/Sheila Ki Jawani Full Song  Tees Maar Khan  Katrina Kaif  Vishal Dadlani, Sunidhi Chauhan.mp3",
    imgSrc: "https://www.google.com/imgres?q=Sheila%20Ki%20Jawani%20Full%20Song%20Tees%20Maar%20Khan%20Katrina%20Kaif%20Vishal%20Dadlani%2C%20Sunidhi%20Chauhan&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZTmF2v59CtI%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZTmF2v59CtI&docid=cG24yN0pabt9NM&tbnid=N8eQ1b6J1ZLNCM&vet=12ahUKEwiYxayV4KyWAxX83jgGHXTANfwQnPAOegQIQRAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiYxayV4KyWAxX83jgGHXTANfwQnPAOegQIQRAA",
    isLiked: false
  },
    {
    id: 121,
    title: "Chikni Chameli Best Video - Agneepath  Katrina, Hrithik  Shreya  Ajay-Atul",
    artist: "Katrina, Hrithik  Shreya  Ajay-Atul",
    src: "songs/Chikni Chameli Best Video - Agneepath  Katrina, Hrithik  Shreya  Ajay-Atul.mp3",
    imgSrc: "https://www.google.com/imgres?q=Chikni%20Chameli%20Best%20Video%20-%20Agneepath%20%20Katrina%2C%20Hrithik%20%20Shreya%20%20Ajay-Atul&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FMQM7CNoAsBI%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DMQM7CNoAsBI&docid=Ovv5tFn8iSMSkM&tbnid=qrRjI_KKknCobM&vet=12ahUKEwj0wNfm4KyWAxVH1zgGHfs2ACgQnPAOegQIRBAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwj0wNfm4KyWAxVH1zgGHfs2ACgQnPAOegQIRBAA",
    isLiked: false
  },
    {
    id: 122,
    title: "Lyrical_ Chammak Challo  Ra One  ShahRukh Khan  Kareena Kapoor",
    artist: "ShahRukh Khan  Kareena Kapoor",
    src: "songs/Lyrical_ Chammak Challo  Ra One  ShahRukh Khan  Kareena Kapoor.mp3",
    imgSrc: "https://www.google.com/imgres?q=Lyrical_%20Chammak%20Challo%20%20Ra%20One%20%20ShahRukh%20Khan%20%20Kareena%20Kapoor&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FoAVhUAaVCVQ%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoAVhUAaVCVQ&docid=EXyCaAbkAQKV8M&tbnid=74LBDwmExN_i1M&vet=12ahUKEwjSrpi356yWAxV9TWwGHXLHCiwQnPAOegQIQhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjSrpi356yWAxV9TWwGHXLHCiwQnPAOegQIQhAA",
    isLiked: false
  },
    {
    id: 123,
    title: "Make Some Noise For Desi Boyz Title Song  Desi Boyz  Akshay Kumar, John Abraham Kumaar",
    artist: "Akshay Kumar, John Abraham Kumaar",
    src: "songs/Make Some Noise For Desi Boyz Title Song  Desi Boyz  Akshay Kumar, John Abraham Kumaar.mp3",
    imgSrc: "https://www.google.com/imgres?q=Make%20Some%20Noise%20For%20Desi%20Boyz%20Title%20Song%20%20Desi%20Boyz%20%20Akshay%20Kumar%2C%20John%20Abraham%20Kumaar&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FlyWHtKq1PcQ%2Fhqdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlyWHtKq1PcQ&docid=K9WMhFw8GzzhUM&tbnid=dKlclNA6kYhojM&vet=12ahUKEwieqIjS56yWAxVBkOEIHYHMLKIQnPAOegQINxAA..i&w=480&h=360&hcb=2&ved=2ahUKEwieqIjS56yWAxVBkOEIHYHMLKIQnPAOegQINxAA",
    isLiked: false
  },
    {
    id: 124,
    title: "Full Video_ Hookah Bar  Khiladi 786  Akshay Kumar & Asin  Himesh Reshammiya",
    artist: "Akshay Kumar & Asin  Himesh Reshammiya",
    src: "songs/Full Video_ Hookah Bar  Khiladi 786  Akshay Kumar & Asin  Himesh Reshammiya.mp3",
    imgSrc: "https://www.google.com/imgres?q=Full%20Video_%20Hookah%20Bar%20%20Khiladi%20786%20%20Akshay%20Kumar%20%26%20Asin%20%20Himesh%20Reshammiya&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fb4b1cMVZOUU%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Db4b1cMVZOUU&docid=VCGfjSnQnVJ-LM&tbnid=qt-Lb11CXucjFM&vet=12ahUKEwijjf7t56yWAxVKkOEIHbBpOfwQnPAOegQINhAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwijjf7t56yWAxVKkOEIHbBpOfwQnPAOegQINhAA",
    isLiked: false
  },
    {
    id: 125,
    title: "Kala Chashma  Baar Baar Dekho  Sidharth M Katrina K  Prem, Hardeep, Badshah, Kam, Neha, Indeep",
    artist: "Sidharth M Katrina K  Prem, Hardeep, Badshah, Kam, Neha, Indeep",
    src: "songs/Kala Chashma  Baar Baar Dekho  Sidharth M Katrina K  Prem, Hardeep, Badshah, Kam, Neha, Indeep.mp3",
    imgSrc: "https://www.google.com/imgres?q=Kala%20Chashma%20%20Baar%20Baar%20Dekho%20%20Sidharth%20M%20Katrina%20K%20%20Prem%2C%20Hardeep%2C%20Badshah%2C%20Kam%2C%20Neha%2C%20Indeep&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fk4yXQkG2s1E%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLAMOUaLY78wVP3mV8bU1wcfW-pElw&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dk4yXQkG2s1E&docid=zc_uhifcFlkTzM&tbnid=GXdVmAdqhjfMsM&vet=12ahUKEwiovrWO6KyWAxUCi-EIHViEIa8QnPAOegQIPhAA..i&w=686&h=386&hcb=2&ved=2ahUKEwiovrWO6KyWAxUCi-EIHViEIa8QnPAOegQIPhAA",
    isLiked: false
  },
    {
    id: 126,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
    {
    id: 127,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
    {
    id: 128,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
    {
    id: 129,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
    {
    id: 130,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
    {
    id: 131,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
    {
    id: 132,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
    {
    id: 133,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },

];
