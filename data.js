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
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Modern_photos_of_Cathedral_of_Saint_Sophia_in_Polotsk.jpg/960px-Modern_photos_of_Cathedral_of_Saint_Sophia_in_Polotsk.jpg",
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
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/%D0%9F%D0%B0%D0%BB%D0%B0%D1%86%D0%B0%D0%B2%D0%B0-%D0%BF%D0%B0%D1%80%D0%BA%D0%B0%D0%B2%D1%8B_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D1%9E_%D0%93%D0%BE%D0%BC%D0%B5%D0%BB%D1%96._%D0%A4%D0%B0%D1%81%D0%B0%D0%B4_%D0%BF%D0%B0%D0%BB%D0%B0%D1%86%D0%B0.jpg/960px-%D0%9F%D0%B0%D0%BB%D0%B0%D1%86%D0%B0%D0%B2%D0%B0-%D0%BF%D0%B0%D1%80%D0%BA%D0%B0%D0%B2%D1%8B_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D1%9E_%D0%93%D0%BE%D0%BC%D0%B5%D0%BB%D1%96._%D0%A4%D0%B0%D1%81%D0%B0%D0%B4_%D0%BF%D0%B0%D0%BB%D0%B0%D1%86%D0%B0.jpg",
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
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Naviata_Lake_in_Brasla%C5%AD_-_panoramio.jpg/960px-Naviata_Lake_in_Brasla%C5%AD_-_panoramio.jpg",
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
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/%D0%A0%D1%83%D0%B6%D0%B0%D0%BD%D1%8B_Ru%C5%BEany_%282021%29_03.jpg/960px-%D0%A0%D1%83%D0%B6%D0%B0%D0%BD%D1%8B_Ru%C5%BEany_%282021%29_03.jpg",
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
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BB_%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD%D0%B0_%D0%B8_%D0%90%D0%BB%D0%B5%D0%BD%D1%8B_3.jpg/960px-%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BB_%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD%D0%B0_%D0%B8_%D0%90%D0%BB%D0%B5%D0%BD%D1%8B_3.jpg",
    link: "https://msj.by/katolicheskie-xramy/krasnyj-kostel-v-minske/"
  }
];
