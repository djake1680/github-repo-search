import GitListTable from "./GitListTable.js";
import HeaderTop from "./HeaderTop.js";

export default {
    template: `<section>
      <header-top :dataCount="this.repoData.length" @update-git-data="updateGitData"></header-top>
      <git-list-table :loading="loading" :repoData="this.repoData" :dataUpdated="this.dataUpdated"></git-list-table>
    </section>
    `,

    components: { GitListTable, HeaderTop},

    data() {
        return {
            repoData: [],
            dataUpdated: 'false',
            loading: false
        }
    },

    methods: {
        fetchGitData() {
            this.loading = true;
            fetch(`/gitRepos`)
                .then(response => response.json())
                .then(data => {
                    this.repoData = data;
                    this.loading = false;
                });
        },

        updateGitData() {
            this.loading = 'true';
            fetch('/gitReposUpdate')
                .then(response => response.json())
                .then(data => {
                    this.repoData = data;
                    this.dataUpdated = 'true';
                    this.loading = false;
                });
        }
    },

    created() {
        this.fetchGitData();
        this.loading = false;
    }
}
