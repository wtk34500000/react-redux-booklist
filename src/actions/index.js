export function selectBook(book){
    //selectbook is an AcitionCreateorm it needs to return an action,
    //an object with type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

