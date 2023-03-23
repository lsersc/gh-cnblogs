export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname="fancy-bonus-e739.giwixi7295.workers.dev";  //你需要反代的域名
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
    }
  };
