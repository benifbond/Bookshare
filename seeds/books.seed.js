const books = [
    {
      title: 'The Usborne Book of World History',
      author: 'Jenny Tyler',
      image:
        'https://www.sonlight.com/images/products/CH02-l.jpg',
      description:
        "Presents an introduction to world history, from prehistoric peoples through ancient civilizations to the early twentieth century, focusing on the varying cultures, art, and daily life of civilizations throughout history.",
        isBorrowed: false,
    },
    {
      title: 'A Study of Flowers',
      author: 'Sylvia Brooks',
      image:
        'images/flo.png',
      description:
        "Comprehensive archive by two of the world's foremost collectors of pictorial symbols. Their pictures, rendered from rare illustrations, extend from ancient Chinese lotus buds to a basket of flowers in a 19th-century Valentine silhouette. Includes the symbolic meaning of every known species -- from absinth to zinnia. Over 200 black-and-white designs and illustratio",
        isBorrowed: false,
      },
    {
        title: 'A Wrinkle in Time',
        author: 'Augustus Caesar',
        image:
          'https://allthatsinteresting.com/wordpress/wp-content/uploads/2019/11/age-of-augustus-cover.png',
        description:
          "Begin your journey with the castle of history",
          isBorrowed: false,},
    {
        title: 'Very Nice',
        author: 'Maria Rinkel',
        image:
          'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-july-2019/large/bbcjuly19verynice.jpg?1384968217',
        description:
          "Begin your journey with the castle of history",
          isBorrowed: false,},
    {
        title: 'Shutter Stock',
        author: 'Augustus Caesar',
        image:
          'https://image.shutterstock.com/image-vector/vintage-book-cover-vector-illustration-600w-685836277.jpg',
        description:
          "Begin your journey with the castle of history",
          isBorrowed: false,},
    {
        title: 'Brother Karamazov',
        author: 'Feodor Dostoevsky',
        image:
          'images/BroKa.png',
        description:
          "Completed only two months before his death, The Brothers Karamazov is Dostoevsky's largest, most expanisve, most life-embracing work.Filled with human passions -- lust, greed, love, jealousy, sorrow and humor -- the book is also infused with moral issues and the issue of collective guilt. As in many of Dostoevsky's novels, the plot centers on a murder.",
          isBorrowed: false,},
    {
        title: 'The War Between Us',
        author: 'Sara Lee',
        image:
          'https://m.media-amazon.com/images/I/51kjvCihacL.jpg',
        description:
          "Alex Moon is not the enemy. Six months after Pearl Harbor's tragedy, Korean American Alex Moon is sent away from his home in California for refusing his father's request to join the fight against the Japanese. On his journey, Alex is attacked and stranded in the small town of River Bluff, Indiana. To everyone surrounding him, he looks like the enemy.",
          isBorrowed: false,},
    {
        title: 'Prospect Of A Woman',
        author: 'Vendy Voorsanger',
        image:
          'https://img.buzzfeed.com/buzzfeed-static/static/2020-08/25/0/asset/81d098e7de23/sub-buzz-12918-1598313727-5.jpg?downsize=600',
        description:
          "Elisabeth Parker comes to California from Massachusetts in 1849 with her new husband, Nate, to reunite with her father, who???s struck gold on the American River. But she soon realizes her husband is not the man she thought???and neither is her father, who abandons them shortly after they arrive. As Nate struggles with his sexuality, Elisabeth is forced to confront her preconceived notions of family, love, and opportunity. She finds comfort in corresponding with her childhood friend back home, writer Louisa May Alcott, and spending time in the company of a mysterious California",
          isBorrowed: false,},
    {
        title: 'Untenrum Frei',
        author: 'Margarete Stokowski',
        image:
          'https://images-eu.ssl-images-amazon.com/images/I/41KpQOZJfuS._SY264_BO1,204,203,200_QL40_ML2_.jpg',
        description:
          "SEX. MACHT. SPASS. UND PROBLEME. In ihrem Deb??t ??Untenrum frei?? schreibt die Autorin und Spiegel-Online-Kolumnistin Margarete Stokowski ??ber die kleinen schmutzigen Dinge und ??ber die gro??en Machtfragen. Es geht darum, wie die Freiheit im Kleinen mit der Freiheit im Gro??en zusammenh??ngt, und am Ende wird deutlich: Es ist dieselbe. Mit scharfsinnigem Blick auf die Details gelingt ihr ein pers??nliches, provokantes und befreiendes Buch.",
          isBorrowed: false,},
    {
      title: 'Prisoners of Geography',
      author: 'Jim Marshall',
      image:
        'images/Prisoners.png',
      description:
        "Discover The Ten Maps That Reveal The Future Of Our World In The Power Of Geography ??? The Sequel To Prisoners Of Geography ??? Out Now* ___ The Million Copy International Bestsellergeography Shapes Not Only Our History, But Where We'Re Headed... All Leaders Are Constrained By Geography. Their Choices Are Limited By Mountains, Rivers, Seas And Concrete. Yes, To Follow World Events You Need To Understand People, Ideas And Movements - But If You Don'T Know Geography, You'Ll Never Have The Full Picture.If You'Ve Ever Wondered Why Putin Is So Obsessed With Crimea, Why The Usa Was Destined To Become A Global Superpower, Or Why China'S Power Base Continues To Expand Ever Outwards, The Answers Are All Here. In Ten Chapters And Ten Maps, Prisoners Of Geography Looks At The Past, Present And Future To Offer An Essential Insight Into One Of The Major Factors That Determines World History. It'S Time To Put The 'Geo' Back Into Geopolitics.",
        isBorrowed: false,},
  {
    title: 'Herr Lehmann',
    author: 'Sven Regener',
    image:
      'images/Lehmann.png',
    description:
      "Mit pr??zisem Blick f??r die tragische Komik des Lebens stolpert Herr Lehmann durchs Leben. Durch jahrelange, ausgefuchste Ausweichman??ver und heroische Tr??gheit hat der arglistfreie, bis ins Mark ambitionslose Bierzapfer erfolgreich Anspr??che von Eltern, Vermietern, Nachbarn und Frauen ausgesessen. Nun, wir schreiben das Jahr 1989, lebt er weitgehend st??rungsfrei in seiner Eineinhalbzimmerwohnung in Kreuzberg, wenn er nicht in die n??chste Kneipe geht. Doch pl??tzlich bricht eine unvorhergesehene St??rung nach der anderen in seinen hei??geliebten Alltagstrott.",
      isBorrowed: false,},
{
  title: 'Die W??rde ist antastbar: Essays',
  author: 'Ferdinand Von Schirsch',
  image:
    'images/Scirach.png',
  description:
    "Ferdinand von Schirach besch??ftigt sich in seinen Essays mit den gro??en Themen unserer Zeit ??? warum der Terrorismus letztlich ??ber die Demokratie entscheidet ??? und geht zugleich sehr pers??nlichen Gedanken nach, ??ber das Schreiben, das Lesen mit dem iPad und das Rauchen.",
    isBorrowed: false,},
{
  title: 'Anna Karenina',
  author: 'Leo Tolstoy',
  image:
    'images/Tol.png',
  description:
    "Anna Karenina is a novel by the Russian author Leo Tolstoy, first published in book form in 1878. Widely considered to be one of the greatest works of literature ever written, Tolstoy himself called it his first true novel",
    isBorrowed: false,},
{
  title: 'Tropic of Cancer',
  author: 'Henry Miller',
  image:
    'images/cancer.png',
  description:
    "Tropic of Cancer redefined the novel. Set in Paris in the 1930s, it features a starving American writer who lives a bohemian life among prostitutes, pimps, and artists. Banned in the US and the UK for more than thirty years because it was considered pornographic, Tropic of Cancer continued to be distributed in France and smuggled into other countries. When it was first published in the US in 1961, it led to more than 60 obscenity trials until a historic ruling by the Supreme Court defined it as a work of literature. Long hailed as a truly liberating book, daring and uncompromising, Tropic of Cancer is a cornerstone of modern literature that asks us to reconsider everything we know about art, freedom, and morality.",
    isBorrowed: false,},
{
  title: 'Stille Tage in Clichy',
  author: 'Henry Miller',
  image:
    'images/Clichy.png',
  description:
    "Auch in diesem inzwischen weltber??hmten und verfilmten Buch zeigt sich der unsterbliche Henry Miller als Prophet und Moralist. Jahrelang musste er auf die Ver??ffentlichung warten. Denn ??Stille Tage in Clichy?? ist nicht, wie der Titel vermuten lassen k??nnte, eine Idylle im Werk des 'obsz??nsten Schriftstellers der Weltliteratur' (Sir Herbert Read). Doch sei es, dass sich sein Erz??hler Joey dem M??dchen Nys n??hert, das er im Caf?? trifft, sei es Mara-Marignan, die sich auf dem Champs-??lys??es nach ihm umdreht: Joeys Abenteuer sind von erstaunlicher Heiterkeit. Ganz gleich, ob eine Mutter unter dem Gekreisch ihrer Kinder entbl????t wird oder ob Joey mit zwei Dirnen in der Badewanne Brot und Wein zu sich nimmt, fast immer sind seine Handlungen von Gel??chter begleitet, gehen unter in wilder Ausgelassenheit. Zugleich beschw??rt Henry Miller das Paris der drei??iger Jahre und seiner Atmosph??re ??bersch??umender Lebenslust.",
    isBorrowed: false,},
{
  title: 'Opus Pistorum',
  author: 'Henry Miller',
  image:
    'images/Oppus.png',
  description:
    "Henry, der Geld brauchte, schlug mir vor, er werde f??r mich verk??ufliche Texte schreiben. Ich bot ihm ein Honorar von einem Dollar pro Seite, daf??r erhielt ich alle Rechte ... Ich bezahlte immer bar, wie ausgemacht. Nach wenigen Monaten ergaben die angesammelten Seiten ein komplettes Buch, dem er den Titel OPUS PISTORUM gab (Milton Luboviski, Buchh??ndler in Hollywood, 1983 in einer eidesstattlichen Erkl??rung).",
    isBorrowed: false,},
{
  title: 'Der Kolo?? von Maroussi',
  author: 'Henry Miller',
  image:
    'images/Kloss.png',
  description:
    "Eine Reise nach Griechenland Henry Millers ber??hmtes Griechenland-Buch entstand 1940, nachdem er im Jahr zuvor f??nf Reisemonate in dem mythentr??chtigen Land verbracht hatte. Ein faszinierender Erfahrungsbericht, in dem die archaische Landschaft, die Welt der klassischen Mythen von der wilden Phantasie Millers neu belebt und durchtr??nkt wird. Zugleich liest sich sein Buch als das Dokument eines Reinigungsprozesses, an dessen Ende Miller etwas von der Heimat und dem Frieden erf??hrt, den zu finden sein ruheloser Geist ausgezogen war.",
    isBorrowed: false,}
]


const mongoose = require("mongoose");

const Book = require("../models/Book.model");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/Bookstore";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    return Book.insertMany(books);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .finally(() => {
    console.log("closing the database")
    mongoose.connection.close();
});