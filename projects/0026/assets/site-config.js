/**
 * 現場設定（大阪府東大阪市 鴻池新田 / 0026 大鉄工業）
 * 気象観測＋警報。天気帯の末尾に大鉄工業のロゴ。
 * 東大阪市内にアメダスはない。雨・気温・湿度・風・気圧は大阪（62078）。
 * 予報は大阪府（270000）。週間の最高気温も大阪（62078）。
 * WBGT は環境省の大阪（62078）。警報は東大阪市（2722700）。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '大鉄工業株式会社',
      rental: '',
      label: '東大阪市',
      address: '大阪府東大阪市鴻池新田',
      locationLabel: '東大阪市'
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
      forecastLabel: '東大阪市',
      warnArea: '270000',
      warnCity: '2722700',
      warnCityLabel: '東大阪市'
    },
    /* 鴻池新田駅付近（雨雲ナウキャスト用）。アメダスは大阪 */
    geo: { lat: 34.699, lon: 135.606 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: './assets/daitetsu_logo.png?v=20261123',
    logoAlt: '大鉄工業株式会社',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    logoCorpAlt: '',
    footLogoSrc: '',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
