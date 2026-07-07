/* ===== STUB local dos SDKs (GameDistribution/Azerion/MSN) — build de ESTUDO =====
   Substitui os SDKs externos por implementacoes locais que resolvem sem anuncio. */
(function(){
  "use strict";
  // config esperada pelo plugin Azerion
  window._azerionIntegration = window._azerionIntegration || {
    gdId: "local-study", advType: "local", gmoEnabled:false, p:undefined, alxType:"none"
  };
  // SDK de integracao: metodos no-op que resolvem promessas
  function ok(){ return Promise.resolve(); }
  window._azerionIntegrationSDK = window._azerionIntegrationSDK || {
    init: ok, ready: ok,
    showAd: ok, showRewarded: function(){ return Promise.resolve({rewarded:true}); },
    preloadAd: ok, showBanner: ok, hideBanner: ok,
    happytime: function(){}, gameplayStart: function(){}, gameplayStop: function(){},
    saveData: function(k,v){ try{localStorage.setItem("gd_"+k, typeof v==="string"?v:JSON.stringify(v));}catch(e){} return ok(); },
    loadData: function(k){ try{var v=localStorage.getItem("gd_"+k); return Promise.resolve(v);}catch(e){ return Promise.resolve(null);} },
    setAudioEnabled: function(){}, getAudioEnabled: function(){return true;},
    on: function(){}, off: function(){}, emit: function(){}
  };
  // branding helper referenciado no plugin
  window.h5branding = window.h5branding || { Hosts:{ isWhitelistedSite:function(){return false;} } };
  // MSN msstart SDK stub
  window.msstart = window.msstart || {
    init: ok, ready: ok,
    getInterstitialAdAsync: function(){ return Promise.resolve({showAsync:ok}); },
    getRewardedAdAsync: function(){ return Promise.resolve({showAsync:function(){return Promise.resolve({rewarded:true});}}); },
    startGameAsync: ok, gameplayStartAsync: ok, gameplayStopAsync: ok
  };
  // GD classico (gdsdk) por seguranca
  window.GD_OPTIONS = window.GD_OPTIONS || {};
  window.gdsdk = window.gdsdk || { showAd: ok, preloadAd: ok, openConsole: function(){} };
  console.log("[stub] SDKs locais carregados (build de estudo)");
})();
