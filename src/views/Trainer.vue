<template>
  <main>
    <section class="secondary">
      <h3>金井 大輝</h3>
      <div class="body">
        <div class="job">
          <p>Webアプリエンジニア</p>
          <p>Agileコーチ</p>
          <p>Extreme Programming Tech Practice トレーナー /実践者</p>
        </div>
      </div>
    </section>
    <section class="primary">
      <h3>資格</h3>
      <div class="body">
      <div>
        <img width="150" src="@/assets/csde.png" />
        <p class="my-5">
          <strong
            >Certified Scrum Developer Educator /
            認定ScrumDeveloper教育者</strong
          >
        </p>
        <div class="body">
          <article>
            <div class="message-body">
              <p>
                Certified Scrum Developer Educatorは
                <a target="_blank" href="https://www.scrumalliance.org/"
                  >Scrum Alliance</a
                >
                認定研修である、
              </p>
              <p>
                <a
                  target="_bannk"
                  href="https://www.scrumalliance.org/get-certified/developer-track/certified-scrum-developer"
                  >Certified Scrum Developer®</a
                >
                Training / 認定Scrum開発者研修
                を開催し、認定を付与する資格を有します。
              </p>
              <p>
                研修実績・独自のコース内容・既存CSDEducatorからの推薦書より、Scrum
                Allianceが
              </p>
              <p>
                定義している
                <a
                  target="_blank"
                  href="https://www.scrumalliance.org/ScrumRedesignDEVSite/media/ScrumAllianceMedia/Files%20and%20PDFs/Learning%20Objectives/E_CSD_LO_2021.pdf"
                  >学習目標</a
                >
                を到達するための、有効な研修が提供できる人物の証明になります。
              </p>
            </div>
          </article>
        </div>
      </div>
      </div>
    </section>
    <section class="secondary">
      <h3>経歴</h3>
      <div class="body">
        <article class="message">
          <div class="message-title"><p><strong>2012 - 2016 株式会社ActiveWork</strong></p></div>
          <div class="message-body">
            <p>Webエンジニアとして4年間開発・運用を担当。</p>
            <p>ToC向け新規開発・ToB向け新規開発・追加開発・インフラ移行・</p>
            <p>社内インフラ構築など様々なプロジェクトに従事。</p>
            <p>最大20名ほどのプロジェクトの設計・開発のチームリードを担当。</p>
          </div>
        </article>
        <article class="message">
          <div class="message-title"><p><strong>2016 - 2022 株式会社Odd-e Japan</strong></p></div>
          <div class="message-body">
            <p>
              Scrumコーチとして顧客へのScrum導入支援・XPテクニカルプラクティス導入支援に従事。
            </p>
            <p>
              Scrum Alliance認定研修 5Days Certified Scrum
              Developerの共同講師・オーガナイズ・通訳や、
            </p>
            <p>
              自身のAgile・XP Practices
              3Days研修の作成・オーガナイズ・講師として従事。
            </p>
            <p>累計200名以上の受講者に研修実施。</p>
          </div>
        </article>
        <article class="message">
          <div class="message-title"><p><strong>2016 - 2022 株式会社Odd-e Japan</strong></p></div>
          <div class="message-body">
            <p>自社のWeb・Nativeエンジニアとして開発・チームリードに従事。</p>
            <p>
              海外支社の開発チームのリード・顧客とのブリッジ・品質支援に従事。
            </p>
            <p>
              複数プロダクト・チームを並行して、技術・品質・プロセス改善支援に従事。
            </p>
          </div>
        </article>
      </div>
    </section>
    <section class="primary">
      <h3>実務経験スキル</h3>
      <div class="body">
        <div class="skill">
          <p><strong>Java</strong> - SprintBoot・Servlet・Junit</p>
          <p><strong>PHP</strong> - ZendFramework・PHP Unit</p>
          <p><strong>Go</strong> - Echo・gorm・go test</p>
          <p><strong>Node</strong> - Express・Seqalize・Jest・Chai</p>
          <p><strong>Ruby</strong> - RoR・Rspec</p>
          <p><strong>Python</strong> - Django・Flask・pytest</p>
          <p><strong>Frontend</strong> - React・Jest</p>
          <p>
            <strong>E2E test</strong> - Cypress・Playwright・Selenium・Cucumber
          </p>
          <p><strong>CI System</strong> - Jenkins・GithubAction・CircleCI</p>
          <p><strong>Container</strong> - Docker・DockerSwarm</p>
          <p>
            <strong>Flutter</strong> - Flutter・WidgetTest・IOS申請・Android申請
          </p>
          <p>
            <strong>AWS</strong> -
            EC2・ECR・ECS・Fargate・SQS・ALB・Lambda・CodePipeline・S3・CloudFront・SecretManager・CloudWatchLog・CloudWatchAlerm
          </p>
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
section.primary {
  background: #fafafa;
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
