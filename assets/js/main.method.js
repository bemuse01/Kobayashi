const main_method = {
    createLetter(){
        let src = ['(', '^', 'o', '^', ')']
        return src.map((e, i) => ({
            id: i, 
            text: e,
            style: {
                point: {
                    transition: `0.25s`,
                    transform: 'rotateY(0deg) scaleY(1)',
                    opacity: '1'
                },
                char: {
                    transition: `0.25s`,
                    transform: 'rotateY(180deg) scaleY(0.1)',
                    opacity: '0'
                }
            }
        }))
    }
}