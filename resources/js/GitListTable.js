import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net';
import '../../node_modules/datatables.net-dt/css/jquery.dataTables.css';
import '../../resources/css/gitTable.css';
import { compareAsc, format } from 'date-fns';

DataTable.use(DataTablesLib);

export default {
    template: `
      <div class="container table-display">
      <data-table
          class="display dataTableShow"
          :data="repoData"
          :columns="columns"
          :options="options"
      >
          <thead>
          <tr>
              <th>Stars</th>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Description</th>
              <th>URL</th>
              <th>Last Updated</th>
              <th>Last Push</th>
          </tr>
          </thead>
      </data-table>
      </div>
    `,

    components: { DataTable },

    props: {
        repoData: Array,
        dataUpdated: String
    },

    data() {
        return {
            repoCount: 1000,
            columns: [
                {"data": "star_count"},
                {"data": "repo_id"},
                {"data": "repo_name"},
                {"data": "username"},
                {"data": "description"},
                {"data": "url"},
                {"data": "repo_created_date"},
                {"data": "last_push_date"}
            ],
            options: {
                order: [[0, 'desc']],
                columnDefs: [
                    {
                        render: function(data) {
                            let newData = (data !== null && data.length < 50) ? data.substring(0, 50) :  (data!== null) ? data.substring(0, 50) + '...'  : data;
                            return '<div><p>' + newData + '</p></div>';
                        },
                        targets: [4]
                    },
                    {
                        render: function(data) {
                            return '<a href="' + data + '" target="_blank">' + data + '</a>';
                        },
                        targets: [5]
                    },
                    {
                        render: function(data) {
                            return format(new Date(data), 'MM-dd-yyyy');
                        },
                        targets: [6, 7]
                    }
                ]
            }
        }
    },

    watch: {
        dataUpdated(value) {
            window.location.reload();
        }
    }
}


