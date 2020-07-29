---
layout: post
title:  "New Blogging Site"
categories: [ blog ]
image: assets/images/blog.png
featured: true
---
> I have decided to redesign and split my website into two portions: a **portfolio website** and a dedicated **blogging website**.

The portfolio website will contain my online web portfolio. As soon as the new website is built, I will archive this website in GitHub, or change it into a GitHub page.

I have been working on the blogging website for some days now. This blogging website will serve as a repository to pen down my thoughts, musings, and experiences. It will contain articles, tutorials, snippets, and everything else. This website is built using Gatsby and hosted on Netlify. You can check out my new Blogging Site here: <a href="https://blog.basnetsoyuj.com.np/" target="_blank">Soyuj Jung Basnet Blogs</a>.

I still want to add a bunch of features. Meanwhile, you can check out the source code and track the recent developments in the [SJB Blogs GitHub Repository](https://github.com/basnetsoyuj/personal-blog).

<script>
	if(window.location.href.includes('?darkmode')){
		document.write('<link rel="stylesheet" href="{{site.baseurl}}/assets/css/railscasts.css">');}
	else{
		document.write('<link rel="stylesheet" href="{{site.baseurl}}/assets/css/github.css">');
	}
</script>
<script src="{{site.baseurl}}/assets/js/highlight.pack.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
