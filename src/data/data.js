const exchange = [
  {
    code: 'USD',
    value: 67.2,
    change: 1.27,
    exchangeName: 'moex'
  },
  {
    code: 'EUR',
    value: 77.3,
    change: 1.33,
    exchangeName: 'moex'
  },
  {
    code: 'Нефть',
    value: 64.7,
    change: -1.71,
  },
]

const news = [
  {
    title: 'Неймар: мы вылетели в несправедливой игре',
    newscreator: 'ria',
    link: '#'
  },
  {
    title: 'Минутные «всплески» физической активности снижают риск смерти',
    newscreator: 'meduza',
    link: '#',
  },
  {
    title: 'Греция пообещала помочь Европе стать независимой от газа из РФ',
    newscreator: 'ria',
    link: '#',
  },
  {
    title: 'Тренер сборной Хорватии назвал победу над бразильцами великой',
    newscreator: 'ria',
    link: '#',
  },
  {
    title: 'Топ-10 ненадежных кроссоверов, авторынок РФ заполонили «китайцы»',
    newscreator: 'autoru',
    link: '#',
  }
]

const visited = [
  {
    title: 'Недвижимость',
    content: 'О сталинках'
  },
  {
    title: 'Маркет',
    content: 'люстры и светильники'
  },
  {
    title: 'авто.ру',
    content: 'привод 4х4 до 500 000'
  },
]

const map = [
  {
    title: 'Расписания'
  }
]

const tv = [
  {
    time: '20:55',
    programName: 'TNT.Best',
    channelName: 'ТНТ International'
  },
  {
    time: '20:30',
    programName: 'EuroNews',
    channelName: 'Культура'
  },
  {
    time: '16:15',
    programName: 'Джимми Нейтрон',
    channelName: 'Nikelodion'
  },
]

const broadcast = [
  {
    title: 'Управление как исскуство',
    channelName: 'Успех'
  },
  {
    title: 'Ночь. Мир в это время',
    channelName: 'EarthTV'
  },
  {
    title: 'Андрей Возняк',
    channelName: 'Совершенно секретно'
  }
];

const weather = {
  actualTemperature: '+20',
  morningTemperature: '+15',
  dayTempareture: '+23'
}

const searchItems = [
  {
    item: 'Видео',
    link: '#'
  },
  {
    item: 'Картинки',
    link: '#'
  },
  {
    item: 'Новости',
    link: '#'
  },
  {
    item: 'Карты',
    link: '#'
  },
  {
    item: 'Переводчик',
    link: '#'
  },
  {
    item: 'Эфир',
    link: '#'
  },
  {
    item: 'Маркет',
    link: '#'
  },
  {
    item: 'еще',
    link: '#'
  },

]

export { exchange as exchangeData, news as newsData, visited as visitedData, map as mapData, tv as tvData, broadcast as broadcastData, weather as weatherData, searchItems as searchItemsData }
