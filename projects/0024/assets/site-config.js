/**
 * 現場設定（大阪府守口市 / 0024）
 * 気象観測＋警報。天気帯の末尾に大鉄工業と鴻池組のロゴ。
 * 守口市内にアメダスはない。雨・気温・湿度・風・気圧は大阪（62078）。
 * 予報は大阪府（270000）。週間の最高気温も大阪（62078）。
 * WBGT は環境省の大阪（62078）。警報は守口市（2720900）。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '',
      rental: '',
      label: '守口市',
      address: '大阪府守口市',
      locationLabel: '守口市'
    },
    moe: {
      gasUrl:
        'https://script.google.com/macros/s/AKfycbzSTsappgfJTaJruOBJsbnCXSTPkeTBp39CXpvoSZsPQ0mWGs4KjSonC8_eZ2b1EeUXTQ/exec',
      point: '62078',
      fallbackPoint: '',
      pointName: '大阪',
      alertArea: '大阪府',
      region: '06',
      prefecture: '62'
    },
    jma: {
      amedasPoint: '62078',
      amedasSupplementPoint: '',
      forecastArea: '270000',
      forecastWeatherArea: '270000',
      forecastTempPoint: '62078',
      forecastLabel: '守口市',
      warnArea: '270000',
      warnCity: '2720900',
      warnCityLabel: '守口市'
    },
    /* 守口市役所付近（雨雲ナウキャスト用）。アメダスは大阪 */
    geo: { lat: 34.7378, lon: 135.564 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: './assets/daitetsu_logo.png?v=20261116',
    logoAlt: '大鉄工業株式会社',
    logoPanelBg: '#ffffff',
    logoCorpSrc: './assets/konoike_logo.png?v=20261116',
    logoCorpAlt: '株式会社鴻池組',
    footLogoSrc: '',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
