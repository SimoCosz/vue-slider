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

  created: function(){
    this.autoSlide();
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
    },
    thumbClick: function(){
      this.currentSlide == index
    },
    autoSlide: function(){
      this.intervallo = setInterval(this.next, 1000) 
    },
    stopSlide: function(){
      clearInterval(this.intervallo)
    },
  },
})


// const clock = setInterval (nome funzione,3000)
// clearInterval(clock)