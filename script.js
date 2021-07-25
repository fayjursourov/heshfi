// const section2card__animation = anime({
//   targets: '.section2__card',
//   keyframes: [{translateX: anime.stagger(10, {direction: 'reverse'}),translateY: anime.stagger(200, {direction: 'reverse'})}, {translateX: anime.stagger(0, {direction: 'reverse'}),translateY: anime.stagger(0, {direction: 'reverse'})}],
//   duration: 1000,
//   easing: 'easeOutCubic'
// })
//$("#dfyn__privacy").load('/assets/docs/dfyn-privacy.html');
const section2cardInitial = () => {
  $('#section2__card1').css('transform', 'translate(50px,200px)')
  $('#section2__card2').css('transform', 'translate(35px,150px)')
  $('#section2__card3').css('transform', 'translate(25px,100px)')
  $('#section2__card4').css('transform', 'translate(5px,50px)')
}

section2cardInitial()

const section2cardFinal = () => {
  $('#section2__card1').css('transform', 'translate(0px,0px)')
  $('#section2__card2').css('transform', 'translate(0px,0px)')
  $('#section2__card3').css('transform', 'translate(0px,0px)')
  $('#section2__card4').css('transform', 'translate(0px,0px)')
}

const section3cardInitial = () => {
  $('.section3__card1').css('transform', 'translateX(500px)')
  $('.section3__card2').css('transform', 'translate(100px)')
}

$(window).width() >= 1100 && section3cardInitial()

const section3cardFinal = () => {
  $('.section3__card1').css('transform', 'translateX(0px)')
  $('.section3__card2').css('transform', 'translate(0px)')
}


const dfynworkscardInitial = () => {
  $('.dfyn__works').css('opacity', '0')
  $('.dfynworks__heading').css('opacity', '0')
  $('.dfynworks__content').css('opacity', '0')
}
const dfynworkscardFinal = () => {
  $('.dfyn__works').css('opacity', '1')
  $('.dfynworks__heading').css('opacity', '1')
  $('.dfynworks__content').css('opacity', '1')
}

$(window).width() >= 1100 && dfynworkscardInitial()

$(window).width() >= 1100 && $('.partners').css('opacity', '0')

