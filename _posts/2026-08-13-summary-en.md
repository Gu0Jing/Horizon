---
layout: default
title: "Horizon Summary: 2026-08-13 (EN)"
date: 2026-08-13
lang: en
---

> From 42 items, 15 important content pieces were selected

---

**Technology News**
1. [DeepSeek V4 Pro 0813 Released with Open Weights](#item-tech-news-1) ⭐️ 9.0/10
2. [Google Launches Gemini 3.7 Flash with Adjustable Reasoning and Low Intro Pricing](#item-tech-news-2) ⭐️ 8.0/10
3. [DeepSeek Harness developer preview: open-source agent harness with traceable logs](#item-tech-news-3) ⭐️ 8.0/10
4. [Spaghettifying DRAM: New Low-Level Memory Attack Research](#item-tech-news-4) ⭐️ 8.0/10
5. [Choose Boring Technology: Spend Innovation Tokens Wisely](#item-tech-news-5) ⭐️ 8.0/10
6. [DeepMind&\#x27;s SL2T brings sign language-to-text AI to Pixel 11](#item-tech-news-6) ⭐️ 8.0/10
7. [OpenAI and Cerebras Show GPT-5.6 Sol Ultrafast 7x Faster HLE Runs](#item-tech-news-7) ⭐️ 7.0/10
8. [City2Graph: Python Library for Urban Heterogeneous Graphs and GNNs](#item-tech-news-8) ⭐️ 7.0/10
9. [WorldProof: Pixel Metrics Often Can&\#x27;t Rank World Models on Robot Video](#item-tech-news-9) ⭐️ 7.0/10
10. [Apple in talks to license news for Siri AI](#item-tech-news-10) ⭐️ 7.0/10

**Financial News**
1. [S&amp;P 500 profit margins hit a record 16.9%](#item-finance-news-1) ⭐️ 8.0/10
2. [China’s Gig Workforce Reaches 53 Million as Oversupply Grows](#item-finance-news-2) ⭐️ 8.0/10
3. [Bill Ackman&\#x27;s Pershing Square buys Netflix again, citing streaming dominance and cheaper valuation](#item-finance-news-3) ⭐️ 7.0/10
4. [China&\#x27;s YMTC overtakes Micron and Kioxia in NAND shipments](#item-finance-news-4) ⭐️ 7.0/10
5. [Electric vehicles dominate China&\#x27;s July car sales](#item-finance-news-5) ⭐️ 7.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [DeepSeek V4 Pro 0813 Released with Open Weights](https://simonwillison.net/2026/Aug/12/deepseek-v4-pro-0813/) ⭐️ 9.0/10

DeepSeek V4 Pro 0813, the latest version of DeepSeek&\#x27;s flagship model, is now available via API on OpenRouter and as open weights on Hugging Face, with 1.7T parameters and a 893 GB file size. The release lacks an official announcement page; benchmarks were initially shared in the Official DeepSeek WeChat Group, then posted to Reddit where moderators removed the post as &quot;low-effort,&quot; and finally copied into a Hacker News comment thread. Simon Willison noted that the model produced dramatically different pelican images across its low, medium, and high reasoning levels, a variation he has not observed from other models. The open weights continue DeepSeek&\#x27;s pattern after April&\#x27;s V4 Pro and July&\#x27;s V4 Flash 0731 releases, suggesting consistent open-weight availability for the model family.

rss · Simon Willison · Aug 12, 23:59

**「Background」** DeepSeek is an AI lab known for releasing open-weight models, and the V4 family already included earlier open-weight releases such as DeepSeek-V4-Pro from April and DeepSeek-V4-Flash-0731 from July. This new 0813 version continues that pattern with open weights on Hugging Face \(1.7T parameters, 893 GB\) while also being available through API providers like OpenRouter. According to external benchmark listings, the model features a 1M-token context window, supports up to 384k output tokens, and vendor-reported agent benchmark results claim it outperforms previous V4 variants, though these figures are not independently verified.

**「Impact」** AI/ML practitioners can immediately test DeepSeek V4 Pro 0813 through the OpenRouter API or download the 893 GB open-weights release for self-hosting, though the 1.7T-parameter model will require substantial infrastructure to deploy.

<details><summary>References</summary>
<ul>
<li><a href="https://deepseekv4pro.com/news/deepseek-v4-pro-0813-official-release-opus-fable-benchmarks">DeepSeek V 4 Pro 0813 : Opus 4.8 and Fable 5 Agent Benchmarks</a></li>
<li><a href="https://www.vals.ai/models/deepseek_deepseek-v4-pro-0813">DeepSeek V 4 Pro 0813</a></li>
<li><a href="https://benchlm.ai/models/deepseek-v4-pro-0813">DeepSeek V 4 Pro 0813 Benchmarks , Pricing &amp; Speed | BenchLM.ai</a></li>

</ul>
</details>

**Tags**: `#deepseek`, `#artificial-intelligence`, `#machine-learning`, `#open-source`, `#model-release`

---

<a id="item-tech-news-2"></a>
### [Google Launches Gemini 3.7 Flash with Adjustable Reasoning and Low Intro Pricing](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/) ⭐️ 8.0/10

Google has introduced Gemini 3.7 Flash, the latest model in its Flash series designed for low-cost, high-volume workloads, with user-adjustable reasoning levels including default, high, medium, and low. The model ships with introductory pricing that is scheduled to double on December 31, 2026, reaching $1.50 per 1M input tokens and $7.50 per 1M output tokens on January 1, 2027. It follows the release of Gemini 3.6 Flash by about three weeks, and early developer tests show solid performance on vision-to-HTML conversions and the DeepSWE 1.1 benchmark. However, some community members note that cheaper rivals such as GPT-5.6 Luna and the higher-quality Opus 5 may still be better fits for certain workloads.

hackernews · thisisauserid · Aug 13, 17:23 · [Discussion](https://news.ycombinator.com/item?id=49289112)

**「Background」** Gemini 3.7 Flash is the latest iteration in Google&\#x27;s Flash series of AI models, which are designed as cost-efficient workhorses for coding and agentic tasks. It follows Gemini 3.6 Flash by just three weeks and builds on algorithmic improvements to its core reasoning foundation, according to Google DeepMind. The model supports customizable thinking configurations that let developers balance quality, cost, and latency.

**「Impact」** Developers using the Gemini API for high-volume, text-heavy applications now have a cheaper Flash option with configurable reasoning, but should plan for the scheduled 2x price increase in January 2027.

<details><summary>References</summary>
<ul>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/">Gemini 3.7 Flash: our most intelligent workhorse model</a></li>
<li><a href="https://deepmind.google/models/model-cards/gemini-3-7-flash/">Gemini 3.7 Flash - Model Card — Google DeepMind</a></li>

</ul>
</details>

**Tags**: `#gemini`, `#ai-models`, `#llm-release`, `#google`, `#machine-learning`

---

<a id="item-tech-news-3"></a>
### [DeepSeek Harness developer preview: open-source agent harness with traceable logs](https://deepseek.com/harness/en/) ⭐️ 8.0/10

DeepSeek released an early developer preview of DeepSeek Harness, an open-source AI agent harness on GitHub under the MIT license. Its main feature is an append-only session log that records everything the model sees—system prompts, reasoning, tool calls and results, subagent scheduling, and context injections—with a Trajectory view that lets users inspect records by source and run resume, fork, search, and replay operations on the event stream. The harness is built on a plugin architecture that uses Cordis v4, adding hot-reload and dynamic enable/dispose capabilities for plugins, including UI components. The authors caution that it has rough edges and compatibility-breaking changes, and invite feedback.

hackernews · bjin · Aug 13, 12:58 · [Discussion](https://news.ycombinator.com/item?id=49285244)

**「Background」** DeepSeek Harness is an open-source agent harness released as a developer preview under the MIT license, with source code on GitHub and an early version published via npm. It is built on the Cordis framework from the Cordis v4 research paper, which supports hot-loading and hot-unloading plugins without restarting the running process, including reverting state and side effects. The harness makes every capability a plugin—models, tools, skills, sessions, sandboxes, and UI—and records all model-visible events in append-only session logs for traceability.

**「Impact」** Developers who need auditable and replayable agent runs can now inspect every event in a DeepSeek Harness session, addressing a transparency gap compared with the encrypted or obfuscated traces common in some US models.

<details><summary>References</summary>
<ul>
<li><a href="https://www.deepseek.com/harness/en/">DeepSeek Harness developer preview: Everything is a plugin</a></li>
<li><a href="https://github.com/deepseek-ai/deepseek-harness">GitHub - deepseek-ai/deepseek-harness: DeepSeek Harness ...</a></li>
<li><a href="https://lovableapp.org/blog/deepseek-harness-2026-guide">DeepSeek Harness 2026: Everything Is a Plugin — Developer ...</a></li>

</ul>
</details>

**Tags**: `#deepseek`, `#ai-agents`, `#open-source`, `#tooling`, `#traceability`

---

<a id="item-tech-news-4"></a>
### [Spaghettifying DRAM: New Low-Level Memory Attack Research](https://github.com/xoreaxeaxeax/skitter-creek-bath-salts) ⭐️ 8.0/10

The GitHub project &quot;skitter-creek-bath-salts&quot; by security researcher Christopher Domas \(xoreaxeaxeax\) describes research on manipulating DRAM to enable low-level memory attacks, generating substantial community interest. The project is associated with an upcoming Black Hat talk and includes notes indicating it works on AMD Jaguar \(2013 architecture\), while raising open questions about compatibility with newer processors such as Zen 3. Full technical details are not yet public, but the research is significant because it targets hardware-level DRAM behavior rather than software vulnerabilities, potentially exposing hidden processor privilege layers. The project page remains quiet about which other processor families might be affected beyond AMD16h.

hackernews · matt\_d · Aug 13, 14:17 · [Discussion](https://news.ycombinator.com/item?id=49286341)

**「Background」** DRAM controllers commonly apply address scrambling or permutation to physical addresses for electrical and security reasons, remapping how CPU-visible addresses correspond to actual memory cells. The skitter-creek-bath-salts project demonstrates a technique to manipulate the DRAM controller so that an address can be made to land anywhere in memory, potentially exposing hidden CPU components such as PSP, SMM, microcode, and other elements that are normally outside the reach of ring 0 software. The attack is currently demonstrated on AMD Jaguar \(family 16h\), with only notes indicating that Zen 3 uses a different base address for the memory controller registers, leaving the applicability to newer CPUs unclear.

**「Impact」** The main consequence so far is heightened attention to DRAM controller interfaces as a legitimate attack surface; whether this affects real systems depends on the yet-unpublished talk and proof-of-concept details.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/xoreaxeaxeax/skitter-creek-bath-salts">GitHub - xoreaxeaxeax/skitter-creek-bath-salts: Unlocking ...</a></li>
<li><a href="https://upstract.com/x/201aa8130cc32a64">Spaghettifying DRAM - upstract.com</a></li>

</ul>
</details>

**Tags**: `#DRAM`, `#security`, `#hardware`, `#memory corruption`, `#exploit`

---

<a id="item-tech-news-5"></a>
### [Choose Boring Technology: Spend Innovation Tokens Wisely](https://mcfunley.com/choose-boring-technology) ⭐️ 8.0/10

The 2015 essay &\#x27;Choose Boring Technology&\#x27; by mcfunley argues that companies should favor boring, well-understood technology to conserve a limited supply of &\#x27;innovation tokens&\#x27; for the areas that truly differentiate their product. It frames technology selection as a budgeting problem: roughly three innovation tokens are available for a long while, so every novel choice outside a core differentiator consumes scarce capacity for experimentation. The essay matters because it gives engineering leaders and product managers a memorable, practical model for making and explaining tradeoffs, which is why it remains widely cited and discussed. It emphasizes that pragmatism and proven reliability often outweigh the appeal of new or clever tools, especially in undifferentiated parts of a system.

hackernews · tosh · Aug 13, 17:48 · [Discussion](https://news.ycombinator.com/item?id=49289512)

**「Background」** Dan McKinley&\#x27;s 2015 essay &\#x27;Choose Boring Technology&\#x27; argues that every engineering organization has a limited number of &\#x27;innovation tokens&\#x27; to spend on adopting new or unproven technology. He advises spending those tokens only on areas that genuinely differentiate the product, while otherwise favoring mature, well-understood &\#x27;boring&\#x27; technology. The essay has become a widely cited reference in software engineering for pragmatic technology selection.

**「Impact」** For engineering leaders and product managers, the &\#x27;innovation tokens&\#x27; framework provides a concrete way to justify conservative technology choices and communicate those tradeoffs to colleagues at all levels, as commenters report finding it one of the most useful concepts in their careers.

<details><summary>References</summary>
<ul>
<li><a href="https://mcfunley.com/choose-boring-technology">Dan McKinley :: Choose Boring Technology</a></li>
<li><a href="https://jonathannen.com/choose-boring-technology/">Dan McKinley &#x27;s classic advice on &quot; choosing boring technology &quot; is....</a></li>

</ul>
</details>

**Tags**: `#boring technology`, `#innovation tokens`, `#software engineering`, `#tech strategy`, `#engineering culture`

---

<a id="item-tech-news-6"></a>
### [DeepMind&\#x27;s SL2T brings sign language-to-text AI to Pixel 11](https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/) ⭐️ 8.0/10

Google DeepMind has released SL2T, a large-scale multilingual sign language-to-text model, and it is now shipping on Pixel 11 in Gboard and Live Transcribe, initially supporting American Sign Language to English translation. The model was trained on over 100,000 hours of sign language data covering more than 50 sign languages, and it scores 70 BLEURT on the FLEURS-ASL benchmark in a zero-shot setting, far exceeding prior records. To protect privacy, SL2T processes only hand and body pose keypoints rather than raw video. DeepMind says the feature will expand to more devices and languages over time.

telegram · zaihuapd · Aug 13, 08:55

**「Background」** Sign language translation has long been a challenging AI task because sign languages are visual, spatial, and linguistically distinct, and most existing systems are limited to small vocabulary sets or single users. SL2T is designed as a large-scale, multilingual model that can handle a variety of sign languages directly from pose data, reducing privacy risk while making real-time translation practical on consumer devices.

**「Impact」** For users who communicate with American Sign Language, SL2T on Pixel 11 enables direct sign language-to-text input in Gboard and real-time captioning in Live Transcribe, removing a major barrier for everyday communication. The privacy-preserving design \(pose keypoints only\) may also set a precedent for future on-device sign language AI deployments, though support for additional sign languages and devices is still pending.

**Tags**: `#sign-language`, `#DeepMind`, `#machine-learning`, `#accessibility`, `#AI-model`

---

<a id="item-tech-news-7"></a>
### [OpenAI and Cerebras Show GPT-5.6 Sol Ultrafast 7x Faster HLE Runs](https://www.cerebras.ai/blog/accelerating-gpt-5-6-sol-ultrafast-with-openai) ⭐️ 7.0/10

Cerebras announced OpenAI&\#x27;s GPT-5.6 Sol Ultrafast mode, reporting it completed 2,500 Humanity&\#x27;s Last Exam questions in 11 hours and 11 minutes with accuracy comparable to regular runs and nearly 7x faster than Claude Fable 5, which took 78 hours and 27 minutes. The post also cites output-speed comparisons of 11x faster than Fable 5 and 5x faster than Opus 4.8 on Fast mode, while an OpenAI preview page contains no pricing information. Discussion focuses on whether the speed gain preserves identical model quality; the announcements do not explicitly state that Ultrafast performs exactly the same as standard GPT-5.6 Sol.

hackernews · pr337h4m · Aug 13, 18:10 · [Discussion](https://news.ycombinator.com/item?id=49289844)

**「Background」** GPT-5.6 Sol is OpenAI&\#x27;s most capable model, and Cerebras builds specialized AI hardware. The two companies are previewing Ultrafast mode, a new OpenAI API service tier powered by Cerebras that runs GPT-5.6 Sol up to 14× faster than Standard processing, with output speeds of up to 750 tokens per second. The service is initially available to select customers, with expansion planned over time.

**「Impact」** For organizations running long evaluation workloads, Ultrafast reduces a multi-day HLE run to less than a working day on Cerebras hardware, enabling faster iteration—though the lack of explicit identical-performance confirmation and pricing leaves adoption conditions uncertain.

<details><summary>References</summary>
<ul>
<li><a href="https://openai.com/index/previewing-ultrafast/">Previewing Ultrafast mode: GPT‑5.6 Sol at up to ... - OpenAI</a></li>
<li><a href="https://www.cerebras.ai/blog/accelerating-gpt-5-6-sol-ultrafast-with-openai">Accelerating GPT-5.6 Sol Ultrafast with OpenAI - cerebras.ai</a></li>
<li><a href="https://investors.cerebras.ai/news-releases/news-release-details/cerebras-powers-ultrafast-mode-openais-gpt-56-sol">Cerebras Powers Ultrafast Mode for OpenAI’s GPT-5.6 Sol ...</a></li>

</ul>
</details>

**Tags**: `#AI`, `#OpenAI`, `#Cerebras`, `#LLM inference`, `#performance`

---

<a id="item-tech-news-8"></a>
### [City2Graph: Python Library for Urban Heterogeneous Graphs and GNNs](https://www.reddit.com/r/MachineLearning/comments/1vn8oya/city2graph_a_python_library_for_heterogeneous/) ⭐️ 7.0/10

City2Graph is a new Python library that converts urban geospatial data into analysis-ready heterogeneous graphs for spatial analysis, network analysis, and graph neural networks \(GeoAI\), and its accompanying paper has just been published in Computers, Environment and Urban Systems \(vol. 130, 2026, article 102492\) by Sato, Pietrostefani, Mahabir, and Arribas-Bel. The library covers morphological graphs of buildings, streets, and tessellated urban fabric from OpenStreetMap and Overture Maps; transportation graphs from GTFS and GBFS feeds loaded through DuckDB; mobility graphs from OD matrices and flow data; and proximity/contiguity graphs using KNN, Delaunay, Gilbert, Waxman, and queen/rook methods under Euclidean, Manhattan, or network distances. It supports heterogeneous graphs with multiple node and edge types, metapath-derived edges, and conversions between GeoDataFrames, NetworkX, rustworkx, and PyTorch Geometric Data/HeteroData while preserving geometry and attributes. The project repository is available at https://github.com/c2g-dev/city2graph, and the author invites issues, pull requests, and suggestions for additional data sources.

reddit · r/MachineLearning · /u/Tough\_Ad\_6598 · Aug 13, 11:59

**「Background」** Urban systems are naturally represented as graphs, where entities like buildings, streets, transit stops, and movement flows are interconnected, yet many existing tools treat urban data as flat feature tables that lose these spatial and relational structures. Heterogeneous graph neural networks \(GNNs\) extend standard GNNs to handle multiple node and edge types and metapaths, making them well suited for urban analytical tasks, but building these graphs from raw geospatial data has traditionally required significant custom engineering.

**「Impact」** Researchers, urban data scientists, and GNN practitioners can now use City2Graph as a unified, open-source pipeline to transform geospatial inputs into diverse graph representations and directly load them into PyTorch Geometric, reducing the effort needed to apply heterogeneous GNNs to urban morphology, transportation, mobility, and proximity analyses.

**Tags**: `#graph-neural-networks`, `#geospatial-analysis`, `#urban-computing`, `#python-library`, `#spatial-networks`

---

<a id="item-tech-news-9"></a>
### [WorldProof: Pixel Metrics Often Can&\#x27;t Rank World Models on Robot Video](https://www.reddit.com/r/MachineLearning/comments/1vnliv7/worldproof_diagnosing_where_worldmodel/) ⭐️ 7.0/10

WorldProof, an Apache-2.0 diagnostic tool for world models that predict future frames from context and actions, is now available via \`pip install worldproof\` and reads LeRobotDataset v3.0 directly from parquet/mp4 on Python 3.10 without GPU. Validating it, the author found that on a real SO-101 arm recording \(30fps, three cameras, 64 rollouts, 6-step horizon, dynamic-region scoring\) a &\#x27;copy last frame&\#x27; baseline already achieves 0.983 SSIM and 53.9 dB PSNR, with flat error across steps 1-6, meaning the evaluation setup has no discriminative power to rank models. On DROID real manipulation footage \(15fps, 64 rollouts, 48 steps\), the same baseline&\#x27;s SSIM@dynamic declines monotonically from 0.873 at step 1 to 0.204 by step 28 before flooring around 0.20 SSIM/10.3 dB, so the only separable evaluation window is roughly steps 8-24. The tool uses interquartile mean with stratified bootstrap CIs, includes corruption and ranking tests per metric, and the author cautions that averaging over horizons including step 0 inflates scalar scores by rewarding frame rate.

reddit · r/MachineLearning · /u/georgia\_bucea · Aug 13, 19:58

**「Background」** World models aim to predict future frames from an initial context and action sequence; they are typically scored with pixel-level metrics like PSNR and SSIM that compare predicted frames to ground truth. To be useful for model selection, an evaluation must be able to separate a good predictor from a naive baseline, which this post shows can fail on real robot video once a &\#x27;copy last frame&\#x27; baseline is scored on dynamic regions.

**「Impact」** The concrete consequence is that researchers evaluating world models on real robot footage should determine the discriminative horizon on their own data—likely 8-24 steps for 15fps manipulation video—and report horizon curves rather than summary scalars, because pixel metrics cannot rank models at the easy and fully decorrelated ends.

**Tags**: `#world models`, `#evaluation metrics`, `#robotics`, `#open source`, `#machine learning`

---

<a id="item-tech-news-10"></a>
### [Apple in talks to license news for Siri AI](https://9to5mac.com/2026/08/12/report-apple-seeks-publisher-deals-to-give-siri-ai-better-access-to-current-events/) ⭐️ 7.0/10

Apple is reportedly in discussions with publishers about multi-year content agreements that would give Siri AI access to current news and information. The company has discussed paying partners based on content usage, with a budget that could reach nine figures, rather than the fixed upfront licensing fees common among large AI companies. No partnerships have been announced, and Apple declined to comment. Siri AI is expected to launch later in 2026, and the report originates from 9to5Mac, MacRumors, and The Wall Street Journal.

telegram · zaihuapd · Aug 13, 04:40

**「Background」** Apple is reportedly in talks with news publishers to license their content for its upcoming Siri AI assistant, which is expected to launch later in 2026. The proposed multiyear deals would reportedly use usage-based payments rather than the flat licensing fees typical of other AI companies. Apple has operated Apple News+, a paid subscription news service, since 2019, and has previously signed deals that included rights to use publisher content for AI training purposes. The reports are based on unnamed sources and have not been confirmed by Apple.

**「Impact」** If confirmed, the plan could provide publishers with a usage-based revenue stream tied directly to Siri AI interactions while giving Apple&\#x27;s assistant timely news coverage, though the deal remains unconfirmed and details are limited.

<details><summary>References</summary>
<ul>
<li><a href="https://applemagazine.com/siri-ai-apple-publisher-content-deals/">Siri AI Could Gain Licensed News Through Apple Publisher Deals</a></li>
<li><a href="https://ainave.com/tech-news/apple-s-siri-ai-news-licensing-usage-based-publisher-deals-could-reshape-ai-content-access">Apple Siri AI News Licensing: Usage-Based Publisher Deals Explained ...</a></li>
<li><a href="https://qz.com/apple-publisher-deals-siri-ai-news-content-081326">Apple in talks to pay publishers to power AI Siri - Quartz</a></li>

</ul>
</details>

**Tags**: `#Apple`, `#Siri`, `#AI`, `#news licensing`, `#tech industry`

---

## Financial News

<a id="item-finance-news-1"></a>
### [S&amp;P 500 profit margins hit a record 16.9%](https://www.cnbc.com/2026/08/13/these-charts-show-why-stocks-keep-rallying-profit-margins-are-highest-on-record.html) ⭐️ 8.0/10

S&amp;P 500 companies are keeping more profit per dollar of sales than ever before: FactSet&\#x27;s blended net profit margin for the second quarter is 16.9%, up from 14.8% in the first quarter and 12.9% a year earlier. If the reading holds, it would be the highest since FactSet began tracking in 2009.

rss · CNBC Finance · Aug 13, 20:21

**「Background」** Net profit margin is the percentage of revenue companies keep after paying all expenses. FactSet&\#x27;s &\#x27;blended&\#x27; figure combines actual results with estimates for companies that have not reported yet. Even without top contributors Alphabet and Amazon, the margin is a record 15%.

**Tags**: `#Profit margins`, `#S&amp;P 500`, `#Earnings`, `#Corporate profitability`, `#FactSet`

---

<a id="item-finance-news-2"></a>
### [China’s Gig Workforce Reaches 53 Million as Oversupply Grows](https://www.ft.com/content/a3803e70-cb4d-444f-a31e-05be2f2c44f6?accessToken=zwAAAZ_5xcXzkdOjgD5wy01ET9OjHgW-LyxE9g.MEUCIQCWTIny3JTJV8e-PGyK0XL2tg5g_7Ay-rpKkwGZCpp1-AIgbMgJQPlqWgqAsX4s1k4gYaC4b8k0JveZOs35OJQvbZ4&amp;amp;sharetype=gift&amp;amp;token=7e8483bb-395d-429e-afca-2f4ab5ad150b) ⭐️ 8.0/10

A Financial Times report says China&\#x27;s economic slowdown is intensifying employment pressure; by 2025, food-delivery and ride-hailing drivers exceeded 53 million, up 10 million in two years, but long airport queues and Shenzhen&\#x27;s saturation announcement show supply still outweighs demand.

telegram · zaihuapd · Aug 13, 06:40

**「Background」** The gig economy — short-term, app-based work such as ride-hailing and food delivery — has become an outlet for excess labour as property, consumption, construction, manufacturing and automation pressures reduce other job opportunities.

**「Impact」** Drivers in these sectors face lower incomes and longer working hours as competition intensifies, and authorities such as Shenzhen have begun declaring ride-hailing markets saturated.

**Tags**: `#China economy`, `#gig economy`, `#employment`, `#ride-hailing`, `#food delivery`

---

<a id="item-finance-news-3"></a>
### [Bill Ackman&\#x27;s Pershing Square buys Netflix again, citing streaming dominance and cheaper valuation](https://www.cnbc.com/2026/08/13/ackman-buys-netflix-again-four-years-later-says-it-won-streaming-wars.html) ⭐️ 7.0/10

Bill Ackman&\#x27;s Pershing Square disclosed a new stake in Netflix, saying the streaming company has effectively won the streaming wars and is attractively valued after its shares fell roughly 50% from a June 2025 high of $134 to about 21 times forward earnings. Netflix shares rose nearly 4% on Thursday after the disclosure.

rss · CNBC Finance · Aug 13, 18:04

**「Background」** Ackman previously built a large Netflix position in early 2022 but sold it about three months later after the company reported its first subscriber decline in more than a decade and he said the business model was too hard to predict.

**Tags**: `#Netflix`, `#Bill Ackman`, `#streaming wars`, `#investment`, `#valuation`

---

<a id="item-finance-news-4"></a>
### [China&\#x27;s YMTC overtakes Micron and Kioxia in NAND shipments](https://www.cnbc.com/2026/08/13/chinese-firm-tops-micron-kioxia-shipments-nand-memory-chips.html) ⭐️ 7.0/10

China&\#x27;s Yangtze Memory Technologies \(YMTC\) rose to third place in global NAND memory chip shipments in the second quarter with a 14% share, surpassing Micron and Kioxia, according to Counterpoint Research, though it still trailed those rivals in revenue.

rss · CNBC Finance · Aug 13, 02:59

**「Background」** NAND chips retain data when devices are powered off but are slower than DRAM chips. Counterpoint says a 15% share is the minimum for a memory maker to fund its own future expansion. YMTC is preparing to go public in mainland China after the debut of DRAM-focused Chinese memory company CXMT.

**「Impact」** Counterpoint projects YMTC will pull further ahead in 2027 and 2028, signaling growing competition for Micron and Kioxia, especially as data centers are expected to account for half of all NAND demand by the end of 2026.

**Tags**: `#NAND memory`, `#YMTC`, `#semiconductor industry`, `#China`, `#market share`

---

<a id="item-finance-news-5"></a>
### [Electric vehicles dominate China&\#x27;s July car sales](https://www.cnbc.com/2026/08/12/china-car-sales-data-byd-tesla-geely-vw.html) ⭐️ 7.0/10

China&\#x27;s latest auto sales data show new energy vehicles \(NEVs\) — battery-electric and hybrid cars — made up 65.1% of new passenger cars sold in July, up from 54% a year earlier, according to the China Passenger Car Association. Total passenger car sales fell 20.3% in the year through July, while NEV sales declined 12.5% over the same period.

rss · CNBC Finance · Aug 13, 01:31

**「Background」** The figures come from the China Passenger Car Association \(CPCA\), whose data show new energy vehicles \(battery and hybrid cars\) rose to a 65.1% share of July passenger car sales from 54% a year earlier, even as the overall passenger car market fell 20.3% in the year through July.

**Tags**: `#China`, `#electric vehicles`, `#auto sales`, `#BYD`, `#Tesla`

---

## Community Discussion

<a id="discussion-tech-news-2"></a>
### [Google Launches Gemini 3.7 Flash with Adjustable Reasoning and Low Intro Pricing](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/) ⭐️ 8.0/10

Commenters generally see Gemini 3.7 Flash as competitive for its price class, especially in vision-based tasks. Several still question the value proposition: one calls the introductory-pricing schedule odd, another prefers GPT-5.6 Luna for reasoning to avoid context bloat, and a third says Luna&\#x27;s lower cost undercuts Flash&\#x27;s purpose.

[Article](#item-tech-news-2) · [Discussion](https://news.ycombinator.com/item?id=49289112)

---

<a id="discussion-tech-news-3"></a>
### [DeepSeek Harness developer preview: open-source agent harness with traceable logs](https://deepseek.com/harness/en/) ⭐️ 8.0/10

Commenters praised the append-only traceability as a &\#x27;killer feature&\#x27; absent from encrypted US-model traces, while the author confirmed this is an early MIT-licensed preview with rough edges. Others discussed the underlying Cordis v4 system&\#x27;s reversible plugin hot-reload, though one reader expressed fatigue with &\#x27;everything is a plugin&\#x27; architectures.

[Article](#item-tech-news-3) · [Discussion](https://news.ycombinator.com/item?id=49285244)

---

<a id="discussion-tech-news-4"></a>
### [Spaghettifying DRAM: New Low-Level Memory Attack Research](https://github.com/xoreaxeaxeax/skitter-creek-bath-salts) ⭐️ 8.0/10

Commenters praised Domas&\#x27;s previous work and looked forward to the Black Hat talk, while questioning which newer CPU generations are affected and noting that console security groups might be concerned. Several also observed that DRAM interfaces have become far more complex and proprietary, widening the attack surface.

[Article](#item-tech-news-4) · [Discussion](https://news.ycombinator.com/item?id=49286341)

---

<a id="discussion-tech-news-5"></a>
### [Choose Boring Technology: Spend Innovation Tokens Wisely](https://mcfunley.com/choose-boring-technology) ⭐️ 8.0/10

Commenters largely praise the post as a favorite and highly useful framework, with one wishing for a job board that vets companies for this kind of pragmatic engineering culture. One commenter pushes back, arguing that &\#x27;new&\#x27; and &\#x27;novel&\#x27; are weak proxies and that engineers should instead evaluate actual requirements, risks, and tradeoffs on a case-by-case basis.

[Article](#item-tech-news-5) · [Discussion](https://news.ycombinator.com/item?id=49289512)

---

<a id="discussion-tech-news-7"></a>
### [OpenAI and Cerebras Show GPT-5.6 Sol Ultrafast 7x Faster HLE Runs](https://www.cerebras.ai/blog/accelerating-gpt-5-6-sol-ultrafast-with-openai) ⭐️ 7.0/10

Commenters were enthusiastic about speed enabling fast iteration and better reasoning, but several cautioned that neither Cerebras nor OpenAI explicitly confirmed identical accuracy to the non-Ultrafast model, and the lack of pricing suggests availability may be limited or still being evaluated.

[Article](#item-tech-news-7) · [Discussion](https://news.ycombinator.com/item?id=49289844)

---