import GitListTable from "./GitListTable.js";
import HeaderTop from "./HeaderTop.js";

export default {
    template: `<section><header-top></header-top>
      <git-list-table></git-list-table></section>
    `,

    components: { GitListTable, HeaderTop}
}
