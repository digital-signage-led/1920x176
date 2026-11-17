/**
 * 現場設定（愛知県小牧市 / 0025 浅沼組）
 * 気象観測＋警報。天気帯の末尾に淺沼組ロゴ。
 * 小牧市内にアメダスはない。雨・気温・湿度・風・気圧は名古屋（51106）。
 * 一宮（51011）の方が近いが雨だけなので使わない。
 * 予報の天気は愛知県西部（230010）。週間の最高気温は名古屋（51106）。
 * WBGT は環境省の名古屋（51106）。警報は小牧市（2321900）。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '株式会社浅沼組',
      rental: '',
      label: '小牧市',
      address: '愛知県小牧市',
      locationLabel: '小牧市'
    },
    moe: {
      gasUrl:
        'https://script.google.com/macros/s/AKfycbzSTsappgfJTaJruOBJsbnCXSTPkeTBp39CXpvoSZsPQ0mWGs4KjSonC8_eZ2b1EeUXTQ/exec',
      point: '51106',
      fallbackPoint: '',
      pointName: '名古屋',
      alertArea: '愛知県',
      region: '05',
      prefecture: '51'
    },
    jma: {
      amedasPoint: '51106',
      amedasSupplementPoint: '',
      forecastArea: '230000',
      forecastWeatherArea: '230010',
      forecastTempPoint: '51106',
      forecastLabel: '小牧市',
      warnArea: '230000',
      warnCity: '2321900',
      warnCityLabel: '小牧市'
    },
    /* 小牧市役所付近（雨雲ナウキャスト用）。アメダスは名古屋 */
    geo: { lat: 35.291, lon: 136.912 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: './assets/asanuma_logo.svg?v=20261117',
    logoAlt: '株式会社淺沼組',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    logoCorpAlt: '',
    footLogoSrc: '',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