$(document).ready(function () {
  $('.dfynvector__symbol1').addClass('hidden').fadeIn(1500).removeClass('hidden');
  $('.dfynvector__symbol2').addClass('hidden').fadeIn(1500).removeClass('hidden');
  $('.dfynvector__symbol3').addClass('hidden').fadeIn(1500).removeClass('hidden');
  $('#pagepiling').pagepiling({
    direction: 'horizontal',
    menu: '#menu',
    verticalCentered: true,
    scrollingSpeed: 700,
    easing: 'swing',
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
    sectionsColor: [],
    navigation: null,
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.section',
    animateAnchor: false,
    onLeave: function (index, nextIndex, direction) {},

    afterLoad: function (anchorLink, index) {

      if (index === 1) {
        $(".section__1").css({
          opacity: '1'
        });
        $('#left__arrow').css({
          opacity: '0'
        });
      } else {
        $(".section__1").css({
          opacity: '0'
        });
        $('#left__arrow').css({
          opacity: '1'
        });
      }

      if (index === 2) {
        section2cardFinal()
        $("#section__2").css({
          opacity: '1',
          transform: 'scale(1)'
        });
      } else {
        $("#section__2").css({
          opacity: '0',
          transform: 'scale(0.9)'
        });
      }

      if (index === 3) {
        $('#section3').css({
          opacity: '1'
        })
        section3cardFinal()
      } else {
        $('#section3').css({
          opacity: '0'
        })
      }

      if (index === 4) {
        $('.section__4').css({
          opacity: '1'
        })
        $('#dfyn__backdrop2').css({
          opacity: '0.4'
        })
        dfynworkscardFinal()
      } else {
        $('.section__4').css({
          opacity: '0'
        })
        $('#dfyn__backdrop2').css({
          opacity: '0'
        })

      }

      if (index === 5) {
        $('.section__5').css({
          opacity: '1'
        })
        $('#dfyn__backdrop3').css({
          opacity: '0.4'
        })
      } else {
        $('.section__5').css({
          opacity: '0'
        })
        $('#dfyn__backdrop3').css({
          opacity: '0'
        })
      }

      if (index === 6) {
        $('.section__6').css({
          opacity: '1'
        })
        $('#dfyn__backdrop4').css({
          opacity: '0.4'
        })
      } else {
        $('.section__6').css({
          opacity: '0'
        })
        $('#dfyn__backdrop4').css({
          opacity: '0'
        })
      }

      if (index === 7) {
        $('.section__7').css({
          opacity: '1'
        })
        $('#dfyn__backdrop5').css({
          opacity: '0.4'
        })
      } else {
        $('.section__7').css({
          opacity: '0'
        })
        $('#dfyn__backdrop5').css({
          opacity: '0'
        })
      }

      if (index === 8) {
        $('.section__8').css({
          opacity: '1'
        })
        $('#right__arrow').css({
          opacity: '0'
        });
        //$('#dfyn__backdrop6').css({opacity:'0.4'}) 
        $('.partners').css('opacity', '1')
      } else {
        $('.section__8').css({
          opacity: '0'
        })
        $('#right__arrow').css({
          opacity: '1'
        });
        //$('#dfyn__backdrop6').css({opacity:'0'}) 
      }

      if (index === 1 || index === 2 || index === 3) {
        $('#dfyn__backdrop2').css({
          opacity: '0'
        })

      } else {
        $('#dfyn__backdrop2').css({
          opacity: '0.4'
        })
      }

      if (index >= 7) {
        $('.ticker').css('display', 'none')
      } else {
        $('.ticker').css('display', 'flex')
      }

    },

    afterRender: function () {},
  });

});

$('#header__logo').click(() => $.fn.pagepiling.moveTo('page1'));
$('#header__aboutdfyn').click(() => $.fn.pagepiling.moveTo('page2'));
$('#header__involved').click(() => $.fn.pagepiling.moveTo('page6'));
$('#header__roadmap').click(() => $.fn.pagepiling.moveTo('page5'));
$('#header__partners').click(() => $.fn.pagepiling.moveTo('page8'));
$('#header__docs').click(() => window.open(''));
$('#header__litepaper').click(() => window.open(''));
$('#left__arrow').click(() => $.fn.pagepiling.moveSectionUp());
$('#right__arrow').click(() => {
  $.fn.pagepiling.moveSectionDown()
});



$('#dfyn__front3').hover(() => $('#dfyn__front2').toggleClass('dfyn__hover'))

const insertDfynMark = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 10; j++) {
      $('#dfyn__repeat1').append(`<img id='dfyn_mark${i}' class='dfynrepeat__img' style='z-index:-1;width:5rem;' src="assets/vectors/dfyn-mark.svg"/>`)
      //$(`#dfyn_mark${i}`).css('transform',`scale(0.0${j})`)
    }
  }
}

// $(window).width()<1100 && insertDfynMark()

//$('.dfynrepeat__img').hover(() => {$(this).attr('src','/assets/vectors/dfyn-mark-onhover.svg')})

for (let i = 0; i < 10; i++) {
  $('#dfyn__repeat').append(`<img id='dfyn_mark${i}' style='z-index:-1;transform:translate(-50px,40px);' src="assets/logos/logo-dark.png"/>`)
}

for (let i = 0; i < 10; i++) {
  $('#dfyn__repeat').append(`<img id='dfyn_mark1${i}' style='z-index:-1;transform:translate(0px,0px);' src="assets/logos/logo-dark.png"/>`)
}

