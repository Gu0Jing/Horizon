---
layout: default
title: "Horizon Summary: 2026-08-14 (ZH)"
date: 2026-08-14
lang: zh
---

> 从 40 条内容中筛选出 20 条重要资讯。

---

**科技新闻**
1. [Qwen 3.8 27B 开放权重模型获社区好评](#item-tech-news-1) ⭐️ 8.0/10
2. [GLM-5.3：前沿编码模型展现突发网络能力](#item-tech-news-2) ⭐️ 8.0/10
3. [将毁灭战士渲染器编译进 210 亿参数 Transformer](#item-tech-news-3) ⭐️ 8.0/10
4. [小红书开源 280B MoE 模型 dots3-note，仅 16B 激活参数](#item-tech-news-4) ⭐️ 8.0/10
5. [PostgreSQL 修复 to\_char 高危漏洞](#item-tech-news-5) ⭐️ 8.0/10
6. [苹果联手阿里为中国自研 AI 大模型，或成首个获批外企](#item-tech-news-6) ⭐️ 8.0/10
7. [为什么 Opus 5 用起来更差？](#item-tech-news-7) ⭐️ 7.0/10
8. [RustDesk 新增 Wayland 无人值守远程访问](#item-tech-news-8) ⭐️ 7.0/10
9. [谷歌推进同态加密，让私有 AI 更实用](#item-tech-news-9) ⭐️ 7.0/10
10. [不分类，去幻觉：用向量嵌入匹配标签](#item-tech-news-10) ⭐️ 7.0/10
11. [开源 Python 库与网页仪表盘按临床阈值评估肿瘤 AI 模型](#item-tech-news-11) ⭐️ 7.0/10
12. [AI 机器人实验室年测 300 万人体组织，或淘汰动物测试](#item-tech-news-12) ⭐️ 7.0/10
13. [苹果提交美国 App Store 外部购买抽成方案，最高 15%](#item-tech-news-13) ⭐️ 7.0/10
14. [美国法官下令谷歌一周内移除第三方应用商店安装障碍](#item-tech-news-14) ⭐️ 7.0/10

**科技博客**
1. [DSpark 自适应验证：按置信度分配投机解码预算](#item-tech-blog-1) ⭐️ 9.0/10

**财经新闻**
1. [伯克希尔二季度大幅增持 Alphabet，终结连续净卖出](#item-finance-news-1) ⭐️ 8.0/10
2. [高盛参与英伟达、英特尔等 AI 融资大单，成基础设施热潮赢家](#item-finance-news-2) ⭐️ 8.0/10
3. [美国监管机构和银行加强审查预测市场](#item-finance-news-3) ⭐️ 7.0/10
4. [Uber 与 Pony.ai 宣布将在欧洲部署 2000 辆 Robotaxi 并拓展中东合作](#item-finance-news-4) ⭐️ 7.0/10
5. [中信集团接近收购阿里游戏部门，灵犀估值或超 15 亿美元](#item-finance-news-5) ⭐️ 7.0/10

---

## 科技新闻

<a id="item-tech-news-1"></a>
### [Qwen 3.8 27B 开放权重模型获社区好评](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) ⭐️ 8.0/10

Qwen 3.8 27B 是 Qwen 团队发布的新开放权重模型，社区称其为继 Gemma 4 之后少数能通过私人推理基准的本地模型之一。测试者指出，它虽然需要约 5 倍的 token 和 12 分 30 秒（启用 MTP）才完成推理，但能正确解决问题；相对 Gemma 4 的隐式推理，Qwen 3.8 更偏显式推理。另一名用户认为该模型在其笔记本上生成的“鹈鹕骑自行车”图像非常出色，形状与腿部位置都正确。也有用户注意到相较 3.6，Qwen 3.8 的思考痕迹明显更碎片化，并怀疑这种模式会影响 MTP 预测；同时其显存占用被认为不如 Gemma 4 或 Glimmer 高效。

hackernews · erdaltoprak · 8月14日 15:00 · [社区讨论](https://news.ycombinator.com/item?id=49299605)

**「背景」** Qwen 3.8 27B 是阿里巴巴于 2026 年 8 月 14 日以 Apache-2.0 开源许可发布的 27B 参数原生视觉-语言模型，支持 262,144 token 的原生上下文长度，默认开启思考模式，并提供 reasoning\_effort 参数供用户调节推理强度。该模型可通过 vLLM、llama.cpp、Ollama、LM Studio 等工具本地运行，并已提供量化和 FP8 等版本。在公开基准 Terminal-Bench 2.1 上，其提供方运行成绩为 73.0%，但尚未达到获得综合公开排名的门槛。

**「影响」** 对需要本地运行大模型的开发者和程序员而言，Qwen 3.8 27B 提供了一种新的、可处理复杂推理的高性能开放权重选择，但显存占用不如 Gemma 4 高效可能限制其在低显存环境下的使用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://benchlm.ai/models/qwen3-8-27b">Qwen 3 . 8 - 27 B Benchmarks &amp; Context (August 2026) | BenchLM.ai</a></li>
<li><a href="https://www.youtube.com/watch?v=Fvg8659WQDg">Qwen - 3 . 8 - 27 B Released : Everything you need to Know... - YouTube</a></li>
<li><a href="https://huggingface.co/Qwen/Qwen3.8-27B">Qwen / Qwen 3 . 8 - 27 B · Hugging Face</a></li>

</ul>
</details>

**标签**: `#qwen`, `#llm`, `#local-inference`, `#open-weight`, `#ai`

---

<a id="item-tech-news-2"></a>
### [GLM-5.3：前沿编码模型展现突发网络能力](https://z.ai/blog/glm-5.3) ⭐️ 8.0/10

Z.AI 发布了前沿编程模型 GLM-5.3，宣称其具备突发性网络安全能力，包括漏洞扫描和红队攻击。社区用户报告，GLM-5.3 能与 Claude Code 工具链配合，在红队场景中成功执行 WordPress 插件 0-day、RCE 以及 Linux 6.8 内核漏洞利用的适配，并让用户很快将订阅从 18 美元升级到 80 美元。同时，Z.AI 通过 cvd.z.ai 披露了规模化的开源软件漏洞扫描结果，其中大量 CVE 处于保密期且被视为高危或严重。评测方面，有用户认为它仍属于 GLM 5.2 加后训练调整，距离 Sol 和 Fable 仍有微弱差距，另一个评测显示 Mythos 5 在 181 和 247 项任务上仍明显领先。该模型是否构成范式转变尚需更多独立验证。

hackernews · pella · 8月14日 05:19 · [社区讨论](https://news.ycombinator.com/item?id=49294997)

**「背景」** GLM-5.3 是 Z.AI 于 2026 年 8 月 14 日发布的最新前沿编码模型。根据官方文档，它使用与 GLM-5.2 相同的基础模型，所有能力提升均来自规模化后训练；在 Z.ai Code Bench 上比 GLM-5.2 提升 50%，并在 Terminal-Bench 3.0 和 Agents’ Last Exam \(CLI\) 等基准上达到开源最优（SOTA）水平。该模型还展现出超出训练目标的安全能力，包括大规模扫描开源软件并披露漏洞，以及执行红队对抗场景。

**「影响」** 对 AI 辅助安全测试用户而言，GLM-5.3 已展现出可实际发现 WordPress 插件 0-day、完成 RCE 与内核利用适配的能力，并推动了真实付费（18 美元订阅用户在一天内升到 80 美元）；不过这些证据仍以社区报告为主，尚未有独立验证证明其属于范式性突破。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://docs.z.ai/guides/llm/glm-5.3">GLM-5.3 - Overview - Z.AI DEVELOPER DOCUMENT</a></li>
<li><a href="https://www.unite.ai/z-ai-launches-glm-5-3-with-frontier-coding-and-a-cyber-capability-that-outgrew-its-training/">Z.ai Launches GLM-5.3 With Frontier Coding and a Cyber ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#LLM`, `#coding`, `#cybersecurity`, `#machine learning`

---

<a id="item-tech-news-3"></a>
### [将毁灭战士渲染器编译进 210 亿参数 Transformer](https://www.reddit.com/r/MachineLearning/comments/1voazhm/i_compiled_dooms_renderer_into_a_21bparameter/) ⭐️ 8.0/10

一位开发者将经典游戏《毁灭战士》的渲染算法移植为可在 Transformer 中运行的计算图，并利用自研编译器把计算图转换为 21B 参数的 Transformer 权重，全程无需训练。该检查点可直接通过 Hugging Face 加载，无需信任远程代码；输入 3,614 个 token 的场景提示后，模型生成 53,747 个 token 的像素绘制指令，解析后可得到 E1M1 关卡画面。生成一帧在 B200 上耗时约 40 分钟，而原版《毁灭战士》在 486 处理器上可达 35 帧每秒；该项目在 B200 上达到约 35 帧每天。这一成果展示了通过 Transformer 参数执行经典算法的可能性，并提供了可复现的权重、源码和 43 行主机程序。

reddit · r/MachineLearning · /u/notforrob · 8月14日 15:50

**「背景」** Transformer 通常通过海量数据训练来学习文本或图像等任务的统计规律，而本项目的做法是绕过训练，用编译器将任意计算图映射为 Transformer 的权重，使模型的前向传播过程等价于执行图中所表示的程序。《毁灭战士》的渲染器是经典的软件光栅化算法，它负责将 3D 场景转换为 2D 像素帧。

**标签**: `#transformers`, `#compilation`, `#Doom`, `#computation-graph`, `#machine-learning`

---

<a id="item-tech-news-4"></a>
### [小红书开源 280B MoE 模型 dots3-note，仅 16B 激活参数](https://x.com/dotsstudioai/status/2088083314855018521) ⭐️ 8.0/10

小红书 dots 实验室开源了 dots3-note preview，这是 dots3 系列首个开放权重模型，总参数量达 280B，每次仅激活 16B 参数，支持 512K 上下文，并能处理文字、图片、视频和音频。该模型引入了名为 TEMPO 的新强化学习方法，通过自批判和测试时价值估计来训练长程智能体，相关权重已在 Hugging Face 开放。同步发布的还有 VibeSearchBench 和 VibeLifeBench 两个面向真实场景的智能体基准。这一举措标志着小红书在开放权重大型 MoE 模型上的重要进展，同时为长程智能体训练提供了新的技术路径。

telegram · zaihuapd · 8月14日 08:27

**「背景」** 混合专家（Mixture-of-Experts, MoE）架构通过将模型拆分为多个专家子网络，推理时仅激活部分参数，从而在保持大容量模型表达力的同时控制计算成本。dots3-note preview 是小红书 dots 实验室开源的 MoE 模型，总参数 280B、激活参数仅 16B，支持 512K 上下文长度和多模态输入（文本、图像、视频、音频），并引入 TEMPO 强化学习方法训练长程智能体。该模型是 dots3 系列首个开放权重模型，已在 Hugging Face 和 GitHub 上发布。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/studio-dots-ai/dots3-note-prev">GitHub - studio-dots-ai/ dots 3 - note -prev: dots 3 note preview · GitHub</a></li>

</ul>
</details>

**标签**: `#MoE`, `#open weights`, `#reinforcement learning`, `#AI benchmarks`, `#Xiaohongshu`

---

<a id="item-tech-news-5"></a>
### [PostgreSQL 修复 to\_char 高危漏洞](https://www.postgresql.org/support/security/CVE-2026-14669/) ⭐️ 8.0/10

PostgreSQL 项目修复了高危漏洞 CVE-2026-14669，该漏洞存在于 to\_char\(timestamptz\) 函数解析超长 POSIX 时区缩写时，会触发堆缓冲区溢出，使具备低权限数据库账户的攻击者能够以 PostgreSQL 服务进程的操作系统权限执行任意代码。该漏洞 CVSS 评分为 8.8，且并非无需认证即可利用。受影响的版本包括 18.5、17.11、16.15、15.19 和 14.24 之前的版本。由于 18.5 因回归问题未正式发布，18 系列用户应直接升级至 18.6，其他用户应升级至 17.11、16.15、15.19 或 14.24。本次小版本更新无需转储数据库或运行 pg\_upgrade，只需更新程序文件并重启服务。

telegram · zaihuapd · 8月14日 14:35

**「背景」** to\_char\(timestamptz\) 是 PostgreSQL 中将带时区的时间戳格式化为文本的常用函数，其在处理 POSIX 时区缩写时会进行内存写入。当用户传入极长的时区缩写时，函数对缓冲区大小的计算存在缺陷，导致堆缓冲区溢出。由于此类函数通常可被拥有数据库账户的用户调用，低权限用户也可能触发该漏洞。

**「影响」** 使用受影响 PostgreSQL 版本的数据库管理员应立即安装对应小版本更新，尤其要优先处理允许不受信任用户拥有数据库账户的环境，否则攻击者可能以数据库服务进程权限在服务器上执行任意代码。

**标签**: `#PostgreSQL`, `#security`, `#CVE`, `#vulnerability`, `#database`

---

<a id="item-tech-news-6"></a>
### [苹果联手阿里为中国自研 AI 大模型，或成首个获批外企](https://www.reuters.com/business/retail-consumer/apple-trains-its-own-ai-model-china-market-with-alibabas-support-sources-say-2026-08-14/) ⭐️ 8.0/10

据路透社援引知情人士消息，苹果已专门为中国市场训练一款大语言模型，并获得阿里巴巴支持，改变了此前依赖第三方模型的策略。Apple Intelligence 预计将在未来数月随 iOS 更新在中国上线。中国网信办已于上月对苹果的生成式 AI 服务完成备案；若正式落地，苹果可能成为首家获北京批准在华提供自有 AI 模型的外国公司。该消息仍基于匿名信源，具体技术细节尚不明确。

telegram · zaihuapd · 8月14日 14:47

**「背景」** 苹果此前为在中国市场提供生成式 AI 功能，一直依赖第三方模型，而由于中国对生成式 AI 服务实行严格的备案和审批制度，Apple Intelligence 迟迟未能在中国 iPhone 上推出。路透社报道称，苹果已联合阿里巴巴为中国市场专门训练了一款大语言模型，双方合作清除了此前阻碍 Apple Intelligence 进入中国市场的监管障碍。这一跨美中合作发生在两国关系紧张的背景下，若获得批准，苹果可能成为首家获准在中国提供自研 AI 模型的外国公司。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://aichief.com/news/apple-taps-alibaba-for-china-ai-model-training/">Apple Taps Alibaba for China AI Model Training</a></li>
<li><a href="https://www.investing.com/news/stock-market-news/apple-trains-own-ai-model-for-china-with-alibaba-support-reuters-reports-4859693">Apple trains own AI model for China with Alibaba support, Reuters...</a></li>
<li><a href="https://www.remio.ai/post/alibaba-apple-deal-clears-china-but-the-iphone-ai-is-still-unproven">Alibaba Apple Deal Clears China , but the iPhone AI Is Still Unproven</a></li>

</ul>
</details>

**标签**: `#Apple`, `#AI models`, `#China regulation`, `#Alibaba`, `#Generative AI`

---

<a id="item-tech-news-7"></a>
### [为什么 Opus 5 用起来更差？](https://mun-logadan.github.io/why-does-opus-5-feel-worse/) ⭐️ 7.0/10

一篇开发者批评文章指出，Claude Opus 5 的写作风格令人疲惫，并提出一个假设：模型的后训练正越来越针对智能体间的通信，而非人类可读性。评论者认为它写得过于简略、绕弯、抽象，常用无生命名词作主语，还频繁“诚实”地道歉和长篇解释，让人类用户感到消耗。作者与多位评论者推测，无论是推理链还是子智能体交接，行业的重心已经转向“智能体语”，人类友好变成工作的噪音。这仍是主观体验而非技术突破，但它反映了前沿模型交互体验的潜在转向。

hackernews · numeri · 8月14日 10:12 · [社区讨论](https://news.ycombinator.com/item?id=49296740)

**「背景」** Claude Opus 5 是 Anthropic 发布的最新旗舰模型，官方称其专为复杂智能体编程和企业工作构建，尤其在长期智能体任务上表现突出（tool-1-2）。与此同时，OpenAI 也更新了 GPT-5.6 系列，包含 Sol、Terra、Luna 等不同能力级别的模型（tool-2-1）。这些背景有助于理解开发者对 Opus 5 写作风格的抱怨：人们猜测模型的后训练目标可能已从面向人类读者转向面向智能体间通信。

**「影响」** 对依赖 Claude Opus 5 进行迭代开发的用户，这种沟通风格可能意味着更频繁的人工核查和更高的认知负担；一位用户称因此耗尽了额度并转用 OpenAI 的 Sol。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5">Prompting Claude Opus 5 - Claude Platform Docs</a></li>
<li><a href="https://en.wikipedia.org/wiki/GPT-5.6">GPT-5.6 - Wikipedia</a></li>

</ul>
</details>

**标签**: `#AI`, `#language models`, `#user experience`, `#agent communication`, `#machine learning`

---

<a id="item-tech-news-8"></a>
### [RustDesk 新增 Wayland 无人值守远程访问](https://rustdesk.com/blog/unattended-remote-access-wayland/) ⭐️ 7.0/10

RustDesk 发布公告称，现已为 Wayland 提供真正无人值守的远程访问，解决了这一开源远程桌面工具在现代 Linux 桌面上的已知限制。该功能让用户无需目标机器上有人操作即可远程控制 Wayland 会话，适合远程管理和自动化场景。目前公告未给出具体版本号或发布时间，实际支持情况需要以对应 RustDesk 发布版为准。此次更新对 Wayland 用户和关注 Linux 远程访问工具链的人群具有较高实用价值。

hackernews · rustdesk · 8月14日 16:12 · [社区讨论](https://news.ycombinator.com/item?id=49300759)

**「背景」** RustDesk 是一款开源远程桌面工具，此前在 Linux 上主要支持 X11 显示协议，而 Wayland 作为现代 Linux 桌面默认协议，出于安全设计会限制远程画面采集和输入注入，导致远程桌面工具往往需要用户在远程机器上手动批准会话。RustDesk 在最新更新中实现了真正的无人值守远程访问，无需远端有人逐一确认即可连接，解决了 Wayland 下的这一长期痛点。

**「影响」** Wayland 用户现在可以在无人值守场景下远程控制设备，弥补了此前远程桌面工具在 Wayland 会话中的一大不足，尤其有利于远程管理 Linux 桌面设备。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://rustdesk.com/blog/unattended-remote-access-wayland/">Unattended Remote Access on Wayland with RustDesk — RustDesk</a></li>

</ul>
</details>

**标签**: `#remote-desktop`, `#Wayland`, `#RustDesk`, `#open-source`, `#Linux`

---

<a id="item-tech-news-9"></a>
### [谷歌推进同态加密，让私有 AI 更实用](https://blog.google/security/how-google-is-making-private-ai-practical-with-homomorphic-encryption/) ⭐️ 7.0/10

谷歌在官方博客中宣布了同态加密技术的新进展，目标是让私有 AI 变得实际可用。同态加密允许直接在加密数据上执行计算，使机器学习推理无需解密原始数据即可完成，从而保护隐私。这一方向被视为隐私保护机器学习的关键技术，但社区开发者表示，目前推理任务的计算开销高达约 1000 倍，商业可行性仍面临挑战。

hackernews · u1hcw9nx · 8月14日 15:43 · [社区讨论](https://news.ycombinator.com/item?id=49300314)

**「背景」** 同态加密（Homomorphic Encryption, HE）允许在不解密数据的情况下直接对加密数据进行计算，从而支持隐私保护的机器学习推理。Google 正在开发 HEIR（Homomorphic Encryption Intermediate Representation），这是一个开源的编译器工具链，可将预训练 AI 模型转换为能对加密数据进行操作的版本，并且此前已发布 TensorFlow-to-FHE 编译器，使开发者能将训练好的 TensorFlow 模型编译为全同态加密（FHE）版本，以在不解密用户输入或推理结果的情况下运行推理。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.google/security/how-google-is-making-private-ai-practical-with-homomorphic-encryption/">How Google is Making Private AI Practical with Homomorphic Encryption</a></li>
<li><a href="https://developers.googleblog.com/2023/08/expanding-our-fully-homomorphic-encryption-offering.html?m=1">Expanding our Fully Homomorphic Encryption offering - Google Developers Blog</a></li>

</ul>
</details>

**标签**: `#homomorphic encryption`, `#privacy-preserving ML`, `#Google`, `#AI security`, `#machine learning`

---

<a id="item-tech-news-10"></a>
### [不分类，去幻觉：用向量嵌入匹配标签](https://simonwillison.net/2026/Aug/14/dont-classify-hallucinate/) ⭐️ 7.0/10

Simon Willison 介绍了 Doug Turnbull 提出的一种标签分类方法：当博客已有 1,856 个标签、数量多到无法一次性放入 LLM 提示时，先让模型“幻觉”出候选标签，不提供现有词表，再用向量嵌入在已有标签中寻找最接近的匹配。Turnbull 给出的示例提示会先展示标签的层级形状（如“Furniture / Living Room Furniture / Coffee Tables &amp; End Tables / Coffee Tables”），再要求为查询生成分类。该方法把“在超大词表中分类”变为“生成候选 + 向量检索”，降低了提示长度和分类难度。具体数据集和评测结果未在原文中给出。

rss · Simon Willison · 8月14日 21:54

**「背景」** 传统做法是把完整标签列表放进提示让 LLM 选择，但词表过大时受到上下文长度和注意力限制。向量嵌入可将文本映射为数值向量，用距离度量近似语义相似度，从而在大词表中快速检索最接近的已有标签。

**「影响」** 对于维护大型标签体系的内容平台或电商分类系统，开发者可用此方法在提示中只给少量示例让 LLM 自由生成，再借助向量库把“幻觉”标签映射到受控词表，避免把全部枚举塞进提示。由于原文没有提供基准评测，实际效果尚需在各自数据上验证。

**标签**: `#LLM`, `#vector embeddings`, `#content tagging`, `#AI techniques`, `#machine learning`

---

<a id="item-tech-news-11"></a>
### [开源 Python 库与网页仪表盘按临床阈值评估肿瘤 AI 模型](https://www.reddit.com/r/MachineLearning/comments/1vod2c8/opensource_python_library_nocode_web_dashboard/) ⭐️ 7.0/10

新发布的 oncothresh 是一个依赖精简的开源 Python 库（基于 numpy/scipy/scikit-learn/pydantic），用于在预设临床截断值处评估肿瘤 AI 模型，提供灵敏度/特异度/PPV/NPV、自助法置信区间、阈值敏感性曲线、边界加权校准、决策曲线净获益和 number-needed-to-test 等指标。这些指标补足了 PathBench 与 PathBench-MIL 等病理基准只做全局评估、不在固定临床阈值上量化不确定性的缺口。配套的 oncothresh-web 无代码仪表盘允许用户上传预测值与标签的 CSV、选择阈值并获得完整图表与可下载 PDF 报告，通过 Docker Compose 本地运行，无需云端依赖。项目仍为 v0.1，作者欢迎关于使用场景、DCA/校准边界情况或 API 适用性的反馈。

reddit · r/MachineLearning · /u/adom2989 · 8月14日 17:06

**「背景」** 在肿瘤病理 AI 中，许多模型输出的是连续分数（如肿瘤细胞占比、Ki-67、TMB、PD-L1 评分），但临床决策往往需要在固定阈值上将其二值化为“是/否”，因此评估应针对该临床截断值而非仅看全局一致性指标。PathBench 和 PathBench-MIL 是用于评估病理基础模型的基准，但它们主要衡量模型在多个任务上的全局表现，并不专门在预定义临床阈值下提供带不确定性量化的评估。oncothresh 正是针对这一缺口，提供阈值处的敏感性、特异性、PPV/NPV、自助置信区间、决策曲线净收益等指标。

**「影响」** 对需要把连续型肿瘤评分（如肿瘤细胞占比、Ki-67、TMB、PD-L1）折成二分类临床决策的研究者或临床团队，该工具可直接在决策阈值上给出带不确定性的评估指标并生成报告，降低做阈值特异性验证的代码门槛。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://birkhoffkiki.github.io/PathBench/">PathBench: A compensive benchmark for pathology foundation models with real practical data from the world.</a></li>
<li><a href="https://arxiv.org/abs/2505.20202">[2505.20202] PathBench: A comprehensive comparison benchmark for pathology foundation models towards precision oncology</a></li>

</ul>
</details>

**标签**: `#machine learning`, `#healthcare AI`, `#model evaluation`, `#open source`, `#oncology`

---

<a id="item-tech-news-12"></a>
### [AI 机器人实验室年测 300 万人体组织，或淘汰动物测试](https://www.fastcompany.com/91589344/the-worlds-largest-biological-datacenter-could-help-make-animal-testing-obsolete) ⭐️ 7.0/10

生物技术公司 Vivodyne 在旧金山南部部署了衣柜大小的机器人实验室，用 AI 设计人体组织实验，以更准确地预测新药疗效和安全性。该系统目前由 12 个“蜂巢”机器人实验室组成，每年可对 300 多万个人体组织开展受控试验，容量约为美国全部临床试验总和的两倍。报道指出，现阶段约 90% 的候选药物在通过动物测试后仍会在临床试验中失败，因此这类大规模人体组织测试被视为有望减少乃至淘汰动物测试的技术路线。

telegram · zaihuapd · 8月14日 01:48

**「背景」** Vivodyne 是一家从宾夕法尼亚大学生物工程研究孵化的前沿生物 AI 实验室，主张“让生物学可计算”，在体外培养更接近真实的人体组织用于药物开发。其最新推出号称全球最大的人体生物数据中心，由 12 个机器人“蜂巢”（HIVE）实验室组成，每年可运行约 310 万次人体组织实验，约为美国全部临床试验总规模的两倍。传统药物研发中大量候选药在动物实验通过后仍于临床试验失败，因此这类以人体组织与 AI 自动化替代动物测试的平台，被视为提高疗效与安全性预测能力的探索方向。

**「影响」** 若 Vivodyne 的测试结果经得起监管和临床验证，药物研发机构将能更快筛选候选药物，并降低对动物模型的依赖；不过其实际影响仍取决于该系统能否证明与人体临床结局的相关性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.vivodyne.com/">Vivodyne | Make biology computable</a></li>
<li><a href="https://finance.yahoo.com/healthcare/articles/vivodyne-launches-world-largest-human-130000478.html?fr=sycsrp_catchall">Vivodyne Launches the World’s Largest Human Biological ...</a></li>
<li><a href="https://biobuzz.io/news/penn-born-vivodyne-launches-what-it-calls-the-worlds-largest-human-biological-datacenter/">Penn-Born Vivodyne Launches What It Calls the World&#x27;s Largest ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#biotech`, `#robotics`, `#drug testing`, `#lab automation`

---

<a id="item-tech-news-13"></a>
### [苹果提交美国 App Store 外部购买抽成方案，最高 15%](https://9to5mac.com/2026/08/13/apple-proposes-commissions-of-up-to-15-for-off-app-store-purchases-in-the-us/) ⭐️ 7.0/10

苹果已向法院提交美国 App Store 外部购买抽成方案：标准应用抽成 15%，视频、新闻等合作项目及订阅续费抽成 10%，小型企业计划应用抽成 5%。美国最高法院此前驳回了苹果暂停下级法院费率审理的请求，Epic 将有机会回应，苹果预计于 9 月 14 日前向最高法院提交书面意见。该方案是 Epic v. Apple 法律诉讼的一部分，直接影响开发者在 App Store 外提供购买选项时的费用结构。

telegram · zaihuapd · 8月14日 02:33

**「背景」** Epic Games 与苹果的诉讼围绕 App Store 支付政策展开，法院此前裁定苹果必须允许开发者在应用内提供外部购买链接，因此苹果需要制定相应的抽成规则。该方案就是在此背景下提出的，旨在规定外部购买交易的佣金比例。

**「影响」** 对于计划使用外部购买支付的开发者，该方案将产生最高 15% 的佣金成本，显著低于 App Store 内购 30% 的默认抽成，但具体负担仍可能因应用类别和订阅状态而不同。最终是否生效取决于最高法院的审理结果。

**标签**: `#Apple`, `#App Store`, `#developer fees`, `#Epic Games`, `#regulation`

---

<a id="item-tech-news-14"></a>
### [美国法官下令谷歌一周内移除第三方应用商店安装障碍](https://www.androidauthority.com/google-play-store-remove-third-party-app-store-friction-3698697/) ⭐️ 7.0/10

美国地区法官 James Donato 下令谷歌在安卓系统中解除第三方应用商店的安装障碍，要求在一周内删除 Play Store 中针对竞品应用商店的多余确认步骤和警告弹窗。法院认定，这些“查看”后才出现“安装”按钮等操作是谷歌蓄意制造的“反竞争摩擦”，意在吓退普通用户。该指令出自 Epic 诉谷歌反垄断案，此前陪审团已裁定谷歌在安卓应用分发领域构成非法垄断。修改完成后，用户安装第三方应用商店将像安装普通安卓应用一样直接。

telegram · zaihuapd · 8月14日 09:55

**「背景」** Epic Games 因《堡垒之夜》支付纠纷起诉谷歌，指控其通过 Play Store 政策垄断安卓应用分发。本案中，法院认为谷歌对第三方应用商店施加额外警告和多步确认流程，并非出于安全考虑，而是故意抬高竞品的使用门槛。这次裁决是反垄断诉讼后续补救措施的一部分，旨在改变安卓应用市场的竞争环境。

**「影响」** 该命令将直接影响 Epic Games Store 等第三方安卓应用商店，使其安装流程大幅简化，进而降低用户尝试竞品商店的门槛；对谷歌而言，这意味着失去部分分发控制力，但实际市场份额变化仍有待观察。

**标签**: `#Google`, `#Android`, `#antitrust`, `#app stores`, `#regulation`

---

## 科技博客

<a id="item-tech-blog-1"></a>
### [DSpark 自适应验证：按置信度分配投机解码预算](https://vllm.ai/blog/2026-08-14-dspark-adaptive-verification) ⭐️ 9.0/10

rss · vLLM Blog · 8月14日 00:00

**「背景」** 投机解码用更多计算换取更少的解码步数，在 batch size 小、GPU 受内存带宽限制时很划算；但 batch 增大后，被拒绝的草稿 token 会浪费真实计算，而草稿接受率随位置快速衰减（7 token 块中最后一个 token 存活率不到 10%）。因此固定 num\_speculative\_tokens 无法在所有并发度下都最优。

**「方案」** DSpark 的解法是用学习到的置信度头为每个草稿 token 打分，将分数转成存活概率后，按全局 top-B 挑选本轮要验证的草稿槽位；B 由最大化每步期望 token 数除以分档成本表得到。预算计算在 CPU 上用上一轮的置信度数组异步完成，而槽位分配在 GPU 上使用当前置信度，由 PyTorch/Triton 执行且不回读主机。为支持变长验证，PR \#47808 还集成了 varlen decode CUDA graphs，并利用 DeepGEMM 的 varlen indexer 与稀疏 MLA 内核。作者在 DeepSeek-V4-Pro-0813、8×B300 上测得，开启自适应验证后，从并发度 1 到 256 都保持长块和短块的优势，处于 Pareto 前沿；当前限制包括需要 AttentionCGSupport.ALWAYS、不支持 --enforce-eager、LoRA、流水线并行和输出 logprobs。

**「启示」** 作者认为这消除了用户按负载手动调 num\_speculative\_tokens 的需要，让 DSpark 成为更接近“默认开启”的加速；对任何投机解码系统而言，按置信度和实时成本动态分配验证预算都是一条可迁移的设计思路。

**标签**: `#speculative decoding`, `#vLLM`, `#adaptive verification`, `#CUDA graphs`, `#cost model`

---

## 财经新闻

<a id="item-finance-news-1"></a>
### [伯克希尔二季度大幅增持 Alphabet，终结连续净卖出](https://www.cnbc.com/2026/08/14/berkshire-hathaway-boosts-alphabet-to-a-top-three-holding-ups-delta-and-housing-bets.html) ⭐️ 8.0/10

伯克希尔二季度增持 Alphabet 83%至约 1.06 亿股、市值 379 亿美元，使其成为第三大美股持仓，仅次于苹果和美国运通；同时增持达美航空 44%至 5730 万股，约 54 亿美元，并加仓 Lennar 等住房建筑商。该公司当季净买入近 200 亿美元股票，结束了此前连续 14 个季度的净卖出。

rss · CNBC Finance · 8月14日 21:06

**「背景」** 伯克希尔此前已连续 14 个季度净卖出股票，并在 2020 年疫情初期清仓航空股；二季度 Alphabet 持仓大增主要源于 6 月约 100 亿美元的私募买入，董事长巴菲特表示是他本人看好 Alphabet，CEO 阿贝尔支持。

**标签**: `#Berkshire Hathaway`, `#Alphabet`, `#Delta Air Lines`, `#Housing`, `#Investment Filings`

---

<a id="item-finance-news-2"></a>
### [高盛参与英伟达、英特尔等 AI 融资大单，成基础设施热潮赢家](https://www.cnbc.com/2026/08/14/goldmans-latest-cash-cow-is-all-about-funding-the-ai-infrastructure-boom.html) ⭐️ 8.0/10

高盛本周参与了多项 AI 基础设施大型融资：英伟达宣布由高盛等六家机构计划合计筹集 5000 亿美元融资（目前仅签署非约束性谅解备忘录，细节尚未披露），英特尔将 15 亿美元普通股发行上调至 20 亿美元，Alphabet 将 6 月宣布的 80 亿美元股票发行上调至 85 亿美元，高盛在其中担任承销或联合账簿管理人。

rss · CNBC Finance · 8月14日 20:05

**「背景」** 这些融资旨在为数据中心和芯片制造等 AI 基建提供资金，投资银行通过折价买入股票、再以发行价卖给机构客户，从中赚取承销费、管理费和销售佣金。

**「影响」** 对高盛而言，这类交易直接为全球银行与市场部门带来费用和交易收入；对 Alphabet 和英特尔等发行方，则通过增发股票换取扩张资金，并导致现有股东持股被稀释。

**标签**: `#AI infrastructure`, `#Goldman Sachs`, `#capital raising`, `#equity underwriting`, `#semiconductors`

---

<a id="item-finance-news-3"></a>
### [美国监管机构和银行加强审查预测市场](https://www.cnbc.com/2026/08/14/prediction-markets-scrutiny-mounts-from-regulators-and-banks.html) ⭐️ 7.0/10

美国商品期货交易委员会（CFTC）正对预测平台的“提及市场”进行内部审查，同时华盛顿州成为第四个禁止 Kalshi 部分市场（包括提及市场）的州；据链上数据平台 Dune Analytics，Kalshi 上月提及市场交易量约 330 万美元。

rss · CNBC Finance · 8月14日 19:21

**「背景」** 提及市场是一种让交易者押注特定词语（例如在演讲、财报电话会或电视节目中）是否会被说出的合约，批评者认为它容易被个人操纵。

**「影响」** 这意味着 Kalshi 等平台在美国部分州将无法运营相关市场，当地用户也会失去访问这些市场的渠道，同时银行对相关平台的资金服务可能收紧（报道称摩根大通去年 10 月曾切断 Polymarket 服务，但后者否认）。

**标签**: `#CFTC`, `#prediction markets`, `#Kalshi`, `#regulation`, `#Polymarket`

---

<a id="item-finance-news-4"></a>
### [Uber 与 Pony.ai 宣布将在欧洲部署 2000 辆 Robotaxi 并拓展中东合作](https://www.cnbc.com/2026/08/14/uber-partners-with-chinas-ponyai-for-2000-robotaxis-in-europe.html) ⭐️ 7.0/10

Uber 与 Pony.ai 于周五宣布，计划在欧洲部署 2000 辆自动驾驶出租车（robotaxi），并将双方的自动驾驶合作扩展到中东。两家公司未公布具体城市和时间表；此前双方已于 3 月底在克罗地亚首都萨格勒布推出商用 Robotaxi 服务。

rss · CNBC Finance · 8月14日 01:02

**「背景」** 双方此前已于 3 月底在萨格勒布启动其宣称的欧洲首个商用 Robotaxi 服务；最新计划将把服务推广到另外四个未公开的欧洲城市。

**标签**: `#autonomous vehicles`, `#robotaxis`, `#Uber`, `#Pony.ai`, `#global expansion`

---

<a id="item-finance-news-5"></a>
### [中信集团接近收购阿里游戏部门，灵犀估值或超 15 亿美元](https://www.bloomberg.com/news/articles/2026-08-14/trustar-is-said-to-near-1-5-billion-deal-for-alibaba-gaming-arm) ⭐️ 7.0/10

据彭博社报道，中信集团旗下信宸资本（Trustar Capital）接近收购阿里巴巴的游戏部门灵犀互娱，交易估值可能超过 15 亿美元。报道称磋商仍在进行，尚未做出最终决定。

telegram · zaihuapd · 8月14日 10:24

**「背景」** 灵犀互娱是阿里巴巴的游戏业务，旗舰产品为与日本光荣特库摩合作开发的《三国志·战略版》。在 CEO 吴泳铭推动下，阿里巴巴正剥离非核心资产，聚焦人工智能与云计算。

**标签**: `#M&amp;A`, `#private equity`, `#Alibaba`, `#gaming`, `#divestiture`

---

## 社区讨论

<a id="discussion-tech-news-1"></a>
### [Qwen 3.8 27B 开放权重模型获社区好评](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) ⭐️ 8.0/10

社区普遍认可 Qwen 3.8 27B 的推理能力和本地运行表现，认为开放权重模型正快速接近前沿能力；但也有用户报告其显存占用偏高、推理 token 消耗较多，并对其思考痕迹变化的影响存在不确定看法。

[正文](#item-tech-news-1) · [社区讨论](https://news.ycombinator.com/item?id=49299605)

---

<a id="discussion-tech-news-2"></a>
### [GLM-5.3：前沿编码模型展现突发网络能力](https://z.ai/blog/glm-5.3) ⭐️ 8.0/10

社区整体认可 GLM-5.3 在真实安全任务中的表现和 Z.AI 的文章风格，认为其接近甚至仅稍逊于 Sol/Fable；但仍有保留意见，认为它本质是 GLM 5.2 的后期训练产物，且 Mythos 5 在更高阶任务基准上依然领先。

[正文](#item-tech-news-2) · [社区讨论](https://news.ycombinator.com/item?id=49294997)

---

<a id="discussion-tech-news-7"></a>
### [为什么 Opus 5 用起来更差？](https://mun-logadan.github.io/why-does-opus-5-feel-worse/) ⭐️ 7.0/10

评论中多数人同意作者的观察，但更强调是趋势而非单一模型问题：有人猜测后训练的目标受众已从人类转向其他智能体，也有人抱怨它执行指令时偏差更大、需要更多检查。还有用户表示在实际项目中更喜欢 OpenAI 的 Sol，认为 Opus 5 的沟通方式令人疲惫。

[正文](#item-tech-news-7) · [社区讨论](https://news.ycombinator.com/item?id=49296740)

---

<a id="discussion-tech-news-8"></a>
### [RustDesk 新增 Wayland 无人值守远程访问](https://rustdesk.com/blog/unattended-remote-access-wayland/) ⭐️ 7.0/10

评论中有用户表示此前刚遇到该问题，对修复感到高兴；也有用户询问 RustDesk 与 VNC、Remmina 加 SSH 等方案的对比。还有评论提醒，自托管 RustDesk 时加密连接仍不被支持，并附有 GitHub issue \#3714。

[正文](#item-tech-news-8) · [社区讨论](https://news.ycombinator.com/item?id=49300759)

---

<a id="discussion-tech-news-9"></a>
### [谷歌推进同态加密，让私有 AI 更实用](https://blog.google/security/how-google-is-making-private-ai-practical-with-homomorphic-encryption/) ⭐️ 7.0/10

评论者普遍对同态加密的实用性持保留态度，认为其高额计算开销（如推理任务约 1000 倍）使其难以商业化；还有人质疑谷歌的隐私立场，认为最私密的 AI 应运行在用户自己的硬件上，而非大型数据中心。

[正文](#item-tech-news-9) · [社区讨论](https://news.ycombinator.com/item?id=49300314)

---