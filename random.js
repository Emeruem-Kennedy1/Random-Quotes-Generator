function displayNew() {
    var quotes = {
        '~Oscar Wilde':'Be yourself everyone else is already taken.',
        '~Albert Einstein':'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
        '~Marcus Tullius Cicero':'A room without books is like a body without a soul.',
        '~Dr.Seuss':'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams',
        '~Mahatma Gandhi':'Be the change that you wish to see in the world.',
        '~J.K. Rowling':'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.',
        '~Eleanor Roosevelt':'No one can make you feel inferior without your consent.',
        '~Mark Twain':'If you tell the truth, you don\'t have to remember anything.',
        '~C.S. Lewis':'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .',
        '~Oscar Wilde':'Always forgive your enemies; nothing annoys them so much.',
        '~Eleanor Roosevelt':'If life were predictable it would cease to be life, and be without flavor.',
        '~James Cameron':'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
        '~Mother Teresa':'Spread love everywhere you go. Let no one ever come to you without leaving happier',
        '~Franklin D. Roosevelt':'When you reach the end of your rope, tie a knot in it and hang on.',
        '~Margaret Mead':'Always remember that you are absolutely unique. Just like everyone else.',
        '~Robert Louis Stevenson':'Don\'t judge each day by the harvest you reap but by the seeds that you plant.',
        '~Eleanor Roosevelt':'The future belongs to those who believe in the beauty of their dreams.',
        '~Benjamin Franklin':'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
        '~Ralph Waldo Emerson':'Do not go where the path may lead, go instead where there is no path and leave a trail.',
        '~Anne Frank':'Whoever is happy will make others happy too.',
        '~Abraham Lincoln':'In the end, it\'s not the years in your life that count. It\'s the life in your years.',
        '~Thomas A. Edison':'Many of life\'s failures are people who did not realize how close they were to success when they gave up.',
        '~Dr. Seuss':'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
        '~Eleanor Roosevelt':'If life were predictable it would cease to be life and be without flavor.',
        '~Maya Angelou':'You will face many defeats in life, but never let yourself be defeated.',
        '~Oscar Wilde':'Life is never fair, and perhaps it is a good thing for most of us that it is not',
        '~Tony Robbins':'The only impossible journey is the one you never begin.',
        '~Albert Einstein':'Only a life lived for others is a life worthwhile.',
        '~D. H. Lawrence':'Life is ours to be spent, not to be saved.',
        '~Robert A. Heinlein.':'Everything is theoretically impossible, until it is done.',
        '~Issac Newton':'If I have seen further it is by standing on the shoulders of Giants.',
        '~Nikola Tesla':'Our virtues and our failures are inseparable, like force and matter. When they separate, man is no more.',
        '~Anonymous':'Impossible only means that you haven’t found the solution yet.',
        '~Linus Pauling':'If you want to have good ideas, you must have many ideas.',
        '~Albert Einstein':'The important thing is to never stop questioning [or learning].',
        'Albert Einstein':'We cannot solve problems with the same thinking we used to create them.',
        '~Archimedes':'Give me a place to stand, and a lever long enough, and I will move the world. ',
        '~Archimedes':'Give me a lever long enough and a fulcrum on which to place it, and I shall move the world. ',
        '~Maya Angelou':'If you don’t like something, change it. If you can’t change it, change your attitude.',
        '~Maya Angelou':'You can’t use up creativity. The more you use, the more you have.',
        '~Maya Angelou':'There’s a world of difference between truth and facts. Facts can obscure the truth.'
        
    }
    var index = Math.floor(Math.random() * Object.keys(quotes).length);

    var quote = quotes[Object.keys(quotes)[index]]
    var author = Object.keys(quotes)[index]

    var _new = document.getElementById('quote');
    _new.innerHTML = quote
    var _auth = document.getElementById('author');
    _auth.innerHTML = author
}