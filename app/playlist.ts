export type Track = {
  id: string;
  title: string;
  artist: string;
  /** seconds */
  duration: number;
  cover: string;
  src: string;
};

// Slugs are used to look up /public/cover-<slug>.jpg and /public/audio-<slug>.mp3.
// Drop matching files into public/ — the player will pick them up automatically.
export const playlist: Track[] = [
  {
    id: "itna-na-mujhse",
    title: "Itna Na Mujhse Tu Pyaar Badha",
    artist: "Talat Mahmood, Lata Mangeshkar, Salil Chowdhury",
    duration: 258,
    cover: "/cover-itna-na-mujhse.jpg",
    src: "/audio-itna-na-mujhse.mp3",
  },
  {
    id: "pal-pal-dil-ke-paas",
    title: "Pal Pal Dil Ke Paas",
    artist: "Kishore Kumar",
    duration: 271,
    cover: "/cover-pal-pal-dil-ke-paas.jpg",
    src: "/audio-pal-pal-dil-ke-paas.mp3",
  },
  {
    id: "aa-chal-ke-tujhe",
    title: "Aa Chal Ke Tujhe",
    artist: "Kishore Kumar",
    duration: 264,
    cover: "/cover-aa-chal-ke-tujhe.jpg",
    src: "/audio-aa-chal-ke-tujhe.mp3",
  },
  {
    id: "hum-tere-pyaar-mein",
    title: "Hum Tere Pyaar Mein",
    artist: "Lata Mangeshkar",
    duration: 249,
    cover: "/cover-hum-tere-pyaar-mein.jpg",
    src: "/audio-hum-tere-pyaar-mein.mp3",
  },
  {
    id: "door-gagan-ki-chhaon-mein",
    title: "Aa Chalke Tujhe – Door Gagan Ki Chhaon Mein",
    artist: "Kishore Kumar",
    duration: 277,
    cover: "/cover-door-gagan-ki-chhaon-mein.jpg",
    src: "/audio-door-gagan-ki-chhaon-mein.mp3",
  },
  {
    id: "abhi-na-jao-chhod-kar",
    title: "Abhi Na Jao Chhod Kar",
    artist: "Asha Bhosle, Mohammed Rafi",
    duration: 312,
    cover: "/cover-abhi-na-jao-chhod-kar.jpg",
    src: "/audio-abhi-na-jao-chhod-kar.mp3",
  },
  {
    id: "jaane-woh-kaise-log-the",
    title: "Jaane Woh Kaise Log The",
    artist: "Hemant Kumar, S. D. Burman",
    duration: 233,
    cover: "/cover-jaane-woh-kaise-log-the.jpg",
    src: "/audio-jaane-woh-kaise-log-the.mp3",
  },
  {
    id: "chunnari-chunnari-lets-go",
    title: "Chunnari Chunnari – Let's Go!",
    artist: "Anu Malik, Akshay, IP, Jonita Gandhi, Asees",
    duration: 201,
    cover: "/cover-chunnari-chunnari-lets-go.jpg",
    src: "/audio-chunnari-chunnari-lets-go.mp3",
  },
  {
    id: "chunnari-chunnari",
    title: "Chunnari Chunnari",
    artist: "Anu Malik, Anuradha Sriram, Abhijeet, Sameer",
    duration: 296,
    cover: "/cover-chunnari-chunnari.jpg",
    src: "/audio-chunnari-chunnari.mp3",
  },
  {
    id: "in-ankhon-ki-masti",
    title: "In Ankhon Ki Masti",
    artist: "Asha Bhosle",
    duration: 245,
    cover: "/cover-in-ankhon-ki-masti.jpg",
    src: "/audio-in-ankhon-ki-masti.mp3",
  },
  {
    id: "thodi-der",
    title: "Thodi Der",
    artist: "Farhan Saeed, Shreya Ghoshal, Kumaar",
    duration: 268,
    cover: "/cover-thodi-der.jpg",
    src: "/audio-thodi-der.mp3",
  },
  {
    id: "rasputin",
    title: "Rasputin",
    artist: "Boney M.",
    duration: 259,
    cover: "/cover-rasputin.jpg",
    src: "/audio-rasputin.mp3",
  },
  {
    id: "barsaat",
    title: "Barsaat",
    artist: "Banjaare, Roni",
    duration: 214,
    cover: "/cover-barsaat.jpg",
    src: "/audio-barsaat.mp3",
  },
  {
    id: "tu-chahiye",
    title: "Tu Chahiye",
    artist: "Pritam, Atif Aslam, Amitabh Bhattacharya",
    duration: 283,
    cover: "/cover-tu-chahiye.jpg",
    src: "/audio-tu-chahiye.mp3",
  },
  {
    id: "zaalima",
    title: "Zaalima",
    artist: "Arijit Singh, Harshdeep Kaur",
    duration: 241,
    cover: "/cover-zaalima.jpg",
    src: "/audio-zaalima.mp3",
  },
  {
    id: "bandhu-2-0",
    title: "Bandhu 2.0",
    artist: "Pritam, Kavita Seth, Neeraj Shridhar, Irshad Kamil",
    duration: 227,
    cover: "/cover-bandhu-2-0.jpg",
    src: "/audio-bandhu-2-0.mp3",
  },
  {
    id: "dream-girl",
    title: "Dream Girl",
    artist: "Kishore Kumar, Laxmikant–Pyarelal",
    duration: 291,
    cover: "/cover-dream-girl.jpg",
    src: "/audio-dream-girl.mp3",
  },
];
