/**
 * 現場設定（京都府八幡市戸津水戸城301番地内 / 0019 大林組）
 * 気象観測＋警報。横スクロール末尾に大林組ロゴ1面。
 * 雨・気温・湿度・風・最高最低は京田辺（61326）。気圧は京田辺に無いため京都（61286）で補完する。
 * 予報の天気は京都府南部（260010）。週間の最高気温は気象庁が京都・舞鶴のみ発表するため、南部指定が外れたときは京都を使う。
 * WBGT は環境省の京田辺（61326）。無いときは京都（61286）。
 * 警報は八幡市。0011枚方の大林組とは別案件。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '大林組',
      rental: '',
      label: '八幡市',
      address: '京都府八幡市戸津水戸城301番地内',
      locationLabel: '八幡市'
    },
    moe: {
      gasUrl:
        'https://script.google.com/macros/s/AKfycbzSTsappgfJTaJruOBJsbnCXSTPkeTBp39CXpvoSZsPQ0mWGs4KjSonC8_eZ2b1EeUXTQ/exec',
      point: '61326',
      fallbackPoint: '61286',
      pointName: '京田辺',
      alertArea: '京都府',
      region: '06',
      prefecture: '61'
    },
    jma: {
      amedasPoint: '61326',
      amedasSupplementPoint: '61286',
      forecastArea: '260000',
      /* 八幡市は南部。短期予報は南部が先頭 */
      forecastWeatherArea: '260010',
      forecastLabel: '八幡市',
      warnArea: '260000',
      warnCity: '2621000',
      warnCityLabel: '八幡市'
    },
    /* 戸津水戸城（雨雲ナウキャスト用）。アメダス京田辺は北緯34度49.8分・東経135度45.6分 */
    geo: { lat: 34.860348, lon: 135.718216 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: './assets/obayashi_logo.jpg?v=20261106b',
    logoAlt: '大林組',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    footLogoSrc: './assets/obayashi_logo.jpg?v=20261106b',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
