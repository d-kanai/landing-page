(function(e){function t(t){for(var n,i,c=t[0],o=t[1],l=t[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);p&&p(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,c=1;c<r.length;c++){var o=r[c];0!==a[o]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/landing-page/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=o;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"1be0":function(e,t,r){},"1ea2":function(e,t,r){"use strict";r("1be0")},"24f3":function(e,t,r){"use strict";r("6275")},"2a63":function(e,t,r){"use strict";r("9bfd")},5378:function(e,t,r){"use strict";r("62dc")},6275:function(e,t,r){},"62dc":function(e,t,r){},"9b3d":function(e,t,r){e.exports=r.p+"img/csd.27d952e2.png"},"9bfd":function(e,t,r){},bf72:function(e,t,r){e.exports=r.p+"img/csde.1c693c4e.png"},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={class:"navbar is-dark is-fixed-top"},s={class:"navbar-brand"},i=Object(n["e"])("p",{class:"navbar-item title m-2"},[Object(n["e"])("span",{class:"icon"},[Object(n["e"])("i",{class:"fa fa-signature"})])],-1),c=Object(n["e"])("span",{"aria-hidden":"true"},null,-1),o=Object(n["e"])("span",{"aria-hidden":"true"},null,-1),l=Object(n["e"])("span",{"aria-hidden":"true"},null,-1),p=[c,o,l],d={class:"navbar-start"},u=Object(n["e"])("span",null,"研修",-1),b=Object(n["e"])("span",null,"研修講師",-1),g=Object(n["e"])("span",null,"事業概要",-1);function m(e,t){var r=Object(n["u"])("router-link"),c=Object(n["u"])("router-view");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["e"])("nav",a,[Object(n["e"])("div",s,[i,Object(n["e"])("a",{role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navMenu",onClick:t[0]||(t[0]=function(){return e.toggleMenu&&e.toggleMenu.apply(e,arguments)})},p)]),Object(n["e"])("div",{class:Object(n["m"])(["navbar-menu",{"is-active":e.menuIsActive}])},[Object(n["e"])("div",d,[Object(n["g"])(r,{onClick:e.closeMenu,class:"navbar-item",to:"/"},{default:Object(n["y"])((function(){return[u]})),_:1},8,["onClick"]),Object(n["g"])(r,{onClick:e.closeMenu,class:"navbar-item",to:"/trainer"},{default:Object(n["y"])((function(){return[b]})),_:1},8,["onClick"]),Object(n["g"])(r,{onClick:e.closeMenu,class:"navbar-item",to:"/about"},{default:Object(n["y"])((function(){return[g]})),_:1},8,["onClick"])])],2)]),Object(n["g"])(c)],64)}var v={name:"App",data:function(){return{menuIsActive:!1}},methods:{toggleMenu:function(){this.menuIsActive=!this.menuIsActive,console.log(this.menuIsActive)},scrollToTop:function(){window.scrollTo(0,0)},closeMenu:function(){this.menuIsActive=!1,this.scrollToTop()}}},f=(r("2a63"),r("6b0d")),h=r.n(f);const O=h()(v,[["render",m]]);var y=O,j=r("6c02"),S=Object(n["f"])('<section class="secondary"><h3>事業概要</h3><div class="body"><table class="table"><tbody><tr><th><p>屋号</p></th><td><p>金井 大輝</p></td></tr><tr><th><p>設立</p></th><td><p>2022年1月</p></td></tr><tr><th><p>代表者</p></th><td><p>金井 大輝</p></td></tr><tr><th><p>事業内容</p></th><td><p>ソフトウェア開発業務</p><p>ソフトウェア開発のコーチング・コンサルティング</p><p>ソフトウェア開発の研修・トレーニング</p></td></tr><tr><th><p>連絡先</p></th><td><p>contact@dkanai.com</p></td></tr></tbody></table></div></section>',1),w=[S];function C(e,t,r,a,s,i){return Object(n["q"])(),Object(n["d"])("main",null,w)}var k={data:function(){return{}}};r("1ea2");const A=h()(k,[["render",C]]);var D=A,P=r("bf72"),_=r.n(P),E=Object(n["f"])('<section class="secondary"><h3>金井 大輝</h3><div class="body"><div class="job"><p>Webアプリエンジニア</p><p>Agileコーチ</p><p>Extreme Programming Tech Practice トレーナー /実践者</p></div></div></section><section class="primary"><h3>資格</h3><div class="body"><div><img width="150" src="'+_.a+'"><p class="my-5 title is-5"><strong>Certified Scrum Developer Educator / 認定ScrumDeveloper教育者</strong></p><div class="body"><article><div class="message-body"><p> Certified Scrum Developer Educatorは <a target="_blank" href="https://www.scrumalliance.org/">Scrum Alliance</a> 認定研修である、 </p><p><a target="_bannk" href="https://www.scrumalliance.org/get-certified/developer-track/certified-scrum-developer">Certified Scrum Developer®</a> Training / 認定Scrum開発者研修 を開催し、認定を付与する資格を有します。 </p><p> 研修実績・独自のコース内容・既存CSDEducatorからの推薦書より、Scrum Allianceが </p><p> 定義している <a target="_blank" href="https://www.scrumalliance.org/ScrumRedesignDEVSite/media/ScrumAllianceMedia/Files%20and%20PDFs/Learning%20Objectives/E_CSD_LO_2021.pdf">学習目標</a> を到達するための、有効な研修が提供できる人物の証明になります。 </p></div></article></div></div></div></section><section class="secondary"><h3>経歴</h3><div class="body"><article class="message"><div class="message-title"><p><strong>2012 - 2016 株式会社ActiveWork</strong></p></div><div class="message-body"><p>Webエンジニアとして4年間開発・運用を担当。</p><p>ToC向け新規開発・ToB向け新規開発・追加開発・インフラ移行・</p><p>社内インフラ構築など様々なプロジェクトに従事。</p><p>最大20名ほどのプロジェクトの設計・開発のチームリードを担当。</p></div></article><article class="message"><div class="message-title"><p><strong>2016 - 2022 株式会社Odd-e Japan</strong></p></div><div class="message-body"><p> Scrumコーチとして顧客へのScrum導入支援・XPテクニカルプラクティス導入支援に従事。 </p><p> Scrum Alliance認定研修 5Days Certified Scrum Developerの共同講師・オーガナイズ・通訳や、 </p><p> 自身のAgile・XP Practices 3Days研修の作成・オーガナイズ・講師として従事。 </p><p>累計200名以上の受講者に研修実施。</p></div></article><article class="message"><div class="message-title"><p><strong>2016 - 2022 株式会社Odd-e Japan</strong></p></div><div class="message-body"><p>自社のWeb・Nativeエンジニアとして開発・チームリードに従事。</p><p> 海外支社の開発チームのリード・顧客とのブリッジ・品質支援に従事。 </p><p> 複数プロダクト・チームを並行して、技術・品質・プロセス改善支援に従事。 </p></div></article></div></section><section class="primary"><h3>実務経験スキル</h3><div class="body"><div class="skill"><p><strong>Java</strong> - SprintBoot・Servlet・Junit</p><p><strong>PHP</strong> - ZendFramework・PHP Unit</p><p><strong>Go</strong> - Echo・gorm・go test</p><p><strong>Node</strong> - Express・Seqalize・Jest・Chai</p><p><strong>Ruby</strong> - RoR・Rspec</p><p><strong>Python</strong> - Django・Flask・pytest</p><p><strong>Frontend</strong> - React・Jest</p><p><strong>E2E test</strong> - Cypress・Playwright・Selenium・Cucumber </p><p><strong>CI System</strong> - Jenkins・GithubAction・CircleCI</p><p><strong>Container</strong> - Docker・DockerSwarm</p><p><strong>Flutter</strong> - Flutter・WidgetTest・IOS申請・Android申請 </p><p><strong>AWS</strong> - EC2・ECR・ECS・Fargate・SQS・ALB・Lambda・CodePipeline・S3・CloudFront・SecretManager・CloudWatchLog・CloudWatchAlerm </p></div></div></section>',4),M=[E];function T(e,t,r,a,s,i){return Object(n["q"])(),Object(n["d"])("main",null,M)}var x={data:function(){return{}}};r("5378");const F=h()(x,[["render",T]]);var J=F,I=r("9b3d"),R=r.n(I),W=Object(n["f"])('<section class="secondary"><h3>研修</h3><div class="body"><div><img width="150" src="'+R.a+'"><p class="my-5 title is-5"><strong>Certified Scrum Developer Training / 認定ScrumDeveloper研修</strong></p><button class="button is-primary is-warning is-medium" style="font-family:ヒラギノ明朝;"><a class="a-no-decoration" href="https://training.tech-kai.com" target="_blank">研修を予約する</a></button><p class="subtitle is-6 mt-2"> ※<a href="https://www.odd-e.jp" target="_blank">株式会社Odd-e Japan</a>主催の研修となります<br></p><p class="subtitle is-6"></p><article class="message"><div class="message-body"><p><a target="_bannk" href="https://www.scrumalliance.org/get-certified/developer-track/certified-scrum-developer">Certified Scrum Developer®</a> 認定研修。 </p><br><p>本研修はAgileな開発における技術スキルを強化します。</p><p> Scrum・Agileの原則を理解し、専門的なAgileなエンジニアリングスキル・</p><p><a target="_blank" href="https://www.scrumalliance.org/ScrumRedesignDEVSite/media/ScrumAllianceMedia/Files%20and%20PDFs/Learning%20Objectives/E_CSD_LO_2021.pdf">学習目標</a> を習得することを目指します。</p></div></article></div><div><p class="my-5"><strong>CSD研修コース提供について</strong></p><article class="message"><div class="message-body"><p> Martin Fowler氏は <a target="_bannk" href="https://martinfowler.com/bliki/FlaccidScrum.html">FlaccidScrum</a> という言葉を記事にしています。 </p><br><p>私がはじめてScrumで開発をした際はポジティブな側面を多く感じながらも、この記事で紹介されているような体験も同時に得ました。</p><p>当時私はExtreme Programmingの知識を全く持っていなかったため、変化を受け入れ、抱擁する・適応する。そのようなAgileな状態を目指したいとした場合に、開発者としてどう付き合えば良いか整理がつかなかったのです。</p><br><p>その後、私はCSD研修の受講をきっかけにExtreme Programmingの戦略とプラクティスを知り、</p><p>&quot;変化に適応する&quot;ことを前向きに捉えられるようになると共に、自身に不足しているスキルが明らかになったことを覚えております。</p><br><p>当時私の周りにはCSD研修にて学習するような内容を精通している人は少なく、似たような悩みをもっておりました。</p><p>昨今では認知度が上がってきていると感じますが、まだリーチできていない方へ・似たような悩みを持つ方へ、本研修を通じて助けになればと思います。</p><p></p></div></article></div></div></section>',1),q=[W];function L(e,t,r,a,s,i){return Object(n["q"])(),Object(n["d"])("main",null,q)}var B={data:function(){return{}}};r("24f3");const G=h()(B,[["render",L]]);var H=G,N=[{path:"/",name:"Top",component:H},{path:"/trainer",name:"Trainer",component:J},{path:"/about",name:"About",component:D}],V=Object(j["a"])({history:Object(j["b"])("/landing-page/"),routes:N}),X=V,z=r("5502"),Q=Object(z["a"])({state:{},mutations:{},actions:{},modules:{}});Object(n["c"])(y).use(Q).use(X).mount("#app")}});
//# sourceMappingURL=app.7de63ab4.js.map