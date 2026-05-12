fetch('https://aisensy.com').then(r=>r.text()).then(t=>{
  const matches = [...t.matchAll(/<img[^>]+src=[\"']([^\"']+)[\"']/gi)];
  console.log(matches.map(m=>m[1]).join('\n'));
});
