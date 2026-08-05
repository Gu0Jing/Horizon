---
layout: default
title: "Horizon Summary: 2026-08-05 (ZH)"
date: 2026-08-05
lang: zh
---

> 从 49 条内容中筛选出 24 条重要资讯。

---

**科技新闻**
1. [豆包上线原生音视频全双工模型 SeedRealtime](#item-tech-news-1) ⭐️ 9.0/10
2. [软件工程与生成式 AI 的八大迷思解析](#item-tech-news-2) ⭐️ 8.0/10
3. [Gwern 告别全职写作与匿名，推出 Guardian Angel](#item-tech-news-3) ⭐️ 8.0/10
4. [Cloudflare 用每月 58 美元 AI 处理漏洞赏金](#item-tech-news-4) ⭐️ 8.0/10
5. [首部 L3/L4 自动驾驶强制性国标发布，2027 年 7 月实施](#item-tech-news-5) ⭐️ 8.0/10
6. [ChainDrop 蠕虫攻陷 npm 逾 1300 个包](#item-tech-news-6) ⭐️ 8.0/10
7. [Mistral 发布 Shieldstral：3B 开源多模态内容审核模型](#item-tech-news-7) ⭐️ 7.0/10
8. [用新颜色空间生成多样肤色的简单算法](#item-tech-news-8) ⭐️ 7.0/10
9. [Waymo 在达拉斯向所有用户开放自动驾驶打车服务](#item-tech-news-9) ⭐️ 7.0/10
10. [LLM 0.32 发布：支持推理轨迹、服务器端工具与 Responses API](#item-tech-news-10) ⭐️ 7.0/10
11. [MiniMax-H3 的 MLX 移植版可在 Apple Silicon 上运行](#item-tech-news-11) ⭐️ 7.0/10
12. [特朗普政府拟禁止进口新型中国光模块](#item-tech-news-12) ⭐️ 7.0/10
13. [白宫对开源 AI 监管转向发布前审查](#item-tech-news-13) ⭐️ 7.0/10
14. [三星与 SK 海力士据报测试中微刻蚀设备以对冲出口管制风险](#item-tech-news-14) ⭐️ 7.0/10
15. [删除 89TB 数据获刑五年十个月](#item-tech-news-15) ⭐️ 7.0/10

**财经新闻**
1. [谷歌为 Anthropic 搭建约 2000 亿美元华尔街融资架构](#item-finance-news-1) ⭐️ 8.0/10
2. [DeepSeek 重启第二轮融资，拟募资 500 亿元](#item-finance-news-2) ⭐️ 8.0/10
3. [盘后财报引发多只个股大幅波动](#item-finance-news-3) ⭐️ 7.0/10
4. [Polymarket 洽谈超 200 亿美元估值融资](#item-finance-news-4) ⭐️ 7.0/10
5. [费城联储主席保尔森：对当前利率满意，但保留调整选项](#item-finance-news-5) ⭐️ 7.0/10
6. [贝索斯拟出售约 41 亿美元亚马逊股票 股价下跌](#item-finance-news-6) ⭐️ 7.0/10
7. [盘前异动：多只个股因二季度财报大幅波动](#item-finance-news-7) ⭐️ 7.0/10
8. [高盛交易业务有望创纪录：二季度股票交易收入飙升 72%](#item-finance-news-8) ⭐️ 7.0/10
9. [国家邮政局对申通快递立案调查](#item-finance-news-9) ⭐️ 7.0/10

---

## 科技新闻

<a id="item-tech-news-1"></a>
### [豆包上线原生音视频全双工模型 SeedRealtime](https://seed.bytedance.com/zh/blog/seedrealtime-%E9%9F%B3%E8%A7%86%E9%A2%91%E5%85%A8%E5%8F%8C%E5%B7%A5%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%8F%91%E5%B8%83-%E8%B5%B0%E5%90%91%E5%85%A8%E6%A8%A1%E6%80%81%E8%87%AA%E7%84%B6%E4%BA%A4%E4%BA%92) ⭐️ 9.0/10

字节跳动于 8 月 5 日发布原生音视频全双工大模型 SeedRealtime，并以统一架构融合音频、视频与文本，在豆包 App 全量上线。该模型支持在连续多模态信息流上实时交互，具备音视频联合理解、主动环境感知与流畅对话节奏三项核心能力。与依赖 ASR、VLM、TTS 多模块串联的传统级联系统不同，SeedRealtime 将感知、理解、决策与表达纳入同一端到端模型，无需外置 VAD 判断轮次。端到端人工评测显示，其音视频对话节奏问题较级联模型减少一半，“话未说完被抢断”等卡壳现象显著减少。

telegram · zaihuapd · 8月5日 04:42

**「背景」** 传统实时对话系统通常采用语音识别（ASR）、视觉语言模型（VLM）、语音合成（TTS）等模块串联的级联架构，模块间传递会造成延迟与信息损耗，并且需要外部语音活动检测（VAD）来划分对话轮次。SeedRealtime 通过端到端统一建模，将音频、视频和文本作为连续信息流同步处理，实现“边看、边听、边说”的全双工交互。

**「影响」** 豆包 App 用户将直接获得节奏更自然、卡壳更少的音视频对话体验，而该端到端架构也为行业展示了替代传统级联模型的可行方向。

**标签**: `#AI`, `#multimodal`, `#real-time dialogue`, `#ByteDance`, `#SeedRealtime`

---

<a id="item-tech-news-2"></a>
### [软件工程与生成式 AI 的八大迷思解析](https://queue.acm.org/detail.cfm?id=3807963) ⭐️ 8.0/10

ACM Queue 发表文章《Eight Myths on Software Engineering and GenAI》，系统梳理生成式 AI 在软件工程中的八项常见迷思，帮助开发者在 AI 辅助工作流中建立更清晰的判断。文章引用微软等研究指出，开发者实际打字或写代码的时间约占 14%，并讨论了 AI 改变工作方式后的新现实。评论也提醒，文章引用的部分证据正在快速过时，例如 2025 年初的 METR 研究已被视为旧数据。整体而言，这份分析对当前围绕 AI 辅助开发生产力的讨论具有及时价值。

hackernews · tchalla · 8月4日 23:50 · [社区讨论](https://news.ycombinator.com/item?id=49176830)

**「背景」** 这篇文章由 ACM Queue 发表，作者包括 Jenna Butler、Brian Houck、Margaret-Anne Storey、Travis Lowdermilk、Steven Clarke 和 Emerson Murphy-Hill，旨在审视软件工程领域关于生成式 AI 的常见误解。文中列举了八条迷思，其中第八条是“借助 GenAI，企业能以创业公司的速度创新”，并引用微软等研究指出开发者实际只有约 14% 的时间用于编写代码，以此提醒人们避免对 AI 辅助开发效果过度乐观。

**「社区讨论」** 评论中，Simon Willison 等开发者表示使用 AI 后实际编写或驱动代理写代码的时间可能超过 14%，与旧统计形成对比；另一些评论者则质疑文章引用的研究过于陈旧，认为 AI 辅助开发的工作方式在 2026 年已明显变化。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://queue.acm.org/detail.cfm?id=3807963">Eight Myths on Software Engineering and GenAI - ACM Queue</a></li>
<li><a href="https://queue.acm.org/?name=Content&amp;pa=showcomments&amp;pid=273">ACMQ Site - ACM Queue</a></li>

</ul>
</details>

**标签**: `#software-engineering`, `#genai`, `#ai-myths`, `#developer-productivity`, `#acm-queue`

---

<a id="item-tech-news-3"></a>
### [Gwern 告别全职写作与匿名，推出 Guardian Angel](https://twitter.com/gwern/status/2084739205071343837) ⭐️ 8.0/10

Gwern 在推特宣布退出全职写作和化名身份，转而启动名为 Guardian Angel（GA）的 AI 项目，并发布配套长文。文中批评当前聊天机器人的人格与用户深度错位、与其所有者对齐，经济激励是用广告和订阅“收割”用户，甚至用 AI 取代而非增强用户。这一宣布引发社区热烈讨论，部分评论者肯定其动机和长期合作体验，也有人质疑其将 LLM 描绘为“准神”的框架。具体产品形态、技术路线和发布时间尚未披露，需以原文为准。

hackernews · mattsterett · 8月4日 20:48 · [社区讨论](https://news.ycombinator.com/item?id=49174900)

**「背景」** Gwern Branwen 是长期从事人工智能研究与写作的独立研究者，以深度文章和实验记录闻名。他宣布退出全职写作与化名状态，转而创办 Guardian Angel Inc.，并发布相关文章《Guardian Angels: LLM Personalization for Productivity and Security》，将大型语言模型的个性化用于提升生产力与安全性。这一背景有助于读者理解，此次公告来自一位有影响力的 AI 评论者，而他的新项目代表从写作向应用型 AI 产品的转向。

**「影响」** 对 Gwern 的长期读者和 AI 写作/安全社区而言，这意味着其持续高产写作和化名身份将告一段落，Guardian Angel 成为新的工作重心；不过，该项目的具体计划仍不清楚，社区对其前景存在分歧。

**「社区讨论」** 评论中，有长期合作者肯定 Gwern 的人品与动机，并回忆共同演示 GPT-2 下棋等经历；另一些评论则认为其文章带有“狂热”色彩，将 LLM 说成近乎神祇，并质疑其中的逻辑跳跃。讨论总体围绕 AI 助手是否真正为用户服务、人类是否会被替代展开。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://zeli.app/en/story/49174900">Gwern Branwen steps back from full-time writing to launch Guardian ...</a></li>
<li><a href="https://blog.danielsosebee.com/p/on-gwerns-guardian-angels">On Gwern &#x27;s &quot; Guardian Angels &quot; - Daniel Sosebee</a></li>
<li><a href="https://stacker.news/items/1540535">Gwern is moving to AI \ stacker news</a></li>

</ul>
</details>

**标签**: `#AI`, `#AI safety`, `#AI assistants`, `#Gwern`, `#tech industry`

---

<a id="item-tech-news-4"></a>
### [Cloudflare 用每月 58 美元 AI 处理漏洞赏金](https://www.theregister.com/security/2026/08/04/cloudflare-has-mostly-ditched-third-party-security-tools-suggests-not-trying-that-at-home/5282600) ⭐️ 8.0/10

Cloudflare 首席安全官 Grant Bourzikas 在悉尼透露，公司已用 Anthropic 的 Claude Sonnet 模型自动化漏洞赏金报告的去重与价值评估，每月仅花费 58 美元；若改用安全专用模型 Mythos，同样工作每月约需 20 万美元。Cloudflare 已构建 200 多个自主安全代理，几乎弃用全部第三方安全工具，改用部分由 AI 辅助编写的自研应用。Bourzikas 同时建议其他企业不要效仿，称 Cloudflare 具备自研安全软件的能力。首席战略官 Stephanie Cohen 表示，AI 将根本改变厂商与客户的合作模式，并将此前裁员 1100 人归因于 AI 带来的自动化变革。她还透露，Cloudflare 正计划充当 AI 公司与出版商之间的中介，通过微支付让 AI 公司付费获取内容。

telegram · zaihuapd · 8月4日 09:24

**「背景」** 漏洞赏金计划依赖外部安全研究者提交漏洞报告，而企业需人工筛选大量重复或无效报告，导致成本高昂。Cloudflare 的做法展示了用通用大语言模型自动完成初步分流可以显著降低成本，同时也反映了安全行业从采购第三方工具转向内部构建 AI 辅助安全应用的趋势。

**「影响」** 这一案例为安全团队评估 AI 自动化漏洞赏金分流提供了明确的成本参照，但 Cloudflare 高层警告这种做法依赖自研安全工程能力，不应被其他组织简单复制。

**标签**: `#AI`, `#security`, `#Cloudflare`, `#bug-bounty`, `#automation`

---

<a id="item-tech-news-5"></a>
### [首部 L3/L4 自动驾驶强制性国标发布，2027 年 7 月实施](https://wap.miit.gov.cn/jgsj/zbys/qcgy/art/2026/art_a1d2072374884287b67048a77560014e.html) ⭐️ 8.0/10

工业和信息化部组织制定的《智能网联汽车 自动驾驶系统安全要求》（GB 44721—2026）强制性国家标准已获批发布，将于 2027 年 7 月 1 日起实施。这是我国首部针对 L3 级有条件自动驾驶和 L4 级高度自动驾驶系统的强制性国标，适用于搭载 L3、L4 级系统的 M 类（载客）和 N 类（载货）车辆，但不适用于自动泊车系统。该标准是对 2024 年推荐性国标的系统性升级，从推荐性转为强制性，围绕企业全生命周期安全保障、系统动态驾驶能力、人机交互与用户告知、多维度检验检测四个维度构建安全要求体系，要求自动驾驶系统安全水平至少达到合格且专注驾驶人的水平。

telegram · zaihuapd · 8月4日 13:06

**「背景」** 我国首部针对 L3 级有条件自动驾驶和 L4 级高度自动驾驶系统的强制性国家标准《智能网联汽车 自动驾驶系统安全要求》（GB 44721—2026）已于 2026 年 7 月 30 日发布，并将于 2027 年 7 月 1 日起实施。此前的 GB/T 44721—2024 属于推荐性标准，本次发布将其升级为强制性要求。在驾驶自动化分级中，L3 级指系统在特定条件下可执行全部驾驶任务但驾驶人需随时准备接管，L4 级则指系统在限定区域内可独立完成驾驶且一般无需驾驶人干预。该标准适用于搭载 L3/L4 系统的 M 类（载客）和 N 类（载货）车辆，不适用于自动泊车系统，并围绕动态驾驶能力、人机交互与用户告知、检验检测等维度构建安全要求体系。

**「影响」** 自 2027 年 7 月起，在中国市场搭载 L3/L4 级自动驾驶系统的 M 类和 N 类车辆生产商必须满足该强制性标准，并需通过相应检验检测，否则将无法合规上市；这将倒逼自动驾驶方案提供商和整车企业提前调整开发流程与安全验证体系。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://wap.miit.gov.cn/jgsj/zbys/qcgy/art/2026/art_a1d2072374884287b67048a77560014e.html">《智能网联汽车 自动驾驶系统安全要求》强制性国家标准正式发布</a></li>
<li><a href="https://finance.sina.com.cn/tech/digi/2026-08-04/doc-inimeefm2001097.shtml">工信部：《智能网联汽车 自动驾驶系统安全要求》发布实施，为自动驾驶产品明确统一安全准入基线_新浪科技_新浪网</a></li>

</ul>
</details>

**标签**: `#autonomous-driving`, `#regulation`, `#China`, `#L3-L4`, `#safety-standards`

---

<a id="item-tech-news-6"></a>
### [ChainDrop 蠕虫攻陷 npm 逾 1300 个包](https://www.bleepingcomputer.com/news/security/massive-chaindrop-npm-supply-chain-attack-infects-hundreds-of-packages/) ⭐️ 8.0/10

自我传播蠕虫 ChainDrop 已入侵 npm 仓库逾 1300 个包，这些包合计月下载量达 20 亿次，受影响者包括 Keyv、Cacheable 等热门缓存工具。攻击始于黑客攻破 Keyv 维护者的 GitHub 账号，随后蔓延至 Deliveroo、Qlik、ServiceTitan 等机构相关包；恶意版本通过正常的 GitHub Actions 流程发布并带合法来源证明。中毒包内的 setup.mjs 投放器与 Math\_Symbol.js 窃密脚本会在执行 npm install 时自动运行，窃取 GitHub、npm、AWS、Kubernetes 等凭证并感染其他维护者的包。安全公司建议，安装过受影响版本即应视系统已被攻破，需重建环境、轮换所有令牌并检查日志；npm-cache\[.\]com 域名可作为失陷指标。攻击仍在扩散，受影响包数量预计继续增加。

telegram · zaihuapd · 8月5日 03:04

**「背景」** npm 是 JavaScript 生态最常用的包管理器，通过安装开源包简化开发，但也正因为其分发广泛，成为供应链攻击的高价值目标。ChainDrop 是一种能够自我传播的蠕虫，在感染一个维护者的环境后会利用窃取的凭证继续感染其他包，从而在整个生态中扩散。本次事件中，恶意代码被打包进看似正常的 npm 发布版本，并利用 GitHub Actions 的正常流程通过来源验证，增加了检测难度。

**「影响」** 受影响开发者应立刻将相关环境视为已失陷，重建环境、轮换全部令牌，并以 npm-cache\[.\]com 为线索检查日志；由于攻击仍在扩散，后续还需要持续关注受影响包清单。

**标签**: `#supply chain security`, `#npm`, `#malware`, `#open source security`, `#security incident`

---

<a id="item-tech-news-7"></a>
### [Mistral 发布 Shieldstral：3B 开源多模态内容审核模型](https://mistral.ai/news/shieldstral/) ⭐️ 7.0/10

Mistral 发布了 Shieldstral，一个 3B 参数的开源权重多模态内容审核模型，面向需要可部署安全工具的开发者。该模型可作为大型通用模型中隐藏安全逻辑的替代，适配图像与文本等多模态输入。Shieldstral 的发布顺应了将大型 MoE 模型细化为更小、更专用模型的趋势。目前没有提供关于其具体审核规则自定义程度或性能表现的详细数据。

hackernews · riadsila · 8月4日 16:36 · [社区讨论](https://news.ycombinator.com/item?id=49171268)

**「背景」** Shieldstral 是 Mistral AI 近期发布的 3B 参数开放权重多模态内容审核模型，它将内容审核转化为基于策略自适应问答的任务，据称在性能上可超越比其大 7 倍的模型。该模型可运行在单块 16GB NVIDIA GPU 上，并允许企业自定义安全标准。开放权重、小尺寸设计使其成为开发者在构建内容审核管线时，相较于通用模型中隐藏安全逻辑的一种更可部署、更经济的替代方案。

**「影响」** Shieldstral 是 Mistral 推出的 3B 开源多模态内容审核模型，可在单张 16GB NVIDIA GPU 上运行，并以 Apache 2.0 许可发布。它以自然语言策略作为输入并返回校准分数，Mistral 称其性能优于规模最高 7 倍的模型，为开发者提供可定制、可部署的审核方案，替代通用模型中的隐性安全逻辑。

**「社区讨论」** 社区讨论中，有用户好奇该模型是否支持任意规则集，还是沿用大型平台的单一审核风格；也有多位用户赞赏 Mistral 聚焦小型专用模型的做法，认为专用审核模型比通用模型内隐藏的安全逻辑更易推理和部署，并有人表示这是搭建图片分享或社交平台时更现实、低成本的审核方案。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://mistral.ai/news/shieldstral/">Introducing Shieldstral. | Mistral AI</a></li>
<li><a href="https://x.com/MistralAI/status/2084684737554141253">Mistral AI on X: &quot;State-of-the-art on multimodal moderation, Shieldstral boasts industry-leading efficiency, running on a single 16GB NVIDIA GPU and gives enterprises customized control of what’s deemed safe.&quot; / X</a></li>
<li><a href="https://mistral.ai/news/shieldstral/">Introducing Shieldstral. | Mistral AI</a></li>
<li><a href="https://x.com/MistralAI/status/2084684737554141253">Mistral AI on X: &quot;State-of-the-art on multimodal moderation, Shieldstral boasts industry-leading efficiency, running on a single 16GB NVIDIA GPU and gives enterprises customized control of what’s deemed safe.&quot; / X</a></li>

</ul>
</details>

**标签**: `#Mistral`, `#content moderation`, `#open-weights`, `#multimodal`, `#AI model`

---

<a id="item-tech-news-8"></a>
### [用新颜色空间生成多样肤色的简单算法](https://toneyalexander.github.io/inclusive-color-space/) ⭐️ 7.0/10

作者在 Show HN 中发布了一个自定义颜色空间和算法，用于在数字艺术和游戏开发中生成合理且多样化的肤色。项目包含基于该空间的取色器、程序化生成算法，以及大量交互式 JavaScript 演示和数学解释。作者承认方法论可能不太严谨，但认为结果对他人有帮助，并在“未来工作”部分列出了改进空间。目前没有官方工具版本或性能数据，但页面提供了完整的算法推导和使用示例。该作品获得了社区积极的评价，并被指出与现有肤色研究（如 Pantone 肤色系统）存在关联。

hackernews · automatoney · 8月4日 15:16 · [社区讨论](https://news.ycombinator.com/item?id=49170165)

**「背景」** 数字艺术和游戏开发中，选择看起来自然且覆盖不同人群的肤色一直是个挑战，因为肤色受光照、感知和物理反射等多种因素影响。传统调色板或 RGB 值往往难以直观地控制肤色变化；而现有的肤色建模方法，如 Pantone 肤色系统和 Oklab 颜色空间中的分布，已经被研究过，但尚未完全解决生成多样肤色的易用性问题。这个项目试图通过自定义颜色空间和数学拟合来降低这一过程的难度。

**「影响」** 对于数字艺术家和独立游戏开发者，这个颜色空间和算法提供了一种比手动调整 RGB 更高效的肤色生成方式，可直接用于角色创建和程序化内容生成。社区成员已经将其与 Oklab 中的实际基金会色号数据进行对比，结果显示该方法生成的肤色分布与真实数据一致，这验证了其实际可用性。

**「社区讨论」** 评论整体非常正面，有用户称赞其从手工标记到函数拟合的实现思路“非常流畅”，并认为它避免了降维导致的表达不足问题。也有评论指出项目没有引用 Pantone 肤色系统，并提到在极端高饱和下所有种族肤色都会呈现橙色调，同时有人询问了“手工标记颜色”这一步的具体做法。这些讨论主要围绕方法的科学严谨性和与现有工作的衔接，并非否定项目的价值。

**标签**: `#color space`, `#skin tones`, `#computer graphics`, `#procedural generation`, `#color science`

---

<a id="item-tech-news-9"></a>
### [Waymo 在达拉斯向所有用户开放自动驾驶打车服务](https://waymo.com/blog/shorts/dallas-open-to-all/) ⭐️ 7.0/10

Waymo 宣布其自动驾驶打车服务在达拉斯正式向所有用户开放，标志着这家领先的自动驾驶公司在又一主要城市的扩张。达拉斯是 Waymo 继凤凰城、旧金山、洛杉矶和奥斯汀之后部署商业化 Robotaxi 服务的重要市场，此次开放意味着当地居民无需候补名单或邀请即可通过 Waymo 应用叫车。目前尚不清楚达拉斯服务区的具体覆盖范围和运营时间，但 Waymo 此前在得克萨斯州已有奥斯汀和休斯顿的运营经验。该举措进一步巩固了 Waymo 作为美国最大规模的商业化自动驾驶出行服务商的地位，也反映出自动驾驶网约车正在从试点走向常规城市交通。

hackernews · xnx · 8月4日 18:29 · [社区讨论](https://news.ycombinator.com/item?id=49172836)

**「背景」** Waymo 是 Alphabet 旗下的自动驾驶公司，此前已在凤凰城、旧金山、洛杉矶和奥斯汀等城市运营完全无人驾驶的网约车服务。在达拉斯，Waymo 于今年早些时候推出服务时采用等候名单制，如今正式向所有公众开放，用户可下载其应用直接叫车，车内没有人类安全驾驶员。

**「影响」** 达拉斯用户现在可以直接使用 Waymo 的自动驾驶出租车服务，使其成为又一批能日常体验 Robotaxi 的美国城市居民。不过，由于达拉斯-沃斯堡都会区布局分散，初期服务范围是否覆盖主要通勤走廊仍存在不确定性，这会影响该服务的实际便利性。

**「社区讨论」** 评论中既有乐观声音也有务实担忧：有人称赞 Waymo 车辆是优秀的道路参与者，并指出在洛杉矶等已运营城市中它们比人类司机引发的事故更少，但偶尔会出现“卡住”的尴尬情况；也有达拉斯本地用户表示高兴，但认为当前服务区可能不够大，因为达拉斯是围绕达拉斯-沃斯堡双城分散发展的都市区，不像奥斯汀、休斯顿和圣安东尼奥那样以市中心为枢纽。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cnet.com/uncategorized/waymo-opens-all-riders-dallas/">Waymo Opens Up to All Riders in Dallas - CNET</a></li>
<li><a href="https://waymo.com/blog/shorts/dallas-open-to-all/">August 4, 2026 - From the road - Waymo</a></li>
<li><a href="https://www.fox4news.com/news/waymo-autonomous-rides-now-open-public-dallas-waitlist-ends">Waymo autonomous rides now open to public in Dallas as waitlist ends | FOX 4 Dallas-Fort Worth</a></li>

</ul>
</details>

**标签**: `#autonomous-vehicles`, `#waymo`, `#artificial-intelligence`, `#robotics`, `#transportation`

---

<a id="item-tech-news-10"></a>
### [LLM 0.32 发布：支持推理轨迹、服务器端工具与 Responses API](https://simonwillison.net/2026/Aug/4/new-release-of-llm/#atom-everything) ⭐️ 7.0/10

Simon Willison 发布了 LLM 0.32，这是该项目自最初发布以来最重要的更新。新版增加了对可见推理轨迹的支持，默认输出到标准错误，可通过 -R/--hide-reasoning 关闭，并将默认模型改为 GPT-5.6 Luna。LLM 现在支持 OpenAI 等提供商提供的服务器端工具（如 CodeInterpreter 和 WebSearch），llm-anthropic 插件也新增了 WebSearch、WebFetch、CodeExecution 与 AnthropicMCP。Python API 新增了 model.prompt\(messages=\[\]\) 和 stream\_events\(\)，可处理推理文本、输出字符串、工具调用和图像附件等混合输出，同时日志系统改为内容可寻址的 SQLite 日志。此外，新的 llm openai endpoint 命令能以一行命令对任意 OpenAI 兼容端点执行 prompt，且不记录日志。

rss · Simon Willison · 8月4日 23:58

**「背景」** LLM 是 Simon Willison 开发的命令行工具，通过统一接口和插件生态调用多种大语言模型，并提供 Python API。推理轨迹是推理模型在生成答案前产生的思考文本，通常被隐藏；服务器端工具则让模型在 API 侧执行代码、搜索网络等操作。OpenAI Responses API 是比 Chat Completions 更新的接口形式，能原生返回包含工具调用和推理内容的更结构化响应。LLM 0.32 正是围绕这些新能力进行的架构升级。

**「影响」** 对 LLM 用户和开发者，新版本提供了可查看的推理轨迹、服务器端工具和 OpenAI 兼容端点的一行调用，并让 Python API 能直接处理包含推理、工具调用和图片的流式事件输出。

**标签**: `#LLM`, `#OpenAI`, `#CLI tools`, `#reasoning traces`, `#developer tools`

---

<a id="item-tech-news-11"></a>
### [MiniMax-H3 的 MLX 移植版可在 Apple Silicon 上运行](https://simonwillison.net/2026/Aug/4/minimax-h3-mlx/#atom-everything) ⭐️ 7.0/10

MiniMax 约两天前发布了 MiniMax-H3，自称是通用全模态生成系统，可接受文本、图像、音频和视频输入，并生成最长 15 秒、带音频的视频片段。PipeNetwork/minimax-h3-mlx 项目将其移植到 MLX，使其能在 Apple Silicon 上运行。Simon Willison 在 M5 Max MacBook Pro 上成功运行，给出了下载模型和运行 generate.py 的完整命令；运行时需下载约 115GB 模型文件，单次视频生成耗时近 45 分钟。他生成的示例视频画面令人印象深刻，但由于未按提示指南指定音频内容，音频表现为类似语音的杂音；MiniMax 官方提供了视频提示撰写指南来解决这类问题。

rss · Simon Willison · 8月4日 19:10

**「背景」** MiniMax-H3 是 MiniMax 于 2026 年发布的开源“全模态”（omni-modal）生成系统，可统一理解文本、图像、视频和音频输入，并能生成最高 2K 分辨率、最长 15 秒且带原生立体声的视频。MLX 是苹果面向 Apple Silicon 芯片的机器学习框架，PipeNetwork/minimax-h3-mlx 项目将这个模型移植到 MLX，使开发者可以在 Mac 上本地运行视频生成流程，而不需要依赖原有的 GPU 推理栈。Simon Willison 的演示需要下载约 115GB 的模型文件，并在他的 M5 Max MacBook Pro 上耗时近 45 分钟生成一段视频，这反映了模型体量和本机推理的实际成本。

**「影响」** Apple Silicon 用户现在可以本地运行 MiniMax-H3 的 MLX 移植版，用文本生成带音频的 15 秒视频，但需要约 115GB 下载和接近 45 分钟的单次推理时间。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.minimax.io/blog/minimax-h3">MiniMax H 3 : An Open Model Breaking the Boundaries Between Tasks...</a></li>
<li><a href="https://huggingface.co/MiniMaxAI/MiniMax-H3">MiniMaxAI/ MiniMax - H 3 · Hugging Face</a></li>

</ul>
</details>

**标签**: `#MLX`, `#MiniMax`, `#video generation`, `#omni-modal`, `#Apple Silicon`

---

<a id="item-tech-news-12"></a>
### [特朗普政府拟禁止进口新型中国光模块](https://www.reuters.com/world/trump-administration-drafting-ban-chinese-data-center-devices-sources-say-2026-08-04/) ⭐️ 7.0/10

特朗普政府据知情人士透露正在起草一项禁令，拟禁止进口新型中国数据中心组件，重点是光模块。美国联邦通信委员会（FCC）正推进该措施，官员希望今年内发布并生效，以保护支撑人工智能热潮的关键基础设施。禁令旨在防止中方窃取数据、植入恶意软件或中断服务，但仍可能修改或搁置。若实施，将冲击全球光模块龙头中际旭创，该公司占据约 27%市场份额。此前 FCC 已对中国无人机、路由器、机器人和逆变器实施类似进口限制。

telegram · zaihuapd · 8月4日 11:29

**「背景」** 光模块（光收发器）是数据中心内部及之间高速传输数据的关键组件，对于支撑人工智能负载的基础设施至关重要。美国联邦通信委员会（FCC）此前已陆续对中国无人机、路由器、机器人和逆变器实施进口限制；此次草案拟将限制扩展至数据中心光模块。据 Counterpoint Research 数据，中国中际旭创（Zhongji Innolight）占据全球数据中心光收发器市场约 27% 的份额，并于今年 6 月被列入美国国防部涉军企业名单。

**「影响」** 若禁令落地，全球市场份额 27%的中际旭创及相关中国光模块厂商将直接受到冲击，消息引发相关中国光模块股票下跌。由于中国厂商目前供应全球一半以上的高速光互连，而美国厂商现有产能无法完全替代，这一禁令也会暴露美方数据中心供应链的相互依赖风险，并带动 Applied Optoelectronics 等美国替代厂商股价上涨。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://wccftech.com/the-fcc-mulls-banning-china-sourced-optical-transceivers-threatening-innolights-27-global-market-share-as-coherent-and-lumentum-prepare-to-pounce/">The FCC Mulls Banning China-Sourced Optical Transceivers, Threatening Innolight&#x27;s 27% Global Market Share As Coherent And Lumentum Prepare To Pounce</a></li>
<li><a href="https://ca.finance.yahoo.com/news/optical-component-stocks-rally-proposed-113612148.html">Optical component stocks rally on proposed U.S. ban on Chinese tech</a></li>
<li><a href="https://www.newsnationnow.com/business/tech/fcc-ban-chinese-data-center-components/">Report: FCC considering ban on Chinese data center components</a></li>
<li><a href="https://www.youtube.com/watch?v=bEwlluB6DNU">China Optical Stocks Drop on Reports of US Ban - YouTube</a></li>
<li><a href="https://www.caixinglobal.com/2026-08-05/us-drafts-ban-on-chinese-optical-modules-exposing-mutual-supply-chain-risks-102471268.html">U . S . Drafts Ban on Chinese Optical Modules ... - Caixin Global</a></li>
<li><a href="https://cryptobriefing.com/us-ban-chinese-optics-aaoi-surges/">Applied Optoelectronics surges 17% on reported US ban of Chinese ...</a></li>

</ul>
</details>

**标签**: `#US-China tech policy`, `#optical modules`, `#AI infrastructure`, `#hardware supply chain`, `#FCC regulation`

---

<a id="item-tech-news-13"></a>
### [白宫对开源 AI 监管转向发布前审查](https://www.nytimes.com/2026/08/04/technology/ai-washington-regulation-whiplash.html) ⭐️ 7.0/10

据《纽约时报》报道，特朗普政府内部围绕是否限制中国开源 AI 模型出现剧烈摇摆。白宫幕僚长 Susie Wiles、财长 Scott Bessent 等曾考虑动用制裁、贸易黑名单甚至禁止美企与中国公司合作，但遭硅谷强烈反对后转而聚焦提升美国 AI 竞争力。8 月 4 日，白宫邀请科技公司商议新框架，拟在模型发布前进行网络安全审查。导火索是中国开源模型 Kimi 部分性能比肩 OpenAI 顶级模型；OpenAI 与 Anthropic 以国家安全为由推动限制中国对手，Nvidia、Meta 等则力挺开放生态。预计这一转向将影响美国开源 AI 监管方向，但具体措施尚未敲定。

telegram · zaihuapd · 8月4日 15:22

**「背景」** 开源 AI 模型通常公开权重，允许开发者自由使用和修改。此前美国政策讨论多集中于出口管制和对中国企业的制裁，而此次白宫动向显示监管重点可能转向美国国内的发布前安全审查。OpenAI、Anthropic 与 Nvidia、Meta 在是否限制中国开源模型上立场对立，反映出硅谷内部对开放生态与国家安全之间平衡的分歧。

**「影响」** 若新框架落地，美国开源开发者发布模型前可能需通过网络安全审查，Meta、Nvidia 等支持开放生态的企业将面临更高合规成本；同时，若对华制裁选项被搁置，中美在开源 AI 领域的合作与竞争关系仍存在不确定性。

**标签**: `#AI regulation`, `#open source`, `#US policy`, `#national security`, `#Silicon Valley`

---

<a id="item-tech-news-14"></a>
### [三星与 SK 海力士据报测试中微刻蚀设备以对冲出口管制风险](https://www.reuters.com/world/china/samsung-sk-hynix-test-chinese-chip-tools-hedge-against-us-risks-2026-08-05/) ⭐️ 7.0/10

路透社援引知情人士称，三星电子与 SK 海力士正在评估中国半导体设备商中微公司（AMEC）的刻蚀设备，考虑用于其在华工厂，以对冲美国出口管制收紧带来的风险。报道称，两家韩企约两年前已开始测试，但尚未决定是否大规模部署；三星否认相关测试，SK 海力士拒绝置评。2025 年美国撤销了两家韩企中国工厂的“经验证最终用户”待遇，改为年度许可，韩企担忧未来限制可能波及西方现有设备维护。分析称中国设备价格通常低 20% 至 30%，若获国际大厂认可将是强力背书；德意志银行预计今年中国本土设备商或占据中国约 280 亿美元晶圆制造设备市场的 25% 至 30%。

telegram · zaihuapd · 8月5日 04:32

**「背景」** 中微公司是中国领先的等离子体刻蚀设备供应商，其设备主要用于芯片制造中的刻蚀工序。美国出口管制通过限制先进设备、零部件和维修服务流向中国，影响在华外资晶圆厂；三星与 SK 海力士在中国设有大型存储芯片工厂，因此需要评估本土替代设备以降低供应链风险。

**「影响」** 若测试最终转化为部署，将为中微提供国际大厂背书，并降低三星和 SK 海力士在华工厂对美系设备维护的依赖，从而支撑中国设备商扩大在中国晶圆制造设备市场的份额；但目前尚未决定部署且三星否认测试，结果仍不确定。

**标签**: `#semiconductors`, `#supply chain`, `#hardware`, `#export controls`, `#China tech`

---

<a id="item-tech-news-15"></a>
### [删除 89TB 数据获刑五年十个月](https://xinwen.bjd.com.cn/content/s6a728509e4b0e45f3fd5a25b.html) ⭐️ 7.0/10

北京市首例破坏人工智能模型刑事案件二审于 2026 年 6 月 26 日驳回上诉、维持原判。算法工程师王某为给外部人员训练模型腾出空间，运行删除代码超过 17 小时，删除公司 89TB 模型及训练数据，导致研发项目停摆；法院以破坏计算机信息系统罪判处其有期徒刑五年十个月，并赔偿公司经济损失 20.4 万余元。检察机关认定人工智能模型及其训练系统属于刑法意义上的“计算机信息系统”，数据恢复期间产生的人工和算力支出也纳入经济损失认定。这一判决明确了删除 AI 模型和数据可能承担刑事责任，并首次将 AI 研发资产纳入该罪保护范围。

telegram · zaihuapd · 8月5日 06:17

**「背景」** 该案是北京市首例以非法删除训练数据为手段、破坏人工智能模型的刑事案件。案件的关键法律认定是：人工智能模型及其训练系统具备自动处理数据功能，属于刑法意义上的“计算机信息系统”；模型训练数据被删除会直接破坏数据结构、影响训练功能正常运行，因此构成破坏计算机信息系统罪。

**「影响」** 该案对 AI 企业和算法工程师具有直接警示：未经授权的数据删除将被视为破坏计算机信息系统罪，不仅面临刑事处罚，还须赔偿恢复数据产生的成本。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://c.m.163.com/news/a/L3GVB83505148UCS.html?spss=backflow-index-hotlist">算 法 工 程师为干私活腾空间，疯狂代码17小时删光89TB...</a></li>
<li><a href="https://m.jiemian.com/article/14295450_microcontent.html">为“干私活”删除公司AI 训 练 数 据 ，一程序员获刑五年十个月 | 界面新闻</a></li>

</ul>
</details>

**标签**: `#AI`, `#legal`, `#data management`, `#cybercrime`, `#China`

---

## 财经新闻

<a id="item-finance-news-1"></a>
### [谷歌为 Anthropic 搭建约 2000 亿美元华尔街融资架构](https://www.ft.com/content/549f2e23-5aa2-49c7-9ea6-a9784ab7087c) ⭐️ 8.0/10

《金融时报》调查称，谷歌已为 AI 公司 Anthropic 搭建约 2000 亿美元的华尔街融资架构，其中约 1500 亿美元用于供应 AI 芯片；今年 6 月，特殊目的载体 Compute SPV 已完成首批约 350 亿美元硬件交易，相当于约 1 吉瓦算力和 100 万颗 TPU。由于 Anthropic 没有信用评级，谷歌、博通、阿波罗、黑石及摩根士丹利等参与方通过担保、购买和回租等方式分担风险。

telegram · zaihuapd · 8月4日 10:52

**「背景」** Anthropic 是一家 AI 初创企业，本身没有信用评级，难以单独从市场融资。谷歌与博通、阿波罗、黑石、摩根士丹利等机构合作，采用类似波音、通用电气推销飞机和发动机的厂商融资方式，由特殊目的载体购入硬件后回租给 Anthropic，从而让各方都不必把数百亿美元 AI 硬件计入自身资产负债表。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://finance.biggo.com/news/cc3ceaa8-e838-4501-b4c0-13b9fcba9232">Google Orchestrates $200 Billion AI Chip Financing Network in Landmark Infrastructure Deal — BigGo Finance</a></li>

</ul>
</details>

**标签**: `#AI基础设施`, `#融资`, `#谷歌`, `#Anthropic`, `#芯片`

---

<a id="item-finance-news-2"></a>
### [DeepSeek 重启第二轮融资，拟募资 500 亿元](https://finance.sina.com.cn/wm/2026-08-05/doc-inimfmyv1554159.shtml) ⭐️ 8.0/10

据多名交易人士透露，DeepSeek 已重启第二轮融资，计划募资 500 亿元，投前估值约 5000 亿元，较首轮提升约 43%，预计 8 月下旬完成签约。

telegram · zaihuapd · 8月5日 02:46

**「背景」** DeepSeek 今年 4 月开启首轮融资，6 月完成交割，募资 500 亿元、估值超 3500 亿元；本轮 7 月中旬开启、7 月底曾暂停，据称因创始人梁文锋不满疑似泄露的会议实录，且部分此前积极接触的机构称尚未接到重启消息。

**「影响」** 若本轮顺利完成签约，DeepSeek 两轮合计募资将超 1000 亿元。

**标签**: `#DeepSeek`, `#AI`, `#financing`, `#valuation`, `#China tech`

---

<a id="item-finance-news-3"></a>
### [盘后财报引发多只个股大幅波动](https://www.cnbc.com/2026/08/04/stocks-making-the-biggest-moves-after-the-bell-spcx-amd-pins-anet-wynn.html) ⭐️ 7.0/10

8 月 4 日盘后，多家公司公布第二季度财报与预测，股价随之大幅波动。Arista Networks 因业绩超预期上涨 11%；AMD 虽盈利微超预期但指引未让投资者满意，下跌 8%；Pinterest 因指引未打动投资者下跌 8%；Teradata 因第三季度指引低于预期下跌 17%。

rss · CNBC Finance · 8月4日 22:25

**「背景」** 在财报季中，公司盘后公布的第二季度业绩和下一季度指引是投资者调整预期的主要依据，因此常引发个股在常规交易时间外的明显波动。

**标签**: `#earnings`, `#stock movers`, `#technology`, `#semiconductors`, `#guidance`

---

<a id="item-finance-news-4"></a>
### [Polymarket 洽谈超 200 亿美元估值融资](https://www.cnbc.com/2026/08/04/polymarket-seeks-fundraising-round-at-more-than-20-billion-valuation.html) ⭐️ 7.0/10

Polymarket 正在洽谈一轮估值超过 200 亿美元的融资。该公司在 6 月底告诉 CNBC，其年化收入已远高于 10 亿美元。

rss · CNBC Finance · 8月4日 13:31

**「背景」** 这笔融资谈判发生在其 4 月完成一轮 150 亿美元估值融资之后；该公司 5 月上线的美国合规交易所目前日均名义交易量超过 1 亿美元，高于 5 月底的约 7500 万美元。

**标签**: `#Prediction Markets`, `#Fundraising`, `#Valuation`, `#Fintech`, `#Polymarket`

---

<a id="item-finance-news-5"></a>
### [费城联储主席保尔森：对当前利率满意，但保留调整选项](https://www.cnbc.com/2026/08/04/philadelphia-fed-president-paulson-content-with-current-rates-but-keeping-an-open-mind.html) ⭐️ 7.0/10

费城联储主席安娜·保尔森表示，她认为当前利率水平足以让通胀回到 2%目标，并支持上周将联邦基金利率维持在 3.5%-3.75%不变的决定；但她称，若核心通胀未继续下降，将“开放”调整货币政策。保尔森估计潜在通胀约为 2.4%-2.8%，而美联储关注的核心通胀 6 月为 3.3%。

rss · CNBC Finance · 8月4日 17:49

**「背景」** 保罗森于 2025 年 7 月出任费城联邦储备银行行长；她所在的联邦公开市场委员会上周以 9 比 3 的投票决定维持利率不变，目前基准利率保持在 3.5%-3.75%，而 6 月核心通胀率为 3.3%，仍高于 2%的目标。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.philadelphiafed.org/our-people/anna-paulson">Anna Paulson</a></li>

</ul>
</details>

**标签**: `#Federal Reserve`, `#monetary policy`, `#interest rates`, `#inflation`, `#Anna Paulson`

---

<a id="item-finance-news-6"></a>
### [贝索斯拟出售约 41 亿美元亚马逊股票 股价下跌](https://www.cnbc.com/2026/08/04/jeff-bezos-just-filed-to-sell-4-billion-in-amazon-the-shares-are-falling.html) ⭐️ 7.0/10

杰夫·贝索斯提交文件，计划出售约 1500 万股亚马逊股票，按周一收盘价计算市值约 41 亿美元；消息公布后，亚马逊周二股价下跌超过 2%。

rss · CNBC Finance · 8月4日 16:14

**「背景」** 此次出售依据 2025 年 11 月 14 日采用的 10b5-1 交易计划，并以 Form 144 提交美国证交会；此前亚马逊因第二季度盈利好于预期、云计算业务增长强劲而创下历史新高。

**标签**: `#Amazon`, `#Jeff Bezos`, `#Insider Selling`, `#SEC Filing`, `#Stock Market`

---

<a id="item-finance-news-7"></a>
### [盘前异动：多只个股因二季度财报大幅波动](https://www.cnbc.com/2026/08/04/stocks-making-the-biggest-moves-premarket-mcd-cat-pltr-mrk.html) ⭐️ 7.0/10

最新盘前交易中，多只个股因第二季度财报出现明显波动：卡特彼勒调整后每股收益 8.17 美元，高于分析师预期的 6.20 美元，股价上涨 8%；Palantir 大涨 15%，其美国商业收入激增近 150%。默克、辉瑞等公司还上调了全年营收指引。

rss · CNBC Finance · 8月4日 11:42

**「背景」** 盘前交易是美国股市正式开盘前的时段，投资者根据最新财报等信息提前买卖股票，业绩与分析师预期的差距往往引发股价调整。

**标签**: `#earnings`, `#premarket`, `#stock movers`, `#Caterpillar`, `#Palantir`

---

<a id="item-finance-news-8"></a>
### [高盛交易业务有望创纪录：二季度股票交易收入飙升 72%](https://www.cnbc.com/2026/08/01/goldman-traders-are-on-pace-for-a-record-year-a-close-up-look-at-how-theyre-doing-it.html) ⭐️ 7.0/10

高盛公布的二季度实际业绩显示，股票交易收入同比增长 72%至创纪录的 74.2 亿美元，远超分析师预期；投行业务收入增长 55%至 34 亿美元。该公司交易部门有望创下全年营收纪录。

rss · CNBC Finance · 8月4日 19:38

**「背景」** 高盛近年来加大投资并调整全球银行与市场部门战略，希望推动大客户同时使用其投行和股票交易服务。

**标签**: `#Goldman Sachs`, `#trading revenue`, `#earnings`, `#investment banking`, `#market volatility`

---

<a id="item-finance-news-9"></a>
### [国家邮政局对申通快递立案调查](https://www.spb.gov.cn/gjyzj/c100015/c100016/202608/c4467c234e1c4db0a6e393cff2e64902.shtml) ⭐️ 7.0/10

国家邮政局 8 月 4 日宣布，依法对申通快递有限公司立案调查。原因是 2026 年以来，使用“申通快递”商标、字号、快递运单的多家企业多发生产安全事故，且申通快递有限公司未按规定对相关企业实行安全保障统一管理。

telegram · zaihuapd · 8月4日 12:07

**「背景」** 国家邮政局是中国快递行业的监管部门；此次立案调查意味着监管部门认为申通快递有限公司作为品牌方，未依法对使用“申通快递”商标、字号和运单的相关企业实行安全保障统一管理。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.gamersky.com/news/202608/2183156.shtml">gamersky.com/news/202608/2183156.shtml</a></li>
<li><a href="https://m.mp.oeeee.com/a/BAAFRD0000202608041638252.html">安 全 事故多发， 申 通 快 递 被 国 家 邮 政 局 立 案 调 查 ，回应了 | 南都N视频</a></li>

</ul>
</details>

**标签**: `#regulatory action`, `#STO Express`, `#express delivery`, `#production safety`, `#State Post Bureau`

---