for (let i = 0; i < 10; i++) {
  $('#dfyn__repeat').append(`<img id='dfyn_mark2${i}' style='z-index:-1;transform:translate(-50px,-20px);' src="assets/logos/logo-dark.png"/>`)
}

for (let i = 0; i < 10; i++) {
  $('#dfyn__repeat').append(`<img id='dfyn_mark3${i}' style='z-index:-1;transform:translate(0px,-50px);' src="assets/logos/logo-dark.png"/>`)
}

for (let i = 0; i < 10; i++) {
  $('#dfyn__repeat').append(`<img id='dfyn_mark4${i}' style='z-index:-1;transform:translate(-50px,-80px);' src="assets/logos/logo-dark.png"/>`)
}

for (let i = 0; i < 10; i++) {
  $('#dfyn__repeat').append(`<img id='dfyn_mark5${i}' style='z-index:-1;transform:translate(0px,-100px);' src="assets/logos/logo-dark.png"/>`)
}



//$('#dfyn_mark0').attr('src','/assets/vectors/dfyn-mark.svg')
//$('#dfyn_mark0').attr('src','/assets/vectors/dfyn-mark-onhover.svg')

setInterval(() => {
  let maximum = 59
  let minimum = 0
  let randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

  $(`#dfyn_mark${randomnumber}`).attr('src', 'assets/logos/logo-light.png')

  setTimeout(() => $(`#dfyn_mark${randomnumber}`).attr('src', 'assets/logos/logo-dark.png'), 900)

}, 900)

const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()

const q = Math.ceil(month / 3)

const activateQuater = () => {
  $(`#y${year}q${q}`).addClass('quatercard__active')
  $(`#y${year}q${q}t`).addClass('quatercardtitle__active')
  $(`#y${year}q${q}d`).addClass('dotlinedot__active')
  $(`#y${year}q${q}l`).addClass('dotlineline__active')
  $(`#y${year}q${q}l`).addClass('dotlineline__active')
  $(window).width() < 1100 && $(`#my${year}q${q}`).addClass('mquater__active mquater__activeshadow')
}

activateQuater()

const deactivateQuater = () => {
  $(`#y${year}q${q}`).removeClass('quatercard__active')
  $(`#y${year}q${q}t`).removeClass('quatercardtitle__active')
  $(`#y${year}q${q}d`).removeClass('dotlinedot__active')
  $(`#y${year}q${q}l`).removeClass('dotlineline__active')
}

$('.quater__card').hover(
  function () {
    deactivateQuater()
    const id = $(this).attr('id')
    if (id.search('2020') !== -1) {
      $(`#y2020`).addClass('roadmapyear__active')
      $(`#y2021`).removeClass('roadmapyear__active')
    }
    $(`#${id}`).addClass('quatercard__active')
    $(`#${id}t`).addClass('quatercardtitle__active')
    $(`#${id}d`).addClass('dotlinedot__active')
    $(`#${id}l`).addClass('dotlineline__active')
  },
  function () {
    const id = $(this).attr('id')
    if (id.search('2020') !== -1) {
      $(`#y2020`).removeClass('roadmapyear__active')
      $(`#y2021`).addClass('roadmapyear__active')
    }
    $(`#${id}`).removeClass('quatercard__active')
    $(`#${id}t`).removeClass('quatercardtitle__active')
    $(`#${id}d`).removeClass('dotlinedot__active')
    $(`#${id}l`).removeClass('dotlineline__active')
    activateQuater()
  }
)
$(`#y${year}`).addClass('roadmapyear__active')
$(`#my${year}`).addClass('roadmapyear__active')
$(`#my${year}`).addClass('roadmapyear__active')

$('.my2020quaters').css('display', 'none')

