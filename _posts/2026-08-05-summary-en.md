---
layout: default
title: "Horizon Summary: 2026-08-05 (EN)"
date: 2026-08-05
lang: en
---

> From 49 items, 24 important content pieces were selected

---

**Technology News**
1. [ByteDance&\#x27;s SeedRealtime Native Full-Duplex Model Goes Live in Doubao](#item-tech-news-1) ⭐️ 9.0/10
2. [Eight Myths on Software Engineering and GenAI](#item-tech-news-2) ⭐️ 8.0/10
3. [Gwern leaves pseudonymous writing to launch Guardian Angel](#item-tech-news-3) ⭐️ 8.0/10
4. [Cloudflare replaces third-party security tools with $58/month AI triage](#item-tech-news-4) ⭐️ 8.0/10
5. [China Issues First Mandatory L3/L4 Autonomous Driving Standard](#item-tech-news-5) ⭐️ 8.0/10
6. [ChainDrop Worm Compromises Over 1,300 npm Packages](#item-tech-news-6) ⭐️ 8.0/10
7. [Mistral Shieldstral: 3B Open-Weight Multimodal Moderation Model](#item-tech-news-7) ⭐️ 7.0/10
8. [Inclusive Color Space: Generating Diverse Skin Tones for Digital Art](#item-tech-news-8) ⭐️ 7.0/10
9. [Waymo Opens Dallas Ride-Hailing to Everyone](#item-tech-news-9) ⭐️ 7.0/10
10. [LLM 0.32 adds reasoning traces, OpenAI Responses support, server-side tools](#item-tech-news-10) ⭐️ 7.0/10
11. [MiniMax-H3 omni-modal model runs on Apple Silicon via MLX](#item-tech-news-11) ⭐️ 7.0/10
12. [US Weighs Ban on Chinese Optical Modules for AI Data Centers](#item-tech-news-12) ⭐️ 7.0/10
13. [White House Reverses on Open-Source AI Regulation, Shifts to Pre-Release Security Reviews](#item-tech-news-13) ⭐️ 7.0/10
14. [Samsung, SK Hynix Test Chinese Etching Tools to Hedge US Export Curbs](#item-tech-news-14) ⭐️ 7.0/10
15. [AI Engineer Gets 5 Years for Deleting 89 TB of Model Data](#item-tech-news-15) ⭐️ 7.0/10

**Financial News**
1. [FT: Google sets up $200bn financing structure for Anthropic AI chips](#item-finance-news-1) ⭐️ 8.0/10
2. [DeepSeek restarts second funding round at 500 billion yuan pre-money valuation](#item-finance-news-2) ⭐️ 8.0/10
3. [After-Hours Stock Moves: Arista Rises, AMD and Teradata Fall on Earnings](#item-finance-news-3) ⭐️ 7.0/10
4. [Polymarket in Talks for Fundraising at Over $20 Billion Valuation](#item-finance-news-4) ⭐️ 7.0/10
5. [Fed&\#x27;s Paulson: Current rates are sufficient but policy could be recalibrated](#item-finance-news-5) ⭐️ 7.0/10
6. [Jeff Bezos files plan to sell about $4.1 billion in Amazon stock](#item-finance-news-6) ⭐️ 7.0/10
7. [Premarket Stock Movers: Caterpillar and Palantir Lead on Q2 Earnings](#item-finance-news-7) ⭐️ 7.0/10
8. [Goldman Sachs Q2 trading revenue surges to record on equities strength](#item-finance-news-8) ⭐️ 7.0/10
9. [China’s State Post Bureau Investigates STO Express Over Safety Management](#item-finance-news-9) ⭐️ 7.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [ByteDance&\#x27;s SeedRealtime Native Full-Duplex Model Goes Live in Doubao](https://seed.bytedance.com/zh/blog/seedrealtime-%E9%9F%B3%E8%A7%86%E9%A2%91%E5%85%A8%E5%8F%8C%E5%B7%A5%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%8F%91%E5%B8%83-%E8%B5%B0%E5%90%91%E5%85%A8%E6%A8%A1%E6%80%81%E8%87%AA%E7%84%B6%E4%BA%A4%E4%BA%92) ⭐️ 9.0/10

ByteDance released SeedRealtime on August 5, a native audio-video full-duplex multimodal model that unifies audio, video, and text in a single architecture. It enables real-time interaction on continuous multimodal streams, supporting joint audio-video understanding, proactive environment perception, and smooth dialogue rhythm. End-to-end human evaluation shows that audio-video dialogue rhythm problems are reduced by half compared with cascade models, and issues like being interrupted before finishing speech are significantly decreased. The model is now fully launched in the Doubao app. Unlike traditional cascades of ASR, VLM, and TTS, SeedRealtime performs perception, understanding, decision-making, and expression in one end-to-end model without needing an external VAD for turn-taking.

telegram · zaihuapd · Aug 5, 04:42

**「Background」** Traditional real-time dialogue systems typically chain separate modules: automatic speech recognition \(ASR\) converts audio to text, a vision-language model \(VLM\) processes multimodal input, and text-to-speech \(TTS\) generates spoken replies, causing latency and information loss between stages. SeedRealtime&\#x27;s end-to-end design treats real-time multimodal conversation as a single task, allowing the model to concurrently process audio and video streams and generate natural, full-duplex spoken interactions without modular handoffs.

**「Impact」** Doubao app users now get a real-time multimodal conversational experience with noticeably fewer dialogue interruptions and smoother turn-taking than previous cascade-based systems, and the release signals ByteDance&\#x27;s move to deploy native multimodal full-duplex models at consumer scale.

**Tags**: `#AI`, `#multimodal`, `#real-time dialogue`, `#ByteDance`, `#SeedRealtime`

---

<a id="item-tech-news-2"></a>
### [Eight Myths on Software Engineering and GenAI](https://queue.acm.org/detail.cfm?id=3807963) ⭐️ 8.0/10

ACM Queue&\#x27;s article &\#x27;Eight Myths on Software Engineering and GenAI&\#x27; examines common misconceptions about generative AI&\#x27;s role in software development, such as the belief that developers spend most of their time typing. The piece draws on research, including studies that put editor typing time at roughly 14 percent, to argue that AI-assisted workflows change how developers plan, communicate, and write code. It is aimed at practitioners navigating AI copilots and agents, and the analysis is framed as a clarification of evidence rather than a prediction of industry transformation. The article has generated active discussion among developers, with some questioning the timeliness of the underlying research and others sharing how their own processes have shifted.

hackernews · tchalla · Aug 4, 23:50 · [Discussion](https://news.ycombinator.com/item?id=49176830)

**「Background」** The ACM Queue article &\#x27;Eight Myths on Software Engineering and GenAI&\#x27; \(by Jenna Butler, Brian Houck, Margaret-Anne Storey, Travis Lowdermilk, Steven Clarke, and Emerson Murphy-Hill\) examines common misconceptions about generative AI in software development, such as the belief that enterprises can innovate at startup speed once they adopt GenAI. The piece is set against a backdrop of widely circulated studies—including Microsoft research suggesting developers spend only about 14 percent of their time writing code and an early-2025 METR study referenced in the discussion—that shape current expectations about AI-assisted engineering and productivity.

**「Impact」** For developers and engineering leaders using generative AI tools, the article offers a more evidence-based view of what AI does and does not change, potentially helping them avoid overestimating productivity gains and misallocating effort.

**「Community Discussion」** Commenters debate the article&\#x27;s footing: one rejects the premise that current AI research is pointless because future agents will handle it, while Simon Willison observes he now spends more time writing code or steering agents than before. Another criticizes the piece for citing an &\#x27;ancient&\#x27; early-2025 METR study as recent, suggesting the evidence may already be outdated.

<details><summary>References</summary>
<ul>
<li><a href="https://queue.acm.org/detail.cfm?id=3807963">Eight Myths on Software Engineering and GenAI - ACM Queue</a></li>
<li><a href="https://queue.acm.org/?name=Content&amp;pa=showcomments&amp;pid=273">ACMQ Site - ACM Queue</a></li>

</ul>
</details>

**Tags**: `#software-engineering`, `#genai`, `#ai-myths`, `#developer-productivity`, `#acm-queue`

---

<a id="item-tech-news-3"></a>
### [Gwern leaves pseudonymous writing to launch Guardian Angel](https://twitter.com/gwern/status/2084739205071343837) ⭐️ 8.0/10

Gwern, the prominent pseudonymous AI researcher and writer, announced on Twitter that he is retiring from fulltime writing and pseudonymity to launch Guardian Angel, an AI-focused project detailed in an accompanying essay at gwern.net/guardian-angel. The essay argues that current chatbot personas are &\#x27;deeply misaligned&\#x27; with users and aligned with their corporate owners, whose economic incentives are to farm users with ads and subscriptions rather than amplify them. Gwern describes his goal of building an AI assistant that acts as a &\#x27;guardian angel&\#x27; for the individual and asks what it would take for LLMs to make him 100x more productive. The announcement has generated significant discussion on Hacker News, with both support and skepticism about the project&\#x27;s framing of LLMs.

hackernews · mattsterett · Aug 4, 20:48 · [Discussion](https://news.ycombinator.com/item?id=49174900)

**「Background」** Gwern Branwen is a prominent independent AI researcher and writer known for extensive essays on AI, statistics, and related topics. His announcement to retire from full-time writing and pseudonymity accompanies the launch of Guardian Angel Inc., a project focused on LLM personalization for productivity and security, as described in his essay &\#x27;Guardian Angels: LLM Personalization for Productivity and Security.&\#x27; The project appears to address concerns about chatbot alignment and economic incentives in AI, aiming to create more personalized AI assistants. These tool results provide supporting context for his shift from writing to this new venture.

**「Impact」** Gwern&\#x27;s readers will see a halt in his regular fulltime essays as he dedicates effort to building Guardian Angel, an AI project that reframes AI assistants as tools aligned with individual users rather than with corporate interests.

**「Community discussion」** Hacker News commenters were divided: some praised Gwern&\#x27;s track record and genuine care, while others called the Guardian Angel essay&\#x27;s framing of LLMs a &\#x27;kind of mania&\#x27; that treats them as &\#x27;quasi-gods.&\#x27; Several comments also engaged with the essay&\#x27;s point about workers becoming bottlenecks that AI can replace, framing the project as part of a broader economic shift.

<details><summary>References</summary>
<ul>
<li><a href="https://zeli.app/en/story/49174900">Gwern Branwen steps back from full-time writing to launch Guardian ...</a></li>
<li><a href="https://blog.danielsosebee.com/p/on-gwerns-guardian-angels">On Gwern &#x27;s &quot; Guardian Angels &quot; - Daniel Sosebee</a></li>
<li><a href="https://stacker.news/items/1540535">Gwern is moving to AI \ stacker news</a></li>

</ul>
</details>

**Tags**: `#AI`, `#AI safety`, `#AI assistants`, `#Gwern`, `#tech industry`

---

<a id="item-tech-news-4"></a>
### [Cloudflare replaces third-party security tools with $58/month AI triage](https://www.theregister.com/security/2026/08/04/cloudflare-has-mostly-ditched-third-party-security-tools-suggests-not-trying-that-at-home/5282600) ⭐️ 8.0/10

Cloudflare Chief Security Officer Grant Bourzikas revealed at an event in Sydney that the company now automates vulnerability-bounty report triage using Anthropic&\#x27;s Claude Sonnet model for about $58 per month, handling deduplication and assessing report value. He said using the security-specific model Mythos for the same work would cost roughly $200,000 per month. Bourzikas also stated that Cloudflare has built more than 200 autonomous security agents and has largely abandoned third-party security tools in favor of in-house applications, some written with AI assistance. He cautioned other organizations against copying the approach, noting that not every bank should build all its own security software. Chief Strategy Officer Stephanie Cohen said AI will fundamentally change how vendors and customers work together, attributed the company&\#x27;s earlier 1,100-person layoff to AI-driven automation, and said Cloudflare plans to act as an intermediary for micropayments between AI companies and publishers.

telegram · zaihuapd · Aug 4, 09:24

**「Background」** Bug-bounty programs invite independent researchers to report security flaws, and the resulting reports must be triaged to remove duplicates and prioritize which issues deserve engineering attention. Cloudflare says it has automated much of that triage work, as well as broader security operations, using AI agents it built internally rather than purchasing tools from third-party vendors.

**「Impact」** The disclosure gives security teams a concrete cost benchmark—$58 per month for LLM-based bug-bounty triage versus roughly $200,000 per month for a specialized model—but Cloudflare&\#x27;s own CSO cautions that the approach depends on substantial in-house engineering and is not a template for most organizations.

**Tags**: `#AI`, `#security`, `#Cloudflare`, `#bug-bounty`, `#automation`

---

<a id="item-tech-news-5"></a>
### [China Issues First Mandatory L3/L4 Autonomous Driving Standard](https://wap.miit.gov.cn/jgsj/zbys/qcgy/art/2026/art_a1d2072374884287b67048a77560014e.html) ⭐️ 8.0/10

China&\#x27;s Ministry of Industry and Information Technology \(MIIT\) issued GB 44721—2026, the country&\#x27;s first mandatory national standard for L3 \(conditionally automated\) and L4 \(highly automated\) driving systems, titled &quot;Intelligent Connected Vehicles—Safety Requirements for Automated Driving Systems.&quot; The standard is scheduled to take effect on July 1, 2027. It applies to M-class \(passenger\) and N-class \(cargo\) vehicles equipped with L3/L4 systems but excludes automated parking systems. GB 44721—2026 systematically upgrades the 2024 recommended national standard into a binding requirement, building a safety framework around four dimensions: enterprise full-lifecycle safety assurance, system dynamic driving capability, human-machine interaction and user notification, and multi-dimensional inspection and testing. It requires the safety level of automated driving systems to be at least equivalent to that of a qualified and attentive human driver.

telegram · zaihuapd · Aug 4, 13:06

**「Background」** The new mandatory standard GB 44721—2026, issued by China&\#x27;s Ministry of Industry and Information Technology \(MIIT\) and approved by the State Administration for Market Regulation and the National Standardization Administration, replaces the earlier voluntary/recommended standard GB/T 44721—2024 on general technical requirements for intelligent connected vehicle automated driving systems. It specifically targets L3 \(conditionally automated\) and L4 \(highly automated\) driving systems on M-class \(passenger\) and N-class \(cargo\) vehicles. This shift from a recommended to a mandatory national standard establishes a unified safety baseline ahead of the planned July 1, 2027 implementation date, following MIIT&\#x27;s conditional access approvals for two L3 models in 2025.

**「Impact」** Automakers and developers of L3/L4 systems for passenger and cargo vehicles in China must align their safety, testing, and user-communication practices with mandatory requirements by July 2027, making the previously recommended standard a binding compliance threshold.

<details><summary>References</summary>
<ul>
<li><a href="https://wap.miit.gov.cn/jgsj/zbys/qcgy/art/2026/art_a1d2072374884287b67048a77560014e.html">《智能网联汽车 自动驾驶系统安全要求》强制性国家标准正式发布</a></li>
<li><a href="https://sesec.eu/wp-content/uploads/2026/03/%E5%BE%81%E6%B1%82%E6%84%8F%E8%A7%81%E7%A8%BF-%E6%99%BA%E8%83%BD%E7%BD%91%E8%81%94%E6%B1%BD%E8%BD%A6-%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6%E7%B3%BB%E7%BB%9F%E5%AE%89%E5%85%A8%E8%A6%81%E6%B1%82.pdf">` ICS 42.020 CCS T40 中华人民共和国国家标准 GB XXXXX—XXXX 代替 GB/T 44721—2024</a></li>

</ul>
</details>

**Tags**: `#autonomous-driving`, `#regulation`, `#China`, `#L3-L4`, `#safety-standards`

---

<a id="item-tech-news-6"></a>
### [ChainDrop Worm Compromises Over 1,300 npm Packages](https://www.bleepingcomputer.com/news/security/massive-chaindrop-npm-supply-chain-attack-infects-hundreds-of-packages/) ⭐️ 8.0/10

ChainDrop, a self-propagating worm, has compromised more than 1,300 npm packages with combined monthly downloads of 2 billion, including popular caching tools Keyv and Cacheable. The attack began with the compromise of a Keyv maintainer&\#x27;s GitHub account and expanded to packages associated with organizations such as Deliveroo, Qlik, and ServiceTitan. Malicious versions were published through legitimate GitHub Actions workflows, giving them valid provenance. A setup.mjs dropper and a Math\_Symbol.js credential-stealing script execute automatically during npm install, harvesting GitHub, npm, AWS, and Kubernetes credentials and then infecting other maintainers&\#x27; packages. Security researchers advise treating any system that installed an affected version as compromised, rebuilding environments, rotating all tokens, and using npm-cache\[.\]com as an indicator of compromise.

telegram · zaihuapd · Aug 5, 03:04

**「Background」** npm is the largest package registry for JavaScript, and supply-chain attacks occur when attackers use stolen maintainer credentials or compromised build pipelines to publish malicious code that users install with npm install. ChainDrop is a worm because it spreads automatically by using stolen credentials to modify other packages, making it particularly dangerous in a shared ecosystem.

**「Impact」** Any developer or organization that installed one of the affected package versions should assume their environment is compromised, rotate all credentials, and inspect logs for the npm-cache\[.\]com indicator.

**Tags**: `#supply chain security`, `#npm`, `#malware`, `#open source security`, `#security incident`

---

<a id="item-tech-news-7"></a>
### [Mistral Shieldstral: 3B Open-Weight Multimodal Moderation Model](https://mistral.ai/news/shieldstral/) ⭐️ 7.0/10

Mistral released Shieldstral, a 3B-parameter open-weights model for multimodal content moderation, available on Hugging Face as mistralai/Shieldstral-1.0-3B. The focused model is designed to let developers deploy dedicated moderation logic instead of relying on hidden safety behavior inside general-purpose models. Its small size and open weights aim to make content-moderation pipelines more cost-effective and easier to reason about. The move reflects Mistral&\#x27;s broader strategy of shipping smaller, fine-tuned models for specific use cases. The release matters because it gives developers a concrete, deployable alternative for moderation tasks, though the model&\#x27;s flexibility for arbitrary custom rulesets remains an open question.

hackernews · riadsila · Aug 4, 16:36 · [Discussion](https://news.ycombinator.com/item?id=49171268)

**「Background」** Shieldstral is a 3B-parameter open-weights multimodal safety classifier from Mistral AI, introduced with claims of outperforming models up to 7x its size by framing content moderation as a policy-adaptive question-answering task. Mistral states that it runs on a single 16GB NVIDIA GPU and gives enterprises customized control of what is deemed safe. These details position it as a lightweight, deployable alternative to larger moderation systems.

**「Impact」** For developers and enterprises building content moderation pipelines, Shieldstral offers a deployable Apache 2.0 model that runs on a single 16GB NVIDIA GPU and lets policies be supplied as plain-language questions, with Mistral reporting it outperforms classifiers up to 7x its size.

**「Community Discussion」** Early commenters welcome Mistral&\#x27;s shift toward smaller, focused models, with several saying a dedicated moderation model is easier to reason about than safety logic embedded in a general model and potentially a cost-effective solution for content moderation. On the other hand, one commenter asked whether Shieldstral supports arbitrary rulesets or simply reproduces one &quot;big tech&quot; style of moderation, questioning how much can be tuned without retraining.

<details><summary>References</summary>
<ul>
<li><a href="https://mistral.ai/news/shieldstral/">Introducing Shieldstral. | Mistral AI</a></li>
<li><a href="https://x.com/MistralAI/status/2084684737554141253">Mistral AI on X: &quot;State-of-the-art on multimodal moderation, Shieldstral boasts industry-leading efficiency, running on a single 16GB NVIDIA GPU and gives enterprises customized control of what’s deemed safe.&quot; / X</a></li>
<li><a href="https://mistral.ai/news/shieldstral/">Introducing Shieldstral. | Mistral AI</a></li>
<li><a href="https://x.com/MistralAI/status/2084684737554141253">Mistral AI on X: &quot;State-of-the-art on multimodal moderation, Shieldstral boasts industry-leading efficiency, running on a single 16GB NVIDIA GPU and gives enterprises customized control of what’s deemed safe.&quot; / X</a></li>

</ul>
</details>

**Tags**: `#Mistral`, `#content moderation`, `#open-weights`, `#multimodal`, `#AI model`

---

<a id="item-tech-news-8"></a>
### [Inclusive Color Space: Generating Diverse Skin Tones for Digital Art](https://toneyalexander.github.io/inclusive-color-space/) ⭐️ 7.0/10

A Hacker News user presented &\#x27;inclusive-color-space&\#x27;, an interactive web project that defines a custom color space and algorithm for generating plausible, diverse skin tones for digital art and game development. The page includes a color picker, procedural generation mode, and multiple JavaScript demonstrations built from the space&\#x27;s equations, along with detailed explanations of its properties and construction. The author says the methodology &\#x27;might be a bit shaky&\#x27; but includes a Future Work section, and reports that the result has been helpful in their own projects.

hackernews · automatoney · Aug 4, 15:16 · [Discussion](https://news.ycombinator.com/item?id=49170165)

**「Background」** Digital artists and game developers typically choose skin tones by sampling photographs or relying on a small palette, which can make it hard to generate plausible, diverse representations. A color space is a mathematical mapping of colors; most general-purpose spaces like RGB or HSV do not encode &\#x27;skin&\#x27; as a distinct region, so a dedicated space can help constrain generated colors to realistic skin tones.

**「Community Discussion」** Commenters were broadly enthusiastic, praising the project as &\#x27;beautiful work&\#x27; and noting that the fitted function approach is a &\#x27;slick idea.&\#x27; One commenter asked whether the author considered Pantone Skin Tones, another shared supporting evidence that foundation-shade data forms the same crescent shape in Oklab, and a third asked for details about the manual labeling step in the methodology.

**Tags**: `#color space`, `#skin tones`, `#computer graphics`, `#procedural generation`, `#color science`

---

<a id="item-tech-news-9"></a>
### [Waymo Opens Dallas Ride-Hailing to Everyone](https://waymo.com/blog/shorts/dallas-open-to-all/) ⭐️ 7.0/10

Waymo announced that its autonomous ride-hailing service in Dallas is now open to all users, marking another major city expansion for the leading self-driving taxi company. The service had previously been limited to a smaller group of riders, and this move makes it publicly available without a waitlist. Dallas joins other major metros where Waymo operates, though the announcement does not specify the exact service-area boundaries or fleet size. The expansion is significant because it brings mainstream consumer access to autonomous vehicles in a large Texas city, continuing Waymo&\#x27;s pattern of gradual commercial rollout.

hackernews · xnx · Aug 4, 18:29 · [Discussion](https://news.ycombinator.com/item?id=49172836)

**「Background」** Waymo, Alphabet’s autonomous vehicle subsidiary, first launched its ride-hailing service in Dallas earlier this year with a waitlist. On August 4, 2026, the company opened the service to all public riders in Dallas via the Waymo app, ending that waitlist. The expansion is part of Waymo’s broader rollout of fully autonomous robotaxi services across multiple U.S. cities, though the Dallas service area currently remains limited and does not yet cover Fort Worth.

**「Impact」** Dallas-area residents and visitors can now request fully autonomous rides through the Waymo app, expanding practical access to driverless transportation in a major U.S. city.

**「Community Discussion」** Commenters are generally positive about Waymo&\#x27;s driving behavior and safety, with one LA-area user noting the cars cause far fewer incidents than human drivers, though some find the vehicles occasionally stuck. However, several commenters caution that Dallas&\#x27;s sprawling, hub-and-spoke layout makes the current service area less useful than in denser cities like Austin or Houston, and one commenter argues broader urban adoption of driverless cars could serve as an effective affordable-housing policy by reducing development costs.

<details><summary>References</summary>
<ul>
<li><a href="https://www.cnet.com/uncategorized/waymo-opens-all-riders-dallas/">Waymo Opens Up to All Riders in Dallas - CNET</a></li>
<li><a href="https://waymo.com/blog/shorts/dallas-open-to-all/">August 4, 2026 - From the road - Waymo</a></li>
<li><a href="https://www.fox4news.com/news/waymo-autonomous-rides-now-open-public-dallas-waitlist-ends">Waymo autonomous rides now open to public in Dallas as waitlist ends | FOX 4 Dallas-Fort Worth</a></li>

</ul>
</details>

**Tags**: `#autonomous-vehicles`, `#waymo`, `#artificial-intelligence`, `#robotics`, `#transportation`

---

<a id="item-tech-news-10"></a>
### [LLM 0.32 adds reasoning traces, OpenAI Responses support, server-side tools](https://simonwillison.net/2026/Aug/4/new-release-of-llm/#atom-everything) ⭐️ 7.0/10

Simon Willison released LLM 0.32, a major update to his command-line and Python LLM tool, with support for visible reasoning traces, OpenAI Responses API features, server-side tools, and redesigned content-addressable SQLite logs. Running reasoning models now prints their traces to stderr, suppressible with -R/--hide-reasoning, so piped stdout stays clean. Out of the box the release supports the GPT-5.6 model family and makes GPT-5.6 Luna the new default for \`llm\` prompts, and adds server-side tools such as OpenAI&\#x27;s CodeInterpreter and WebSearch. The updated llm-anthropic plugin adds Anthropic WebSearch, WebFetch, CodeExecution, and AnthropicMCP tools, and the new \`llm openai endpoint\` command runs one-off prompts against any OpenAI-compatible endpoint without logging. The Python API also gains a \`model.prompt\(messages=\[\]\)\` parameter and a \`stream\_events\(\)\` interface for handling mixed reasoning, text, tool call, and image events.

rss · Simon Willison · Aug 4, 23:58

**「Background」** LLM is a command-line and Python tool by Simon Willison for interacting with many large language models through a uniform interface. Earlier versions required creating a conversation and sending messages one at a time and returned string sequences, an abstraction that did not match modern models mixing reasoning, text, tools, and images. LLM 0.32 shifts toward message histories and structured streaming events, plus provider server-side tools and visible reasoning.

**「Impact」** For developers and CLI users, the release makes reasoning-model output safer to pipe while adding server-side tool execution and easier ad-hoc testing against any OpenAI-compatible endpoint.

**Tags**: `#LLM`, `#OpenAI`, `#CLI tools`, `#reasoning traces`, `#developer tools`

---

<a id="item-tech-news-11"></a>
### [MiniMax-H3 omni-modal model runs on Apple Silicon via MLX](https://simonwillison.net/2026/Aug/4/minimax-h3-mlx/#atom-everything) ⭐️ 7.0/10

MiniMax has released MiniMax-H3, a general-purpose omni-modal generative system that accepts text, images, audio, and video and can generate video clips of up to 15 seconds with audio included. Simon Willison highlights a new Python package, PipeNetwork/minimax-h3-mlx, which ports the model to MLX for Apple Silicon, and he successfully ran it on an M5 Max MacBook Pro. The setup involves downloading model files from Hugging Face and running a generation script, which downloaded roughly 115 GB of model files and took just under 45 minutes to produce a 15-second video. In his test, the generated video was impressive but the audio was speech-like garbage because he did not provide audio prompt guidance; MiniMax provides a prompting guide with recommendations for better results.

rss · Simon Willison · Aug 4, 19:10

**「Background」** MiniMax-H3 is a recently released general-purpose, omni-modal generative model from MiniMax that can understand and generate content across text, images, video, and audio, producing video clips up to 15 seconds long with native stereo audio at up to 2K resolution. MLX is Apple&\#x27;s machine learning framework for Apple Silicon, and the PipeNetwork/minimax-h3-mlx package ports MiniMax-H3 to run locally on Macs using MLX, enabling users to run the model with commands like those Simon Willison demonstrated.

**「Impact」** Apple Silicon users can now run MiniMax-H3 locally through the MLX port, but the roughly 115 GB download and nearly 45-minute generation time for a short clip mean it is practical mainly for high-end Macs with substantial storage and patience. The quality of generated audio depends heavily on following the prompting guide, so realistic use requires more than a simple text prompt.

<details><summary>References</summary>
<ul>
<li><a href="https://www.minimax.io/blog/minimax-h3">MiniMax H 3 : An Open Model Breaking the Boundaries Between Tasks...</a></li>
<li><a href="https://huggingface.co/MiniMaxAI/MiniMax-H3">MiniMaxAI/ MiniMax - H 3 · Hugging Face</a></li>

</ul>
</details>

**Tags**: `#MLX`, `#MiniMax`, `#video generation`, `#omni-modal`, `#Apple Silicon`

---

<a id="item-tech-news-12"></a>
### [US Weighs Ban on Chinese Optical Modules for AI Data Centers](https://www.reuters.com/world/trump-administration-drafting-ban-chinese-data-center-devices-sources-say-2026-08-04/) ⭐️ 7.0/10

The Trump administration is reportedly drafting a ban on imports of new Chinese data-center components, with a focus on optical modules used in AI infrastructure. Four sources said the FCC is advancing the measure and officials hope to publish and enact it this year, though it may still be modified or shelved. The administration cites risks of data theft, malware implantation, and service disruption by Chinese suppliers. China&\#x27;s embassy in Washington said it would take all necessary measures to defend its interests. The ban would hit leading optical-module maker Innolight, which holds about 27% of the market, and would extend prior FCC import restrictions on Chinese drones, routers, robots, and inverters.

telegram · zaihuapd · Aug 4, 11:29

**「Background」** Optical modules, also called optical transceivers, are components that convert electrical data into light pulses and back, enabling high-speed communication inside data centers and forming a core part of AI infrastructure. The U.S. Federal Communications Commission \(FCC\) has previously imposed similar import restrictions on Chinese-made drones, routers, robots, and inverters, and it now appears to be considering extending that approach to data-center components. Zhongji Innolight, the Chinese company most affected, holds about 27% of the global data center transceiver market, according to Counterpoint Research, and was placed on the Pentagon&\#x27;s military-backed company list in June.

**「Impact」** If enacted, the ban would directly threaten Innolight, the global optical-module leader with a 27% market share, and disrupt AI data-center buildout because Chinese manufacturers supply more than half of the world&\#x27;s key high-speed optical interconnects and U.S. firms lack the production capacity to fully replace that output. Market reactions already reflect these stakes, with shares of companies like Applied Optoelectronics jumping 17% on the news, though the draft may still be modified or shelved.

<details><summary>References</summary>
<ul>
<li><a href="https://ca.finance.yahoo.com/news/optical-component-stocks-rally-proposed-113612148.html">Optical component stocks rally on proposed U.S. ban on Chinese tech</a></li>
<li><a href="https://www.newsnationnow.com/business/tech/fcc-ban-chinese-data-center-components/">Report: FCC considering ban on Chinese data center components</a></li>
<li><a href="https://www.caixinglobal.com/2026-08-05/us-drafts-ban-on-chinese-optical-modules-exposing-mutual-supply-chain-risks-102471268.html">U . S . Drafts Ban on Chinese Optical Modules ... - Caixin Global</a></li>
<li><a href="https://cryptobriefing.com/us-ban-chinese-optics-aaoi-surges/">Applied Optoelectronics surges 17% on reported US ban of Chinese ...</a></li>

</ul>
</details>

**Tags**: `#US-China tech policy`, `#optical modules`, `#AI infrastructure`, `#hardware supply chain`, `#FCC regulation`

---

<a id="item-tech-news-13"></a>
### [White House Reverses on Open-Source AI Regulation, Shifts to Pre-Release Security Reviews](https://www.nytimes.com/2026/08/04/technology/ai-washington-regulation-whiplash.html) ⭐️ 7.0/10

The White House has reportedly reversed its stance on open-source AI regulation, dropping early considerations of sanctions, trade blacklists, and bans on U.S. companies working with Chinese firms after intense Silicon Valley opposition. Instead, on Aug. 4 it invited technology companies to discuss a new framework that would perform pre-release cybersecurity reviews of AI models. The policy swing was triggered by the Chinese open-source model Kimi, whose performance partly rivals OpenAI&\#x27;s top models, deepening a split between OpenAI and Anthropic on national security grounds and Nvidia and Meta in defense of open ecosystems. Nvidia CEO Jensen Huang posted on X for the first time last month to advocate for open source and helped form a security alliance with more than 230 member companies. The shift signals a focus on enhancing U.S. AI competitiveness rather than imposing trade restrictions.

telegram · zaihuapd · Aug 4, 15:22

**「Background」** Open-source AI models are released publicly, allowing anyone to inspect, modify, and use them, while closed models remain proprietary. The U.S. government has debated whether to restrict China&\#x27;s access to advanced AI or restrict U.S. firms&\#x27; collaboration, balancing national security concerns against the competitiveness of American AI companies. The split between OpenAI and Anthropic, which favor closed models, and Nvidia and Meta, which support open ecosystems, has become a central policy tension.

**「Impact」** If adopted, the proposed pre-release cybersecurity review framework would impose new compliance obligations on U.S. AI developers, potentially altering how and when they release open-source models; however, the details remain unconfirmed and the final policy is still in flux.

**Tags**: `#AI regulation`, `#open source`, `#US policy`, `#national security`, `#Silicon Valley`

---

<a id="item-tech-news-14"></a>
### [Samsung, SK Hynix Test Chinese Etching Tools to Hedge US Export Curbs](https://www.reuters.com/world/china/samsung-sk-hynix-test-chinese-chip-tools-hedge-against-us-risks-2026-08-05/) ⭐️ 7.0/10

Samsung Electronics and SK Hynix have reportedly been testing etching equipment from Chinese semiconductor toolmaker AMEC for their China fabs for about two years, aiming to reduce exposure to tightening US export controls, though neither has decided on mass deployment. Samsung denied the testing, while SK Hynix declined to comment. The US in 2025 revoked the firms&\#x27; &quot;validated end-user&quot; status for their Chinese plants and replaced it with annual licenses, raising concerns that future restrictions could affect maintenance of Western-made equipment. Chinese equipment is typically priced 20-30% lower, and Deutsche Bank projects domestic Chinese suppliers could capture 25-30% of China&\#x27;s roughly $28 billion wafer fab equipment market this year.

telegram · zaihuapd · Aug 5, 04:32

**「Background」** AMEC \(Advanced Micro-Fabrication Equipment\) is a major Chinese supplier of etching tools used in semiconductor manufacturing. The validated end-user \(VEU\) program previously let certain approved foreign companies ship sensitive US-origin equipment to authorized Chinese factories without individual licenses; its revocation for Samsung and SK Hynix in 2025 is part of Washington&\#x27;s broader crackdown on advanced chip technology exports to China. With Western tool maintenance now seen as vulnerable to export-control changes, Korean memory makers are exploring Chinese alternatives.

**「Impact」** If the trials lead to deployment, AMEC would gain a major endorsement from two of the world&\#x27;s largest memory chipmakers, potentially accelerating Chinese equipment adoption and lowering Samsung&\#x27;s and SK Hynix&\#x27;s reliance on US-controlled supply chains. However, Samsung&\#x27;s denial and the lack of a final decision mean the practical consequences remain uncertain.

**Tags**: `#semiconductors`, `#supply chain`, `#hardware`, `#export controls`, `#China tech`

---

<a id="item-tech-news-15"></a>
### [AI Engineer Gets 5 Years for Deleting 89 TB of Model Data](https://xinwen.bjd.com.cn/content/s6a728509e4b0e45f3fd5a25b.html) ⭐️ 7.0/10

A Beijing court&\#x27;s second-instance ruling upheld a five-year-ten-month prison sentence and more than 204,000 RMB in compensation for algorithm engineer Wang, who deleted 89 TB of company AI model and training data. Wang ran deletion code for over 17 hours to free up space for training models for external personnel, causing research and development projects to come to a halt. The ruling, announced on June 26, 2026, marks Beijing&\#x27;s first criminal case involving destruction of an AI model. Prosecutors determined that AI models and their training systems, because they automatically process data, qualify as &quot;computer information systems&quot; under criminal law. Labor and computing costs incurred during data recovery were also included in the economic loss calculation.

telegram · zaihuapd · Aug 5, 06:17

**「Background」** Chinese criminal law treats certain data deletion as the crime of destroying computer information systems when it impairs system functionality. In this case, prosecutors and technical experts regarded the AI model training system as a legally protected computer information system, reasoning that training data is the core component and operational basis for the model&\#x27;s training functions. This is reportedly Beijing&\#x27;s first criminal case involving the destruction of an AI model through illegal deletion of training data.

**「Impact」** The precedent establishes in Beijing that AI models and training data are protected computer systems, meaning AI/ML engineers who delete or damage such data can face severe criminal liability and be forced to pay substantial recovery costs.

<details><summary>References</summary>
<ul>
<li><a href="https://c.m.163.com/news/a/L3GVB83505148UCS.html?spss=backflow-index-hotlist">算 法 工 程师为干私活腾空间，疯狂代码17小时删光89TB...</a></li>
<li><a href="https://m.jiemian.com/article/14295450_microcontent.html">为“干私活”删除公司AI 训 练 数 据 ，一程序员获刑五年十个月 | 界面新闻</a></li>

</ul>
</details>

**Tags**: `#AI`, `#legal`, `#data management`, `#cybercrime`, `#China`

---

## Financial News

<a id="item-finance-news-1"></a>
### [FT: Google sets up $200bn financing structure for Anthropic AI chips](https://www.ft.com/content/549f2e23-5aa2-49c7-9ea6-a9784ab7087c) ⭐️ 8.0/10

According to a Financial Times investigation, Google has quietly assembled one of the largest infrastructure financing structures ever to supply Anthropic with more than $150bn of AI chips, under contracts totaling about $200bn, about 80% tied directly to chips. The first deals closed in June through a special-purpose vehicle, Compute SPV, which bought about $35bn of hardware — roughly 1 gigawatt of computing power and 1 million TPU chips.

telegram · zaihuapd · Aug 4, 10:52

**「Background」** Anthropic has no credit rating, so Google built the financing structure on a vendor-financing model similar to Boeing and GE, in which outside investors buy and lease the hardware instead of putting it on Google’s balance sheet.

**Tags**: `#AI基础设施`, `#融资`, `#谷歌`, `#Anthropic`, `#芯片`

---

<a id="item-finance-news-2"></a>
### [DeepSeek restarts second funding round at 500 billion yuan pre-money valuation](https://finance.sina.com.cn/wm/2026-08-05/doc-inimfmyv1554159.shtml) ⭐️ 8.0/10

DeepSeek has reportedly restarted its second-round fundraising, planning to raise 50 billion yuan at a pre-money valuation of about 500 billion yuan, according to traders cited by Sina Finance; the round is expected to close in late August and the valuation is about 43% higher than its first round.

telegram · zaihuapd · Aug 5, 02:46

**「Background」** DeepSeek&\#x27;s first round, which opened in April and closed in June, raised 50 billion yuan at a valuation above 350 billion yuan. The second round reportedly paused in late July after founder Liang Wenfeng was unhappy about leaked notes from an investor meeting, and investors asked for a low-key process.

**Tags**: `#DeepSeek`, `#AI`, `#financing`, `#valuation`, `#China tech`

---

<a id="item-finance-news-3"></a>
### [After-Hours Stock Moves: Arista Rises, AMD and Teradata Fall on Earnings](https://www.cnbc.com/2026/08/04/stocks-making-the-biggest-moves-after-the-bell-spcx-amd-pins-anet-wynn.html) ⭐️ 7.0/10

After the market close on August 4, several companies moved sharply on quarterly results: Arista Networks rose 11% after beating second-quarter estimates, AMD fell 8% despite a slight revenue beat, and Teradata dropped 17% on third-quarter guidance below consensus.

rss · CNBC Finance · Aug 4, 22:25

**「Background」** These after-hours moves came as companies reported second-quarter earnings and outlooks, with investors comparing actual results against analyst expectations.

**Tags**: `#earnings`, `#stock movers`, `#technology`, `#semiconductors`, `#guidance`

---

<a id="item-finance-news-4"></a>
### [Polymarket in Talks for Fundraising at Over $20 Billion Valuation](https://www.cnbc.com/2026/08/04/polymarket-seeks-fundraising-round-at-more-than-20-billion-valuation.html) ⭐️ 7.0/10

Polymarket is in talks for a fundraising round that would value the prediction-market platform at more than $20 billion, a person familiar with the matter told CNBC, up from a $15 billion valuation in its April round. The company has said its annualized revenue is above $1 billion.

rss · CNBC Finance · Aug 4, 13:31

**「Background」** Prediction-market platforms let users bet on the outcomes of future events. Polymarket launched a regulated U.S. exchange in May, while rival Kalshi closed a funding round in May at a $22 billion valuation and has reportedly been in talks for a $40 billion valuation.

**Tags**: `#Prediction Markets`, `#Fundraising`, `#Valuation`, `#Fintech`, `#Polymarket`

---

<a id="item-finance-news-5"></a>
### [Fed&\#x27;s Paulson: Current rates are sufficient but policy could be recalibrated](https://www.cnbc.com/2026/08/04/philadelphia-fed-president-paulson-content-with-current-rates-but-keeping-an-open-mind.html) ⭐️ 7.0/10

Federal Reserve Bank of Philadelphia President Anna Paulson said she considers the current 3.5%-3.75% target range for the Fed&\#x27;s benchmark rate appropriately &\#x27;mildly restrictive&\#x27; to bring underlying inflation back to 2%, but she would be open to recalibrating policy if progress stalls. She also cited a core inflation reading of 3.3% in June, well above the Fed&\#x27;s 2% goal.

rss · CNBC Finance · Aug 4, 17:49

**「Background」** Paulson became president of the Federal Reserve Bank of Philadelphia on July 1, 2025, and is a voting member of the Fed&\#x27;s policy-setting committee, which has held interest rates steady this year as inflation remains above the 2% target.

<details><summary>References</summary>
<ul>
<li><a href="https://www.philadelphiafed.org/our-people/anna-paulson">Anna Paulson</a></li>

</ul>
</details>

**Tags**: `#Federal Reserve`, `#monetary policy`, `#interest rates`, `#inflation`, `#Anna Paulson`

---

<a id="item-finance-news-6"></a>
### [Jeff Bezos files plan to sell about $4.1 billion in Amazon stock](https://www.cnbc.com/2026/08/04/jeff-bezos-just-filed-to-sell-4-billion-in-amazon-the-shares-are-falling.html) ⭐️ 7.0/10

Jeff Bezos filed plans to sell about 15 million Amazon shares worth roughly $4.1 billion, after strong quarterly results lifted the stock to a record high. Amazon shares fell more than 2% on Tuesday after the filing.

rss · CNBC Finance · Aug 4, 16:14

**「Background」** The planned sale, disclosed under a prearranged Rule 10b5-1 trading plan adopted in November, involves shares Bezos acquired as founder stock in 1994; Bezos has regularly sold Amazon stock in recent years.

**Tags**: `#Amazon`, `#Jeff Bezos`, `#Insider Selling`, `#SEC Filing`, `#Stock Market`

---

<a id="item-finance-news-7"></a>
### [Premarket Stock Movers: Caterpillar and Palantir Lead on Q2 Earnings](https://www.cnbc.com/2026/08/04/stocks-making-the-biggest-moves-premarket-mcd-cat-pltr-mrk.html) ⭐️ 7.0/10

Several large companies moved in premarket trading after reporting second-quarter earnings. Caterpillar rose 8% after posting adjusted earnings of $8.17 per share on revenue of $20.54 billion, beating analyst consensus of $6.20 per share and $19.34 billion, while Palantir jumped 15% on strong results powered by a nearly 150% surge in U.S. commercial revenue.

rss · CNBC Finance · Aug 4, 11:42

**「Background」** These moves came as companies reported quarterly results before the regular U.S. market open, with investors comparing them against analyst expectations compiled by LSEG.

**Tags**: `#earnings`, `#premarket`, `#stock movers`, `#Caterpillar`, `#Palantir`

---

<a id="item-finance-news-8"></a>
### [Goldman Sachs Q2 trading revenue surges to record on equities strength](https://www.cnbc.com/2026/08/01/goldman-traders-are-on-pace-for-a-record-year-a-close-up-look-at-how-theyre-doing-it.html) ⭐️ 7.0/10

Goldman Sachs reported a sharp jump in second-quarter trading and dealmaking revenue, with equities revenue surging 72% to a record $7.42 billion and investment banking revenue rising 55% to $3.4 billion, helped by SpaceX&\#x27;s IPO and Alphabet&\#x27;s $85 billion equity raise. The firm&\#x27;s Global Banking &amp; Markets division brought in $15.5 billion, more than 75% of total revenue.

rss · CNBC Finance · Aug 4, 19:38

**「Background」** Goldman&\#x27;s equities business handles sales, trading, derivatives, prime brokerage, futures, and custody services, and the bank says years of investment plus a strategy to cross-sell equities with investment banking and wealth management positioned it to benefit from recent market volatility.

**Tags**: `#Goldman Sachs`, `#trading revenue`, `#earnings`, `#investment banking`, `#market volatility`

---

<a id="item-finance-news-9"></a>
### [China’s State Post Bureau Investigates STO Express Over Safety Management](https://www.spb.gov.cn/gjyzj/c100015/c100016/202608/c4467c234e1c4db0a6e393cff2e64902.shtml) ⭐️ 7.0/10

China’s State Post Bureau announced on August 4 that it has opened a formal investigation into STO Express. The regulator said that since 2026, businesses using the “STO Express” trademark, name and waybills have had repeated production safety accidents and safety hazards found during inspections, and that STO Express failed to carry out the required unified safety management over those businesses.

telegram · zaihuapd · Aug 4, 12:07

**「Background」** The State Post Bureau opened the investigation because companies using the STO Express trademark, name and waybills have repeatedly been involved in production safety accidents and found with safety hazards this year, and STO Express Limited failed to manage safety uniformly as required.

<details><summary>References</summary>
<ul>
<li><a href="https://www.gamersky.com/news/202608/2183156.shtml">gamersky.com/news/202608/2183156.shtml</a></li>
<li><a href="https://m.mp.oeeee.com/a/BAAFRD0000202608041638252.html">安 全 事故多发， 申 通 快 递 被 国 家 邮 政 局 立 案 调 查 ，回应了 | 南都N视频</a></li>

</ul>
</details>

**Tags**: `#regulatory action`, `#STO Express`, `#express delivery`, `#production safety`, `#State Post Bureau`

---