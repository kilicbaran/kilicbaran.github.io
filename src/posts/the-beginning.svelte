<blockquote>And the story begins.</blockquote>

<p>
    I wanted to develop my first program when I was going to high school and
    learning English and German. One of the efficient ways of expanding your
    vocabulary is using flashcards. You write one word on one side of the card
    and its meaning or translation on the other side of it. Then, you have to
    guess the meaning or the translation.
</p>

<p>
    As time goes by, you do not need to go through some words because you start
    to know them by heart. Therefore, you need to remove some cards from your
    deck. It was then that I came up with the idea. Why not assign the
    flashcards some rank and study them directly proportional to their rank? You
    will study the new words over and over. As you learn the words, their rank
    will decrease, and you will go over them occasionally.
</p>

<blockquote>Flashcards with RANKS!</blockquote>

<p>
    But this is not possible to do in real life. It needs to be automated. I
    needed a program. However, I did not know how to develop a program. So, I
    asked about it to my search engine, and the answer was that I needed to
    learn a programming language. My next question was: "But, which one?". The
    consensus was C or C++. So, I downloaded a book, and I started learning
    C/C++. Actually, I started learning general programming concepts like
    variables, control flow, functions rather than the specifics of the
    languages. By the way, nowadays, you can find a video tutorial about every
    topic. Back then, it was a lot harder to learn new things. (Probably, there
    were also some video tutorials at that time that I was not aware of, or
    maybe my internet connection was not fast enough or reliable.)
</p>

<p>
    I learned the basics of programming, and I was ready to write my program,
    but there was a problem. I didn't know anything about GUI programming.
    Actually, I was not aware that I needed to learn about GUI programming. For
    a while, I didn't know what to do. I tried to draw a window using several
    code samples from the internet. However, it didn't lead me anywhere because
    I was trying to use an API (probably Win32 API) without knowing how to use
    it or reading its documentation. As a matter of fact, I didn't even know
    that there was documentation. But I continued to research. I was not going
    to give up so easily.
</p>

<blockquote>It had to be done.</blockquote>

<p>
    I could break through the stagnation when I installed Visual Studio and
    discovered that I could create the UI I wanted via a drag and drop interface
    using Visual Basic in Visual Studio. I switched to Visual Basic and started
    experimenting. I added a button to get a new word or discover its meaning. I
    added several text boxes for the guessed word and its translation. In
    addition, I added three buttons labeled "Easy", "Normal", and "Hard" to be
    able to change the rank of the word.
</p>

<blockquote>It's all coming together.</blockquote>

<p>
    My program was doing what I initially wanted to do. I was thrilled that I
    wrote my first program and realized my idea ranked flashcards. Now, it was
    the time for improving the small stuff. To be able to add new words to my
    program, I needed a database. Of course, I choose Microsoft Access as my
    database knowing nothing about databases. I created a database and the
    wordlist table inside the database. The hardest part for me was connecting
    to the database. Again, I was trying to use an API without knowing the API.
    This time the API was OLE DB. I just copied and pasted various code snippets
    that I found online to my code until the database connection worked (<a
        href="https://gkoberger.github.io/stacksort/"
        target="_blank"
        rel="noopener noreferrer">this situation reminds me of this website</a
    >).
</p>

<figure>
    <picture>
        <img
            class="mx-auto max-w-full lg:max-w-screen-lg"
            src="/images/flashcard-app-access-db.png"
            alt="Screenshot of Microsoft Access window containing my wordlist table"
            loading="lazy"
        />
    </picture>
    <figcaption>
        My wordlist database. The name of fields of the table are "ID", "Rank",
        "Part of speech", "Article", "Suffix for plural", "Extra info", "Turkish
        meaning", "German meaning", "Example sentences", and "Pronunciation".
    </figcaption>
</figure>

<p>
    I also created and added some visuals for parts of speech of the words. The
    last thing I wanted to add to my program was some audio feedback to improve
    pronunciation. My initial idea was to add text-to-speech to the program so
    that I can hear how every word is pronounced. However, there weren't any
    good and free tools to do this. There was a text-to-speech feature built-in
    in Windows 7, but the pronunciation of words generated from it didn't
    satisfy me. Therefore, I opted for audio recordings. I downloaded the
    pronunciations of the words from <a
        href="https://forvo.com/"
        target="_blank"
        rel="noopener noreferrer">Forvo</a
    > and placed them in a folder. I added a play button to play these pronunciations.
</p>

<figure>
    <picture>
        <img
            class="mx-auto w-96 max-w-full lg:max-w-screen-lg"
            src="/images/flashcard-app-screenshot.png"
            alt="Screenshot of my ranked flashcard program"
            loading="lazy"
        />
    </picture>
    <figcaption>Screenshot of my ranked flashcard program.</figcaption>
</figure>

<p>
    That was it. My first program was finished, and I was delighted with it. At
    that time, I was unaware that this little experimentation would change and
    shape my future career. Now, when I look back to it, I still like the idea
    and my execution of it.
</p>

<p>
    Note: The video and screenshot shows my unmodified program recompiled in Windows 10.
</p>

<figure>
    <video controls class="mx-auto w-96 max-w-full" poster="/images/flashcard-app-screenshot.png">
        <source src="/videos/flashcard-app.webm" type="video/webm" />
        <source src="/videos/flashcard-app.mp4" type="video/mp4" />
        <track label="English" kind="captions" srclang="en" src="/videos/flashcard-app.vtt" default>
        <p>
            Your browser doesn't support HTML5 video. Here is a <a
                href="/videos/flashcard-app.mp4">link to the video</a
            > instead.
        </p>
    </video>
    <figcaption>Video of my ranked flashcard program.</figcaption>
</figure>
