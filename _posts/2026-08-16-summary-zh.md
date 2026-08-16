---
layout: default
title: "Horizon Summary: 2026-08-16 (ZH)"
date: 2026-08-16
lang: zh
---

> 从 32 条内容中筛选出 7 条重要资讯。

---

**科技新闻**
1. [Anthropic 公开 Claude 系统提示词，开发者可追踪版本变化](#item-tech-news-1) ⭐️ 8.0/10
2. [SSOG-Attention：可分离高斯和亚二次注意力](#item-tech-news-2) ⭐️ 8.0/10
3. [模型正被有意“变笨”：转向外部知识与工具调用](#item-tech-news-3) ⭐️ 7.0/10
4. [Cloudflare 切换域名服务器后静默注入分析脚本](#item-tech-news-4) ⭐️ 7.0/10
5. [Qwen 3.8 27B 本地运行出色，但默认过度思考](#item-tech-news-5) ⭐️ 7.0/10
6. [美国据报要求盟友在 AI 合作中选边，签 Pax Silica 宣言](#item-tech-news-6) ⭐️ 7.0/10

**财经新闻**
1. [Anthropic 第二季初步营收超 115 亿美元，同比增长逾 14 倍](#item-finance-news-1) ⭐️ 8.0/10

---

## 科技新闻

<a id="item-tech-news-1"></a>
### [Anthropic 公开 Claude 系统提示词，开发者可追踪版本变化](https://platform.claude.com/docs/en/release-notes/system-prompts) ⭐️ 8.0/10

Anthropic 在官方文档中发布了 Claude 模型的系统提示词，首次让开发者看到模型如何被指令化以及提示词在版本之间如何演变。这些提示词涵盖了模型应如何处理图像缺失、危机对话优先保障用户福祉等行为规则；社区还发现新提示词中提到了 Claude Fable 5 和 Claude Mythos 5，暗示后续模型版本。开发者可以通过 Simon Willison 维护的 Git 历史更直观地对比 Claude Opus 4.8 与 Opus 5 等版本之间的改动。整体上，这次发布提升了透明度，但对模型行为的具体影响仍需结合更多分析。

hackernews · tosh · 8月16日 12:48 · [社区讨论](https://news.ycombinator.com/item?id=49319556)

**「背景」** Anthropic 于 2024 年 7 月 12 日首次发布了 Claude 模型的系统提示词（system prompts），涵盖 Claude 3 Opus、Claude 3.5 Sonnet 和 Claude 3 Haiku 等模型，并承诺会不定期更新这些提示词。这些系统提示词此前通常只能通过逆向工程获取，Anthropic 主动公开后，开发者可以在 Claude 的 iOS、Android 应用及网页版中查看。开发者 Simon Willison 还将其整理为 git 提交历史，以便追踪不同版本之间的提示词变化，这延续了 Anthropic 研究者 Amanda Askell 此前在 2024 年 3 月对系统提示词所做的详细分析，进一步提升了透明性。

**「影响」** 对开发者和研究者而言，Anthropic 公开可对比的 Claude 系统提示词（尤其是较新模型将系统提示长度减少约 80%）意味着提示词工程策略需要调整：新模型更依赖由外层框架提供上下文与工具，而非在系统提示中详细规定每一步决策。这提示团队应减少冗长的指令式系统提示，转而把信息放在工具或上下文中，以更好发挥 Claude 新一代模型的能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://simonwillison.net/2024/Aug/26/anthropic-system-prompts/">Anthropic Release Notes : System Prompts | Simon Willison’s Weblog</a></li>
<li><a href="https://braintitan.medium.com/anthropic-has-taken-the-rare-step-of-proactively-announcing-system-prompts-of-claude-and-promised-fe6565bda4aa">Anthropic has taken the rare step of proactively announcing system ...</a></li>
<li><a href="https://github.com/asgeirtj/system_prompts_leaks">GitHub - asgeirtj/ system _ prompts _leaks: Extracted system prompts ...</a></li>
<li><a href="https://www.remio.ai/post/anthropic-says-claude-tag-lands-65-of-product-engineering-prs-as-system-prompts">Anthropic Says Claude Tag Lands 65% of Product Engineering PRs...</a></li>

</ul>
</details>

**标签**: `#AI`, `#Anthropic`, `#system prompts`, `#transparency`, `#Claude`

---

<a id="item-tech-news-2"></a>
### [SSOG-Attention：可分离高斯和亚二次注意力](https://www.reddit.com/r/MachineLearning/comments/1vpt6ay/ssogattention_sum_of_separable_gaussians_as_a/) ⭐️ 8.0/10

SSOG（可分离高斯和）是一种新的注意力机制，通过学习每个注意力头中的少量高斯原子，并依据查询令牌对其进行几何引导，从而避免了标准缩放点积注意力（SDPA）对所有令牌对计算相似度的做法。这使得计算复杂度从 SDPA 的 O\(N²·d\)降至 O\(N·√N·d\)。实验显示，在 CIFAR-100 小数据集上 SSOG 明显优于 SDPA，在 ImageNet-1k 等更大数据集上性能相当且收敛更快，同时随规模增大在速度和内存效率上更具优势。该工作由作者发布，附带博客文章和代码仓库，部分代码和博客内容使用了 AI 辅助，但作者声称对结果负责。

reddit · r/MachineLearning · /u/4rtemi5 · 8月16日 10:06

**「背景」** 缩放点积注意力（SDPA）是视觉 Transformer 中的标准注意力机制，它会为每个查询 token 与图像中所有 token 计算相似度得分，因此复杂度为 O\(N²·d\)。SSOG（可分离高斯之和）则放弃了这种内容打分方式，改为让每个注意力头学习少量可分离的高斯“原子”，这些原子基于相对位置，并允许查询 token 通过微小的偏移来“几何地”引导注意力场，从而将复杂度降至 O\(N·√N·d\)。

**「影响」** 对于需要处理长序列或高分辨率图像的研究者与工程师，SSOG 在保持与 SDPA 相当性能的同时将复杂度降至次二次水平，并减少内存占用，从而可能提升可扩展性。不过，当前证据主要来自作者发布的实验，尚需独立验证和社区复现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/4rtemi5/ssog/blob/main/README.md">ssog/README.md at main · 4rtemi5/ssog · GitHub</a></li>

</ul>
</details>

**标签**: `#attention mechanisms`, `#efficiency`, `#scalable AI`, `#Gaussian kernels`, `#deep learning`

---

<a id="item-tech-news-3"></a>
### [模型正被有意“变笨”：转向外部知识与工具调用](https://w4g1.dev/blog/models-are-getting-dumber-on-purpose) ⭐️ 7.0/10

这篇文章分析了一个趋势：AI 模型正被刻意降低知识密度，转而在运行时依赖可插拔的知识库和工具调用。作者认为这种做法有助于减少幻觉，因为事实由外部检索或工具结果提供，而非储存在模型权重中；但它也引发了关于推理与事实能否真正分离的疑问。这一方向是否会持续发展，目前仍不确定。

hackernews · hruvhwe · 8月16日 19:04 · [社区讨论](https://news.ycombinator.com/item?id=49322695)

**「背景」** 这篇文章讨论的是大语言模型（LLM）设计思路的一个明显转变：模型不再试图把尽可能多的事实知识压缩进参数（权重）中，而是刻意保持“较笨”的知识密度，转而依赖可插拔的知识库、检索增强生成（RAG）和外部工具调用。例如，编码代理可以去查阅项目实际安装的依赖文档，而不是依赖训练数据里某个版本的记忆。这种趋势意味着模型规模可能变小、知识更新更快，但也引发了对推理与事实是否真能完全分离的讨论。

**「影响」** 对需要高准确率事实回答的应用开发者而言，不应再默认模型会可靠记住事实，而应把检索增强生成、工具调用或外部知识库纳入设计；不过社区也指出文中引用的基准和模型数据可能已过时，具体效果仍需验证。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://w4g1.dev/blog/models-are-getting-dumber-on-purpose">Models Are Getting Dumber on Purpose - Walter van der Giessen</a></li>
<li><a href="https://news.ycombinator.com/item?id=49322695">Models Are Getting Dumber on Purpose | Hacker News</a></li>
<li><a href="https://www.alibabacloud.com/blog/602803">Is Your AI Agent Getting Dumber? Alibaba Cloud AnalyticDB Unveils AI Context Engineering - Alibaba Cloud Community</a></li>

</ul>
</details>

**标签**: `#artificial-intelligence`, `#large-language-models`, `#information-retrieval`, `#tool-use`, `#machine-learning`

---

<a id="item-tech-news-4"></a>
### [Cloudflare 切换域名服务器后静默注入分析脚本](https://news.ycombinator.com/item?id=49322107) ⭐️ 7.0/10

用户 stagas 近日将域名 nameserver 切换到 Cloudflare 以便通过自有子域名提供 R2 Bucket 服务，结果发现 Cloudflare 在其原本无 JavaScript 的纯 HTML 网站 textlog.cc 中静默注入了 JS 分析脚本。用户必须先在 Analytics 仪表板中添加站点，然后才能禁用该脚本；他认为这种默认开启、需要手动选择退出的做法具有侵入性。社区成员指出该脚本来自 static.cloudflareinsights.com/beacon.min.js，版本为 2024.11.0，并提供了通过 CSP 的 script-src 指令限制脚本来源的替代方案。另有评论者提到，若域名仅用于 DNS 而不使用 Cloudflare 代理，则不会出现 Web Analytics 自动启用的情况。

hackernews · stagas · 8月16日 17:49

**「背景」** Cloudflare 的 Web Analytics 功能通过 Real User Monitoring（RUM）信标脚本收集真实用户性能指标。当站点使用 Cloudflare 代理（即开启橙色云，由 Cloudflare 终止 HTTPS 连接）时，Cloudflare 可以在响应 HTML 中自动注入该脚本；若账户此前未主动配置，该功能可能默认启用，导致用户需要手动进入 Analytics 仪表盘关闭。社区评论也指出，仅将 Cloudflare 用作 DNS（不开启代理）时不会出现注入，而内容安全策略（CSP）可限制仅允许加载自托管脚本。

**「影响」** 使用 Cloudflare 代理（或切换 nameserver 后默认开启代理）的站点所有者可能被自动注入 Web Analytics 脚本，需要手动进入 Analytics 仪表板添加站点并禁用脚本，或使用 CSP 等额外措施加以阻止。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://ideaverse.ai/blog/cloudflare-dns-change-triggered-hidden-analytics-script-injection-mswbamkg">Cloudflare DNS Change Triggered Hidden Analytics Script ...</a></li>
<li><a href="https://developers.cloudflare.com/speed/observatory/rum-beacon/">RUM beacon for Web Analytics · Cloudflare Speed docs</a></li>
<li><a href="https://burgeonlab.com/blog/cloudflare-web-analytics-rum-injected-tracking-beacon-script-into-my-sites/">Cloudflare Auto Injected Tracking Scripts To My Sites</a></li>

</ul>
</details>

**标签**: `#cloudflare`, `#analytics`, `#privacy`, `#dns`, `#javascript`

---

<a id="item-tech-news-5"></a>
### [Qwen 3.8 27B 本地运行出色，但默认过度思考](https://simonwillison.net/2026/Aug/16/qwen-38-27b/) ⭐️ 7.0/10

Simon Willison 评测了阿里 Qwen 实验室新发布的 Apache 2.0 许可、270 亿参数的视觉语言模型 Qwen 3.8 27B。模型自称基准相比 Qwen 3.6 27B 和闭源 Qwen 3.7-Plus 都有提升，但默认的推理强度为 xhigh，导致在消费级硬件上严重“过度思考”：生成一只鹈鹕骑自行车的 SVG 用了 21 分钟、22276 个推理 token 才产出 3223 个输出 token；而关闭推理后同一提示仅需 137 秒、3715 个 token。Willison 在 128GB M5 Max MacBook Pro 和 NVIDIA DGX Spark 上通过 LM Studio 的 17GB Q4\_K\_M 量化版测试，并建议用户一开始就把推理强度设为 low 或关闭。他还发现该模型在照片目标边界框检测方面表现出色，但对于更简单的请求（如“画一个圆”）也会生成过度复杂且精美但非所需的动画。

rss · Simon Willison · 8月16日 22:00

**「背景」** Qwen 是阿里巴巴 Qwen 研究实验室发布的开放权重大型语言模型系列，Qwen 3.8 27B 是该系列最新的一款 Apache 2.0 许可、支持视觉输入的 27B 参数模型。27B 这一规模适合在配置较好的笔记本等本地设备上运行，其前代 Qwen 3.6 27B 已经表现不俗。该模型默认将“推理强度”（reasoning\_effort）设为 xhigh，这会显著延长生成时间并消耗大量上下文 token，因此实际使用时通常建议调低或关闭该设置。

**「影响」** 在本地运行 Qwen 3.8 27B 的用户若保留默认的 xhigh 推理档位，会遭遇严重的过度思考和极慢生成——Simon Willison 用 17GB Q4\_K\_M 量化版生成一个 SVG 图像耗时 21 分钟、耗掉 22276 个推理 token，因此应主动改用 low 或不启用推理；同时需注意 LM Studio 默认 8192 token 上下文会被思考过程占满，需调高上下文长度。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/Qwen/Qwen3.8-27B">Qwen/ Qwen 3 . 8 - 27 B · Hugging Face</a></li>
<li><a href="https://www.implicator.ai/alibaba-publishes-the-qwen3-8-max-benchmarks-it-withheld-two-weeks-ago/">Alibaba Publishes Qwen 3 . 8 -Max Benchmarks , Sets Open-Weights</a></li>
<li><a href="https://www.orcarouter.ai/blog/qwen-3-8-27b-review">Qwen 3 . 8 - 27 B Review: The Open-Weight 27 B Worth Running</a></li>

</ul>
</details>

**标签**: `#LLM`, `#Qwen`, `#Open Source`, `#AI Models`, `#Simon Willison`

---

<a id="item-tech-news-6"></a>
### [美国据报要求盟友在 AI 合作中选边，签 Pax Silica 宣言](https://www.neowin.net/news/us-warns-allied-nations-side-with-us-in-the-ai-race-against-china-or-face-the-consequences/) ⭐️ 7.0/10

美国国务院据报起草信函，要求盟友及希望与华盛顿开展 AI 合作的国家选边，签署 Pax Silica 宣言并承诺不加入相冲突的重复倡议，否则可能被排除在美国主导的 AI 联盟之外。该消息基于未证实的报道，信函草案显示签署宣言不仅是加入联盟，还包含排他性义务。此举可能影响国际 AI 合作格局及各国的多边 AI 倡议选择。目前尚无官方确认，实际执行和后果仍不确定。

telegram · zaihuapd · 8月16日 02:30

**「背景」** Pax Silica 是美国国务院主导的一项倡议，于 2025 年 12 月启动，并与首批伙伴国家签署了不具约束力的《Pax Silica 宣言》。该倡议旨在围绕人工智能和稀土元素构建安全、有韧性的技术生态系统，涵盖关键矿产、能源、先进制造、半导体、AI 基础设施和物流等领域，其目标隐含减少对中国的依赖并制衡中国在这些领域的主导地位。

**「影响」** 该草案若落实，将迫使已签署美国《AI 机会声明》的 35 国（包括日本、澳大利亚、韩国以及同时参加中国联盟的哈萨克斯坦）在美中之间选边，签署 Pax Silica 后不得再加入冲突性倡议，否则可能被排除在美国主导的 AI 合作之外，从而打乱这些国家现有的多重合作布局。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Pax_Silica">Pax Silica - Wikipedia</a></li>
<li><a href="https://www.state.gov/pax-silica">Pax Silica - United States Department of State</a></li>
<li><a href="https://www.channelnewsasia.com/east-asia/us-china-ai-race-pax-silica-waico-6320671">US to tell partners they must pick sides in AI race with China - CNA</a></li>

</ul>
</details>

**标签**: `#AI policy`, `#geopolitics`, `#Pax Silica`, `#US-China relations`, `#tech industry`

---

## 财经新闻

<a id="item-finance-news-1"></a>
### [Anthropic 第二季初步营收超 115 亿美元，同比增长逾 14 倍](https://www.cnbc.com/2026/08/15/anthropic-revenue-jumps-to-over-11point5-billion-in-q2-report.html) ⭐️ 8.0/10

彭博社援引公司文件称，Anthropic 第二季初步营收超过 115 亿美元，同比增长逾 14 倍；当季调整后营业利润转正，公司正筹备可能在今秋启动的大型 IPO。

telegram · zaihuapd · 8月16日 07:26

**「背景」** Anthropic 是一家人工智能安全与研究公司，旗下产品为 Claude 系列大语言模型。据外部资料，该公司此前已完成多轮融资，并于 2026 年 6 月提交了 IPO 申请。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Anthropic">Anthropic - Wikipedia</a></li>
<li><a href="https://www.taskade.com/blog/anthropic-claude-history">Anthropic History 2026: Claude AI Timeline, Funding &amp; IPO</a></li>

</ul>
</details>

**标签**: `#Anthropic`, `#revenue`, `#AI`, `#IPO`, `#earnings`

---

## 社区讨论

<a id="discussion-tech-news-1"></a>
### [Anthropic 公开 Claude 系统提示词，开发者可追踪版本变化](https://platform.claude.com/docs/en/release-notes/system-prompts) ⭐️ 8.0/10

评论中，Simon Willison 分享了自己将系统提示词整理成 Git 提交历史的仓库，方便对比版本差异，并指出 Opus 4.8 到 Opus 5 的差异中最有趣的是提示词中出现了 Claude Fable 5 和 Claude Mythos 5 的首次发布信息。另有用户对 HN 移除对 AI 有负面含义的帖子表示担忧，还有用户认为 Anthropic 通过系统提示词要求模型自行检查是否真的存在图片的做法，反映出他们并不完全把模型视为具备真正智能，并指出系统提示词只是塑造模型行为的多层系统中的一层。

[正文](#item-tech-news-1) · [社区讨论](https://news.ycombinator.com/item?id=49319556)

---

<a id="discussion-tech-news-3"></a>
### [模型正被有意“变笨”：转向外部知识与工具调用](https://w4g1.dev/blog/models-are-getting-dumber-on-purpose) ⭐️ 7.0/10

评论区对方向存在分歧：有人看好模块化、可插拔的知识库，认为权重内事实会以年为单位过时；也有人批评文章数据过时，例如 SimpleQA 未更新、Gemini 2.5 Pro 已发布 16 个月，并质疑推理与事实能否真正分离。

[正文](#item-tech-news-3) · [社区讨论](https://news.ycombinator.com/item?id=49322695)

---

<a id="discussion-tech-news-4"></a>
### [Cloudflare 切换域名服务器后静默注入分析脚本](https://news.ycombinator.com/item?id=49322107) ⭐️ 7.0/10

评论者普遍认为这是默认 opt-out 的隐私问题，并提供了技术应对方法；同时存在关于是否只在 Cloudflare 代理模式下才会注入的讨论，因为仅将域名设为 DNS-only 的评论者表示未看到 Web Analytics 被启用。

[正文](#item-tech-news-4)

---