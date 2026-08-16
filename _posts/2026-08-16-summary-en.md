---
layout: default
title: "Horizon Summary: 2026-08-16 (EN)"
date: 2026-08-16
lang: en
---

> From 32 items, 7 important content pieces were selected

---

**Technology News**
1. [Anthropic Publishes Claude System Prompts for Developers](#item-tech-news-1) ⭐️ 8.0/10
2. [SSOG-Attention: Sub-Quadratic Attention with Sums of Separable Gaussians](#item-tech-news-2) ⭐️ 8.0/10
3. [The Shift Toward Tool-Calling LLMs and Shrinking Parametric Knowledge](#item-tech-news-3) ⭐️ 7.0/10
4. [Cloudflare silently injects analytics when you switch nameservers](#item-tech-news-4) ⭐️ 7.0/10
5. [Qwen 3.8 27B: Great model, but default xhigh reasoning overdoes it](#item-tech-news-5) ⭐️ 7.0/10
6. [US Said to Demand Allies Choose Sides in AI Cooperation via Pax Silica](#item-tech-news-6) ⭐️ 7.0/10

**Financial News**
1. [Anthropic Q2 Preliminary Revenue Tops $11.5 Billion, Up 14x Year Over Year](#item-finance-news-1) ⭐️ 8.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [Anthropic Publishes Claude System Prompts for Developers](https://platform.claude.com/docs/en/release-notes/system-prompts) ⭐️ 8.0/10

Anthropic published the system prompts for its Claude models, giving developers a rare look at how the models are instructed and how those prompts change between versions. The release allows detailed analysis of model behavior and prompt evolution, including additions like guidance for Claude to check whether images are truly present and to prioritize user wellbeing during crisis conversations. This transparency is valuable for AI developers and researchers, though it is not a paradigm shift in itself.

hackernews · tosh · Aug 16, 12:48 · [Discussion](https://news.ycombinator.com/item?id=49319556)

**「Background」** Anthropic&\#x27;s system prompts are the hidden instructions that guide Claude&\#x27;s behavior, and the company began officially publishing them in 2024, starting with prompts dated July 12, 2024 for Claude 3 Opus, Claude 3.5 Sonnet, and Claude 3 Haiku, viewable on the Claude iOS and Android apps and the web. Before this, system prompts were often leaked or extracted by community members, as shown in public repositories. This transparency move follows an earlier detailed breakdown of Claude&\#x27;s system prompt by Anthropic researcher Amanda Askell in March 2024.

**「Impact」** For developers and researchers, Anthropic&\#x27;s publication of official Claude system prompts enables direct, versioned analysis of model instructions and prompt evolution, and the community has already built git-based diff tools to track changes. It also demonstrates a clear shift toward shorter system prompts in newer models, suggesting Anthropic now relies more on tooling and context than on prescriptive instructions, which changes prompt-engineering assumptions.

<details><summary>References</summary>
<ul>
<li><a href="https://simonwillison.net/2024/Aug/26/anthropic-system-prompts/">Anthropic Release Notes : System Prompts | Simon Willison’s Weblog</a></li>
<li><a href="https://braintitan.medium.com/anthropic-has-taken-the-rare-step-of-proactively-announcing-system-prompts-of-claude-and-promised-fe6565bda4aa">Anthropic has taken the rare step of proactively announcing system ...</a></li>
<li><a href="https://github.com/asgeirtj/system_prompts_leaks">GitHub - asgeirtj/ system _ prompts _leaks: Extracted system prompts ...</a></li>
<li><a href="https://www.remio.ai/post/anthropic-says-claude-tag-lands-65-of-product-engineering-prs-as-system-prompts">Anthropic Says Claude Tag Lands 65% of Product Engineering PRs...</a></li>
<li><a href="https://github.com/asgeirtj/system_prompts_leaks">GitHub - asgeirtj/ system _ prompts _leaks: Extracted system prompts ...</a></li>

</ul>
</details>

**Tags**: `#AI`, `#Anthropic`, `#system prompts`, `#transparency`, `#Claude`

---

<a id="item-tech-news-2"></a>
### [SSOG-Attention: Sub-Quadratic Attention with Sums of Separable Gaussians](https://www.reddit.com/r/MachineLearning/comments/1vpt6ay/ssogattention_sum_of_separable_gaussians_as_a/) ⭐️ 8.0/10

The author introduces SSOG-Attention, an attention mechanism that replaces scaled dot-product attention&\#x27;s O\(N²·d\) token-pair similarity computation with a few learned Gaussian atoms per head that are geometrically steered by each query token. Because the atoms factorize into a sum of separable Gaussians, complexity drops to O\(N·√N·d\). Reported experiments show SSOG clearly outperforms SDPA on CIFAR-100 and matches it on ImageNet \(IN1k\) while converging faster and using less memory at larger scales. A blog post and repository are linked; the author discloses that AI assisted with some code and writing. The result is presented as a sub-quadratic, scalable alternative to SDPA, though it is author-posted and not yet independently validated.

reddit · r/MachineLearning · /u/4rtemi5 · Aug 16, 10:06

**「Background」** Standard scaled dot-product attention \(SDPA\) in vision transformers computes similarity scores between every query token and every key token, resulting in O\(N²·d\) complexity that becomes prohibitive as image resolution grows. SSOG \(Sum of Separable Gaussians\) replaces this content-scored attention with a learned geometric field: each attention head uses a few Gaussian atoms defined over relative positions, plus small query-dependent nudges that steer the field without explicitly scoring all token pairs. This builds on linear-attention and kernel-approximation ideas, using the separability of Gaussians to reduce the complexity to roughly O\(N·√N·d\).

**「Impact」** For deep learning practitioners working with large token counts, SSOG offers a sub-quadratic attention variant that reportedly matches SDPA on ImageNet while improving speed and memory at scale, but the performance gains should be treated cautiously until independently benchmarked.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/4rtemi5/ssog/blob/main/README.md">ssog/README.md at main · 4rtemi5/ssog · GitHub</a></li>

</ul>
</details>

**Tags**: `#attention mechanisms`, `#efficiency`, `#scalable AI`, `#Gaussian kernels`, `#deep learning`

---

<a id="item-tech-news-3"></a>
### [The Shift Toward Tool-Calling LLMs and Shrinking Parametric Knowledge](https://w4g1.dev/blog/models-are-getting-dumber-on-purpose) ⭐️ 7.0/10

The blog post &\#x27;Models Are Getting Dumber on Purpose&\#x27; argues that LLM developers are deliberately shifting factual knowledge out of model weights and into external knowledge bases and tool-calling systems, prioritizing adaptable reasoning over static recall. It cites benchmarks such as SimpleQA, where the leader Gemini 2.5 Pro scores 53% without tools, to illustrate that parametric memory remains imperfect and increasingly seen as outdated. At least one commenter says the post is AI-generated and out of date, noting Gemini 2.5 Pro is sixteen months old; another points to Cactus&\#x27;s Needle, a 14 MB tool-calling LLM, as evidence of this direction. The post frames the potential benefit as reduced hallucination when facts live outside weights, while the trade-off is that models no longer carry much standalone knowledge.

hackernews · hruvhwe · Aug 16, 19:04 · [Discussion](https://news.ycombinator.com/item?id=49322695)

**「Background」** Large language models have traditionally stored world knowledge directly in their weights, which creates trade-offs: knowledge goes stale after training, and recall is costly in every forward pass. To address this, developers increasingly use retrieval-augmented generation \(RAG\) and tool calling, letting models consult external knowledge bases or documentation on demand rather than memorizing facts. This has led to a trend of intentionally smaller or less knowledge-dense models that pair with pluggable knowledge and tools, sometimes even dropping explicit knowledge cutoffs from model cards.

**「Impact」** For developers building on LLMs, the concrete takeaway is that model choice should increasingly consider tool-calling and retrieval integration rather than the breadth of memorized knowledge.

<details><summary>References</summary>
<ul>
<li><a href="https://w4g1.dev/blog/models-are-getting-dumber-on-purpose">Models Are Getting Dumber on Purpose - Walter van der Giessen</a></li>
<li><a href="https://news.ycombinator.com/item?id=49322695">Models Are Getting Dumber on Purpose | Hacker News</a></li>
<li><a href="https://www.alibabacloud.com/blog/602803">Is Your AI Agent Getting Dumber? Alibaba Cloud AnalyticDB Unveils AI Context Engineering - Alibaba Cloud Community</a></li>

</ul>
</details>

**Tags**: `#artificial-intelligence`, `#large-language-models`, `#information-retrieval`, `#tool-use`, `#machine-learning`

---

<a id="item-tech-news-4"></a>
### [Cloudflare silently injects analytics when you switch nameservers](https://news.ycombinator.com/item?id=49322107) ⭐️ 7.0/10

A Cloudflare user reports that after switching nameservers to Cloudflare to enable R2 bucket serving on a custom subdomain, the service silently injected its Web Analytics JavaScript beacon into their HTML-only, JS-free site textlog.cc. The snippet was only removed after visiting the Analytics dashboard, adding the site, and manually disabling the injected code, making it an opt-out rather than opt-in behavior. Commenters confirmed seeing the same static.cloudflareinsights.com/beacon.min.js script with an integrity attribute and data-cf-beacon token, and suggested a Content-Security-Policy meta tag restricting script-src to &\#x27;self&\#x27; and trusted origins as a workaround. One commenter questioned whether injection occurs only when Cloudflare terminates HTTPS as a proxy rather than in DNS-only setups, which the original report does not clarify.

hackernews · stagas · Aug 16, 17:49

**「Background」** Cloudflare&\#x27;s Web Analytics product uses Real User Monitoring \(RUM\) via a JavaScript beacon \(typically loaded from static.cloudflareinsights.com/beacon.min.js\) to collect performance and usage metrics from visitors&\#x27; browsers. When a domain&\#x27;s nameservers are switched to Cloudflare and the site is proxied through Cloudflare \(the &\#x27;orange cloud&\#x27; setting\), Cloudflare can automatically inject this beacon script into HTML responses. This injection has been reported to occur by default, without explicit opt-in, and it only applies to proxied sites; domains set to &\#x27;DNS only&\#x27; mode are not affected because Cloudflare does not handle their traffic.

**「Impact」** Site owners who enable Cloudflare proxy or R2 custom-domain serving after a nameserver switch should inspect their HTML for the injected analytics beacon and disable it under Web Analytics, or use a Content-Security-Policy to block third-party scripts, since the injection is silent and opt-out.

<details><summary>References</summary>
<ul>
<li><a href="https://ideaverse.ai/blog/cloudflare-dns-change-triggered-hidden-analytics-script-injection-mswbamkg">Cloudflare DNS Change Triggered Hidden Analytics Script ...</a></li>
<li><a href="https://developers.cloudflare.com/speed/observatory/rum-beacon/">RUM beacon for Web Analytics · Cloudflare Speed docs</a></li>
<li><a href="https://burgeonlab.com/blog/cloudflare-web-analytics-rum-injected-tracking-beacon-script-into-my-sites/">Cloudflare Auto Injected Tracking Scripts To My Sites</a></li>

</ul>
</details>

**Tags**: `#cloudflare`, `#analytics`, `#privacy`, `#dns`, `#javascript`

---

<a id="item-tech-news-5"></a>
### [Qwen 3.8 27B: Great model, but default xhigh reasoning overdoes it](https://simonwillison.net/2026/Aug/16/qwen-38-27b/) ⭐️ 7.0/10

Alibaba&\#x27;s Qwen lab released Qwen 3.8 27B, an Apache-2.0-licensed 27B-parameter vision-capable LLM with self-reported benchmark gains over both Qwen 3.6 27B and the closed-weight Qwen 3.7-Plus. Running the 17GB Q4\_K\_M quantized build locally, Simon Willison found the default \`reasoning\_effort=xhigh\` causes spectacular overthinking: generating a pelican-on-bicycle SVG took 21 minutes and 22,276 reasoning tokens to produce 3,223 output tokens, while the same prompt with reasoning disabled took 137 seconds and 3,715 tokens. LM Studio&\#x27;s default 8,192-token context limit caused truncation, but using the model&\#x27;s full 262,144-token maximum context resolved that issue; Willison also tested the model on a 128GB M5 Max MacBook Pro, an NVIDIA DGX Spark, and via OpenRouter with the much larger Qwen 3.8 2.4T-A95B. Despite praising the model&\#x27;s quality and noting strong vision results like accurate bounding boxes, he recommends ignoring the default and starting at low or no reasoning levels.

rss · Simon Willison · Aug 16, 22:00

**「Background」** Qwen is Alibaba&\#x27;s family of open-weight large language models. Qwen 3.8 27B is the latest 27-billion-parameter model, released under Apache 2 and with vision capabilities, small enough to run on a laptop. Its model card and Alibaba-reported benchmarks describe gains over its predecessor and a larger closed model, though independent verification is still pending, and its default \`reasoning\_effort\` of &quot;xhigh&quot; can cause overthinking on simple tasks.

**「Impact」** Users running Qwen 3.8 27B locally on consumer hardware should set \`reasoning\_effort\` to \`low\` or disable reasoning, because the default \`xhigh\` mode can make even simple prompts take over 20 minutes and exhaust context windows \(e.g., one SVG prompt used 22,276 reasoning tokens in 21 minutes\), and LM Studio users may also need to raise the 8,192-token default context limit.

<details><summary>References</summary>
<ul>
<li><a href="https://huggingface.co/Qwen/Qwen3.8-27B">Qwen/ Qwen 3 . 8 - 27 B · Hugging Face</a></li>
<li><a href="https://www.implicator.ai/alibaba-publishes-the-qwen3-8-max-benchmarks-it-withheld-two-weeks-ago/">Alibaba Publishes Qwen 3 . 8 -Max Benchmarks , Sets Open-Weights</a></li>

</ul>
</details>

**Tags**: `#LLM`, `#Qwen`, `#Open Source`, `#AI Models`, `#Simon Willison`

---

<a id="item-tech-news-6"></a>
### [US Said to Demand Allies Choose Sides in AI Cooperation via Pax Silica](https://www.neowin.net/news/us-warns-allied-nations-side-with-us-in-the-ai-race-against-china-or-face-the-consequences/) ⭐️ 7.0/10

The US is reportedly asking allies and other countries seeking AI cooperation with Washington to choose sides, warning that those who do not commit could be excluded from US-led AI collaboration. A draft letter prepared by the State Department is said to state that signing the Pax Silica declaration means joining the bloc and forgoing participation in duplicate initiatives that would conflict with it. The report, from Neowin, is based on unconfirmed reports, but the move could reshape international AI alliances and affect companies and governments navigating US-China technology competition. No official confirmation or details of the draft have been released.

telegram · zaihuapd · Aug 16, 02:30

**「Background」** Pax Silica is a United States-led initiative coordinated by the State Department, launched in December 2025 together with the signing of a non-binding declaration by an initial group of partner countries. It focuses on building a secure technology ecosystem spanning critical minerals, energy, advanced manufacturing, semiconductors, AI infrastructure, and logistics, and it implicitly targets reducing reliance on China and countering its dominance in AI and rare earths. The initiative has since expanded at a 2026 summit, with the State Department describing it as a coalition of allied and trusted partners around secure supply chains.

**「Impact」** A reported State Department draft letter, addressed to the 35 signatories of the US AI Opportunity Statement, would require countries to choose between joining Pax Silica and participating in competing AI initiatives or risk exclusion from US-led AI cooperation. Around two dozen countries have already joined, including Japan, Australia, South Korea, and Kazakhstan—which has also joined China&\#x27;s coalition, illustrating the direct conflict some allies face. China&\#x27;s embassy in Washington responded that politicizing trade and technology would stifle global AI advances and serve no one&\#x27;s interests.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Pax_Silica">Pax Silica - Wikipedia</a></li>
<li><a href="https://www.state.gov/pax-silica">Pax Silica - United States Department of State</a></li>
<li><a href="https://www.bhfs.com/insight/state-department-expands-pax-silica-initiative-at-2026-summit/">State Department Expands Pax Silica Initiative at 2026 Summit | Brownstein</a></li>
<li><a href="https://www.channelnewsasia.com/east-asia/us-china-ai-race-pax-silica-waico-6320671">US to tell partners they must pick sides in AI race with China - CNA</a></li>
<li><a href="https://www.gmanetwork.com/news/topstories/world/998694/pax-silica-or-not-us-to-tell-partners-they-must-pick-sides-in-ai-race-with-china/story/">Pax Silica or not: US to tell partners they must pick sides in AI race with China | GMA News Online</a></li>

</ul>
</details>

**Tags**: `#AI policy`, `#geopolitics`, `#Pax Silica`, `#US-China relations`, `#tech industry`

---

## Financial News

<a id="item-finance-news-1"></a>
### [Anthropic Q2 Preliminary Revenue Tops $11.5 Billion, Up 14x Year Over Year](https://www.cnbc.com/2026/08/15/anthropic-revenue-jumps-to-over-11point5-billion-in-q2-report.html) ⭐️ 8.0/10

According to documents cited by Bloomberg and reported by CNBC, Anthropic&\#x27;s preliminary Q2 2026 revenue surpassed $11.5 billion, up more than 14x from $787 million a year earlier and above Q1 2026&\#x27;s $4.73 billion, with adjusted operating profit turning positive. The figures are preliminary and may still change as the company prepares for a possible large IPO this fall.

telegram · zaihuapd · Aug 16, 07:26

**「Background」** Anthropic is an AI safety and research company focused on building reliable, interpretable, and steerable AI systems, best known for its Claude series of large language models. Its revenue in the first quarter of 2026 was $4.73 billion.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Anthropic">Anthropic - Wikipedia</a></li>
<li><a href="https://www.anthropic.com/">Home \\ Anthropic</a></li>

</ul>
</details>

**Tags**: `#Anthropic`, `#revenue`, `#AI`, `#IPO`, `#earnings`

---

## Community Discussion

<a id="discussion-tech-news-1"></a>
### [Anthropic Publishes Claude System Prompts for Developers](https://platform.claude.com/docs/en/release-notes/system-prompts) ⭐️ 8.0/10

Commenters welcomed the transparency: Simon Willison created a git history of prompt diffs to make version changes easier to see. Some expressed skepticism that prompt-enforced common sense reflects model intelligence, and one user raised concerns about HN moderators removing AI-critical stories, while another noted the prompts are only one part of a layered behavior-control system.

[Article](#item-tech-news-1) · [Discussion](https://news.ycombinator.com/item?id=49319556)

---

<a id="discussion-tech-news-3"></a>
### [The Shift Toward Tool-Calling LLMs and Shrinking Parametric Knowledge](https://w4g1.dev/blog/models-are-getting-dumber-on-purpose) ⭐️ 7.0/10

Commenters find the modular-knowledge idea appealing: kennywinker describes plugging in domain-specific weight packs \(9B coding plus 10B SwiftUI, etc.\), while msdz calls the article great and cites Cactus&\#x27;s Needle 14 MB tool-calling model. COAGULOPATH warns the analysis is already outdated because SimpleQA is stale and Gemini 2.5 Pro \(53%\) is sixteen months old, and pulkitsh1234 questions whether reasoning and factual knowledge can be separated at all.

[Article](#item-tech-news-3) · [Discussion](https://news.ycombinator.com/item?id=49322695)

---

<a id="discussion-tech-news-4"></a>
### [Cloudflare silently injects analytics when you switch nameservers](https://news.ycombinator.com/item?id=49322107) ⭐️ 7.0/10

Commenters shared mitigations such as CSP meta tags, linked Cloudflare&\#x27;s blog post on enabling web analytics, quoted the injected beacon script, and debated whether the behavior occurs only when Cloudflare is proxying traffic rather than in DNS-only setups.

[Article](#item-tech-news-4)

---