---
layout: default
title: "Horizon Summary: 2026-08-13 (ZH)"
date: 2026-08-13
lang: zh
---

> 从 42 条内容中筛选出 15 条重要资讯。

---

**科技新闻**
1. [DeepSeek V4 Pro 0813 发布：开放权重与 API 上线](#item-tech-news-1) ⭐️ 9.0/10
2. [Gemini 3.7 Flash 发布与定价引关注](#item-tech-news-2) ⭐️ 8.0/10
3. [DeepSeek 发布开源 AI 智能体 Harness 开发者预览版](#item-tech-news-3) ⭐️ 8.0/10
4. [DRAM 操控安全研究：Spaghettifying DRAM](#item-tech-news-4) ⭐️ 8.0/10
5. [选择无聊技术：节省创新代币的经典工程策略](#item-tech-news-5) ⭐️ 8.0/10
6. [DeepMind 发布 SL2T：手语转文字首次落地 Pixel 11](#item-tech-news-6) ⭐️ 8.0/10
7. [GPT-5.6 Sol Ultrafast 在 Cerebras 上快 7 倍](#item-tech-news-7) ⭐️ 7.0/10
8. [City2Graph：将城市地理空间数据转为异构图的 Python 库](#item-tech-news-8) ⭐️ 7.0/10
9. [WorldProof：诊断世界模型失效并测量像素指标失效区间](#item-tech-news-9) ⭐️ 7.0/10
10. [苹果洽谈新闻授权，Siri AI 预算或达九位数](#item-tech-news-10) ⭐️ 7.0/10

**财经新闻**
1. [标普 500 公司利润率创历史新高，Q2 达 16.9%](#item-finance-news-1) ⭐️ 8.0/10
2. [中国经济放缓挤压就业：零工岗位增至 5300 万仍供过于求](#item-finance-news-2) ⭐️ 8.0/10
3. [阿克曼再度买入 Netflix，称其已赢得流媒体战争](#item-finance-news-3) ⭐️ 7.0/10
4. [长江存储 NAND 闪存出货量升至全球第三](#item-finance-news-4) ⭐️ 7.0/10
5. [中国 7 月新能源车占新车销量 65.1%，整体乘用车销量下滑](#item-finance-news-5) ⭐️ 7.0/10

---

## 科技新闻

<a id="item-tech-news-1"></a>
### [DeepSeek V4 Pro 0813 发布：开放权重与 API 上线](https://simonwillison.net/2026/Aug/12/deepseek-v4-pro-0813/) ⭐️ 9.0/10

DeepSeek V4 Pro 0813（8 月 13 日版本）已通过 OpenRouter 提供 API 访问，官方没有单独的公告页面。随后其开放权重在 Hugging Face 上发布，参数量为 1.7T，文件约 893 GB。Simon Willison 在测试中发现，该模型在低、中、高三种推理等级下生成的“骑自行车鹈鹕”图像差异非常大，这是其他模型上少见的现象。基准测试数据据称来自官方 DeepSeek 微信群，经由 Reddit（后被删除）和 Hacker News 的 ASCII 表格转发，尚未得到官方正式确认。

rss · Simon Willison · 8月12日 23:59

**「背景」** DeepSeek V4 Pro 0813 是 DeepSeek V4 系列的最新开源权重模型，现可通过 API 使用，其权重已经在 Hugging Face 上发布（1.7T 参数，893 GB）。在此之前，DeepSeek 已经发布了四月版的 DeepSeek-V4-Pro 和七月版的 DeepSeek-V4-Flash-0731。该模型支持 100 万 token 的上下文窗口、最多 384k 输出 token 和工具调用，API 定价为输入每百万 token 0.435 美元、输出每百万 token 0.87 美元，并且据实测会在不同推理强度档位下产生差异明显的输出。

**「影响」** 开发者现在可以通过 OpenRouter 立即调用该模型，或下载 893 GB 的开放权重进行自托管；不过由于官方没有正式发布说明，社区转发的基准结果和实际性能仍需独立验证。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://deepseekv4pro.com/news/deepseek-v4-pro-0813-official-release-opus-fable-benchmarks">DeepSeek V 4 Pro 0813 : Opus 4.8 and Fable 5 Agent Benchmarks</a></li>
<li><a href="https://www.vals.ai/models/deepseek_deepseek-v4-pro-0813">DeepSeek V 4 Pro 0813</a></li>
<li><a href="https://benchlm.ai/models/deepseek-v4-pro-0813">DeepSeek V 4 Pro 0813 Benchmarks , Pricing &amp; Speed | BenchLM.ai</a></li>

</ul>
</details>

**标签**: `#deepseek`, `#artificial-intelligence`, `#machine-learning`, `#open-source`, `#model-release`

---

<a id="item-tech-news-2"></a>
### [Gemini 3.7 Flash 发布与定价引关注](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/) ⭐️ 8.0/10

Google 发布了 Gemini 3.7 Flash，这是 Gemini 3.x 系列的新模型版本，支持可调推理等级（低、中、高、默认）并采用具有竞争力的入门定价；按计划，入门价会在 2026 年 12 月 31 日后翻倍，即从 2027 年起输入每百万 token 1.50 美元、输出每百万 token 7.50 美元。该模型在图像转 HTML 等视觉任务中表现不错，但仍不及 Anthropic Opus；在 DeepSWE 1.1 等基准上性能较强，但被评论者认为不如价格更低的竞品（如 Luna）。由于 Gemini 3.6 Flash 三周前刚发布，部分开发者对快速迭代和定价策略感到困惑。该发布对 Gemini API 用户和依赖低成本 Flash 系列的开发者有直接意义。

hackernews · thisisauserid · 8月13日 17:23 · [社区讨论](https://news.ycombinator.com/item?id=49289112)

**「背景」** Gemini Flash 是 Google DeepMind 推出的低成本、低延迟模型系列，定位为大规模、以文本为主的用例，并逐渐扩展至编码和智能体任务。该系列在 Gemini 3.7 Flash 发布前三周刚推出 Gemini 3.6 Flash，体现了快速迭代的节奏。Gemini 3.7 Flash 支持可调节的思考配置，允许开发者根据需求在质量、成本和延迟之间进行权衡。

**「影响」** 对 Gemini API 开发者和使用 Flash 系列做低成本、高吞吐文本或视觉任务的团队，Gemini 3.7 Flash 提供了新的可调推理等级，但 2027 年初价格翻倍意味着长期成本需提前评估。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/">Gemini 3.7 Flash: our most intelligent workhorse model</a></li>
<li><a href="https://deepmind.google/models/model-cards/gemini-3-7-flash/">Gemini 3.7 Flash - Model Card — Google DeepMind</a></li>

</ul>
</details>

**标签**: `#gemini`, `#ai-models`, `#llm-release`, `#google`, `#machine-learning`

---

<a id="item-tech-news-3"></a>
### [DeepSeek 发布开源 AI 智能体 Harness 开发者预览版](https://deepseek.com/harness/en/) ⭐️ 8.0/10

DeepSeek 发布了其 AI 智能体 harness 的早期开发者预览版，采用 MIT 许可证。该工具强调可追溯性：模型看到的一切，包括系统提示、推理过程、工具调用与结果、子代理调度以及上下文注入，都会记录在仅追加的会话日志中，并可通过轨迹视图按来源检查，支持对同一事件流进行恢复、分叉、搜索和重放。其底层基于 Cordis v4 研究，插件系统支持热重载和动态启用/禁用，甚至扩展到 UI 组件。作者提醒，这仍是早期版本，存在许多粗糙之处，并会有破坏兼容性的变更。

hackernews · bjin · 8月13日 12:58 · [社区讨论](https://news.ycombinator.com/item?id=49285244)

**「背景」** DeepSeek Harness 是深度求索推出的 AI 智能体运行时开发者预览版，采用“万物皆插件”架构，模型、工具、技能、会话、沙箱、存储、循环、调度和 UI 等能力均可替换或重组。它基于 Cordis v4 研究，Cordis 是一套支持在不重启进程的情况下热加载、卸载插件，并回滚插件所创建状态和副作用的框架。项目已以 MIT 协议开源，当前处于快速迭代阶段，官方明确警示未来会有破坏性兼容变更。

**「影响」** 开发者可以免费获取并实验其透明追踪与热插拔插件机制，但需做好兼容性破坏和不稳定的准备；这种可追溯性对 AI 代理调试与审计尤其有价值，而美国模型的痕迹往往加密或混淆，难以提供同等透明度。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.deepseek.com/harness/en/">DeepSeek Harness developer preview: Everything is a plugin</a></li>
<li><a href="https://github.com/deepseek-ai/deepseek-harness">GitHub - deepseek-ai/deepseek-harness: DeepSeek Harness ...</a></li>
<li><a href="https://lovableapp.org/blog/deepseek-harness-2026-guide">DeepSeek Harness 2026: Everything Is a Plugin — Developer ...</a></li>

</ul>
</details>

**标签**: `#deepseek`, `#ai-agents`, `#open-source`, `#tooling`, `#traceability`

---

<a id="item-tech-news-4"></a>
### [DRAM 操控安全研究：Spaghettifying DRAM](https://github.com/xoreaxeaxeax/skitter-creek-bath-salts) ⭐️ 8.0/10

安全研究员 Christopher Domas（GitHub 用户 xoreaxeaxeax）发布了名为“Spaghettifying DRAM”的研究项目，探索通过操控 DRAM 实现底层内存攻击的可能性。根据项目 README，该技术已在 AMD Jaguar（2013 年的低功耗架构）上验证有效，而 Zen 3 的内存控制器寄存器基地址不同。这项研究的价值在于，它可能让获得 ring 0 权限的攻击者进一步访问通常被视为“负环”的隐藏特权资源，从而扩大系统入侵的影响。该项目也因作者计划在 Black Hat 大会上发表配套演讲而受到社区高度关注。

hackernews · matt\_d · 8月13日 14:17 · [社区讨论](https://news.ycombinator.com/item?id=49286341)

**「背景」** 这个项目名为 skitter-creek-bath-salts，针对 DRAM 控制器对物理地址的加扰/重映射机制。CPU 访问内存通常先由页表把虚拟地址转成物理地址，但 DRAM 控制器还会再做一层地址转换；该工具通过配置 AMD16h（如 Jaguar 架构）等平台的 DRAM 控制器寄存器，能让一次内存访问落到攻击者选择的任意物理地址，从而访问 PSP、C6、微码、SMM 等通常被隐藏或受特殊保护的区域。这凸显了现代 DRAM 初始化与控制器固件所引入的攻击面，也是相关 Black Hat 演讲的核心内容。

**「影响」** 如果该技术被进一步利用，在受影响的 AMD 平台上取得 ring 0 权限后，攻击者可能访问原本固件或隐藏特权层才可触及的资源；但具体影响范围取决于 CPU 代际，例如 Zen 3 已改变了相关基地址。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/xoreaxeaxeax/skitter-creek-bath-salts">GitHub - xoreaxeaxeax/skitter-creek-bath-salts: Unlocking ...</a></li>
<li><a href="https://upstract.com/x/201aa8130cc32a64">Spaghettifying DRAM - upstract.com</a></li>

</ul>
</details>

**标签**: `#DRAM`, `#security`, `#hardware`, `#memory corruption`, `#exploit`

---

<a id="item-tech-news-5"></a>
### [选择无聊技术：节省创新代币的经典工程策略](https://mcfunley.com/choose-boring-technology) ⭐️ 8.0/10

这篇 2015 年发布于 mcfunley.com 的经典文章主张，公司应优先采用成熟、可预期、被充分理解的“无聊技术”，把资源留给真正差异化的领域。作者提出“每家公司大约有三枚创新代币”这一比喻，认为创新供给长期固定，花在基础环节上的新颖技术会挤占核心业务所需的创新空间。文章强调“新”或“有创意”只是弱代理指标，真正的判断应基于需求、风险、权衡与潜在收益。该框架因能帮助工程负责人做出并解释技术取舍而持续被讨论，也常被用于评估团队文化是否务实。

hackernews · tosh · 8月13日 17:48 · [社区讨论](https://news.ycombinator.com/item?id=49289512)

**「背景」** 《选择无聊的技术》是 Dan McKinley 于 2015 年发表的一篇经典文章，提出每个团队只有有限的“创新令牌”（innovation tokens），应把这些令牌花在真正差异化的产品功能上，而不是替换掉已被充分验证的基础设施（例如不用热门新数据库替换 PostgreSQL）。这篇文章后来成为工程决策中实用主义技术选型的重要参照，并在 Hacker News 等社区被广泛讨论。

**「影响」** 对参与技术选型的工程管理者和产品经理，该框架提供了一种可操作、可解释的成本分配语言；但批评者提醒，仅凭“无聊”与否做决策可能掩盖更重要的真实权衡。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://mcfunley.com/choose-boring-technology">Dan McKinley :: Choose Boring Technology</a></li>
<li><a href="https://boringtechnology.club/">Choose Boring Technology</a></li>
<li><a href="https://jonathannen.com/choose-boring-technology/">Dan McKinley &#x27;s classic advice on &quot; choosing boring technology &quot; is....</a></li>

</ul>
</details>

**标签**: `#boring technology`, `#innovation tokens`, `#software engineering`, `#tech strategy`, `#engineering culture`

---

<a id="item-tech-news-6"></a>
### [DeepMind 发布 SL2T：手语转文字首次落地 Pixel 11](https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/) ⭐️ 8.0/10

谷歌 DeepMind 发布大规模多语言手语转文字模型 SL2T，并首次将其带入消费产品：率先支持美国手语转英语，已在 Pixel 11 的 Gboard 和 Live Transcribe 中上线。该模型使用超过 10 万小时、50 多种手语的数据训练，在 FLEURS-ASL 基准上零样本得分 70 BLEURT，远高于此前纪录。为保护隐私，SL2T 只处理手部与身体姿态关键点，不读取原始视频。后续将扩展至更多设备和语言。

telegram · zaihuapd · 8月13日 08:55

**「背景」** 手语转文字 AI 需要模型理解手部动作、身体姿态和表情，并映射为对应的口语文本。传统方法依赖大量配对数据和原始视频，而 SL2T 采用姿态关键点作为输入，既能降低算力成本，也有助于减少隐私风险。本次 Pixel 11 集成是此类模型首次以系统级功能形式出现在消费设备上。

**「影响」** Pixel 11 用户现可直接在 Gboard 和 Live Transcribe 中使用美国手语转英语功能，获得更便捷的输入与实时字幕体验；但当前仅支持美国手语转英语，且仅限 Pixel 11 设备，其他语言和机型仍有待后续更新。

**标签**: `#sign-language`, `#DeepMind`, `#machine-learning`, `#accessibility`, `#AI-model`

---

<a id="item-tech-news-7"></a>
### [GPT-5.6 Sol Ultrafast 在 Cerebras 上快 7 倍](https://www.cerebras.ai/blog/accelerating-gpt-5-6-sol-ultrafast-with-openai) ⭐️ 7.0/10

Cerebras 在其博客中宣布，与 OpenAI 合作的 GPT-5.6 Sol Ultrafast 模式在 HLE 基准上取得约 7 倍的速度提升：据评估，它用 11 小时 11 分钟完成全部 2500 道题，而 Claude Fable 5 需要 78 小时 27 分钟，并声称达到相当的准确率。评论中引述的 Artificial Analysis 数据显示，Ultrafast 输出速度比 Fable 5 快 11 倍、比 Opus 4.8 Fast 模式快 5 倍。该消息之所以重要，是因为它展现了专用 AI 芯片在长时推理任务上的潜力，也引发了对“更快是否等于同样好”的讨论；不过 Cerebras 和 OpenAI 均未明确说明 Ultrafast 与普通 GPT-5.6 Sol 完全同精度，也未公布定价。

hackernews · pr337h4m · 8月13日 18:10 · [社区讨论](https://news.ycombinator.com/item?id=49289844)

**「背景」** OpenAI 正在预览一种名为 Ultrafast 的新服务层级，首个应用是 GPT-5.6 Sol，由 Cerebras 硬件提供支持，首次在 OpenAI API 中推出。该模式声称可将模型运行速度提升至标准处理的 14 倍，生成速度高达每秒 750 个输出 token，初期仅向特定客户开放。Cerebras 的定制芯片架构专为高吞吐、低延迟的大模型推理设计，此次合作旨在将前沿模型的能力用于对速度敏感的工作场景，同时官方宣称不牺牲质量。

**「影响」** 对依赖大规模推理和长时基准评估的 AI 开发者而言，该模式有望显著缩短迭代和验证周期；但由于官方缺乏关于精度等同性和定价的明确信息，实际收益仍存在不确定性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/previewing-ultrafast/">Previewing Ultrafast mode: GPT‑5.6 Sol at up to ... - OpenAI</a></li>
<li><a href="https://www.cerebras.ai/blog/accelerating-gpt-5-6-sol-ultrafast-with-openai">Accelerating GPT-5.6 Sol Ultrafast with OpenAI - cerebras.ai</a></li>
<li><a href="https://investors.cerebras.ai/news-releases/news-release-details/cerebras-powers-ultrafast-mode-openais-gpt-56-sol">Cerebras Powers Ultrafast Mode for OpenAI’s GPT-5.6 Sol ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#OpenAI`, `#Cerebras`, `#LLM inference`, `#performance`

---

<a id="item-tech-news-8"></a>
### [City2Graph：将城市地理空间数据转为异构图的 Python 库](https://www.reddit.com/r/MachineLearning/comments/1vn8oya/city2graph_a_python_library_for_heterogeneous/) ⭐️ 7.0/10

City2Graph 是一个新发布的 Python 库，目标是将城市地理空间数据转换为分析就绪的异构图表，用于空间分析、网络分析和图神经网络（GeoAI）。它覆盖了形态学（来自 OpenStreetMap/Overture Maps 的建筑、街道、城市肌理）、交通（通过 DuckDB 加载 GTFS 和 GBFS，并将 GTFS 汇总为站点到站点的公交图）、出行（OD 矩阵与流量）以及邻近/连通性（KNN、Delaunay、Gilbert、Waxman、queen/rook，支持欧氏、曼哈顿或网络距离），并支持通过 metapath 连接多种节点和边的类型。库还提供 GeoDataFrame、NetworkX、rustworkx 与 PyTorch Geometric Data/HeteroData 之间的往返转换，并保持几何与属性一致。介绍该库的论文已发表于 Computers, Environment and Urban Systems 第 130 卷，文章编号 102492（Sato、Pietrostefani、Mahabir、Arribas-Bel，2026），代码托管在 https://github.com/c2g-dev/city2graph。

reddit · r/MachineLearning · /u/Tough\_Ad\_6598 · 8月13日 11:59

**「背景」** 异构图表包含多种节点和边类型，可以将建筑、街道、公交站点、出行流等城市要素及其关系放在同一个结构中，而传统扁平特征表会丢失这类空间和关系信息。图神经网络（GNN）适合在这种异构图上学习表示，因此 City2Graph 试图把城市数据预处理成 GNN 可直接使用的形式。

**「影响」** 对从事 GeoAI、城市计算或空间网络分析的开发者和研究者，City2Graph 省去了从 OSM、GTFS、GBFS 等原始数据到 PyTorch Geometric 图数据的大量自建转换工作，因为库提供了现成的高层构造和格式往返接口。

**标签**: `#graph-neural-networks`, `#geospatial-analysis`, `#urban-computing`, `#python-library`, `#spatial-networks`

---

<a id="item-tech-news-9"></a>
### [WorldProof：诊断世界模型失效并测量像素指标失效区间](https://www.reddit.com/r/MachineLearning/comments/1vnliv7/worldproof_diagnosing_where_worldmodel/) ⭐️ 7.0/10

WorldProof 是一个开源的 world model（世界模型）诊断工具，用于分析从起始上下文和动作序列预测未来帧的模型，Apache-2.0 许可，可通过 \`pip install worldproof\` 安装，核心依赖仅有 numpy、torch 和 pillow，无需 GPU 即可在笔记本电脑上运行，并能直接读取 LeRobotDataset v3.0 的 parquet 和 mp4 数据。作者在验证工具时发现，真实机器人视频上的像素指标（SSIM/PSNR）经常无法对模型进行排序：在 SO-101 机械臂数据（30fps、三摄像头、64 次 rollout、6 步 horizon、仅动态区域评分）上，“最后一帧复制”基线达到 0.983 SSIM 和 53.9 dB PSNR，但误差不随 horizon 增长，各步 SSIM 在 0.923 到 0.972 间波动，因此所有模型得分相近，评估失去区分力。在 DROID 真实操作视频（15fps、48 步）上，动态区域 SSIM 从第 1 步的 0.873 单调下降到第 28 步的 0.204，之后在约 0.20 SSIM 和 10.3 dB 处触底振荡，只有约 8 到 24 步区间内模型才可区分。作者还发现，把 step 0 计入平均会显著抬高标量（该 30fps 记录中 step 0 达 119.8 dB，使 horizon 平均标量从约 32 升至 53.9），因此建议报告曲线而非标量，并针对自身数据测量有效评估区间。

reddit · r/MachineLearning · /u/georgia\_bucea · 8月13日 19:58

**「背景」** 世界模型（world model）通常根据当前观测和一系列动作预测未来的视频帧，评估这类模型常用 SSIM、PSNR 等逐像素相似度指标。这类指标在受控或静态数据集上往往能通过排序测试，但在真实机器人视频中，由于静态背景占比高、帧率相对任务速度较高，“预测画面不变”的简单基线就可能获得很高分数，导致评估设置缺乏判别力，而不是指标本身失效。

**「影响」** 对使用真实机器人数据评估世界模型的研究者和工程师而言，这一结果意味着不应依赖 horizon 平均标量或仅报告 SSIM/PSNR 数值，而应像 WorldProof 那样给出随 horizon 变化的曲线，并在自己的数据上测量模型可被区分的步数窗口（该实验中约为 8 到 24 步），同时注意 LPIPS 在该场景下行为异常且作者尚未给出解释。

**标签**: `#world models`, `#evaluation metrics`, `#robotics`, `#open source`, `#machine learning`

---

<a id="item-tech-news-10"></a>
### [苹果洽谈新闻授权，Siri AI 预算或达九位数](https://9to5mac.com/2026/08/12/report-apple-seeks-publisher-deals-to-give-siri-ai-better-access-to-current-events/) ⭐️ 7.0/10

苹果据称正与出版商洽谈多年内容协议，为计划于 2026 年晚些时候推出的 Siri AI 提供当前新闻和信息；付款或按内容使用量计算，而非大型 AI 公司常见的预付固定授权费，预算可能达九位数。苹果尚未宣布相关合作，也拒绝置评。若属实，这可能改变 AI 公司与新闻机构之间的授权模式。

telegram · zaihuapd · 8月13日 04:40

**「背景」** 苹果正在为其焕新后的智能助手 Siri AI 寻求新闻内容授权，据称已与多家主要新闻出版商接触，洽谈多年期协议，以便让助手能够获取最新新闻和信息。付款方式可能按内容使用量计算，预算据报可达九位数（数亿美元级），这不同于大型 AI 公司通常采用的固定预付授权费模式。苹果自 2019 年起运营付费新闻订阅服务 Apple News+，此前也曾达成包含将出版商内容用于 AI 训练权利的单独协议；此次传闻中的 Siri AI 预计于 2026 年晚些时候推出，苹果尚未正式宣布相关合作。

**「影响」** 若交易成行，出版商可能获得按使用量计费的经常性收入，Siri AI 用户也将在其预计推出时间获得整合当前新闻的回答；目前消息仍属未证实报道。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://applemagazine.com/siri-ai-apple-publisher-content-deals/">Siri AI Could Gain Licensed News Through Apple Publisher Deals</a></li>
<li><a href="https://ainave.com/tech-news/apple-s-siri-ai-news-licensing-usage-based-publisher-deals-could-reshape-ai-content-access">Apple Siri AI News Licensing: Usage-Based Publisher Deals Explained ...</a></li>
<li><a href="https://qz.com/apple-publisher-deals-siri-ai-news-content-081326">Apple in talks to pay publishers to power AI Siri - Quartz</a></li>

</ul>
</details>

**标签**: `#Apple`, `#Siri`, `#AI`, `#news licensing`, `#tech industry`

---

## 财经新闻

<a id="item-finance-news-1"></a>
### [标普 500 公司利润率创历史新高，Q2 达 16.9%](https://www.cnbc.com/2026/08/13/these-charts-show-why-stocks-keep-rallying-profit-margins-are-highest-on-record.html) ⭐️ 8.0/10

根据 FactSet 的数据，标普 500 指数公司第二季度混合净利润率目前为 16.9%，高于第一季度的 14.8%和去年同期的 12.9%；若保持这一水平，将是 FactSet 自 2009 年追踪该指标以来的最高纪录。

rss · CNBC Finance · 8月13日 20:21

**「背景」** 净利润率指公司扣除所有费用后留存的收入比例。Alphabet 和亚马逊是最大贡献者，但即便剔除这两家公司，15%的利润率同样是历史纪录；11 个行业中有 8 个的利润率高于一年前。

**标签**: `#Profit margins`, `#S&amp;P 500`, `#Earnings`, `#Corporate profitability`, `#FactSet`

---

<a id="item-finance-news-2"></a>
### [中国经济放缓挤压就业：零工岗位增至 5300 万仍供过于求](https://www.ft.com/content/a3803e70-cb4d-444f-a31e-05be2f2c44f6?accessToken=zwAAAZ_5xcXzkdOjgD5wy01ET9OjHgW-LyxE9g.MEUCIQCWTIny3JTJV8e-PGyK0XL2tg5g_7Ay-rpKkwGZCpp1-AIgbMgJQPlqWgqAsX4s1k4gYaC4b8k0JveZOs35OJQvbZ4&amp;amp;sharetype=gift&amp;amp;token=7e8483bb-395d-429e-afca-2f4ab5ad150b) ⭐️ 8.0/10

FT 报道称，中国经济放缓正加剧就业挤压，截至 2025 年外卖和网约车司机超过 5300 万人，两年增加 1000 万人，但仍供过于求。

telegram · zaihuapd · 8月13日 06:40

**「背景」** 房地产低迷、消费疲弱、制造业收缩及自动化使零工经济成为过剩劳动力出口，但供过于求正推低收入、拉长工时。

**「影响」** 深圳今年 6 月已宣布网约车市场饱和；上海浦东、北京大兴和成都天府机场出租车司机排队等客最长分别达 7 小时、8 小时和 10 小时，显示相关从业者面临实际就业压力。

**标签**: `#China economy`, `#gig economy`, `#employment`, `#ride-hailing`, `#food delivery`

---

<a id="item-finance-news-3"></a>
### [阿克曼再度买入 Netflix，称其已赢得流媒体战争](https://www.cnbc.com/2026/08/13/ackman-buys-netflix-again-four-years-later-says-it-won-streaming-wars.html) ⭐️ 7.0/10

比尔·阿克曼的 Pershing Square 在半年报中披露已重新建仓 Netflix，称该公司“有效赢得流媒体战争”；Pershing 称 Netflix 股价已从 2025 年 6 月高点 134 美元下跌约 50%，估值由逾 40 倍预期利润降至约 21 倍预期利润。

rss · CNBC Finance · 8月13日 18:04

**「背景」** 阿克曼曾在 2022 年初买入 Netflix，但在公司报告十多年来首次订阅用户下滑后约三个月清仓。Pershing 指出 Netflix 拥有超过 3.25 亿订阅用户，约为 Disney+和 HBO Max 合计用户数的近两倍。

**「影响」** 披露后 Netflix 股价周四上涨近 4%。

**标签**: `#Netflix`, `#Bill Ackman`, `#streaming wars`, `#investment`, `#valuation`

---

<a id="item-finance-news-4"></a>
### [长江存储 NAND 闪存出货量升至全球第三](https://www.cnbc.com/2026/08/13/chinese-firm-tops-micron-kioxia-shipments-nand-memory-chips.html) ⭐️ 7.0/10

Counterpoint Research 数据显示，长江存储（YMTC）在 2026 年第二季度 NAND 闪存出货量份额为 14%，排名全球第三，超过美光和铠侠，仅次于三星和 SK 海力士；但该公司在 NAND 收入上仍落后于美光和铠侠。

rss · CNBC Finance · 8月13日 02:59

**「背景」** NAND 闪存是断电后仍保留数据的存储芯片，速度比 DRAM 慢但成本更低；YMTC 一年前曾以微弱优势超过铠侠，随后被反超，现正筹备在中国内地上市。分析师认为约 15%的份额是存储厂商自筹资本开支的最低门槛，而 YMTC 目前为 14%。

**标签**: `#NAND memory`, `#YMTC`, `#semiconductor industry`, `#China`, `#market share`

---

<a id="item-finance-news-5"></a>
### [中国 7 月新能源车占新车销量 65.1%，整体乘用车销量下滑](https://www.cnbc.com/2026/08/12/china-car-sales-data-byd-tesla-geely-vw.html) ⭐️ 7.0/10

中国乘联会周二发布的数据显示，7 月新能源车（含纯电和混动）占新车销量的 65.1%，高于一年前的 54%；但今年前七个月乘用车总销量同比下降 20.3%，新能源车销量也下降 12.5%。

rss · CNBC Finance · 8月13日 01:31

**「背景」** 中国汽车市场正快速转向电动化。中国乘用车市场信息联席会（CPCA）的数据显示，7 月新能源车（含纯电和混动）占新车销量 65.1%，创下新高，但整体乘用车销量同比下滑。此前 1 月，比亚迪在华新能源销量同比大跌 53%，市场波动明显。

**「影响」** 市场洗牌加剧，比亚迪上半年乘用车销量下降逾 10%；在截至 7 月的六个月热销车型榜中，吉利电动车型居首，特斯拉 Model Y 第二，大众是唯一进入前十的传统外资品牌。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cnevpost.com/2026/02/14/automakers-share-china-nev-market-jan-2026/">Automakers&#x27; share in China NEV market in Jan: BYD ... - CnEVPost</a></li>
<li><a href="https://thenextweb.com/news/china-july-2026-car-sales-nev-share-geely-tesla-byd">Electric cars just hit a record share of China ’s market . Their sales still...</a></li>

</ul>
</details>

**标签**: `#China`, `#electric vehicles`, `#auto sales`, `#BYD`, `#Tesla`

---

## 社区讨论

<a id="discussion-tech-news-2"></a>
### [Gemini 3.7 Flash 发布与定价引关注](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/) ⭐️ 8.0/10

社区主要讨论定价和竞品对比：有人用图像转 HTML 测试认为 Opus 仍是该类任务最佳，而 Gemini 3.7 Flash 在相同价格段表现不错；也有人认为 Luna 等更便宜的模型削弱了 Flash 的性价比，并对距离 3.6 Flash 仅三周的发布节奏表示困惑。

[正文](#item-tech-news-2) · [社区讨论](https://news.ycombinator.com/item?id=49289112)

---

<a id="discussion-tech-news-3"></a>
### [DeepSeek 发布开源 AI 智能体 Harness 开发者预览版](https://deepseek.com/harness/en/) ⭐️ 8.0/10

评论中，作者确认这是早期预览版并欢迎反馈；有读者认为“每次运行都可追溯”是关键特性，而美国模型的痕迹常加密或混淆；另一些评论指出其基于 Cordis v4，具备可回滚副作用的热加载插件机制，但也有人对“万物皆插件”的架构表示疲劳。

[正文](#item-tech-news-3) · [社区讨论](https://news.ycombinator.com/item?id=49285244)

---

<a id="discussion-tech-news-4"></a>
### [DRAM 操控安全研究：Spaghettifying DRAM](https://github.com/xoreaxeaxeax/skitter-creek-bath-salts) ⭐️ 8.0/10

社区对即将到来的 Black Hat 演讲充满期待，但也提出了适用性质疑：有评论指出 README 中验证的是 AMD Jaguar 这一 2013 年旧架构，而 Zen 3 的寄存器基地址不同，因此尚不清楚该攻击在较新 CPU 上的实际效果。另有评论认为此类技术可能让 Xbox、PlayStation 等游戏主机在获得 ring 0 后的安全性面临更大挑战。

[正文](#item-tech-news-4) · [社区讨论](https://news.ycombinator.com/item?id=49286341)

---

<a id="discussion-tech-news-5"></a>
### [选择无聊技术：节省创新代币的经典工程策略](https://mcfunley.com/choose-boring-technology) ⭐️ 8.0/10

评论中多数人认同这一框架，认为它是 PM 和工程负责人最实用的概念之一，也有人建议在 AI 代理时代把所有创新代币投入代理，而代理所依赖的技术则应尽量无聊且“分布内”。也有反对意见认为“创新代币”过于任意、不严肃，“新或旧”只是弱代理，工程师应直接考察需求、风险与收益。

[正文](#item-tech-news-5) · [社区讨论](https://news.ycombinator.com/item?id=49289512)

---

<a id="discussion-tech-news-7"></a>
### [GPT-5.6 Sol Ultrafast 在 Cerebras 上快 7 倍](https://www.cerebras.ai/blog/accelerating-gpt-5-6-sol-ultrafast-with-openai) ⭐️ 7.0/10

部分评论者认为速度会通过增加迭代次数提升思考质量，并援引第三方输出速度对比支持这一观点；另一些人则指出，Cerebras 和 OpenAI 都没有直接声明 Ultrafast 与常规 Sol 的表现完全一致，且未公布价格，因此对“快且同精度”的说法持保留态度。

[正文](#item-tech-news-7) · [社区讨论](https://news.ycombinator.com/item?id=49289844)

---