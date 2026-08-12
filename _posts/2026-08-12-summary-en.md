---
layout: default
title: "Horizon Summary: 2026-08-12 (EN)"
date: 2026-08-12
lang: en
---

> From 44 items, 16 important content pieces were selected

---

**Technology News**
1. [DeepSeek V4 Pro 0813 Launches on OpenRouter with Promising Low-Cost Performance](#item-tech-news-1) ⭐️ 8.0/10
2. [Tailscale Traces Database Corruption to 16-Year-Old SQLite WAL Bug](#item-tech-news-2) ⭐️ 8.0/10
3. [Qwen3.8-2.4T-A95B: 2.4T-Parameter MoE LLM Released](#item-tech-news-3) ⭐️ 8.0/10
4. [AI&\#x27;s Impact on Mid-Level Software Engineers](#item-tech-news-4) ⭐️ 8.0/10
5. [Open-Source LTX-2.5 Video Model Runs Locally on a Single RTX 5090](#item-tech-news-5) ⭐️ 8.0/10
6. [xAI releases Grok 4.6; users debate API prompts and benchmarks](#item-tech-news-6) ⭐️ 7.0/10
7. [Why Tiny JPEGs Look Different in Chrome](#item-tech-news-7) ⭐️ 7.0/10
8. [Grok 4.6 Scores 61 on Artificial Analysis Intelligence Index](#item-tech-news-8) ⭐️ 7.0/10
9. [Warrantless license plate reader searches require court oversight](#item-tech-news-9) ⭐️ 7.0/10
10. [Adam&\#x27;s Per-Coordinate Updates Break Rotation Invariance and Low-Rank Bias](#item-tech-news-10) ⭐️ 7.0/10

**Technology Blog**
1. [Day 0 vLLM support for Qwen3.8-2.4T-A95B with FP4](#item-tech-blog-1) ⭐️ 5.0/10

**Financial News**
1. [CME to Launch AI Compute Futures, Turning Computing Power into a Tradable Asset](#item-finance-news-1) ⭐️ 8.0/10
2. [Tencent Reports Strong Q2 Revenue but AI Spending Turns Free Cash Flow Negative](#item-finance-news-2) ⭐️ 8.0/10
3. [New energy vehicles reach 65.1% of China&\#x27;s July passenger-car sales](#item-finance-news-3) ⭐️ 7.0/10
4. [China&\#x27;s First-Half 2026 Marriage Registrations Fell to 3.275 Million](#item-finance-news-4) ⭐️ 7.0/10
5. [Enterprise SSDs Hit 48% of NAND Shipments; YMTC Enters Top Three](#item-finance-news-5) ⭐️ 7.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [DeepSeek V4 Pro 0813 Launches on OpenRouter with Promising Low-Cost Performance](https://openrouter.ai/deepseek/deepseek-v4-pro-0813) ⭐️ 8.0/10

DeepSeek V4 Pro 0813 \(deepseek-v4-pro-0813\) is a newly released AI model that is available through OpenRouter and is drawing attention from developers evaluating low-cost coding models. The linked OpenRouter page contains little information, and commenters pointed to DeepSeek&\#x27;s API docs and an unofficial benchmark repost as more useful sources. In a community code-development test on Codex CLI, DeepSeek V4 Pro 0813 completed a feature in 12 minutes at $0.12 but produced a bug, while Grok 4.6 took 3 minutes 18 seconds at $1.41 without a bug. The model follows DeepSeek&\#x27;s recent Flash update, which another user reported as surprisingly capable for heavy development at very low cost.

hackernews · explosion-s · Aug 12, 16:04 · [Discussion](https://news.ycombinator.com/item?id=49274600)

**「Background」** DeepSeek V4 Pro 0813 is the general-availability release of DeepSeek&\#x27;s flagship model, ending a preview period that ran for nearly four months. The model is a large-scale mixture-of-experts system, and on OpenRouter it lists at $0.435 per million input tokens and $0.87 per million output tokens, with a 1,048,576-token context window and a maximum output of 384,000 tokens. It is listed as the production build of DeepSeek V4 Pro, having appeared on August 12, 2026.

**「Impact」** Developers using Codex CLI may pay dramatically less with DeepSeek V4 Pro 0813 than with Grok 4.6 for the same new feature development task—$0.12 versus $1.41—but the community test indicates a bug in its output, so the cost savings come with a quality tradeoff.

<details><summary>References</summary>
<ul>
<li><a href="https://openrouter.ai/deepseek/deepseek-v4-pro-0813">DeepSeek V4 Pro 0813 - API Pricing &amp; Benchmarks | OpenRouter</a></li>
<li><a href="https://www.unite.ai/deepseek-ships-v4-pro-as-its-flagship-model-leaves-preview/">DeepSeek Ships V4 Pro as Its Flagship Model Leaves ...</a></li>
<li><a href="https://benchable.ai/models/deepseek/deepseek-v4-pro-20260813">DeepSeek: DeepSeek V4 Pro 0813 - AI Model Details &amp; Bench...</a></li>

</ul>
</details>

**Tags**: `#DeepSeek`, `#AI models`, `#LLM`, `#API`, `#machine learning`

---

<a id="item-tech-news-2"></a>
### [Tailscale Traces Database Corruption to 16-Year-Old SQLite WAL Bug](https://tailscale.com/blog/sqlite-wal-reset-bug) ⭐️ 8.0/10

Tailscale documented a rare SQLite WAL-reset data-corruption bug that traced to a 16-year-old race condition, and explained how the bug was isolated and fixed. The company funded an open-source SQLite VFS shim that exposed the race almost immediately, and the post details the root cause, the single-writer WAL-mode setup, and the resulting SQLite fix. The incident shows how even carefully designed single-writer SQLite usage can hit subtle concurrency issues and highlights the value of specialized debugging tooling.

hackernews · ropbear · Aug 12, 14:22 · [Discussion](https://news.ycombinator.com/item?id=49272832)

**「Background」** SQLite&\#x27;s write-ahead logging \(WAL\) mode allows concurrent readers with a single writer, but a rare data race in its WAL reset logic can corrupt databases. Tailscale and the SQLite team traced the problem to a bug estimated to be at least 16 years old, using an open-source SQLite VFS shim that logs checkpointing activity. Tailscale&\#x27;s control plane database is written by a single Go process, making the intermittent corruption particularly puzzling until the race condition was identified.

**「Impact」** SQLite users running WAL mode should upgrade to the patched SQLite release to eliminate exposure to this WAL-reset corruption path.

<details><summary>References</summary>
<ul>
<li><a href="https://tailscale.com/blog/sqlite-wal-reset-bug">How Tailscale helped find the SQLite WAL - Reset bug</a></li>

</ul>
</details>

**Tags**: `#sqlite`, `#database`, `#bug-fixing`, `#wal-mode`, `#tailscale`

---

<a id="item-tech-news-3"></a>
### [Qwen3.8-2.4T-A95B: 2.4T-Parameter MoE LLM Released](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) ⭐️ 8.0/10

Qwen released Qwen3.8-2.4T-A95B, a Mixture-of-Experts large language model with 2.4 trillion total parameters and 95 billion active parameters, on Hugging Face. The open-weight release includes only bf16 and fp8 checkpoints at launch, with native 262,144-token context expandable to 1,010,000 tokens. The model card claims performance between &quot;Opus 4.8 and Fable 5,&quot; while a 1-bit quantized version reportedly fits in 397GB and delivers usable tokens per second. The separate Qwen3.8-Max version adds vision input, non-thinking support, 1M default context, and built-in tools, but those features are not in the open weights. Licensing is free for internal use or under $50M annual revenue, with restrictions above that threshold.

hackernews · Philpax · Aug 12, 15:01 · [Discussion](https://news.ycombinator.com/item?id=49273478)

**「Background」** Qwen3.8-2.4T-A95B is an open-weight sparse Mixture-of-Experts \(MoE\) model from Qwen, serving as the open-weight variant of Qwen3.8 Max. In an MoE architecture, only a subset of parameters is active per token, which is why this model has 2.4 trillion total parameters but only 95 billion active parameters. It supports a native context length of 262,144 tokens, expandable to about 1,010,000 tokens, and is designed for coding, research, complex reasoning, and agentic workflows.

**「Impact」** For model operators and developers, serving Qwen3.8-2.4T-A95B requires large memory or aggressive quantization: full bf16 is about 4.9TB, fp8 is smaller, and a 1-bit Unsloth quant is about 397GB with 95B active parameters, bringing &quot;Opus 4.5 performance level&quot; within reach of high-end consumer machines. However, the open-weight model lacks the vision, 1M context, and built-in tools of Qwen3.8-Max, so users needing those features must use the official version.

<details><summary>References</summary>
<ul>
<li><a href="https://benchable.ai/models/qwen/qwen3.8-2.4t-a95b-20260812">Qwen: Qwen3.8 2.4T A95B - AI Model Details &amp; Benchmarks</a></li>
<li><a href="https://developer.nvidia.com/blog/serve-qwen3-8-2-4t-a95b-a-2-4t-parameter-model-with-configurable-reasoning-on-nvidia-gb300-nvl72/">Serve Qwen3.8-2.4T-A95B, a 2.4T-Parameter Model, with ...</a></li>

</ul>
</details>

**Tags**: `#LLM`, `#Qwen`, `#Mixture-of-Experts`, `#AI`, `#model release`

---

<a id="item-tech-news-4"></a>
### [AI&\#x27;s Impact on Mid-Level Software Engineers](https://blog.florianherrengt.com/ai-removing-middle-class-software-engineering.html) ⭐️ 8.0/10

In this analysis, Florian Herrengt argues that AI is disproportionately affecting mid-level software engineers by automating routine coding tasks and amplifying the impact of poor engineering practices. The article suggests that while senior engineers who focus on critical thinking remain valuable, mid-level engineers who primarily implement well-defined tickets may face greater career risk. AI tools like LLM-based agents can magnify the output of both good and bad engineers, making engineering quality and organizational practices more important than ever. The post has generated significant discussion on Hacker News, with 672 points and 592 comments, reflecting strong interest in the future of software engineering careers. No specific employment data or case studies are cited, leaving the argument primarily as an industry analysis rather than empirical evidence.

hackernews · florianherrengt · Aug 12, 13:20 · [Discussion](https://news.ycombinator.com/item?id=49271994)

**「Background」** This article argues that AI coding assistants, especially large language models, are automating the routine coding work that traditionally occupied mid-level software engineers, while also amplifying the impact of weak engineering practices. It reflects a broader historical pattern in which technology repeatedly reshapes software development roles, though evidence of actual job losses remains debated. The author also contends that AI makes projects with weak engineering culture fail faster.

**「Impact」** Mid-level software engineers whose work consists largely of translating well-defined tickets into code may see their roles shrink as AI assistants take over routine implementation, while demand may grow for engineers who excel at iteration, system thinking, and quality ownership. Organizations that adopt AI coding tools without reinforcing engineering standards could face increased technical debt from amplified poor practices.

<details><summary>References</summary>
<ul>
<li><a href="https://blog.florianherrengt.com/ai-removing-middle-class-software-engineering.html">AI is removing the middle class of software engineering</a></li>

</ul>
</details>

**Tags**: `#AI`, `#software-engineering`, `#career-impact`, `#LLM`, `#industry-analysis`

---

<a id="item-tech-news-5"></a>
### [Open-Source LTX-2.5 Video Model Runs Locally on a Single RTX 5090](https://ltx.io/model/ltx-2-5) ⭐️ 8.0/10

LTX has released LTX-2.5, an open-source video generation foundation model with weights, training code, and inference pipeline available, enabling local generation on a single RTX 5090. The model supports both text-to-video and image-to-video, with improved multi-shot coherence and prompt adherence, built around a new diffusion video decoder and a Gemma 4 12B text encoder. Commercial use is free for companies with annual revenue under $10 million. In an artifact benchmark covering 98 prompts, LTX 2.5 Pro ranked first among ten models.

telegram · zaihuapd · Aug 12, 02:15

**「Background」** LTX is an open-source AI video-generation model series; LTX-2.5 follows earlier models like LTX-2.3, and its release is framed by the company&\#x27;s belief that open-source is essential for scaling world models \(tool-1-1\). Video generation models have typically required large computing clusters, but the RTX 5090—NVIDIA&\#x27;s high-end Blackwell consumer GPU with 32GB VRAM—makes local inference practical for such models, and NVIDIA reports speedups of up to 22x on this card compared to Apple M3 Ultra \(tool-1-2, tool-1-3\). This background helps explain why LTX-2.5&\#x27;s open weights and local-run capability are significant for the AI community.

**「Impact」** Developers and small studios can now run high-end video generation locally on a single RTX 5090 and deploy LTX-2.5 commercially without per-generation API costs, as long as their organization&\#x27;s annual revenue remains below $10 million.

<details><summary>References</summary>
<ul>
<li><a href="https://ltx.io/model/open-source">LTX-2.5 Model Open Source: AI Video Generator</a></li>
<li><a href="https://blogs.nvidia.com/blog/local-ai-open-source-models-agents-nemotron/">NVIDIA and Local AI Community Fuel Open Source Models and Intelligent Agents | NVIDIA Blog</a></li>
<li><a href="https://ltx.io/blog/open-source-video-generation-models-guide">Open Source Video Generation Models (2026 Landscape Guide) | LTX Blog</a></li>

</ul>
</details>

**Tags**: `#video generation`, `#open source`, `#AI model`, `#text-to-video`, `#diffusion`

---

<a id="item-tech-news-6"></a>
### [xAI releases Grok 4.6; users debate API prompts and benchmarks](https://x.ai/news/grok-4-6) ⭐️ 7.0/10

xAI released Grok 4.6, an update to its frontier AI model, according to a post on x.ai. Developers and users quickly noted that the API appears to inject a default system prompt into all requests, and that a line instructing the model not to mention those guidelines can override custom system instructions, sometimes causing Grok to refuse to discuss system prompts. Community members also debated whether Grok 4.6 is genuinely competitive or whether benchmark results are inflated, with some claiming it reaches &\#x27;Fable-like&\#x27; intelligence, beats GPT-5.6-Sol on most benchmarks, and is cheaper than Kimi K3 on API pricing. Others commented positively on Grok 4.5&\#x27;s concise, no-nonsense interaction style compared with GPT-5.6-Sol and Claude 4.8/5. This release comes amid questions about how quickly other labs matched Fable-level performance and whether benchmark hacking or distillation explains the trend.

hackernews · iLuddite · Aug 12, 15:32 · [Discussion](https://news.ycombinator.com/item?id=49274027)

**「Background」** xAI, Elon Musk&\#x27;s artificial intelligence company \(now also referred to as SpaceXAI\), released Grok 4.6 as the latest iteration in its Grok series of large language models, following Grok 4.5. The model is positioned as a significant upgrade, with reports citing a 1753 ELO score on Artificial Analysis and an API price about half that of rival frontier models. It is part of xAI&\#x27;s push to compete with other major labs, including those behind Kimi K3 and GPT-5.6 Sol, while focusing on long-running agents, coding, and knowledge work.

**「Impact」** Grok 4.6 API users who provide custom system instructions may find their requests constrained by xAI&\#x27;s injected default system prompt, including refusal to discuss system-prompt guidelines, which can undermine agentic or sensitive workflows.

<details><summary>References</summary>
<ul>
<li><a href="https://www.basenor.com/blogs/news/xai-launches-grok-4-6-1753-elo-half-the-price-of-rival-frontier-models">xAI Launches Grok 4.6: 1753 ELO, Half the Price of Rival Frontier Models</a></li>
<li><a href="https://venturebeat.com/technology/spacexai-debuts-grok-4-6-overtaking-kimi-k3s-performance-and-matching-gpt-5-6-sol-for-worlds-third-best-on-artificial-analysis">SpaceXAI debuts Grok 4.6, overtaking Kimi K3&#x27;s performance and matching GPT-5.6 Sol for world&#x27;s third best on Artificial Analysis | VentureBeat</a></li>

</ul>
</details>

**Tags**: `#AI`, `#language models`, `#xAI`, `#API`, `#model release`

---

<a id="item-tech-news-7"></a>
### [Why Tiny JPEGs Look Different in Chrome](https://guillaumetech.github.io/posts/jpg-scaling-chrome/) ⭐️ 7.0/10

The article explains that tiny JPEGs render differently in Chrome compared with other browsers because Chrome and Firefox use different decompression and scaling algorithms, with Chrome generally appearing blurrier and Firefox sharper but with ringing artifacts. The behavior matters for web developers because small icon-size images can be visibly degraded, so the author advises against using JPEG for icons and recommends supplying images at an appropriate resolution for their display size. The analysis identifies ongoing Firefox work in Bugzilla 2033250 to decompress images at a lower scale, which may reduce these cross-browser differences. This is a technical deep-dive into browser-specific image scaling rather than a major shift in web technology.

hackernews · gutechh · Aug 12, 14:00 · [Discussion](https://news.ycombinator.com/item?id=49272549)

**「Background」** Browsers do not simply display JPEGs at their native pixel dimensions; they decode the compressed data and then apply a scaling algorithm to fit the image&\#x27;s rendered size. Chrome introduced an optimization that performs scaling during JPEG decompression, which can produce different results from Firefox&\#x27;s approach and makes tiny images look blurrier or otherwise altered. The choice of scaling algorithm and the order of decoding versus scaling vary by browser, and this difference becomes most visible when an image is displayed much smaller than its source resolution.

**「Impact」** Developers using Chrome-based browsers or Electron for products with small images may see blurry or otherwise degraded icons when Chrome&\#x27;s scaling optimization is active, and they can mitigate this by using properly sized images, avoiding JPEG for icons, and applying the CSS image-rendering property, though support and results vary across browsers.

<details><summary>References</summary>
<ul>
<li><a href="https://news.ycombinator.com/item?id=49272549">Why Tiny JPEGs Look Different in Chrome | Hacker News</a></li>

</ul>
</details>

**Tags**: `#browser rendering`, `#image scaling`, `#JPEG`, `#Chrome`, `#web development`

---

<a id="item-tech-news-8"></a>
### [Grok 4.6 Scores 61 on Artificial Analysis Intelligence Index](https://artificialanalysis.ai/articles/grok-4-6-benchmarks-and-analysis) ⭐️ 7.0/10

Artificial Analysis reports that xAI&\#x27;s Grok 4.6 scored 61 on the Artificial Analysis Intelligence Index, a benchmark measure of frontier AI capabilities. The score follows Grok 4.5, which several developers already use for coding and daily work. The result matters because benchmark scores and pricing shape choices among AI models for engineering teams. Exact benchmark details and broader model comparisons were not available in the source summary.

hackernews · wertyk · Aug 12, 16:54 · [Discussion](https://news.ycombinator.com/item?id=49275385)

**「Background」** SpaceXAI&\#x27;s Grok 4.6, released about a month after Grok 4.5, scores 61 on the Artificial Analysis Intelligence Index, a composite of nine benchmarks, matching GPT-5.6 Sol and returning SpaceXAI to the frontier. The model emphasizes agentic coding and knowledge work, with improvements from extended training and agent reinforcement learning, and is integrated into platforms like Cursor and Grok Build.

**「Impact」** For developers using Grok for heavy coding sessions, the reported increase in cache read pricing from $0.30 to $0.50 in Grok 4.6 could raise token costs, since one commenter estimated cache reads and writes account for about 80% of their bill.

<details><summary>References</summary>
<ul>
<li><a href="https://artificialanalysis.ai/articles/grok-4-6-benchmarks-and-analysis">Grok 4.6 returns SpaceXAI to the intelligence frontier and ...</a></li>
<li><a href="https://x.ai/news/grok-4-6">Introducing Grok 4.6 | SpaceXAI</a></li>
<li><a href="https://www.tradingkey.com/analysis/stocks/us-stocks/262099926-space-xai-grok-4-6-matches-gpt-5-6-sol-ai-index-tradingkey">SpaceXAI Officially Launches Grok 4.6: Performance on AI ...</a></li>

</ul>
</details>

**Tags**: `#grok`, `#benchmarks`, `#xai`, `#language-models`, `#ai`

---

<a id="item-tech-news-9"></a>
### [Warrantless license plate reader searches require court oversight](https://andrewpwheeler.com/2026/08/12/license-plate-reader-searches-should-require-a-warrant/) ⭐️ 7.0/10

A blog post on andrewpwheeler.com argues that warrantless searches of license plate reader data are untenable and should require court oversight. The post contends that ALPRs are not merely single-purpose plate readers but general-purpose, internet-connected cameras whose capabilities can be reprogrammed and expanded over time. It notes that cameras in public spaces are likely inevitable, which makes procedural safeguards and judicial review more important. The argument draws on concerns about police misuse, including officers stalking acquaintances, and positions ALPR policy as a broader privacy and civil liberties issue. The piece is timely for ongoing debates about surveillance technology, algorithmic policing, and the balance between public safety and individual privacy.

hackernews · apwheele · Aug 12, 14:43 · [Discussion](https://news.ycombinator.com/item?id=49273165)

**「Background」** License plate readers \(LPRs\) are networked cameras that automatically photograph and record license plates, often capturing up to 1,800 plates per minute and uploading the plate numbers with location, date, and time to central servers that are shared among law enforcement agencies. The legal debate centers on whether searching these stored records—which can include millions of plates—requires a warrant, or can be done without one. The article is based on Andrew P. Wheeler&\#x27;s work as an expert witness for the Institute for Justice in the trial Schmidt v. City of Norfolk, a case that raises these Fourth Amendment issues.

<details><summary>References</summary>
<ul>
<li><a href="https://andrewpwheeler.com/2026/08/12/license-plate-reader-searches-should-require-a-warrant/">License Plate Reader Searches Should Require a Warrant</a></li>
<li><a href="https://news.linxi.com.au/news/expert-witness-argues-license-plate-reader-searches-need-warrants">Andrew P Wheeler argues license plate reader searches require ...</a></li>
<li><a href="https://www.eff.org/deeplinks/2019/03/search-through-millions-license-plates-police-should-get-warrant">To Search Through Millions of License Plates, Police Should ...</a></li>

</ul>
</details>

**Tags**: `#privacy`, `#surveillance`, `#policy`, `#law enforcement`, `#license plate readers`

---

<a id="item-tech-news-10"></a>
### [Adam&\#x27;s Per-Coordinate Updates Break Rotation Invariance and Low-Rank Bias](https://www.reddit.com/r/MachineLearning/comments/1vmjb3p/the_loss_does_not_see_the_basis_but_adam_does_r/) ⭐️ 7.0/10

A Reddit research post argues that in factored models W = UV^T, GD preserves rotation invariance but Adam&\#x27;s per-coordinate second moment breaks it, and that this property determines whether optimizers keep GD&\#x27;s implicit low-rank bias. On underdetermined matrix sensing with nine update rules matched by training loss, GD, shared-scalar Adam, Muon, and Shampoo kept the bias, while Adam, RMSProp, Lion, signum, and Adafactor lost it. A one-parameter family interpolating from per-coordinate to shared-scalar denominators improved recovery monotonically, implicating anisotropy rather than adaptivity generally. Muon was exact on truly low-rank targets but degraded fastest with a spectral tail, crossing over to GD near 4% tail energy. The author also found their own optimizer&\#x27;s per-coordinate clip was harmful and that switching to a global norm clip improved recovery error from 0.347 to 0.220, while cautioning that a reported 43–44% held-out error reduction depended on a train-only learning-rate rule and that theory currently covers only memoryless rules.

reddit · r/MachineLearning · /u/EtherealGlyph · Aug 12, 16:39

**「Background」** In low-rank matrix factorization, a model is written as W = UV^T, and the training loss is invariant to rotating the factors by an orthogonal matrix Q: \(U, V\) → \(UQ, VQ\). Gradient descent respects this rotational symmetry, and it is known to exhibit an implicit bias toward low-rank solutions in matrix sensing and similar underdetermined problems. Adam and other coordinate-wise adaptive optimizers, however, update each coordinate with a separate scale derived from that coordinate&\#x27;s gradient history, so their behavior depends on the basis in which the factors are written. This item reports a theoretical and experimental analysis, posted on arXiv as 2608.05136, showing that this loss of rotation invariance is what causes Adam-family optimizers to lose gradient descent&\#x27;s implicit low-rank bias, while optimizers with a shared scalar step \(or Gram-based preconditioners like Muon and Shampoo\) retain it.

**「Impact」** For researchers and practitioners doing low-rank matrix sensing or factorization, the result provides a concrete mechanism for choosing optimizers: per-coordinate adaptive denominators such as Adam&\#x27;s can destroy the implicit low-rank bias that GD provides, so using shared-scalar or globally normalized variants can preserve that bias.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/ArXiv">arXiv - Wikipedia</a></li>
<li><a href="https://arxiv.org/abs/2608.05136">[ 2608 . 05136 ] The Loss Does Not See the Basis , but Adam Does</a></li>

</ul>
</details>

**Tags**: `#optimization`, `#Adam optimizer`, `#low-rank bias`, `#matrix sensing`, `#machine learning`

---

## Technology Blog

<a id="item-tech-blog-1"></a>
### [Day 0 vLLM support for Qwen3.8-2.4T-A95B with FP4](https://vllm.ai/blog/2026-08-12-qwen3.8) ⭐️ 5.0/10

rss · vLLM Blog · Aug 12, 00:00

**「Background」** Qwen3.8-2.4T-A95B is a 2.4-trillion-parameter sparse MoE model with 512 experts and a 92-layer hybrid backbone, applying full attention at every 4th layer and linear attention elsewhere. Because even basic inference requires at least two NVIDIA B300 or AMD MI355X nodes \(or one node for the FP4 version\), memory and bandwidth costs are the central challenge, and the official FP8/BF16 checkpoints alone remain expensive to serve.

**「Solution」** The vLLM team reports day-zero support because the model reuses the Qwen 3.5 architecture, so no architectural changes are needed. To lower cost, Inferact released MXFP4 and NVFP4-quantized weights using Round-to-Nearest quantization with activation calibration for 4-bit activations; their initial verification shows NVFP4 meeting or slightly exceeding FP8 on GSM8K and AIME25, though a larger reasoning budget is required to reproduce those results. The team also worked with NVIDIA and AMD on optimized kernels for linear attention, attention, dense GEMMs, and MoE routing, combining Data Parallelism and Tensor Parallelism for attention with Expert Parallelism for MoE on NVIDIA, while AMD uses AITER-fused kernels and hipBLASLt for shared-expert MoE. Deployment guidance includes the recommended sampling parameters and a high max\_tokens budget because Qwen 3.8 is a reasoning model.

**「Takeaway」** The post&\#x27;s core argument is that day-zero architecture reuse, FP4 quantization, and vendor-tuned kernels make a 2.4T open-weight MoE model practical to deploy on existing multi-node GPU systems. It is largely a release and partnership announcement, so the benchmark evidence is sparse, but it signals that vLLM&\#x27;s ecosystem now treats very large open-weight MoE inference as a supported workload.

**Tags**: `#vLLM`, `#Qwen3.8`, `#MoE`, `#FP4 quantization`, `#inference optimization`

---

## Financial News

<a id="item-finance-news-1"></a>
### [CME to Launch AI Compute Futures, Turning Computing Power into a Tradable Asset](https://www.cnbc.com/2026/08/11/ai-computing-power-becomes-a-tradable-asset-class-as-cme-starts-futures.html) ⭐️ 8.0/10

CME Group plans to launch the first futures contracts tied to AI computing power on Oct. 5, pending regulatory approval, with contracts based on hourly rental prices for Nvidia H100 and Blackwell B200 GPUs. Each contract represents one month&\#x27;s rent for an Nvidia H100, giving companies and investors a public, tradable reference price for AI computing capacity.

rss · CNBC Finance · Aug 12, 14:14

**「Background」** CME Group and Silicon Data first announced the partnership on May 12, 2026; Silicon Data is backed by trading firm DRW and last month launched a GPU Forward Curve service offering standardized views of expected GPU capacity costs. The futures will be based on Silicon Data indexes tracking hourly Nvidia GPU rental prices, providing a public benchmark that previously did not exist for comparing GPU rental deals.

**「Impact」** AI developers and data-center operators could use the contracts to hedge their computing costs or revenues, while investors could gain exposure to AI computing capacity without directly investing in chips or data centers.

<details><summary>References</summary>
<ul>
<li><a href="https://cryptobriefing.com/cme-group-compute-futures-launch/">CME Group launches compute futures for trading on October 5</a></li>
<li><a href="https://siliconangle.com/2026/05/12/cme-group-silicon-data-launch-ai-compute-futures-market/">CME Group and Silicon Data to launch AI compute futures market</a></li>

</ul>
</details>

**Tags**: `#AI`, `#Futures`, `#CME`, `#Commodities`, `#Hedging`

---

<a id="item-finance-news-2"></a>
### [Tencent Reports Strong Q2 Revenue but AI Spending Turns Free Cash Flow Negative](https://wallstreetcn.com/articles/3779275) ⭐️ 8.0/10

Tencent reported 2026 second-quarter revenue of 204.8 billion yuan, up 11% year on year and slightly above Bloomberg estimates, but net profit growth slowed to 0.7% to 56 billion yuan, missing forecasts, and capital expenditure nearly tripled to 52.8 billion yuan, turning free cash flow negative at -13.8 billion yuan.

telegram · zaihuapd · Aug 12, 10:30

**「Background」** The spending increase reflects Tencent’s push into AI infrastructure; the company said free cash flow would have been 37.6 billion yuan excluding AI computing prepayments.

**Tags**: `#Tencent`, `#earnings`, `#AI capex`, `#free cash flow`, `#China tech`

---

<a id="item-finance-news-3"></a>
### [New energy vehicles reach 65.1% of China&\#x27;s July passenger-car sales](https://www.cnbc.com/2026/08/12/china-car-sales-data-byd-tesla-geely-vw.html) ⭐️ 7.0/10

New energy vehicles — battery and hybrid-powered cars — accounted for 65.1% of China&\#x27;s new passenger-car sales in July, up from 54% a year earlier, according to the China Passenger Car Association, while total passenger-car sales in the year through July fell 20.3%.

rss · CNBC Finance · Aug 12, 01:20

**「Background」** Autohome&\#x27;s ranking of the 10 most popular models sold in the six months through July put Geely&\#x27;s Xingyuan first, Tesla&\#x27;s Model Y second, and BYD and Volkswagen elsewhere in the list.

**Tags**: `#China auto market`, `#electric vehicles`, `#BYD`, `#Tesla`, `#auto sales data`

---

<a id="item-finance-news-4"></a>
### [China&\#x27;s First-Half 2026 Marriage Registrations Fell to 3.275 Million](https://www.mca.gov.cn/n156/n2679/c1662004999980012411/content.html) ⭐️ 7.0/10

China&\#x27;s Ministry of Civil Affairs reported 3.275 million marriage registrations in the first half of 2026, down 264,000 from the 3.539 million in the same period of 2025.

telegram · zaihuapd · Aug 12, 09:01

**「Background」** The official figures were released on August 12. Divorce registrations in the first half of 2026 rose to 1.383 million from 1.331 million a year earlier.

**Tags**: `#marriage registrations`, `#China demographics`, `#population trends`, `#consumer economy`, `#social indicators`

---

<a id="item-finance-news-5"></a>
### [Enterprise SSDs Hit 48% of NAND Shipments; YMTC Enters Top Three](https://china.counterpointresearch.com/%e6%9c%8d%e5%8a%a1%e5%99%a8%e9%9c%80%e6%b1%82%e6%8e%a8%e5%8d%87%e4%bc%81%e4%b8%9a%e7%ba%a7-ssd-%e5%8d%a0-nand-%e5%87%ba%e8%b4%a7%e9%87%8f%e7%99%be%e5%88%86%e4%b9%8b-48/) ⭐️ 7.0/10

Counterpoint reported that enterprise SSDs accounted for 48% of global NAND shipments in Q2 2026, nearly double year-on-year, and lifted industry revenue five-fold. Samsung led with 25% share, SK hynix had 22%, and YMTC moved into third place for the first time at 14%.

telegram · zaihuapd · Aug 12, 11:00

**「Background」** The increase was driven by AI inference workloads, and Counterpoint expects enterprise SSDs to consume more than half of total NAND bits by the end of 2026.

**「Impact」** The shift makes NAND suppliers&\#x27; earnings increasingly dependent on data-center demand; YMTC&\#x27;s third-place shipment share has not yet produced a top-three revenue position because its product mix leans consumer-oriented.

**Tags**: `#NAND`, `#SSD`, `#AI`, `#semiconductors`, `#YMTC`

---

## Community Discussion

<a id="discussion-tech-news-1"></a>
### [DeepSeek V4 Pro 0813 Launches on OpenRouter with Promising Low-Cost Performance](https://openrouter.ai/deepseek/deepseek-v4-pro-0813) ⭐️ 8.0/10

Reactions mix enthusiasm for DeepSeek&\#x27;s low-cost capability with a practical cost/performance benchmark against Grok 4.6, while one commenter criticized the sparse OpenRouter page and another noted a visual rendering artifact. Commenters also compared DeepSeek favorably with Kimi-K3, GLM-5.2, and Minimax for cost-sensitive use cases, suggesting Sonnet burns tokens too quickly and Opus 5 is overkill for most work.

[Article](#item-tech-news-1) · [Discussion](https://news.ycombinator.com/item?id=49274600)

---

<a id="discussion-tech-news-2"></a>
### [Tailscale Traces Database Corruption to 16-Year-Old SQLite WAL Bug](https://tailscale.com/blog/sqlite-wal-reset-bug) ⭐️ 8.0/10

Commenters praised the write-up and Tailscale&\#x27;s funding of a focused open-source debugging tool; several noted the surprising race despite the single-writer design, while others appreciated that a for-profit company took a SQLite support contract.

[Article](#item-tech-news-2) · [Discussion](https://news.ycombinator.com/item?id=49272832)

---

<a id="discussion-tech-news-3"></a>
### [Qwen3.8-2.4T-A95B: 2.4T-Parameter MoE LLM Released](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) ⭐️ 8.0/10

Commenters debated the model&\#x27;s large size and serving difficulty, noting that only bf16 and fp8 were released at launch, making it harder to serve than Kimi k3, and that QAT quantization to q4 would need substantial calibration data and bring it to roughly 1.3TB. Others highlighted the 1-bit quant at 397GB as enabling &quot;Opus 4.5 performance level&quot; on consumer hardware, mentioned DeepSeek V4-Pro-0813 benchmark announcements at &quot;Fable 5 level,&quot; and criticized the open-weight release for lacking vision, 1M context, and non-thinking support.

[Article](#item-tech-news-3) · [Discussion](https://news.ycombinator.com/item?id=49273478)

---

<a id="discussion-tech-news-4"></a>
### [AI&\#x27;s Impact on Mid-Level Software Engineers](https://blog.florianherrengt.com/ai-removing-middle-class-software-engineering.html) ⭐️ 8.0/10

Commenters largely agreed that AI amplifies existing engineering quality dynamics, with some noting that &quot;bad&quot; engineers can now have a much larger negative impact across an organization. Several commenters emphasized the importance of never outsourcing critical thinking to AI, while one questioned whether there is yet any irrefutable evidence of actual software engineer job losses due to successful AI coding agent implementation.

[Article](#item-tech-news-4) · [Discussion](https://news.ycombinator.com/item?id=49271994)

---

<a id="discussion-tech-news-6"></a>
### [xAI releases Grok 4.6; users debate API prompts and benchmarks](https://x.ai/news/grok-4-6) ⭐️ 7.0/10

Commenters are split: some see Grok as a healthy price-performance competitor, while others question how all major labs quickly achieved &\#x27;Fable-level&\#x27; models, suggesting distillation or benchmark hacking. Several express skepticism about the API&\#x27;s system-prompt behavior, though some praise Grok 4.5&\#x27;s concise and fast user experience over Claude&\#x27;s verbose style.

[Article](#item-tech-news-6) · [Discussion](https://news.ycombinator.com/item?id=49274027)

---

<a id="discussion-tech-news-7"></a>
### [Why Tiny JPEGs Look Different in Chrome](https://guillaumetech.github.io/posts/jpg-scaling-chrome/) ⭐️ 7.0/10

Commenters corroborated the issue with PNG icons in Electron, noting that Chrome&\#x27;s optimization disrupted icon rendering enough to delay upgrades, and others emphasized that using appropriately sized images is more important than the format choice. The discussion also noted the differing scaling algorithms between Chrome and Firefox, with some preferring Firefox&\#x27;s sharper output, and pointed to the CSS image-rendering attribute as a possible control.

[Article](#item-tech-news-7) · [Discussion](https://news.ycombinator.com/item?id=49272549)

---

<a id="discussion-tech-news-8"></a>
### [Grok 4.6 Scores 61 on Artificial Analysis Intelligence Index](https://artificialanalysis.ai/articles/grok-4-6-benchmarks-and-analysis) ⭐️ 7.0/10

Commenters shared positive hands-on experience with Grok 4.5 for personal coding, citing clearer communication and fast interactive sessions, while others highlighted competitive subscription deals through Cursor and the advantage of xAI&\#x27;s own compute and chip manufacturing plans. Concerns focused on the nearly doubled cache read pricing in Grok 4.6, and one commenter said the apparent ease of reaching the frontier made them more bullish on Gemini.

[Article](#item-tech-news-8) · [Discussion](https://news.ycombinator.com/item?id=49275385)

---

<a id="discussion-tech-news-9"></a>
### [Warrantless license plate reader searches require court oversight](https://andrewpwheeler.com/2026/08/12/license-plate-reader-searches-should-require-a-warrant/) ⭐️ 7.0/10

Comments generally agree that warrantless ALPR access is problematic, with some emphasizing that these cameras are reprogrammable general-purpose devices rather than dedicated plate readers. Disagreement centers on whether requiring warrants is enough, as one commenter argues mass surveillance should not be allowed by default, while another proposes cryptographic rotating plate displays to prevent tracking without DMV access.

[Article](#item-tech-news-9) · [Discussion](https://news.ycombinator.com/item?id=49273165)

---