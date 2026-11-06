/**
 * 現場設定（兵庫県神崎郡市川町浅野地内 / 0021 カナデビア）
 * 神崎郡新ごみ処理施設。気象観測＋警報。横スクロール末尾にカナデビアロゴ1面。
 * 雨・気温・湿度・風・最高最低・瞬間風速は福崎（63321）。気圧は姫路（63383）で補完する。
 * 予報の天気は兵庫県南部（280010）。週間の最高気温は気象庁が神戸・豊岡のみ発表する。
 * WBGT は環境省の福崎（63321）。警報は市川町。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: 'カナデビア',
      rental: '神崎郡新ごみ処理施設',
      label: '市川町',
      address: '兵庫県神崎郡市川町浅野地内',
      locationLabel: '市川町'
    },
    moe: {
      gasUrl:
        'https://script.google.com/macros/s/AKfycbzSTsappgfJTaJruOBJsbnCXSTPkeTBp39CXpvoSZsPQ0mWGs4KjSonC8_eZ2b1EeUXTQ/exec',
      point: '63321',
      fallbackPoint: '63383',
      pointName: '福崎',
      alertArea: '兵庫県',
      region: '06',
      prefecture: '63'
    },
    jma: {
      amedasPoint: '63321',
      amedasSupplementPoint: '63383',
      forecastArea: '280000',
      /* 市川町は南部（播磨北西部）。短期予報は南部・北部のみ */
      forecastWeatherArea: '280010',
      forecastLabel: '市川町',
      warnArea: '280000',
      warnCity: '2844200',
      warnCityLabel: '市川町'
    },
    /* 市川町浅野（雨雲ナウキャスト用）。アメダス福崎は北緯34度57.0分・東経134度44.9分 */
    geo: { lat: 35.006438, lon: 134.769452 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: './assets/kanadevia_logo.jpg?v=20261106',
    logoAlt: 'カナデビア',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    footLogoSrc: './assets/kanadevia_logo.jpg?v=20261106',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
