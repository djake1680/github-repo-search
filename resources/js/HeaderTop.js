import '../../resources/css/header.css';

export default {
    template: `
    <header class="site-header">
  <div class="site-identity">
    <h1>QuaverEd Git Challenge</h1>
  </div>
  <nav class="site-navigation">
    <ul class="nav">
      <li>
        <button class="load-data-button" v-if="dataCount === 0" @click="$emit('updateGitData')">Load Data</button>
        <button class="load-data-button" v-if="dataCount > 0" @click="$emit('updateGitData')">Refresh Data</button>
      </li>
    </ul>
  </nav>
</header>
`,

    props: {
        dataCount: Number
    }
}