$('#my2020').click(() => {
  $('.my2020quaters').css('display', 'flex')
  $('.my2021quaters').css('display', 'none')
  $(`#my2020`).addClass('roadmapyear__active')
  $(`#my2021`).removeClass('roadmapyear__active')
  $(window).width() < 1100 && $(`#my${year}q${q}`).addClass('mquater__active mquater__activeshadow')
})
$('#my2021').click(() => {
  $('.my2020quaters').css('display', 'none')
  $('.my2021quaters').css('display', 'flex')
  $(`#my2020`).removeClass('roadmapyear__active')
  $(`#my2021`).addClass('roadmapyear__active')
  $(window).width() < 1100 && $(`#my${year}q${q}`).addClass('mquater__active mquater__activeshadow')
})

$("#header__telegram").hover(function () {
    $(this).attr("src", 'assets/icons/telegram-white.svg').css('width', '28px');
  },
  function () {
    $(this).attr("src", 'assets/icons/telegram-white.svg').css('width', '24px');
  }
)

$("#header__github").hover(function () {
    $(this).attr("src", 'assets/icons/github-white.svg').css('width', '28px');
  },
  function () {
    $(this).attr("src", 'assets/icons/github-white.svg').css('width', '24px');
  }
)

$("#header__twitter").hover(function () {
    $(this).attr("src", 'assets/icons/twitter-white.svg').css('width', '28px');
  },
  function () {
    $(this).attr("src", 'assets/icons/twitter-white.svg').css('width', '28px');
  }
)

$("#header__medium").hover(function () {
    $(this).attr("src", 'assets/icons/medium-white.svg').css('width', '28px');
  },
  function () {
    $(this).attr("src", 'assets/icons/medium-white.svg').css('width', '24px')
  }
)

$("#header__analytics").hover(function () {
    $(this).attr("src", 'assets/icons/analytics.svg').css('width', '28px');
  },
  function () {
    $(this).attr("src", 'assets/icons/analytics.svg').css('width', '24px')
  }
)

$('.start__farming').click(() => window.open('#'))

const contact = () => location.href = ''

$('.contact').click(contact)



// Click function for show the Modal
$(function () {
  $.get("assets/docs/dfyn-privacy.html", function (data) {
    $("#dfyn__privacy").append('');
    $("#dfyn__privacy").append(data);
  });
});

$(function () {
  $.get("assets/docs/dfyn-terms.html", function (data) {
    $("#dfyn__terms").append('');
    $("#dfyn__terms").append(data);
  });
});

$(".show__privacymodal").on("click", function () {
  $(".mask__privacy").addClass("active");
});
$(".show__termsmodal").on("click", function () {
  $(".mask__terms").addClass("active");
});

// Function for close the Modal
function reloadStylesheets() {
  var queryString = '?reload=' + new Date().getTime();
  $('link[rel="stylesheet"]').each(function () {
    this.href = this.href.replace(/\?.*|$/, queryString);
  });
}

function closeModal() {
  $(".mask__privacy").removeClass("active");
  $(".mask__terms").removeClass("active");
}

// Call the closeModal function on the clicks/keyboard

$(".close__modal, .mask__privacy, .mask__terms").on("click", function () {
  closeModal();
});

$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});

const getBlock = async (timestamp) => {
  try {
    const result = await axios.post(
      "https://api.thegraph.com/subgraphs/name/ord786/matic-blocks", {
        query: `
        {
          
            blocks(
              first: 1
              orderBy: timestamp
              orderDirection: asc
              where: { timestamp_gt: ${timestamp}, timestamp_lt: ${timestamp + 600} }
            ) {
              id
              number
              timestamp
            }
         
      }
        `
      }
    );
    return result?.data?.data?.blocks?.[0]
  } catch (error) {
    console.error(error);
  }
};

const getDfynFeed = async () => {
  try {
    const result = await axios.post(
      "https://api.thegraph.com/subgraphs/name/ss-sonic/dfyn-v4", {
        query: `
        {
            uniswapFactories{
                id
                pairCount
                totalVolumeUSD
                totalVolumeETH
                untrackedVolumeUSD
                totalLiquidityUSD
                totalLiquidityETH
                txCount
              }
      }
        `,
      }
    );

    return result.data.data.uniswapFactories[0];
  } catch (error) {
    console.error(error);
  }
};

