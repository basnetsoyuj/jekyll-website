---
layout: post
title:  "Manga Scraper"
categories: [ python ]
tags: [ web scraping, BeautifulSoup, requests]
image: assets/images/manga.jpg
img_credit: [ "Paiheme", "https://dribbble.com/shots/5951087-In-the-Studio" ]
---
> MangaScraper is a python script that makes manga reading more flawless and free of ads.

MangaScraper -- a simple CLI script written in python -- allows you to build a list of manga and keep track of your chapter progress. It then scrapes these mangas from the web by checking out and downloading the newly released chapters.

Link to the source code for MangaScraper : <a href="https://github.com/basnetsoyuj/MangaScraper">MangaScraper Github Repo</a>

To use this script:
* Download the zip or clone from github:<br />
```git clone https://github.com/basnetsoyuj/MangaScraper.git```
* Install the requirements from **requirements.txt** using pip:<br />
```pip install -r requirements.txt```

There are three basic functions that are available for MangaScraper script:
1. `checkout <manga_name>` (to search for manga and build your manga list)
1. `exit` (to exit out at any point)
1. `refresh` (to check for new chapter releases for mangas on your list)

## Example
To checkout and add **One Piece** to manga list:

<figure><img src="https://github.com/basnetsoyuj/MangaScraper/blob/master/images/MangaScraper.PNG?raw=true" alt="CLI MangaScraper"/><figcaption>Command Line Interface of MangaScraper</figcaption></figure>

During the search, you will have to specify one of the mangas among the search results. If only one manga is found, the script redirects to that specific manga.

The program then displays some recent chapters from the selected manga. You will also have to specify an index pointer to keep a record of new chapters from that point on.

After the manga has been added to your list, you will be redirected to the `refresh <manga>` function where you will have the option to download the chapters released after the index pointer.

<figure><img src="https://github.com/basnetsoyuj/MangaScraper/blob/master/images/MangaScraper1.PNG?raw=true" alt="Directories Generated by MangaScraper"/><figcaption>Directories Generated by MangaScraper</figcaption></figure>

The script generates a <samp>/data/</samp> directory with a <samp>mangalist.csv</samp> file. This file contains your manga list and the recent chapter pointer.

Also, a <samp>/manga/</samp> directory is created that contains all the downloaded chapter images.

If you encounter any error during the ```refresh``` session, want remove a manga from the list or change the recent chapter pointer, you can directly modify the csv file and make the corrections. This allows users to dynamically alter program usage.

The CSV file has 3 columns: <samp>name</samp>,<samp>link</samp> and <samp>recent_chapter</samp>. All of your entries in the manga list are added as the rows.<br />

<figure><img src="https://github.com/basnetsoyuj/MangaScraper/blob/master/images/MangaScraper2.PNG?raw=true" alt="CSV file for storing manga list"/><figcaption>CSV File Generated by MangaScraper</figcaption></figure>

Directory and file structure for <samp>/manga/</samp> is shown below.

<figure><img src="https://github.com/basnetsoyuj/MangaScraper/blob/master/images/MangaScraper3.PNG?raw=true" alt="Directory Structure"/><figcaption>Directory Structure</figcaption></figure><figure><img src="https://github.com/basnetsoyuj/MangaScraper/blob/master/images/MangaScraper4.PNG?raw=true" alt="CSV file for storing manga list"/><figcaption>File Structure</figcaption></figure>


<script>
	if(window.location.href.includes('?darkmode')){
		document.write('<link rel="stylesheet" href="{{site.baseurl}}/assets/css/railscasts.css">');}
	else{
		document.write('<link rel="stylesheet" href="{{site.baseurl}}/assets/css/github.css">');
	}
</script>
<script src="{{site.baseurl}}/assets/js/highlight.pack.js"></script>
<script>hljs.initHighlightingOnLoad();</script>