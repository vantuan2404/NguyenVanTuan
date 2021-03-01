$(window).on('load',()=>{
    setTimeout(()=>{
        $('.loaderPage .rota').addClass('run');
    },1600)
    setTimeout(()=>{
        $('.loaderPage').addClass('hide-loader');
    },2200)
})