import GitListTable from "./GitListTable.js";
import HeaderTop from "./HeaderTop.js";

export default {
    template: `<section>
      <header-top :dataCount="this.repoData.length" @update-git-data="updateGitData"></header-top>
      <git-list-table :repoData="this.repoData" :dataUpdated="this.dataUpdated"></git-list-table>
    </section>
    `,

    components: { GitListTable, HeaderTop},

    data() {
        return {
            repoData: [],
            dataUpdated: 'false'
        }
    },

    methods: {
        fetchGitData() {
            fetch(`/gitRepos`)
                .then(response => response.json())
                .then(data => {
                    this.repoData = data;
                });
        },

        updateGitData() {
            fetch('/gitReposUpdate')
                .then(response => response.json())
                .then(data => {
                    this.repoData = data;
                    this.dataUpdated = 'true';
                });
            this.dataUpdated ='true test';
        }
    },

    created() {
        this.fetchGitData();
    }
}
