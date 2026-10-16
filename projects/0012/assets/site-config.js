/**
 * 現場設定（京都府舞鶴市上福井117番地 / 0012 志摩機械）
 * 気象観測＋警報。横スクロール末尾に志摩機械ロゴ1面。
 * 雨・気温・湿度・風・気圧は舞鶴特別地域気象観測所（61111）。気圧の補完は不要。
 * 予報の天気は京都府北部（260020）。週間の最高気温は気象庁が京都地点のみ発表する。
 * WBGT は環境省の舞鶴（61111）。警報は舞鶴市。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '志摩機械株式会社',
      rental: '',
      label: '舞鶴市',
      address: '京都府舞鶴市上福井117番地',
      locationLabel: '舞鶴市'
    },
    moe: {
      gasUrl:
        'https://script.google.com/macros/s/AKfycbzSTsappgfJTaJruOBJsbnCXSTPkeTBp39CXpvoSZsPQ0mWGs4KjSonC8_eZ2b1EeUXTQ/exec',
      point: '61111',
      fallbackPoint: '',
      pointName: '舞鶴',
      alertArea: '京都府',
      region: '06',
      prefecture: '61'
    },
    jma: {
      amedasPoint: '61111',
      amedasSupplementPoint: '',
      forecastArea: '260000',
      /* 短期予報は南部が先頭。舞鶴は北部を使う */
      forecastWeatherArea: '260020',
      forecastLabel: '舞鶴市',
      warnArea: '260000',
      warnCity: '2620200',
      warnCityLabel: '舞鶴市'
    },
    /* 上福井117（雨雲ナウキャスト用）。アメダス舞鶴は北緯35度27.0分・東経135度19.0分 */
    geo: { lat: 35.445427, lon: 135.299683 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: './assets/shima_kikai_logo.png?v=20261016',
    logoAlt: '志摩機械株式会社',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    footLogoSrc: './assets/shima_kikai_logo.png?v=20261016',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
