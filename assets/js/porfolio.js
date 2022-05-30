'use strict';

const ipgeolocation = 'https://api.ipgeolocation.io/ipgeo?apiKey=50abb603bd464980ad313655b98c1400';

const timeouts = [];

const mobileAndTabletCheck = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

$(document).ready(() => {
  const links = [
    {
      name: 'Steam',
      link: 'https://steamcommunity.com/id/Max_GL/',
    },
    {
      name: 'Discord',
      link: 'https://discord.gg/PbqDrantsN',
    },
    {
      name: 'VK',
      link: 'https://vk.com/maxim_reiter',
    },
    {
      name: 'Send Mail',
      link: 'mailto:hyperconceptx@gmail.com',
    },
  ];

  for (let i in links) {
    let link = links[i];

    $('#marquee').append(`<a href="${link.link}" target="_BLANK">${link.name}</a>`);

    link = $('#marquee').children('a').last();

    if (i != links.length - 1) $('#marquee').append(' <i class="fa-solid fa-bug"></i> ');
  }

  if (mobileAndTabletCheck()) {
    $('#background').replaceWith('<div id="background" style="background-image: url(assets/images/mobile-background.jpg);"></div>');

    app.shouldIgnoreVideo = true;
  }

  app.titleChanger(['I SEE YOU', 'What are you doing here?']);
  app.iconChanger(['/assets/icons/ti/f1.jpg', '/assets/icons/ti/f2.jpg']);
});

if ($.cookie('videoTime')) {
  app.videoElement.currentTime = $.cookie('videoTime');
  app.audioElement.currentTime = $.cookie('videoTime');
}

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

document.body.onkeyup = (event) => {
  if (event.keyCode == 32 && app.skippedIntro) {
    if (app.backgroundToggler) {
      app.videoElement.play();
      app.audioElement.play();
    } else {
      app.videoElement.pause();
      app.audioElement.pause();
    }

    return (app.backgroundToggler = !app.backgroundToggler);
  }
};

$('html').on('contextmenu', (event) => {
  const img = document.createElement('img');

  const trollfaceLight = app.skippedIntro ? '' : 'trollface-light';

  img.src = 'assets/others/trollface.png';
  img.width = 64;
  img.height = 64;
  img.alt = 'SUCK';
  img.style = `position: absolute; left: ${event.pageX}px; top: ${event.pageY}px; z-index: 10;`;
  img.className = `troll ${trollfaceLight}`;

  document.body.appendChild(img);
});

setInterval(() => {
  $('.troll').remove();
}, 700);

$('.skip').click(() => {
  skipIntro();
});

$.fn.extend({
  animateCss: function (animationName) {
    const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    this.addClass(`animated ${animationName}`).one(animationEnd, () => {
      $(this).removeClass(`animated ${animationName}`);
    });

    return this;
  },
});

const writeLine = (text, speed, timeout, callback) => {
  timeout = typeof timeout === 'number' ? timeout : [0, (callback = timeout)];

  const lineNumber = app.id !== 3 ? ++app.id : (app.id += 2);

  // console.log (lineNumber);

  setTimeout(() => {
    const typed = new Typed(`#line${lineNumber}`, {
      strings: text,
      typeSpeed: speed,
      onComplete: callback,
    });
  }, timeout);
};

$.getJSON(ipgeolocation, (data) => {
  writeLine(['Authenticating...', "Granting access to <span style='color: #06d;'>[unknown]</span>..."], 30, () => {
    if (app.skippedIntro) return;

    clearCursor();

     writeLine([`И да.. Я буду дальше писать на английском. Так что.. `], 30, () => {
     if (app.skippedIntro) return;

     clearCursor();

    const usernames = ['user', 'dude'];

    const ip = data.ip ? data.ip : usernames[Math.floor(Math.random() * usernames.length)];
    const country = data.country_name ? data.country_name : 'your country';
    const city = data.city ? data.city : 'your city';

    writeLine([
      `Access granted! <span style='color: #0f0;'>[success]</span>`, `Welcome back, <i style='color: #0f0'>${ip}</i>! Good luck in <i style='color: #a230ff'>${country}</i>, <i style='color: #a230ff'>${city}</i>!`
              ], 30, 500, () => {
      if (app.skippedIntro) return;
      
      clearCursor();

        writeLine([`<i style='color: #F62459'>Young $$$</i>`], 120, 500, () => {
          timeouts.push(
          setTimeout(() => {
            if (app.skippedIntro) return;

            clearCursor();

            setTimeout(() => {
              skipIntro();
            }, 500);
          }, 1000)
          );
        });
      });
    });
  });
});

const skipIntro = () => {
  if (app.skippedIntro) return;

  app.skippedIntro = true;

  timeouts.forEach((timeout) => {
    clearTimeout(timeout);
  });

  $('.top-right').remove();

  $('.main-intro').fadeOut(100, () => {
    $('.main-intro').remove();

    $('#marquee').marquee({
      duration: 3500,
      gap: 320,
      delayBeforeStart: 1000,
      direction: 'left',
      duplicated: true,
    });

    setTimeout(() => {
      $('.Names').animateCss(app.effects[Math.floor(Math.random() * app.effects.length)]);
    }, 200);

    setTimeout(() => {
      const typed = new Typed('#brand', {
        strings: app.brandDescription,
        typeSpeed: 50,

        onComplete: () => {
          clearCursor();
        },
      });
    }, 1350);

    setTimeout(() => {
      if (!app.shouldIgnoreVideo) {
        app.videoElement.play();
        app.audioElement.play();
      }

      app.videoElement.addEventListener(
        'timeupdate',
        () => {
          $.cookie('videoTime', app.videoElement.currentTime, { expires: 1 });
        },
        false
      );

      $('.marquee-item').css('visibility', 'visible').hide().fadeIn(100);

      $('.marquee-item').animateCss('zoomIn');

      $('.main-content').fadeIn();

      $('.background').fadeIn(100, () => {
        if (!app.shouldIgnoreVideo) $('#audio').animate({ volume: app.musicVolume }, app.musicFadeIn);
      });
    }, 200);
  });
};

const clearCursor = () => {
  return $('span').siblings('.typed-cursor').css('opacity', '0');
};
