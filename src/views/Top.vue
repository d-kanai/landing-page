<template>
  <main>
    <section class="secondary">
      <h3>研修</h3>
      <div class="body">
        <div>
          <img width="150" src="@/assets/csd.png" />
          <p class="my-5">
            <strong
              >Certified Scrum Developer Training / 認定ScrumDeveloper研修</strong
            >
          </p>
          <article class="message">
            <div class="message-body">
              <p>
                <a
                  target="_bannk"
                  href="https://www.scrumalliance.org/get-certified/developer-track/certified-scrum-developer"
                  >Certified Scrum Developer®</a
                >
                認定研修。
              </p>
              <br />
              <p>本研修はAgileな開発における技術スキルを強化します。</p>
              <p>
                Scrum・Agileの原則を理解し、専門的なAgileなエンジニアリングスキル・</p>
              <p>
                <a
                  target="_blank"
                  href="https://www.scrumalliance.org/ScrumRedesignDEVSite/media/ScrumAllianceMedia/Files%20and%20PDFs/Learning%20Objectives/E_CSD_LO_2021.pdf"
                  >学習目標</a
                >
                を習得することを目指します。</p>
            </div>
          </article>
        </div>
        <div>
          <p class="my-5">
            <strong>CSD研修コース提供について</strong>
          </p>
          <article class="message">
            <div class="message-body">
              <p>
                Martin Fowler氏は
                <a target="_bannk" href="https://martinfowler.com/bliki/FlaccidScrum.html">FlaccidScrum</a>
                という言葉を記事にしています。
              </p>
              <br/>
              <p>私がはじめてScrumで開発をした際はポジティブな側面を多く感じながらも、この記事で紹介されているような体験も同時に得ました。</p>
              <p>当時私はExtreme Programmingの知識を全く持っていなかったため、変化を受け入れ、抱擁する・適応する。そのようなAgileな状態を目指したいとした場合に、開発者としてどう付き合えば良いか整理がつかなかったのです。</p>
              <br/>
              <p>その後、私はCSD研修の受講をきっかけにExtreme Programmingの戦略とプラクティスを知り、</p>
              <p>"変化に適応する"ことを前向きに捉えられるようになると共に、自身に不足しているスキルが明らかになったことを覚えております。</p>
              <br/>
              <p>当時私の周りにはCSD研修にて学習するような内容を精通している人は少なく、似たような悩みをもっておりました。</p>
              <p>昨今では認知度が上がってきていると感じますが、まだリーチできていない方へ・似たような悩みを持つ方へ、本研修を通じて助けになればと思います。</p>
              <p></p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
body {
  letter-spacing: 1.2px;
}
section {
  width: 100%;
  padding-top: 80px;
  padding-bottom: 100px;
  text-align: center;
}
section.secondary {
  background: #f6f6f6;
}
pre {
  background: none;
}
article {
  text-align: left;
  max-width: 840px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
}
.body {
  margin-top: 50px;
  margin-left: 30px;
  margin-right: 30px;
}
h3 {
  font-family: ヒラギノ明朝;
  font-size: 28px;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: #ee83a0;
  text-underline-offset: 15px;
  text-decoration-thickness: 5px;
  margin-bottom: 10px;
}
p {
  padding: 5px;
  font-family: ヒラギノ明朝;
}
.skill {
  text-align: left;
  margin: auto;
  max-width: 500px;
}
.message-title {
  padding-top: 15px;
  padding-bottom: 15px;
}
hr {
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  width: 30%;
}
body {
  font-family: ヒラギノ明朝;
}
</style>
