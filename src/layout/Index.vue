<template>
  <el-container>
    <el-aside>
      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <layout-footer></layout-footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutHeader from "./LayoutHeader.vue";
import LayoutFooter from "./LayoutFooter.vue";
import LayoutAside from "./LayoutAside.vue";

const Component = defineComponent({
  components: {
    LayoutHeader,
    LayoutFooter,
    LayoutAside,
  },
  methods: {},
  created() {
    console.log("created");
  },
});
export default Component;
</script>
