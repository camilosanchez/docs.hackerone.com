webpackJsonp([0x5ed1c88af587],{800:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Well-defined scopes clearly communicate your program\'s needs and expectations with hackers. This enables hackers to have a better idea around what you would like them to focus on and how they should prioritize their time.</p>\n<p>Here are some practical guidelines to help you define and set up your scope:</p>\n<ul>\n<li>\n<p><strong>Provide granularity</strong></p>\n<ul>\n<li>The more each asset is defined, the less room there is for misunderstanding. Avoid setting a wildcard to encapsulate different domains into one asset. For example, keep your <code>blog.yourprogram.com</code> distinct from <code>secure.yourprogram.com</code>.</li>\n</ul>\n</li>\n<li>\n<p><strong>List Assets that are out of scope</strong>.</p>\n<ul>\n<li>It\'s perfectly fine, normal, and very encouraged, to have items that are out of scope. Do you have a completely isolated "affiliated site" maintained by a third party? List that as out of scope. When you list assets as out of scope, there won\'t be surprises for the hacker that spent hours hacking it, and there won\'t be surprises for you trying to explain "We do not own that property" after the fact.</li>\n<li>If possible, explain why the asset is out of scope in the instructions field.</li>\n</ul>\n</li>\n<li>\n<p><strong>If you offer a bug bounty, make it clear which assets they\'re applicable to</strong>.</p>\n<ul>\n<li>The common best practice is to only offer bug bounties for specific assets, and to slowly expand that list over time. Set proper expectations with hackers by explicitly white-listing those assets that are eligible for bounties.</li>\n<li>If possible, explain why in the instructions field. Over communication helps prevent future disagreements. </li>\n</ul>\n</li>\n<li>\n<p><strong>Set the Environmental Score for the Asset</strong>.</p>\n<ul>\n<li>The <a href="environmental-score.html">environmental score</a> determines the severity of the vulnerability for the asset. You can set the environmental score for these 3 metrics:</li>\n<li>\n<ol>\n<li>Confidentiality: Whether the data being obtained is actually confidential to their business, i.e., if there is a business risk when the data is leaked.</li>\n</ol>\n</li>\n<li>\n<ol start="2">\n<li>Integrity: What the business risk is if the data is modified</li>\n</ol>\n</li>\n<li>\n<ol start="3">\n<li>Availability: Business risk depending on if the component is on or offline</li>\n</ol>\n</li>\n<li>\n<p>Not all of your assets are created equal. You should take the time to assess potential business impact and configure these fields in order to:</p>\n<ul>\n<li>Create alignment in expectations by prioritizing business critical assets.</li>\n<li>Constrain maximum severity for the asset so that hackers can\'t give you alerts that there\'s a "critical" vulnerability in your static marketing site.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>',frontmatter:{path:"/programs/scope-best-practices.html",id:"programs/scope-best-practices",title:"Scope Best Practices",description:null}}},pathContext:{}}}});
//# sourceMappingURL=path---programs-scope-best-practices-html-92215809c4d339b12947.js.map