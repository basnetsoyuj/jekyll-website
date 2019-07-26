
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "	The page you're looking for cannot be found !	Please use the search bar at the top or visit the homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About",
    "body": ""
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/_pages/contact/",
    "title": "Contact | {{site.title}}",
    "body": "		sadasd"
    }, {
    "id": 4,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Zugzwang: An Imposed Elegance                              :               Introducing specific constraints on variables and functions, in mathematics, gives rise to numerous intricate patterns. This article discusses one such delicacy that arises in certain. . . :                                                       18 Jun 2019                &lt;/span&gt;                                                                                                                                                                                                                                                                                  Manga Scraper                              :                MangaScraper is python script makes manga reading faster, better and free of ads. :                                                       13 Feb 2018                &lt;/span&gt;                                                                                      All Stories:                                                                                                     Zugzwang: An Imposed Elegance              :       Introducing specific constraints on variables and functions, in mathematics, gives rise to numerous intricate patterns. This article discusses one such delicacy that arises in certain board games like chess —. . . :                       18 Jun 2019        &lt;/span&gt;                                                                                                                     Manga Scraper              :        MangaScraper is python script makes manga reading faster, better and free of ads. :                       13 Feb 2018        &lt;/span&gt;                            			              Explore →:       				                              programming (1)                  python (1)                  chess (1)                    			"
    }, {
    "id": 5,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ &#8220;sitemap. xml&#8221;   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/Zugzwang-An-Imposed-Elegance/",
    "title": "Zugzwang: An Imposed Elegance",
    "body": "2019/06/18 -  Introducing specific constraints on variables and functions, in mathematics, gives rise to numerous intricate patterns. This article discusses one such delicacy that arises in certain board games like chess — Zugzwang. “Zugzwang” is a German word that roughly translates to ‘being forced to make a move’. It is pronounced as : /ˈzʌɡzwæŋ/ . The word is most often used in association with board games, notably chess. The players do not have an option of passing a move in chess, unlike other games such as Go. Thus a situation can arise during game when a certain player would prefer to pass the move, but cannot do so. The first known use of the term in English was by World Chess Champion Emanuel Lasker in 1905. Positions with zugzwang occur fairly often in chess endgames, especially in king and pawn endgames. Occurance of zugzwang in fairly simple board position, as shown in Game 1, often tempts one to overlook its beauty. Example of the most basic zugzwang:In this situation, white would love to skip a move and keep things as they are. Unfortunately, the rules of chess dictate that you must move, so your only option is to fall on your own sword, as every move you make worsens your position in one way or the other. It is possible that the previous example has disappointed your expectations of the word. In that case, try out the following puzzle and put black in ZUGZWANG. (Beauty is more appreciated when one self-disovers it. )Try to look out for non-intuitive and forceful moves. Complex Zugzwang positions are very rare in professional level chess and are believed to occur once in a lifetime for a player. Now, let’s look at a famous game : Fritz Sämisch versus Aron Nimzowitsch, Copenhagen 1923. The game is often regarded as “The Immortal Zugzwang Game”. Here is a Zugzwang meme I couldn’t hold back.  Everyone’s favourite, AlphaZero — the quintessential deep reinforcement learning agent by Google DeepMind, also created a Zugzwang against the popular classical chess engine Stockfish. The exact zugzwang occurs at 51. g4 ! 	The following video by agadmator’s Chess Channel also covers the game move-by-move. Zugzwang is an element of art found in the game of chess. AlphaZero’s refutation to Stockfish’s style of play, and games like these have rejuvenated the human-like element in the game. It proves that high-level chess doesn’t have to be boring and unaesthetic. At this point, your brain must be itching to solve some more Zugzwang puzzles. Here’s one more puzzle I leave at your disposal. 	Make sure you zugzwang your way to victory, being devious and merciless whenever you can! "
    }, {
    "id": 7,
    "url": "http://localhost:4000/Manga-Scraper/",
    "title": "Manga Scraper",
    "body": "2018/02/13 -  MangaScraper is python script makes manga reading faster, better and free of ads. MangaScraper –a simple CLI program written in python, allows you to build a list of manga and keep track of your chapter progress. It then, scrapes manga from the web, based on your manga list by checking out and downloading new chapters released that you’ve missed. Link to the source code for MangaScraper : https://github. com/basnetsoyuj/MangaScraper To use this script:    Download the zip or clone from github:git clone https://github. com/basnetsoyuj/MangaScraper. git     Install the requirements from requirements. txt by using pip:pip install -r requirements. txt  There are three basic functions:1) checkout &lt;manga_name&gt;  for searching, checking out manga and building the list. 2) exit  for exiting out at any point. 3) refresh  to check if there are any updates to your selected manga lists. Example: To checkout and add One Piece to manga list During the search, you will have to specify one of the mangas among other search results. If only one manga is found during the search, the program redirects to that specific one. Then, the program displays some recent chapters from the selected manga. You will also have to specify an index pointer to allow the program to keep record of new chapters from that point on. After addition of manga to your manga list, you will be redirected to the refresh &lt;manga&gt; function where you will have the option to download the chapters released after the index pointer.  The program will generate a ‘/data/’ folder with ‘mangalist. csv’ file containing your list and recent chapter. Also,a ‘/manga/’ folder will be created that will contain all the downloaded chapter images ! If you encounter any error during the refresh session, want remove a manga from the list or change the recent chapter pointer, you can directly modify the csv file and make the corrections. This allows users to dynamically alter program usage. The CSV file has 3 columns (name,link and recent_chapter) and all your manga list in the rows: Directories and folder structure for /manga/: Source code for the main. py file: 	import bs4 as bsimport requestsimport osimport csvimport reERR1= Sorry there was a problem ! :( Try restarting the program or check the internet connection.  LIST_LINK= data/mangalist. csv TEMP_FILE= data/mangalist_temp. csv if not os. path. exists( data/ ):  os. makedirs( data/ )def syntax_reminder():  print( Syntax : )  print( \t1) checkout {manga_name} # for searching and checking out mangas )  print( \t2) exit # for exiting out at any point )  print( \t3) refresh # to check if there are any updates to your selected manga lists )def add(link):  link1=link. replace( /manga/ , /chapter/ )  print( Enter the initial chapter pointer to keep track : )  looper=1  while looper:    chapter = input( &gt;&gt;&gt;&gt;&gt;  )    content=bs. BeautifulSoup(requests. get(link1+ /chapter_ +chapter). content,'html. parser')    error_or_name=content. find_all('span',{'itemprop':'title'})[1]. text. strip()    if not error_or_name== Error :      fieldnames = 'name,link,recent_chapter'      if os. path. isfile(LIST_LINK):        with open(LIST_LINK, 'a') as mangalist:          mangalist. write( {},{},{}\n . format(error_or_name,link,chapter))      else:        with open(LIST_LINK, 'w') as mangalist:          mangalist. write(fieldnames+'\n')          mangalist. write( {},{},{}\n . format(error_or_name, link, chapter))      print( Added : {} on chapter {} . format(error_or_name,chapter))      looper=0      refresh(error_or_name)    else:      print( Error. Please try again.  )def handler(item):  manga_link=item. find('a'). get('href')  file_exists=os. path. isfile(LIST_LINK)  has_manga=0  if file_exists:    with open(LIST_LINK,'r') as mangalist:      list_=csv. reader(mangalist)      next(list_)      for row in list_:        if row[1]==manga_link:          has_manga=row[0]          break  if(has_manga):    print(has_manga,   is already in your mangalist ! Redirecting to the refresh function )    refresh(has_manga)  else:    content=bs. BeautifulSoup(requests. get(manga_link). content,'html. parser')    print( .  *60)    print( \t{} selected : . format(item. text. strip()))    ul=content. find('ul',{'class': manga-info-text })    status=ul. find_all('li')[2]. text[9:]    print( This manga is ,status)    print( .  *60)    print( Some recent chapters are : )    chapter_list=content. find('div',{'class':'chapter-list'})    num_chapters=chapter_list. find_all('div')[:5]    for i in range(0,len(num_chapters)):      print(num_chapters[i]. find('span'). text)    print( .  *60)    answer=''    while (answer. upper(). strip() not in { Y ,  N }):      print( Add this manga to your list ? (Y/N): )      answer=input( &gt;&gt;&gt;&gt;&gt;  )    if answer. upper()== Y :      add(manga_link)def checkout(name):  link= https://mangakakalot. com/search/ +name. replace(' ','_')  try:    session = requests. get(link)    if session. status_code==200:      print( Searching . . . . .  ,session. url)      content=bs. BeautifulSoup(session. content,'html. parser')      results=content. find_all('h3',{'class':'story_name'})#('span',{'class':'item-name'})      if results:        n=1        for result in results:          print( \t{}. \t{} . format(n,result. text. strip()))          n+=1        if n==2:          handler(results. pop())        else:          runchoice=1          while(runchoice):            try:              print( Which one of them?(Use Symbol Number): )              choice=int(input( &gt;&gt;&gt;&gt;&gt;  ))              handler(results[choice-1])              runchoice=0            except ValueError as v:              print( Enter a valid integer.  )            except IndexError as i:              print( Enter Numbers within range.  )      else:        print( No results found for : ,name)    else:      print( Sorry there was a problem connecting to the website :( Try again with valid query )  except:    print(ERR1)def download_and_reset(link_ref,chapter_num_list,row):  answer=''  while(answer. upper(). strip() not in { Y , N }):    print(f Do you want to download all these chapters and set new pointer to Chapter {chapter_num_list[0]}? )    answer=input( &gt;&gt;&gt;&gt;&gt;  )  if answer. upper()== Y :    with open(TEMP_FILE, 'a') as tempfile:      tempfile. write(f {row[0]},{row[1]},{chapter_num_list[0]}\n )    for chapter in chapter_num_list:      print(f Downloading . . . . . . . Chapter {chapter} )      content=bs. BeautifulSoup(requests. get(link_ref+chapter). content,'html. parser')      images=content. find('div',{'class':'vung-doc'}). find_all('img')      links=[x. attrs['src'] for x in images]      counter=0      name=re. sub('\W+','', row[0])      if not os. path. exists('manga'):os. makedirs( manga )      if not os. path. exists(f'manga/{name}'):os. makedirs(f manga/{name} )      if not os. path. exists(f'manga/{name}/Chapter {chapter}'):os. makedirs(f'manga/{name}/Chapter {chapter}')      for link in links:        with open(f manga/{name}/Chapter {chapter}/{counter}. jpg ,'wb') as file:          file. write(requests. get(link). content)        counter+=1    print( \tDONE ! )  else:    with open(TEMP_FILE, 'a') as tempfile:      tempfile. write(f'{row[0]},{row[1]},{row[2]}\n')def refresh(manga=False):  if not os. path. isfile(LIST_LINK):    print( Sorry you do not have any lists yet!. . Use [checkout {manga_name}] to search and create a list )    return 0  print( .  *60)  if manga:    with open(TEMP_FILE,'w') as f:      f. write( name,link,recent_chapter\n )    with open(LIST_LINK, 'r') as mangalist:      list_ = csv. reader(mangalist)      next(list_)      for row in list_:        if row[0] == manga:          print(f Refreshing and scraping out information for recent chapters for {manga}\n )          content = bs. BeautifulSoup(requests. get(row[1]). content, 'html. parser')          link_ref = row[1]. replace( /manga/ ,  /chapter/ ) +  /chapter_           chapters_list = content. find('div', {'class': 'chapter-list'}). select(f'a[href*= {link_ref} ]')          chapter_num_list = [x. attrs['href'][len(link_ref):] for x in chapters_list]          known_index = chapter_num_list. index(row[2])          if known_index == 0:            print(f Other chapters for {manga} after Chapter {row[2]} haven't been released! Please checkout after sometime.  )            with open(TEMP_FILE, 'a') as tempfile:              tempfile. write(f'{row[0]},{row[1]},{row[2]}\n')          else:            print( Other Chapters have been released ! )            for x in range(0, known_index):              print(f Chapter {chapter_num_list[x]} )            download_and_reset(link_ref, chapter_num_list[:known_index],row)        else:          with open(TEMP_FILE, 'a') as tempfile:            tempfile. write(f'{row[0]},{row[1]},{row[2]}\n')    os. remove(LIST_LINK)    os. renames(TEMP_FILE, LIST_LINK)  else:    with open(TEMP_FILE,'w') as f:      f. write( name,link,recent_chapter\n )    with open(LIST_LINK, 'r') as mangalist:      list_ = csv. reader(mangalist)      next(list_)      for row in list_:        print(f Refreshing and scraping out information for recent chapters for {row[0]} )        content = bs. BeautifulSoup(requests. get(row[1]). content, 'html. parser')        link_ref = row[1]. replace( /manga/ ,  /chapter/ ) +  /chapter_         chapters_list = content. find('div', {'class': 'chapter-list'}). select(f'a[href*= {link_ref} ]')        chapter_num_list = [x. attrs['href'][len(link_ref):] for x in chapters_list]        known_index = chapter_num_list. index(row[2])        if known_index == 0:          print(            f Other chapters for {row[0]} after Chapter {row[2]} haven't been released! Please checkout after sometime. \n )          with open(TEMP_FILE, 'a') as tempfile:            tempfile. write(f'{row[0]},{row[1]},{row[2]}\n')        else:          print( Other Chapters have been released ! )          for x in range(0, known_index):            print(f Chapter {chapter_num_list[x]} )          download_and_reset(link_ref, chapter_num_list[:known_index],row)    os. remove(LIST_LINK)    os. renames(TEMP_FILE, LIST_LINK)if __name__== __main__ :  print( Welcome ! )  syntax_reminder()  while(1):    input_=input('&gt;&gt;&gt;&gt;&gt; ')    if input_. strip()== exit :      break    elif input_. strip()== refresh :      refresh()    elif input_[:9]== checkout  :      checkout(input_[9:]. strip(). lower())    else:      print( Syntax Error :( )      syntax_reminder()"
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
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> <i class="far fa-times-circle"></i> </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
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