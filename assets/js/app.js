class _app {
    id = 0;
    videoElement = null;
    audioElement = null;
    musicVolume = 0.12;
    musicFadeIn = 4000;
    skippedIntro = false;
    backgroundToggler = false;
    shouldIgnoreVideo = false;
    effects = ['flash', 'pulse', 'bounce', 'swing', 'tada', 'rubberBand', 'shake', 'wobble', 'jello'];
    brandDescription = ['11 years old kids team', 'pro dota2 players', 'trashtalkers', 'esoterik fanboys', '1 vs 1 mid ?', 'Мать жива можете не проверять', 'SSS rank ghoul'];
  
    titleChanger = (text, delay) => {
      if (!text) return;
  
      delay = delay || 2000;
  
      let counter = 0;
  
      setInterval(() => {
        if (counter < text.length) document.title = text[counter++];
        else document.title = text[(counter = 0)];
      }, delay);
    };
  
    iconChanger = (urls, delay) => {
      if (!urls) return;
  
      delay = delay || 2000;
  
      let counter = 0;
  
      setInterval(() => {
        if (counter < urls.length) {
          const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  
          link.type = 'image/x-icon';
          link.rel = 'shortcut icon';
          link.href = urls[counter];
  
          document.getElementsByTagName('head')[0].appendChild(link);
        } else counter = 0;
  
        ++counter;
      }, delay);
    };
  }
  
  const app = new _app();
  