const getOneDayFeed = async (block) => {
  try {
    const result = await axios.post(
      "https://api.thegraph.com/subgraphs/name/ss-sonic/dfyn-v4", {
        query: `
        {
          uniswapFactories(
              ${block ? `block: { number: ${block}}` : ``} 
              where: { id: "${"0xE7Fb3e833eFE5F9c441105EB65Ef8b261266423B"}" }) {
               id
               totalVolumeUSD
               totalVolumeETH
               txCount
               pairCount
               totalLiquidityUSD
             }
      }
        `,
      }
    );

    return result.data.data.uniswapFactories[0];
  } catch (error) {
    console.error(error);
  }
};

const updateFeed = async () => {
  const {
    totalLiquidityUSD,
    totalVolumeUSD
  } = await getDfynFeed();

  const utcOneDayBack = Math.floor((new Date()).getTime() / 1000) - 86400

  const {
    number
  } = await getBlock(utcOneDayBack)

  const {
    totalVolumeUSD: pastVolume,
    totalLiquidityUSD: pastLiquidity
  } = await getOneDayFeed(number)


  const oneDayVolumeUSD = totalVolumeUSD - pastVolume;

  //console.log(`24hrs Volume USD ${oneDayVolumeUSD} | Total Liquidity ${totalLiquidityUSD}`);

  const utc2DayBack = Math.floor((new Date()).getTime() / 1000) - (86400 + 86400)

  const {
    number: number2D
  } = await getBlock(utc2DayBack)

  const {
    totalVolumeUSD: past2DVolume
  } = await getOneDayFeed(number2D)

  const past2DVolumeUSD = pastVolume - past2DVolume;

  const changeInVolume = oneDayVolumeUSD - past2DVolumeUSD
  const changeInLiquidity = totalLiquidityUSD - pastLiquidity;

  //console.log(numeral(totalVolumeUSD).format(), numeral(pastVolume).format(), numeral(past2DVolume).format())
  //console.log(past2DVolumeUSD,changeInLiquidity*100/totalLiquidityUSD)
  //console.log(changeInVolume*100/past2DVolumeUSD,changeInLiquidity*100/pastLiquidity)

  const liquidityPercent = changeInLiquidity * 100 / pastLiquidity
  const volumePercent = changeInVolume * 100 / past2DVolumeUSD

  //liquidity__value
  //liquidity__percent
  //volume__value
  //volume__percent

  $('.liquidity__value').html(`$${numeral(totalLiquidityUSD).format()}`)
  $('.liquidity__percent').addClass(`${(liquidityPercent>=0)?'profit__sign':'loss__sign'}`)
  $('.liquidity__percent').html(`${(liquidityPercent>=0)?'+':''}${liquidityPercent.toFixed(2)}%`)
  $('.volume__value').html(`$${numeral(oneDayVolumeUSD).format()}`)
  $('.volume__percent').addClass(`${(volumePercent>=0)?'profit__sign':'loss__sign'}`)
  $('.volume__percent').html(`${(volumePercent>=0)?'+':''}${volumePercent.toFixed(2)}%`)
};

setInterval(() => updateFeed(), 5000);

// oneDayVolumeUSD
// volumeChangeUSD
// liquidityChangeUSD

//News Ticker

//Ticker

const news = [
    "<a class='ticker__links' href='https://galaxyfarm.routerprotocol.com/' target='_blank'>Galaxyfarm </a>is LIVE now!!"
];

for (let i = 0; i < news.length; i++) {
    $("#ticker__content p").append(
        news[i] 
    )
}

//setTimeout(() => $(".mask__prestaking").addClass("active"),2000) 

$('.close__prestakingmodal').on("click", () =>$(".mask__prestaking").removeClass("active"))
$('.prestaking__button').on("click", () =>window.open(''))