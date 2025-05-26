<template>
  <h1>Home Page</h1>
  <p>Bem-vindo à página inicial!</p>

  <img class="presentation" />

  <div class="features">

    <h1>Features</h1>

    <p>CopyTrack offers a range of features to streamline your copyright analysis process.</p>

    <section class="list-cards">
      <div class="card">
        <img height="20px" src="/svg/file.svg" />
        <h4>Document Upload</h4>
        <p>Easily upload your documents in various formats.</p>
      </div>

      <div class="card">
        <img height="20px" src="/svg/loop.svg" />

        <h4>Comprehensive Analysis</h4>
        <p>Our advanced algorithms perform a thorough analysis to identify potential copyright issues.</p>

      </div>

      <div class="card">
        <img height="20px" src="/svg/graph.svg" />

        <h4>Progress Tracking</h4>
        <p>Monitor the progress of your documents through each stage of the analysis pipeline.</p>

      </div>
    </section>

  </div>


</template>
<style scoped>
.presentation {
  /* Depth 6, Frame 0 */

  width: 928px;
  height: 480px;
  min-height: 480px;

  background: linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(.png);
  border-radius: 12px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

}

.features {
  /* Depth 4, Frame 1 */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 16px;
  gap: 40px;

  width: 960px;
  height: 362px;


  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

}

.list-cards {
  display: flex;
  gap: 10px;
  color: black;
}

.list-cards h4 {
  color: black;
}

.list-cards p {
  color: #61758A;
}

.card {
  /* Depth 7, Frame 0 */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 12px;

  width: 301px;
  height: 157px;

  background: #FFFFFF;
  border: 1px solid #DBE0E6;
  border-radius: 8px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

}
</style>