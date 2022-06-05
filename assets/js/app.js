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
  brandDescription = ['20 years old', 'pro dota2 player', 'trashtalkers', 'esoterik fanboys', 'hack vs hack team', 'A Russian creator in love with Germany'];

  titleChanger = (text, delay = 2000) => {
    if (!text) return;

    let counter = 0;

    setInterval(() => {
      if (counter < text.length) document.title = text[counter++];
      else document.title = text[(counter = 0)];
    }, delay);
  };


  iconChanger = (urls, delay = 2000) => {
    if (!urls) return;

    let counter = 0;

    setInterval(() => {
      if (counter < urls.length) {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');

        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = urls[counter];

        document.getElementsByTagName('head')[0].appendChild(link);

        ++counter;
      } else counter = 0;
    }, delay);

  };
}

const app = new _app();
