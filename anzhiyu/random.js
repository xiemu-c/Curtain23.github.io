var posts=["posts/126b2990.html","posts/5c83816a.html","posts/cdd8f365.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };