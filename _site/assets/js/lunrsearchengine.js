
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit the homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Mediumish Template for Jekyll",
    "body": "This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/contact",
    "title": "Contact | {{site.title}}",
    "body": "		sadasd"
    }, {
    "id": 4,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Zugzwang: An Imposed Elegance                              :               Introducing specific constraints on variables and functions, in mathematics, gives rise to numerous intricate patterns. This article discusses one such delicacy that arises in certain. . . :                                                       18 Jun 2019                &lt;/span&gt;                                                                                      All Stories:                                                                                                     Zugzwang: An Imposed Elegance              :       Introducing specific constraints on variables and functions, in mathematics, gives rise to numerous intricate patterns. This article discusses one such delicacy that arises in certain board games like chess —. . . :                       18 Jun 2019        &lt;/span&gt;                            "
    }, {
    "id": 5,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ &#8220;sitemap. xml&#8221;   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/Zugzwang-An-Imposed-Elegance/",
    "title": "Zugzwang: An Imposed Elegance",
    "body": "2019/06/18 -  Introducing specific constraints on variables and functions, in mathematics, gives rise to numerous intricate patterns. This article discusses one such delicacy that arises in certain board games like chess — Zugzwang. “Zugzwang” is a German word that roughly translates to ‘being forced to make a move’. It is pronounced as : /ˈzʌɡzwæŋ/ . The word is most often used in association with board games, notably chess. The players do not have an option of passing a move in chess, unlike other games such as Go. Thus a situation can arise during game when a certain player would prefer to pass the move, but cannot do so. The first known use of the term in English was by World Chess Champion Emanuel Lasker in 1905. Positions with zugzwang occur fairly often in chess endgames, especially in king and pawn endgames. Occurance of zugzwang in fairly simple board position, as shown in Game 1, often tempts one to overlook its beauty. Example of the most basic zugzwang:It is possible that the previous example has disappointed your expectations of the word. In that case, try out the following puzzle and put black in ZUGZWANG. (Beauty is more appreciated when one self-disovers it. )Try to look out for non-intuitive and forceful moves. Complex Zugzwang positions are very rare in professional level chess and are believed to once in a lifetime for a player. Now, let’s look at a famous game : Fritz Sämisch versus Aron Nimzowitsch, Copenhagen 1923. The game is often regarded as “The Immortal Zugzwang Game”. Here is a Zugzwang meme I couldn’t hold back. Everyone’s favourite, AlphaZero — the quintessential deep reinforcement learning agent by Google DeepMind, also created a Zugzwang against the popular classical chess engine Stockfish. The exact zugzwang occurs at 51. g4 ! 	The following video by agadmator’s Chess Channel also covers the game move-by-move. Zugzwang is an element of art found in the game of chess. AlphaZero’s refutation to Stockfish’s style of play, and games like these have rejuvenated the human-like element in the game. It proves that high-level chess doesn’t have to be boring and unaesthetic. At this point, your brain must be itching to solve some more Zugzwang puzzles. Here’s one more puzzle I leave at your disposal. 	"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});