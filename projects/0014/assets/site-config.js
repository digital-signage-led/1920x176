/**
 * 現場設定（福岡県糟屋郡篠栗町若杉779-18 / 0014 神鋼環境ソリューション）
 * クリーンパークわかすぎ敷地内。次期ごみ処理施設建設工事。
 * 気象観測＋警報。横スクロール末尾に神鋼環境ソリューションロゴ1面。
 * 雨・気温・湿度・風は太宰府（82191）。気圧は福岡（82182）で補完する。
 * 予報の天気は福岡地方（400010）。週間の最高気温は福岡（82182）。
 * WBGT は環境省の太宰府（82191）。警報は篠栗町。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '株式会社神鋼環境ソリューション',
      rental: '次期ごみ処理施設建設工事',
      label: '篠栗町',
      address: '〒811-2411 福岡県糟屋郡篠栗町若杉779-18（クリーンパークわかすぎ敷地内）',
      locationLabel: '篠栗町'
    },
    moe: {
      gasUrl:
        'https://script.google.com/macros/s/AKfycbzSTsappgfJTaJruOBJsbnCXSTPkeTBp39CXpvoSZsPQ0mWGs4KjSonC8_eZ2b1EeUXTQ/exec',
      point: '82191',
      fallbackPoint: '82182',
      pointName: '太宰府',
      alertArea: '福岡県',
      region: '09',
      prefecture: '82'
    },
    jma: {
      amedasPoint: '82191',
      amedasSupplementPoint: '82182',
      forecastArea: '400000',
      /* 篠栗町は福岡地方。週間の最高気温は福岡地点のみ */
      forecastWeatherArea: '400010',
      forecastLabel: '篠栗町',
      warnArea: '400000',
      warnCity: '4034200',
      warnCityLabel: '篠栗町'
    },
    /* クリーンパークわかすぎ（雨雲ナウキャスト用）。アメダス太宰府は北緯33度29.8分・東経130度29.4分 */
    geo: { lat: 33.6063, lon: 130.517 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: './assets/kobelco_eco_logo.png?v=20261026',
    logoAlt: '株式会社神鋼環境ソリューション',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    footLogoSrc: './assets/kobelco_eco_logo.png?v=20261026',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
