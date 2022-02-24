const section = new Vue({
  el: 'section',

  data:{

    currentSlide: 0,

    slide: [
      {
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
        image: 'img/01.jpg',
      },
      {
        title: 'Svizzera',
        description: 'Lorem ipsum',
        image: 'img/02.jpg',
      },
      {
        title: 'Gran Bretagna',
        description:   'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        image: 'img/03.jpg',
      },
      {
        title: 'Germania',
        description:   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
        image: 'img/04.jpg',
      },
      {
        title: 'Paradise',
        description:   'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
        image: 'img/05.jpg',
      },
    ]
  },

  methods:{
    prev: function(){
      if (this.currentSlide !==0){
        this.currentSlide --
      } else {
        this.currentSlide = this.slide.length -1
      }

    },
    next: function(){
      if (this.currentSlide !== this.slide.length -1){
        this.currentSlide ++
      } else {
        this.currentSlide = 0
      }
    }
  }
})




// // CONTROLLO SLIDE

// const itemImage = [...document.getElementsByClassName('item')]
// itemImage[currentIndex].classList.add('active')

// prev.addEventListener('click', function(){
//   itemImage[currentIndex].classList.remove('active')
//   itemControl[currentIndex].classList.remove('active')

//   if( currentIndex > 0){
//     currentIndex--
//     itemImage[currentIndex].classList.add('active')
//     itemControl[currentIndex].classList.add('active')
//   } else {
//     currentIndex = slide.length - 1
//   }
//   itemImage[currentIndex].classList.add('active')
//   itemControl[currentIndex].classList.add('active')
  
// })

// next.addEventListener('click', function(){
//   itemImage[currentIndex].classList.remove('active')
//   itemControl[currentIndex].classList.remove('active')
  
//   if (currentIndex < slide.length - 1){
//     currentIndex++
//     itemImage[currentIndex].classList.add('active')
//     itemControl[currentIndex].classList.add('active')
//   } else {
//     currentIndex = 0
//   }
//   itemImage[currentIndex].classList.add('active')
//   itemControl[currentIndex].classList.add('active')
// })

// // ELEMENTO ANTEPRIMA
// const itemControl = [...document.getElementsByClassName('image')]
// itemControl[currentIndex].classList.add('active')