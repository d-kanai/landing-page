<template>
  <main>
    <section class="secondary">
      <h3>事業概要</h3>
      <div class="body">
        <table class="table">
          <tbody>
            <tr>
              <th><p>屋号</p></th>
              <td><p>金井 大輝</p></td>
            </tr>
            <tr>
              <th><p>設立</p></th>
              <td><p>2022年1月</p></td>
            </tr>
            <tr>
              <th><p>代表者</p></th>
              <td><p>金井 大輝</p></td>
            </tr>
            <tr>
              <th><p>事業内容</p></th>
              <td>
                  <p>ソフトウェア開発業務</p>
                  <p>ソフトウェア開発のコーチング・コンサルティング</p>
                  <p>ソフトウェア開発の研修・トレーニング</p>
              </td>
            </tr>
            <tr>
              <th><p>連絡先</p></th>
              <td><p>contact@dkanai.com</p></td>
            </tr>
          </tbody>
        </table>
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
table {
  max-width: 750;
  margin: auto;
  text-align: left;
}
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
