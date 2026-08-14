---
layout: default
title: "Horizon Summary: 2026-08-14 (EN)"
date: 2026-08-14
lang: en
---

> From 40 items, 20 important content pieces were selected

---

**Technology News**
1. [Qwen 3.8 27B: Strong Local Reasoning in an Open-Weight FP8 Release](#item-tech-news-1) ⭐️ 8.0/10
2. [GLM-5.3 brings frontier coding and emergent cyber capabilities](#item-tech-news-2) ⭐️ 8.0/10
3. [Doom renderer compiled into 21B-parameter transformer without training](#item-tech-news-3) ⭐️ 8.0/10
4. [Xiaohongshu open-sources dots3-note: 280B MoE, 16B active](#item-tech-news-4) ⭐️ 8.0/10
5. [PostgreSQL Fixes High-Severity to\_char Flaw Allowing Code Execution](#item-tech-news-5) ⭐️ 8.0/10
6. [Apple Reportedly Trains China-Specific AI Model With Alibaba](#item-tech-news-6) ⭐️ 8.0/10
7. [Why Opus 5 Feels Worse: Critique Says Models Optimized for Agents, Not Humans](#item-tech-news-7) ⭐️ 7.0/10
8. [RustDesk Adds Unattended Wayland Remote Access](#item-tech-news-8) ⭐️ 7.0/10
9. [Google&\#x27;s homomorphic encryption push: private AI, but with heavy overhead](#item-tech-news-9) ⭐️ 7.0/10
10. [Don&\#x27;t classify. Hallucinate\! Tagging with LLM Hallucinations and Embeddings](#item-tech-news-10) ⭐️ 7.0/10
11. [Open-Source Oncology AI Evaluation Library Focuses on Clinical Thresholds](#item-tech-news-11) ⭐️ 7.0/10
12. [AI Human Tissue Labs Could Make Animal Testing Obsolete](#item-tech-news-12) ⭐️ 7.0/10
13. [Apple Proposes Up to 15% External Purchase Fee in US](#item-tech-news-13) ⭐️ 7.0/10
14. [Judge Orders Google to Ease Third-Party Android App Store Installations](#item-tech-news-14) ⭐️ 7.0/10

**Technology Blog**
1. [Adaptive Verification in vLLM: DSpark confidence-scheduled verification](#item-tech-blog-1) ⭐️ 9.0/10

**Financial News**
1. [Berkshire raises Alphabet stake to top-three holding and returns to net stock buying](#item-finance-news-1) ⭐️ 8.0/10
2. [Goldman benefits from AI infrastructure financing wave](#item-finance-news-2) ⭐️ 8.0/10
3. [Regulators and banks intensify scrutiny of prediction markets](#item-finance-news-3) ⭐️ 7.0/10
4. [Uber and Pony.ai to deploy 2,000 robotaxis in Europe, expand Middle East tie-up](#item-finance-news-4) ⭐️ 7.0/10
5. [CITIC&\#x27;s Trustar Is Near Deal for Alibaba Gaming Unit Lingxi](#item-finance-news-5) ⭐️ 7.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [Qwen 3.8 27B: Strong Local Reasoning in an Open-Weight FP8 Release](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) ⭐️ 8.0/10

Qwen has released Qwen 3.8 27B as an open-weight FP8 model on Hugging Face, and early community testing highlights strong reasoning and local performance. One commenter reports it is only the second local model, after Gemma 4, to pass a private reasoning benchmark, though it needed 5x more tokens and took 12m30s with MTP enabled. Another says the model produced the best pelican SVG they have seen from a laptop model. Compared with Qwen 3.6, the new model&\#x27;s thinking trace is more terse and note-like, and the release still has broken Jinja templates; VRAM usage also appears less efficient than Gemma 4 or Glimmer. The model joins GLM 5.3 and Deepseek as evidence, in one commenter&\#x27;s view, that frontier-model capabilities are becoming commoditized.

hackernews · erdaltoprak · Aug 14, 15:00 · [Discussion](https://news.ycombinator.com/item?id=49299605)

**「Background」** Qwen is Alibaba’s open-weight large language model family, and Qwen 3.8-27B is a 27-billion-parameter release distributed under the Apache-2.0 license. It is a native vision-language model with 262,144 tokens of native context, thinking enabled by default, and a configurable reasoning\_effort setting. The model is available on Hugging Face with quantizations for llama.cpp, Ollama, LM Studio, and other local runtimes, making it relevant to the local-inference community.

**「Impact」** Developers and researchers running open-weight models locally get a strong 27B reasoning option, but need to factor in higher VRAM usage than Gemma 4 or Glimmer and broken Jinja templates when adopting it.

<details><summary>References</summary>
<ul>
<li><a href="https://benchlm.ai/models/qwen3-8-27b">Qwen 3 . 8 - 27 B Benchmarks &amp; Context (August 2026) | BenchLM.ai</a></li>
<li><a href="https://www.youtube.com/watch?v=Fvg8659WQDg">Qwen - 3 . 8 - 27 B Released : Everything you need to Know... - YouTube</a></li>
<li><a href="https://huggingface.co/Qwen/Qwen3.8-27B">Qwen / Qwen 3 . 8 - 27 B · Hugging Face</a></li>

</ul>
</details>

**Tags**: `#qwen`, `#llm`, `#local-inference`, `#open-weight`, `#ai`

---

<a id="item-tech-news-2"></a>
### [GLM-5.3 brings frontier coding and emergent cyber capabilities](https://z.ai/blog/glm-5.3) ⭐️ 8.0/10

Z.AI&\#x27;s GLM-5.3 is a new frontier coding model highlighted for strong performance and emergent cybersecurity capabilities, including vulnerability scanning and red teaming. Early community tests describe successful security-research scenarios, such as finding 0-days in WordPress plugins, achieving RCE, and adapting a Linux 6.8 kernel exploit. Z.AI&\#x27;s CVD portal \(cvd.z.ai\) lists numerous CVEs in popular software, many under embargo. Commenters still place it slightly behind Mythos 5 \(Sol and Fable\) and view it as largely a post-training refinement of GLM 5.2, with weights expected around two weeks later.

hackernews · pella · Aug 14, 05:19 · [Discussion](https://news.ycombinator.com/item?id=49294997)

**「Background」** GLM-5.3 is Z.AI&\#x27;s latest model, released on August 14, 2026, and it shares the same base model as GLM-5.2, with all improvements coming from scaled-up post-training. According to Z.AI, it improves coding performance by 50% over GLM-5.2 on the Z.ai Code Bench and achieves open-source state-of-the-art results on benchmarks including Terminal-Bench 3.0 and Agents’ Last Exam \(CLI\). The release has drawn attention for emergent cybersecurity capabilities, such as vulnerability scanning and red teaming, with an associated coordinated vulnerability disclosure portal \(cvd.z.ai\) publishing CVEs from popular software.

**「Impact」** Early community reports suggest GLM-5.3 can automate substantive offensive-security work, such as vulnerability discovery and exploit adaptation, but these results are anecdotal and benchmark gaps remain.

<details><summary>References</summary>
<ul>
<li><a href="https://docs.z.ai/guides/llm/glm-5.3">GLM-5.3 - Overview - Z.AI DEVELOPER DOCUMENT</a></li>
<li><a href="https://www.unite.ai/z-ai-launches-glm-5-3-with-frontier-coding-and-a-cyber-capability-that-outgrew-its-training/">Z.ai Launches GLM-5.3 With Frontier Coding and a Cyber ...</a></li>

</ul>
</details>

**Tags**: `#AI`, `#LLM`, `#coding`, `#cybersecurity`, `#machine learning`

---

<a id="item-tech-news-3"></a>
### [Doom renderer compiled into 21B-parameter transformer without training](https://www.reddit.com/r/MachineLearning/comments/1voazhm/i_compiled_dooms_renderer_into_a_21bparameter/) ⭐️ 8.0/10

A project ported Doom&\#x27;s rendering algorithm into a 21B-parameter transformer not by training a model but by compiling the computation graph directly into transformer weights. The resulting checkpoint is a standard Hugging Face transformers checkpoint that can be loaded without trust\_remote\_code. A 43-line Python host program feeds a 3,614-token prompt representing scene data and generates 53,747 tokens over about 40 minutes on a B200, producing drawing commands that mechanically render the E1M1 frame. The author notes that original Doom could run at 35 FPS on a 486, while this achieves about 35 frames per day on a B200. The write-up, weights, and source code are publicly available.

reddit · r/MachineLearning · /u/notforrob · Aug 14, 15:50

**「Background」** Transformers are usually trained to perform tasks, but their forward pass can also be seen as executing a fixed computation. The project uses a custom compiler that converts arbitrary computation graphs into transformer parameters, sidestepping gradient-based training. Doom&\#x27;s renderer is a deterministic algorithm, so it can be expressed as such a graph and then embedded in a transformer&\#x27;s weights.

**「Impact」** The released checkpoint and source provide researchers a working example of a non-trained transformer performing a deterministic rendering task, which can be used to study how computation is encoded in transformer parameters. It also serves as a demonstration that standard transformer frameworks can run compiled algorithms without architectural modifications.

**Tags**: `#transformers`, `#compilation`, `#Doom`, `#computation-graph`, `#machine-learning`

---

<a id="item-tech-news-4"></a>
### [Xiaohongshu open-sources dots3-note: 280B MoE, 16B active](https://x.com/dotsstudioai/status/2088083314855018521) ⭐️ 8.0/10

Xiaohongshu&\#x27;s dots lab has open-sourced dots3-note preview, the first open-weight model in the dots3 series. The model has 280B total parameters with only 16B active parameters per inference step, supports a 512K-token context, and processes text, image, video, and audio inputs. It introduces TEMPO, a reinforcement learning method that uses self-critique and test-time value estimation to train long-horizon agents. The weights are available on Hugging Face, alongside two new real-world agent benchmarks, VibeSearchBench and VibeLifeBench. This matters because it demonstrates a very large open-weight MoE model that keeps inference compute relatively low while adding a novel RL recipe for agentic tasks.

telegram · zaihuapd · Aug 14, 08:27

**「Background」** Mixture-of-Experts \(MoE\) models scale to huge parameter counts while keeping inference costs low by activating only a subset of parameters per token. Xiaohongshu&\#x27;s dots lab released dots3-note preview, the first open-weight model in the dots 3 family, with 280B total parameters, 16B activated parameters, and 512K-token context support. The release introduces the TEMPO reinforcement learning method for training long-horizon agents and includes two new real-world agent benchmarks, VibeSearchBench and VibeLifeBench.

**「Impact」** AI/ML developers and researchers can now experiment with a 280B-parameter open-weight MoE that activates only 16B parameters, making it far more feasible to run than a dense model of equivalent size, while the accompanying TEMPO method and benchmarks provide new material for long-horizon agent training and evaluation.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/studio-dots-ai/dots3-note-prev">GitHub - studio-dots-ai/ dots 3 - note -prev: dots 3 note preview · GitHub</a></li>

</ul>
</details>

**Tags**: `#MoE`, `#open weights`, `#reinforcement learning`, `#AI benchmarks`, `#Xiaohongshu`

---

<a id="item-tech-news-5"></a>
### [PostgreSQL Fixes High-Severity to\_char Flaw Allowing Code Execution](https://www.postgresql.org/support/security/CVE-2026-14669/) ⭐️ 8.0/10

PostgreSQL disclosed and fixed high-severity vulnerability CVE-2026-14669, a heap buffer overflow in the to\_char\(timestamptz\) function when handling overly long POSIX timezone abbreviations. An attacker with a low-privileged database account can exploit it to execute arbitrary code with the operating system privileges of the PostgreSQL server process; the CVSS score is 8.8 and exploitation is not unauthenticated. Affected versions are PostgreSQL releases before 18.5, 17.11, 16.15, 15.19, and 14.24. Because 18.5 was not formally released due to a regression, 18-series users should upgrade directly to 18.6, while other users should upgrade to 17.11, 16.15, 15.19, or 14.24 respectively. The minor-version update does not require a database dump or pg\_upgrade; administrators only need to replace the program files and restart the service.

telegram · zaihuapd · Aug 14, 14:35

**「Background」** PostgreSQL&\#x27;s to\_char function converts timestamps into formatted strings, and its timestamptz variant processes POSIX timezone abbreviations as part of formatting. A heap buffer overflow occurs when an unusually long timezone abbreviation is passed, allowing memory corruption that can be leveraged for code execution. Standard PostgreSQL minor releases ship binary fixes and are designed to be applied without database dumps or pg\_upgrade.

**「Impact」** Database administrators running affected PostgreSQL versions should install the fixed minor release promptly, because a low-privileged user can escalate to arbitrary code execution with PostgreSQL service account privileges. No workaround is mentioned, making patching the primary mitigation.

**Tags**: `#PostgreSQL`, `#security`, `#CVE`, `#vulnerability`, `#database`

---

<a id="item-tech-news-6"></a>
### [Apple Reportedly Trains China-Specific AI Model With Alibaba](https://www.reuters.com/business/retail-consumer/apple-trains-its-own-ai-model-china-market-with-alibabas-support-sources-say-2026-08-14/) ⭐️ 8.0/10

Apple is reportedly training a large language model specifically for the Chinese market with support from Alibaba, a shift from its previous reliance on third-party models. Apple Intelligence is expected to launch in China with an iOS update in the coming months. The report, based on anonymous sources, says the Cyberspace Administration of China filed Apple&\#x27;s generative AI service last month. If deployment proceeds, Apple would potentially become the first foreign company approved by Beijing to offer its own AI model in China. The in-house model would give Apple more control over the AI experience in the Chinese market.

telegram · zaihuapd · Aug 14, 14:47

**「Background」** Apple has been developing a China-specific large language model in partnership with Alibaba, a rare cross-border collaboration amid U.S.-China tech tensions. Previously, Apple Intelligence was not available on Chinese iPhones for almost two years because it had not cleared China&\#x27;s regulatory approval for generative AI services. This partnership with Alibaba, which has its own regulatory clearance, gives Apple a legal route into China&\#x27;s tightly controlled generative AI market and could make it the first foreign company approved to offer its own AI model there.

**「Impact」** If approved, Apple would become the first foreign company to offer its own AI model in China, potentially influencing how other multinationals approach Chinese regulatory approval for generative AI.

<details><summary>References</summary>
<ul>
<li><a href="https://aichief.com/news/apple-taps-alibaba-for-china-ai-model-training/">Apple Taps Alibaba for China AI Model Training</a></li>
<li><a href="https://www.investing.com/news/stock-market-news/apple-trains-own-ai-model-for-china-with-alibaba-support-reuters-reports-4859693">Apple trains own AI model for China with Alibaba support, Reuters...</a></li>
<li><a href="https://www.remio.ai/post/alibaba-apple-deal-clears-china-but-the-iphone-ai-is-still-unproven">Alibaba Apple Deal Clears China , but the iPhone AI Is Still Unproven</a></li>

</ul>
</details>

**Tags**: `#Apple`, `#AI models`, `#China regulation`, `#Alibaba`, `#Generative AI`

---

<a id="item-tech-news-7"></a>
### [Why Opus 5 Feels Worse: Critique Says Models Optimized for Agents, Not Humans](https://mun-logadan.github.io/why-does-opus-5-feel-worse/) ⭐️ 7.0/10

A developer essay argues that Anthropic&\#x27;s Opus 5 writes in an elliptical, abstract style because post-training is increasingly optimized for agent-to-agent communication rather than human readability. The critique points to sentences that orbit a point, inanimate nouns as subjects, and verb choices that let the real action land like a surprise at the end. Community comments echo the hypothesis, with users reporting Opus 5 writes less well than Sonnet, follows instructions poorly, and exhausts them by repeatedly &\#x27;confessing&\#x27; mistakes. Some users have switched to OpenAI models for continued work, suggesting the perceived readability problem has practical consequences for human developers.

hackernews · numeri · Aug 14, 10:12 · [Discussion](https://news.ycombinator.com/item?id=49296740)

**「Background」** Claude Opus 5 is Anthropic&\#x27;s most capable generally available model, released in mid-2026 and positioned for complex agentic coding and long-horizon enterprise tasks, with safeguards similar to Opus 4.8. Commenters contrast its communication style with OpenAI&\#x27;s GPT-5.6 Sol, a flagship variant in the GPT-5.6 family released on July 9, 2026, which OpenAI previewed with stronger coding and safety capabilities.

**「Impact」** For developers who rely on Opus 5 for iterative coding and instruction-following, the less human-readable style and procedural deviations can reduce trust and productivity, and may push some users toward competing models.

<details><summary>References</summary>
<ul>
<li><a href="https://www.anthropic.com/news/claude-opus-5">Introducing Claude Opus 5 \ Anthropic</a></li>
<li><a href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5">Prompting Claude Opus 5 - Claude Platform Docs</a></li>
<li><a href="https://en.wikipedia.org/wiki/GPT-5.6">GPT-5.6 - Wikipedia</a></li>
<li><a href="https://openai.com/index/previewing-gpt-5-6-sol/">Previewing GPT-5.6 Sol: a next-generation model | OpenAI</a></li>

</ul>
</details>

**Tags**: `#AI`, `#language models`, `#user experience`, `#agent communication`, `#machine learning`

---

<a id="item-tech-news-8"></a>
### [RustDesk Adds Unattended Wayland Remote Access](https://rustdesk.com/blog/unattended-remote-access-wayland/) ⭐️ 7.0/10

RustDesk announced support for true unattended remote access on Wayland, improving remote desktop functionality on modern Linux systems that use the Wayland display protocol instead of X11. Unattended access allows a user to connect to and control a machine without a person physically present at the host to accept the session, which was previously a limitation on Wayland because the protocol restricts screen capture and input injection. This update is significant for RustDesk users who rely on remote support and administration of Wayland-based machines, as it removes a key friction point for self-hosted and open-source remote desktop deployments. The announcement does not include specific version numbers or performance benchmarks, and the source content provided does not elaborate on additional technical details.

hackernews · rustdesk · Aug 14, 16:12 · [Discussion](https://news.ycombinator.com/item?id=49300759)

**「Background」** Wayland is a modern Linux display server protocol whose security model restricts screen capture and synthetic input, which is why remote desktop tools on Wayland typically require an interactive user to approve each connection or rely on workarounds such as enabling display manager autologin. RustDesk, an open-source remote desktop application, recently announced support for true unattended access on Wayland, so a host machine can be controlled remotely without needing someone at the host to approve every session. This addresses a long-standing limitation on modern Linux; as one comparison noted, even VNC does not support such unattended access by default and requires extra setup like port forwarding or an SSH tunnel.

**「Impact」** RustDesk users on Wayland-based Linux desktops can now perform unattended remote sessions, making remote administration and support more practical without needing a local user to approve each connection. However, the community discussion highlights that self-hosted RustDesk still lacks encrypted connections, a limitation that remains for users who prioritize security in their deployments.

<details><summary>References</summary>
<ul>
<li><a href="https://rustdesk.com/blog/unattended-remote-access-wayland/">Unattended Remote Access on Wayland with RustDesk — RustDesk</a></li>
<li><a href="https://www.andotech.net/taming-rustdesk-on-wayland-how-to-fix-screensharing-and-input-issues/">Fix RustDesk on Wayland: Screen &amp; Input – AndoTech.net</a></li>
<li><a href="https://news.ycombinator.com/item?id=49300759">RustDesk now supports true unattended remote access on Wayland | Hacker News</a></li>

</ul>
</details>

**Tags**: `#remote-desktop`, `#Wayland`, `#RustDesk`, `#open-source`, `#Linux`

---

<a id="item-tech-news-9"></a>
### [Google&\#x27;s homomorphic encryption push: private AI, but with heavy overhead](https://blog.google/security/how-google-is-making-private-ai-practical-with-homomorphic-encryption/) ⭐️ 7.0/10

Google has announced progress in homomorphic encryption intended to make privacy-preserving AI more practical, according to the company&\#x27;s blog post. The technology could allow machine learning models to operate on encrypted data without exposing the underlying information, a step toward addressing privacy concerns in AI. However, the announcement is short on specific performance figures, and community commenters caution that homomorphic encryption still carries roughly a thousandfold overhead on inference tasks, making it commercially challenging. The effort reflects a broader push to combine encryption with machine learning, but doubts remain about both the computational costs and whether Google is a trustworthy steward of user data.

hackernews · u1hcw9nx · Aug 14, 15:43 · [Discussion](https://news.ycombinator.com/item?id=49300314)

**「Background」** Homomorphic encryption \(HE\) allows computations to be performed on encrypted data without decrypting it, so an AI model can run inference on user inputs while keeping them private. Fully homomorphic encryption \(FHE\) supports both addition and multiplication on encrypted data, but historically suffers from high computational overhead. Google has been working to make HE practical for AI: in 2023 it released a TensorFlow-to-FHE compiler, and more recently it introduced HEIR, an open-source compiler toolchain that can convert pre-trained AI models to operate on encrypted data.

**「Impact」** For AI practitioners and privacy-conscious users, Google&\#x27;s work signals a potential future in which machine learning can run on encrypted data, but the current computational overhead—estimated by commenters at around 10^3 on inference—keeps the approach from being commercially competitive for most practical use cases.

<details><summary>References</summary>
<ul>
<li><a href="https://blog.google/security/how-google-is-making-private-ai-practical-with-homomorphic-encryption/">How Google is Making Private AI Practical with Homomorphic Encryption</a></li>
<li><a href="https://medium.com/google-cloud/homomorphic-encryption-47c353aed635">Homomorphic Encryption for AI: The Ultimate Guide to Secure, Confidential, and Encrypted Data in Motion | Google Cloud - Community</a></li>
<li><a href="https://developers.googleblog.com/2023/08/expanding-our-fully-homomorphic-encryption-offering.html?m=1">Expanding our Fully Homomorphic Encryption offering - Google Developers Blog</a></li>

</ul>
</details>

**Tags**: `#homomorphic encryption`, `#privacy-preserving ML`, `#Google`, `#AI security`, `#machine learning`

---

<a id="item-tech-news-10"></a>
### [Don&\#x27;t classify. Hallucinate\! Tagging with LLM Hallucinations and Embeddings](https://simonwillison.net/2026/Aug/14/dont-classify-hallucinate/) ⭐️ 7.0/10

Simon Willison highlights Doug Turnbull&\#x27;s technique for tagging content with large controlled vocabularies: instead of asking an LLM to pick from thousands of existing tags, let it hallucinate novel candidate tags and then use vector embeddings to match those candidates to the closest real tags in the corpus. Willison notes his own blog has 1,856 tags, likely too many to feed to an LLM in a single classification prompt. Turnbull&\#x27;s example prompt asks the model to create novel furniture, home goods, or hardware classifications and includes sample tag shapes, such as &quot;Furniture / Living Room Furniture / Coffee Tables &amp; End Tables / Coffee Tables,&quot; to guide the guesses. This approach solves the problem of semantic matching between imagined and concrete tags, making it practical for tagging at scale.

rss · Simon Willison · Aug 14, 21:54

**「Background」** Content tagging typically requires either manual curation or classifying items against a fixed set of known tags, but large tag vocabularies can exceed an LLM&\#x27;s context window or make classification unwieldy. Vector embeddings represent text as high-dimensional numerical vectors, allowing semantic similarity to be measured through distances between embeddings, so an imagined tag can be mapped to the most contextually similar existing tag.

**「Impact」** Bloggers, content managers, and developers working with large tag taxonomies can use this method to automatically tag legacy or new content without fitting the entire vocabulary into an LLM prompt, as Simon Willison intends for his own older blog posts.

**Tags**: `#LLM`, `#vector embeddings`, `#content tagging`, `#AI techniques`, `#machine learning`

---

<a id="item-tech-news-11"></a>
### [Open-Source Oncology AI Evaluation Library Focuses on Clinical Thresholds](https://www.reddit.com/r/MachineLearning/comments/1vod2c8/opensource_python_library_nocode_web_dashboard/) ⭐️ 7.0/10

The project introduces oncothresh, a dependency-light Python library \(numpy/scipy/scikit-learn/pydantic\) for evaluating oncology AI models at predefined clinical cutoffs rather than using global metrics like AUC, ICC, or MAE. It computes sensitivity/specificity/PPV/NPV at the threshold, bootstrap confidence intervals, threshold-sensitivity curves, boundary-weighted calibration, decision-curve net benefit, and number-needed-to-test. A companion no-code web dashboard, oncothresh-web, lets users upload a CSV of predictions and labels, pick a threshold, and view charts or download a PDF report, running locally via Docker Compose with no cloud dependency. The author positions it against pathology benchmarks such as PathBench and PathBench-MIL, which evaluate foundation models globally but do not assess predefined clinical thresholds with uncertainty quantification. The project is at v0.1 and open to feedback on use cases, edge cases in the decision-curve and calibration math, and API design.

reddit · r/MachineLearning · /u/adom2989 · Aug 14, 17:06

**「Background」** Oncology AI models for pathology often produce continuous scores—for example tumor cellularity, Ki-67, TMB, or PD-L1—that are collapsed into binary clinical decisions using fixed cutoffs. Existing pathology foundation-model benchmarks such as PathBench evaluate models globally across multiple tasks rather than at those predefined decision thresholds. This leaves a need for threshold-specific evaluation with uncertainty quantification, which the presented library and dashboard aim to fill.

**「Impact」** Oncology AI developers and computational pathologists can now evaluate cutoff-based models, such as those for tumor cellularity, Ki-67, TMB, and PD-L1 scoring, at the exact clinical decision threshold with uncertainty estimates using an open-source tool. Because it is v0.1, users should expect early-stage API and edge-case issues.

<details><summary>References</summary>
<ul>
<li><a href="https://birkhoffkiki.github.io/PathBench/">PathBench: A compensive benchmark for pathology foundation models with real practical data from the world.</a></li>
<li><a href="https://arxiv.org/abs/2505.20202">[2505.20202] PathBench: A comprehensive comparison benchmark for pathology foundation models towards precision oncology</a></li>

</ul>
</details>

**Tags**: `#machine learning`, `#healthcare AI`, `#model evaluation`, `#open source`, `#oncology`

---

<a id="item-tech-news-12"></a>
### [AI Human Tissue Labs Could Make Animal Testing Obsolete](https://www.fastcompany.com/91589344/the-worlds-largest-biological-datacenter-could-help-make-animal-testing-obsolete) ⭐️ 7.0/10

Vivodyne is operating 12 closet-sized robotic &quot;hive&quot; laboratories south of San Francisco that cultivate human tissues and use AI to design experiments for better prediction of drug efficacy and safety. The system can run controlled tests on over 3 million human tissue samples per year, roughly double the capacity of all U.S. clinical trials combined. This scale is significant because about 90% of clinical trials still fail after passing animal tests, suggesting that human-tissue-based testing could reduce reliance on animal models. The company&\#x27;s approach combines automated tissue culture with AI-driven experimental design, though the reported capabilities have not been independently verified.

telegram · zaihuapd · Aug 14, 01:48

**「Background」** Vivodyne is a University of Pennsylvania-spun-out bio-AI company that aims to make human biology computable by growing realistic human tissues outside the body for therapeutic testing. Its HIVE robotic laboratories automate controlled experiments on living human tissue, with a newly announced 12-lab network reported to support roughly 3.1 million tissue experiments per year—about twice the volume of all U.S. clinical trials. This context matters because fewer than one in ten drug candidates typically succeeds in human trials after animal testing; AI-designed, human-tissue-based experiments are intended to improve early prediction of efficacy and safety.

**「Impact」** If the stated capacity holds, drug developers could gain a higher-throughput, human-relevant testing platform that may accelerate candidate screening and help reduce late-stage clinical trial failures tied to poor efficacy or safety predictions.

<details><summary>References</summary>
<ul>
<li><a href="https://www.vivodyne.com/">Vivodyne | Make biology computable</a></li>
<li><a href="https://finance.yahoo.com/healthcare/articles/vivodyne-launches-world-largest-human-130000478.html?fr=sycsrp_catchall">Vivodyne Launches the World’s Largest Human Biological ...</a></li>
<li><a href="https://biobuzz.io/news/penn-born-vivodyne-launches-what-it-calls-the-worlds-largest-human-biological-datacenter/">Penn-Born Vivodyne Launches What It Calls the World&#x27;s Largest ...</a></li>

</ul>
</details>

**Tags**: `#AI`, `#biotech`, `#robotics`, `#drug testing`, `#lab automation`

---

<a id="item-tech-news-13"></a>
### [Apple Proposes Up to 15% External Purchase Fee in US](https://9to5mac.com/2026/08/13/apple-proposes-commissions-of-up-to-15-for-off-app-store-purchases-in-the-us/) ⭐️ 7.0/10

Apple has submitted a proposal to the court for commissions on external purchases made outside the US App Store, with rates capped at 15%. Standard apps would pay 15%, video and news partnership programs and subscription renewals would pay 10%, and apps in the Small Business Program would pay 5%. The US Supreme Court previously rejected Apple&\#x27;s request to pause lower-court proceedings on fee rates. Epic Games will have an opportunity to respond, and Apple is expected to file written arguments with the Supreme Court by September 14.

telegram · zaihuapd · Aug 14, 02:33

**「Background」** The proposal stems from the ongoing Epic Games v. Apple antitrust litigation, in which courts have ordered Apple to allow developers to link out to external payment methods. The case has been complicated by disputes over what commission Apple can charge for those external purchases, with Apple now proposing a specific fee structure.

**「Impact」** US App Store developers who use external purchase links would face commissions of up to 15%, with lower rates for subscription renewals and small business program participants, though the final fee structure remains subject to further court proceedings.

**Tags**: `#Apple`, `#App Store`, `#developer fees`, `#Epic Games`, `#regulation`

---

<a id="item-tech-news-14"></a>
### [Judge Orders Google to Ease Third-Party Android App Store Installations](https://www.androidauthority.com/google-play-store-remove-third-party-app-store-friction-3698697/) ⭐️ 7.0/10

US District Judge James Donato ordered Google to remove extra steps and warning dialogs from the Play Store that appear when users install competing Android app stores, requiring the change within one week so third-party marketplaces install as directly as normal Android apps. The court said multi-step flows—such as tapping &quot;view&quot; before &quot;install&quot;—were deliberately created anticompetitive friction to discourage ordinary users. The order comes from Epic Games v Google, after a jury found Google held an illegal monopoly in Android app distribution.

telegram · zaihuapd · Aug 14, 09:55

**「Background」** In Epic&\#x27;s antitrust lawsuit, a jury ruled Google unlawfully monopolized Android app distribution and in-app payment processing. Google&\#x27;s Play Store long warned users about installing third-party stores and required extra confirmation steps, which the court now says were anticompetitive rather than legitimate security measures.

**「Impact」** Within one week, Google must alter Play Store so users can install third-party app stores with the same directness as normal Android apps, removing the targeted warnings and extra steps. This gives rival app stores and developers a more level distribution path on Android.

**Tags**: `#Google`, `#Android`, `#antitrust`, `#app stores`, `#regulation`

---

## Technology Blog

<a id="item-tech-blog-1"></a>
### [Adaptive Verification in vLLM: DSpark confidence-scheduled verification](https://vllm.ai/blog/2026-08-14-dspark-adaptive-verification) ⭐️ 9.0/10

rss · vLLM Blog · Aug 14, 00:00

**「Background」** Speculative decoding trades extra compute \(draft tokens\) for fewer decode steps; the trade is nearly free at batch size one, but at high concurrency every rejected draft token consumes compute that could serve real tokens, so a static draft length stops being optimal.

**「Solution」** The post describes DSpark&\#x27;s adaptive verification, landed in vLLM as enable\_adaptive\_verification. A learned confidence head scores each drafted token; the scheduler converts scores into survival probabilities and, every step, picks a verification budget B by maximizing expected accepted tokens per unit step time over profiled cost tables \(verification cost by token count, drafter cost by request count\). Because survival decreases along each draft, the best B slots form contiguous prefixes across requests; slot allocation occurs on GPU against current confidence values, while the budget itself is computed on CPU from one-step-old double-buffered data. Variable-sized verification is supported by varlen decode CUDA graphs; the cost model is profiled at startup, made monotonic to smooth noise, and captures cudagraph padding. Benchmarks on DeepSeek-V4-Pro-0813 across concurrency 1–256 show adaptive verification stays on the Pareto frontier, acting like a long block at low concurrency and a short block at high concurrency.

**「Takeaway」** The core lesson is that confidence-scheduled verification removes per-deployment tuning and lets speculative decoding remain effective as load changes, making it a practical on-by-default improvement for vLLM and other speculative decoding systems.

**Tags**: `#speculative decoding`, `#vLLM`, `#adaptive verification`, `#CUDA graphs`, `#cost model`

---

## Financial News

<a id="item-finance-news-1"></a>
### [Berkshire raises Alphabet stake to top-three holding and returns to net stock buying](https://www.cnbc.com/2026/08/14/berkshire-hathaway-boosts-alphabet-to-a-top-three-holding-ups-delta-and-housing-bets.html) ⭐️ 8.0/10

Berkshire Hathaway disclosed in a regulatory filing that it raised its Alphabet stake by 83% in the second quarter, to 106 million shares worth $37.9 billion, making Alphabet its third-largest U.S.-listed holding. In the same quarter it made nearly $20 billion in net stock purchases, ending 14 straight quarters of net selling.

rss · CNBC Finance · Aug 14, 21:06

**「Background」** The Alphabet increase largely reflects a $10 billion private stock purchase announced in early June, when Alphabet sought capital for its AI buildout. Berkshire also increased its Delta Air Lines stake by 44% and boosted holdings in homebuilders including Lennar and D.R. Horton.

**Tags**: `#Berkshire Hathaway`, `#Alphabet`, `#Delta Air Lines`, `#Housing`, `#Investment Filings`

---

<a id="item-finance-news-2"></a>
### [Goldman benefits from AI infrastructure financing wave](https://www.cnbc.com/2026/08/14/goldmans-latest-cash-cow-is-all-about-funding-the-ai-infrastructure-boom.html) ⭐️ 8.0/10

Goldman Sachs is part of a group planning to raise $500 billion to help Nvidia customers buy AI infrastructure, and it also helped manage Intel’s $20 billion stock offering, according to CNBC.

rss · CNBC Finance · Aug 14, 20:05

**「Background」** Banks like Goldman earn fees in such offerings by buying new shares at a discount and reselling them to investors, and these deals follow Alphabet’s June stock sale—originally $80 billion, later $85 billion—which Goldman also helped manage.

**「Impact」** If the Nvidia plan goes ahead, analysts say data-center assets could become tradeable securities, creating unanticipated risks for the banks and investors involved.

**Tags**: `#AI infrastructure`, `#Goldman Sachs`, `#capital raising`, `#equity underwriting`, `#semiconductors`

---

<a id="item-finance-news-3"></a>
### [Regulators and banks intensify scrutiny of prediction markets](https://www.cnbc.com/2026/08/14/prediction-markets-scrutiny-mounts-from-regulators-and-banks.html) ⭐️ 7.0/10

The CFTC is conducting an internal review of &\#x27;mention markets&\#x27; on prediction platforms, and a Washington state judge has blocked several Kalshi markets from operating there. Separately, The Financial Times reported that JPMorgan cut off Polymarket, though Polymarket says its relationship with the bank continues.

rss · CNBC Finance · Aug 14, 19:21

**「Background」** Prediction markets let people bet on events such as election results or whether specific words appear in a speech or call; the CFTC regulates U.S. platforms like Kalshi. The review follows criticism that mention markets can be easily manipulated, and it comes as the agency is defending its exclusive jurisdiction over event contracts in state-level gambling disputes.

**「Impact」** Kalshi users in Washington state can no longer trade mention, sports, election, and other high-volume markets after the court order, and similar restrictions are already in place in Michigan, Nevada, and Massachusetts.

**Tags**: `#CFTC`, `#prediction markets`, `#Kalshi`, `#regulation`, `#Polymarket`

---

<a id="item-finance-news-4"></a>
### [Uber and Pony.ai to deploy 2,000 robotaxis in Europe, expand Middle East tie-up](https://www.cnbc.com/2026/08/14/uber-partners-with-chinas-ponyai-for-2000-robotaxis-in-europe.html) ⭐️ 7.0/10

Uber and Pony.ai announced Friday that they plan to deploy 2,000 of Pony.ai&\#x27;s self-driving taxis across Europe and expand their robotaxi partnership to the Middle East, extending an existing commercial service launched in Zagreb in late March.

rss · CNBC Finance · Aug 14, 01:02

**「Background」** The companies did not name the additional four European cities or provide an exact timeframe; they described the Zagreb launch as Europe&\#x27;s first commercial robotaxi service.

**「Impact」** The planned fleet would still be smaller than Alphabet-backed Waymo&\#x27;s roughly 5,000 vehicles, mostly in the U.S., while Chinese rivals Baidu Apollo Go and WeRide are also stepping up robotaxi plans in Europe.

**Tags**: `#autonomous vehicles`, `#robotaxis`, `#Uber`, `#Pony.ai`, `#global expansion`

---

<a id="item-finance-news-5"></a>
### [CITIC&\#x27;s Trustar Is Near Deal for Alibaba Gaming Unit Lingxi](https://www.bloomberg.com/news/articles/2026-08-14/trustar-is-said-to-near-1-5-billion-deal-for-alibaba-gaming-arm) ⭐️ 7.0/10

Bloomberg reported that CITIC&\#x27;s private-equity arm Trustar Capital is close to acquiring Alibaba&\#x27;s gaming unit Lingxi, with a valuation that could exceed $1.5 billion. Negotiations are still ongoing and no final decision has been made.

telegram · zaihuapd · Aug 14, 10:24

**「Background」** Alibaba, under CEO Wu Yongming, has been divesting non-core assets to sharpen its focus on artificial intelligence and cloud computing.

**Tags**: `#M&amp;A`, `#private equity`, `#Alibaba`, `#gaming`, `#divestiture`

---

## Community Discussion

<a id="discussion-tech-news-1"></a>
### [Qwen 3.8 27B: Strong Local Reasoning in an Open-Weight FP8 Release](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) ⭐️ 8.0/10

Commenters are broadly enthusiastic: one says it is only the second local model, after Gemma 4, to solve a private reasoning benchmark, and another praises its SVG output on a laptop. Concerns include its less efficient VRAM usage, the shift to terse note-form thinking traces compared with Qwen 3.6, and ongoing Jinja template issues.

[Article](#item-tech-news-1) · [Discussion](https://news.ycombinator.com/item?id=49299605)

---

<a id="discussion-tech-news-2"></a>
### [GLM-5.3 brings frontier coding and emergent cyber capabilities](https://z.ai/blog/glm-5.3) ⭐️ 8.0/10

Commenters are impressed by GLM-5.3&\#x27;s autonomous red-team execution and Z.AI&\#x27;s vulnerability-disclosure portal, but some caution that it is still slightly behind Sol and Fable and appears to be a post-training refinement of GLM 5.2 rather than a fundamentally new model. One commenter also praised Z.AI&\#x27;s blog writing as researcher-like rather than typical marketing hype.

[Article](#item-tech-news-2) · [Discussion](https://news.ycombinator.com/item?id=49294997)

---

<a id="discussion-tech-news-7"></a>
### [Why Opus 5 Feels Worse: Critique Says Models Optimized for Agents, Not Humans](https://mun-logadan.github.io/why-does-opus-5-feel-worse/) ⭐️ 7.0/10

Commenters largely agree with the agent-centric explanation, sharing experiences of burning through credits and abandoning Opus 5 for OpenAI&\#x27;s Sol, while others note it deviates from procedures and takes liberties with specified processes.

[Article](#item-tech-news-7) · [Discussion](https://news.ycombinator.com/item?id=49296740)

---

<a id="discussion-tech-news-8"></a>
### [RustDesk Adds Unattended Wayland Remote Access](https://rustdesk.com/blog/unattended-remote-access-wayland/) ⭐️ 7.0/10

Commenters generally welcomed the fix, with one noting they encountered the Wayland limitation just days earlier, while another pointed out that self-hosted RustDesk still does not support encrypted connections, referencing GitHub issue \#3714. Several users also asked how RustDesk compares to VNC or to using Remmina over SSH and Tailscale, though no clear consensus on those comparisons emerged in the discussion.

[Article](#item-tech-news-8) · [Discussion](https://news.ycombinator.com/item?id=49300759)

---

<a id="discussion-tech-news-9"></a>
### [Google&\#x27;s homomorphic encryption push: private AI, but with heavy overhead](https://blog.google/security/how-google-is-making-private-ai-practical-with-homomorphic-encryption/) ⭐️ 7.0/10

Commenters are skeptical about near-term practicality, with one calling homomorphic encryption&\#x27;s overhead on inference &quot;very high&quot; and &quot;not very commercially viable,&quot; while another points to over a 1000x resource increase and argues the most private AI is one running on personal hardware. Trust in Google also emerges as a concern, as some users contend the company actively makes it harder for people to use anonymizing or privacy-protecting software.

[Article](#item-tech-news-9) · [Discussion](https://news.ycombinator.com/item?id=49300314)

---