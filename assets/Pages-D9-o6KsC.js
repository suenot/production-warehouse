const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/line-boil-pt6pv0dX.js","assets/index-CnAvGx8A.js","assets/index-CL2zal7t.css","assets/stage-CE1ihWU7.js","assets/pencil-D60jzd_7.js","assets/seed-BxSPU70O.js","assets/hatching-B9wq1MoW.js","assets/construction-lines-BxFGuODI.js","assets/timing-plan-nQsgWUtm.js","assets/style-dna-BZSfiJDC.js","assets/render-inspect-Ba4YT1Tt.js","assets/error-log-CWdra0Ud.js","assets/assemble-BaNv8Dd_.js","assets/layers-QNGLpYTG.js","assets/sentence-shot-CxnsBrmU.js","assets/readout-BPiii4dR.js","assets/seekable-frame-BBnS7F--.js","assets/closed-form-springs-DcJz7vPQ.js","assets/curves-D7UojNYe.js","assets/beat-grid-bdBOyTzS.js","assets/seamless-loop-CZH49O02.js","assets/subframe-blur-CnYlq5ac.js","assets/one-shape-j_enWC4X.js","assets/kinetic-type-BwxytY6S.js","assets/mask-reveal-Dh62h6rE.js","assets/misregistration-BKBexzqq.js","assets/storyboard-first-B0wqsO8q.js","assets/reference-by-link-BRGXetYm.js","assets/feedback-passes-_iECxzov.js","assets/locked-message-B5Rprkoe.js","assets/cadence-xMe3D3rh.js","assets/harmonic-morph-BXiZRFF7.js","assets/harmonics-CtUtDU_N.js","assets/harmonic-type-Bffzz2Qm.js","assets/shape-to-sound-8G42nn5C.js","assets/independent-clocks-DAlKAAl9.js","assets/camera-curves-_cyETXlz.js","assets/tilt-shift-v1XCY4Kp.js","assets/blender-frames-BFrrFg6U.js","assets/motion-defaults-CoZG-kja.js","assets/importance-budget-D5Koxe9h.js","assets/speed-ramp-B8tkVlEs.js","assets/downbeat-cuts-Bu-V2nPp.js","assets/broll-treatments-D-R2eocI.js","assets/lower-third-ChptcZA2.js","assets/hand-draw-on-Dvor8R54.js","assets/progressive-diagram-B3rJPVhI.js","assets/oklch-gradients-HHINLWze.js","assets/parallax-layers-Ca9r4DPQ.js","assets/reduced-motion-tiers-vl6rFQ8l.js","assets/vertical-safe-box-BQnyx8W_.js"])))=>i.map(i=>d[i]);
import{_ as e,i as h,c as s,S as L,E,s as m,a as g,b as _,t as l,l as z,d as D,e as k,F as b,f as O,M as w,g as I}from"./index-CnAvGx8A.js";const P=[{id:"ai-access",route:"#/ai",title:"Use the warehouse from an AI: MCP and JSON",label:"For AI",order:10,summary:"Connect an AI assistant to the catalog of motion videos and prompts and to the technique articles through a read-only MCP server, or read the same data as plain JSON.",blocks:[{t:"html",html:`<h1>Use the warehouse from an AI</h1>
<p>An assistant can search the catalog (about 800 motion videos with the prompts that made them) and read the technique articles without opening this site. Everything is read-only and public: no sign-in, nothing to install for the remote server.</p>
<h2>Connect with MCP</h2>
<p>The server speaks MCP over HTTP at one address:</p>
<pre><code>https://production-warehouse.suenot.com/mcp
</code></pre>
<p>In Claude Code:</p>
<pre><code class="language-bash">claude mcp add --transport http warehouse https://production-warehouse.suenot.com/mcp
</code></pre>
<p>Other clients that accept a server URL take the same address. A local server over stdio is also available (see below).</p>
<h2>What it can do</h2>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Tool</th>
<th>Use it to</th>
</tr>
</thead>
<tbody><tr>
<td><code>search_videos</code></td>
<td>Find videos by words, category, tag, source or whether a remake exists. Returns short summaries and pages through the results</td>
</tr>
<tr>
<td><code>get_video</code></td>
<td>Get one video: the full generation prompt, author, tags, and links to the original, the remake, the poster and the how and style documents</td>
</tr>
<tr>
<td><code>get_video_doc</code></td>
<td>Read the how or style document of a video as markdown</td>
</tr>
<tr>
<td><code>list_filters</code></td>
<td>List the categories, sources and tags, with counts</td>
</tr>
<tr>
<td><code>list_techniques</code></td>
<td>List the technique articles, the hub and the skills list</td>
</tr>
<tr>
<td><code>get_technique</code></td>
<td>Read one of those pages as markdown</td>
</tr>
<tr>
<td><code>search_techniques</code></td>
<td>Search the articles by words and get a snippet around each hit</td>
</tr>
</tbody></table></div>
<p>Questions that work well: &quot;Find three.js shader videos and show me the prompt of the best one&quot;, &quot;Which technique explains a speed ramp, and what are its numbers?&quot;, &quot;List the categories in the video catalog&quot;.</p>
<h2>Plain JSON</h2>
<p>If you would rather fetch the data yourself:</p>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Address</th>
<th>Contains</th>
</tr>
</thead>
<tbody><tr>
<td><a href="https://production-warehouse.suenot.com/items.json" target="_blank" rel="noreferrer">/items.json</a></td>
<td>The catalog: one object per video with title, author, category, tags, the prompt and links to the videos and poster</td>
</tr>
<tr>
<td><a href="https://production-warehouse.suenot.com/techniques.json" target="_blank" rel="noreferrer">/techniques.json</a></td>
<td>Every technique article, the hub and the skills list, with a markdown body</td>
</tr>
<tr>
<td><a href="https://production-warehouse.suenot.com/llms.txt" target="_blank" rel="noreferrer">/llms.txt</a></td>
<td>A short guide for AI clients with these addresses and the page list</td>
</tr>
</tbody></table></div>
<p>A quick check from a terminal:</p>
<pre><code class="language-bash">curl -s https://production-warehouse.suenot.com/mcp \\
  -H &#39;content-type: application/json&#39; \\
  -d &#39;{&quot;jsonrpc&quot;:&quot;2.0&quot;,&quot;id&quot;:1,&quot;method&quot;:&quot;tools/call&quot;,&quot;params&quot;:{&quot;name&quot;:&quot;search_videos&quot;,&quot;arguments&quot;:{&quot;query&quot;:&quot;shader&quot;,&quot;limit&quot;:3}}}&#39;
</code></pre>
<h2>Run it locally</h2>
<p>The same tools run as a local stdio server from the <code>mcp</code> folder of the <a href="https://github.com/suenot/mvw-viewer/tree/main/mcp" target="_blank" rel="noreferrer">viewer repository</a>. It needs Node 18 or newer and can read your own copy of the warehouse instead of the public data.</p>
<pre><code class="language-bash">claude mcp add warehouse -- node /path/to/mvw-viewer/mcp/stdio.mjs
</code></pre>
<h2>Limits</h2>
<ul>
<li>Read-only: no tool changes data.</li>
<li>A request body is capped at 100 KB and a list at 50 rows.</li>
<li>Video files are not returned, only links to them.</li>
</ul>
`}]},{id:"motion-skills-list",route:"#/skills",title:"Motion skills: where to extract the techniques",label:"Motion skills list",order:9,summary:"The skills and repositories behind the motion techniques, with licences, what each one yields and the verdict from our trial, plus a procedure for extracting a technique safely.",blocks:[{t:"html",html:`<h1>Motion skills: where to extract the techniques</h1>
<p><span class="dead">Video creation studies</span> · <a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>A skill is a prompt with taste. Our <span class="dead">skill trial</span> found that no third-party skill beat a control built with none, and that every skill collided with the owner&#39;s rules at least once. What is worth taking is a single technique together with its evidence, and this page lists where each technique can be taken from.</p>
<p>Licences below were checked on the dates in the trial; they can change, so check the repository before copying anything.</p>
`},{t:"steps",caption:"How to extract a technique from a skill without installing it.",steps:[{title:"Read as data",text:"Run none of its scripts or installer"},{title:"Check the licence",text:"Reading is fine; copying needs a grant"},{title:"Write it down",text:"One technique, one article, one demo"},{title:"List conflicts",text:"Against the owner's rules and gates"},{title:"Test with a control",text:"One scene, built with and without it"}]},{t:"html",html:`<h2>Skills and repositories</h2>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Source</th>
<th>Repository</th>
<th>Licence</th>
<th>Techniques it yields</th>
<th>Verdict</th>
</tr>
</thead>
<tbody><tr>
<td>HyperFrames</td>
<td><a href="https://github.com/heygen-com/hyperframes" target="_blank" rel="noreferrer">heygen-com/hyperframes</a></td>
<td>Not recorded in our docs; check the repository</td>
<td>A seekable, paused timeline that makes <a href="#/techniques/timing-plan">timing plans</a> and <a href="#/techniques/render-and-inspect">render and inspect</a> possible</td>
<td>The studio&#39;s framework, see <span class="dead">HyperFrames build rules</span></td>
</tr>
<tr>
<td>ref2game (Studio Igor)</td>
<td><a href="https://github.com/studioigor/ref2game" target="_blank" rel="noreferrer">studioigor/ref2game</a></td>
<td>Not recorded in our docs</td>
<td><a href="#/techniques/layered-assets">Layered assets</a>, a style bible sent with every request, motion checks with numbers</td>
<td>Reading; its README corroborates the video&#39;s phases</td>
</tr>
<tr>
<td>iart-ai motion-skills</td>
<td><a href="https://github.com/iart-ai/motion-skills" target="_blank" rel="noreferrer">iart-ai/motion-skills</a></td>
<td>MIT</td>
<td>Real data drawn on a real picture, draw-on routes, labelled unit charts</td>
<td>Adopt partly, as recipes</td>
</tr>
<tr>
<td>iart-ai map-animation-skills</td>
<td><a href="https://github.com/iart-ai/map-animation-skills" target="_blank" rel="noreferrer">iart-ai/map-animation-skills</a></td>
<td>MIT</td>
<td>Projection and draw-on recipe for editorial maps</td>
<td>Adopt partly (the recipe, not camera flights or highlights)</td>
</tr>
<tr>
<td>iart-ai tiktok-video-skills</td>
<td><a href="https://github.com/iart-ai/tiktok-video-skills" target="_blank" rel="noreferrer">iart-ai/tiktok-video-skills</a></td>
<td>MIT</td>
<td>Short-form craft: hooks, safe areas, loops; the <a href="#/techniques/vertical-safe-box">vertical safe box</a></td>
<td>Adopt partly</td>
</tr>
<tr>
<td>iart-ai data-animation-skills</td>
<td><a href="https://github.com/iart-ai/data-animation-skills" target="_blank" rel="noreferrer">iart-ai/data-animation-skills</a></td>
<td>MIT</td>
<td>Chart design: finished frame first, then reveal in order</td>
<td>Adopt partly</td>
</tr>
<tr>
<td>iart-ai webgl-animation-skills</td>
<td><a href="https://github.com/iart-ai/webgl-animation-skills" target="_blank" rel="noreferrer">iart-ai/webgl-animation-skills</a></td>
<td>Not recorded in our docs</td>
<td>Shader scenes, used as research for the shader-dive style</td>
<td>Reading</td>
</tr>
<tr>
<td>motionmaxxing</td>
<td><a href="https://github.com/Tejashmakwana/motionmaxxing" target="_blank" rel="noreferrer">Tejashmakwana/motionmaxxing</a></td>
<td>Apache-2.0 (early release)</td>
<td>A slop checklist for <a href="#/techniques/render-and-inspect">render and inspect</a> and the <a href="#/techniques/error-log">error log</a>; a sound arc and ducking guide; <a href="#/techniques/motion-defaults">motion defaults</a> and the <a href="#/techniques/importance-budget">importance budget</a></td>
<td>Adopt partly, as reading</td>
</tr>
<tr>
<td>claude-faceless-shorts-creator</td>
<td><a href="https://github.com/hassancs91/claude-faceless-shorts-creator" target="_blank" rel="noreferrer">hassancs91/claude-faceless-shorts-creator</a></td>
<td>MIT</td>
<td>A +4 dB audibility test for sound cues; a seamless loop ending</td>
<td>Adopt partly; not the paid-service factory</td>
</tr>
<tr>
<td>herk-edit-kit</td>
<td><a href="https://github.com/nateherkai/herk-edit-kit" target="_blank" rel="noreferrer">nateherkai/herk-edit-kit</a></td>
<td>MIT for original material; imported pipeline resources keep a separate grant</td>
<td>An open loop planted early and paid off late; cuts on word onsets (<a href="#/techniques/sentence-shot">sentence and shot</a>); labelling the thing</td>
<td>Do not adopt the layout or camera grammar</td>
</tr>
<tr>
<td>vizavi-motion</td>
<td><a href="https://vizavi.academy/lesson-motion/" target="_blank" rel="noreferrer">vizavi.academy/lesson-motion</a></td>
<td>None stated; treat as read-only</td>
<td>A storyboard before the build; motion and sound on the same events</td>
<td>Reading only</td>
</tr>
<tr>
<td>OpenMontage</td>
<td><a href="https://github.com/calesthio/OpenMontage" target="_blank" rel="noreferrer">calesthio/OpenMontage</a></td>
<td>AGPL-3.0</td>
<td>Character animation with SVG rigs and GSAP</td>
<td>Reading only; copying would pull in AGPL terms</td>
</tr>
<tr>
<td>LottieFiles motion-design-skill</td>
<td><a href="https://github.com/LottieFiles/motion-design-skill" target="_blank" rel="noreferrer">LottieFiles/motion-design-skill</a></td>
<td>MIT</td>
<td>General timing and easing principles for UI motion</td>
<td>General reference</td>
</tr>
<tr>
<td>iart-ai motion-design-skills</td>
<td><a href="https://github.com/iart-ai/motion-design-skills" target="_blank" rel="noreferrer">iart-ai/motion-design-skills</a></td>
<td>MIT</td>
<td><a href="#/techniques/speed-ramp">Speed ramp</a>, <a href="#/techniques/oklch-gradients">OKLCH gradients</a>, <a href="#/techniques/parallax-layers">parallax layers</a></td>
<td>Source of these techniques</td>
</tr>
<tr>
<td>iart-ai javascript-animation-skills</td>
<td><a href="https://github.com/iart-ai/javascript-animation-skills" target="_blank" rel="noreferrer">iart-ai/javascript-animation-skills</a></td>
<td>MIT</td>
<td><a href="#/techniques/downbeat-cuts">Downbeat cuts</a></td>
<td>Source of these techniques</td>
</tr>
<tr>
<td>iart-ai b-roll-skills</td>
<td><a href="https://github.com/iart-ai/b-roll-skills" target="_blank" rel="noreferrer">iart-ai/b-roll-skills</a></td>
<td>MIT</td>
<td><a href="#/techniques/broll-treatments">B-roll treatments</a></td>
<td>Source of these techniques</td>
</tr>
<tr>
<td>iart-ai lower-thirds-skills</td>
<td><a href="https://github.com/iart-ai/lower-thirds-skills" target="_blank" rel="noreferrer">iart-ai/lower-thirds-skills</a></td>
<td>MIT</td>
<td><a href="#/techniques/lower-third">Lower third</a></td>
<td>Source of these techniques</td>
</tr>
<tr>
<td>iart-ai explainer-video-skills</td>
<td><a href="https://github.com/iart-ai/explainer-video-skills" target="_blank" rel="noreferrer">iart-ai/explainer-video-skills</a></td>
<td>MIT</td>
<td><a href="#/techniques/hand-draw-on">Hand draw-on</a>, <a href="#/techniques/progressive-diagram">progressive diagram</a></td>
<td>Source of these techniques</td>
</tr>
<tr>
<td>iart-ai web-animation-skills</td>
<td><a href="https://github.com/iart-ai/web-animation-skills" target="_blank" rel="noreferrer">iart-ai/web-animation-skills</a></td>
<td>MIT</td>
<td><a href="#/techniques/reduced-motion-tiers">Reduced motion tiers</a></td>
<td>Source of these techniques</td>
</tr>
<tr>
<td>iart-ai kinetic-typography-skills</td>
<td><a href="https://github.com/iart-ai/kinetic-typography-skills" target="_blank" rel="noreferrer">iart-ai/kinetic-typography-skills</a></td>
<td>MIT</td>
<td>Nothing new written up; overlaps <a href="#/techniques/kinetic-type">kinetic type</a></td>
<td>Overlaps an existing technique</td>
</tr>
<tr>
<td>awesome-claude-video-skills</td>
<td><a href="https://github.com/zhuyansen/awesome-claude-video-skills" target="_blank" rel="noreferrer">zhuyansen/awesome-claude-video-skills</a></td>
<td>A list, not code</td>
<td>An index of about 180 repositories that the skill scout started from</td>
<td>Where to search next</td>
</tr>
</tbody></table></div>
<p>The 2D video plugin from the third tutorial (<a href="https://www.youtube.com/watch?v=YyUP_hSovOg" target="_blank" rel="noreferrer">YyUP_hSovOg</a>) is not on this list. It is handed out as a zip through a Telegram link, we did not install it, and the techniques we took from it come from measuring its demo (see <span class="dead">Reference: 2D video plugin</span>).</p>
<h2>Which technique to look for where</h2>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Technique</th>
<th>Look in</th>
</tr>
</thead>
<tbody><tr>
<td><a href="#/techniques/line-boil">Line boil</a>, <a href="#/techniques/hatching">hatching</a>, <a href="#/techniques/construction-lines">construction lines</a></td>
<td>The ProdAdvice tutorial itself; none of our studies links a public repository for it. Studio Igor&#39;s cartoon shows line boil too</td>
</tr>
<tr>
<td><a href="#/techniques/timing-plan">Timing plan</a></td>
<td>HyperFrames</td>
</tr>
<tr>
<td><a href="#/techniques/style-contract">Style contract</a></td>
<td>ref2game (style bible), motionmaxxing (slop checklist)</td>
</tr>
<tr>
<td><a href="#/techniques/render-and-inspect">Render and inspect</a>, <a href="#/techniques/error-log">error log</a></td>
<td>ref2game (motion checks), motionmaxxing, HyperFrames check and snapshot commands</td>
</tr>
<tr>
<td><a href="#/techniques/layered-assets">Layered assets</a></td>
<td>ref2game</td>
</tr>
<tr>
<td><a href="#/techniques/sentence-shot">One sentence, one shot</a></td>
<td>herk-edit-kit (<code>short-form-edit</code>), claude-faceless-shorts-creator</td>
</tr>
<tr>
<td><a href="#/techniques/number-readout">Number readout</a></td>
<td>iart-ai data-animation-skills</td>
</tr>
<tr>
<td><a href="#/techniques/motion-defaults">Motion defaults</a>, <a href="#/techniques/importance-budget">importance budget</a></td>
<td>motionmaxxing (<code>references/motion.md</code>, <code>references/director.md</code>)</td>
</tr>
<tr>
<td><a href="#/techniques/speed-ramp">Speed ramp</a>, <a href="#/techniques/oklch-gradients">OKLCH gradients</a>, <a href="#/techniques/parallax-layers">parallax layers</a></td>
<td>iart-ai motion-design-skills</td>
</tr>
<tr>
<td><a href="#/techniques/downbeat-cuts">Downbeat cuts</a></td>
<td>iart-ai javascript-animation-skills (<code>skills/soundtrack</code>)</td>
</tr>
<tr>
<td><a href="#/techniques/broll-treatments">B-roll treatments</a>, <a href="#/techniques/lower-third">lower third</a></td>
<td>iart-ai b-roll-skills, lower-thirds-skills</td>
</tr>
<tr>
<td><a href="#/techniques/hand-draw-on">Hand draw-on</a>, <a href="#/techniques/progressive-diagram">progressive diagram</a></td>
<td>iart-ai explainer-video-skills (<code>whiteboard-animation</code>, <code>diagram-animation</code>)</td>
</tr>
<tr>
<td><a href="#/techniques/reduced-motion-tiers">Reduced motion tiers</a></td>
<td>iart-ai web-animation-skills (<code>accessible-animation</code>)</td>
</tr>
<tr>
<td><a href="#/techniques/vertical-safe-box">Vertical safe box</a></td>
<td>iart-ai tiktok-video-skills (<code>short-form-video</code>)</td>
</tr>
<tr>
<td><a href="#/techniques/seekable-frame">Seekable frame</a>, <a href="#/techniques/closed-form-springs">closed-form springs</a>, <a href="#/techniques/beat-grid">beat grid</a>, <a href="#/techniques/seamless-loop">seamless loop</a>, <a href="#/techniques/subframe-blur">subframe blur</a>, <a href="#/techniques/one-shape">one shape</a></td>
<td>The prompts flxrnc-251921, 0xnicc0-516612 and annacher-152174 in the Videos catalog of this site; HyperFrames&#39; paused, seekable timeline is the closest framework fit</td>
</tr>
<tr>
<td><a href="#/techniques/kinetic-type">Kinetic type</a>, <a href="#/techniques/mask-reveal">mask reveal</a>, <a href="#/techniques/misregistration">misregistration</a>, <a href="#/techniques/locked-message">locked message</a></td>
<td>The prompt techhalla-498547 in the Videos catalog</td>
</tr>
<tr>
<td><a href="#/techniques/storyboard-first">Storyboard and pre-pass</a>, <a href="#/techniques/reference-by-link">reference by link</a>, <a href="#/techniques/feedback-passes">feedback passes</a></td>
<td>The ИИ МАСТОДОНТ tutorial (<a href="https://www.youtube.com/watch?v=yEpN_s9UkAE" target="_blank" rel="noreferrer">yEpN_s9UkAE</a>); HyperFrames shows key frames before it renders</td>
</tr>
<tr>
<td><a href="#/techniques/independent-clocks">Independent clocks</a>, <a href="#/techniques/harmonic-morph">harmonic morph</a>, <a href="#/techniques/harmonic-type">harmonic type</a>, <a href="#/techniques/shape-to-sound">shape to sound</a></td>
<td>The owner&#39;s own curves project (private): its harmonic-shapes package and its notes on celestial motion and harmonic audio</td>
</tr>
<tr>
<td><a href="#/techniques/camera-curves">Camera curves</a>, <a href="#/techniques/tilt-shift">tilt-shift band</a></td>
<td>Our Tabletop Miniature style; the HyperFrames skills list Three.js and 3D keyframes among their adapters</td>
</tr>
<tr>
<td><a href="#/techniques/blender-frames">Blender frames</a></td>
<td>The Blender manual and Python API; a locally installed Blender skill covers bpy, actions and F-curves, cameras, materials and linked libraries</td>
</tr>
</tbody></table></div>
<h2>Rules for taking from a skill</h2>
<ul>
<li><strong>Install nothing.</strong> An installed skill can change defaults silently, and copying files brings in licence terms. Keep the repositories as reading.</li>
<li><strong>Read as data, run no code.</strong> Never run an installer or a script from a skill you have not reviewed.</li>
<li><strong>Check the licence.</strong> AGPL and &quot;none stated&quot; mean reading only.</li>
<li><strong>List conflicts first.</strong> Each skill in the trial collided with an owner rule: a moving camera, camera travel, region highlights, never-ship items.</li>
<li><strong>Build a control.</strong> Make the same scene without the skill and let an independent check rank them by the owner&#39;s rules.</li>
<li><strong>A checklist that demands change needs a fact to show.</strong> One checklist item pushed a builder to invent a meaning on a map; the change must use facts already in the fact table.</li>
</ul>
`}]},{id:"motion-techniques",route:"#/techniques",title:"Motion techniques Claude can use",label:"Motion techniques",order:8,summary:"Forty-four motion-design techniques from the studied tutorials, the prompt database, the owner's curves project, our own 3D work and a read-through of skill repositories, one article each with an animated demo of how it works.",blocks:[{t:"html",html:`<h1>Motion techniques Claude can use</h1>
<p><span class="dead">Video creation studies</span> · Reviewed November 16, 2026</p>
<p>This is the practical side of the studies: each technique the tutorials describe, pulled out as its own article with a small animated demo, so an assistant (or a person) can apply it one at a time. The main source is ProdAdvice&#39;s HyperFrames tutorial (<a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g" target="_blank" rel="noreferrer">K1Mr5_7Gm3g</a>); we add the two other tutorials the owner picked, Studio Igor&#39;s game-art experiments (<a href="https://www.youtube.com/watch?v=YQ01D9xGAnk" target="_blank" rel="noreferrer">YQ01D9xGAnk</a>) and Andrey Zenin&#39;s 2D video plugin tutorial (<a href="https://www.youtube.com/watch?v=YyUP_hSovOg" target="_blank" rel="noreferrer">YyUP_hSovOg</a>). The second wave of techniques comes from a fourth tutorial found in the chat history, ИИ МАСТОДОНТ&#39;s &quot;Sonnet 5.5 and HyperFrames&quot; (<a href="https://www.youtube.com/watch?v=yEpN_s9UkAE" target="_blank" rel="noreferrer">yEpN_s9UkAE</a>), and from the prompts in this site&#39;s own Videos catalog, mainly the detailed ones by flxrnc, techhalla and 0xnicc0 (their authors&#39; X posts are linked in each article). The third wave comes from the owner&#39;s curves project (harmonic shapes, letters and sound, accumulated clocks) and from 3D work: our Tabletop Miniature style and a small Blender test we ran. The fourth wave comes from reading the skill repositories listed on the <a href="#/skills">skills page</a> (we cloned them into a temporary folder and read the files as data, running nothing): motion defaults, an importance budget, speed ramps, downbeat cuts, B-roll treatments, lower thirds, a drawing hand, diagrams, OKLCH gradients, parallax, reduced motion and the vertical safe box. We read the transcripts, the prompts and the skills; we have not rerun them.</p>
<p>The skills these techniques can be pulled from, with repository links, are on <a href="#/skills">Motion skills: where to extract the techniques</a>.</p>
`},{t:"steps",caption:"The twelve groups of techniques: how the drawing looks, how the work is organised, how picture and voice meet, how motion is engineered, how type moves, how the work is directed and reviewed, how shapes become harmonics, how 3D is used, and four groups from the skill repositories: timing and importance, cuts and overlays, drawing and diagrams, colour, depth and access.",steps:[{title:"Pencil look",text:"Line boil, cadence and seed, hatching, construction lines"},{title:"Workflow",text:"Timing plan, style contract, render and inspect, error log, short pieces"},{title:"Picture and voice",text:"Layered assets, one sentence one shot, number readout"},{title:"Motion engineering",text:"Seekable frame, springs, beat grid, loop, subframe blur, one shape, clocks"},{title:"Type and print",text:"Kinetic type, mask reveal, misregistration"},{title:"Direction and review",text:"Storyboard and pre-pass, reference by link, feedback passes, locked message"},{title:"Harmonic shapes",text:"Harmonic morph, harmonic type, shape to sound"},{title:"3D and Blender",text:"Camera curves, tilt-shift band, Blender frames"},{title:"Timing and importance",text:"Motion defaults, importance budget"},{title:"Cuts and overlays",text:"Speed ramp, downbeat cuts, B-roll, lower third, safe box"},{title:"Drawing and diagrams",text:"Hand draw-on, progressive diagram"},{title:"Colour, depth, access",text:"OKLCH gradients, parallax, reduced motion"}]},{t:"html",html:`<h2>The techniques</h2>
<h3>The pencil look</h3>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Technique</th>
<th>What it does</th>
<th>Main source</th>
</tr>
</thead>
<tbody><tr>
<td><a href="#/techniques/line-boil">Line boil</a></td>
<td>Redraws each outline about 12 times a second while the shape stays still</td>
<td>ProdAdvice 08:05, Studio Igor 0:49</td>
</tr>
<tr>
<td><a href="#/techniques/cadence-and-seed">Drawing cadence and a stable seed</a></td>
<td>Keeps the drawing rhythm independent of the file frame rate, and makes a re-render identical</td>
<td>ProdAdvice 08:22</td>
</tr>
<tr>
<td><a href="#/techniques/hatching">Hatching</a></td>
<td>Shades with strokes instead of a flat fill</td>
<td>ProdAdvice 09:00</td>
</tr>
<tr>
<td><a href="#/techniques/construction-lines">Construction lines</a></td>
<td>Leaves faint guides under a contour made of short broken strokes</td>
<td>ProdAdvice 08:05, Studio Igor 0:49</td>
</tr>
</tbody></table></div>
<h3>The workflow</h3>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Technique</th>
<th>What it does</th>
<th>Main source</th>
</tr>
</thead>
<tbody><tr>
<td><a href="#/techniques/timing-plan">Timing plan</a></td>
<td>Holds every entrance, exit and path as plain numbers on one timeline</td>
<td>ProdAdvice 01:32</td>
</tr>
<tr>
<td><a href="#/techniques/style-contract">Style contract</a></td>
<td>Turns a look into measurable tokens that every scene shares</td>
<td>ProdAdvice 10:14, Studio Igor 2:32</td>
</tr>
<tr>
<td><a href="#/techniques/render-and-inspect">Render and inspect</a></td>
<td>Checks real frames at fixed times and writes down each defect</td>
<td>ProdAdvice 05:00, Studio Igor 20:55</td>
</tr>
<tr>
<td><a href="#/techniques/error-log">Error log</a></td>
<td>Turns each failure into a check for the next scene</td>
<td>ProdAdvice 10:14, Studio Igor 14:14</td>
</tr>
<tr>
<td><a href="#/techniques/assemble-from-pieces">Short pieces</a></td>
<td>Approves scenes one at a time and reviews only the seams</td>
<td>ProdAdvice 10:14, Zenin 6:39</td>
</tr>
</tbody></table></div>
<h3>Picture and voice</h3>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Technique</th>
<th>What it does</th>
<th>Main source</th>
</tr>
</thead>
<tbody><tr>
<td><a href="#/techniques/layered-assets">Layered assets</a></td>
<td>Painted layers for forms, code for depth, light and text</td>
<td>Studio Igor 7:48</td>
</tr>
<tr>
<td><a href="#/techniques/sentence-shot">One sentence, one shot</a></td>
<td>Cuts a fraction of a second before each sentence</td>
<td>Zenin 2:02</td>
</tr>
<tr>
<td><a href="#/techniques/number-readout">Number readout</a></td>
<td>Shows a figure small, beside what it measures</td>
<td>Zenin 2:26</td>
</tr>
</tbody></table></div>
<h3>Motion engineering</h3>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Technique</th>
<th>What it does</th>
<th>Main source</th>
</tr>
</thead>
<tbody><tr>
<td><a href="#/techniques/seekable-frame">Seekable frame</a></td>
<td>Draws the picture as a pure function of time, so any moment can be frozen and checked</td>
<td>Prompts flxrnc, techhalla, BuildFastWithAI</td>
</tr>
<tr>
<td><a href="#/techniques/closed-form-springs">Closed-form springs</a></td>
<td>Moves everything with exact spring formulas; the camera is slower than the shape</td>
<td>Prompts flxrnc, AnnaCher, 0xnicc0</td>
</tr>
<tr>
<td><a href="#/techniques/beat-grid">Beat grid</a></td>
<td>Puts every event on a fixed grid of beats (0.5 s at 120 BPM)</td>
<td>Prompts flxrnc, techhalla, 0xnicc0</td>
</tr>
<tr>
<td><a href="#/techniques/seamless-loop">Seamless loop</a></td>
<td>Makes the last frame equal the first, cursor included</td>
<td>Prompts flxrnc, techhalla</td>
</tr>
<tr>
<td><a href="#/techniques/subframe-blur">Subframe blur</a></td>
<td>Blends four samples per frame for real motion blur</td>
<td>Prompts flxrnc, techhalla</td>
</tr>
<tr>
<td><a href="#/techniques/one-shape">One shape, never cut</a></td>
<td>Tells a product story with one element that morphs, with no cuts</td>
<td>Prompts AnnaCher, 0xnicc0, flxrnc</td>
</tr>
<tr>
<td><a href="#/techniques/independent-clocks">Independent clocks</a></td>
<td>Gives each motion its own accumulated phase, so a speed change never moves the past</td>
<td>The owner&#39;s curves project</td>
</tr>
</tbody></table></div>
<h3>Type and print</h3>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Technique</th>
<th>What it does</th>
<th>Main source</th>
</tr>
</thead>
<tbody><tr>
<td><a href="#/techniques/kinetic-type">Kinetic type per glyph</a></td>
<td>A spring per letter, started 125 ms apart</td>
<td>Prompt techhalla</td>
</tr>
<tr>
<td><a href="#/techniques/mask-reveal">Mask reveal</a></td>
<td>Turns the outgoing word into a window onto the next scene</td>
<td>Prompt techhalla</td>
</tr>
<tr>
<td><a href="#/techniques/misregistration">Print misregistration</a></td>
<td>Two offset colour copies of text, on impact frames only</td>
<td>Prompt techhalla</td>
</tr>
</tbody></table></div>
<h3>Direction and review</h3>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Technique</th>
<th>What it does</th>
<th>Main source</th>
</tr>
</thead>
<tbody><tr>
<td><a href="#/techniques/storyboard-first">Storyboard and pre-pass</a></td>
<td>Storyboard before code, one still per beat before the render</td>
<td>Prompts flxrnc, 0xnicc0, techhalla; ИИ МАСТОДОНТ 06:04</td>
</tr>
<tr>
<td><a href="#/techniques/reference-by-link">Reference by link</a></td>
<td>Gives a link to a clip you like and asks for your story in that style</td>
<td>ИИ МАСТОДОНТ 13:10</td>
</tr>
<tr>
<td><a href="#/techniques/feedback-passes">Feedback in passes</a></td>
<td>Pace, then sound, then music fitted to the beat</td>
<td>ИИ МАСТОДОНТ 08:13</td>
</tr>
<tr>
<td><a href="#/techniques/locked-message">Locked message and bans</a></td>
<td>Fixes the exact words and lists what must not appear</td>
<td>Prompt techhalla</td>
</tr>
</tbody></table></div>
<h3>Harmonic shapes</h3>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Technique</th>
<th>What it does</th>
<th>Main source</th>
</tr>
</thead>
<tbody><tr>
<td><a href="#/techniques/harmonic-morph">Harmonic morph</a></td>
<td>Stores an outline as a few complex harmonics; morphs by mixing coefficients; the count is a smoothness dial</td>
<td>The owner&#39;s curves project</td>
</tr>
<tr>
<td><a href="#/techniques/harmonic-type">Harmonic type</a></td>
<td>Builds letters from closed contours, filled as one even-odd compound path so holes stay open</td>
<td>The owner&#39;s curves project</td>
</tr>
<tr>
<td><a href="#/techniques/shape-to-sound">Shape to sound</a></td>
<td>Uses the magnitudes of a contour&#39;s harmonics as the partials of a tone</td>
<td>The owner&#39;s curves project</td>
</tr>
</tbody></table></div>
<h3>3D and Blender</h3>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Technique</th>
<th>What it does</th>
<th>Main source</th>
</tr>
</thead>
<tbody><tr>
<td><a href="#/techniques/camera-curves">Camera curves</a></td>
<td>Keys a 3D camera&#39;s channels with monotone Hermite curves: smooth, no overshoot, flat on holds</td>
<td>Our Tabletop Miniature style</td>
</tr>
<tr>
<td><a href="#/techniques/tilt-shift">Tilt-shift band</a></td>
<td>Blurs all but one band so a scene reads as a miniature; grain seeded by frame number</td>
<td>Our Tabletop Miniature style</td>
</tr>
<tr>
<td><a href="#/techniques/blender-frames">Blender frames</a></td>
<td>Scripts a headless Blender animation and renders each frame from its number</td>
<td>Our own test, Blender 5.2.2</td>
</tr>
</tbody></table></div>
<h3>Timing and importance</h3>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Technique</th>
<th>What it does</th>
<th>Main source</th>
</tr>
</thead>
<tbody><tr>
<td><a href="#/techniques/motion-defaults">Motion defaults</a></td>
<td>Gives a default length in frames to each kind of move: opacity 6, entrance 12, blur 7, exit 10 to 13</td>
<td>motionmaxxing</td>
</tr>
<tr>
<td><a href="#/techniques/importance-budget">Importance budget</a></td>
<td>Rates every beat 1 to 3 and lets at most a quarter be 3</td>
<td>motionmaxxing</td>
</tr>
</tbody></table></div>
<h3>Cuts, sound and overlays</h3>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Technique</th>
<th>What it does</th>
<th>Main source</th>
</tr>
</thead>
<tbody><tr>
<td><a href="#/techniques/speed-ramp">Speed ramp</a></td>
<td>Slows into an impact and snaps back, as a time remap whose slowest frame lands on the beat</td>
<td>iart-ai motion-design-skills</td>
</tr>
<tr>
<td><a href="#/techniques/downbeat-cuts">Downbeat cuts</a></td>
<td>Scenes of whole bars, cuts marked by a chord change, not by a loud accent</td>
<td>iart-ai javascript-animation-skills</td>
</tr>
<tr>
<td><a href="#/techniques/broll-treatments">B-roll treatments</a></td>
<td>Speaker, overlay or cover per line, and lead, sync or wait per element</td>
<td>iart-ai b-roll-skills</td>
</tr>
<tr>
<td><a href="#/techniques/lower-third">Lower third</a></td>
<td>A name strap inside title-safe, moving only while it builds in and out</td>
<td>iart-ai lower-thirds-skills</td>
</tr>
<tr>
<td><a href="#/techniques/vertical-safe-box">Vertical safe box</a></td>
<td>Keeps the hook inside a 900 by 1400 box and the bottom 320 px clear</td>
<td>iart-ai tiktok-video-skills</td>
</tr>
</tbody></table></div>
<h3>Drawing and diagrams</h3>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Technique</th>
<th>What it does</th>
<th>Main source</th>
</tr>
</thead>
<tbody><tr>
<td><a href="#/techniques/hand-draw-on">Hand draw-on</a></td>
<td>Draws a stroke and keeps the pen on its tip from one progress value</td>
<td>iart-ai explainer-video-skills</td>
</tr>
<tr>
<td><a href="#/techniques/progressive-diagram">Progressive diagram</a></td>
<td>Reveals nodes, then edges, then labels, then dims all but the active node</td>
<td>iart-ai explainer-video-skills</td>
</tr>
</tbody></table></div>
<h3>Colour, depth and access</h3>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Technique</th>
<th>What it does</th>
<th>Main source</th>
</tr>
</thead>
<tbody><tr>
<td><a href="#/techniques/oklch-gradients">OKLCH gradients</a></td>
<td>Blends colours in a perceptual space so the middle keeps its chroma</td>
<td>iart-ai motion-design-skills</td>
</tr>
<tr>
<td><a href="#/techniques/parallax-layers">Parallax layers</a></td>
<td>Moves three depth layers at 0.2x, 0.6x and 1.2x of one camera pan</td>
<td>iart-ai motion-design-skills</td>
</tr>
<tr>
<td><a href="#/techniques/reduced-motion-tiers">Reduced motion tiers</a></td>
<td>Removes vestibular triggers, softens the rest to a fade, keeps colour and progress</td>
<td>iart-ai web-animation-skills</td>
</tr>
</tbody></table></div>
<h2>How to use them</h2>
<ol>
<li>Start from the workflow group: a <a href="#/techniques/timing-plan">timing plan</a> and a <a href="#/techniques/style-contract">style contract</a> cost minutes and prevent most rework.</li>
<li>Pick one look technique for the job and test it on one short scene. Do not stack all four of the pencil techniques on a first attempt.</li>
<li>Run <a href="#/techniques/render-and-inspect">render and inspect</a> on every scene, and keep the <a href="#/techniques/error-log">error log</a> current.</li>
<li>For narrated pieces add the picture-and-voice group.</li>
<li>For product and UI motion, or pieces that loop or go to music, add the motion-engineering group (<a href="#/techniques/seekable-frame">seekable frame</a> first) and the direction-and-review group.</li>
<li>For character and shape work add the harmonic group; for 3D scenes, the 3D group (the Blender article is a measured test, the others come from a finished style).</li>
<li>For short-form and talking-head work add the cuts-and-overlays group, and set <a href="#/techniques/motion-defaults">motion defaults</a> and an <a href="#/techniques/importance-budget">importance budget</a> before animating. Always plan a <a href="#/techniques/reduced-motion-tiers">reduced-motion</a> version of anything that slides, zooms or moves in depth.</li>
</ol>
<h2>Limits</h2>
<p>The demos are our own drawings that show how each mechanism works. They are not frames from the tutorials, and the numbers inside them (amplitudes, spacings, pixel shifts) are illustrative unless an article says a number comes from a source. The code snippets are our proposed implementations and were not run; none of the four tutorials publishes its source, and the prompts in the catalog are given without their code. Numbers in the fourth wave (frames, decibels, pixels) are the skills&#39; own claims, not remeasured by us. A technique that works in a demo has to be tested on a real scene, with the checks in <span class="dead">Auditing a video</span>, before it enters a client video.</p>
<p>Studies behind this page: <span class="dead">HyperFrames tutorial study</span>, <span class="dead">Layered art tutorial study</span>, <span class="dead">Reference: 2D video plugin</span>, <span class="dead">Skill trial: bond Short</span>.</p>
`}]},{id:"technique-assemble-from-pieces",route:"#/techniques/assemble-from-pieces",title:"Technique: build long work from short approved pieces",label:"Short pieces",order:9,summary:"Make and approve one short scene at a time, then join them and review only the seams.",blocks:[{t:"html",html:`<h1>Technique: build long work from short approved pieces</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>The creator says outright that long pieces are easier to build as smaller sections (<a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g&t=614s" target="_blank" rel="noreferrer">10:14</a>). The tutorial on a code-drawn 2D video plugin shows the same habit from another angle: it renders a pilot of about 30 s before the full video, and the author then picks one scene of the pilot to change (<a href="https://www.youtube.com/watch?v=YyUP_hSovOg&t=399s" target="_blank" rel="noreferrer">6:39</a>).</p>
`},{t:"viz",id:"motion-techniques/assemble",caption:"Four scenes of 5 s, each approved on its own, slide together into one 20 s strip. The three seams get a review flag for palette, audio and pacing."},{t:"html",html:`<h2>How it works</h2>
<ol>
<li><strong>Split the story into scenes</strong> of a few seconds, each with one idea. The demo uses four scenes of 5 s.</li>
<li><strong>Build and approve each scene alone</strong> against the <a href="#/techniques/style-contract">style contract</a>, with its own <a href="#/techniques/render-and-inspect">render and inspect</a> pass. A defect is found in 5 s of film, not in 20.</li>
<li><strong>Join them</strong> into one timeline. The scenes share the palette, the seed rules and the audio bed.</li>
<li><strong>Review the seams.</strong> With four scenes there are three. Look at the last frame of one and the first of the next, and listen for a jump in level or ambience.</li>
</ol>
<h2>Why it helps</h2>
<ul>
<li>A correction touches one scene, so the others are not at risk.</li>
<li>Scenes are reusable: an approved opening can be placed in the next film.</li>
<li>A pilot gives early feedback. Render the first 8 to 10 s at draft quality and show it before the full build; after a render, send the owner a numbered sheet with one thumbnail per shot, so feedback can name a shot (see <span class="dead">Reference: 2D video plugin</span>).</li>
</ul>
<h2>Watch for</h2>
<ul>
<li><strong>Seams.</strong> Matching colour, grain and sound level at the cut is the work that remains. A shared contract prevents most of it; the review catches the rest.</li>
<li><strong>Scenes that cannot stand alone.</strong> If scene 3 needs scene 2 to make sense, approve them as a pair.</li>
<li><strong>Per-scene seeds that reuse the same drawing.</strong> Two scenes with one seed will boil in lockstep. See <a href="#/techniques/cadence-and-seed">Drawing cadence and a stable seed</a>.</li>
</ul>
<p><strong>Source:</strong> ProdAdvice, <a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g" target="_blank" rel="noreferrer">K1Mr5_7Gm3g</a> at 10:14-11:41; Andrey Zenin, <a href="https://www.youtube.com/watch?v=YyUP_hSovOg" target="_blank" rel="noreferrer">YyUP_hSovOg</a> at 6:39-7:25. The 4 x 5 s split is our illustration.</p>
`}]},{id:"technique-beat-grid",route:"#/techniques/beat-grid",title:"Technique: a beat grid",label:"Beat grid",order:15,summary:"Put every move, click and sound on a fixed grid of beats so a piece without a soundtrack still feels in time, and music can be added later.",blocks:[{t:"html",html:`<h1>Technique: a beat grid</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>Prompts for product motion often start from a grid of time, not from a list of effects. One gives a 0.5 s beat grid and lists what happens at each beat, from &quot;0.0 pixel mascot idles&quot; to &quot;12.0 toast shrinks back into the mascot&quot; (<a href="https://x.com/flxrnc/status/2108242454105251921" target="_blank" rel="noreferrer">flxrnc</a>). Another sets 120 BPM and says something must land on every beat for the first 16 beats, and after that on every other beat (<a href="https://x.com/techhalla/status/2103411244468498547" target="_blank" rel="noreferrer">techhalla</a>). A third wants 24 beats at 120 BPM &quot;and something happens on every beat&quot; (<a href="https://x.com/0xnicc0/status/2107217691505516612" target="_blank" rel="noreferrer">0xnicc0</a>); a fourth syncs everything to a 128 BPM grid (<a href="https://x.com/BuildFastWithAI/status/2108403445304844291" target="_blank" rel="noreferrer">BuildFastWithAI</a>).</p>
`},{t:"viz",id:"motion-techniques/beat-grid",caption:"A 4 s axis at 120 BPM: a heavy tick every 0.5 s, a light tick every 125 ms. Six events sit on beats. A hit that started at 1.3 s slides to the beat at 1.5 s."},{t:"html",html:`<h2>How it works</h2>
<p>At 120 BPM one beat is 0.5 s and a sixteenth note is 125 ms. If every entrance, click and impact is placed on that grid, the piece has a pulse before any sound exists, and a track at the same tempo fits with no re-timing. The 125 ms step also gives a natural stagger for <a href="#/techniques/kinetic-type">letters</a>.</p>
<h2>How to build it</h2>
<p>Put the grid in the <a href="#/techniques/timing-plan">timing plan</a> and snap to it:</p>
<pre><code class="language-js">const BPM = 120, beat = 60 / BPM;            // 0.5 s
const onGrid = (t) =&gt; Math.round(t / beat) * beat;
const plan = { mascotSquash: onGrid(1.0), loader: onGrid(1.5), check: onGrid(2.0) };
</code></pre>
<p>With real music, find the track&#39;s own grid first: start on a downbeat and place each click and chime on a measured peak (<a href="https://x.com/0xnicc0/status/2107217691505516612" target="_blank" rel="noreferrer">0xnicc0</a> asks for exactly this, with a royalty-free track near 120 BPM).</p>
<h2>Watch for</h2>
<ul>
<li><strong>Every beat filled for ever.</strong> The prompt that fills the first 16 beats relaxes to every other beat afterwards. Constant hits tire the eye.</li>
<li><strong>A grid that fights the story.</strong> Sentences have their own timing; see <a href="#/techniques/sentence-shot">one sentence, one shot</a>. Use the grid for UI and motion pieces, voice timing for narrated ones.</li>
<li><strong>Rounding the tempo.</strong> A track at 118 BPM on a 120 BPM grid drifts out in a few bars.</li>
</ul>
<p><strong>Sources:</strong> <a href="https://x.com/flxrnc/status/2108242454105251921" target="_blank" rel="noreferrer">flxrnc-251921</a>, <a href="https://x.com/techhalla/status/2103411244468498547" target="_blank" rel="noreferrer">techhalla-498547</a>, <a href="https://x.com/0xnicc0/status/2107217691505516612" target="_blank" rel="noreferrer">0xnicc0-516612</a>, BuildFastWithAI in our prompt database; the <code>onGrid</code> snippet is ours.</p>
`}]},{id:"technique-blender-frames",route:"#/techniques/blender-frames",title:"Technique: a Blender animation as frame numbers",label:"Blender frames",order:32,summary:"Script Blender without its interface, key a scene, and render every frame from its number. We ran a small test and measured what comes out.",blocks:[{t:"html",html:`<h1>Technique: a Blender animation as frame numbers</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>Blender can sit in this workflow the way Three.js does: a 3D element made by a script, with a motion that is a function of the frame number, rendered to still images and laid into the video. Nothing in this collection covered Blender, so we ran a small test ourselves. It covers only what we measured, and the limits are listed below.</p>
`},{t:"viz",id:"motion-techniques/blender-frames",caption:"The four steps of the test, and the cube position at five frames. Orange line: the default Bezier interpolation. Dashed: linear. The numbers are what the script printed."},{t:"html",html:`<h2>What we ran</h2>
<p>Blender 5.2.2 LTS, headless, with this script (<code>/Applications/Blender.app/Contents/MacOS/Blender -b -P test.py</code>):</p>
<pre><code class="language-python">import bpy
sc = bpy.context.scene
sc.frame_start, sc.frame_end = 1, 48
sc.render.engine = &quot;BLENDER_WORKBENCH&quot;
sc.render.resolution_x, sc.render.resolution_y = 320, 180
cube = bpy.context.object
cube.location.x = -2; cube.keyframe_insert(&quot;location&quot;, index=0, frame=1)
cube.location.x =  2; cube.keyframe_insert(&quot;location&quot;, index=0, frame=48)

act, slot = cube.animation_data.action, cube.animation_data.action_slot
fc = next(f for f in act.layers[0].strips[0].channelbag(slot).fcurves
          if f.data_path == &quot;location&quot; and f.array_index == 0)
print([round(fc.evaluate(f), 3) for f in (1, 12, 24, 36, 48)])
sc.frame_set(24)                      # the scene is now exactly frame 24
sc.render.filepath = &quot;out/&quot;; bpy.ops.render.render(animation=True)
</code></pre>
<h2>What we measured</h2>
<ul>
<li><strong>The value is a function of the frame.</strong> With the default Bezier keys, <code>fc.evaluate</code> gave -2, -1.445, -0.064, 1.351 and 2 at frames 1, 12, 24, 36, 48. After <code>frame_set(5)</code> and then <code>frame_set(24)</code> the cube was at the same x as before.</li>
<li><strong>Default is not linear.</strong> The Bezier join eases in and out: at frame 12 the cube is at -1.445, where a linear join gives -1.064. For a steady travel set the keys to <code>LINEAR</code>.</li>
<li><strong>Same frame, same file.</strong> Frame 24 rendered twice gave identical PNG files.</li>
<li><strong>Fast enough to iterate.</strong> 48 frames in Workbench at 320 by 180 took 0.4 seconds. This says nothing about Eevee or Cycles at full size.</li>
<li><strong>The curves API moved.</strong> In 5.2.2 <code>action.fcurves</code> was not there. Curves live on a channel bag: <code>action.layers[0].strips[0].channelbag(slot).fcurves</code>. Older recipes you find online break on it.</li>
</ul>
<p>This is the same contract as a <a href="#/techniques/seekable-frame">seekable frame</a>: render frame <code>n</code> from <code>n</code> alone. Keys placed on Bezier handles can be shaped like the <a href="#/techniques/camera-curves">camera curves</a>; for a rig, key the camera object the same way.</p>
<h2>How it fits a video</h2>
<p>Render the 3D part as a numbered PNG sequence (a transparent background is a render setting; we did not test it) and treat it as a layer: lay it over the 2D scene, mask it, and check it frame by frame as in <a href="#/techniques/render-and-inspect">render and inspect</a>. Use Blender when the object needs modelling, materials or physically based light. Use Three.js, as in the <a href="#/techniques/camera-curves">camera curves</a> article, when the whole scene is real-time and shares the page clock.</p>
<h2>Not tested</h2>
<p>Encoding to a video file, a transparent background, Eevee and Cycles, GPU rendering, rigs, simulations, and a long sequence. The Blender add-on for live control was not connected in this session, so the test used the command line only.</p>
<p><strong>Sources:</strong> our own run, as above; <a href="https://docs.blender.org/api/current/" target="_blank" rel="noreferrer">Blender Python API</a> for the names used. The installed Blender skill documents the same area.</p>
`}]},{id:"technique-broll-treatments",route:"#/techniques/broll-treatments",title:"Technique: three B-roll treatments and per-beat timing",label:"B-roll treatments",order:37,summary:"Mark each line of a talking-head clip as speaker, overlay or cover, then decide per element whether it leads, syncs or waits for the word.",blocks:[{t:"html",html:`<h1>Technique: three B-roll treatments and per-beat timing</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>A talking-head video gets motion graphics in two decisions: what kind of layer each line gets, and when each element appears against the voice.</p>
`},{t:"viz",id:"motion-techniques/broll-treatments",caption:'Top, a 26 second plan made of three treatments: A speaker, B overlay, C cover (A4 B5 A5 C5 A3 B2 A2 seconds, an example). Below, the timing choice for "revenue grew 30 percent": axes lead by about six frames, the value lands on the word, an answer waits.'},{t:"html",html:`<h2>Three treatments</h2>
<ul>
<li><strong>A, speaker.</strong> The video alone. For the opening line, an opinion, an emotional beat, the call to action and the closing line.</li>
<li><strong>B, overlay.</strong> A transparent layer over the speaker: a keyword, a number counting up, an icon, a short list. Keep it toward the edges and out of the face.</li>
<li><strong>C, cover.</strong> An opaque full-frame scene hides the speaker while the voice continues. For numbers, comparisons, steps, an interface, anything with three or more parts.</li>
</ul>
<p>Rhythm rules from the skill: open and close on A; no stretch of A longer than about 8 seconds; a C stretch runs about 3 to 8 seconds, with the speaker back between covers.</p>
<h2>Timing per element</h2>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Timing</th>
<th>Use for</th>
</tr>
</thead>
<tbody><tr>
<td>Lead by about six frames</td>
<td>Context the eye can prepare: axes, cards, process structure</td>
</tr>
<tr>
<td>Sync to the relevant word</td>
<td>New key facts: amounts, percentages, prices, final chart values</td>
</tr>
<tr>
<td>Wait for the reveal</td>
<td>Punchlines, negations, withheld answers, conclusions</td>
</tr>
</tbody></table></div>
<p>For &quot;revenue grew 30%&quot;: bring in the chart structure early, then land the final bar value on the word &quot;30%&quot;. Synchronization means the number is readable, not that a long count-up has started. Compare <a href="#/techniques/sentence-shot">one sentence, one shot</a> and <a href="#/techniques/number-readout">number readout</a>.</p>
<p><strong>Sources:</strong> <a href="https://github.com/iart-ai/b-roll-skills" target="_blank" rel="noreferrer">iart-ai/b-roll-skills</a>, <code>skills/talking-head-b-roll/SKILL.md</code>. MIT licence. The 26 second plan is our example.</p>
`}]},{id:"technique-cadence-and-seed",route:"#/techniques/cadence-and-seed",title:"Technique: drawing cadence and a stable seed",label:"Cadence and seed",order:2,summary:"Why the redraw rhythm must come from time, not from the frame number, and why the random numbers must be seeded so a re-render gives the same picture.",blocks:[{t:"html",html:`<h1>Technique: drawing cadence and a stable seed</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>Line boil needs two decisions that look like details and decide whether the effect survives a render. First, how often a new drawing appears, independent of the video&#39;s frame rate. Second, which random numbers a given moment uses, so that the same moment always looks the same.</p>
<h2>Cadence is not the frame rate</h2>
<p>ProdAdvice contrasts 24 and 12 fps with a ball example (<a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g&t=502s" target="_blank" rel="noreferrer">08:22</a>). The part that carries over to a production file is the idea, not the setting: the drawing rate is a look, and the file rate is a delivery format.</p>
`},{t:"viz",id:"hyperframes-tutorial-study/cadence",caption:"Half a second at 12 drawings a second. The drawing rhythm stays the same; only the number of frames each drawing holds changes with the file rate."},{t:"html",html:`<p>The drawing index is <code>floor(time * 12)</code>. In a 24 fps file each drawing holds 2 frames. In a 30 fps file the holds alternate between 3 and 2 frames. Both show the same six drawings in half a second.</p>
<h2>A seed makes a moment repeatable</h2>
<p>A renderer may visit the same time more than once: it seeks, it re-renders a failed chunk, you scrub back to check a defect. If the outline uses a random number at every call, the second visit draws a different contour, and the defect you saw is gone or a new one appears.</p>
`},{t:"viz",id:"motion-techniques/seed",caption:"The same three visits to the timeline: 0.5 s, 1.0 s, then 0.5 s again. With a random number the third circle differs from the first; with a seed that comes from the scene seed plus the drawing index it is identical."},{t:"html",html:`<p>The fix is one line: seed the generator with the scene seed plus the drawing index, <code>seed = sceneSeed + floor(time * 12)</code>. Then 0.5 s is drawing 6 every time, and 1.0 s is drawing 12.</p>
<h2>Checklist</h2>
<ol>
<li>Compute the drawing index from time, never from a frame counter.</li>
<li>Give each scene one fixed seed and store it with the scene, so a revision does not reshuffle every line.</li>
<li>Let the camera and any text read continuous time, not the drawing index. Only the stroke follows the cadence.</li>
<li>Do not change a required delivery rate (24, 25, 30) to imitate a source video. Keep 12 drawings a second inside the file.</li>
</ol>
<p>This is our proposed implementation. The tutorial does not publish its code; see the source limits in <span class="dead">HyperFrames tutorial study</span>.</p>
<p><strong>Source:</strong> ProdAdvice, <a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g" target="_blank" rel="noreferrer">K1Mr5_7Gm3g</a> at 08:22.</p>
`}]},{id:"technique-camera-curves",route:"#/techniques/camera-curves",title:"Technique: a camera that is a curve of time",label:"Camera curves",order:30,summary:"Give a 3D camera a few channels, key each one, and join the keys with monotone Hermite curves: smooth, no overshoot, flat on holds, and a pure function of time.",blocks:[{t:"html",html:`<h1>Technique: a camera that is a curve of time</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>Our own Tabletop Miniature style (approved on October 1, 2026) is one small 3D model on a dark table, rendered in real time with Three.js and exported through HyperFrames. There are no cuts: one orbiting camera flies from station to station. The camera is a pure function of time, built from keyframed channels.</p>
`},{t:"viz",id:"motion-techniques/camera-curves",caption:"One camera channel, the azimuth, keyed at four stations with two holds. Dashed: linear keys (corners). Orange: a Catmull-Rom spline (dips below the first key, rises above the second). Blue: monotone Hermite. On the right the monotone curve drives the camera around the model."},{t:"html",html:`<h2>How it works</h2>
<p>The rig has four numbers: a target point, an azimuth (angle around the model), an elevation and a distance. Every channel is a list of keys joined by curves; the style also keys its post-processing values (blur band, blur radius, depth aperture) in the same table. At time <code>t</code> the renderer reads each channel and places the camera. Nothing else moves it.</p>
<p>The choice of curve matters. A <strong>linear</strong> join has a corner at every key: the camera starts and stops abruptly. A general <strong>spline</strong> is smooth but can overshoot: next to a hold it backs up before moving, or swings past the station. A <strong>monotone cubic Hermite</strong> curve (Fritsch and Carlson) picks its tangents so that the curve never leaves the range of the two keys around it, and has a zero slope on a hold (<a href="https://en.wikipedia.org/wiki/Monotone_cubic_interpolation" target="_blank" rel="noreferrer">Wikipedia: monotone cubic interpolation</a>). A hold in the keys is a real hold in the picture.</p>
<h2>How to build it</h2>
<pre><code class="language-js">function monotone(xs, ys) {                      // Fritsch-Carlson tangents + cubic Hermite
  const d = xs.slice(1).map((x, i) =&gt; (ys[i + 1] - ys[i]) / (x - xs[i]));
  const m = [d[0], ...d.slice(1).map((v, i) =&gt; (d[i] * v &lt;= 0 ? 0 : (d[i] + v) / 2)), d.at(-1)];
  d.forEach((di, i) =&gt; {
    if (di === 0) { m[i] = m[i + 1] = 0; return; }
    const a = m[i] / di, b = m[i + 1] / di, s = a * a + b * b;
    if (s &gt; 9) { m[i] = (3 / Math.sqrt(s)) * a * di; m[i + 1] = (3 / Math.sqrt(s)) * b * di; }
  });
  return (x) =&gt; hermite(xs, ys, m, x);           // standard cubic Hermite basis on the segment
}
const az = monotone(T, AZ), el = monotone(T, EL), dist = monotone(T, DIST);
const camera = (t) =&gt; placeOnSphere(target(t), az(t), el(t), dist(t));   // the only place the camera moves
</code></pre>
<p>Key the angle as an unwrapped number (350 degrees then 380, not 350 then 20), or the camera spins the long way round. Render <code>camera(frame / fps)</code> for every frame.</p>
<h2>Watch for</h2>
<ul>
<li><strong>Sight lines at every key.</strong> The style page lists it as a trap: a tall prop between the camera path and a station hides it. Check the view at each key, not only the model.</li>
<li><strong>Things with a front.</strong> Props with a front and a back must face the side the camera passes; check from the camera azimuth.</li>
<li><strong>Anchored labels.</strong> Tags fixed in 3D can land under the headline at some angles; clamp their screen position.</li>
<li><strong>Glare.</strong> A bright surface seen top-down can look milky: lower exposure at those keys.</li>
<li><strong>One clock.</strong> Overlays on the page read the same <code>t</code>, so they stay with the camera; see <a href="#/techniques/seekable-frame">seekable frame</a>.</li>
</ul>
<p><strong>Sources:</strong> our Tabletop Miniature style page (built with Three.js r181 and HyperFrames, one video made from it); the curve is the standard monotone cubic interpolation. The demo draws all three curves from the same keys. The code above is a sketch we have not run.</p>
`}]},{id:"technique-closed-form-springs",route:"#/techniques/closed-form-springs",title:"Technique: closed-form springs",label:"Closed-form springs",order:14,summary:"Move things with the exact step response of a spring, a formula of time, and give the camera a slower spring than the shape.",blocks:[{t:"html",html:`<h1>Technique: closed-form springs</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>The prompts that ask for a premium UI feel agree on how things should move: with springs, and with numbers, not adjectives. One prompt gives them: the shape uses damping 0.72 and settles in 0.35 s, the camera uses damping 1.0 and settles in 0.6 s (<a href="https://x.com/flxrnc/status/2108242454105251921" target="_blank" rel="noreferrer">flxrnc</a>). It also asks for the inputs &quot;in hex codes, seconds, damping ratios and pixel sizes instead of adjectives&quot;. Two other prompts ask for &quot;springs everywhere, a tiny overshoot at most&quot; (<a href="https://x.com/AnnaCher___/status/2103571098638152174" target="_blank" rel="noreferrer">AnnaCher</a>, <a href="https://x.com/0xnicc0/status/2107217691505516612" target="_blank" rel="noreferrer">0xnicc0</a>).</p>
`},{t:"viz",id:"motion-techniques/closed-form-springs",caption:"Both curves are exact formulas, replayed here three times slower than real time. The shape (blue) overshoots by 3.8 % and settles in 0.35 s. The camera (orange) does not overshoot and arrives at 0.6 s."},{t:"html",html:`<h2>How it works</h2>
<p>A spring does not need a physics loop. Its response to a step has a closed form, so the value at time <code>t</code> is one expression. That keeps the animation a <a href="#/techniques/seekable-frame">pure function of time</a>: seeking to any moment needs no simulation of the moments before it.</p>
<p>The two numbers mean what they say. <strong>Damping</strong> below 1 overshoots a little and returns; at 1 the value arrives without overshoot. <strong>Settle time</strong> is how long until it stays within 2 % of the target. In the demo, 0.72 gives about 3.8 % overshoot, which reads as life without looking like a cartoon.</p>
<p>Give the camera a slower, non-overshooting spring than the shape. The shape arrives first, then the frame comes to rest around it, and the eye follows the object before the view settles.</p>
<h2>How to build it</h2>
<pre><code class="language-js">// step response, 0 to 1. zeta = damping ratio, settle = seconds to stay within 2 %
function spring(t, zeta, settle) {
  if (t &lt;= 0) return 0;
  if (zeta &gt;= 1) { const w = 5.83 / settle; return 1 - (1 + w * t) * Math.exp(-w * t); }
  const w = 4 / (zeta * settle), r = Math.sqrt(1 - zeta * zeta), wd = w * r;
  return 1 - Math.exp(-zeta * w * t) * (Math.cos(wd * t) + (zeta / r) * Math.sin(wd * t));
}

// one spring per change of target, summed, so the value stays a function of t
const value = changes.reduce((v, c) =&gt; v + (c.to - c.from) * spring(t - c.at, 0.72, 0.35), start);
</code></pre>
<p>Both prompts that animate a main shape ask for this: &quot;when a value changes target several times, add one spring per change&quot; (<a href="https://x.com/0xnicc0/status/2107217691505516612" target="_blank" rel="noreferrer">0xnicc0</a>).</p>
<h2>Watch for</h2>
<ul>
<li><strong>Bounce.</strong> Damping near 0.3 looks like rubber. The prompts keep overshoot small and ban &quot;bouncy cartoon easing&quot;.</li>
<li><strong>One spring for everything.</strong> Give shape, camera and text their own numbers, or the scene moves as one lump.</li>
<li><strong>Easing curves for the camera.</strong> A cubic ease has no memory of an earlier move; a spring per change blends them.</li>
</ul>
<p><strong>Sources:</strong> <a href="https://x.com/flxrnc/status/2108242454105251921" target="_blank" rel="noreferrer">flxrnc-251921</a>, <a href="https://x.com/AnnaCher___/status/2103571098638152174" target="_blank" rel="noreferrer">annacher-152174</a>, <a href="https://x.com/0xnicc0/status/2107217691505516612" target="_blank" rel="noreferrer">0xnicc0-516612</a> in our prompt database. The numbers 0.72, 0.35, 1.0 and 0.6 are the prompt&#39;s; the formula and the 3.8 % figure are ours.</p>
`}]},{id:"technique-construction-lines",route:"#/techniques/construction-lines",title:"Technique: construction lines and broken strokes",label:"Construction lines",order:4,summary:"Leave the artist's scaffolding in the picture: faint guides under the contour, and a contour made of short strokes with gaps.",blocks:[{t:"html",html:`<h1>Technique: construction lines and broken strokes</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>A real sketch shows how it was made: a light box, a cross to find the centre, a looser first circle, then a darker contour that does not quite close. ProdAdvice lists &quot;broken strokes&quot; and &quot;light construction lines&quot; among the marks that give the handmade impression (<a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g&t=485s" target="_blank" rel="noreferrer">08:05</a>). Studio Igor&#39;s whale cartoon draws blue construction strokes before the main action (<a href="https://www.youtube.com/watch?v=YQ01D9xGAnk&t=49s" target="_blank" rel="noreferrer">0:49</a>).</p>
`},{t:"viz",id:"motion-techniques/construction-lines",caption:"One circle in three stages: guides (a dashed box, a cross and a looser circle), then a contour of seven short strokes with gaps, then both together with the guides left faint."},{t:"html",html:`<h2>How it works</h2>
<ul>
<li><strong>Guides</strong> go down first and in a second colour, so they read as scaffolding. A dashed bounding box, a cross through the centre and a slightly larger, looser circle are enough.</li>
<li><strong>The contour</strong> is split into short strokes. In the demo there are seven, each ending a little before the next begins, with the end points moved by a seeded offset.</li>
<li><strong>Together:</strong> when the contour lands, the guides drop to about half their strength (opacity 0.9 to 0.45 in the demo) and stay.</li>
</ul>
<p>The order matters for motion. Guides appear first, which gives the eye something to track; the strokes then arrive over them. A guide that appears after the contour looks like an error.</p>
<h2>How to build it</h2>
<p>Treat guides as their own layer with their own opacity token. The contour function takes a stroke count and a gap size, and returns a path with several sub-paths:</p>
<pre><code class="language-js">const strokes = 7, gap = 0.16;   // radians left open at each seam
for (let s = 0; s &lt; strokes; s++) {
  const a0 = (s / strokes) * TAU + gap / 2, a1 = ((s + 1) / strokes) * TAU - gap / 2;
  path.push(arc(cx, cy, r, a0, a1, jitter(seed + s)));
}
</code></pre>
<h2>Watch for</h2>
<ul>
<li><strong>Guides that compete with a label.</strong> Keep them out of the area reserved for text, or fade them out before the label arrives.</li>
<li><strong>Gaps that look like a rendering bug.</strong> If a seam is wider than a few pixels at delivery size, reduce the gap.</li>
<li><strong>Everything at once.</strong> Use guides on the hero object, not on every element of the frame.</li>
</ul>
<p><strong>Source:</strong> ProdAdvice, <a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g" target="_blank" rel="noreferrer">K1Mr5_7Gm3g</a> at 08:05-09:09, and Studio Igor, <a href="https://www.youtube.com/watch?v=YQ01D9xGAnk" target="_blank" rel="noreferrer">YQ01D9xGAnk</a> at 0:49-2:31. Stroke count, gap and opacity figures are from our demo.</p>
`}]},{id:"technique-downbeat-cuts",route:"#/techniques/downbeat-cuts",title:"Technique: cuts on the downbeat, without a startle",label:"Downbeat cuts",order:36,summary:"Give each scene a whole number of bars so every cut lands on a downbeat, and mark the cut with a chord change, not with volume.",blocks:[{t:"html",html:`<h1>Technique: cuts on the downbeat, without a startle</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>Two rules from one generated-soundtrack skill: where the cuts go, and how loud the music may get at a cut.</p>
`},{t:"viz",id:"motion-techniques/downbeat-cuts",caption:"Top, a strip of scenes of 2, 2 and 4 bars; each cut falls on a bar start. Below, four loudness jumps into a cut against the 6 dB line: an accent on the cut, kick and bass entering together, layers a bar apart, a chord change."},{t:"html",html:`<h2>Where the cuts go</h2>
<p>Each scene gets a whole number of bars (the tempo may flex per scene), so every cut lands on a downbeat. This extends the <a href="#/techniques/beat-grid">beat grid</a>: the grid is bars, and scene lengths are multiples of a bar.</p>
<h2>How loud a cut may be</h2>
<p>The skill reports its own measurements on short pieces:</p>
<ul>
<li>A loud accent on a cut (bass and a bright chime at once) reads as a jump scare: a jump of +7 to +10 dB was flagged as startling. A chord change with +3 to +5 dB reads as a clean edit.</li>
<li>Even the normal downbeat accent tipped short pieces over +6 dB, because the bar before is still decaying. The chord change is enough.</li>
<li>Kick and bass entering together after a quiet intro measured +11 dB. Staggered by a bar, +3.5 dB. Bring layers in one or two per bar.</li>
</ul>
<p>The skill&#39;s check script fails a cut that is off the beat by more than 100 ms (about three frames) or that jumps more than +6 dB against the second before. The demo draws that threshold as a line. The bar heights are the skill&#39;s quoted figures (the accent drawn at 8.5 and the chord change at 4, the middles of the quoted ranges).</p>
<p><strong>Sources:</strong> <a href="https://github.com/iart-ai/javascript-animation-skills" target="_blank" rel="noreferrer">iart-ai/javascript-animation-skills</a>, <code>skills/soundtrack/SKILL.md</code>. MIT licence.</p>
`}]},{id:"technique-error-log",route:"#/techniques/error-log",title:"Technique: an error log that turns into checks",label:"Error log",order:8,summary:"Keep a short list of concrete failures and the rule each one produced, so the next scene starts stronger without a longer prompt.",blocks:[{t:"html",html:`<h1>Technique: an error log that turns into checks</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>The last item on ProdAdvice&#39;s checklist is a list of errors (<a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g&t=614s" target="_blank" rel="noreferrer">10:14</a>). Studio Igor shows it working: when a character&#39;s hand goes behind the body while aiming upward, he adds a corrective rule to the skill (<a href="https://www.youtube.com/watch?v=YQ01D9xGAnk&t=854s" target="_blank" rel="noreferrer">14:14</a>). A mistake is paid for once and then guarded against.</p>
`},{t:"viz",id:"motion-techniques/error-log",caption:"Three concrete failures and the check each produces: a label collides with the phone crop at 3.2 s (keep labels 90 px inside the safe area), hatching flips direction between frames (one angle per object, fixed seed), text flickers as the contour redraws (labels follow continuous time)."},{t:"html",html:`<h2>How it works</h2>
<p>Each entry has two halves:</p>
<ul>
<li><strong>What went wrong,</strong> specific enough that someone else can find it: the thing, the symptom and the time.</li>
<li><strong>The check it becomes,</strong> a rule a script or an assistant can apply before it shows you anything.</li>
</ul>
<p>Good entries name numbers and times. &quot;Label collides with phone crop at 3.2 s&quot; is useful; &quot;text layout issues&quot; is not. A vague entry cannot become a check.</p>
<h2>Keep it short</h2>
<p>Do not paste an ever-growing transcript into every prompt. Cap the log at the failures that still matter, merge entries that say the same thing, and move a rule that is always true into the <a href="#/techniques/style-contract">style contract</a>. Version the file with the project, so a revert brings back the matching rules.</p>
<h2>Make it run</h2>
<p>The best rules are tested, not just read:</p>
<pre><code class="language-js">if (label.box.right &gt; frame.width - 90) fail(&quot;label inside safe area&quot;, label.id, time);
</code></pre>
<p>A rule that can fail loudly in the render step needs no one to remember it.</p>
<h2>Watch for</h2>
<ul>
<li><strong>Rules that fight each other.</strong> When two checks disagree, decide which wins and delete the other.</li>
<li><strong>A log nobody feeds.</strong> Add the entry in the same sitting as the fix, while the frame number is still in front of you.</li>
<li><strong>Rules from a different format.</strong> A check made for a map fact may not fit a character scene. Note the scope in the entry.</li>
</ul>
<p><strong>Source:</strong> ProdAdvice, <a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g" target="_blank" rel="noreferrer">K1Mr5_7Gm3g</a> at 10:14-11:41; Studio Igor, <a href="https://www.youtube.com/watch?v=YQ01D9xGAnk" target="_blank" rel="noreferrer">YQ01D9xGAnk</a> at 14:14-17:33. The three example entries are from our <span class="dead">HyperFrames tutorial study</span> and are illustrations.</p>
`}]},{id:"technique-feedback-passes",route:"#/techniques/feedback-passes",title:"Technique: feedback in passes",label:"Feedback passes",order:24,summary:"Improve a coded video in short passes, one concern at a time: pace, then sound, then music fitted to the beat.",blocks:[{t:"html",html:`<h1>Technique: feedback in passes</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>The tutorial&#39;s promo was not one prompt but a process: install HyperFrames, ask for key frames, tell it to keep to the brand and give your references, then refine step by step. First feedback on which scenes are too fast, then sound and music (a few options to choose from), after which the model fitted the animation to the music so it hooks harder (<a href="https://www.youtube.com/watch?v=yEpN_s9UkAE&t=493s" target="_blank" rel="noreferrer">ИИ МАСТОДОНТ, 08:13</a>). Other demos in the same video: the vertical Short took feedback such as &quot;redraw the logo, fast in places, slow in others&quot;, and the talking-head edit began dull and improved when he asked it to be creative and not follow a template (<a href="https://www.youtube.com/watch?v=yEpN_s9UkAE&t=555s" target="_blank" rel="noreferrer">09:15</a>, <a href="https://www.youtube.com/watch?v=yEpN_s9UkAE&t=667s" target="_blank" rel="noreferrer">11:07</a>). A prompt in our database reports the same shape: &quot;1 prompt and 2 rounds of feedback&quot; (<a href="https://x.com/daniel_haida/status/2104139720829636937" target="_blank" rel="noreferrer">daniel_haida</a>).</p>
`},{t:"viz",id:"motion-techniques/feedback-passes",caption:"Three versions. v1 has only picture, with the note that scenes are too fast. v2 adds sound to every movement. v3 adds a track cut to its beat. Each pass adds one layer."},{t:"html",html:`<h2>How it works</h2>
<p>A model that is asked for everything at once spreads its effort thin. One concern per pass keeps each change small enough to judge. The order matters: pace first (picture), then sound that matches visible movement, then music, which depends on pace being settled. Each pass starts from the last approved version and is checked with <a href="#/techniques/render-and-inspect">render and inspect</a>.</p>
<h2>How to build it</h2>
<ul>
<li>Pass 1: &quot;scenes 2 and 4 are too fast; hold each for at least 1.5 s&quot;. Re-check the <a href="#/techniques/timing-plan">timing plan</a>.</li>
<li>Pass 2: &quot;add a sound for every visible movement&quot; (the prompt database has one: &quot;make every sound match a movement you can see&quot;, <a href="https://x.com/adrianduta96/status/2109187815195992248" target="_blank" rel="noreferrer">adrianduta96</a>).</li>
<li>Pass 3: bring your own track or generate one without words, and ask to fit the video to the song and pick the best moments (<a href="https://www.youtube.com/watch?v=yEpN_s9UkAE&t=817s" target="_blank" rel="noreferrer">13:37</a>). Put the cuts on the <a href="#/techniques/beat-grid">beat grid</a>.</li>
<li>When it feels flat: ask it to be creative and not follow a template.</li>
</ul>
<h2>Watch for</h2>
<ul>
<li><strong>Mixed notes.</strong> &quot;Faster, add music and change the colour&quot; is three passes; the model will do one well.</li>
<li><strong>Music first.</strong> Changing pace afterwards breaks the fit.</li>
<li><strong>Music made in code.</strong> The author says he does not know how the model makes it and prefers his own track; one prompt in our database makes the soundtrack from sine waves and noise (<a href="https://x.com/daniel_haida/status/2104139720829636937" target="_blank" rel="noreferrer">daniel_haida</a>). Treat either as a draft to listen to.</li>
</ul>
<p><strong>Sources:</strong> ИИ МАСТОДОНТ, <a href="https://www.youtube.com/watch?v=yEpN_s9UkAE" target="_blank" rel="noreferrer">yEpN_s9UkAE</a> at 08:13, 09:15, 11:07 and 13:37; <a href="https://x.com/daniel_haida/status/2104139720829636937" target="_blank" rel="noreferrer">daniel-haida-636937</a> and <a href="https://x.com/adrianduta96/status/2109187815195992248" target="_blank" rel="noreferrer">adrianduta96-992248</a> in our prompt database.</p>
`}]},{id:"technique-hand-draw-on",route:"#/techniques/hand-draw-on",title:"Technique: a hand that draws on, tip on the point",label:"Hand draw-on",order:39,summary:"A whiteboard draw-on: one eased value draws the stroke, and the pen sits on the point at that same value; between strokes it lifts and moves unseen.",blocks:[{t:"html",html:`<h1>Technique: a hand that draws on, tip on the point</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>The VideoScribe look is a stroke that draws itself and a pen that never leaves the newest point. The trick is that both come from one number.</p>
`},{t:"viz",id:"motion-techniques/hand-draw-on",caption:"Two strokes, each drawn as 30 line pieces that fade in one after another. The pen sits on the newest point, lifts at the end of the first stroke and travels unseen to the start of the second."},{t:"html",html:`<h2>The mechanic</h2>
<p>Give each path <code>pathLength=&quot;1&quot;</code>, so a single value from 0 to 1 draws any path whatever its real length. Use a linear or very gentle ease: an ease-in-out on a long stroke makes the marker lurch. At progress <code>k</code>, sample the path at <code>k</code> and put the pen&#39;s nib there. Offset the pen art so its tip, not its corner, lands on the point. Between separate strokes lift the pen (fade out, jump, fade in) so it does not slide across blank board. Draw one thing at a time, in narration order.</p>
<h2>A sketch</h2>
<p>The skill uses <code>stroke-dashoffset</code>; our demo, which animates only transform and opacity, draws 30 short pieces instead.</p>
<pre><code class="language-js">path.setAttribute(&quot;pathLength&quot;, 1);
path.style.strokeDasharray = 1;
path.style.strokeDashoffset = 1 - k;          // k from 0 to 1
const p = path.getPointAtLength(k * path.getTotalLength());
pen.setAttribute(&quot;transform&quot;, \`translate(\${p.x - NIB.x} \${p.y - NIB.y})\`);
</code></pre>
<p>The nib stays glued because both the stroke and the pen read the same <code>k</code>. This is the <a href="#/techniques/seekable-frame">seekable frame</a> contract again: given <code>k</code>, the picture is known.</p>
<p><strong>Sources:</strong> <a href="https://github.com/iart-ai/explainer-video-skills" target="_blank" rel="noreferrer">iart-ai/explainer-video-skills</a>, <code>skills/whiteboard-animation/SKILL.md</code>. MIT licence.</p>
`}]},{id:"technique-harmonic-morph",route:"#/techniques/harmonic-morph",title:"Technique: shapes as harmonics, and morphing between them",label:"Harmonic morph",order:26,summary:"Store a closed outline as a few complex harmonics, then morph between two outlines by mixing coefficients. The same list is also a smoothness dial.",blocks:[{t:"html",html:`<h1>Technique: shapes as harmonics, and morphing between them</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>This technique comes from the owner&#39;s own project, a set of small browser games where every creature, asteroid and letter is a closed outline stored as Fourier coefficients (the project is private; the maths is standard). The idea fits video as well: an outline is a list of complex numbers, and a list of numbers can be mixed.</p>
`},{t:"viz",id:"motion-techniques/harmonic-morph",caption:"Left, a star becomes a house: the 12 largest harmonics of each outline are mixed from alpha 0 to 1, drawn as 14 in-between frames (dashed: the two full outlines). Right, the same star rebuilt from 2, 6 and 24 harmonics."},{t:"html",html:`<h2>How it works</h2>
<p>Walk once around a closed outline at constant speed and write each point as a complex number <code>x + iy</code>. A discrete Fourier transform turns the points into coefficients <code>c_k</code>, one per signed frequency <code>k</code>. The outline comes back as <code>point(t) = sum of c_k * exp(i * 2 * pi * k * t)</code> for <code>t</code> from 0 to 1. The <code>k = 0</code> term is the centre; <code>k = 1</code> alone is a circle; each further pair adds finer detail.</p>
<p>Two things follow:</p>
<ul>
<li><strong>Smoothness is a budget.</strong> Keep the centre and the few terms with the largest magnitude, and the outline loses its fine corners but keeps its character. This is a low-pass filter on a shape. It is also a size limit: 12 numbers instead of 96 points.</li>
<li><strong>A morph is a mix.</strong> If two shapes use the same frequencies, <code>mix(a, b, alpha)</code> is <code>a + (b - a) * alpha</code> on the real and imaginary part of each coefficient. A frequency missing on one side counts as zero. Every in-between frame is a valid, smooth outline, and <code>alpha</code> can be eased, sprung or keyed like any other number.</li>
</ul>
<h2>How to build it</h2>
<p>Do the DFT once, at authoring time, and keep the coefficients:</p>
<pre><code class="language-js">const N = 96;                                   // same sample count for every shape
const ca = selectLargest(dft(resample(star,  N)), 12);
const cb = selectLargest(dft(resample(house, N)), 12);

const pose = (t) =&gt; contour(mix(ca, cb, easeInOut(t)), 120);   // a pure function of t
ctx.fill(new Path2D(toPath(pose(t))));
</code></pre>
<p><code>resample</code> walks the polygon and returns <code>N</code> points spaced evenly by arc length. <code>selectLargest</code> keeps the centre plus the <code>budget</code> terms of largest magnitude. <code>contour</code> evaluates the sum at <code>m</code> values of <code>t</code>.</p>
<h2>Watch for</h2>
<ul>
<li><strong>Same start, same direction.</strong> Both outlines must run the same way round and start at the corresponding point. The project&#39;s own notes warn that automatic alignment by closest point does not guarantee the intended match: look at the middle frames.</li>
<li><strong>One fixed set per clip.</strong> Pick the harmonics once for the clip. Reselecting the largest terms on every in-between frame makes terms switch on and off and the outline twitch.</li>
<li><strong>One normalisation for the whole family.</strong> Scale and centre all shapes of a clip the same way, or the morph also resizes.</li>
<li><strong>Mid-way self-crossing.</strong> Two valid outlines can mix into one that crosses itself. Check frames at alpha 0.25, 0.5 and 0.75.</li>
<li><strong>Cost.</strong> The plain DFT is quadratic. Fine at authoring time for up to a few hundred samples; do not run it per frame.</li>
<li><strong>Corners.</strong> A low budget rounds them. That is a look, not a bug, but say so in the <a href="#/techniques/style-contract">style contract</a>.</li>
</ul>
<p><strong>Sources:</strong> the owner&#39;s project and its package notes (private repository); the maths is the standard Fourier description of a closed curve. The demo above runs a real DFT on two polygons. We built the demo and did not run a video through this pipeline.</p>
`}]},{id:"technique-harmonic-type",route:"#/techniques/harmonic-type",title:"Technique: letters as compound harmonic contours",label:"Harmonic type",order:27,summary:"A glyph is a few closed contours. Fill them as one compound path with the even-odd rule so holes stay open, and draw text from the same primitives as the art.",blocks:[{t:"html",html:`<h1>Technique: letters as compound harmonic contours</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>In the owner&#39;s game project the letters are not a font file. Each glyph is a short list of closed contours, stored as harmonics like every other shape (<a href="#/techniques/harmonic-morph">harmonic morph</a>), plus an advance width and an entry and exit point. Text is laid out from those glyphs. The picture and the type then come from one source, with one look.</p>
`},{t:"viz",id:"motion-techniques/harmonic-type",caption:"The letters O and A, each with an outer and an inner contour rebuilt from 16 harmonics. Non-zero fill (left) fills the holes in; even-odd fill of one compound path (right) keeps them open."},{t:"html",html:`<h2>How it works</h2>
<p>An &quot;O&quot; is two contours: the outside and the hole. Draw them as two separate shapes and the hole is covered. Draw them as one path with several sub-paths and the fill rule decides. With the non-zero rule, two contours that run the same way both count as &quot;inside&quot;, so the hole fills. With the even-odd rule, a point is inside when a ray from it crosses an odd number of edges, so the hole stays open whichever way the contours run (<a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/fill-rule" target="_blank" rel="noreferrer">MDN: fill-rule</a>).</p>
<p>The project draws a glyph as one compound path with even-odd fill, and sizes text through the font&#39;s units per em. Spaces use a stored space advance. A missing character is an error, not a silent gap.</p>
<h2>How to build it</h2>
<pre><code class="language-js">function glyphPath(glyph, scale, x, y) {
  let d = &quot;&quot;;
  for (const c of glyph.contours) d += pathOf(contour(c.harmonics, 96), x, y, scale); // M..L..Z each
  return d;                                    // one string, several sub-paths
}
ctx.fill(new Path2D(glyphPath(g, size, penX, baseline)), &quot;evenodd&quot;);
penX += g.advance * size;
</code></pre>
<p>A letter animates like any other <a href="#/techniques/harmonic-morph">harmonic shape</a>: its contours can be mixed with another letter&#39;s, as long as both have the same number of contours in the same order. Each contour can also go through the <a href="#/techniques/kinetic-type">kinetic type</a> timing.</p>
<h2>Watch for</h2>
<ul>
<li><strong>Hole contours too.</strong> Every hole is its own contour in the glyph. Forget it and the &quot;A&quot; is a solid triangle.</li>
<li><strong>Missing characters.</strong> Decide the character set before the first draw; fall back loudly.</li>
<li><strong>Baseline and Y direction.</strong> The caller owns the baseline and the axis direction. Pick one and test a letter with a descender.</li>
<li><strong>Legibility is a visual check.</strong> A low harmonic budget rounds the corners and can make &quot;A&quot; and &quot;R&quot; look alike. The project says recognisable silhouettes are acceptance checks for the consuming game, not something numbers can prove.</li>
<li><strong>Licensing.</strong> Letter shapes you draw yourself are yours; do not trace a font you are not allowed to copy.</li>
</ul>
<p><strong>Sources:</strong> the owner&#39;s project (private repository) and its package notes. Our demo builds two letters from polygons through a real DFT. We have not set a full alphabet.</p>
`}]},{id:"technique-hatching",route:"#/techniques/hatching",title:"Technique: hatching instead of a flat fill",label:"Hatching",order:3,summary:"Shade with strokes, not with a solid colour. A circle-and-chord recipe, a second crossing pass and the reasons it keeps a drawing from looking digital.",blocks:[{t:"html",html:`<h1>Technique: hatching instead of a flat fill</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>A flat fill is the clearest sign of a computer-made drawing. A pencil shades by laying down many short parallel strokes, and the viewer reads their spacing as light and dark. ProdAdvice shows this as a diagram that contrasts a flat fill with hatched shading (<a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g&t=540s" target="_blank" rel="noreferrer">09:00</a>).</p>
`},{t:"viz",id:"motion-techniques/hatching",caption:"The same ball twice. Left, a flat fill. Right, diagonal strokes only on the side away from the light, then a second pass crossing the darkest part."},{t:"html",html:`<h2>How it works</h2>
<ol>
<li>Decide where the light comes from. In the demo it is the upper left, so the shadow is on the lower right.</li>
<li>Lay parallel strokes at one angle (45 degrees here), spaced 6 px apart, only where the surface is in shadow. Each stroke runs from one edge of the shape to the other.</li>
<li>Add a second pass at the crossing angle over the deepest part only. Two directions read as a darker tone than one.</li>
<li>Wobble each stroke slightly with a seeded offset (1.6 px in the demo), so the lines are not machine-straight. Draw the strokes on in order, not all at once, if the shape appears by being drawn.</li>
</ol>
<h2>How to build it</h2>
<p>For a circle the strokes are chords. Lines <code>x + y = k</code> cut a circle of radius <code>r</code> at distance <code>d = |cx + cy - k| / sqrt(2)</code> from its centre, with half-length <code>sqrt(r * r - d * d)</code>, so no clipping mask is needed. For other shapes, clip a set of long diagonal lines to the shape and keep those on the shadow side.</p>
<p>Spacing is the tone control. Closer strokes are darker, so a gradient of shade is a gradient of spacing, not of opacity.</p>
<h2>Watch for</h2>
<ul>
<li><strong>Hatching that changes direction between frames.</strong> Fix the angle per object and seed the offsets; see <a href="#/techniques/cadence-and-seed">Drawing cadence and a stable seed</a>. Put this failure in your <a href="#/techniques/error-log">error log</a>.</li>
<li><strong>Shading under text.</strong> Keep the area behind a label free of strokes, or the label loses contrast.</li>
<li><strong>Too many strokes.</strong> A busy shape competes with the message. Reserve the dense hatch for one object.</li>
</ul>
<p><strong>Source:</strong> ProdAdvice, <a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g" target="_blank" rel="noreferrer">K1Mr5_7Gm3g</a> at 08:05-09:09. The chord arithmetic and the spacing values are from our demo.</p>
`}]},{id:"technique-importance-budget",route:"#/techniques/importance-budget",title:"Technique: an importance budget",label:"Importance budget",order:34,summary:"Rate every beat 1, 2 or 3 and give level 3 to at most a quarter of them, so the biggest moves still mean something.",blocks:[{t:"html",html:`<h1>Technique: an importance budget</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>Animating every line as if it were the point is the most common tell of generated motion: nothing arrives because everything does. The Motionmaxxing director guide fixes it with a budget.</p>
`},{t:"viz",id:"motion-techniques/importance-budget",caption:"Eight beats rated 1, 2 or 3, drawn as bars. Two of the eight (25 percent) are level 3 and carry the scale, the camera move and the sound."},{t:"html",html:`<h2>The rule</h2>
<p>Give every beat, and every line inside it, an importance of 1, 2 or 3. At most 25 percent of the beats may be 3. Level 3 gets the scale, the camera move, the sound and the hardest work. Level 1 is small and quick. When two elements fight for attention, delete one before restyling either. On a line with a number, the number is the hero, at least twice the scale of the line.</p>
<h2>How to apply it</h2>
<ol>
<li>Add an importance column to the storyboard table (<a href="#/techniques/storyboard-first">storyboard first</a>).</li>
<li>Count: with eight beats, at most two may be 3. The hero moment is one of them.</li>
<li>Spend the effort in that order: <a href="#/techniques/render-and-inspect">render and inspect</a> the level 3 beats first.</li>
</ol>
<p><strong>Sources:</strong> <a href="https://github.com/Tejashmakwana/motionmaxxing" target="_blank" rel="noreferrer">Tejashmakwana/motionmaxxing</a>, <code>references/director.md</code> (section 0 and the checklist, item 12) and <code>SKILL.md</code>. Apache 2.0 licence.</p>
`}]},{id:"technique-independent-clocks",route:"#/techniques/independent-clocks",title:"Technique: a clock per motion, accumulated",label:"Independent clocks",order:29,summary:"Change a speed without moving the past: advance each motion's own phase by speed times dt, and give every motion its own clock.",blocks:[{t:"html",html:`<h1>Technique: a clock per motion, accumulated</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>The owner&#39;s game project moves planets around stars and spins them. Its notes state the rule: orbit and spin speeds advance independent accumulated clocks, so changing a slider changes only future motion and never recalculates the past at the new speed. The ocean waves keep a third, real-time clock, so stopping a planet&#39;s rotation does not freeze the sea. It is a game rule, and it solves a real problem in speed ramps and slow motion.</p>
`},{t:"viz",id:"motion-techniques/independent-clocks",caption:"Speed goes from 1x to 3x at 2 s. Left: phase = speed(t) * t, so the phase jumps from 2 to 6 at the change. Right: phase += speed * dt, so the phase only changes slope."},{t:"html",html:`<h2>How it works</h2>
<p>If a motion is written as <code>angle = speed * t</code>, changing <code>speed</code> at 2 s re-scales everything before it: at the moment of the change the angle jumps from <code>1 * 2</code> to <code>3 * 2</code>. The picture pops. The fix is to store the phase itself and advance it: <code>phase += speed * dt</code>. A change of speed now bends the curve and leaves its past alone. Each motion has its own phase (orbit, spin, waves, a camera drift), so you can slow one without touching the others.</p>
<p>For video the phase must still be a function of time, or <a href="#/techniques/seekable-frame">seeking</a> breaks. Phase is the integral of speed, so build a table once and read it:</p>
<pre><code class="language-js">const fps = 30, phase = new Float64Array(frames + 1);
for (let f = 1; f &lt;= frames; f++) phase[f] = phase[f - 1] + speed((f - 0.5) / fps) / fps;
// renderAt(t) reads phase[Math.floor(t * fps)], or interpolates between two entries
</code></pre>
<p>Keep one table per motion. A speed ramp is then a few keys in <code>speed(t)</code> (eased with <a href="#/techniques/closed-form-springs">springs</a> or a <a href="#/techniques/camera-curves">Hermite curve</a>), never a step.</p>
<h2>Watch for</h2>
<ul>
<li><strong>Step changes of speed.</strong> A step in speed is a step in velocity: a visible kick. Ramp it over a few frames.</li>
<li><strong>Loops.</strong> A <a href="#/techniques/seamless-loop">seamless loop</a> needs the phase to come back to a multiple of one turn at the end; check the table&#39;s last entry.</li>
<li><strong>Sound.</strong> If the sound follows the motion, drive it from the same phase table.</li>
<li><strong>Slow motion.</strong> A slow-down is a lower <code>speed</code> for a while. Do not render at a lower frame rate and stretch it; use <a href="#/techniques/subframe-blur">subframe blur</a> if the motion needs it.</li>
</ul>
<p><strong>Sources:</strong> the owner&#39;s project notes on celestial motion (private repository). The table code is our proposal; we have not rendered a clip with it.</p>
`}]},{id:"technique-kinetic-type",route:"#/techniques/kinetic-type",title:"Technique: kinetic type per glyph",label:"Kinetic type per glyph",order:19,summary:"Treat every letter as its own element with its own spring and a fixed stagger, so words arrive as a rhythm and not as a block.",blocks:[{t:"html",html:`<h1>Technique: kinetic type per glyph</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>One prompt in our database spells out how a poster-style word should arrive: &quot;per-glyph spring (y, opacity, blur). Stagger = 1/16 note at 120 BPM (125 ms)&quot; (<a href="https://x.com/techhalla/status/2103411244468498547" target="_blank" rel="noreferrer">techhalla</a>). The same prompt asks for a slam from below with spring overshoot for the opening line, and for letters that scramble (a seeded shuffle per glyph) and then snap into place on the beat. Another asks for the wordmark to rise letter by letter from a mask line (<a href="https://x.com/0xnicc0/status/2107217691505516612" target="_blank" rel="noreferrer">0xnicc0</a>).</p>
`},{t:"viz",id:"motion-techniques/kinetic-type",caption:"Each letter of STEAL is its own element and rises 125 ms after the one before. The ticks under the word are the start offsets: 0, 125, 250, 375 and 500 ms."},{t:"html",html:`<h2>How it works</h2>
<p>A word that fades in as one block has one motion. A word whose letters start 125 ms apart has a rhythm, and the rhythm locks to the <a href="#/techniques/beat-grid">beat grid</a>: at 120 BPM, 125 ms is a sixteenth note, so the last letter still lands within the beat. Each glyph carries three animated values (vertical offset, opacity, blur), each from its own <a href="#/techniques/closed-form-springs">spring</a> started at <code>start + index * 0.125</code>.</p>
<h2>How to build it</h2>
<pre><code class="language-js">const STAGGER = 0.125;                              // 1/16 note at 120 BPM
for (const [i, g] of glyphs.entries()) {
  const k = spring(t - (start + i * STAGGER), 0.72, 0.35);
  drawGlyph(g, { y: (1 - k) * 40, alpha: k, blur: (1 - k) * 12 });
}
</code></pre>
<p>For the scramble variant, shuffle with a <a href="#/techniques/cadence-and-seed">seeded</a> shuffle per glyph, never <code>Math.random</code>.</p>
<h2>Watch for</h2>
<ul>
<li><strong>Too many words.</strong> The same prompt limits the display type to one to four words.</li>
<li><strong>Stagger longer than the beat.</strong> Forty letters at 125 ms take five seconds; stagger by word, not by letter, for long lines.</li>
<li><strong>Blur you cannot read.</strong> Keep the final frame crisp; blur is for the first 150 ms.</li>
</ul>
<p><strong>Sources:</strong> <a href="https://x.com/techhalla/status/2103411244468498547" target="_blank" rel="noreferrer">techhalla-498547</a>, <a href="https://x.com/0xnicc0/status/2107217691505516612" target="_blank" rel="noreferrer">0xnicc0-516612</a> in our prompt database; the snippet is ours.</p>
`}]},{id:"technique-layered-assets",route:"#/techniques/layered-assets",title:"Technique: painted layers, with light and text in code",label:"Layered assets",order:10,summary:"Generate the detailed pictures as separate transparent layers, then let code do depth, light, particles and text. Parallax is the proof it works.",blocks:[{t:"html",html:`<h1>Technique: painted layers, with light and text in code</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>Studio Igor&#39;s first platformer, drawn entirely in code, scored 2/10; he stopped after 37 minutes and 12 % of a weekly model allowance. His second attempt generated the pictures as images and let code move them (<a href="https://www.youtube.com/watch?v=YQ01D9xGAnk&t=369s" target="_blank" rel="noreferrer">6:09</a>). The split is the technique: images carry painted forms and texture, code carries scale, position, light, motion and interaction (<a href="https://www.youtube.com/watch?v=YQ01D9xGAnk&t=468s" target="_blank" rel="noreferrer">7:48</a>).</p>
`},{t:"viz",id:"motion-techniques/layers",caption:"Background, subject and foreground are images; light and text are code. Composed, a slow sideways camera moves the foreground by 18 px, the subject by 9 px and the background by 4 px (demo values) while the code layer stays still."},{t:"html",html:`<h2>How it works</h2>
<ul>
<li><strong>Separate by depth.</strong> Generate the background, the subject and the foreground as their own layers, each on a transparent ground with room around the subject.</li>
<li><strong>Keep mutable effects out of the pictures.</strong> Glow, shadow, particles, text and water are deliberately excluded from generated images (<a href="https://www.youtube.com/watch?v=YQ01D9xGAnk&t=1152s" target="_blank" rel="noreferrer">19:12</a>). Draw them in code, where one number changes them.</li>
<li><strong>Move layers by depth.</strong> When the camera shifts sideways, near layers shift more than far ones. That is parallax, and it is what makes flat pictures read as a space.</li>
<li><strong>Hold text still.</strong> Text belongs to the code layer, so it never slides with the picture.</li>
</ul>
<h2>Check before you animate</h2>
<ul>
<li><strong>Holes.</strong> When a layer moves, look for gaps at its edges. Draw layers wider than the frame, as the demo does.</li>
<li><strong>A clean subject.</strong> Neutral light and no baked shadow, so the lighting you add does not fight the lighting in the picture.</li>
<li><strong>A recorded source.</strong> Save each asset with its prompt, model and source reference, so a bad layer can be regenerated.</li>
</ul>
<h2>Limits</h2>
<p>The method suits scenes and cutout characters. Studio Igor rejected AI sprite sheets and cutting one generated character into pieces; he generates separate body parts in an agreed pose and assembles them (<a href="https://www.youtube.com/watch?v=YQ01D9xGAnk&t=1152s" target="_blank" rel="noreferrer">19:12</a>). It is not a replacement for frame animation, and the allowance percentages are one creator&#39;s account, not a transferable cost.</p>
<p>Details and a proposed experiment for a 5 to 10 s shot are in <span class="dead">Layered art tutorial study</span>. The author&#39;s open <a href="https://github.com/studioigor/ref2game" target="_blank" rel="noreferrer">ref2game skill</a> describes the workflow.</p>
<p><strong>Source:</strong> Studio Igor, <a href="https://www.youtube.com/watch?v=YQ01D9xGAnk" target="_blank" rel="noreferrer">YQ01D9xGAnk</a> at 6:09-8:59 and 19:12-20:55. The pixel shifts in the demo are illustrative.</p>
`}]},{id:"technique-line-boil",route:"#/techniques/line-boil",title:"Technique: line boil, a contour that is redrawn while the shape stays still",label:"Line boil",order:1,summary:"Redraw each outline a dozen times a second with a little wobble, so a still pose looks hand-drawn. How it works, a small code recipe and where it goes wrong.",blocks:[{t:"html",html:`<h1>Technique: line boil</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>Hand-drawn animation never repeats a line exactly. Even a character holding still has an outline that trembles, because the artist redraws it for every drawing. Line boil copies that on purpose: the silhouette stays where it is, and only the stroke is redrawn, about 12 times a second.</p>
`},{t:"viz",id:"motion-techniques/line-boil",caption:"One circle, six drawings. On the left they play in turn, one every 83 ms, which is 12 drawings a second; on the right the same six are laid over each other. The shape does not move, only its edge does."},{t:"html",html:`<h2>How it works</h2>
<p>Two things move on different clocks. The object (its position, size, rotation) follows the scene timeline smoothly. The outline of that object is a separate set of points, and those points are displaced by a small random amount, a new amount for each drawing. ProdAdvice describes exactly this for &quot;otherwise still contours&quot; at 12 fps (<a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g&t=485s" target="_blank" rel="noreferrer">08:05</a>), and Studio Igor&#39;s whale cartoon uses the same effect with &quot;vibrating contours&quot; at about 12 drawings a second (<a href="https://www.youtube.com/watch?v=YQ01D9xGAnk&t=49s" target="_blank" rel="noreferrer">0:49</a>).</p>
<p>The displacement is small. In the demo above it is 2.6 px on a circle of 62 px radius, which is about 4 % of the radius. A larger amount reads as shaking, not as pencil.</p>
<h2>How to build it</h2>
<p>Our own recipe, not recovered source code:</p>
<pre><code class="language-js">// one drawing = the same points, each moved by a seeded random offset
function boil(points, drawing, amp, sceneSeed) {
  const rand = mulberry32(sceneSeed + drawing);
  return points.map(([x, y]) =&gt; [x + (rand() - 0.5) * 2 * amp, y + (rand() - 0.5) * 2 * amp]);
}
const drawing = Math.floor(time * 12);   // the drawing cadence
draw(boil(outline, drawing, 2.6, 7));
</code></pre>
<p>Keep the position of the object outside this function. Pass the amplitude as one token of the style (see <a href="#/techniques/style-contract">Style contract</a>), so one number changes the whole film.</p>
<h2>Watch for</h2>
<ul>
<li><strong>Noise everywhere.</strong> Move only the strokes, never the labels or numbers. A label that wobbles is hard to read.</li>
<li><strong>Too large an amplitude.</strong> If the shape seems to swim, halve the amount.</li>
<li><strong>A drawing rhythm tied to the file.</strong> The drawing index must come from time, not from the frame number. See <a href="#/techniques/cadence-and-seed">Drawing cadence and a stable seed</a>.</li>
<li><strong>Sparkle.</strong> Judge it at normal playback speed, not frame by frame. A single frame always looks fine.</li>
</ul>
<p><strong>Source:</strong> ProdAdvice, <a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g" target="_blank" rel="noreferrer">K1Mr5_7Gm3g</a>, and Studio Igor, <a href="https://www.youtube.com/watch?v=YQ01D9xGAnk" target="_blank" rel="noreferrer">YQ01D9xGAnk</a>; both are analysed in <span class="dead">HyperFrames tutorial study</span> and <span class="dead">Layered art tutorial study</span>. The amplitude figure is from our demo, not from either video.</p>
`}]},{id:"technique-locked-message",route:"#/techniques/locked-message",title:"Technique: a locked message and a ban list",label:"Locked message and bans",order:25,summary:"Fix the exact words and their order, and list what must not appear, so the model spends its effort on motion and not on inventing copy.",blocks:[{t:"html",html:`<h1>Technique: a locked message and a ban list</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>The most precise prompt in our database does two things that cost nothing and remove most of the risk. It <strong>locks the message</strong>: six lines &quot;in this exact order&quot;, with the instruction &quot;do not soften, do not add filler slogans&quot;, and small supporting words (at most 18 characters, never full sentences). And it <strong>bans</strong> a list: &quot;generic AI clichés (brains, robots, neural nets, sparkles), soft gradients, bouncy cartoon easing, particle explosions, stock futuristic HUD, long paragraphs, narrator essay energy, Canva-deck energy, extra slogans, purple/blue neon, glassmorphism&quot; (<a href="https://x.com/techhalla/status/2103411244468498547" target="_blank" rel="noreferrer">techhalla</a>). Other prompts ban the same family: &quot;crossfades, gradients on UI, particles, glows, bouncy easing, dead beats, anything that feels like a template&quot; (<a href="https://x.com/0xnicc0/status/2107217691505516612" target="_blank" rel="noreferrer">0xnicc0</a>).</p>
`},{t:"viz",id:"motion-techniques/locked-message",caption:"Left: six lines of text in a fixed order, the only words allowed on screen. Right: a ban list, each item struck through."},{t:"html",html:`<h2>How it works</h2>
<p>A model left alone adds slogans and decoration. A locked message takes the writing away from it, so all its effort goes into timing, type and camera. A ban list does the opposite job: it removes the generic defaults that make a piece look made by a template. Together with strict numbers (a palette of three hex values, three named fonts, tracking values) they leave little room for a generic result.</p>
<h2>How to build it</h2>
<ul>
<li>Write the lines first and number them; each line gets one beat on the <a href="#/techniques/beat-grid">beat grid</a>.</li>
<li>Put them in the <a href="#/techniques/style-contract">style contract</a> with palette and fonts as values.</li>
<li>Add the ban list as a check in the <a href="#/techniques/error-log">error log</a>: after each render, look for anything on the list.</li>
<li>Keep it short; the prompt&#39;s list has about a dozen items, not fifty.</li>
</ul>
<h2>Watch for</h2>
<ul>
<li><strong>A message locked too early.</strong> Lock it after you are sure of the story; changing it later is a rewrite.</li>
<li><strong>Bans without a reason.</strong> A list the model does not understand gets worked around. Say what to do instead (for example, &quot;springs, tiny overshoot at most&quot;).</li>
<li><strong>Copy you did not write.</strong> A locked line you did not write still needs a source and a check; see <span class="dead">auditing a video</span>.</li>
</ul>
<p><strong>Sources:</strong> <a href="https://x.com/techhalla/status/2103411244468498547" target="_blank" rel="noreferrer">techhalla-498547</a>, <a href="https://x.com/0xnicc0/status/2107217691505516612" target="_blank" rel="noreferrer">0xnicc0-516612</a> in our prompt database. We have read the prompts, not run them.</p>
`}]},{id:"technique-lower-third",route:"#/techniques/lower-third",title:"Technique: a lower third that stays inside the safe area",label:"Lower third",order:38,summary:"A name strap in the bottom third: inside title-safe, motion only in the build-in and build-out, and a hold that stands still while it is read.",blocks:[{t:"html",html:`<h1>Technique: a lower third that stays inside the safe area</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>A lower third is a small, repeatable overlay, so its rules are few and strict.</p>
`},{t:"viz",id:"motion-techniques/lower-third",caption:"Left, a 16:9 frame with a dashed title-safe line and a strap sliding in at the lower left (the name is a placeholder). Right, the clip: lead 0.2 s, in 0.8 s, hold 5.5 s, out 0.5 s, tail 0.2 s."},{t:"html",html:`<h2>The rules</h2>
<ul>
<li><strong>Inside title-safe.</strong> Every pixel at least 5 percent in from each edge (the skill&#39;s template uses 6 percent). The lower third lives in the bottom third; the middle of the frame stays empty for the speaker.</li>
<li><strong>Still while read.</strong> The motion is in the build-in and build-out. The hold does not move, or moves so little it does not pull the eye (one slow sheen at most).</li>
<li><strong>Defaults when none are given:</strong> 1920 by 1080 at 30 fps, about 8 seconds (under a second in, a still hold of 5 to 6 seconds, half a second out), lower left, silent.</li>
</ul>
<p>The demo&#39;s timeline adds a 0.2 s lead and tail as an empty first and last frame; the skill&#39;s check looks for empty first and last frames. Its numbers 0.8 in and 5.5 hold fit the quoted ranges.</p>
<h2>Checks</h2>
<p>The skill renders over a checkerboard and over dark and light footage, then checks that every word reads on both and nothing shows outside the revealed part of its panel. Do the same with <a href="#/techniques/render-and-inspect">render and inspect</a>. For a transparent delivery use WebM or <code>.mov</code> with alpha; H.264 has none.</p>
<p><strong>Sources:</strong> <a href="https://github.com/iart-ai/lower-thirds-skills" target="_blank" rel="noreferrer">iart-ai/lower-thirds-skills</a>, <code>skills/lower-thirds/SKILL.md</code>. MIT licence.</p>
`}]},{id:"technique-mask-reveal",route:"#/techniques/mask-reveal",title:"Technique: a reveal through the letters",label:"Mask reveal",order:20,summary:"Replace one line of text with the next by turning the outgoing word into a window, so the cut is made by the type itself.",blocks:[{t:"html",html:`<h1>Technique: a reveal through the letters</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>One prompt describes a transition that needs no cross-fade: &quot;BAD PROMPTING IS&quot; replaces the previous line &quot;via mask wipe through the letterforms (the outgoing line is the mask)&quot;, with a magenta and green channel split on the cut. The required technique is stated plainly: &quot;destination text revealed by animating a path mask derived from the outgoing word&#39;s outlines&quot; (<a href="https://x.com/techhalla/status/2103411244468498547" target="_blank" rel="noreferrer">techhalla</a>).</p>
`},{t:"viz",id:"motion-techniques/mask-reveal",caption:"Left: the outgoing plate with the word BAD. Middle: the word becomes a window and the next scene shows through the letterforms. Right: the window grows until the next scene fills the frame."},{t:"html",html:`<h2>How it works</h2>
<p>The old word is on a plate. To leave, the plate gets a hole in the shape of the word. Through the hole you see the next scene. Then the hole grows (the letters scale up) until the plate is gone. The viewer sees one object, the word, doing the cutting, so the change reads as designed, not as a fade. The mask path is derived from the same outlines that drew the word, so the two cannot drift apart.</p>
<h2>How to build it</h2>
<p>In SVG or Canvas, draw the destination, then the plate with the outgoing text as a cut-out:</p>
<pre><code class="language-html">&lt;mask id=&quot;m&quot;&gt;&lt;rect width=&quot;100%&quot; height=&quot;100%&quot; fill=&quot;#fff&quot;/&gt;
  &lt;text id=&quot;word&quot; fill=&quot;#000&quot; font-size=&quot;54&quot;&gt;BAD&lt;/text&gt;&lt;/mask&gt;
&lt;rect class=&quot;destination&quot;/&gt;                     &lt;!-- next scene --&gt;
&lt;rect class=&quot;plate&quot; mask=&quot;url(#m)&quot;/&gt;            &lt;!-- outgoing scene, with the word cut out --&gt;
</code></pre>
<p>Drive <code>font-size</code> (or a scale on the text in the mask) from a <a href="#/techniques/closed-form-springs">spring</a> of time, so the reveal stays seekable. Add the <a href="#/techniques/misregistration">misregistration</a> on the cut frame.</p>
<h2>Watch for</h2>
<ul>
<li><strong>A thin face.</strong> A light font makes a window too small to see through; use a heavy display font, as the prompt does (Archivo Black).</li>
<li><strong>Mask and word out of step.</strong> Use the same size, tracking and position for both.</li>
<li><strong>A fade as a fallback.</strong> If the mask is not ready, cut instead; do not fade.</li>
</ul>
<p><strong>Source:</strong> <a href="https://x.com/techhalla/status/2103411244468498547" target="_blank" rel="noreferrer">techhalla-498547</a> in our prompt database. We have read the prompt, not run it; the demo is our drawing.</p>
`}]},{id:"technique-misregistration",route:"#/techniques/misregistration",title:"Technique: print misregistration",label:"Print misregistration",order:21,summary:"Show two offset colour copies of text for a moment on impact frames only, like a badly aligned print.",blocks:[{t:"html",html:`<h1>Technique: print misregistration</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>A street-poster look can be made with a cheap trick from print: two ink colours that do not line up. The prompt says when and how much: &quot;on accent frames only, duplicate the text layer offset (±2–4 px) in magenta and acid green at 40% opacity&quot;, and &quot;magenta and green may misregister (print offset) by 2 to 4 px on impact frames only&quot; (<a href="https://x.com/techhalla/status/2103411244468498547" target="_blank" rel="noreferrer">techhalla</a>).</p>
`},{t:"viz",id:"motion-techniques/misregistration",caption:"At the two impact marks a blue and an orange copy of IMPACT appear behind the word, offset 4 px at 45 % opacity, then vanish. Between impacts the text is clean."},{t:"html",html:`<h2>How it works</h2>
<p>The offset copies add a hit to a beat: they make an impact look physical. The rule &quot;impact frames only&quot; matters as much as the effect. If the colour split is always on, it is a style filter; if it appears on the beat and disappears, it is an accent. The values are small on purpose: 2 to 4 px at 40 %.</p>
<h2>How to build it</h2>
<pre><code class="language-js">function drawTitle(t) {
  drawText(ink, 0, 0);                        // the clean text
  const hit = impact(t);                      // 1 on an impact frame, 0 otherwise (from the beat grid)
  if (hit) {
    drawText(accentA, -3, 0, 0.4);            // behind, offset left
    drawText(accentB, +3, +2, 0.4);           // behind, offset right
  }
}
</code></pre>
<p>Take <code>impact(t)</code> from the <a href="#/techniques/beat-grid">beat grid</a> and keep it to a few frames.</p>
<h2>Watch for</h2>
<ul>
<li><strong>Always on.</strong> It stops reading as an impact.</li>
<li><strong>Large offsets.</strong> Past about 4 px the text becomes hard to read at phone size.</li>
<li><strong>Wrong palette.</strong> The prompt pairs two accent colours with one dark background and one white; other hues are banned.</li>
</ul>
<p><strong>Source:</strong> <a href="https://x.com/techhalla/status/2103411244468498547" target="_blank" rel="noreferrer">techhalla-498547</a> in our prompt database; the snippet is ours.</p>
`}]},{id:"technique-motion-defaults",route:"#/techniques/motion-defaults",title:"Technique: motion defaults in frames",label:"Motion defaults",order:33,summary:"When nobody says how long a move lasts, use measured medians: opacity 6 frames, entrances 12, blur 7, exits 10 to 13, at 30 fps.",blocks:[{t:"html",html:`<h1>Technique: motion defaults in frames</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>A default duration saves a decision on every element. The Motionmaxxing skill keeps a table of medians measured on a corpus of product films, and a rule for when no other information exists.</p>
`},{t:"viz",id:"motion-techniques/motion-defaults",caption:"Six defaults at 30 fps. Each bar is one move, with its length in frames and in milliseconds. The highlighted bar (a translate or scale entrance, 12 frames) is the one to reach for first."},{t:"html",html:`<h2>The defaults</h2>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Move</th>
<th>Frames at 30 fps</th>
<th>Milliseconds</th>
</tr>
</thead>
<tbody><tr>
<td>Opacity in</td>
<td>6</td>
<td>200</td>
</tr>
<tr>
<td>Call to action, supporting move</td>
<td>6</td>
<td>200</td>
</tr>
<tr>
<td>Blur in</td>
<td>7</td>
<td>233</td>
</tr>
<tr>
<td>Scale out</td>
<td>10</td>
<td>333</td>
</tr>
<tr>
<td>Translate or scale in</td>
<td>12</td>
<td>400</td>
</tr>
<tr>
<td>Translate out</td>
<td>13</td>
<td>433</td>
</tr>
</tbody></table></div>
<p>The skill states the rule as: with no other information, use 12 frames for a translate or scale entrance, 6 for opacity, 7 for blur, 13 to 14 for a translate exit and 10 for a scale exit; treat 6 and 24 frames as the 25th and 75th percentile edges. The median over all moves in its sample is 10 frames (0.33 s). The demo draws 13 for the translate exit, the lower end of the skill&#39;s range.</p>
<h2>How to use them</h2>
<ul>
<li>Keep durations in frames, not seconds, and derive milliseconds when you need them, as in the <a href="#/techniques/timing-plan">timing plan</a>.</li>
<li>Land entrances with an ease-out: the skill reports that most landings cover the bulk of their travel in the first four frames.</li>
<li>A film built on 20 to 30 frame ease-outs for everything is slower than the whole sample. Start from these numbers, then change one on purpose.</li>
</ul>
<p><strong>Sources:</strong> <a href="https://github.com/Tejashmakwana/motionmaxxing" target="_blank" rel="noreferrer">Tejashmakwana/motionmaxxing</a>, <code>references/motion.md</code> (rule R1.1 and the duration table) and <code>README.md</code>. Apache 2.0 licence. The numbers are the skill&#39;s; the demo is our drawing.</p>
`}]},{id:"technique-number-readout",route:"#/techniques/number-readout",title:"Technique: a number as a readout, not a slam",label:"Number readout",order:12,summary:"Show a figure small, beside the thing it measures, on the spoken word, with a thin measuring line. It reads as evidence, not as decoration.",blocks:[{t:"html",html:`<h1>Technique: a number as a readout, not a slam</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>In the demo from Andrey Zenin&#39;s tutorial, every number is an instrument readout (<a href="https://www.youtube.com/watch?v=YyUP_hSovOg&t=146s" target="_blank" rel="noreferrer">2:26</a>). A thin measuring line and &quot;50 M&quot; stand beside a drop tower. The text is about 3 % of the frame height, not a headline.</p>
`},{t:"viz",id:"motion-techniques/readout",caption:'The same drop tower in two portrait frames. Left, a slam: a large "50 M" over the picture, 8 % of the frame height. Right, a readout: a thin measuring line and a small "50 M" beside the tower, 3.5 % of the frame height.'},{t:"html",html:`<h2>How it works</h2>
<ul>
<li><strong>Attach it to the thing measured.</strong> Put the label beside the object and draw the measuring line along it. The number then says what it is without a caption.</li>
<li><strong>Make it small.</strong> In our rebuild a readout is 60 to 80 px on a 1920 px frame, which is 3.1 to 4.2 %; the drawing uses 3.5 %. The v3 bond Short set &quot;US$8.8&quot; as a slam of 156 px, which is 8.1 %.</li>
<li><strong>Land it on the word.</strong> The readout arrives when the number is spoken, without a slam or a bounce.</li>
<li><strong>One per shot, at most.</strong> The demo&#39;s other readouts are &quot;TREMOR 0.0&quot;, &quot;VOICE&quot; with an even level meter and &quot;100 %&quot; on a popcorn bucket. Each confirms or contradicts the voice.</li>
<li><strong>No captions and no headline type</strong> in the excerpt.</li>
</ul>
<h2>How to build it</h2>
<pre><code class="language-js">const readout = { label: &quot;50 M&quot;, size: 0.035 * frameHeight, at: wordStart(&quot;fifty&quot;) };
</code></pre>
<p>Make the label and the measuring line one component, so the line and the text always move and fade together.</p>
<h2>Watch for</h2>
<ul>
<li><strong>Unreadable on a phone.</strong> Test at arm&#39;s length. If it fails, make it slightly larger, not a slam.</li>
<li><strong>A count-up on a ratio.</strong> Mid-count it shows a wrong ratio on screen (the bond Short builder saw &quot;1 : 8&quot; on the way to a different value). Show finished ratios.</li>
<li><strong>A number the voice already says,</strong> with a label that repeats the voice. Keep a label only where the voice cannot carry the meaning.</li>
</ul>
<p>This is a proposed change for our shorts, not an approved style rule; it was suggested in <span class="dead">Reference: 2D video plugin</span> and has not been audited.</p>
<p><strong>Source:</strong> Andrey Zenin, <a href="https://www.youtube.com/watch?v=YyUP_hSovOg" target="_blank" rel="noreferrer">YyUP_hSovOg</a> at 2:26-2:47; <span class="dead">Skill trial: bond Short</span> for the count-up finding.</p>
`}]},{id:"technique-oklch-gradients",route:"#/techniques/oklch-gradients",title:"Technique: gradients in OKLCH",label:"OKLCH gradients",order:41,summary:"Blend two colours in OKLCH instead of sRGB numbers and the middle of the gradient keeps its chroma instead of going grey.",blocks:[{t:"html",html:`<h1>Technique: gradients in OKLCH</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>Mixing two sRGB colours number by number passes through a dull middle. The colour-motion skill tells you to interpolate in a perceptual space (OKLCH or Lab) to fix &quot;muddy&quot; or grey gradients.</p>
`},{t:"viz",id:"motion-techniques/oklch-gradients",caption:"The same blue and amber in 40 stripes, mixed two ways. The line under each bar is the chroma of every stripe, computed in the demo from the displayed colour. The sRGB mix dips in the middle; the OKLCH mix does not."},{t:"html",html:`<h2>What OKLCH is</h2>
<p><code>oklch(L C H)</code>: L is perceptual lightness (0 to 1), C is chroma (colourfulness), H is the hue angle in degrees. Keeping L and C fixed while turning H gives hues of about equal visual weight, which is hard in HSL.</p>
<h2>How the demo computes it</h2>
<p>The demo converts both endpoints to OKLab with the published matrices, then interpolates lightness, chroma and hue (taking the short way round the hue circle) and converts back to sRGB. The grey dip is measured, not asserted: the chroma line is computed from each displayed stripe. Out-of-gamut values are clipped per channel, which is the simplest choice. In CSS you can ask for the same blend with <code>linear-gradient(in oklch, ...)</code>.</p>
<p><strong>Sources:</strong> <a href="https://github.com/iart-ai/motion-design-skills" target="_blank" rel="noreferrer">iart-ai/motion-design-skills</a>, <code>skills/color-motion/SKILL.md</code> and <code>references/palettes-and-interpolation.md</code> (MIT licence). The colour conversion uses Bjorn Ottosson&#39;s published OKLab matrices. The two colours are ours.</p>
`}]},{id:"technique-one-shape",route:"#/techniques/one-shape",title:"Technique: one shape, never cut",label:"One shape, never cut",order:18,summary:"Tell a product story with one element that morphs from state to state, driven by a cursor, with no cuts and no cross-fades.",blocks:[{t:"html",html:`<h1>Technique: one shape, never cut</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>A group of prompts for product UI motion share a rule: one shape tells the whole story. &quot;Every state is the same element morphing its size, radius and color while its content swaps with a short blur&quot; (<a href="https://x.com/AnnaCher___/status/2103571098638152174" target="_blank" rel="noreferrer">AnnaCher</a>). &quot;A prompt bar becomes a button, the button becomes a progress ring, the ring becomes a preview window... No cuts, no fades between scenes: objects transform&quot; (<a href="https://x.com/0xnicc0/status/2107217691505516612" target="_blank" rel="noreferrer">0xnicc0</a>). &quot;One shape, zero cuts. The shape morphs from state to state and is never replaced&quot; (<a href="https://x.com/flxrnc/status/2108242454105251921" target="_blank" rel="noreferrer">flxrnc</a>).</p>
`},{t:"viz",id:"motion-techniques/one-shape",caption:"One element in four states, from a mascot to a play button, a loader and a timeline. The dashed ring travels between the cards to show the element is the same one: it morphs and is never replaced."},{t:"html",html:`<h2>How it works</h2>
<p>Because the element persists, the eye follows it across states and the story needs no cut. Size, radius and colour are each a <a href="#/techniques/closed-form-springs">chain of springs</a>, so a change in one state starts from wherever the last one ended. Content inside the shape is separate: it swaps with a 12 px blur and a fade over 0.15 s (<a href="https://x.com/flxrnc/status/2108242454105251921" target="_blank" rel="noreferrer">flxrnc</a>), and needs its own clip and its own enter and exit timing so text never overlaps (<a href="https://x.com/0xnicc0/status/2107217691505516612" target="_blank" rel="noreferrer">0xnicc0</a>). A cursor causes every change with a real click or drag, and its tip stays locked to whatever it drags. The camera zooms so each state fills about half the frame.</p>
<h2>How to build it</h2>
<pre><code class="language-js">const shape = {
  w: chain(springs, &quot;w&quot;), h: chain(springs, &quot;h&quot;),
  r: chain(springs, &quot;r&quot;), color: chain(springs, &quot;color&quot;),
};
// at time t, read each property; draw one rounded rect; then draw the current content inside its clip
</code></pre>
<p>List the states and their beats first, as in the <a href="#/techniques/storyboard-first">storyboard</a>.</p>
<h2>Watch for</h2>
<ul>
<li><strong>Cross-fading one colour into another.</strong> The prompt says: do not cross-fade orange into ink. Animate the colour value.</li>
<li><strong>Content popping while the shape moves.</strong> Give text its own timing, after the morph has started.</li>
<li><strong>A cursor that arrives late.</strong> Aim it at where the target will be when it lands, and keep its speed under 65 px per frame.</li>
</ul>
<p><strong>Sources:</strong> <a href="https://x.com/AnnaCher___/status/2103571098638152174" target="_blank" rel="noreferrer">annacher-152174</a>, <a href="https://x.com/0xnicc0/status/2107217691505516612" target="_blank" rel="noreferrer">0xnicc0-516612</a>, <a href="https://x.com/flxrnc/status/2108242454105251921" target="_blank" rel="noreferrer">flxrnc-251921</a> in our prompt database. We have not run these prompts; the demo is a stand-in drawing, not their output.</p>
`}]},{id:"technique-parallax-layers",route:"#/techniques/parallax-layers",title:"Technique: parallax from three layer speeds",label:"Parallax layers",order:42,summary:"Move the background at 0.2x, the midground at 0.6x and the foreground at 1.2x, so depth is read from the speed difference.",blocks:[{t:"html",html:`<h1>Technique: parallax from three layer speeds</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>Depth in a flat scene comes from layers that move by different amounts for the same camera move.</p>
`},{t:"viz",id:"motion-techniques/parallax-layers",caption:"One camera pan of 100 units. The background layer follows at 0.2x, the midground at 0.6x and the foreground at 1.2x. A clipped frame hides what slides outside it."},{t:"html",html:`<h2>The numbers</h2>
<p>The shot-composition skill gives the CSS speeds <code>--speed: 0.2</code> for the background, <code>0.6</code> for the middle and <code>1.2</code> for the foreground. The demo uses them as multipliers of one pan. Each layer is a transform on a group, ending at the resting position.</p>
<h2>Notes</h2>
<ul>
<li>Give each layer a role: a low-contrast, soft background (ambient), a midground that supports the subject, a sharp foreground (primary). This is our reading, not a quoted rule.</li>
<li>Use the camera ease the skill recommends, ease-in-out, never linear except for continuous loops. The camera pairs well with the <a href="#/techniques/camera-curves">camera curves</a>.</li>
<li>Parallax is a vestibular trigger. Remove it under reduced motion: see <a href="#/techniques/reduced-motion-tiers">reduced motion in tiers</a>.</li>
</ul>
<p><strong>Sources:</strong> <a href="https://github.com/iart-ai/motion-design-skills" target="_blank" rel="noreferrer">iart-ai/motion-design-skills</a>, <code>skills/shot-composition/references/camera-and-grids.md</code> (section &quot;Parallax layering&quot;). MIT licence.</p>
`}]},{id:"technique-progressive-diagram",route:"#/techniques/progressive-diagram",title:"Technique: reveal a diagram in order",label:"Progressive diagram",order:40,summary:"Nodes first, then edges, then labels; then keep the active node at full strength and dim the rest to 35 percent.",blocks:[{t:"html",html:`<h1>Technique: reveal a diagram in order</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>Showing a whole diagram at once makes the viewer read all of it. Showing it in order makes them read one idea per beat.</p>
`},{t:"viz",id:"motion-techniques/progressive-diagram",caption:"Three nodes appear, then the two edges with a dot travelling along them, then the labels. Last, node 2 stays at full strength and the others dim to 35 percent."},{t:"html",html:`<h2>The rules from the skill</h2>
<ul>
<li>Reveal in this order: nodes, then edges, then labels. Nothing dumps in all at once.</li>
<li>Highlight the active element and dim the rest (focus and context). The skill&#39;s table gives the dim level as opacity 0.35 over 0.3 s.</li>
<li>Pace to comprehension: hold each step 0.5 to 1.5 seconds so it lands.</li>
<li>Keep one visual grammar: a colour means one thing and never changes mid-piece.</li>
</ul>
<p>In the demo the final state is also the resting picture, and each element&#39;s entrance and its dimming are merged into one animation. Two animations on one property would let the later one&#39;s backward fill override the earlier. See <a href="#/techniques/seekable-frame">seekable frame</a>.</p>
<p><strong>Sources:</strong> <a href="https://github.com/iart-ai/explainer-video-skills" target="_blank" rel="noreferrer">iart-ai/explainer-video-skills</a>, <code>skills/diagram-animation/SKILL.md</code>. MIT licence. The node names are placeholders.</p>
`}]},{id:"technique-reduced-motion-tiers",route:"#/techniques/reduced-motion-tiers",title:"Technique: reduced motion in three tiers",label:"Reduced motion tiers",order:43,summary:"When a viewer asks for less motion, remove the vestibular triggers, shorten the rest to a fade, and keep colour changes and progress.",blocks:[{t:"html",html:`<h1>Technique: reduced motion in three tiers</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p><code>prefers-reduced-motion: reduce</code> is a signal that some movement causes nausea, dizziness or migraines. The accessible-animation skill treats it as graceful degradation, not a kill switch: an instant change with no transition can disorient more, because elements teleport.</p>
`},{t:"viz",id:"motion-techniques/reduced-motion-tiers",caption:"Three rows, each with the normal version and the reduced version. Tier 1 is removed: the big slide is static. Tier 2 is softened: a slide becomes a 150 ms fade. Tier 3 is kept: a colour fade stays."},{t:"html",html:`<h2>The three tiers</h2>
<ol>
<li><strong>Remove entirely (vestibular triggers).</strong> Parallax, large slides across the viewport, scale or zoom of large elements, 3D spin, auto-playing carousels and marquees, scroll hijacking, motion paths.</li>
<li><strong>Soften or shorten.</strong> Replace movement with a short opacity fade (200 ms or less), reduce distance and duration. Keep the fact of a transition. The skill&#39;s example: a 600 ms slide from the left becomes a 150 ms cross-fade.</li>
<li><strong>Always keep.</strong> Opacity fades, colour changes, focus rings, loading indicators, and motion essential to meaning.</li>
</ol>
<h2>A sketch</h2>
<p>Write the motion as the default and override it under the media query.</p>
<pre><code class="language-css">.card { transition: transform 600ms ease, opacity 600ms ease, background-color 200ms ease; }
@media (prefers-reduced-motion: reduce) {
  .card { transition: opacity 150ms ease, background-color 200ms ease; transform: none; }
}
</code></pre>
<p>For a video file there is no media query, so keep a second cut without the tier 1 moves if viewers need one.</p>
<p><strong>Sources:</strong> <a href="https://github.com/iart-ai/web-animation-skills" target="_blank" rel="noreferrer">iart-ai/web-animation-skills</a>, <code>skills/accessible-animation/SKILL.md</code>. MIT licence. The WCAG reference (2.3.3) is the skill&#39;s, not checked by us.</p>
`}]},{id:"technique-reference-by-link",route:"#/techniques/reference-by-link",title:"Technique: reference by link",label:"Reference by link",order:23,summary:"Give the assistant a link to a clip you like and ask for your own story in that style, instead of describing the style in words.",blocks:[{t:"html",html:`<h1>Technique: reference by link</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>The ИИ МАСТОДОНТ tutorial lists this as the first of its four tips: when you see a strong clip, give the link to the post to the model and say &quot;do it in this style, but with my story or prompt&quot;; the author calls it the simplest way to copy any style, and says it used to be almost impossible (<a href="https://www.youtube.com/watch?v=yEpN_s9UkAE&t=790s" target="_blank" rel="noreferrer">13:10</a>). He shows it in the cartoon demo, where he pasted a prompt and a link to an X post, and the model went and found the media itself, which older models needed a file path for (<a href="https://www.youtube.com/watch?v=yEpN_s9UkAE&t=225s" target="_blank" rel="noreferrer">03:45</a>). For the promo he gave references, then sent the model to look for the best videos made with the same model, &quot;for inspiration&quot;, and it came back with a better result (<a href="https://www.youtube.com/watch?v=yEpN_s9UkAE&t=443s" target="_blank" rel="noreferrer">07:23</a>). Several prompts in our database do the same: &quot;Analyze [a link] and build a product promo from our own UI&quot; (<a href="https://x.com/AnnaCher___/status/2103571098638152174" target="_blank" rel="noreferrer">AnnaCher</a>).</p>
`},{t:"viz",id:"motion-techniques/reference-by-link",caption:"A link goes in; a short read-out of the style comes out (palette, type, camera, beat grid, cursor, springs); then it is applied to a new story."},{t:"html",html:`<h2>How it works</h2>
<p>Style is hard to put in words and easy to point at. The model reads the clip or its post and extracts a specification: colours, fonts, camera behaviour, timing grid, how the cursor moves. Your content (words, facts, product) is separate. That is the whole contract: <strong>their grammar of motion, your story.</strong></p>
<h2>How to build it</h2>
<p>Ask in two steps so you can check the read-out:</p>
<ol>
<li>&quot;Read this post and write the style as a spec: palette in hex, fonts, camera moves, tempo, cursor rules, what is banned.&quot;</li>
<li>&quot;Now make my 12 s piece about X with that spec.&quot; Keep the spec in the <a href="#/techniques/style-contract">style contract</a> so every scene uses it.</li>
</ol>
<h2>Watch for</h2>
<ul>
<li><strong>Copying the content.</strong> The link supplies style only. Check that no copyrighted frames, words or music came along; see the <span class="dead">style gate</span>.</li>
<li><strong>A read-out you did not see.</strong> Without step 1 you cannot tell whether the model understood the reference.</li>
<li><strong>Taking a demo for a guarantee.</strong> The author says a good monteur still does better; treat the result as a draft (<a href="https://www.youtube.com/watch?v=yEpN_s9UkAE&t=674s" target="_blank" rel="noreferrer">11:14</a>).</li>
</ul>
<p><strong>Sources:</strong> ИИ МАСТОДОНТ, <a href="https://www.youtube.com/watch?v=yEpN_s9UkAE" target="_blank" rel="noreferrer">yEpN_s9UkAE</a> at 03:45, 07:23 and 13:10 (transcript read by us; we have not run the prompts), and <a href="https://x.com/AnnaCher___/status/2103571098638152174" target="_blank" rel="noreferrer">annacher-152174</a> in our prompt database.</p>
`}]},{id:"technique-render-and-inspect",route:"#/techniques/render-and-inspect",title:"Technique: render, then inspect real frames",label:"Render and inspect",order:7,summary:"A quality gate that cannot be argued with: pull frames at fixed times from an actual render, write down what is wrong with each, fix the source.",blocks:[{t:"html",html:`<h1>Technique: render, then inspect real frames</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>The creator credits his model with analysing reference clips and checking its own work (<a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g&t=300s" target="_blank" rel="noreferrer">05:00</a>), and his checklist includes an agent review of frames (<a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g&t=614s" target="_blank" rel="noreferrer">10:14</a>). Studio Igor adds numbers: scripts measure foot slide, asymmetry, bone stretch and transition jolts, and image critics look at rendered frames (<a href="https://www.youtube.com/watch?v=YQ01D9xGAnk&t=1255s" target="_blank" rel="noreferrer">20:55</a>). The shared idea is that an assistant&#39;s statement that &quot;it looks right&quot; is not evidence; a frame is.</p>
`},{t:"viz",id:"motion-techniques/render-inspect",caption:"Frames at 0.5, 1.0, 2.0 and 4.5 s are checked in turn. The 2.0 s frame has its label at the edge; the defect is logged with its time, the source is fixed and the clip is rendered again."},{t:"html",html:`<h2>How it works</h2>
<ol>
<li><strong>Render a preview</strong> of the scene, not a mock-up. A saved file is the proof that the check ran.</li>
<li><strong>Pull frames at fixed times:</strong> the opening, a midpoint, a transition and the last frame. For a 5 s clip that is 0.5, 1.0, 2.0 and 4.5 s.</li>
<li><strong>Write one observation per frame, with the time.</strong> &quot;Label touches the right edge at 2.0 s&quot; is a finding. &quot;Looks fine&quot; is not.</li>
<li><strong>Fix the source, not the frame,</strong> then render again and compare.</li>
<li><strong>Watch the clip once at normal speed.</strong> Frames cannot show sparkle, flicker, a missed beat or a bad hold.</li>
</ol>
<p>A person still decides about meaning, facts and style fit. The loop removes the defects an assistant can see and hands over a short list of what remains.</p>
<h2>Add numbers where you can</h2>
<p>Measure what is measurable: contour displacement per frame, text bounding boxes against the safe area, the share of near-black frames. Our <span class="dead">skill trial</span> turned scans like these into gates, and every build failed at least one gate in a draft and was fixed before the render.</p>
<h2>Watch for</h2>
<ul>
<li><strong>A claim without a file.</strong> Require the preview path and the frame times in the report.</li>
<li><strong>Checking only the start.</strong> Defects cluster at transitions and at the end.</li>
<li><strong>Fixing in post.</strong> A patched frame hides a source that will break again; correct the scene.</li>
</ul>
<p><strong>Source:</strong> ProdAdvice, <a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g" target="_blank" rel="noreferrer">K1Mr5_7Gm3g</a> at 05:00-06:16 and 10:14-11:41; Studio Igor, <a href="https://www.youtube.com/watch?v=YQ01D9xGAnk" target="_blank" rel="noreferrer">YQ01D9xGAnk</a> at 20:55-22:50. Both describe the checks; neither publishes pass rates.</p>
`}]},{id:"technique-seamless-loop",route:"#/techniques/seamless-loop",title:"Technique: a seamless loop",label:"Seamless loop",order:16,summary:"Make the last frame equal the first, including the cursor, so a piece can repeat with no visible seam.",blocks:[{t:"html",html:`<h1>Technique: a seamless loop</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>Looping pieces need more than a long fade at the end. Three prompts in our database require &quot;the last frame must be the first frame&quot; (<a href="https://x.com/flxrnc/status/2108242454105251921" target="_blank" rel="noreferrer">flxrnc</a>, <a href="https://x.com/AnnaCher___/status/2103571098638152174" target="_blank" rel="noreferrer">AnnaCher</a>, <a href="https://x.com/0xnicc0/status/2107217691505516612" target="_blank" rel="noreferrer">0xnicc0</a>), and one adds that position, opacity and cursor must match too (<a href="https://x.com/techhalla/status/2103411244468498547" target="_blank" rel="noreferrer">techhalla</a>). The same prompt that asks for a 14 s loop lists the usual failure as a fix: &quot;the cursor jump at the loop wrap&quot; is removed with <code>t - 14*floor(t/14)</code>.</p>
`},{t:"viz",id:"motion-techniques/seamless-loop",caption:"Two 14 s loops drawn as rings. Left: the last frame is not the first, and the dot jumps at the seam. Right: time is wrapped and the last frame equals the first, so the dot closes the ring."},{t:"html",html:`<h2>How it works</h2>
<p>A loop has a seam where the end meets the start. Anything that is not identical at the two ends shows as a jump: a cursor that ends mid-screen, an opacity that has not returned to its starting value, a spring that has not settled. The fix has two halves. Design the story so it returns to its first state (in the prompts, &quot;the toast turns back into an empty prompt bar&quot;, &quot;the toast shrinks back into the mascot&quot;). And make every time-dependent value read the wrapped time, so a frame at <code>t = 14</code> is the frame at <code>t = 0</code>.</p>
<h2>How to build it</h2>
<pre><code class="language-js">const LOOP = 14;
const wrap = (t) =&gt; t - LOOP * Math.floor(t / LOOP);   // 0 &lt;= wrap(t) &lt; 14
window.renderAt = (t) =&gt; draw(ctx, layout(plan, wrap(t)));
</code></pre>
<p>Then compare frame 0 with the last frame, pixel by pixel, as one of the <a href="#/techniques/render-and-inspect">render-and-inspect</a> checks. Let all springs finish before the end so the last frame is at rest.</p>
<h2>Watch for</h2>
<ul>
<li><strong>A cursor that ends elsewhere.</strong> Park it where it starts, as part of the last beat.</li>
<li><strong>A long cross-fade.</strong> It hides the jump but also the story; one prompt bans &quot;crossfades&quot; outright (<a href="https://x.com/0xnicc0/status/2107217691505516612" target="_blank" rel="noreferrer">0xnicc0</a>).</li>
<li><strong>Springs still moving.</strong> A <a href="#/techniques/closed-form-springs">spring</a> that settles at 0.35 s needs 0.35 s of quiet before the wrap.</li>
</ul>
<p><strong>Sources:</strong> <a href="https://x.com/flxrnc/status/2108242454105251921" target="_blank" rel="noreferrer">flxrnc-251921</a>, <a href="https://x.com/AnnaCher___/status/2103571098638152174" target="_blank" rel="noreferrer">annacher-152174</a>, <a href="https://x.com/0xnicc0/status/2107217691505516612" target="_blank" rel="noreferrer">0xnicc0-516612</a>, <a href="https://x.com/techhalla/status/2103411244468498547" target="_blank" rel="noreferrer">techhalla-498547</a> in our prompt database. The wrap expression is the prompt&#39;s; the pixel comparison is our proposal.</p>
`}]},{id:"technique-seekable-frame",route:"#/techniques/seekable-frame",title:"Technique: a seekable frame function",label:"Seekable frame",order:13,summary:"Write the whole picture as renderAt(t), a pure function of time, so any moment can be frozen, checked and re-rendered exactly.",blocks:[{t:"html",html:`<h1>Technique: a seekable frame function</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>Several of the strongest prompts in our prompt database make the same demand first: the picture at time <code>t</code> may depend on <code>t</code> and nothing else. One prompt states it as a build rule: <code>window.renderAt(t)</code> must be a pure function of time, with no <code>Math.random</code>, no clock and no carried state, and <code>?t=</code> in the address must freeze the exact moment (<a href="https://x.com/flxrnc/status/2108242454105251921" target="_blank" rel="noreferrer">flxrnc</a>). Another asks for <code>seek(t)</code> with no CSS transitions, no <code>setInterval</code> and no React state across frames (<a href="https://x.com/techhalla/status/2103411244468498547" target="_blank" rel="noreferrer">techhalla</a>). A third says the same in one line: every frame is a function (<a href="https://x.com/BuildFastWithAI/status/2108403445304844291" target="_blank" rel="noreferrer">BuildFastWithAI</a>).</p>
`},{t:"viz",id:"motion-techniques/seekable-frame",caption:"Top row: five frames computed from time alone, so a jump to 3.6 s gives the right picture. Bottom row: each frame is built from the last one, so after the same jump the ball is still where it was at 2.4 s."},{t:"html",html:`<h2>How it works</h2>
<p>If a frame depends only on <code>t</code>, three things become cheap. You can <strong>seek</strong>: open <code>?t=3.6</code> and see exactly that moment. You can <strong>check</strong>: render five stills around a beat without playing the clip (<a href="#/techniques/storyboard-first">storyboard and pre-pass</a>). You can <strong>re-render</strong> a single scene and get the same pixels. A stateful animation, where each frame nudges the previous one, gives none of these: a jump lands in a state nobody has computed.</p>
<h2>How to build it</h2>
<p>Keep every number that changes in a function of <code>t</code>, and draw from it:</p>
<pre><code class="language-js">window.renderAt = (t) =&gt; {
  const p = layout(plan, t);   // positions, opacities, text: from t and the plan only
  draw(ctx, p);                // paint; never read what was painted before
};
const t = Number(new URLSearchParams(location.search).get(&quot;t&quot;));
if (!Number.isNaN(t)) renderAt(t);   // ?t=3.6 freezes that moment
</code></pre>
<p>The export loop then calls <code>renderAt(frame / fps)</code> for every frame. Randomness comes from a <a href="#/techniques/cadence-and-seed">stable seed</a>, never from <code>Math.random</code>.</p>
<h2>Watch for</h2>
<ul>
<li><strong>Hidden state.</strong> A counter, an array that grows, a timer or a transition that keeps running is state. Derive it from <code>t</code> instead (a typed text shows <code>floor(progress * length)</code> characters).</li>
<li><strong>CSS transitions and timers.</strong> They run on the page clock, not on <code>t</code>. Do not use them.</li>
<li><strong>Changing a target several times.</strong> Do not mutate a value. Add one <a href="#/techniques/closed-form-springs">spring</a> per change.</li>
</ul>
<p><strong>Sources:</strong> the prompts <a href="https://x.com/flxrnc/status/2108242454105251921" target="_blank" rel="noreferrer">flxrnc-251921</a>, <a href="https://x.com/techhalla/status/2103411244468498547" target="_blank" rel="noreferrer">techhalla-498547</a> and <a href="https://x.com/BuildFastWithAI/status/2108403445304844291" target="_blank" rel="noreferrer">BuildFastWithAI</a> in our prompt database. We have read the prompts, not run them; the code is our proposal.</p>
`}]},{id:"technique-sentence-shot",route:"#/techniques/sentence-shot",title:"Technique: one sentence, one shot, cut just before the word",label:"Sentence and shot",order:11,summary:"Cut to a new picture a fraction of a second before its sentence begins, and put the longest pause before the punch line. Measured from a 30 s demo.",blocks:[{t:"html",html:`<h1>Technique: one sentence, one shot, cut just before the word</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>A code-drawn demo in Andrey Zenin&#39;s tutorial shows an editing grammar that carries over to any narrated video (<a href="https://www.youtube.com/watch?v=YyUP_hSovOg&t=122s" target="_blank" rel="noreferrer">2:02</a>). We measured its 28.6 s excerpt with scene detection and word timestamps; the full table is in <span class="dead">Reference: 2D video plugin</span>.</p>
`},{t:"viz",id:"motion-techniques/sentence-shot",caption:"Four sentences and their four shots on a 10 s axis (illustrative times). Each cut lands 0.14 s before its sentence's first word, and the longest pause (0.8 s) comes before the punch line."},{t:"html",html:`<h2>What the measurement shows</h2>
<ul>
<li>After the first, 11 of 13 sentences get a new shot. Ten cut at the sentence start and one on the noun the shot shows. The two without a cut play out inside one held shot where the action itself changes the picture.</li>
<li>The cut comes 0.01 to 0.29 s before the first word, with a median of 0.14 s. The eye sees the new picture a few frames before the ear hears the sentence.</li>
<li>The pattern is a wide shot, then a close insert of the one detail that carries the sentence. The inserts are short (1.0 to 2.1 s); the wides carry the time (1.6 to 6.0 s).</li>
<li>Gaps between sentences run from 0.38 to 0.80 s, with a median near 0.48 s. The 0.80 s gap sits right before the punch line.</li>
<li>The camera does not travel. A closer view is a cut to a new framing, not a push.</li>
</ul>
<h2>How to build it</h2>
<p>Mark sentence starts separately from word times in your cue file. Put shot boundaries on the sentence starts, 0.1 to 0.3 s early. Word cues inside a sentence drive reveals, not cuts.</p>
<pre><code class="language-js">shots = sentences.map(s =&gt; ({ cutAt: s.start - 0.14, hold: s.end }));
</code></pre>
<p>Give the punch line the largest <code>gap_before</code> value. A setup shot shows what everyone expects, a short insert shows what actually happened.</p>
<h2>Watch for</h2>
<ul>
<li><strong>Cuts inside a sentence,</strong> unless the sentence is a list.</li>
<li><strong>A locked frame with nothing changing.</strong> A static frame is alive only if something inside it changes; our <span class="dead">skill trial</span> recommends a change at least every 3 s.</li>
<li><strong>Late cuts.</strong> A cut after the word reads as lag. Keep them inside a 0.3 s window.</li>
</ul>
<p><strong>Source:</strong> Andrey Zenin, <a href="https://www.youtube.com/watch?v=YyUP_hSovOg" target="_blank" rel="noreferrer">YyUP_hSovOg</a> at 2:02-2:47. Measurements are ours, accurate to about 0.1 s, from the YouTube file and automatic transcription of a 30 s excerpt the author chose.</p>
`}]},{id:"technique-shape-to-sound",route:"#/techniques/shape-to-sound",title:"Technique: a contour spectrum as a voice",label:"Shape to sound",order:28,summary:"Use the magnitudes of a shape's harmonics as the partials of a tone, so the look of a character sets its timbre. All sound is synthesised, so it is deterministic.",blocks:[{t:"html",html:`<h1>Technique: a contour spectrum as a voice</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>The owner&#39;s game project synthesises every sound from harmonics: no recordings, no sample packs. Its notes describe one link that suits motion work well: the contour of a character is also its voice. A round character sounds nearly like a sine wave; a spiky one sounds buzzy.</p>
`},{t:"viz",id:"motion-techniques/shape-to-sound",caption:"A circle and a star. Bars: the magnitudes of their first 16 harmonics, normalised. Line: one period of the tone those partials make. The circle is almost one partial; the star spreads over many."},{t:"html",html:`<h2>How it works</h2>
<p>A shape is a set of harmonics (<a href="#/techniques/harmonic-morph">harmonic morph</a>). A tone is also a set of harmonics: partials at multiples of one pitch. The project maps one onto the other. For each shape harmonic <code>k</code> it takes the magnitude <code>sqrt(re^2 + im^2)</code>, folds the positive and negative frequency together as <code>|k|</code>, ignores the centre term, and uses the result as the level of partial <code>|k|</code>, at most 32 of them, normalised to unit energy. The browser&#39;s <code>PeriodicWave</code> builds the waveform from those levels (<a href="https://developer.mozilla.org/en-US/docs/Web/API/PeriodicWave" target="_blank" rel="noreferrer">MDN: PeriodicWave</a>).</p>
<p>Position does not enter, and a uniform change of size only scales all magnitudes, so after normalisation shifting or scaling a character does not change its timbre. Only the silhouette does.</p>
<p>The same notes build short sounds the same way: additive spectra, short amplitude envelopes, pitch sweeps, and percussive texture from three nested sine oscillators instead of random noise. No random number is needed, so the sound is the same on every render.</p>
<h2>How to build it</h2>
<pre><code class="language-js">const real = new Float32Array(33), imag = new Float32Array(33);
for (const { k, re, im } of harmonics)
  if (k !== 0 &amp;&amp; Math.abs(k) &lt; 33) imag[Math.abs(k)] += Math.hypot(re, im);
const e = Math.hypot(...imag);
for (let k = 1; k &lt; 33; k++) imag[k] /= e;
osc.setPeriodicWave(audioCtx.createPeriodicWave(real, imag));
</code></pre>
<p>For a video, render the track offline (<code>OfflineAudioContext</code>) so it is exported as a file, not played live. Then a <a href="#/techniques/harmonic-morph">morph</a> can glide the timbre: recompute the levels from the mixed harmonics at each audio block. We have not tried this part; it follows from the mapping.</p>
<h2>Watch for</h2>
<ul>
<li><strong>Same shape, same voice.</strong> If a mascot changes shape, say whether its voice should change. A fixed identity wants a fixed spectrum.</li>
<li><strong>Level.</strong> Check loudness numerically, as in <a href="#/techniques/render-and-inspect">render and inspect</a>, and duck under narration.</li>
<li><strong>Not a recording.</strong> Synthesised tones are clean. Add an envelope (attack, release) or they click.</li>
<li><strong>Live audio in a render.</strong> A live <code>AudioContext</code> needs a user gesture and follows the wall clock. Do not use it inside a <a href="#/techniques/seekable-frame">seekable frame</a> pipeline.</li>
</ul>
<p><strong>Sources:</strong> the owner&#39;s project notes on harmonic audio (private repository). The demo computes the spectra from real DFTs; we did not render audio.</p>
`}]},{id:"technique-speed-ramp",route:"#/techniques/speed-ramp",title:"Technique: a speed ramp as a time remap",label:"Speed ramp",order:35,summary:"Slow down into an impact and snap back: speed is a curve, the source frame is its running sum, and the slowest frame lands on the beat.",blocks:[{t:"html",html:`<h1>Technique: a speed ramp as a time remap</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>A speed ramp is not a cut. It changes how fast the source plays, so the viewer sees slow motion into a hit and a quick release after it.</p>
`},{t:"viz",id:"motion-techniques/speed-ramp",caption:"Left, speed against frame: 100 percent to frame 20, an ease down to 25 percent at frame 28, back to 100 percent at frame 40. Right, the source frame, which is the running sum of that speed. The dot moves along it; the dashed line is the impact."},{t:"html",html:`<h2>The numbers from the skill</h2>
<p>At 30 fps: frames 0 to 20 at 100 percent (run-up); 20 to 28 an ease down to 25 percent (anticipation); frame 28 is the impact, on the beat; 28 to 40 an ease back to 100 percent (release). The skill also says to keep motion blur consistent through the ramp, or the slow section looks strobed.</p>
<h2>A sketch</h2>
<p>The code below sketches the idea.</p>
<pre><code class="language-js">// speed(f): 1 → 0.25 → 1. Source frame = running sum of speed.
const s = (a, b, f) =&gt; { const t = Math.min(1, Math.max(0, (f - a) / (b - a))); return t * t * (3 - 2 * t); };
const speed = (f) =&gt; f &lt; 20 ? 1 : f &lt; 28 ? 1 - 0.75 * s(20, 28, f) : 1 - 0.75 * (1 - s(28, 40, f));
let src = 0; const sourceFrame = (f) =&gt; { src = 0; for (let i = 0; i &lt; f; i++) src += speed(i); return src; };
</code></pre>
<p>This is the same idea as the <a href="#/techniques/independent-clocks">independent clocks</a> article: accumulate the speed, do not multiply it by time. In an editor use time-remap keyframes with smooth interpolation; in a code timeline drive a remap curve.</p>
<p><strong>Sources:</strong> <a href="https://github.com/iart-ai/motion-design-skills" target="_blank" rel="noreferrer">iart-ai/motion-design-skills</a>, <code>skills/beat-sync-editing/SKILL.md</code> (section &quot;Retime: speed ramps&quot;). MIT licence.</p>
`}]},{id:"technique-storyboard-first",route:"#/techniques/storyboard-first",title:"Technique: a storyboard before code, stills before render",label:"Storyboard and pre-pass",order:22,summary:"Show a beat-by-beat storyboard before any code, and render one still per beat before the full render, so problems are found cheaply.",blocks:[{t:"html",html:`<h1>Technique: a storyboard before code, stills before render</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>The prompts and the tutorial agree on order of work. A prompt ends with the instruction: &quot;First show me the storyboard. Then write the code. After the first render, check 5 frames around every beat and fix the issues before the final render&quot; (<a href="https://x.com/flxrnc/status/2108242454105251921" target="_blank" rel="noreferrer">flxrnc</a>). Another: &quot;Render one still per beat first. Fix anything cramped, off-grid or hard to read before the full render&quot; (<a href="https://x.com/0xnicc0/status/2107217691505516612" target="_blank" rel="noreferrer">0xnicc0</a>), and &quot;before full render, export one still per major beat (8 frames). Fix cramped type, orphan words, low contrast&quot; (<a href="https://x.com/techhalla/status/2103411244468498547" target="_blank" rel="noreferrer">techhalla</a>). In the tutorial, HyperFrames shows a set of key frames before it renders, so feedback comes before it spends 10 minutes and tokens on an MP4 (<a href="https://www.youtube.com/watch?v=yEpN_s9UkAE&t=364s" target="_blank" rel="noreferrer">Mastodon video, 06:04</a>); the author says the key frames were how he saw it was fine and what to correct (<a href="https://www.youtube.com/watch?v=yEpN_s9UkAE&t=433s" target="_blank" rel="noreferrer">07:13</a>).</p>
`},{t:"viz",id:"motion-techniques/storyboard-first",caption:"Six beat cards with times, then the flow: the storyboard is approved first, code comes second, one still per beat is checked and fixed, and only then the full render."},{t:"html",html:`<h2>How it works</h2>
<p>A render is the most expensive way to find a mistake. A storyboard costs a few lines and shows whether the story and the beats are right. A still per beat costs a few seconds each and shows layout problems (cramped type, an orphan word, weak contrast) before the long render. Because a frame is a <a href="#/techniques/seekable-frame">function of time</a>, stills at the beat times are free to make.</p>
<h2>How to build it</h2>
<ol>
<li>Ask for the storyboard as a list of <code>time, what is on screen, what moves</code> for every beat on the <a href="#/techniques/beat-grid">beat grid</a>. Approve or edit it.</li>
<li>Write the code. Keep the beats in the <a href="#/techniques/timing-plan">timing plan</a>.</li>
<li>Export stills at each beat (and a few frames either side, the prompt says five) and look at them with <a href="#/techniques/render-and-inspect">render and inspect</a>.</li>
<li>Fix what you logged in the <a href="#/techniques/error-log">error log</a>, then run the full render.</li>
</ol>
<h2>Watch for</h2>
<ul>
<li><strong>Skipping step 1 because the idea is simple.</strong> A one-line change to the storyboard is cheap; a change to finished code is not.</li>
<li><strong>Stills only on the beat.</strong> Problems hide between beats; the prompt asks for five frames around each one.</li>
<li><strong>Approving the storyboard in prose.</strong> Ask for times and counts, not adjectives.</li>
</ul>
<p><strong>Sources:</strong> <a href="https://x.com/flxrnc/status/2108242454105251921" target="_blank" rel="noreferrer">flxrnc-251921</a>, <a href="https://x.com/0xnicc0/status/2107217691505516612" target="_blank" rel="noreferrer">0xnicc0-516612</a>, <a href="https://x.com/techhalla/status/2103411244468498547" target="_blank" rel="noreferrer">techhalla-498547</a> in our prompt database, and the ИИ МАСТОДОНТ tutorial <a href="https://www.youtube.com/watch?v=yEpN_s9UkAE" target="_blank" rel="noreferrer">yEpN_s9UkAE</a>.</p>
`}]},{id:"technique-style-contract",route:"#/techniques/style-contract",title:"Technique: a style contract (style DNA) before any scene",label:"Style contract",order:6,summary:"Turn style words into numbers (line weight, wobble, palette, cadence) and hand them to every scene, so ten shapes look like one set.",blocks:[{t:"html",html:`<h1>Technique: a style contract</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>&quot;Hand-drawn&quot; is not a style, it is a mood. ProdAdvice&#39;s checklist starts with &quot;style DNA&quot; and palettes (<a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g&t=614s" target="_blank" rel="noreferrer">10:14</a>). Studio Igor shows the same lesson from the other side: a generic request for pixel art fails, and the second try works because it names a 320 x 180 internal canvas, a sixfold scale and palette cycling (<a href="https://www.youtube.com/watch?v=YQ01D9xGAnk&t=152s" target="_blank" rel="noreferrer">2:32</a>). Later he has the agent write a &quot;style bible&quot; and send it with every image request (<a href="https://www.youtube.com/watch?v=YQ01D9xGAnk&t=1054s" target="_blank" rel="noreferrer">17:34</a>).</p>
`},{t:"viz",id:"motion-techniques/style-dna",caption:"Four tokens (line 3 px, redraw 2 px, one blue, 12 drawings a second) applied to a circle, a square and a triangle, against the same three shapes with no contract: each picks its own line weight, wobble and colour."},{t:"html",html:`<h2>How it works</h2>
<p>Write the contract as a short list of measurable values and keep it in one file that every scene imports:</p>
<ul>
<li><strong>Paper:</strong> background colour and texture.</li>
<li><strong>Palette:</strong> four or fewer core colours.</li>
<li><strong>Line:</strong> weight in pixels, and how it varies.</li>
<li><strong>Wobble:</strong> redraw amplitude and cadence (see <a href="#/techniques/line-boil">Line boil</a>).</li>
<li><strong>Shading:</strong> hatch angle and spacing (see <a href="#/techniques/hatching">Hatching</a>).</li>
<li><strong>Type and sound:</strong> the font, and the character of the sound.</li>
</ul>
<p>Add two or three approved stills as visual anchors, and describe the mechanisms behind them in words, because a prompt that only says &quot;like this picture&quot; gives you a copy of the picture.</p>
<h2>Why numbers</h2>
<p>A token can be tested. If the contract says 3 px and a frame shows a 5 px line, that is a defect you can name. &quot;Looks off-style&quot; cannot be fixed by a script or by an assistant that was not in the room.</p>
<h2>Watch for</h2>
<ul>
<li><strong>Too many tokens.</strong> A contract of forty values will not be followed. Keep the ones that change the look.</li>
<li><strong>A contract copied from someone else&#39;s film.</strong> Take the mechanisms (timing, mark types, colour relationships) and make original assets; a reference clip does not give reuse rights.</li>
<li><strong>A contract that never changes.</strong> When a review finds a better value, update the file and re-render, not just the one scene.</li>
</ul>
<p>In this studio a new look still goes through the <span class="dead">style gate</span> before client use.</p>
<p><strong>Source:</strong> ProdAdvice, <a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g" target="_blank" rel="noreferrer">K1Mr5_7Gm3g</a> at 10:14-11:41; Studio Igor, <a href="https://www.youtube.com/watch?v=YQ01D9xGAnk" target="_blank" rel="noreferrer">YQ01D9xGAnk</a> at 2:32-3:37 and 17:34-19:12. The token values in the demo are ours.</p>
`}]},{id:"technique-subframe-blur",route:"#/techniques/subframe-blur",title:"Technique: motion blur from subframes",label:"Subframe blur",order:17,summary:"Draw four samples inside each frame and blend them, so fast movement gets a short streak instead of a sharp hop.",blocks:[{t:"html",html:`<h1>Technique: motion blur from subframes</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>Code-drawn motion is razor sharp: a ball that moves 60 px between frames is two crisp discs, and the eye sees a hop. Two prompts in our database ask for real motion blur and say how: render 4 subframes for each frame (<a href="https://x.com/flxrnc/status/2108242454105251921" target="_blank" rel="noreferrer">flxrnc</a>); &quot;render 4 subframes per frame, blend (tmix-style)&quot; (<a href="https://x.com/techhalla/status/2103411244468498547" target="_blank" rel="noreferrer">techhalla</a>).</p>
`},{t:"viz",id:"motion-techniques/subframe-blur",caption:"The same ball moving fast. Left: one sample per frame. Right: four samples blended, which leaves a short streak behind the ball."},{t:"html",html:`<h2>How it works</h2>
<p>A camera exposes for a part of the frame time, so a moving object smears. A coded scene can fake this by evaluating the picture at several moments inside one frame and averaging. At 60 fps a frame is 1/60 s; with four subframes the picture is drawn at <code>t</code>, <code>t + 1/4</code>, <code>t + 1/2</code> and <code>t + 3/4</code> of that interval and blended into one frame. It works because the picture is a <a href="#/techniques/seekable-frame">function of time</a>: asking for a time between frames costs nothing.</p>
<h2>How to build it</h2>
<pre><code class="language-js">const SUB = 4, FPS = 60;
for (let f = 0; f &lt; frames; f++) {
  clearAccumulator();
  for (let s = 0; s &lt; SUB; s++) {
    renderAt(f / FPS + (s / SUB) / FPS);
    accumulate(canvas, 1 / SUB);     // add this sample with weight 1/4
  }
  writeFrame(accumulator);
}
</code></pre>
<p>Rendering is four times slower, so keep it for the final render and test with one sample (<a href="#/techniques/render-and-inspect">render and inspect</a>).</p>
<h2>Watch for</h2>
<ul>
<li><strong>Blur on text that should be crisp.</strong> Fast text can smear into mush; blur the moving layer, not a settled label.</li>
<li><strong>Too few subframes on very fast moves.</strong> Four samples show visible steps when an object crosses most of the frame in one frame time; add samples or slow the move.</li>
<li><strong>Blur and a <a href="#/techniques/cadence-and-seed">stable seed</a>.</strong> Sample times between frames must not change the seed of a hand-drawn wobble, or the subframes disagree.</li>
</ul>
<p><strong>Sources:</strong> <a href="https://x.com/flxrnc/status/2108242454105251921" target="_blank" rel="noreferrer">flxrnc-251921</a>, <a href="https://x.com/techhalla/status/2103411244468498547" target="_blank" rel="noreferrer">techhalla-498547</a> in our prompt database. The accumulation loop is ours.</p>
`}]},{id:"technique-tilt-shift",route:"#/techniques/tilt-shift",title:"Technique: a sharp band that makes a scene look small",label:"Tilt-shift band",order:31,summary:"Blur everything except one horizontal band and a real scene reads as a miniature. Key the band like a camera channel, and seed any grain by frame number.",blocks:[{t:"html",html:`<h1>Technique: a sharp band that makes a scene look small</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>Miniature faking is an old photographic trick: shoot from above and blur the top and bottom, and the eye reads the scene as a model, because only small things have so shallow a focus (<a href="https://en.wikipedia.org/wiki/Miniature_faking" target="_blank" rel="noreferrer">Wikipedia: miniature faking</a>). Our Tabletop Miniature style uses it as its main look: a single post-processing shader does the tilt-shift band and a depth-based blur together, then tone mapping, a colour grade, a vignette and film grain.</p>
`},{t:"viz",id:"motion-techniques/tilt-shift",caption:"A small town from above, blurred except for one sharp band. The band moves down and rests in the middle. Two copies of the scene: a sharp one, and a blurred one that a mask hides inside the band."},{t:"html",html:`<h2>How it works</h2>
<p>The blur size at a pixel (the circle of confusion) is the larger of two values: one from the distance to the band, and one from the scene depth. Inside the band it is zero; outside it grows. The style page uses a 40-tap Vogel-disk gather: for each pixel take 40 samples around it in a spiral, weight each by its own blur size so that sharp objects do not bleed into blurred ones, and sum them.</p>
<p>The band is a number like any other camera value, so it belongs in the same keyed table as the <a href="#/techniques/camera-curves">camera curves</a>: move it to the station that matters.</p>
<h2>How to build it</h2>
<p>The full-screen shader, as a sketch:</p>
<pre><code class="language-glsl">float band = smoothstep(uHalf, uHalf + uFall, abs(vUv.y - uCenter));   // 0 in the band, 1 far from it
float coc  = uMaxBlur * max(band, depthCoc);                            // size of the blur disk
for (int i = 0; i &lt; 40; i++) {                                          // Vogel disk: golden angle spiral
  float r = sqrt(float(i) + 0.5) / sqrt(40.0), a = float(i) * 2.39996;
  vec2 o = r * coc * vec2(cos(a), sin(a));
  // weight by the sample&#39;s own coc, then accumulate colour
}
</code></pre>
<p>For a flat scene (no depth buffer) the SVG demo above is enough: a blurred copy and a gradient mask.</p>
<h2>Watch for</h2>
<ul>
<li><strong>Grain seeded by the wall clock.</strong> The style&#39;s first version reseeded its grain on a 24 Hz clock, <code>floor(uTime * 24.0)</code>. Rendered at 30 fps, that repeats the same grain on one frame in five, so the picture holds still for a frame and then jumps six times a second. It looked like simultaneous white glints on the water. Seed the grain from a frame counter, <code>uFrame = round(t * fps)</code>.</li>
<li><strong>Measure, do not guess.</strong> The diagnosis: group the frame-to-frame change of in-focus blocks by frame index modulo 5. One class sat 46 percent below the others, and about 1 percent after the fix. A six hertz peak in the spectrum of that change was 8.8 times the median before and 1.8 after. Do not answer the symptom by lowering the grain.</li>
<li><strong>Soft edges of the band.</strong> A hard edge reads as a mask. Give it a gradient.</li>
<li><strong>Bokeh and noise from <code>Math.random</code>.</strong> The same rule as the grain: derive every random value from the frame number and a <a href="#/techniques/cadence-and-seed">seed</a>.</li>
<li><strong>Real depth of field is different.</strong> The band is a cheat that works from above. Do not use it on an eye-level shot.</li>
</ul>
<p><strong>Sources:</strong> our Tabletop Miniature style page (shader design, the grain pitfall and its measurements); <a href="https://en.wikipedia.org/wiki/Miniature_faking" target="_blank" rel="noreferrer">Wikipedia: miniature faking</a>. The GLSL is a sketch of our design, not the style&#39;s code; the demo is a 2D imitation.</p>
`}]},{id:"technique-timing-plan",route:"#/techniques/timing-plan",title:"Technique: a timing plan as editable data",label:"Timing plan",order:5,summary:"Write when every object enters, moves and leaves as plain numbers on one timeline, so a late correction is one edit, not a new render of everything.",blocks:[{t:"html",html:`<h1>Technique: a timing plan as editable data</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>ProdAdvice&#39;s central claim is that a coded animation is editable: the assistant writes the graphics and the motion as code, and you change one value. A graphic on screen at 02:50 labels appearance and disappearance times, movement and colour around a common timeline (<a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g&t=92s" target="_blank" rel="noreferrer">01:32-03:05</a>). The technique is to write that plan down before any motion exists.</p>
`},{t:"viz",id:"motion-techniques/timing-plan",caption:"A 5 s plan as four bars. A playhead sweeps it, then one number changes (the fact label enters at 2.4 s instead of 2.0 s) and only that bar moves; nothing else is redone."},{t:"html",html:`<h2>How it works</h2>
<p>Give every object one row with its entrance time, exit time, path, scale or rotation, colour change and layer. In the demo:</p>
<div class="tq-tablewrap"><table>
<thead>
<tr>
<th>Object</th>
<th>Plan</th>
</tr>
</thead>
<tbody><tr>
<td>Coastline</td>
<td>Draws from 0 to 1 s, stays until 4.5 s</td>
</tr>
<tr>
<td>Location dot</td>
<td>Enters at 1.0 s, stays until 4.5 s</td>
</tr>
<tr>
<td>Fact label</td>
<td>Enters at 2.0 s (edited to 2.4 s), stays until 4.5 s</td>
</tr>
<tr>
<td>Clear</td>
<td>Everything leaves from 4.5 s to 5.0 s</td>
</tr>
</tbody></table></div>
<p>The scene reads these numbers; it does not contain them. A missed interval or a wrong coordinate is then fixed in the plan, and you do not regenerate the clip.</p>
<h2>How to build it</h2>
<p>Keep the plan in one object at the top of the scene file, and let every animation take its start and end from it:</p>
<pre><code class="language-js">const plan = {
  coast: { in: 0, draw: 1.0, out: 4.5 },
  dot:   { in: 1.0, out: 4.5 },
  fact:  { in: 2.4, out: 4.5 },
  clear: { in: 4.5, out: 5.0 },
};
</code></pre>
<p>Build the timeline so it can be sought: the picture at time <code>t</code> depends only on <code>t</code> and the plan, never on what played before. HyperFrames works this way with a single paused timeline (see <span class="dead">HyperFrames build rules</span>).</p>
<h2>Watch for</h2>
<ul>
<li><strong>Numbers hidden inside animations.</strong> If a start time lives in a tween, the plan is not the source of truth. Move it out.</li>
<li><strong>Timing that ignores the voice.</strong> When there is narration, derive the plan from measured word times, not from guesses.</li>
<li><strong>A plan with no end state.</strong> Always give the last object an exit, or the final frame is whatever was left over.</li>
</ul>
<p><strong>Source:</strong> ProdAdvice, <a href="https://www.youtube.com/watch?v=K1Mr5_7Gm3g" target="_blank" rel="noreferrer">K1Mr5_7Gm3g</a> at 01:32-03:05. The 5 s example is the exercise from <span class="dead">HyperFrames tutorial study</span>; the plan format is our proposal.</p>
`}]},{id:"technique-vertical-safe-box",route:"#/techniques/vertical-safe-box",title:"Technique: the vertical safe box",label:"Vertical safe box",order:44,summary:"In a 1080 by 1920 short, keep the hook and the key subject in the centre 900 by 1400 box and the bottom 320 px clear of text.",blocks:[{t:"html",html:`<h1>Technique: the vertical safe box</h1>
<p><a href="#/techniques">Motion techniques</a> · Reviewed November 16, 2026</p>
<p>Short-form apps paint captions, buttons and an action rail over the video. What you place there can be hidden.</p>
`},{t:"viz",id:"motion-techniques/vertical-safe-box",caption:"A 1080 by 1920 frame. Shaded bands: top 120 px, bottom 320 px, right 120 px. Dashed: the centre 900 by 1400 box. The green pill sits inside and is readable; the grey pill sits in the bottom band, under the app interface."},{t:"html",html:`<h2>The numbers from the skill</h2>
<p>For all platforms put the hook text and the key subject in the centre 900 by 1400 box. Reserve the bottom 320 px even if it looks empty in the editor. The skill&#39;s checklist: composed inside the 900 by 1400 box, with the bottom 320 px, top 120 px and right 120 px kept clear. A second skill gives looser percentages (top about 12 percent, bottom 20 to 35 percent).</p>
<h2>A thing the numbers hide</h2>
<p>A box 1400 high, centred in 1920, spans y from 260 to 1660. The bottom clear band starts at y 1600. So the box dips 60 px into that band, and the real limit for text is y 1600, not the box edge. That is our arithmetic from the skill&#39;s numbers, not a line in the skill; check it against the platform you target.</p>
<p>Pair this with <a href="#/techniques/sentence-shot">one sentence, one shot</a> for captions and with <a href="#/techniques/render-and-inspect">render and inspect</a> to check frames against the bands.</p>
<p><strong>Sources:</strong> <a href="https://github.com/iart-ai/tiktok-video-skills" target="_blank" rel="noreferrer">iart-ai/tiktok-video-skills</a>, <code>skills/short-form-video/SKILL.md</code> (safe-area table and checklist) and <code>skills/caption-animation/SKILL.md</code>. MIT licence. Platform interfaces change, so treat the bands as a starting point.</p>
`}]}],R={"motion-techniques/line-boil":{title:"Line boil",summary:"A circle drawn six times with slightly different wobble. On the left the six drawings play one after another, one every 83 ms (12 a second), so the contour seems to vibrate while the shape stays put. On the right the same six drawings are laid over each other.",size:{wide:[640,200],narrow:[336,340]},load:()=>e(()=>import("./line-boil-pt6pv0dX.js"),__vite__mapDeps([0,1,2,3,4]))},"motion-techniques/seed":{title:"Stable seed",summary:"Two rows of three small circles for the visits 0.5 s, 1.0 s and 0.5 s again. In the row with a random number at every call, the second visit to 0.5 s draws a different contour. In the row seeded with the scene seed plus floor of time times 12, the second visit to 0.5 s draws the same contour as the first.",size:{wide:[640,260],narrow:[336,290]},load:()=>e(()=>import("./seed-BxSPU70O.js"),__vite__mapDeps([5,1,2,3,4]))},"motion-techniques/hatching":{title:"Hatching instead of flat fill",summary:"A ball drawn twice. On the left it has a flat fill. On the right its shadowed lower right side is built from diagonal strokes, and a second pass of crossing strokes darkens the deepest part.",size:{wide:[640,200],narrow:[336,340]},load:()=>e(()=>import("./hatching-B9wq1MoW.js"),__vite__mapDeps([6,1,2,3,4]))},"motion-techniques/construction-lines":{title:"Construction lines and broken strokes",summary:"Three stages of one circle. First light guides: a dashed box, a cross and a looser circle. Second a contour made of seven short strokes with small gaps. Third both together, with the guides left faint.",size:{wide:[640,200],narrow:[336,300]},load:()=>e(()=>import("./construction-lines-BxFGuODI.js"),__vite__mapDeps([7,1,2,3,4]))},"motion-techniques/timing-plan":{title:"A timing plan as data",summary:"Four bars on a 5 second axis: coastline from 0 s, location dot from 1.0 s, fact label, and a clear at 4.5 s. A playhead sweeps the plan, then the fact label's start is edited from 2.0 s to 2.4 s and only that bar moves.",size:{wide:[640,230],narrow:[336,210]},load:()=>e(()=>import("./timing-plan-nQsgWUtm.js"),__vite__mapDeps([8,1,2,3]))},"motion-techniques/style-dna":{title:"A style contract",summary:"Four tokens: line 3 px, redraw 2 px, one blue, 12 drawings a second. Under them two rows of a circle, a square and a triangle. In the first row all shapes follow the tokens and look like one set. In the second row there is no contract and each shape has its own line weight, wobble and colour.",size:{wide:[640,260],narrow:[336,310]},load:()=>e(()=>import("./style-dna-BZSfiJDC.js"),__vite__mapDeps([9,1,2,3,4]))},"motion-techniques/render-inspect":{title:"Render, inspect, fix",summary:"Four frames pulled from a render at 0.5, 1.0, 2.0 and 4.5 seconds are checked one after another. The frame at 2.0 s has a defect: its label touches the edge. The defect is logged with its time, fixed in the source and the clip is rendered again.",size:{wide:[640,220],narrow:[336,350]},load:()=>e(()=>import("./render-inspect-Ba4YT1Tt.js"),__vite__mapDeps([10,1,2,3]))},"motion-techniques/error-log":{title:"An error log that becomes checks",summary:"Three concrete failures on the left, each turned into a rule for the next scene on the right: a label collides with the phone crop at 3.2 s, so keep labels 90 px inside the safe area; hatching flips direction between frames, so use one hatch angle per object with a fixed seed; text flickers as the contour redraws, so labels follow continuous time.",size:{wide:[640,220],narrow:[336,326]},load:()=>e(()=>import("./error-log-CWdra0Ud.js"),__vite__mapDeps([11,1,2,3]))},"motion-techniques/assemble":{title:"Long work from short pieces",summary:"Four scenes of 5 seconds each are built and approved one at a time, then slide together into one 20 second strip. The three seams between the scenes are flagged for review of palette, audio and pacing.",size:{wide:[640,210],narrow:[336,220]},load:()=>e(()=>import("./assemble-BaNv8Dd_.js"),__vite__mapDeps([12,1,2,3]))},"motion-techniques/layers":{title:"Layered assets and parallax",summary:"Four layers shown apart: background, subject and foreground are images; light and text are code. They are composed into one picture where a slow sideways camera moves the foreground by 18 px, the subject by 9 px and the background by 4 px, while the code layer stays still.",size:{wide:[640,150],narrow:[336,360]},load:()=>e(()=>import("./layers-QNGLpYTG.js"),__vite__mapDeps([13,1,2,3]))},"motion-techniques/sentence-shot":{title:"One sentence, one shot",summary:"Four sentences of narration on a 10 second axis and, below them, four shots. Each cut lands 0.14 seconds before the first word of its sentence. The longest pause, 0.8 seconds, sits before the last sentence, the punch line.",size:{wide:[640,224],narrow:[336,200]},load:()=>e(()=>import("./sentence-shot-CxnsBrmU.js"),__vite__mapDeps([14,1,2,3]))},"motion-techniques/readout":{title:"A number as a readout",summary:"Two portrait frames of the same drop tower. Left, a slam: a large 50 M over the picture, 8 percent of the frame height. Right, a readout: a thin measuring line and a small 50 M beside the tower, about 3.5 percent of the frame height.",size:{wide:[640,380],narrow:[336,320]},load:()=>e(()=>import("./readout-BPiii4dR.js"),__vite__mapDeps([15,1,2,3]))},"motion-techniques/seekable-frame":{title:"A seekable frame function",summary:"Two rows of five small frames at 0, 1.2, 2.4, 3.6 and 4.8 seconds with a ball sliding left to right. In the first row every frame is computed from time alone, so a jump to 3.6 seconds gives the right frame. In the second row each frame depends on the one before, so after the jump to 3.6 seconds the ball still shows the old position and the frame is wrong.",size:{wide:[640,282],narrow:[336,274]},load:()=>e(()=>import("./seekable-frame-BBnS7F--.js"),__vite__mapDeps([16,1,2,3]))},"motion-techniques/closed-form-springs":{title:"Closed-form springs",summary:"Two curves on a time axis from 0 to 0.8 seconds. The shape spring with damping 0.72 settles in 0.35 seconds and overshoots the target by about 3.8 percent. The camera spring with damping 1.0 settles in 0.6 seconds with no overshoot and arrives later. Two dots replay the curves in slow motion.",size:{wide:[640,220],narrow:[336,310]},load:()=>e(()=>import("./closed-form-springs-DcJz7vPQ.js"),__vite__mapDeps([17,1,2,3,18]))},"motion-techniques/beat-grid":{title:"A beat grid",summary:"A 4 second axis with a tick every 0.5 seconds (120 beats per minute) and fainter ticks every 125 milliseconds. Six events sit on the beats. A seventh hit that started at 1.3 seconds slides onto the beat at 1.5 seconds.",size:{wide:[640,200],narrow:[336,200]},load:()=>e(()=>import("./beat-grid-bdBOyTzS.js"),__vite__mapDeps([19,1,2,3]))},"motion-techniques/seamless-loop":{title:"A seamless loop",summary:"Two rings, each a 14 second loop. In the left ring the last frame is not the first, so the moving dot jumps back at the seam. In the right ring time is wrapped with t minus 14 times floor of t over 14, the last frame equals the first and the dot closes the ring with no jump.",size:{wide:[640,196],narrow:[336,300]},load:()=>e(()=>import("./seamless-loop-CZH49O02.js"),__vite__mapDeps([20,1,2,3,18]))},"motion-techniques/subframe-blur":{title:"Subframe motion blur",summary:"The same fast ball in two panels. With one sample per frame it is a sharp disc. With four subframes blended it leaves a short streak, so the motion reads as smooth. The four samples are taken at t, t plus a quarter, t plus a half and t plus three quarters of one sixtieth of a second.",size:{wide:[640,170],narrow:[336,276]},load:()=>e(()=>import("./subframe-blur-CnYlq5ac.js"),__vite__mapDeps([21,1,2,3]))},"motion-techniques/one-shape":{title:"One shape, never cut",summary:"Four cards show one element in four states: a mascot circle at 0 seconds, a play button at 1 second, a loader ring at 2 seconds and a timeline pill at 2.5 seconds. A dashed ring travels from card to card to show that the same element is morphing and nothing is replaced.",size:{wide:[640,172],narrow:[336,262]},load:()=>e(()=>import("./one-shape-j_enWC4X.js"),__vite__mapDeps([22,1,2,3]))},"motion-techniques/kinetic-type":{title:"Kinetic type per glyph",summary:"The word STEAL, each letter its own element. The letters rise one after another with a start offset of 125 milliseconds each, a sixteenth note at 120 beats per minute. Tick marks under the word show the offsets 0, 125, 250, 375 and 500 milliseconds.",size:{wide:[640,170],narrow:[336,160]},load:()=>e(()=>import("./kinetic-type-BwxytY6S.js"),__vite__mapDeps([23,1,2,3]))},"motion-techniques/mask-reveal":{title:"A reveal through the letters",summary:"Three panels. First, an outgoing plate with the word BAD. Second, the word becomes a window and the next scene, the word WORKFLOWS, shows through the letterforms. Third, the window grows until the next scene almost fills the frame.",size:{wide:[640,180],narrow:[336,410]},load:()=>e(()=>import("./mask-reveal-Dh62h6rE.js"),__vite__mapDeps([24,1,2,3]))},"motion-techniques/misregistration":{title:"Print misregistration",summary:"The word IMPACT. At two impact moments marked on a small timeline, a blue copy and an orange copy appear behind it, shifted by 4 pixels at 45 percent opacity, and then vanish. Outside the impacts the text is clean.",size:{wide:[640,170],narrow:[336,160]},load:()=>e(()=>import("./misregistration-BKBexzqq.js"),__vite__mapDeps([25,1,2,3]))},"motion-techniques/storyboard-first":{title:"Storyboard before code",summary:"Six beat cards, each with a time and a short caption, from 0 seconds to 12 seconds. Below them a flow of five steps: storyboard, you approve, code, one still per beat, fix then render.",size:{wide:[640,196],narrow:[336,350]},load:()=>e(()=>import("./storyboard-first-B0wqsO8q.js"),__vite__mapDeps([26,1,2,3]))},"motion-techniques/reference-by-link":{title:"Reference by link",summary:"Three boxes in a chain. A post you like, given only as a link. The style read out of it: palette, type, camera, beat grid, cursor and springs. Your own story told in that style.",size:{wide:[640,160],narrow:[336,326]},load:()=>e(()=>import("./reference-by-link-BRGXetYm.js"),__vite__mapDeps([27,1,2,3]))},"motion-techniques/feedback-passes":{title:"Feedback in passes",summary:"Three versions of a video. Version 1 has only picture, with the note that scenes are too fast. Version 2 adds sound to every movement. Version 3 adds a music track cut to its beat. Each pass adds one layer.",size:{wide:[640,240],narrow:[336,280]},load:()=>e(()=>import("./feedback-passes-_iECxzov.js"),__vite__mapDeps([28,1,2,3]))},"motion-techniques/locked-message":{title:"A locked message and a ban list",summary:"Left, six lines of on-screen text in a fixed order, the only words allowed. Right, a ban list of clichés each crossed out: brains and robots, sparkles, soft gradients, bouncy easing, particle explosions and glassmorphism.",size:{wide:[640,170],narrow:[336,330]},load:()=>e(()=>import("./locked-message-B5Rprkoe.js"),__vite__mapDeps([29,1,2,3]))},"hyperframes-tutorial-study/cadence":{title:"Drawing cadence against file frame rate",summary:"Half a second of a pencil treatment drawn at 12 drawings a second, so six drawings. In a 24 fps file the 12 frames show drawings 1, 1, 2, 2, 3, 3 and so on: every drawing holds two frames. In a 30 fps file the 15 frames show drawing 1 for three frames, drawing 2 for two, then three, two, three, two: the holds alternate between three and two frames. The drawing index is floor(time times 12), independent of the file frame rate.",size:{wide:[640,232],narrow:[336,268]},load:()=>e(()=>import("./cadence-xMe3D3rh.js"),__vite__mapDeps([30,1,2,3]))},"motion-techniques/harmonic-morph":{title:"A shape morphing as harmonics, and the harmonic budget",summary:"A five-pointed star becomes a house by mixing the coefficients of 12 harmonics from alpha 0 to 1, drawn as 14 in-between outlines. Beside it the same star rebuilt from 2, 6 and 24 harmonics: few give a soft blob, many bring the corners back.",size:{wide:[640,214],narrow:[336,330]},load:()=>e(()=>import("./harmonic-morph-BXiZRFF7.js"),__vite__mapDeps([31,1,2,3,32]))},"motion-techniques/harmonic-type":{title:"Letters as compound harmonic contours",summary:"The letters O and A, each made of an outer and an inner contour rebuilt from 16 harmonics. With the non-zero fill rule the holes are filled in; with the even-odd rule, as one compound path, the holes stay open.",size:{wide:[640,184],narrow:[336,300]},load:()=>e(()=>import("./harmonic-type-Bffzz2Qm.js"),__vite__mapDeps([33,1,2,3,32]))},"motion-techniques/shape-to-sound":{title:"A contour spectrum becomes a tone",summary:"A circle and a star. For each, the magnitudes of its first 16 harmonics as bars, and one period of the tone those partials make. The circle has one strong partial and is nearly a sine wave; the star spreads its energy over many partials.",size:{wide:[640,214],narrow:[336,296]},load:()=>e(()=>import("./shape-to-sound-8G42nn5C.js"),__vite__mapDeps([34,1,2,3,32]))},"motion-techniques/independent-clocks":{title:"A speed change on an accumulated clock",summary:"Speed changes from 1x to 3x at 2 s. Left, phase = speed times time: the phase jumps from 2 to 6 at the change. Right, phase += speed * dt: the phase only changes slope.",size:{wide:[640,200],narrow:[336,336]},load:()=>e(()=>import("./independent-clocks-DAlKAAl9.js"),__vite__mapDeps([35,1,2,3]))},"motion-techniques/camera-curves":{title:"Camera keyframes: linear, spline, monotone Hermite",summary:"One azimuth channel keyed at four stations with two holds. Linear has corners; a Catmull-Rom spline dips below the first key and above the second; a monotone Hermite curve stays between keys. A top view shows the camera orbiting a model along the monotone curve.",size:{wide:[640,190],narrow:[336,330]},load:()=>e(()=>import("./camera-curves-_cyETXlz.js"),__vite__mapDeps([36,1,2,3,32]))},"motion-techniques/tilt-shift":{title:"A moving sharp band: miniature faking",summary:"A small town seen from above, blurred everywhere except one sharp horizontal band that moves down and back. A sharp and a blurred copy of the scene, with a mask hiding the blur inside the band.",size:{wide:[640,200],narrow:[336,210]},load:()=>e(()=>import("./tilt-shift-v1XCY4Kp.js"),__vite__mapDeps([37,1,2,3]))},"motion-techniques/blender-frames":{title:"A scripted Blender animation, measured",summary:"A pipeline of four steps (bpy script, keyframe_insert, frame_set(n), render each frame) and a plot of the cube position at frames 1, 12, 24, 36 and 48: Bezier -2, -1.445, -0.064, 1.351, 2 against linear -2, -1.064, -0.043, 0.979, 2.",size:{wide:[640,232],narrow:[336,356]},load:()=>e(()=>import("./blender-frames-BFrrFg6U.js"),__vite__mapDeps([38,1,2,3]))},"motion-techniques/motion-defaults":{title:"Motion defaults in frames and milliseconds",summary:"Six bars at 30 fps: opacity in 6 frames, a supporting CTA move 6, blur in 7, scale out 10, translate or scale in 12, translate out 13. Each bar shows its frames and its milliseconds.",size:{wide:[640,200],narrow:[336,240]},load:()=>e(()=>import("./motion-defaults-CoZG-kja.js"),__vite__mapDeps([39,1,2,3]))},"motion-techniques/importance-budget":{title:"An importance level per beat",summary:"Eight beats rated 1, 2 or 3 and drawn as bars. Level 3 gets the most motion: 2 of 8 beats, 25 percent of the video.",size:{wide:[640,200],narrow:[336,210]},load:()=>e(()=>import("./importance-budget-D5Koxe9h.js"),__vite__mapDeps([40,1,2,3]))},"motion-techniques/speed-ramp":{title:"A speed ramp and its source-frame curve",summary:"Speed is 100 percent to frame 20, eases down to 25 percent at frame 28 and back to 100 percent at frame 40. The source frame is the running sum of the speed; a dot moves on that curve and a dashed line marks the impact.",size:{wide:[640,200],narrow:[336,320]},load:()=>e(()=>import("./speed-ramp-B8tkVlEs.js"),__vite__mapDeps([41,1,2,3]))},"motion-techniques/downbeat-cuts":{title:"Cuts on the downbeat, and what makes a hit",summary:"A strip of scenes of 2, 2 and 4 bars with cuts on bar starts, and four loudness jumps against a 6 dB threshold: an accent on the cut, kick and bass together, layers a bar apart, a chord change.",size:{wide:[640,230],narrow:[336,320]},load:()=>e(()=>import("./downbeat-cuts-Bu-V2nPp.js"),__vite__mapDeps([42,1,2,3]))},"motion-techniques/broll-treatments":{title:"A B-roll treatment plan and its timing",summary:"A 26 second strip of treatments A, B and C (A4 B5 A5 C5 A3 B2 A2 seconds) and the timing of a data overlay: axes lead by about 6 frames, the value lands on the spoken word, the answer waits.",size:{wide:[640,236],narrow:[336,236]},load:()=>e(()=>import("./broll-treatments-D-R2eocI.js"),__vite__mapDeps([43,1,2,3]))},"motion-techniques/lower-third":{title:"A lower third: safe area and timing",summary:"A 16:9 frame with a dashed title-safe line and a strap that slides in, and the clip timeline: lead 0.2 s, in 0.8 s, hold 5.5 s, out 0.5 s, tail 0.2 s.",size:{wide:[640,210],narrow:[336,300]},load:()=>e(()=>import("./lower-third-ChptcZA2.js"),__vite__mapDeps([44,1,2,3]))},"motion-techniques/hand-draw-on":{title:"A hand draw-on with a pen on the point",summary:"Two strokes drawn as 30 line pieces each, a pen glued to the newest point that lifts and moves unseen between strokes.",size:{wide:[640,200],narrow:[336,260]},load:()=>e(()=>import("./hand-draw-on-Dvor8R54.js"),__vite__mapDeps([45,1,2,3]))},"motion-techniques/progressive-diagram":{title:"Reveal order for a flow diagram",summary:"Nodes first, then the edges with a dot travelling along them, then the labels; last, the active node keeps full strength and the others dim to 35 percent.",size:{wide:[640,200],narrow:[336,210]},load:()=>e(()=>import("./progressive-diagram-B3rJPVhI.js"),__vite__mapDeps([46,1,2,3]))},"motion-techniques/oklch-gradients":{title:"The same two colours, mixed in sRGB and in OKLCH",summary:"Blue to amber in 40 stripes, blended two ways, with a line under each bar that plots the chroma of every stripe. The sRGB mix dips toward grey in the middle; the OKLCH mix keeps the chroma.",size:{wide:[640,200],narrow:[336,220]},load:()=>e(()=>import("./oklch-gradients-HHINLWze.js"),__vite__mapDeps([47,1,2,3]))},"motion-techniques/parallax-layers":{title:"Parallax: three layers at three speeds",summary:"One camera pan of 100 units. The background follows at 0.2x, the midground at 0.6x and the foreground at 1.2x, inside a clipped frame.",size:{wide:[640,190],narrow:[336,316]},load:()=>e(()=>import("./parallax-layers-Ca9r4DPQ.js"),__vite__mapDeps([48,1,2,3]))},"motion-techniques/reduced-motion-tiers":{title:"Reduced motion in three tiers",summary:"Three rows, each with the normal and the reduced version: remove the big slide, soften a slide to a 150 ms fade, keep a colour fade.",size:{wide:[640,200],narrow:[336,300]},load:()=>e(()=>import("./reduced-motion-tiers-vl6rFQ8l.js"),__vite__mapDeps([49,1,2,3]))},"motion-techniques/vertical-safe-box":{title:"A vertical frame and its safe box",summary:"A 1080 by 1920 frame with clear bands of 120 px at the top, 320 px at the bottom and 120 px on the right, and a dashed 900 by 1400 box that dips 60 px into the bottom band.",size:{wide:[640,210],narrow:[336,320]},load:()=>e(()=>import("./vertical-safe-box-BQnyx8W_.js"),__vite__mapDeps([50,1,2,3]))}};var j=l("<p class=viz-failed>Unknown visualization: "),H=l('<figure class=viz><div class=viz-frame role=img><div class=viz-canvas></div></div><figcaption class=viz-caption><span></span><button type=button class=viz-replay><svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d="M3 12a9 9 0 1 0 3-6.7L3 8"></path><path d="M3 3v5h5"></path></svg><span>Replay'),C=l("<p class=viz-failed>This visualization could not be drawn. The text around it has the same facts."),B=l("<div class=viz-loading aria-hidden=true>");const W=Object.fromEntries(Object.entries(R).map(([a,n])=>[a,z(n.load)])),A=([a,n])=>`${a} / ${n}`;function F(a){const n=R[a.id];if(!n)return(()=>{var t=j();return t.firstChild,h(t,()=>a.id,null),t})();const o=W[a.id],d=a.caption??n.title,r=t=>{var i;return(i=t.currentTarget.closest("figure"))==null?void 0:i.dispatchEvent(new CustomEvent("viz:replay"))};return(()=>{var t=H(),i=t.firstChild,c=i.firstChild,p=i.nextSibling,f=p.firstChild,y=f.nextSibling;return h(c,s(E,{get fallback(){return C()},get children(){return s(L,{get fallback(){return B()},get children(){return s(o,{get size(){return n.size}})}})}})),h(f,d),y.$$click=r,m(y,"aria-label",`Replay the animation: ${d}`),g(u=>{var v=a.id,q=A(n.size.wide),x=A(n.size.narrow),T=n.summary;return v!==u.e&&m(t,"data-viz",u.e=v),q!==u.t&&_(t,"--viz-wide-ratio",u.t=q),x!==u.a&&_(t,"--viz-narrow-ratio",u.a=x),T!==u.o&&m(i,"aria-label",u.o=T),u},{e:void 0,t:void 0,a:void 0,o:void 0}),t})()}D(["click"]);var N=l("<a>"),G=l("<nav aria-label=Techniques class=space-y-4>"),K=l('<div><p class="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">'),U=l('<div class="mx-auto flex max-w-6xl gap-6 px-4"><aside class="sticky top-[4.5rem] hidden max-h-[calc(100vh-5.5rem)] w-56 shrink-0 self-start overflow-y-auto py-6 lg:block"></aside><div class="min-w-0 flex-1"><details class="mt-4 rounded-md border lg:hidden"><summary class="cursor-pointer px-3 py-2 text-sm font-medium">Techniques menu</summary><div class="border-t p-2">'),V=l('<p class="p-6 text-sm text-muted-foreground">Page not found. <a class=underline href=#/techniques>Techniques'),$=l("<article>"),Y=l("<div>"),Q=l("<ol class=tq-steps>"),Z=l("<p class=tq-fcap>"),J=l("<li><b></b><span>");const X=[["The pencil look",["line-boil","cadence-and-seed","hatching","construction-lines"]],["The workflow",["timing-plan","style-contract","render-and-inspect","error-log","assemble-from-pieces"]],["Picture and voice",["layered-assets","sentence-shot","number-readout"]],["Motion engineering",["seekable-frame","closed-form-springs","beat-grid","seamless-loop","subframe-blur","one-shape","independent-clocks"]],["Type and print",["kinetic-type","mask-reveal","misregistration"]],["Direction and review",["storyboard-first","reference-by-link","feedback-passes","locked-message"]],["Harmonic shapes",["harmonic-morph","harmonic-type","shape-to-sound"]],["3D and Blender",["camera-curves","tilt-shift","blender-frames"]],["Timing and importance",["motion-defaults","importance-budget"]],["Cuts, sound and overlays",["speed-ramp","downbeat-cuts","broll-treatments","lower-third","vertical-safe-box"]],["Drawing and diagrams",["hand-draw-on","progressive-diagram"]],["Colour, depth and access",["oklch-gradients","parallax-layers","reduced-motion-tiers"]]],ee=a=>{var n;return(n=P.find(o=>o.id===`technique-${a}`))==null?void 0:n.label};function S(a){const n=(o,d)=>(()=>{var r=N();return m(r,"href",o),h(r,d),g(t=>{var i=a.route===o?"page":void 0,c=`block rounded-md px-3 py-1.5 text-sm transition-colors ${a.route===o?"bg-accent font-medium text-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"}`;return i!==t.e&&m(r,"aria-current",t.e=i),c!==t.t&&I(r,t.t=c),t},{e:void 0,t:void 0}),r})();return(()=>{var o=G();return h(o,()=>n("#/techniques","Overview"),null),h(o,s(b,{each:X,children:([d,r])=>(()=>{var t=K(),i=t.firstChild;return h(i,d),h(t,s(b,{each:r,children:c=>n(`#/techniques/${c}`,ee(c))}),null),t})()}),null),o})()}function ae(a){return s(k,{get when(){return a.route.startsWith("#/techniques")},get fallback(){return s(M,{get route(){return a.route}})},get children(){var n=U(),o=n.firstChild,d=o.nextSibling,r=d.firstChild,t=r.firstChild,i=t.nextSibling;return h(o,s(S,{get route(){return a.route}})),h(i,s(S,{get route(){return a.route}})),h(d,s(M,{get route(){return a.route}}),null),n}})}function M(a){const n=()=>P.find(o=>o.route===a.route);return s(k,{get when(){return n()},get fallback(){return V()},children:o=>(()=>{var d=$();return h(d,s(b,{get each(){return o().blocks},children:r=>s(O,{get children(){return[s(w,{get when(){return r.t==="html"},get children(){var t=Y();return g(()=>t.innerHTML=r.html),t}}),s(w,{get when(){return r.t==="viz"},get children(){return s(F,{get id(){return r.id},get caption(){return r.caption}})}}),s(w,{get when(){return r.t==="steps"},get children(){return[(()=>{var t=Q();return h(t,s(b,{get each(){return r.steps},children:i=>(()=>{var c=J(),p=c.firstChild,f=p.nextSibling;return h(p,()=>i.title),h(f,()=>i.text),c})()})),t})(),s(k,{get when(){return r.caption},get children(){var t=Z();return h(t,()=>r.caption),t}})]}})]}})})),g(()=>I(d,`tq tq-prose ${o().id==="motion-skills-list"?"tq-wide":""}`)),d})()})}export{ae as default};
