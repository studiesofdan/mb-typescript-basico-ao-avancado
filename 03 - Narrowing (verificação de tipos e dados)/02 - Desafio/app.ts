type Review = boolean | number

function review(review: Review) {
    if(!review) {
        console.log('Review não definido!')
        return
    }
    
    console.log(`Nota do review: ${review}`)
}

review(false)
review(1)
review(2)