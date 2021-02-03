<template>
  <div class="page-information page-full">
    <div class="action">
        <el-form :inline="true" :model="queryInfo">
          <el-form-item>
            <el-input v-model="queryInfo.params.routeId" placeholder="请输入路由ID"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="getList">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleCreate">添加</el-button>
          </el-form-item>
        </el-form>
      </div>

    <div class="table">
      <el-table :data="tableData" border :fit="true" style="height: 100%" height="100%">
        <el-table-column type="index" align="center" label="序号"></el-table-column>
        <el-table-column prop="routeId" align="center" :show-overflow-tooltip="true" label="路由id"></el-table-column>
        <el-table-column prop="routeUri" align="center" :show-overflow-tooltip="true" label="路由转发地址"></el-table-column>
        <el-table-column prop="routeOrder" align="center" :show-overflow-tooltip="true" label="路由顺序">
        </el-table-column>
        <el-table-column prop="predicates" align="center" :show-overflow-tooltip="true" label="断言">
          <template slot-scope="scope">
            <span>{{ scope.row.predicates}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="filters" align="center" :show-overflow-tooltip="true" label="过滤器">
          <template slot-scope="scope">
            <span>{{ scope.row.filters}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" align="center" :show-overflow-tooltip="true" label="状态">
          <template slot-scope="scope">
            <span>{{ scope.row.status === 0 ? '启用' : '禁用' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" align="center" :show-overflow-tooltip="true" label="创建时间">
        </el-table-column>
        <el-table-column prop="updateTime" align="center" :show-overflow-tooltip="true" label="修改时间">
        </el-table-column>
        <el-table-column label="操作" align="center" fixed="right">
          <template slot-scope="scope">
          <el-button-group>
            <el-button size="mini" type="warning" @click="handleUpdate(scope.row)">修改
            </el-button>
            <el-button size="mini" type="danger" @click="handleUpdateStatus(scope.row)">{{ scope.row.status === 1 ?
                '启用' : '禁用' }}
            </el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination
          :current-page="queryInfo.pageNum"
          :page-size="queryInfo.pageSize"
          :total="totalCount"
          :page-sizes="[10, 20, 50, 100]"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange">
      </el-pagination>
    </div>
    <el-dialog :title="createFlag?'新增':'修改'" :visible.sync="dialogFormVisible" :append-to-body="true">
      <el-form class="small-space" :model="gatewayInfo" label-position="left"
               label-width="150px"
               style='width: 550px; margin-left:10px;' size="mini">
        <el-form-item label="标题">
          <el-input v-model="gatewayInfo.title"  type="textarea" required>
          </el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker
              v-model="gatewayInfo.noticeTime"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="请选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="内容地址">
          <el-input v-model="gatewayInfo.contentUrl" type="textarea" >
          </el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="gatewayInfo.sts">
            <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.name"
                :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <template v-if="!createFlag">
          <el-form-item label="创建人">
            <el-input type="text" :value="createUser" disabled>
            </el-input>
          </el-form-item>
          <el-form-item label="创建人ID">
            <el-input type="text" :value="createUserId" disabled>
            </el-input>
          </el-form-item>
          <el-form-item label="创建时间">
            <el-input type="text" :value="createTime" disabled>
            </el-input>
          </el-form-item>
          <el-form-item label="修改人">
            <el-input type="text" :value="updateUser" disabled>
            </el-input>
          </el-form-item>
          <el-form-item label="修改人ID">
            <el-input type="text" :value="updateUserId" disabled>
            </el-input>
          </el-form-item>
          <el-form-item label="修改时间">
            <el-input type="text" :value="updateTime" disabled>
            </el-input>
          </el-form-item>
        </template>
      </el-form>
      <div slot="footer" class="dialog-footer" style="text-align: center">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit(createFlag)">确 认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Gateway',
  data() {
    return {
      queryInfo: {
        pageNum: 1, pageSize: 50, param: undefined, params: {}
      },
      totalCount: 0,
      listLoading: false,
      baseUrl: "/api/v1//",
      createFlag: true,
      dialogFormVisible: false,
      options: [{id:0,name:"启用"},{id:1,name:"禁用"}],
      gatewayInfo: {},
      // 表格数据
      tableData: [
        {
          id: 1,
          routeId: 'user_route',
          routeUri: 'lb://user-api',
          routeOrder: 1,
          predicates: [{"name":"Path" ,args:{"_genkey_0":"/**"}}],
          filters: [{name:'RateLimiter', args:{'redis-rate-limiter.burstCapacity':3, 'redis-rate-limiter.replenishRate':1, 'key-resolver':'#{@apiKeyResolver}'}}],
          status: 0,
          createTime: '2021-02-03',
          updateTime: '2021-02-03'
        }
      ],


    };
  },
  created() {
  },
  methods: {
    getList() {
      let _that = this;
      _that.api({
        url: _that.baseUrl + "queryAll",
        method: "post",
        data: _that.queryInfo
      }).then(data => {
        if (data.success && data.body) {
          _that.totalCount = data.total;
          _that.tableData = data.body;
        }
      });
    },
    handleCreate() {
      this.dialogFormVisible = true;
    },
    handleUpdateStatus(){
    },
    handleUpdate(){
    },
    handleSubmit() {
      let _that = this;
      _that.api({
        url: _that.baseUrl + "queryAll",
        method: "post",
        data: _that.queryInfo
      }).then(data => {
        if (data.success && data.body) {
          _that.totalCount = data.total;
          _that.tableData = data.body;
        }
      });
    },
    handleSizeChange(val) {
      this.queryInfo.pageSize = val;
      this.handleFilter();
    },
    handleCurrentChange(val) {
      this.queryInfo.pageNum = val;
      this.getList();
    },
    handleFilter() {
      this.queryInfo.pageNum = 1;
      this.getList()
    }
  }
};
</script>

<style lang="scss">
body .el-table th.gutter {
  display: table-cell !important;
}

body .el-table colgroup.gutter {
  display: table-cell !important;
}
</style>
