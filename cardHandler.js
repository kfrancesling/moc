card_image_element = document.getElementById("flip-card-front-image")
suit_information_text_element = document.getElementById("suit-information-text")
value_information_text_element = document.getElementById("value-information-text")
information_image_element = document.getElementById("information-image")

function card(value, suit) {
    this.value = value,
    this.suit = suit
};

function deck() {
    deckOfCards = []
    suits = ['coins','hearts','tools','vessels']
    values = ['two','three','four','five','six','seven','eight','nine','ten','jack','queen','king','ace']
    for (suit of suits) {
        for (value of values) {
            deckOfCards.push(
                new card(value, suit)
            )
        }
    }
    deckOfCards.push(new card("joker", "coins"))
    deckOfCards.push(new card("joker", "hearts"))

    return deckOfCards
}

cardDeck = new deck();

function shuffle(deck) {
    randomCard = deck[Math.floor(Math.random() * deck.length)];
    return randomCard
}

function clickHandler() {
    randomCard = shuffle(cardDeck)
    cardValue = randomCard.value
    cardSuit = randomCard.suit
    console.log(cardSuit,cardValue)
    
    card_image_element.src = `cardimages/${cardValue}_${cardSuit}.jpg`

    information_image_element.src = `cardimages/${cardValue}_${cardSuit}.jpg`
    suit_information_text_element.innerHTML = descriptions.suits.find(
        obj => {
            return obj.suit == cardSuit
        }
    ).description
    value_information_text_element.innerHTML = descriptions.values.find(
        obj => {
            return obj.value == cardValue
        }
    ).description

    

}

document.getElementById("shuffle-button").addEventListener("click",clickHandler)