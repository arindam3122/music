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
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
    {
    id: 8,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  },
  {
    id: 9,
    title: "",
    artist: "",
    src: "",
    imgSrc: "",
    isLiked: false
  }
];