// data.js
const placesData = [
  {
    id: "mir",
    title: "Мирский замок",
    region: "Гродненская",
    category: "Замки",
    lat: 53.4512,
    lng: 26.4731,
    desc: "Оборонительное укрепление XVI века, объект ЮНЕСКО.",
    image: "https://i.postimg.cc/65Ymfhj3/IMG-2565.jpg",
    link: "https://mirzamak.by/"
  },
  {
    id: "brest_fortress",
    title: "Брестская крепость",
    region: "Брестская",
    category: "Замки",
    lat: 52.0833,
    lng: 23.6550,
    desc: "Легендарный мемориальный комплекс, принявший на себя первые удары Великой Отечественной войны.",
    image: "https://i.postimg.cc/WzLb1VLF/IMG-2571.jpg",
    link: "https://www.brest-fortress.by/"
  },
  {
    id: "belovezhskaya_pushcha",
    title: "Беловежская пуща",
    region: "Брестская",
    category: "Природа",
    lat: 52.5539,
    lng: 23.8808,
    desc: "Древнейший реликтовый лес Европы, где обитают величественные зубры.",
    image: "https://i.postimg.cc/v8JGrbKW/IMG-2567.jpg",
    link: "https://npbp.by/"
  },
  {
    id: "hrodna_kolozha",
    title: "Коложская церковь",
    region: "Гродненская",
    category: "Храмы",
    lat: 53.6778,
    lng: 23.8244,
    desc: "Уникальный памятник древнерусского зодчества XII века с изящными вставками из цветных камней.",
    image: "https://i.postimg.cc/1t0rv9KL/IMG-2568.jpg",
    link: "https://kalozha.by/"
  },
  {
    id: "dzyarzhynsk_estate",
    title: "Усадьба Огинских (Залесье)",
    region: "Гродненская",
    category: "Усадьбы",
    lat: 54.4414,
    lng: 26.3311,
    desc: "Музыкальная резиденция известного композитора Михаила Клеофаса Огинского под названием «Северные Афины».",
    image: "https://i.postimg.cc/nhQ7dFVn/IMG-2569.jpg",
    link: "https://oginskizalesse.by/ru"
  },
  {
    id: "mir_sky_library",
    title: "Национальная библиотека Беларуси",
    region: "Минская",
    category: "Архитектура",
    lat: 53.9314,
    lng: 27.6461,
    desc: "Главное книгохранилище страны, выполненное в оригинальной форме многогранника-алмаза.",
    image: "https://i.postimg.cc/3rcdzscH/IMG-2570.png",
    link: "https://www.nlb.by/"
  },
  {
    id: "nesvizh_castle",
    title: "Несвижский замок",
    region: "Минская",
    category: "Замки",
    lat: 53.2228,
    lng: 26.6917,
    desc: "Величественный дворцово-парковый комплекс XVI века, бывшая резиденция князей Радзивиллов, объект ЮНЕСКО.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/%D0%97%D0%B0%D0%BC%D0%B0%D0%BA-%D0%BF%D0%B0%D0%BB%D0%B0%D1%86_%D1%83_%D0%9D%D1%8F%D1%81%D1%8C%D0%B2%D1%96%D0%B6%D1%8B_%D0%B7%D0%BD%D1%83%D1%82%D1%80%D1%8B.jpg/960px-%D0%97%D0%B0%D0%BC%D0%B0%D0%BA-%D0%BF%D0%B0%D0%BB%D0%B0%D1%86_%D1%83_%D0%9D%D1%8F%D1%81%D1%8C%D0%B2%D1%96%D0%B6%D1%8B_%D0%B7%D0%BD%D1%83%D1%82%D1%80%D1%8B.jpg",
    link: "https://niasvizh.by/"
  },
  {
    id: "polotsk_sofia",
    title: "Софийский собор в Полоцке",
    region: "Витебская",
    category: "Храмы",
    lat: 55.4864,
    lng: 28.7585,
    desc: "Древнейший храм Беларуси, возведенный в XI веке и перестроенный в стиле виленского барокко.",
    image: "https://i.ibb.co/RGMSs1BS/IMG-2696.webp",
    link: "https://polotsk.museum.by/"
  },
  {
    id: "gomel_palace",
    title: "Дворец Румянцевых и Паскевичей",
    region: "Гомельская",
    category: "Замки",
    lat: 52.4231,
    lng: 31.0164,
    desc: "Главная достопримечательность Гомеля — памятник архитектуры классицизма на живописном берегу Сожа.",
    image: "https://i.ibb.co/svc5tKHG/IMG-2694.jpg",
    link: "https://palacegomel.by/"
  },
  {
    id: "braslav_lakes",
    title: "Браславские озёра",
    region: "Витебская",
    category: "Природа",
    lat: 55.6425,
    lng: 27.0311,
    desc: "Уникальный природный озёрный край Беларуси с живописными ледниковыми ландшафтами.",
    image: "https://i.ibb.co/35L063H1/IMG-2695.jpg",
    link: "https://braslavpark.by/"
  },
  {
    id: "gervyaty_church",
    title: "Костёл Святой Троицы в Гервятах",
    region: "Гродненская",
    category: "Храмы",
    lat: 54.6872,
    lng: 26.1437,
    desc: "Монументальный неоготический храм рубежа XIX-XX веков, окружённый великолепным ландшафтным парком.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Church_of_the_Holy_Trinity_in_Gierviaty.jpg/960px-Church_of_the_Holy_Trinity_in_Gierviaty.jpg",
    link: "https://grodno.catholic.by/"
  },
  {
    id: "lida_castle",
    title: "Лидский замок",
    region: "Гродненская",
    category: "Замки",
    lat: 53.8872,
    lng: 25.3028,
    desc: "Мощная средневековая каменная крепость-кастель, заложенная великим князем Гедимином в 1323 году.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Belarus_Lida_Castle_%28256497035%29.jpeg/960px-Belarus_Lida_Castle_%28256497035%29.jpeg",
    link: "https://lixmuseum.by/ru/lidskij-zamok/"
  },
  {
    id: "khatyn_memorial",
    title: "Мемориальный комплекс «Хатынь»",
    region: "Минская",
    category: "Архитектура",
    lat: 54.3340,
    lng: 27.9436,
    desc: "Всемирно известный мемориальный архитектурный ансамбль в память о погибших жителях сожжённых деревень Беларуси.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Belarus%2C_Khatyn_%283942241697%29.jpg/960px-Belarus%2C_Khatyn_%283942241697%29.jpg",
    link: "https://khatyn.by/"
  },
  {
    id: "ruzhany_palace",
    title: "Ружанский дворцовый комплекс",
    region: "Брестская",
    category: "Замки",
    lat: 52.8608,
    lng: 24.8961,
    desc: "Грандиозная резиденция влиятельнейшего рода Сапег, некогда именовавшаяся «Белорусским Версалем».",
    image: "https://i.ibb.co/rf7zjvrF/IMG-2697.webp",
    link: "https://ruzhany.museum.by/"
  },
  {
    id: "buinichi_field",
    title: "Буйничское поле",
    region: "Могилевская",
    category: "Архитектура",
    lat: 53.8617,
    lng: 30.2561,
    desc: "Мемориальный комплекс с часовней и аллеей славы на месте героической обороны Могилёва в 1941 году.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/%D0%9C%D0%B5%D0%BC%D0%B0%D1%80%D1%8B%D1%8F%D0%BB_%D1%83_%D0%91%D1%83%D0%B9%D0%BD%D1%96%D1%87%D0%B0%D1%85_%2863%29.jpg/960px-%D0%9C%D0%B5%D0%BC%D0%B0%D1%80%D1%8B%D1%8F%D0%BB_%D1%83_%D0%91%D1%83%D0%B9%D0%BD%D1%96%D1%87%D0%B0%D1%85_%2863%29.jpg",
    link: "http://mogilevmuseum.by/"
  },
  {
    id: "mogilev_city_hall",
    title: "Могилёвская городская ратуша",
    region: "Могилевская",
    category: "Архитектура",
    lat: 53.8942,
    lng: 30.3308,
    desc: "Воссозданный архитектурный символ Могилёва эпохи Магдебургского права с 47-метровой башней.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/City_Hall%2C_Mahilo%C5%AD.jpg/960px-City_Hall%2C_Mahilo%C5%AD.jpg",
    link: "https://museumhm.by/ru/gorodskaja-ratusha/"
  },
  {
    id: "red_church_minsk",
    title: "Красный костёл в Минске",
    region: "Минская",
    category: "Храмы",
    lat: 53.8965,
    lng: 27.5475,
    desc: "Знаменитый неоготический костёл святых Симеона и Елены из красного кирпича на площади Независимости.",
    image: "https://i.ibb.co/wZSKvv6V/IMG-2698.jpg",
    link: "https://msj.by/katolicheskie-xramy/krasnyj-kostel-v-minske/"
  },
  {
    id: "kossovo_castle",
    title: "Коссовский замок",
    region: "Брестская",
    category: "Замки",
    lat: 52.7656,
    lng: 25.1228,
    desc: "Романтический неоготический дворец Пусловских, увенчанный 12 гранеными башнями.",
    image: "https://i.ibb.co/hRZxW6Dn/IMG-2693.webp",
    link: "https://zamok-kossovo.by/"
  },

 {
    id: "augustow_canal",
    title: "Августовский канал",
    region: "Гродненская",
    category: "Природа",
    lat: 53.8500,
    lng: 23.6500,
    desc: "Исторический судоходный канал XIX века с системой шлюзов, окружённый живописными лесами и водоёмами.",
    image: "https://i.postimg.cc/RVJ959K1/IMG-1697.jpg",
    link: "https://trofei.by/articles/stati-o-turizme/otdyh-na-avgustovskom-kanale"
  },

  {
    id: "hrodna_old_castle",
    title: "Гродненский Старый замок",
    region: "Гродненская",
    category: "Замки",
    lat: 53.6784,
    lng: 23.8258,
    desc: "Историческая королевская резиденция на берегу Немана, связанная с историей Великого княжества Литовского.",
    image: "https://i.postimg.cc/jjcYQjYK/IMG-1698.jpg",
    link: "https://grodno-oldcastle.museum.by/"
  },

  {
    id: "st_francis_xavier_church",
    title: "Костёл Святого Франциска Ксаверия",
    region: "Гродненская",
    category: "Храмы",
    lat: 53.6787,
    lng: 23.8295,
    desc: "Знаменитый барочный костёл XVII века в Гродно, известный богатым внутренним убранством и историческими часами.",
    image: "https://i.postimg.cc/P5nggDtC/IMG-1699.jpg",
    link: "https://katedra-grodno.by/"
  },

  {
    id: "strochitsy_museum",
    title: "Музей народной архитектуры и быта в Строчицах",
    region: "Минская",
    category: "Музеи",
    lat: 53.8400,
    lng: 27.4500,
    desc: "Музей под открытым небом, знакомящий с традиционным бытом белорусов, деревянными постройками, мельницами и старинными храмами.",
    image: "https://i.postimg.cc/T2z2PpdR/IMG-1700.webp",
    link: "https://ru.etna.by/"
  }
  
];
