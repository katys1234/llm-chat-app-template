export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    url.hostname = "api.telegram.org";
    url.port = "443";
    url.protocol = "https:";

    const newRequest = new Request(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.method !== "GET" ? request.body : null,
    });

    return await fetch(newRequest);
  }
};
