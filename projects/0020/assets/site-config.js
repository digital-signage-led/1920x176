/**
 * 現場設定（兵庫県相生市 IHI相生工場内 / 0020）
 * 気象観測＋警報。ロゴは未設定。
 * 雨・気温・湿度・風・最高最低・瞬間風速は上郡（63366）。気圧は上郡に無いため姫路（63383）で補完する。
 * 相生市の天気予報は兵庫県南部（280010）。播磨南西部の天気コードは予報JSONに無い。
 * 週間の最高気温は神戸（63518）と豊岡のみ。南部のときは神戸を使う。
 * WBGT は環境省の上郡（63366）。無いときは姫路（63383）。
 * 警報は相生市。詳細住所は未確認。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '株式会社IHI',
      rental: '',
      label: '相生市',
      address: '兵庫県相生市 IHI相生工場内（詳細住所未確認）',
      locationLabel: '相生市'
    },
    moe: {
      gasUrl:
        'https://script.google.com/macros/s/AKfycbzSTsappgfJTaJruOBJsbnCXSTPkeTBp39CXpvoSZsPQ0mWGs4KjSonC8_eZ2b1EeUXTQ/exec',
      point: '63366',
      fallbackPoint: '63383',
      pointName: '上郡',
      alertArea: '兵庫県',
      region: '06',
      prefecture: '63'
    },
    jma: {
      amedasPoint: '63366',
      amedasSupplementPoint: '63383',
      forecastArea: '280000',
      /* 相生市は南部。短期予報は南部が先頭 */
      forecastWeatherArea: '280010',
      /* 週間最高気温。南部代表は神戸 */
      forecastTempPoint: '63518',
      forecastLabel: '相生市',
      warnArea: '280000',
      warnCity: '2820800',
      warnCityLabel: '相生市'
    },
    /* IHI相生工場付近（雨雲ナウキャスト用）。詳細住所は未確認 */
    geo: { lat: 34.788158, lon: 134.455657 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: '',
    logoAlt: '',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    footLogoSrc: '',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
