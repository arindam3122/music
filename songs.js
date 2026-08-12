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
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
  {
    id: 15,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
  {
    id: 16,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
  {
    id: 17,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
  {
    id: 18,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
  {
    id: 19,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
  {
    id: 20,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
  {
    id: 21,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
  {
    id: 22,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  }
];