/**
 * 現場設定（京都府宮津市 / 0017 鴻池組）
 * 気象観測＋警報。横スクロール末尾に鴻池組ロゴ1面。
 * 雨・気温・湿度・風・最高最低・瞬間風速は宮津（61076）。気圧は舞鶴（61111）で補完する。
 * 予報の天気は京都府北部（260020）。週間の最高気温は気象庁が京都・舞鶴のみ発表する。
 * WBGT は環境省の宮津（61076）。警報は宮津市。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '株式会社鴻池組',
      rental: '',
      label: '宮津市',
      address: '京都府宮津市',
      locationLabel: '宮津市'
    },
    moe: {
      gasUrl:
        'https://script.google.com/macros/s/AKfycbzSTsappgfJTaJruOBJsbnCXSTPkeTBp39CXpvoSZsPQ0mWGs4KjSonC8_eZ2b1EeUXTQ/exec',
      point: '61076',
      fallbackPoint: '61111',
      pointName: '宮津',
      alertArea: '京都府',
      region: '06',
      prefecture: '61'
    },
    jma: {
      amedasPoint: '61076',
      amedasSupplementPoint: '61111',
      forecastArea: '260000',
      /* 宮津市は北部。短期予報は南部が先頭 */
      forecastWeatherArea: '260020',
      forecastLabel: '宮津市',
      warnArea: '260000',
      warnCity: '2620500',
      warnCityLabel: '宮津市'
    },
    /* 宮津市（雨雲ナウキャスト用）。アメダス宮津は北緯35度33.0分・東経135度14.1分 */
    geo: { lat: 35.535557, lon: 135.195557 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: './assets/konoike_logo.png?v=20261104',
    logoAlt: '株式会社鴻池組',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    footLogoSrc: './assets/konoike_logo.png?v=20261104',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
