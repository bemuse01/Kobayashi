new Vue({
    el: '#wrap',
    data(){
        return{
            arr: {
                letter: main_method.createLetter()
            },
            play: false,
            delay: {
                offset: 200,
                point: (param.letter.offset + param.letter.step * 5 + param.letter.delay.tran) * 1000 + 1000,
                play: 1000
            }
        }
    },
    mounted(){
        this.init()
    },
    methods: {
        init(){
            this.playLetter()
            this.animate()
        },




        /* letter */
        playLetter(){
            setTimeout(() => {this.play = true}, this.delay.offset); 
        },
        executeLetter(){
            this.arr.letter.forEach((e, i) => {
                this.openChar(e, i)
                setTimeout(() => {this.closeChar(e)}, this.delay.point)
            })
            this.play = false
            setTimeout(() => {this.initChar()}, this.delay.point + this.delay.play);
        },
        openChar(e, i){
            e.style.point.transition = `opacity 0.1s ${param.letter.offset + param.letter.step * i}s, transform 0.2s ${param.letter.offset + param.letter.step * i}s cubic-bezier(0.22, 1.08, 0.3, .98)`
            e.style.point.opacity = '0'
            e.style.point.transform = 'rotateY(120deg) scaleY(2.5)'

            e.style.char.transition = `opacity 0.1s ${param.letter.offset + param.letter.step * i + param.letter.delay.op}s, transform 0.14s ${param.letter.offset + param.letter.step * i + param.letter.delay.tran}s cubic-bezier(0.24, 0.89, 0.72, 1.6)`
            e.style.char.opacity = '1'
            e.style.char.transform = 'rotateY(0deg) scaleY(1)'
        },
        closeChar(e){
            e.style.point.transition = '0.25s'
            e.style.point.opacity = '1'
            e.style.point.transform = 'rotateY(0deg) scaleY(1)'
            
            e.style.char.transition = '0.25s'
            e.style.char.opacity = '0'
            e.style.char.transform = 'rotateY(180deg) scaleY(0.1)'
        },
        initChar(){
            let char = this.getRandomChar()
            this.arr.letter.forEach((e, i)=> {e.text = char[i]})
            this.play = true
        },
        getRandomChar(){
            let key = point.key[Math.floor(Math.random() * point.key.length)]
            if(key === 'emot') return this.getRandomEmot()
            /* else if(key === 'word') return this.getRandomWord() */
            else /* if(key === 'shape') */ return this.getRandomShape()
        },
        getRandomEmot(){
            let face = point.emot.face[Math.floor(Math.random() * point.emot.face.length)],
                eye = point.emot.eye[Math.floor(Math.random() * point.emot.eye.length)],
                mouse = point.emot.mouse[Math.floor(Math.random() * point.emot.mouse.length)]
            return `${face[0]}${eye[0]}${mouse}${eye[1]}${face[1]}`
        },
        /* getRandomWord(){
            let chance = Math.random() > 0.5
            if(chance) return '.' + point.word.len4[Math.floor(Math.random() * point.word.len4.length)]
            else return point.word.len5[Math.floor(Math.random() * point.word.len5.length)]
        }, */
        getRandomShape(){
            let shape = point.shape[Math.floor(Math.random() * point.shape.length)], chance = Math.random > 0.5
            if(chance) return `${shape[0]}${shape[1]}${shape[0]}${shape[1]}${shape[0]}`
            else return `${shape[1]}${shape[0]}${shape[1]}${shape[0]}${shape[1]}`
        },



        render(){
            if(this.play) this.executeLetter()
        },
        animate(){
            this.render()
            requestAnimationFrame(this.animate)
        }
    }
})