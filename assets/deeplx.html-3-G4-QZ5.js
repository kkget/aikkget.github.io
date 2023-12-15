const e=JSON.parse(`{"key":"v-021b3314","path":"/services/dockers-on-nas/deeplx.html","title":"DeepLX - 免费翻译接口","lang":"zh-CN","frontmatter":{"article":false,"title":"DeepLX - 免费翻译接口","order":13,"description":"DeepLX 是基于 DeepL 的免费翻译服务，可以将 DeepL Free API 转换为本地 API，以供第三方程序使用。 version: '3' services: deeplx: image: ghcr.io/owo-network/deeplx:latest container_name: deeplx restart: always ports: - \\"32770:1188\\" # environment: # 如果设置了 TOKEN，则每个请求都需要包含 Authorization 标头。 # - TOKEN=helloworld # 如果设置了 AUTHKEY，在 429 响应（请求过多/过快）后，会使用官方的 AuthKey 进行请求。如果同时使用多个 authKey，需要用逗号分隔。 # - AUTHKEY=xxxxxxx:fx","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/deeplx.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"DeepLX - 免费翻译接口"}],["meta",{"property":"og:description","content":"DeepLX 是基于 DeepL 的免费翻译服务，可以将 DeepL Free API 转换为本地 API，以供第三方程序使用。 version: '3' services: deeplx: image: ghcr.io/owo-network/deeplx:latest container_name: deeplx restart: always ports: - \\"32770:1188\\" # environment: # 如果设置了 TOKEN，则每个请求都需要包含 Authorization 标头。 # - TOKEN=helloworld # 如果设置了 AUTHKEY，在 429 响应（请求过多/过快）后，会使用官方的 AuthKey 进行请求。如果同时使用多个 authKey，需要用逗号分隔。 # - AUTHKEY=xxxxxxx:fx"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-15T09:03:43.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2023-12-15T09:03:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"DeepLX - 免费翻译接口\\",\\"description\\":\\"DeepLX 是基于 DeepL 的免费翻译服务，可以将 DeepL Free API 转换为本地 API，以供第三方程序使用。 version: '3' services: deeplx: image: ghcr.io/owo-network/deeplx:latest container_name: deeplx restart: always ports: - \\\\\\"32770:1188\\\\\\" # environment: # 如果设置了 TOKEN，则每个请求都需要包含 Authorization 标头。 # - TOKEN=helloworld # 如果设置了 AUTHKEY，在 429 响应（请求过多/过快）后，会使用官方的 AuthKey 进行请求。如果同时使用多个 authKey，需要用逗号分隔。 # - AUTHKEY=xxxxxxx:fx\\"}"]]},"headers":[],"git":{"createdTime":1702631023000,"updatedTime":1702631023000,"contributors":[{"name":"kkget","email":"40913168+kkget@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.53,"words":158},"filePathRelative":"services/dockers-on-nas/deeplx.md","localizedDate":"2023年12月15日","excerpt":"<p><a href=\\"https://github.com/OwO-Network/DeepLX/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">DeepLX</a> 是基于 DeepL 的免费翻译服务，可以将 DeepL Free API 转换为本地 API，以供第三方程序使用。</p>\\n<div class=\\"language-yaml line-numbers-mode\\" data-ext=\\"yml\\"><pre class=\\"language-yaml\\"><code><span class=\\"token key atrule\\">version</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'3'</span>\\n\\n<span class=\\"token key atrule\\">services</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">deeplx</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">image</span><span class=\\"token punctuation\\">:</span> ghcr.io/owo<span class=\\"token punctuation\\">-</span>network/deeplx<span class=\\"token punctuation\\">:</span>latest\\n    <span class=\\"token key atrule\\">container_name</span><span class=\\"token punctuation\\">:</span> deeplx\\n    <span class=\\"token key atrule\\">restart</span><span class=\\"token punctuation\\">:</span> always\\n    <span class=\\"token key atrule\\">ports</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> <span class=\\"token string\\">\\"32770:1188\\"</span>\\n    <span class=\\"token comment\\"># environment:</span>\\n      <span class=\\"token comment\\"># 如果设置了 TOKEN，则每个请求都需要包含 Authorization 标头。</span>\\n      <span class=\\"token comment\\"># - TOKEN=helloworld</span>\\n      <span class=\\"token comment\\"># 如果设置了 AUTHKEY，在 429 响应（请求过多/过快）后，会使用官方的 AuthKey 进行请求。如果同时使用多个 authKey，需要用逗号分隔。</span>\\n      <span class=\\"token comment\\"># - AUTHKEY=xxxxxxx:fx</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
