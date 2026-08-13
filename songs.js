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
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
  {
    id: 91,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
  {
    id: 92,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
  {
    id: 93,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },

];