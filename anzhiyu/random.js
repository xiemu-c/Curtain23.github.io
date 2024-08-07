var posts=["posts/5c83816a.html","posts/cdd8f365.html","posts/e0de93dd.html","posts/126b2990.html","posts/dd3fb5c9.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };